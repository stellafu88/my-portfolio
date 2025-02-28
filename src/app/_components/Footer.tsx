import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white font-semibold py-10">
      <div className="container mx-auto text-center">
        <div className="inline-block">
          <p className="flex items-center justify-center gap-2 pb-4 border-b border-black">
            Find me on
            <a
              href="https://www.linkedin.com/in/stellafu14/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700/60 hover:scale-105 transition-all"
            >
              <FaLinkedin size={25} />
            </a>
          </p>
          <p className="pt-4">
            &copy; 2025 Stella. Thank you for visiting my website.
          </p>
        </div>
      </div>
    </footer>
  );
}
