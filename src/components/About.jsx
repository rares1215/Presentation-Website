/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden py-32 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900 text-slate-100"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto mb-28 max-w-6xl px-6 text-center md:px-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Despre noi
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
          Povestea din spatele Sonic Technology
        </h2>

        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

        <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-slate-400">
          Fundamentată pe principii științifice vechi de un secol, reinterpretate
          prin cercetare modernă și pasiune. O poveste despre inovație și energia
          ascunsă în vibrațiile materiei.
        </p>
      </motion.div>

      {/* MAIN 2-COLUMN LAYOUT */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-30 items-start">

        {/* LEFT – TEXT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-6"
        >
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/60 backdrop-blur-lg">
            <h3 className="text-2xl sm:text-3xl md:text-[1.85rem] font-semibold text-white">
              Descriere Despre Noi
            </h3>

            <p className="mt-6 text-base leading-relaxed text-slate-100 sm:text-lg">
              Suntem o companie fondată din pasiune și din dorința de a lăsa
              după noi o lume mai bună decât cea în care ne-am născut. Totul a
              început de la o carte, care ne prezenta o teorie surprinzătoare
              în ceea ce privește un domeniu al fizicii legat de lichide. Deși
              avea în jur de 100 de ani vechime, teoria deschidea ușa către
              multe aplicații și ne-a captat atenția.
              <br />
              <br />
              La început a fost mai mult o joacă, dar am simțit că acolo
              exista ceva ce putea produce o schimbare și am hotărât să ne
              apucăm de studiu. Treptat am început să înțelegem anumite
              lucruri, să facem experimente care ne-au validat principiul ce
              stă la baza primului nostru produs și ne-au dat curajul de a
              merge mai departe.
            </p>

            <p className="mt-8 text-slate-400 text-sm max-w-md">
              Află Mai multe despre sursa noastra de inspiratie si motivul pentru care am ales sa facem acest proiect.
            </p>

            <a
              href="#gogu-tribute"
              className="inline-flex items-center mt-4 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Despre Gogu Constantinescu
            </a>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Inovație", "Știință", "Sustenabilitate"].map((label) => (
                <div
                  key={label}
                  className="rounded-full border border-sky-400/30 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-300"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT – SONIC RINGS + CENTER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="order-2 mt-18 w-full md:order-none md:col-span-6 lg:col-span-6 flex items-center justify-center"
        >
          <div className=" mt-20 mb-10 md:mb-auto relative w-[60%] max-w-sm sm:w-[40%] md:w-[50%] lg:w-[60%]">
            {/* Concentric sonic rings */}
            <div className="relative aspect-square">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 rounded-full border border-sky-500/20"
                  style={{
                    height: `${60 + i * 35}%`,
                    width: `${60 + i * 35}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow: i === 0 ? "0 0 25px rgba(56,189,248,0.4) inset" : undefined,
                  }}
                />
              ))}
              {/* Central pulse */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.8, 0.4, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400"
              />
            </div>
          </div>
        </motion.div>
      </div >

      {/* BOTTOM DIVIDER */}
      < div className="pointer-events-none mx-auto mt-24 w-[85%] max-w-6xl" >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />
      </div >
    </section >
  );
}

