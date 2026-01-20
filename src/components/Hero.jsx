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
      className="relative isolate min-h-[90vh] md:min-h-screen overflow-hidden bg-[#EBF0F5]" 
      aria-label="Sonic Technology – Inovație"
    >
      {/* VIDEO DE FUNDAL CU MIX-BLEND PENTRU ASPECT UNIFICAT */}
      <video
        ref={videoRef}
        aria-hidden="true"
        className={`absolute inset-0 -z-30 h-full w-full object-cover mix-blend-multiply transition-opacity duration-1000 ${
          loaded ? "opacity-40" : "opacity-0"
        }`}
        playsInline muted loop preload="auto" poster="/heroimg.png"
        onCanPlayThrough={() => setLoaded(true)}
      >
        <source src="/Background1-optimized.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY GRADIENT PENTRU LIZIBILITATE PE FUNDAL DESCHIS */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#EBF0F5] via-[#EBF0F5]/80 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[90vh] md:min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-6 py-20 lg:grid lg:grid-cols-12 lg:px-10 lg:text-left text-center">
        
        {/* TEXT - ACUM ÎNCHIS LA CULOARE (NAVY) */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0056B3]/20 bg-[#0056B3]/5 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#0056B3]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#0056B3] animate-pulse" />
            Eficiență prin Sonicitate
          </div>

          <h1 className="mt-6 font-extrabold tracking-tight text-[#1B263B] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.1]">
            Sonic <span className="text-[#0056B3]">Technology</span>
          </h1>

          <p className="mt-6 max-w-xl leading-relaxed text-[#455361] text-base md:text-lg font-medium">
            „Cunoscutul este finit, necunoscutul este infinit; din punct de vedere intelectual ne aflăm pe o mică insulă în mijlocul unui ocean ilimitabil al inexplicabilității.”
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contacts"
              className="h-12 px-10 bg-[#0056B3] text-white text-sm font-bold rounded-full shadow-md hover:bg-[#004494] transition-all flex items-center justify-center focus-visible:ring-4 focus-visible:ring-[#0056B3]/50"
            >
              Contactează-ne
            </a>
          </div>
        </motion.div>

        {/* VIZUAL - BUTON DESCOPERĂ MINIMALIST PE FUNDAL DESCHIS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Inele sonice - Albastru mai clar pentru contrast */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                aria-hidden="true"
                className={`absolute rounded-full border border-[#0056B3]/20 ${!prefersReducedMotion ? 'animate-[ping_6s_linear_infinite]' : ''}`}
                style={{
                  height: `${65 + i * 20}%`,
                  width: `${65 + i * 20}%`,
                  animationDelay: `${i * 1.5}s`
                }}
              />
            ))}
            
            <a
              href="#about"
              className="
                relative z-10 flex items-center justify-center 
                w-28 h-28 md:w-32 md:h-32 
                rounded-full 
                bg-white shadow-lg
                border border-[#0056B3]/10
                text-[#1B263B] transition-all duration-500
                hover:shadow-xl hover:scale-105
                group focus:outline-none focus:ring-2 focus:ring-[#0056B3]
              "
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#0056B3]">
                Descoperă
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* FOOTER - CONTROL ȘI SCROLL ADAPTAT */}
      <div className="absolute bottom-8 w-full px-10 flex justify-between items-end">
        <button
          onClick={toggleVideo}
          className="p-3 bg-white/50 backdrop-blur-md border border-[#0056B3]/10 rounded-lg text-[#0056B3]/40 hover:text-[#0056B3] transition-all"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        
        <div className="w-10 hidden md:block" />
      </div>
    </section>
  );
}