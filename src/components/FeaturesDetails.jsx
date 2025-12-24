import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BrainCircuit, Cpu } from "lucide-react";

export default function FeaturesDetail() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <BrainCircuit className="w-10 h-10" aria-hidden="true" />,
      title: "Pasul 1: Ideea de bază",
      desc: "Analizăm fundamentul științific și modul în care vibrațiile pot fi convertite eficient.",
    },
    {
      icon: <Cpu className="w-10 h-10" aria-hidden="true" />,
      title: "Pasul 2: Construirea",
      desc: "Implementăm circuite de înaltă precizie pentru a controla fluxul energetic sonic.",
    },
    {
      icon: <ArrowRight className="w-10 h-10" aria-hidden="true" />,
      title: "Pasul 3: Eficiență & Practică",
      desc: "Rezultatul final este un sistem sustenabil, optimizat pentru performanță maximă.",
    },
  ];

  return (
    <section
      id="features-detail"
      ref={ref}
      aria-labelledby="tech-process-title"
      className="relative py-32 bg-[#EBF0F5] text-[#1B263B] overflow-hidden"
    >
      {/* Background Decorativ - aria-hidden pentru că nu conține info utilă */}
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-24">
          {/* MODIFICARE: text-sm (nu xs) și culoare mai închisă pentru contrast */}
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#37474F] mb-4">
            Tehnologie
          </p>
          <h2 id="tech-process-title" className="text-4xl md:text-5xl font-extrabold text-[#1B263B]">
            Procesul Nostru <span className="text-[#0056B3]">Tehnic</span>
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-20 bg-[#0056B3] rounded-full" />
        </div>

        {/* Carduri Stilizate Orizontal */}
        <div className="flex flex-col gap-10 max-w-5xl mx-auto" role="list">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              role="listitem"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              /* MODIFICARE: Umbre ajustate pentru contrast vizibil (border adăugat pentru definiție) */
              className="relative flex flex-col md:flex-row items-center p-8 md:p-12 
                   bg-[#EBF0F5] rounded-[2.5rem] border border-white/50
                   shadow-[12px_12px_24px_#c8ccd0,-12px_-12px_24px_#ffffff]
                   group transition-all duration-300"
            >
              {/* ICON CONTAINER */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                <div className="flex items-center justify-center w-24 h-24 rounded-full
                        bg-[#EBF0F5]
                        shadow-[inset_4px_4px_8px_#c8ccd0,inset_-4px_-4px_8px_#ffffff]
                        relative"
                >
                  <div className="text-[#0056B3]">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#1B263B] mb-3">
                  {step.title}
                </h3>
                {/* MODIFICARE: Culoare text #37474F pentru contrast 4.5:1 și eliminare opacity-80 */}
                <p className="text-[#37474F] text-lg leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* NUMĂRUL DIN FUNDAL - Mai vizibil și poziționat strategic */}
              <span
                className="absolute top-6 right-8 text-6xl font-black text-[#0056B3]/15 select-none hidden lg:block italic"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <a
            href="#reasons"
            className="group relative inline-flex items-center justify-center px-12 py-5 
                       bg-[#0056B3] text-white text-lg font-bold rounded-full overflow-hidden
                       shadow-lg hover:bg-[#004494]
                       transition-all duration-300 hover:-translate-y-1
                       /* MODIFICARE: Focus vizibil clar pentru navigare tastatură */
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#EBF0F5]"
          >
            <span className="relative z-10">De ce să ne alegi?</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}