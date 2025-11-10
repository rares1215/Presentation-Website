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

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLangChange = (newLang) => {
    if (newLang === lang) return;
    setLang(newLang);
    if (newLang === "RO") {
      try { videoRoRef.current?.play?.(); } catch {/* empty */}
      videoEnRef.current?.pause?.();
    } else {
      try { videoEnRef.current?.play?.(); } catch {/* empty */}
      videoRoRef.current?.pause?.();
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden py-24 md:py-32 text-slate-100"
      aria-label="Despre Noi"
      style={{
        background: "linear-gradient(135deg, #0369a1 0%, #0c4a6e 50%, #082f49 100%)",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto mb-16 max-w-7xl px-6 text-center md:mb-20 md:px-10"
      >
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Despre Noi
          </span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-sky-400" />
      </motion.div>

      {/* Content Layout */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 lg:gap-16"
        >
          {/* Text Column */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_10px_40px_rgba(14,165,233,0.15)] backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Descriere Despre Noi
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
                Suntem o companie fondată din pasiune și din dorința de a lăsa după noi o lume mai bună decât cea în care ne-am născut. Totul a început de la o carte, care ne prezenta o teorie surprinzătoare în ceea ce privește un domeniu al fizicii legat de lichide. Deși avea în jur de 100 de ani vechime, teoria deschidea ușa către multe aplicații și ne-a captat atenția. La început a fost mai mult o joacă, dar am simțit că acolo există ceva ce putea produce o schimbare și am hotărât să ne apucăm de studiu. Treptat am început să înțelegem anumite lucruri, să facem experimente care ne-au validat principiul ce stă la baza primului nostru produs și ne-au dat curajul de a merge mai departe.
              </p>

              {/* Highlights */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["Inovație", "Știință", "Sustenabilitate"].map((label, i) => (
                  <div key={i} className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Column */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900/40 shadow-[0_10px_50px_rgba(14,165,233,0.25)] backdrop-blur-xl">
              {/* Language Buttons */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                {["RO", "EN"].map((code) => (
                  <button
                    key={code}
                    onClick={() => handleLangChange(code)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                      lang === code
                        ? "bg-cyan-400 text-slate-900 shadow-lg"
                        : "bg-slate-800/60 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              {/* Videos with fixed height + poster fallback */}
              <div className="relative aspect-video w-full">
                <video
                  ref={videoRoRef}
                  src={videoRo}
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  poster="/heroimg.png"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    lang === "RO" ? "opacity-100 z-10" : "opacity-0 z-0"
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
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    lang === "EN" ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <p className="mt-4 text-center text-sm text-slate-300">
              Material video explicativ — RO / EN
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom line */}
      <div className="pointer-events-none mx-auto mt-16 w-[85%] max-w-7xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>
    </section>
  );
}