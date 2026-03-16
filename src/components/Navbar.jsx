/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Configurație Limbi cu URL-uri directe (CDN) pentru a evita erorile 404 în producție
  const langData = [
    { id: "ro", label: "RO", flagUrl: "https://flagcdn.com/ro.svg" },
    { id: "en", label: "EN", flagUrl: "https://flagcdn.com/gb.svg" },
    { id: "fr", label: "FR", flagUrl: "https://flagcdn.com/fr.svg" },
    { id: "es", label: "ES", flagUrl: "https://flagcdn.com/es.svg" },
    { id: "de", label: "DE", flagUrl: "https://flagcdn.com/de.svg" },
    { id: "it", label: "IT", flagUrl: "https://flagcdn.com/it.svg" }
  ];

  const translations = {
    ro: { about: "Despre Noi", homage: "Omagiu", features: "Detalii Tehnice", reasons: "Motive", contacts: "Contacte" },
    en: { about: "About Us", homage: "Homage", features: "Technical Details", reasons: "Reasons", contacts: "Contacts" },
    fr: { about: "À Propos", homage: "Hommage", features: "Détails Techniques", reasons: "Raisons", contacts: "Contacts" },
    es: { about: "Nosotros", homage: "Homenaje", features: "Detalles Técnicos", reasons: "Motivos", contacts: "Contactos" },
    de: { about: "Über Uns", homage: "Hommage", features: "Technische Details", reasons: "Gründe", contacts: "Kontakt" },
    it: { about: "Chi Siamo", homage: "Omaggio", features: "Dettagli Tecnici", reasons: "Motivi", contacts: "Contatti" }
  };

  const currentLang = langData.find((l) => l.id === lang) || langData[0];
  const t = translations[lang] || translations["ro"];

  const links = [
    { label: t.about, href: "#about" },
    { label: t.homage, href: "#gogu-tribute" },
    { label: t.features, href: "#features-detail" },
    { label: t.reasons, href: "#reasons" },
    { label: t.contacts, href: "#contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${scrolled ? "bg-white/80 shadow-lg shadow-blue-900/5" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">

        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo-icon.png"
              alt="Sonic Logo"
              className="w-12 h-12 md:w-14 md:h-14 drop-shadow-sm transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border border-[#0056B3]/20 group-hover:border-[#0056B3]/50 transition-all duration-500"></div>
          </div>
          <h1 className="text-lg md:text-xl font-bold tracking-wide text-[#1B263B] hidden sm:block">
            SONIC TECHNOLOGY
          </h1>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 font-medium">
            {links.map((link, i) => (
              <li key={i} className="relative group">
                <a
                  href={link.href}
                  className="text-[#1B263B] hover:text-[#0056B3] transition-colors duration-300"
                >
                  {link.label}
                </a>
                <span className="absolute left-1/2 bottom-[-4px] h-[2px] w-0 bg-[#0056B3] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* LANGUAGE SELECTOR DESKTOP */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#D1D9E0] bg-white/60 text-[#1B263B] font-bold text-sm hover:bg-white transition-all shadow-sm group"
            >
              <img src={currentLang.flagUrl} alt={currentLang.id} className="w-5 h-4 rounded-sm shadow-sm object-cover" />
              <span className="uppercase tracking-wider">{currentLang.id}</span>
              <ChevronDown className={`w-4 h-4 text-[#0056B3] transition-transform duration-300 ${showLangMenu ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute right-0 mt-3 w-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[#D1D9E0] overflow-hidden p-1.5"
                >
                  <div className="max-h-80 overflow-y-auto">
                    {langData.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => {
                          setLang(l.id);
                          setShowLangMenu(false);
                        }}
                        className={`flex items-center gap-3 px-3 py-2 w-full rounded-lg transition-all duration-200 ${lang === l.id ? "bg-blue-50 text-[#0056B3]" : "hover:bg-gray-100"
                          }`}
                      >
                        <img src={l.flagUrl} alt={l.id} className="w-5 h-4 rounded-sm shadow-sm object-cover" />
                        <span className="font-bold text-sm tracking-tighter">{l.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#1B263B] p-2 hover:bg-blue-50 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-[#D1D9E0] overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col items-center py-8 gap-6 text-[#1B263B] font-semibold">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-xl hover:text-[#0056B3]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="flex flex-wrap gap-4 pt-6 border-t border-[#EBF0F5] w-full justify-center mt-2 px-4">
                {langData.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      setLang(l.id);
                      setMenuOpen(false);
                    }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${lang === l.id ? "bg-[#0056B3]/10 ring-2 ring-[#0056B3]" : "bg-gray-50 opacity-60"
                      }`}
                  >
                    <img src={l.flagUrl} alt={l.id} className="w-8 h-6 rounded-sm shadow-sm object-cover" />
                    <span className="text-[10px] font-black uppercase">{l.id}</span>
                  </button>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}