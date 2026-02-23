/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Shield, Star, Users, Heart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const whyTranslations = {
  ro: {
    badge: "De ce Noi?",
    title: "Ce Oferim?",
    description: "Angajamentul nostru este să livrăm excelență prin fiecare vibrație, asigurând un viitor tehnologic sustenabil.",
    ctaBtn: "Contactează-ne",
    reasons: [
      {
        title: "Siguranță",
        desc: "Construim soluții bazate pe principii demonstrate, oferind siguranța unei tehnologii verificate în timp.",
      },
      {
        title: "Inovație",
        desc: "Reinterpretăm sonicitatea prin prisma nevoilor moderne, aducând inovația în fiecare componentă.",
      },
      {
        title: "Echipă dedicată",
        desc: "O echipă de experți pasionați de fizică și inginerie, gata să transforme imposibilul în realitate.",
      },
      {
        title: "Sustenabilitate",
        desc: "Eficiența energetică nu este doar un obiectiv, ci fundamentul pe care dezvoltăm fiecare produs.",
      },
    ]
  },
  en: {
    badge: "Why Us?",
    title: "What We Offer?",
    description: "Our commitment is to deliver excellence through every vibration, ensuring a sustainable technological future.",
    ctaBtn: "Contact Us",
    reasons: [
      {
        title: "Reliability",
        desc: "We build solutions based on proven principles, offering the safety of a time-tested technology.",
      },
      {
        title: "Innovation",
        desc: "We reinterpret sonics through the lens of modern needs, bringing innovation to every component.",
      },
      {
        title: "Dedicated Team",
        desc: "A team of experts passionate about physics and engineering, ready to turn the impossible into reality.",
      },
      {
        title: "Sustainability",
        desc: "Energy efficiency is not just a goal, but the foundation upon which we develop every product.",
      },
    ]
  },
  fr: {
    badge: "Pourquoi Nous ?",
    title: "Ce que nous offrons ?",
    description: "Notre engagement est de livrer l'excellence à travers chaque vibration, assurant un avenir technologique durable.",
    ctaBtn: "Contactez-nous",
    reasons: [
      {
        title: "Sécurité",
        desc: "Nous construisons des solutions basées sur des principes prouvés, offrant la sécurité d'une technologie éprouvée.",
      },
      {
        title: "Innovation",
        desc: "Nous réinterprétons la sonicité à travers le prisme des besoins modernes, apportant l'innovation à chaque composant.",
      },
      {
        title: "Équipe Dédiée",
        desc: "Une équipe d'experts passionnés par la physique et l'ingénierie, prête à transformer l'impossible en réalité.",
      },
      {
        title: "Durabilité",
        desc: "L'efficacité énergétique n'est pas seulement un objectif, mais le fondement sur lequel nous développons chaque produit.",
      },
    ]
  },
  es: {
    badge: "¿Por qué nosotros?",
    title: "¿Qué ofrecemos?",
    description: "Nuestro compromiso es ofrecer excelencia a través de cada vibración, asegurando un futuro tecnológico sostenible.",
    ctaBtn: "Contáctanos",
    reasons: [
      {
        title: "Seguridad",
        desc: "Construimos soluciones basadas en principios probados, ofreciendo la seguridad de una tecnología verificada por el tiempo.",
      },
      {
        title: "Innovación",
        desc: "Reinterpretamos la sónica a través del prisma de las necesidades modernas, aportando innovación a cada componente.",
      },
      {
        title: "Equipo Dedicado",
        desc: "Un equipo de expertos apasionados por la física y la ingeniería, listos para convertir lo imposible en realidad.",
      },
      {
        title: "Sostenibilidad",
        desc: "La eficiencia energética no es solo un objetivo, sino la base sobre la cual desarrollamos cada producto.",
      },
    ]
  },
  de: {
    badge: "Warum wir?",
    title: "Was wir bieten?",
    description: "Unser Versprechen ist es, durch jede Vibration Spitzenleistungen zu erbringen und eine nachhaltige technologische Zukunft zu sichern.",
    ctaBtn: "Kontaktieren Sie uns",
    reasons: [
      {
        title: "Sicherheit",
        desc: "Wir bauen Lösungen auf der Grundlage bewährter Prinzipien und bieten die Sicherheit einer praxiserprobten Technologie.",
      },
      {
        title: "Innovation",
        desc: "Wir interpretieren die Sonik unter dem Aspekt moderner Bedürfnisse neu und bringen Innovation in jede Komponente.",
      },
      {
        title: "Engagiertes Team",
        desc: "Ein Team von Experten, die sich leidenschaftlich für Physik und Ingenieurwesen einsetzen und bereit sind, das Unmögliche in die Realität umzusetzen.",
      },
      {
        title: "Nachhaltigkeit",
        desc: "Energieeffizienz ist nicht nur ein Ziel, sondern das Fundament, auf dem wir jedes Produkt entwickeln.",
      },
    ]
  },
  it: {
    badge: "Perché noi?",
    title: "Cosa offriamo?",
    description: "Il nostro impegno è offrire l'eccellenza attraverso ogni vibrazione, garantendo un futuro tecnologico sostenibile.",
    ctaBtn: "Contattaci",
    reasons: [
      {
        title: "Sicurezza",
        desc: "Costruiamo soluzioni basate su principi dimostrati, offrendo la sicurezza di una tecnologia verificata nel tempo.",
      },
      {
        title: "Innovazione",
        desc: "Reinterpretiamo la sonica attraverso il prisma delle esigenze moderne, portando l'innovazione in ogni componente.",
      },
      {
        title: "Team dedicato",
        desc: "Un team di esperti appassionati di fisica e ingegneria, pronti a trasformare l'impossibile in realtà.",
      },
      {
        title: "Sostenibilità",
        desc: "L'efficienza energetica non è solo un obiettivo, ma il fondamento su cui sviluppiamo ogni prodotto.",
      },
    ]
  }
};

export default function WhyChooseUs({ lang = "ro" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const t = whyTranslations[lang] || whyTranslations["ro"];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const icons = [
    <Shield className="w-8 h-8" aria-hidden="true" />,
    <Star className="w-8 h-8" aria-hidden="true" />,
    <Users className="w-8 h-8" aria-hidden="true" />,
    <Heart className="w-8 h-8" aria-hidden="true" />,
  ];

  return (
    <section
      id="reasons"
      ref={ref}
      aria-labelledby="why-choose-us-title"
      className="relative isolate overflow-hidden py-32 bg-[#EBF0F5] text-[#1B263B]"
    >
      {/* Sonic Background – Decorativ */}
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
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { scale: 0.8, opacity: 0.5 }}
            animate={!prefersReducedMotion ? { scale: [1, 1.1, 1], opacity: [1, 0.7, 1] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0056B3] shadow-[0_0_30px_rgba(0,86,179,0.3)]"
          />
        </div>
      </div>

      {/* Header */}
      <div
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#37474F]">
          {t.badge}
        </p>

        <h2
          id="why-choose-us-title"
          className="relative mt-4 text-4xl sm:text-5xl font-extrabold text-[#0056B3]"
        >
          {t.title}
        </h2>

        <div className="mx-auto mt-4 h-1.5 w-24 bg-[#0056B3]/30 rounded-full" />

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-[#37474F] font-medium">
          {t.description}
        </p>
      </div>

      {/* Cards */}
      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12" role="list">
          {t.reasons.map((reason, i) => (
            <motion.div
              key={i}
              role="listitem"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative flex flex-col items-center text-center p-10 
                         rounded-[2rem] bg-white border border-[#D1D9E0] 
                         shadow-[0_15px_40px_-15px_rgba(0,86,179,0.1)] 
                         hover:shadow-[0_25px_50px_-12px_rgba(0,86,179,0.15)] 
                         transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="mb-6 flex items-center justify-center h-20 w-20 rounded-2xl bg-[#EBF0F5] text-[#0056B3] transition-colors group-hover:bg-[#0056B3] group-hover:text-white duration-500">
                {icons[i]}
              </div>

              <h3 className="text-2xl font-bold text-[#1B263B]">
                {reason.title}
              </h3>

              <p className="mt-4 text-[#37474F] text-base leading-relaxed max-w-sm font-medium">
                {reason.desc}
              </p>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-[#0056B3] transition-all duration-500 group-hover:w-1/3 rounded-b-full" aria-hidden="true" />
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
              min-h-[48px]
              text-base font-bold text-white
              shadow-lg shadow-blue-900/10 transition-all
              hover:bg-[#004494] hover:-translate-y-1 hover:shadow-blue-900/20

              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/40 
              focus-visible:ring-offset-4 focus-visible:ring-offset-[#EBF0F5]
            "
          >
            {t.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}