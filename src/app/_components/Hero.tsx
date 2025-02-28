import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-t text-white from-white to-purple-900 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold">Hi, I&apos;m Stella</h1>
        <p className="text-2xl mt-4">
          A Passionate and Result-Oriented Web Developer building Websites and
          Web Applications
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/stellafu88"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/30 hover:scale-105 transition-all"
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/stellafu14/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/30 hover:scale-105 transition-all"
          >
            <FaLinkedin size={25} />
          </a>
        </div>

        <Link
          href="#about"
          className="inline-block font-semibold mt-8 px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
