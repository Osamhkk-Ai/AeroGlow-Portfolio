import * as React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function GlassNav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState("Home");

  const links = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Achievements",
    "Certificates",
    "Contact",
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-lg bg-gradient-to-r from-cyan-300/50 via-blue-200/40 to-purple-200/30 dark:from-transparent dark:via-black/30 dark:to-black/30 shadow-md border-b border-white/10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:px-6 md:py-3">

          {/* Logo */}
          <h1 className="text-cyan-700 dark:text-cyan-400 text-sm md:text-lg font-semibold tracking-wide">
            Osama Alghamdi
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={link === "Home" ? "#hero" : `#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(link);
                    const targetId = link === "Home" ? "hero" : link.toLowerCase();
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`transition-all duration-300 ${active === link
                    ? "text-cyan-600 border-b-2 border-cyan-600 dark:text-cyan-400 dark:border-cyan-400"
                    : "text-cyan-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300"
                    }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex items-center space-x-3 md:space-x-4">
              <a
                href="https://github.com/Osamhkk-Ai"
                target="_blank"
                className="hover:text-cyan-600 text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-400 transition inline-block p-1"
              >
                <FiGithub size={18} className="translate-y-[11px] md:translate-y-0" />
              </a>
              <a
                href="https://linkedin.com/in/osama-alghamdi-4aa902302"
                target="_blank"
                className="hover:text-cyan-600 text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-400 transition inline-block p-1"
              >
                <FiLinkedin size={18} className="translate-y-[11px] md:translate-y-0" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                className="hover:text-cyan-600 text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-400 transition inline-block p-1"
              >
                <FiTwitter size={18} className="translate-y-[11px] md:translate-y-0" />
              </a>
            </div>

            {/* Resume Button */}
            <button
              onClick={() => window.open('/api/download-cv', '_blank')}
              className="px-2 py-1 text-xs md:px-3 md:py-1 md:text-base bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 rounded-lg hover:bg-cyan-500/40 transition flex items-center justify-center cursor-pointer"
            >
              Resume
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-cyan-700 dark:text-cyan-400 text-2xl pr-2 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide from right with smooth animation */}
      <div
        className={`md:hidden fixed top-[60px] right-0 bottom-0 w-[260px] bg-black/90 backdrop-blur-lg shadow-2xl transform transition-all duration-300 ease-in-out z-[90] ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
      >
        <ul className="flex flex-col py-4 px-3 space-y-2">
          {links.map((link) => (
            <li key={link}>
              <a
                href={link === "Home" ? "#hero" : `#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(link);
                  setMenuOpen(false);
                  const targetId = link === "Home" ? "hero" : link.toLowerCase();
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`block px-4 py-2 rounded-lg text-sm transition-all ${active === link
                  ? "bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400"
                  : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300"
                  }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-black/50 z-[80]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
