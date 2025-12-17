/* eslint-disable no-unused-vars */
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer
      id="contacts"
      aria-labelledby="contacts-title"
      className="relative isolate overflow-hidden bg-black text-slate-100 py-30"
    >

      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.65] bg-[linear-gradient(to_right,rgba(56,189,248,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.22)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* SCANLINE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_3px] mix-blend-screen" />

      {/* PULSING ENERGY BORDER */}
      <div className="pointer-events-none absolute inset-0 border border-sky-400/20 rounded-3xl shadow-[0_0_80px_rgba(56,189,248,0.15)]" />

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-6">
        <h2
          id="contacts-title"
          className="relative text-4xl md:text-5xl font-extrabold text-white"
        >
          Contactează-ne

          {/* Gradient decorativ – ignorat de SR */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]"
          >
            Contactează-ne
          </span>
        </h2>

        <p className="text-slate-300 text-lg mt-4">
          Panoul nostru tehnic afișează informațiile principale pentru a lua legătura cu noi.
        </p>
      </div>

      {/* SONIC DASHBOARD PANEL */}
      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-14">
        {[
          {
            icon: <Mail aria-hidden="true" className="w-10 h-10 text-sky-300" />,
            title: "Email",
            text: "MyEmail@gmail.com",
          },
          {
            icon: <Phone aria-hidden="true" className="w-10 h-10 text-sky-300" />,
            title: "Telefon",
            text: "+40 123 456 789",
          },
          {
            icon: <MapPin aria-hidden="true" className="w-10 h-10 text-sky-300" />,
            title: "Adresă",
            text: "Str. Exemplu 123, București",
          },

        ].map((item, i) => (
          <motion.div
            key={i}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, delay: i * 0.15 }
            } className="relative p-10 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-sky-400/30 shadow-[0_0_40px_rgba(56,189,248,0.18)]"
          >
            {/* PANEL TOP STRIP */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 rounded-t-2xl" />

            {/* ICON */}
            <div
              aria-hidden="true"
              className="flex items-center justify-center h-20 w-20 mx-auto rounded-full bg-black/50 border border-sky-400/40 shadow-[0_0_25px_rgba(56,189,248,0.35)] mb-6"
            >
              {item.icon}
            </div>


            {/* TEXT */}
            <h3 className="text-xl font-semibold text-sky-300 mb-2 text-center tracking-wide">
              {item.title}
            </h3>

            <p className="text-slate-200 text-base md:text-lg leading-relaxed text-center">
              {item.text}
            </p>


            {/* SCANLINE ANIMATION */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.22)_1px,transparent_1px)] bg-[size:100%_8px] animate-pulse opacity-20 rounded-2xl" />

            {/* GLOW OUTLINE */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-sky-400/10 shadow-[0_0_25px_rgba(56,189,248,0.2)_inset]" />
          </motion.div>
        ))}
      </div>

      {/* BIG CTA */}
      <div className="text-center mt-20">
        <a
          href="mailto:MyEmail@gmail.com"
          className="
              inline-flex items-center justify-center
              min-h-[48px] min-w-[48px]
              px-10 py-4
              rounded-full
              bg-gradient-to-r from-sky-400 to-cyan-300
              text-base font-semibold text-slate-900
              shadow-lg

              hover:-translate-y-0.5
              active:scale-95
              transition-transform

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-sky-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
                       "
        >
          Trimite-ne un mesaj
        </a>



      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-sky-400/10 mt-20 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sonic Technology. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
