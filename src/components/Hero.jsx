/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
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
      aria-label="Sonic Technology – prezentare principală"
    >
      {/* Decorative background video */}
      <video
        ref={videoRef}
        aria-hidden="true"
        className={`absolute inset-0 -z-30 h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"
          }`}
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
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 -z-40 h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-0" : "opacity-100"
          }`}
      />

      {/* High-contrast overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-900/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/20"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 text-center md:grid md:grid-cols-12 md:px-10 lg:text-left">
        {/* LEFT TEXT */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-400/15 px-3 py-1 text-xs text-sky-200">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Sonicitate aplicată pentru energie
          </div>

          {/* Gradient text WITH readable fallback */}
          <h1 className="mt-4 font-black tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="relative">
              <span
                aria-hidden="true"
                className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500"
              >
                Sonic Technology
              </span>
              <span className="sr-only">Sonic Technology</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl leading-relaxed text-slate-100 text-base sm:text-lg md:text-xl">
            „Cunoscutul este finit, necunoscutul este infinit; din punct de vedere
            intelectual ne aflăm pe o mică insulă în mijlocul unui ocean ilimitabil
            al inexplicabilității.”
            <br />
            <span className="mt-3 block text-sm text-slate-300">
              — T.H. Huxley, 1887
            </span>
          </p>
        </motion.div>

        {/* RIGHT – CTA RING */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-6 flex items-center justify-center"
        >
          <div className="relative aspect-square w-[60%] max-w-sm">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 rounded-full border border-sky-400/30"
                style={{
                  height: `${45 + i * 35}%`,
                  width: `${45 + i * 35}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Accessible CTA */}
            <a
              href="#about"
              aria-label="Navighează către secțiunea Despre noi"
              className="
                  absolute left-1/2 top-1/2
                  -translate-x-1/2 -translate-y-1/2

                  flex items-center justify-center
                  rounded-full

                  h-24 w-24
                  min-h-[44px] min-w-[44px]

                  text-sm sm:text-base font-semibold
                  text-cyan-300

                  bg-slate-900/40 backdrop-blur
                  border border-cyan-300/60

                  shadow-[0_0_22px_rgba(56,189,248,0.55)]
                  hover:shadow-[0_0_35px_rgba(56,189,248,0.9)]
                  hover:scale-105

                  transition-all

                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-cyan-300/80
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-slate-950
                "
            >
              Descoperă
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

