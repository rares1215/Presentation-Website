import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import videoRo from "../assets/video_ro.mp4";
import videoEn from "../assets/video_en.mp4";
import WaveSeparator from "./WaveSeparator";

function About() {
  const [lang, setLang] = useState("RO");
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const videoRoRef = useRef(null);
  const videoEnRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLangChange = (newLang) => {
    if (newLang === lang) return;
    setLang(newLang);
    if (newLang === "RO") {
      try { videoRoRef.current?.play?.(); } catch {}
      videoEnRef.current?.pause?.();
    } else {
      try { videoEnRef.current?.play?.(); } catch {}
      videoRoRef.current?.pause?.();
    }
  };

  return (
    <>
      <WaveSeparator />

      <section
        id="about"
        ref={sectionRef}
        className="relative py-28 bg-gradient-to-b from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-[#E0E6EA] overflow-hidden"
      >
        {/* Subtle Lagoon Glow */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#0077A6]/30 blur-[160px] rounded-full -translate-y-1/3" />

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00B4CC] to-[#0077A6] bg-clip-text text-transparent">
            Despre Noi
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-[#00B4CC] to-[#0077A6] rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 bg-[#1B263B]/80 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-[#2E3A4F] shadow-[0_8px_40px_rgba(0,119,166,0.15)]"
          >
            {/* Text Column */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#F8FAFC]">
                Descriere Despre Noi
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#E0E6EA]/90 leading-relaxed">
                Suntem o companie fondată din pasiune și din dorința de a lăsa după noi o lume mai bună decât cea în care ne-am născut. Totul a început de la o carte, care ne prezenta o teorie surprinzătoare în ceea ce privește un domeniu al fizicii legat de lichide. Deși avea în jur de 100 de ani vechime, teoria deschidea ușa către multe aplicații și ne-a captat atenția. La început a fost mai mult o joacă, dar am simțit că acolo există ceva ce putea produce o schimbare și am hotărât să ne apucăm de studiu. Treptat am început să înțelegem anumite lucruri, să facem experimente care ne-au validat principiul ce stă la baza primului nostru produs și ne-au dat curajul de a merge mai departe.
              </p>
            </div>

            {/* Video Column */}
            <div className="relative md:w-1/2 h-72 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-[#2E3A4F]">
              {/* Language Buttons */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                {['RO', 'EN'].map((code) => (
                  <button
                    key={code}
                    onClick={() => handleLangChange(code)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border ${
                      lang === code
                        ? 'bg-gradient-to-r from-[#0077A6] to-[#00B4CC] text-white border-transparent'
                        : 'bg-[#1B263B]/60 text-[#E0E6EA] border-[#00B4CC]/20 hover:bg-[#1B263B]/80'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              {/* Videos */}
              <video
                ref={videoRoRef}
                src={videoRo}
                controls
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  lang === 'RO' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              />
              <video
                ref={videoEnRef}
                src={videoEn}
                controls
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  lang === 'EN' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              />

              {/* Subtle Lagoon Glow */}
              <div className="absolute inset-0 ring-1 ring-[#00B4CC]/10 rounded-3xl shadow-[0_0_40px_rgba(0,180,204,0.2)] pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Decorative Gradient Blob */}
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-tr from-[#0077A6] to-[#00B4CC] opacity-20 rounded-full blur-3xl"
        />
      </section>
    </>
  );
}

export default About;
