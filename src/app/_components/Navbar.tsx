import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="top-0 w-full bg-white p-8 z-50">
      <div className="container mx-auto flex justify-between">
        <a href="#home" className="text-2xl font-bold hover:text-gray-700/60 transition-color">
          Stella
        </a>
        <div className="flex space-x-4 text-lg font-bold">
          <Link
            href="#about"
            className="cursor-pointer hover:text-gray-700/60 transition-color"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="cursor-pointer hover:text-gray-700/60 transition-color"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="cursor-pointer hover:text-gray-700/60 transition-color"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="cursor-pointer hover:text-gray-700/60 transition-color"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
