/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Shield, Star, Users, Heart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-sky-300" aria-hidden="true" />,
      title: "Reliability and Trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      icon: <Star className="w-8 h-8 text-sky-300" aria-hidden="true" />,
      title: "Innovation at Core",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      icon: <Users className="w-8 h-8 text-sky-300" aria-hidden="true" />,
      title: "Dedicated Team",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      icon: <Heart className="w-8 h-8 text-sky-300" aria-hidden="true" />,
      title: "Sustainability Focus",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
  ];

  return (
    <section
      id="reasons"
      ref={ref}
      aria-labelledby="why-choose-us-title"
      className="relative isolate overflow-hidden py-32 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900 text-slate-100"
    >
      {/* Sonic Background – decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.45] mt-65"
      >
        <div className="relative aspect-square w-[90rem] max-w-[90vw]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full border border-sky-400/10"
              style={{
                width: `${60 + i * 25}%`,
                height: `${60 + i * 25}%`,
                transform: "translate(-50%, -50%)",
                boxShadow:
                  i === 0 ? "0 0 50px rgba(56,189,248,0.25) inset" : "none",
              }}
            />
          ))}

          <motion.div
            aria-hidden="true"
            initial={
              prefersReducedMotion ? false : { scale: 0.9, opacity: 0.8 }
            }
            animate={
              prefersReducedMotion
                ? false
                : { scale: [0.9, 1.1, 0.9], opacity: [0.8, 0.4, 0.8] }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_40px_rgba(56,189,248,0.6)]"
          />
        </div>
      </div>

      {/* Header */}
      <div
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-sky-300/70">
          De ce Noi?
        </p>

        <h2
          id="why-choose-us-title"
          className="relative mt-4 text-4xl sm:text-5xl font-extrabold"
        >
          <span className="text-white">
            Ce Oferim?
          </span>

          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]"
          >
            Ce Oferim?
          </span>
        </h2>


        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus sapien vitae pellentesque sem placerat.
        </p>
      </div>

      {/* Cards */}
      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 24 }
              }
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center p-10 rounded-2xl border border-sky-400/20 bg-slate-900/40 shadow-[0_0_40px_rgba(56,189,248,0.15)] backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-center h-20 w-20 rounded-full border border-sky-400/40 bg-slate-900/80 shadow-[0_0_30px_rgba(56,189,248,0.45)]">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-semibold text-sky-300">
                {reason.title}
              </h3>

              <p className="mt-4 text-slate-300 text-base leading-relaxed max-w-sm">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA to Contact */}
        <div className="mt-20 flex justify-center">
          <a
            href="#contacts"
            className="
              inline-flex items-center justify-center
              min-h-[44px] min-w-[44px]
              rounded-full
              bg-gradient-to-r from-sky-400 to-violet-500
              px-10 py-4
              text-sm font-semibold text-slate-900
              shadow-lg transition-transform
              hover:-translate-y-0.5

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-sky-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-950
            "
          >
            Contacteaza-ne
          </a>
        </div>
      </div>
    </section>
  );
}
