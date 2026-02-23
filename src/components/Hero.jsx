/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Pause } from "lucide-react";

// DICȚIONARUL DE TRADUCERI HERO
const heroTranslations = {
  ro: {
    badge: "Eficiență prin Sonicitate",
    titleMain: "Sonic",
    titleAccent: "Technology",
    quote: "„Cunoscutul este finit, necunoscutul este infinit; din punct de vedere intelectual ne aflăm pe o mică insulă în mijlocul unui ocean ilimitabil al inexplicabilității.”",
    contactBtn: "Contactează-ne",
    discoverBtn: "Descoperă",
    videoPause: "Oprește video",
    videoPlay: "Pornește video"
  },
  en: {
    badge: "Efficiency through Sonics",
    titleMain: "Sonic",
    titleAccent: "Technology",
    quote: "“The known is finite, the unknown infinite; intellectually we stand on a small island in the midst of an illimitable ocean of inexplicability.”",
    contactBtn: "Contact Us",
    discoverBtn: "Discover",
    videoPause: "Pause video",
    videoPlay: "Play video"
  },
  fr: {
    badge: "Efficacité par la Sonicité",
    titleMain: "Sonic",
    titleAccent: "Technology",
    quote: "« Le connu est fini, l'inconnu est infini ; intellectuellement, nous nous tenons sur une petite île au milieu d'un océan illimité d'inexplicabilité. »",
    contactBtn: "Contactez-nous",
    discoverBtn: "Découvrir",
    videoPause: "Arrêter la vidéo",
    videoPlay: "Lire la vidéo"
  },
  es: {
    badge: "Eficiencia a través de la Sónica",
    titleMain: "Sonic",
    titleAccent: "Technology",
    quote: "“Lo conocido es finito, lo desconocido es infinito; intelectualmente estamos en una pequeña isla en medio de un océano ilimitado de inexplicabilidad.”",
    contactBtn: "Contáctanos",
    discoverBtn: "Descubrir",
    videoPause: "Pausar video",
    videoPlay: "Reproducir video"
  }
};

export default function Hero({ lang = "ro" }) {
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Selectăm traducerile
  const t = heroTranslations[lang] || heroTranslations["ro"];

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
      aria-label="Sonic Technology"
    >
      <video
        ref={videoRef}
        aria-hidden="true"
        className={`absolute inset-0 -z-30 h-full w-full object-cover mix-blend-multiply transition-opacity duration-1000 ${loaded ? "opacity-25" : "opacity-0"
          }`}
        playsInline muted loop preload="auto" poster="/heroimg.png"
        onCanPlayThrough={() => setLoaded(true)}
      >
        <source src="/Background1-optimized.mp4" type="video/mp4" />
      </video>

      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-r from-[#EBF0F5] via-[#EBF0F5]/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[90vh] md:min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-6 py-20 lg:grid lg:grid-cols-12 lg:px-10 lg:text-left text-center">

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0056B3]/20 bg-[#0056B3]/5 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#0056B3]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#0056B3] animate-pulse" />
            {t.badge}
          </div>

          <h1 className="mt-6 font-extrabold tracking-tight text-[#1B263B] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.1]">
            {t.titleMain} <span className="text-[#0056B3]">{t.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl leading-relaxed text-[#37474F] text-base md:text-lg font-semibold italic">
            {t.quote}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contacts"
              className="h-12 px-10 bg-[#0056B3] text-white text-sm font-bold rounded-full shadow-md hover:bg-[#004494] hover:-translate-y-0.5 transition-all flex items-center justify-center focus-visible:ring-4 focus-visible:ring-[#0056B3]/50"
            >
              {t.contactBtn}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
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
              className="relative z-10 flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-white shadow-lg border border-[#0056B3]/10 text-[#1B263B] transition-all duration-500 hover:scale-105 group"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#0056B3]">
                {t.discoverBtn}
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 w-full px-10 flex justify-between items-end">
        <button
          onClick={toggleVideo}
          aria-label={isPlaying ? t.videoPause : t.videoPlay}
          className="p-3 bg-white/50 backdrop-blur-md border border-[#0056B3]/10 rounded-lg text-[#0056B3]/50 hover:text-[#0056B3] transition-all"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
    </section>
  );
}