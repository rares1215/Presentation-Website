/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (inView && isPlaying && !prefersReducedMotion) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
    }
  }, [inView, isPlaying, prefersReducedMotion]);

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate min-h-[90vh] md:min-h-screen overflow-hidden bg-[#0A1120]"
      aria-label="Sonic Technology – Inovație în tehnologia sonicității"
    >
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        aria-hidden="true"
        className={`absolute inset-0 -z-30 h-full w-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-50" : "opacity-0"
        }`}
        playsInline muted loop preload="auto" poster="/heroimg.png"
        onCanPlayThrough={() => setLoaded(true)}
      >
        <source src="/Background1.webm" type="video/webm" />
        <source src="/Background1-optimized.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY PROFESIONAL */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0A1120] via-[#0A1120]/95 to-transparent lg:via-[#0A1120]/80"
      />

      <div className="relative mx-auto flex min-h-[90vh] md:min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-6 py-20 lg:grid lg:grid-cols-12 lg:px-10 lg:text-left text-center">
        
        {/* CONȚINUT TEXT (Stânga) */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0056B3]/30 bg-[#0056B3]/10 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
            Eficiență prin Sonicitate
          </div>

          <h1 className="mt-6 font-extrabold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.1]">
            Sonic <span className="text-[#0056B3]">Technology</span>
          </h1>

          <p className="mt-6 max-w-xl leading-relaxed text-slate-200 text-base md:text-lg font-medium opacity-90">
            „Cunoscutul este finit, necunoscutul este infinit; din punct de vedere intelectual ne aflăm pe o mică insulă în mijlocul unui ocean ilimitabil al inexplicabilității.”
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contacts"
              className="h-12 px-10 bg-white/5 backdrop-blur-md border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center focus-visible:ring-4 focus-visible:ring-white"
            >
              Contactează-ne
            </a>
          </div>
        </motion.div>

        {/* ELEMENT VIZUAL CU BUTON MINIMALIST (Dreapta) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Inele sonice rafinate */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                aria-hidden="true"
                className={`absolute rounded-full border border-[#0056B3]/40 ${!prefersReducedMotion ? 'animate-[ping_5s_linear_infinite]' : ''}`}
                style={{
                  height: `${65 + i * 20}%`,
                  width: `${65 + i * 20}%`,
                  animationDelay: `${i * 1.2}s`
                }}
              />
            ))}
            
            {/* BUTON DESCOPERĂ TRANSPARENT ȘI MICȘORAT */}
            <a
              href="#about"
              className="
                relative z-10 flex items-center justify-center 
                w-28 h-28 md:w-32 md:h-32 
                rounded-full 
                bg-white/5 backdrop-blur-sm
                border border-[#0056B3]/50
                text-white transition-all duration-500
                hover:bg-[#0056B3]/20 hover:border-[#0056B3]
                hover:shadow-[0_0_30px_rgba(0,86,179,0.3)]
                group focus:outline-none focus:ring-2 focus:ring-[#0056B3]
              "
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] group-hover:scale-110 transition-transform">
                Descoperă
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* FOOTER HERO */}
      <div className="absolute bottom-8 w-full px-10 flex justify-between items-end">
        <button
          onClick={toggleVideo}
          className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all focus:ring-2 focus:ring-[#0056B3]"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <div className="w-10 hidden md:block" />
      </div>
    </section>
  );
}