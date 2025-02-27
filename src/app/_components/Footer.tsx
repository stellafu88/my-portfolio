import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-950 py-10">
      <div className="container mx-auto text-center">
        <div className="inline-block">
          <p className="flex items-center justify-center gap-2 pb-4 border-b border-white">
            Find me on
            <a
              href="https://www.linkedin.com/in/stellafu14/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <FaLinkedin size={25} />
            </a>
          </p>
          <p className="pt-4">
            &copy; 2025 Stella (Jiani) Fu. Thank you for visiting my website.
          </p>
        </div>
      </div>
    </footer>
  );
}
