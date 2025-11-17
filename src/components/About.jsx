/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import videoRo from "../assets/video_ro.mp4";
import videoEn from "../assets/video_en.mp4";

export default function About() {
  const [lang, setLang] = useState("RO");
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const videoRoRef = useRef(null);
  const videoEnRef = useRef(null);

  // reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // language change
  const handleLangChange = (newLang) => {
    if (newLang === lang) return;
    setLang(newLang);

    if (newLang === "RO") {
      try {
        videoRoRef.current?.play?.();
      } catch (e) {/* empty */}
      videoEnRef.current?.pause?.();
    } else {
      try {
        videoEnRef.current?.play?.();
      } catch (e) {/* empty */}
      videoRoRef.current?.pause?.();
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden py-24 md:py-32 text-slate-100"
    >
      {/* background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(60%_55%_at_15%_20%,rgba(148,163,184,0.16),transparent)]" />

      {/* sonic rings */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-50">
        <div className="relative aspect-square w-[55rem] max-w-[75vw]">
          {[0, 1, 2].map((i) => {
            const base = 60;  // rings bigger
            const inc = 22;   // more space between them
            const size = base + i * inc;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full border border-sky-300/10"
                style={{
                  width: `${size}%`,
                  height: `${size}%`,
                  transform: "translate(-50%, -50%)",
                  boxShadow:
                    i === 0
                      ? "0 0 40px rgba(56,189,248,0.25) inset"
                      : "none",
                }}
              />
            );
          })}

          <motion.div
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: [0.9, 1.02, 0.9], opacity: [0.7, 0.45, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/90 shadow-[0_0_16px_rgba(56,189,248,0.65)]"
          />
        </div>
      </div>

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto mb-16 max-w-6xl px-6 text-center md:mb-20 md:px-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Despre noi
        </p>

        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
            Fundamentul științific al Sonic Technology
          </span>
        </h2>

        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

        <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-400 sm:text-base">
          O companie construită pe cercetare, experiment și responsabilitate –
          cu ambiția clară de a transforma o teorie veche într-o soluție energetică nouă.
        </p>
      </motion.div>

      {/* content */}
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16"
        >
          {/* description */}
          <div className="md:col-span-1 lg:col-span-7">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-7 shadow-xl shadow-slate-950/60 backdrop-blur">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl md:text-[1.85rem]">
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
          </div>

          {/* video */}
          <div className="md:col-span-1 lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full h-full max-w-xl rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-xl shadow-slate-950/70 backdrop-blur">

              {/* lang toggle */}
              <div className="absolute right-4 top-4 z-40 flex items-center gap-1 rounded-full border border-slate-600/70 bg-slate-900/80 px-1 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                {["RO", "EN"].map((code) => (
                  <button
                    key={code}
                    onClick={() => handleLangChange(code)}
                    className={`rounded-full px-3 py-1 font-semibold transition-all ${
                      lang === code
                        ? "bg-sky-400 text-slate-950 shadow-sm"
                        : "bg-transparent text-slate-300 hover:bg-slate-800/80"
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              {/* video frame */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">

                <div className="pointer-events-none absolute inset-5 z-10 border border-dashed border-slate-600/40" />
                <div className="pointer-events-none absolute left-1/2 top-5 z-10 h-[calc(100%-2.5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-slate-500/0 via-slate-500/35 to-slate-500/0" />
                <div className="pointer-events-none absolute left-5 top-1/2 z-10 h-px w-[calc(100%-2.5rem)] -translate-y-1/2 bg-gradient-to-r from-slate-500/0 via-slate-500/35 to-slate-500/0" />

                <video
                  ref={videoRoRef}
                  src={videoRo}
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  poster="/heroimg.png"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    lang === "RO" ? "opacity-100 z-30" : "opacity-0 z-10"
                  }`}
                />

                <video
                  ref={videoEnRef}
                  src={videoEn}
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  poster="/heroimg.png"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    lang === "EN" ? "opacity-100 z-30" : "opacity-0 z-10"
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 z-5 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* footer */}
              <div className="flex items-center justify-between border-t border-slate-700/70 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <span>Material video explicativ</span>
                <span className="text-slate-300">{lang}</span>
              </div>
            </div>

            {/* caption */}
            <p className="mt-4 text-center text-xs text-slate-400">
              Context vizual pentru înțelegerea principiilor sonicității aplicate.
            </p>
          </div>
        </motion.div>
      </div>

      {/* bottom line */}
      <div className="pointer-events-none mx-auto mt-16 w-[85%] max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />
      </div>
    </section>
  );
}
