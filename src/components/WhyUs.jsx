/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Shield, Star, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";
// import whyBg from "../assets/placeholder.jpg";

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-sky-300" />,
      title: "Reliability and Trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      icon: <Star className="w-8 h-8 text-sky-300" />,
      title: "Innovation at Core",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      icon: <Users className="w-8 h-8 text-sky-300" />,
      title: "Dedicated Team",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      icon: <Heart className="w-8 h-8 text-sky-300" />,
      title: "Sustainability Focus",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
  ];

  return (
    <section
      id="reasons"
      ref={ref}
      className="relative isolate overflow-hidden py-32 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900 text-slate-100"
    >
      {/* Sonic Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.45] mt-65">
        <div className="relative aspect-square w-[90rem] max-w-[90vw]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full border border-sky-400/10"
              style={{
                width: `${60 + i * 25}%`,
                height: `${60 + i * 25}%`,
                transform: "translate(-50%, -50%)",
                boxShadow: i === 0 ? "0 0 50px rgba(56,189,248,0.25) inset" : "none",
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.8, 0.4, 0.8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_40px_rgba(56,189,248,0.6)]"
          />
        </div>
      </div>

      {/* Header */}
      <div
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-sky-300/70">De ce Noi?</p>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]">
          Why Choose Us?
        </h2>

        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus sapien vitae pellentesque sem placerat.
        </p>
      </div>

      {/* Quad Grid – Sonic Modules */}
      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-12">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center text-center p-10 rounded-2xl border border-sky-400/20 bg-slate-900/40 shadow-[0_0_40px_rgba(56,189,248,0.15)] backdrop-blur-xl transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Icon Energy Core */}
              <div className="mb-6 flex items-center justify-center h-20 w-20 rounded-full border border-sky-400/40 bg-slate-900/80 shadow-[0_0_30px_rgba(56,189,248,0.45)]">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-semibold text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.45)]">
                {reason.title}
              </h3>

              <p className="mt-4 text-slate-300 text-base leading-relaxed max-w-sm">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
