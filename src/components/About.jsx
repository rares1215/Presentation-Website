/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const sonicDetails = [
    { letter: "S", title: "implitate", desc: "un sistem compus din piese puține și simple, foarte efficient." },
    { letter: "O", title: "riginalitate", desc: "folosim o tehnologie originală, veche de peste 100 de ani." },
    { letter: "N", title: "eutralitate", desc: " fără impact asupra mediului datorită consumului mic de energie, care cu ușurință poate fi susținut de energia verde și deasemenea datorită materialelor folosite care pot fi găsite în toată lumea." },
    { letter: "I", title: "novație", desc: "tehnologie care va inova multe domenii" },
    { letter: "C", title: "omfort", desc: "datorat fiabilității produselor și faptului ca nu va fi nevoie de autorizații sau revizii periodice. Energia produsă de centrala va fi la cel mai mic cost posibil existent la ora actuală" },
  ];

  const toggleBook = () => setIsOpen(!isOpen);

  return (
    <section
      id="about"
      className="relative bg-[#EBF0F5] py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#455361]">Povestea Noastră</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#0056B3]">Descoperă Sonic Technology</h2>
          <p className="mt-4 text-[#455361] font-medium italic">Click pe carte pentru a ne cunoaște viziunea</p>
        </div>

        {/* CONTAINER CARTE */}
        <div className="relative perspective-2000 w-full max-w-6xl mx-auto h-[700px] md:h-[650px]">
          
          {/* PAGINA DREAPTA (Fixă - SONIC Acronim) */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-white shadow-xl rounded-r-3xl border border-[#D1D9E0] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-black text-[#1B263B] mb-8">
              Ce reprezintă <span className="text-[#0056B3]">SONIC TECHNOLOGY?</span>
            </h3>
            <div className="space-y-5">
              {sonicDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-3xl md:text-4xl font-black text-[#D32F2F] leading-none shrink-0">{item.letter}</span>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[#1B263B]">{item.title}:</h4>
                    <p className="text-[#37474F] text-sm md:text-base font-medium leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PAGINA STÂNGA / COPERTA (Elementul rotativ) */}
          <motion.button
            onClick={toggleBook}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Închide cartea" : "Deschide descrierea despre Sonic Technology"}
            animate={{ rotateY: isOpen ? -180 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ 
              transformStyle: "preserve-3d",
              transformOrigin: "left" 
            }}
            className="absolute top-0 left-0 md:left-1/2 w-full md:w-1/2 h-full z-20 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 rounded-3xl md:rounded-r-3xl md:rounded-l-none"
          >
            {/* FAȚA COPERȚII (Albastră) */}
            <div className="absolute inset-0 bg-[#0056B3] rounded-3xl md:rounded-r-3xl md:rounded-l-none shadow-2xl flex flex-col items-center justify-center text-white p-12 backface-hidden border-r-4 border-white/20">
              <div className="w-20 h-20 border-2 border-white/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-black">ST</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Despre Noi</h3>
              <div className="mt-10 flex flex-col items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] opacity-80">Apasă pentru a răsfoi</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-2xl">➜</motion.div>
              </div>
            </div>

            {/* INTERIORUL COPERȚII (Conținutul cerut) */}
            <div 
              className="absolute inset-0 bg-white rounded-3xl md:rounded-l-3xl md:rounded-r-none border-l border-[#D1D9E0] shadow-inner p-8 md:p-10 flex flex-col justify-center text-left backface-hidden"
              style={{ transform: "rotateY(180deg)" }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B263B]">
                Descriere Despre Noi
              </h3>

     <p className="mt-6 text-base sm:text-lg leading-relaxed sm:leading-loose text-[#1B263B]">
              Suntem o companie fondată din pasiune și din dorința de a lăsa
              după noi o lume mai bună decât cea în care ne-am născut. Totul a
              început de la o carte, care ne prezenta o teorie surprinzătoare
              în ceea ce privește un domeniu al fizicii legat de lichide. Deși
              avea în jur de 100 de ani vechime, teoria deschidea ușa către
              multe aplicații și ne-a captat atenția.
              <br />
              <br />
              La început a fost mai mult o joacă, dar am simțit că acolo
              exista ceva ce putea produce o schimbare și am hotărât să ne
              apucăm de studiu. Treptat am început să înțelegem anumite
              lucruri, să facem experimente care ne-au validat principiul ce
              stă la baza primului nostru produs și ne-au dat curajul de a
              merge mai departe.

            </p>
            </div>
          </motion.button>
        </div>

        {/* CTA BUTTON - POZIȚIONAT SUB CARTE */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <p className="mt-8 mb-4 text-[#455361] text-sm font-medium max-w-md">

              Află mai multe despre sursa noastră de inspirație și motivul pentru care am ales să facem acest proiect.

            </p>
            <a
              href="#gogu-tribute"
              className="
                  inline-flex items-center justify-center rounded-full
                  min-h-[48px] px-12 py-4
                  bg-[#0056B3] text-lg font-bold text-white
                  shadow-xl shadow-blue-900/20 transition-all
                  hover:bg-[#004494] hover:-translate-y-1
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 focus-visible:ring-offset-2
                "
            >
              Despre Gogu Constantinescu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}