import { Download, FileBarChart, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectPresentation() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      id="documentation"
      aria-labelledby="download-title"
      className="py-24 bg-[#EBF0F5] relative overflow-hidden"
    >
      {/* Element decorativ discret pentru fundal */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D1D9E0] to-transparent" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden p-8 md:p-12 bg-white rounded-[3rem] border border-[#D1D9E0] shadow-2xl shadow-blue-900/5"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            
            {/* Coloana Stângă: Iconiță și Badge */}
            <div className="flex-shrink-0 relative">
              <div className="w-24 h-24 bg-[#0056B3]/10 rounded-[2rem] flex items-center justify-center text-[#0056B3]" aria-hidden="true">
                <FileBarChart className="w-12 h-12" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#27ae60]" aria-hidden="true" />
              </div>
            </div>

            {/* Coloana Centrală: Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2 id="download-title" className="text-2xl md:text-3xl font-extrabold text-[#1B263B] mb-4">
                Validare și Strategie 2026
              </h2>
              <div className="space-y-3">
                <p className="text-[#37474F] text-lg font-medium leading-relaxed">
                  Aceasta este prezentarea detaliată a proiectului nostru. Puteți consulta aici statusul tehnic al prototipului centralelor <strong>Termo-Sonice</strong> și expertiza tehnică ce validează conceptul nostru.
                </p>
                <p className="text-[#37474F] text-sm font-bold flex items-center justify-center lg:justify-start gap-2 italic">
                  <span className="w-2 h-2 rounded-full bg-[#0056B3]" aria-hidden="true" />
                  Format: PPTX • Mărime: 4.8 MB • Ediția Ianuarie 2026
                </p>
              </div>
            </div>

            {/* Coloana Dreaptă: Butonul de Descărcare */}
            <div className="flex-shrink-0">
              <motion.a
                href="/PITCH_DECK_SONIC_TECHNOLOGY_2026.pptx" 
                download="PITCH_DECK_SONIC_TECHNOLOGY_2026.pptx"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Descarcă prezentarea oficială a proiectului Sonic Technology 2026 în format PowerPoint"
                className="
                  inline-flex items-center gap-3
                  px-10 py-5 
                  min-h-[48px]
                  bg-[#0056B3] text-white text-lg font-bold rounded-full
                  shadow-xl shadow-blue-900/20
                  transition-all duration-300
                  hover:bg-[#004494]
                  /* FOCUS ACCESIBIL */
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 focus-visible:ring-offset-2
                "
              >
                <Download className="w-6 h-6" aria-hidden="true" />
                Descarcă Prezentarea
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}