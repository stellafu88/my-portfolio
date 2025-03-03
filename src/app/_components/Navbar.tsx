import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white p-4 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <a href="#home" className="text-lg font-bold hover:text-gray-700/60 transition-color mb-4 sm:mb-0 sm:mr-4">
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
