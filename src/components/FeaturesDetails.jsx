import { motion, useReducedMotion } from "framer-motion";
import { Zap, Droplets, ThermometerSun, ShieldCheck, Sun, Settings2, Sparkles } from "lucide-react";

export default function FeaturesDetail() {
  const prefersReducedMotion = useReducedMotion();

  const advantages = [
    {
      icon: <Settings2 className="w-6 h-6" aria-hidden="true" />,
      title: "Compactă și Versatilă",
      desc: "Dimensiuni similare centralelor pe gaz, înlocuind cu succes vechile sisteme fără a ocupa spațiu extra.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
      title: "Zero Birocrație",
      desc: "Nu necesită autorizații speciale ISCIR sau verificări periodice ale instalației de gaz.",
    },
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      title: "Instalare Simplificată",
      desc: "Fără coș de evacuare sau găuri în pereți. Necesită doar o sursă de apă și curent electric.",
    },
    {
      icon: <Sun className="w-6 h-6" aria-hidden="true" />,
      title: "Eco-Ready",
      desc: "Consum redus de energie, fiind ideală pentru conectarea directă la panouri fotovoltaice.",
    },
    {
      icon: <ThermometerSun className="w-6 h-6" aria-hidden="true" />,
      title: "Performanță Extremă",
      desc: "Spre deosebire de pompele de căldură, eficiența rămâne maximă chiar și sub -8°C.",
    },
    {
      icon: <Sparkles className="w-6 h-6" aria-hidden="true" />,
      title: "Costuri Reduse",
      desc: "Mentenanță minimală prin eliminarea verificărilor obligatorii la fiecare 2 ani.",
    },
  ];

  return (
    <section 
      id="features-detail" 
      aria-labelledby="main-features-heading"
      className="relative py-32 bg-[#EBF0F5] text-[#1B263B] overflow-hidden"
    >

      {/* BACKGROUND DECORATIV */}
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[50rem] h-[50rem] bg-[#0056B3]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-white rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* INTRODUCERE & VIZIUNE */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0056B3]/15 text-[#004494] text-sm font-bold uppercase tracking-widest">
              <Droplets className="w-4 h-4" aria-hidden="true" /> Viitorul ACM & Încălzirii
            </div>
            
            <h2 id="main-features-heading" className="text-4xl md:text-5xl font-extrabold leading-tight">
              O soluție <span className="text-[#0056B3]">revoluționară</span> pentru confortul tău
            </h2>

            {/* TEXT NOU INTEGRAT: Împărțit pentru lizibilitate și contrast */}
            <div className="space-y-4 text-[#37474F] text-lg leading-relaxed font-medium">
              <p>
                Viața modernă este intim legată de două necesități fundamentale pentru confort și igienă: 
                <strong> apa caldă menajeră (ACM)</strong> și <strong>încălzirea locuințelor</strong>. 
                De la ritualurile zilnice de igienă personală până la confortul termic esențial în anotimpurile reci, acestea nu sunt un lux, ci piloni ai calității vieții.
              </p>
              <p>
                SONIC TECHNOLOGY propune o abordare vizionară prin înlocuirea arzătoarelor pe gaz cu un 
                <strong> generator sonic pe bază de curent electric</strong>, adaptând producția de ACM și căldură la standardele de eficiență și sustenabilitate ale viitorului.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/60 border border-white shadow-sm italic text-[#37474F] font-medium">
              "SONIC TECHNOLOGY nu produce centrala finală, ci pune la dispoziție tehnologia noastră oricărui producător interesat."
            </div>
          </motion.div>

          {/* ELEMENT VIZUAL CENTRAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-square flex items-center justify-center lg:mt-10"
          >
            <div 
              className={`absolute w-full h-full border-[20px] border-white/40 rounded-full ${!prefersReducedMotion ? 'animate-[spin_20s_linear_infinite]' : ''}`} 
              aria-hidden="true"
            />
            <div className="relative z-10 p-12 bg-white rounded-[3rem] shadow-[15px_15px_40px_rgba(0,0,0,0.05)] text-center">
              <Zap className="w-20 h-20 text-[#0056B3] mx-auto mb-6" aria-hidden="true" />
              <span className="block text-3xl font-black text-[#1B263B]">GENERATOR</span>
              <span className="block text-xl font-bold text-[#0056B3]">SONIC</span>
            </div>
          </motion.div>
        </div>

        {/* GRILA DE AVANTAJE */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-extrabold mb-4">Avantajele Centralei Sonice</h3>
          <div className="mx-auto h-1.5 w-20 bg-[#0056B3] rounded-full" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-white/60 rounded-[2.5rem] border border-white shadow-lg shadow-blue-900/5 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EBF0F5] text-[#0056B3] flex items-center justify-center mb-6 group-hover:bg-[#0056B3] group-hover:text-white transition-colors duration-300">
                {adv.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#1B263B]">{adv.title}</h4>
              <p className="text-[#37474F] leading-relaxed font-medium">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-24 text-center">
          <motion.a
            href="#reasons"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-12 py-5 
              min-h-[48px] min-w-[200px]
              bg-[#0056B3] text-white text-lg font-bold rounded-full shadow-xl shadow-blue-900/20 hover:bg-[#004494] transition-all
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#EBF0F5]"
          >
            Descoperă De Ce Să Ne Alegi
          </motion.a>
        </div>
      </div>
    </section>
  );
}