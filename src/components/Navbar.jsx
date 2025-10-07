// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import logoIcon from "../assets/logo-icon.png"; // ← doar simbolul logo-ului (placeholder)

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const links = ["About", "Features", "Reasons", "Contacts"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logoIcon}
            alt="Sonic Logo"
            className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-[0_0_12px_rgba(165,180,252,0.6)] hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.8)] transition-all duration-500"
          />
          <a href="#hero"><h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 hover:text-cyan-500 transition-colors duration-300">
            SONIC TECHNOLOGY
          </h2>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg shadow-lg transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 text-white font-medium gap-4">
          {links.map((link, idx) => (
            <li
              key={link}
              className={`transform transition-all duration-500 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-300 text-lg sm:text-xl py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


