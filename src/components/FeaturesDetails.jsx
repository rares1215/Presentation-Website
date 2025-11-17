import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Cpu } from "lucide-react";

export default function FeaturesDetail() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <BrainCircuit className="w-7 h-7 text-sky-300" />,
      title: "Step 1: Ideea de bază",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-sky-300" />,
      title: "Step 2: Construirea",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed urna tempor pulvinar vivamus fringilla lacus.",
    },
    {
      icon: <ArrowRight className="w-7 h-7 text-sky-300" />,
      title: "Step 3: Eficiență & Practică",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Lacus nec metus bibendum egestas iaculis massa.",
    },
  ];

  return (
    <section
      id="features-detail"
      ref={ref}
      className="relative isolate overflow-hidden py-32 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900 text-slate-100"
    >
      {/* Sonic background */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-[0.4]">
        <div className="relative aspect-square w-[80rem]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full border border-sky-400/10"
              style={{
                width: `${60 + i * 28}%`,
                height: `${60 + i * 28}%`,
                transform: "translate(-50%, -50%)",
                boxShadow: i === 0 ? "0 0 40px rgba(56,189,248,0.25) inset" : "none",
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.7, 0.35, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.55)]"
          />
        </div>
      </div>

      {/* Header */}
      <div
        className={`relative mx-auto max-w-3xl px-6 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-sky-300/70">Proces</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]">
          Cum Funcționează Produsul Nostru
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
        <p className="mt-6 text-slate-300 text-lg leading-relaxed">
          Procesul tehnologic explicat în trei pași esențiali.
        </p>
      </div>

      {/* Sonic Linear Flow */}
      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center text-center p-8 rounded-2xl border border-sky-400/20 bg-slate-900/40 shadow-[0_0_35px_rgba(56,189,248,0.15)] backdrop-blur-xl transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="mb-5 flex items-center justify-center h-20 w-20 rounded-full border border-sky-400/40 bg-slate-900/80 shadow-[0_0_25px_rgba(56,189,248,0.45)]">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]">
                {step.title}
              </h3>
              <p className="mt-4 text-slate-300 leading-relaxed text-base max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sonic connecting line */}
        <div className="pointer-events-none absolute left-1/2 top-[47%] hidden w-[75%] -translate-x-1/2 md:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
