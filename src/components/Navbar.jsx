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
    { label: "Despre Noi", href: "#about" },
    { label: "Omagiu", href: "#gogu-tribute" },
    { label: "Detalii Tehnice", href: "#features-detail" },
    { label: "Motive", href: "#reasons" },
    { label: "Contacte", href: "#contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${scrolled
          ? "bg-white/80 shadow-md shadow-blue-900/5"
          : "bg-transparent"
        }`}
    >
      {/* Am eliminat Grid-ul Holografic și Scanlines care erau specifice stilului dark */}

      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo-icon.png"
              alt="Sonic Logo"
              /* MODIFICARE: Umbră discretă în loc de neon glow */
              className="w-14 h-14 drop-shadow-sm transition-all duration-500 group-hover:scale-105"
            />
            {/* MODIFICARE: Inel discret în culoarea CTA */}
            <div className="absolute inset-0 rounded-full border border-[#0056B3]/20 group-hover:border-[#0056B3]/50 transition-all duration-500"></div>
          </div>

          {/* MODIFICARE: Text Logo în Deep Navy (fără gradient multicolor) */}
          <h1 className="text-xl font-bold tracking-wide text-[#1B263B]">
            SONIC TECHNOLOGY
          </h1>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-10 font-medium">
          {links.map((link, i) => (
            <li key={i} className="relative group">
              <a
                href={link.href}
                /* MODIFICARE: Text Navy, hover în albastru CTA */
                className="text-[#1B263B] hover:text-[#0056B3] transition-colors duration-300"
              >
                {link.label}
              </a>

              {/* MODIFICARE: Underline în culoarea CTA */}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#0056B3] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          /* MODIFICARE: Buton burger în culoarea Navy */
          className="md:hidden text-[#1B263B] text-3xl"
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
        /* MODIFICARE: Background alb/blue-ish pentru meniul mobil */
        className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden border-b border-[#D1D9E0]"
      >
        <ul className="flex flex-col items-center py-6 gap-4 text-[#1B263B] font-medium">
          {links.map((link, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={link.href}
                className="text-lg hover:text-[#0056B3] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* MODIFICARE: Divider-ul de jos devine o linie solidă foarte fină */}
      <div
        className={`absolute bottom-0 left-0 h-[1px] w-full bg-[#0056B3]/10 transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-0"
          }`}
      />
    </nav>
  );
}