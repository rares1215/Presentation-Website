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
      icon: <Shield className="w-8 h-8 text-[#0056B3]" />,
      title: "Reliability and Trust",
      desc: "Construim soluții bazate pe principii demonstrate, oferind siguranța unei tehnologii verificate în timp.",
    },
    {
      icon: <Star className="w-8 h-8 text-[#0056B3]" />,
      title: "Innovation at Core",
      desc: "Reinterpretăm sonicitatea prin prisma nevoilor moderne, aducând inovația în fiecare componentă.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#0056B3]" />,
      title: "Dedicated Team",
      desc: "O echipă de experți pasionați de fizică și inginerie, gata să transforme imposibilul în realitate.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#0056B3]" />,
      title: "Sustainability Focus",
      desc: "Eficiența energetică nu este doar un obiectiv, ci fundamentul pe care dezvoltăm fiecare produs.",
    },
  ];

  return (
    <section
      id="reasons"
      ref={ref}
      aria-labelledby="why-choose-us-title"
      /* MODIFICARE: Fundal Ice Blue unitar */
      className="relative isolate overflow-hidden py-32 bg-[#EBF0F5] text-[#1B263B]"
    >
      {/* Sonic Background – Adaptat pentru fundal deschis */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.4] mt-32"
      >
        <div className="relative aspect-square w-[90rem] max-w-[90vw]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full border border-[#0056B3]/10"
              style={{
                width: `${60 + i * 25}%`,
                height: `${60 + i * 25}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          <motion.div
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056B3] shadow-[0_0_30px_rgba(0,86,179,0.3)]"
          />
        </div>
      </div>

      {/* Header */}
      <div
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#576574]">
          De ce Noi?
        </p>

        <h2
          id="why-choose-us-title"
          className="relative mt-4 text-4xl sm:text-5xl font-extrabold text-[#0056B3]"
        >
          Ce Oferim?
        </h2>

        <div className="mx-auto mt-4 h-1.5 w-24 bg-[#0056B3]/30 rounded-full" />

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-[#576574]">
          Angajamentul nostru este să livrăm excelență prin fiecare vibrație,
          asigurând un viitor tehnologic sustenabil.
        </p>
      </div>

      {/* Cards */}
      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              /* MODIFICARE: Carduri albe cu accent Navy în partea de sus la hover */
              className="group relative flex flex-col items-center text-center p-10 
                         rounded-[2rem] bg-white border border-[#D1D9E0] 
                         shadow-[0_15px_40px_-15px_rgba(0,86,179,0.1)] 
                         hover:shadow-[0_25px_50px_-12px_rgba(0,86,179,0.15)] 
                         transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Container - Stil Clean/Minimalist */}
              <div className="mb-6 flex items-center justify-center h-20 w-20 rounded-2xl bg-[#EBF0F5] text-[#0056B3] transition-colors group-hover:bg-[#0056B3] group-hover:text-white duration-500">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1B263B]">
                {reason.title}
              </h3>

              <p className="mt-4 text-[#576574] text-base leading-relaxed max-w-sm">
                {reason.desc}
              </p>

              {/* Element decorativ - linie de accent care crește la hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-[#0056B3] transition-all duration-500 group-hover:w-1/3 rounded-b-full" />
            </motion.div>
          ))}
        </div>

        {/* CTA to Contact */}
        <div className="mt-20 flex justify-center">
          <a
            href="#contacts"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-[#0056B3]
              px-12 py-4
              text-base font-bold text-white
              shadow-lg shadow-blue-900/10 transition-all
              hover:bg-[#004494] hover:-translate-y-1 hover:shadow-blue-900/20

              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/40 
              focus-visible:ring-offset-4 focus-visible:ring-offset-[#EBF0F5]
            "
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </section>
  );
}