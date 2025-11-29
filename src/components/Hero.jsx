/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (inView) videoRef.current.play().catch(() => { });
    else videoRef.current.pause();
  }, [inView]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden"
      aria-label="Sonic Technology — Hero"
      style={{
        "--bg": "#0B1220",
        "--surface": "rgba(13,18,31,0.6)",
        "--line": "rgba(120,144,180,0.25)",
        "--text": "#E6F3FF",
        "--muted": "#A6B3C6",
        "--accent": "#22D3EE",
        "--accent-2": "#8B5CF6",
        "--glow": "rgba(34,211,238,0.25)",
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 -z-30 h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        playsInline
        muted
        loop
        preload="auto"
        poster="/heroimg.png"
        onCanPlayThrough={() => setLoaded(true)}
      >
        <source src="/Background1.webm" type="video/webm" />
        <source src="/Background1-optimized.mp4" type="video/mp4" />
      </video>

      <img
        src="/heroimg.png"
        alt="Background preview"
        className={`absolute inset-0 -z-40 h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-0" : "opacity-100"}`}
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-900/85" />
      <div className="absolute inset-0 -z-10 mix-blend-overlay bg-[radial-gradient(60%_40%_at_30%_40%,rgba(255,255,255,0.08),transparent)]" />

      {/* Responsive Content Layout */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-6 py-20 text-center md:grid md:grid-cols-12 md:gap-8 md:px-10 lg:gap-12 lg:text-left">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 md:order-none md:col-span-6 lg:col-span-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Sonicitate aplicată pentru energie
          </div>

          <h1 className="mt-4 font-black tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
              Sonic Technology
            </span>
          </h1>

          <p className="mt-6 max-w-xl leading-relaxed text-slate-200 text-base sm:text-lg md:text-xl">
            „Cunoscutul este finit, necunoscutul este infinit; din punct de vedere intelectual ne aflăm pe o mică insulă în mijlocul unui ocean ilimitabil al inexplicabilității. Sarcina noastră, în fiecare generație, este de a revendica ceva mai mult pământ.”
            <br />
            <span className="mt-3 block text-sm text-slate-400">— T.H. Huxley, 1887</span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Descoperă
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Visual (smaller & responsive) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="order-2 w-full md:order-none md:col-span-6 lg:col-span-6 flex items-center justify-center"
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
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
    </section>
  );
}