/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Reasons", href: "#reasons" },
    { label: "Contacts", href: "#contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-lg ${
        scrolled
          ? "bg-black/70 shadow-[0_0_25px_rgba(56,189,248,0.25)]"
          : "bg-transparent"
      }`}
    >
      {/* Holographic grid under navbar */}
      <div className={`absolute inset-0 -z-10 transition-opacity duration-500 ${
          scrolled ? "opacity-40" : "opacity-0"
        } bg-[linear-gradient(to_right,rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.12)_1px,transparent_1px)] bg-[size:40px_40px]`} />

      {/* Scanline overlay */}
      <div className={`absolute inset-0 -z-10 transition-opacity duration-500 ${
          scrolled ? "opacity-30" : "opacity-0"
        } bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_3px]`} />

      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo-icon.png"
              alt="Sonic Logo"
              className="w-14 h-14 drop-shadow-[0_0_12px_rgba(56,189,248,0.45)] transition-all duration-500 group-hover:drop-shadow-[0_0_22px_rgba(56,189,248,0.8)]"
            />
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border border-sky-400/40 group-hover:border-sky-300/80 transition-all duration-500"></div>
          </div>

          <h1 className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400">
            SONIC TECHNOLOGY
          </h1>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-10 font-medium">
          {links.map((link, i) => (
            <li key={i} className="relative group">
              <a
                href={link.href}
                className="text-slate-200 hover:text-sky-300 transition-colors duration-300"
              >
                {link.label}
              </a>

              {/* Active hover underline */}
              <span className="absolute left-1/2 bottom-0 h-px w-0 bg-gradient-to-r from-sky-400 to-cyan-300 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-slate-200 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden bg-black/90 backdrop-blur-xl shadow-lg overflow-hidden"
      >
        <ul className="flex flex-col items-center py-6 gap-4 text-slate-200 font-medium">
          {links.map((link, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={link.href}
                className="text-lg hover:text-sky-300 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Bottom neon border */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400/70 to-transparent transition-all duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </nav>
  );
}
