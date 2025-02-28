import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-b from-sky-200 to-purple-900 overflow-hidden"
    >
      {/* Nature Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-emerald-800 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-96 w-full bg-[url('/trees.svg')] bg-repeat-x bg-bottom opacity-90" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl font-bold text-white text-center">
            Hi, I&apos;m Stella (Jiani) Fu
          </h1>
          <p className="text-2xl text-white/90 text-center max-w-2xl">
            A Passionate and Result-Oriented Web Developer building Websites and
            Web Applications
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/stellafu88"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors p-2 bg-white/10 rounded-full"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/stellafu14/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors p-2 bg-white/10 rounded-full"
            >
              <FaLinkedin size={25} />
            </a>
          </div>

          <Link
            href="#about"
            className="mt-8 px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full 
            transition-all transform hover:scale-105 backdrop-blur-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
