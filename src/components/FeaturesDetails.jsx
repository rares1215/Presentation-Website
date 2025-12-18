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
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Step 1: Ideea de bază",
      desc: "Analizăm fundamentul științific și modul în care vibrațiile pot fi convertite eficient.",
      hoverAnimation: { rotate: [0, 15, -15, 0] } // Animație de "gândire"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Step 2: Construirea",
      desc: "Implementăm circuite de înaltă precizie pentru a controla fluxul energetic sonic.",
      hoverAnimation: { scale: [1, 1.2, 1] } // Animație de "puls"
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Step 3: Eficiență & Practică",
      desc: "Rezultatul final este un sistem sustenabil, optimizat pentru performanță maximă.",
      hoverAnimation: { x: [0, 5, 0] } // Animație de "direcție"
    },
  ];

  return (
    <section
      id="features-detail"
      ref={ref}
      className="relative py-32 bg-[#EBF0F5] text-[#1B263B] overflow-hidden"
    >
      {/* Background Decorativ */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#576574] mb-4">
            Tehnologie
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B263B]">
            Procesul Nostru <span className="text-[#0056B3]">Tehnic</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-[#0056B3] rounded-full" />
        </div>

        {/* Carduri Stilizate Orizontal */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              /* CARD: Umbre foarte lungi și difuze (60px-100px) pentru aspectul lăptos */
              className="relative flex items-center p-8 md:p-10 
                 bg-[#EBF0F5] rounded-[3.5rem]
                 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
                 group transition-all duration-500 hover:shadow-[10px_10px_40px_#bebebe,-10px_-10px_40px_#ffffff]"
            >
              {/* ICON CONTAINER: Adâncitură fină, aproape imperceptibilă */}
              <div className="flex-shrink-0 mr-8">
                <div className="flex items-center justify-center w-24 h-24 rounded-full
                        bg-[#EBF0F5]
                        shadow-[inset_6px_6px_12px_#cacfd4,inset_-6px_-6px_12px_#ffffff]
                        relative">
                  {/* Iconița cu micro-animație */}
                  <motion.div
                    className="text-[#0056B3]/70"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
              </div>

              {/* TEXT: Aliniat curat ca în poză */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#1B263B] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#576574] text-base md:text-lg leading-relaxed opacity-80">
                  {step.desc}
                </p>
              </div>

              {/* NUMĂRUL DIN FUNDAL: Foarte discret (01, 02, 03) */}
              <span className="absolute right-12 text-6xl font-black text-[#1B263B]/5 select-none hidden md:block">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <a
            href="#reasons"
            className="group relative inline-flex items-center justify-center px-10 py-4 
                       bg-[#0056B3] text-white font-bold rounded-full overflow-hidden
                       shadow-[0_10px_20px_rgba(0,86,179,0.3)] 
                       hover:shadow-[0_15px_30px_rgba(0,86,179,0.4)]
                       transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10">De ce să ne alegi?</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}