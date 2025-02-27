import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-[auto_1fr] items-center bg-purple-900"
    >
      <div className="flex flex-col gap-4 pl-8">
        <a
          href="https://github.com/stellafu88"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-300 transition-colors"
        >
          <FaGithub size={25} />
        </a>

        <a
          href="https://www.linkedin.com/in/stellafu14/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-300 transition-colors"
        >
          <FaLinkedin size={25} />
        </a>
      </div>

      <div className="text-center">
        <h1 className="text-6xl font-bold">Hi, I&apos;m Stella (Jiani) Fu</h1>
        <p className="text-2xl mt-4">
          A Passionate and Result-Oriented Web Developer building Websites and
          Web Applications
        </p>

        <Link
          href="#about"
          className="cursor-pointer mt-8 inline-block bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-400 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
