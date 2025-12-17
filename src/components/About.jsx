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
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden py-32 bg-[#EBF0F5] text-[#1B263B]"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto mb-28 max-w-6xl px-6 text-center md:px-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#576574]">
          Despre noi
        </p>

        {/* MODIFICARE: Titlul are acum culoarea CTA-ului (#0056B3) */}
        <h2
          id="about-heading"
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0056B3]"
        >
          Povestea din spatele Sonic Technology
        </h2>

        <div className="mx-auto mt-4 h-px w-24 bg-[#0056B3]/40" />

        <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-[#576574]">
          Fundamentată pe principii științifice vechi de un secol, reinterpretate
          prin cercetare modernă și pasiune. O poveste despre inovație și energia
          ascunsă în vibrațiile materiei.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-30 items-start">
        {/* LEFT – TEXT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-6"
        >
          <div className="rounded-2xl border border-[#D1D9E0] bg-white/60 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-lg">
            <h3 className="text-2xl sm:text-3xl md:text-[1.85rem] font-semibold text-[#1B263B]">
              Descriere Despre Noi
            </h3>

            <p className="mt-6 text-base sm:text-lg leading-relaxed sm:leading-loose text-[#1B263B]/90">
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

            <p className="mt-8 text-[#576574] text-sm max-w-md">
              Află Mai multe despre sursa noastra de inspiratie si motivul pentru care am ales sa facem acest proiect.
            </p>

            {/* CTA BUTTON - Mentinem culoarea #0056B3 */}
            <a
              href="#gogu-tribute"
              className="
                  inline-flex items-center justify-center mt-8 rounded-full
                  min-h-[44px] min-w-[44px]
                  bg-[#0056B3] px-8 py-3
                  text-sm sm:text-base font-semibold text-white
                  shadow-lg transition-all
                  hover:bg-[#004494] hover:-translate-y-0.5
                  
                  /* FOCUS ACCESIBIL */
                  focus-visible:outline-none 
                  focus-visible:ring-2 
                  focus-visible:ring-[#002D5E] 
                  focus-visible:ring-offset-2 
                  focus-visible:ring-offset-[#EBF0F5]
                "
            >
              Despre Gogu Constantinescu
            </a>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Inovație", "Știință", "Sustenabilitate"].map((label) => (
                <div
                  key={label}
                  className="rounded-full border border-[#0056B3]/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0056B3]"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT – SONIC RINGS (decorative) */}
        <motion.div
          className="order-2 mt-18 w-full md:order-none md:col-span-6 flex items-center justify-center"
        >
          <div className="mt-20 mb-10 relative w-[60%] max-w-sm">
            <div className="relative aspect-square" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  /* MODIFICARE: Cresterea opacitatii inelelor (de la /10 la /25) pentru vizibilitate sporita */
                  className="absolute left-1/2 top-1/2 rounded-full border-2 border-[#0056B3]/25"
                  style={{
                    height: `${60 + i * 35}%`,
                    width: `${60 + i * 35}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow:
                      i === 0
                        ? "0 0 30px rgba(0, 86, 179, 0.15) inset"
                        : "0 0 10px rgba(0, 86, 179, 0.05)",
                  }}
                />
              ))}

              <motion.div
                aria-hidden="true"
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [1, 0.6, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056B3] shadow-lg shadow-[#0056B3]/40"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="pointer-events-none mx-auto mt-24 w-[85%] max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0056B3]/30 to-transparent" />
      </div>
    </section>
  );
}