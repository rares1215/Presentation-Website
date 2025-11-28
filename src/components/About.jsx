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
          O companie construită pe cercetare, experiment și responsabilitate,
          cu ambiția clară de a transforma o teorie veche într-o soluție energetică nouă.
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
              Află cum funcționează produsul nostru și ce beneficii reale oferă.
            </p>

            <a
              href="#features-detail"
              className="inline-flex items-center mt-4 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Explorează Funcționarea
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative md:col-span-6 flex items-start justify-center pt-4"
        >
          <div className="relative w-[80%] max-w-md aspect-square md:mt-20 lg:mt-25">

            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full border border-sky-400/30"
                style={{
                  height: `${45 + i * 30}%`,
                  width: `${45 + i * 30}%`,
                  transform: "translate(-50%, -50%)",
                  boxShadow:
                    i === 0
                      ? "0 0 55px rgba(56,189,248,0.55), 0 0 25px rgba(56,189,248,0.35) inset"
                      : "0 0 35px rgba(56,189,248,0.15)",
                }}
              />
            ))}

            {/* CARD IN CENTER */}
            {/* CARD IN CENTER */}
            <div className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">

              {/* CURVED SONIC TECHNOLOGY — placed on 2nd big ring */}
              <svg
                className="absolute inset-0"
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
              >
                <defs>
                  {/* Path positioned on 2nd biggest circle */}
                  <path
                    id="topCurve"
                    d="
                    M 40 140
                    A 110 110 1 0 1 260 140
                  "
                    fill="transparent"
                  />
                </defs>

                <text
                  fill="url(#grad)"
                  fontSize="26"
                  fontWeight="900"
                  letterSpacing="3px"
                  style={{ filter: "drop-shadow(0 0 10px rgba(56,189,248,0.55))" }}
                >
                  <textPath
                    href="#topCurve"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    SONIC TECHNOLOGY
                  </textPath>
                </text>

                {/* Gradient */}
                <defs>
                  <linearGradient id="grad" gradientTransform="rotate(20)">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* CENTER PULSE POINT */}
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.85)]"></div>

              {/* LOWER TEXT — now inside a clean glowing card */}
              <div
                className="absolute left-1/2 text-center"
                style={{
                  top: "75%",                           // slightly lower inside 2nd bottom ring
                  transform: "translateX(-50%)",
                }}
              >
                <div className="
                              rounded-xl 
                              border border-sky-400/20 
                              bg-slate-900/60 
                              px-5 py-4 
                              backdrop-blur 
                              shadow-[0_0_20px_rgba(56,189,248,0.25)]
                              max-w-[100%] mx-auto
                            ">
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Fundamentată pe principii științifice vechi de un secol, reinterpretate
                    prin cercetare modernă și pasiune. O poveste despre inovație și energia
                    ascunsă în vibrațiile materiei.
                  </p>
                </div>
              </div>

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

