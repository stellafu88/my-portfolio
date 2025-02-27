import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000;
const MAX_EMAILS_PER_IP = 3;

const emailLogs = new Map<string, number[]>();

const cleanup = () => {
  const now = Date.now();
  for (const [ip, timestamps] of emailLogs.entries()) {
    const filtered = timestamps.filter(
      (time) => now - time < RATE_LIMIT_WINDOW
    );
    if (filtered.length === 0) {
      emailLogs.delete(ip);
    } else {
      emailLogs.set(ip, filtered);
    }
  }
};

const isRateLimited = (ip: string): boolean => {
  cleanup();
  const now = Date.now();
  const timestamps = emailLogs.get(ip) || [];
  const recentEmails = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  );
  if (recentEmails.length >= MAX_EMAILS_PER_IP) {
    return true;
  }

  emailLogs.set(ip, [...recentEmails, now]);
  return false;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const containsSuspiciousContent = (content: string): boolean => {
  const suspiciousPatterns = [/<script/i, /javascript:/i, /onclick/i];

  return suspiciousPatterns.some((pattern) => pattern.test(content));
};

export async function POST(req: Request) {
  try {
    const headersList = headers();
    const forwardedFor = (await headersList).get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0] || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    if (containsSuspiciousContent(message) || containsSuspiciousContent(name)) {
      return NextResponse.json({ error: "Invalid content" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        IP: ${ip}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>IP:</strong> ${ip}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
