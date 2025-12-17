// /* eslint-disable no-unused-vars */
// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import stat1 from "../assets/placeholder.jpg";
// import stat2 from "../assets/placeholder.jpg";
// import stat3 from "../assets/placeholder.jpg";

// function Features() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [current, setCurrent] = useState(0);
//   const [anim, setAnim] = useState(false);
//   const [hover, setHover] = useState(false);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const sectionRef = useRef(null);

//   const slides = [stat1, stat2, stat3];

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   useEffect(() => {
//     if (hover || anim) return;
//     const interval = setInterval(
//       () => setCurrent((s) => (s + 1) % slides.length),
//       6500
//     );
//     return () => clearInterval(interval);
//   }, [hover, anim, slides.length]);

//   const next = () => {
//     if (!anim) setCurrent((s) => (s + 1) % slides.length);
//   };

//   const prev = () => {
//     if (!anim) setCurrent((s) => (s - 1 + slides.length) % slides.length);
//   };

//   return (
//     <>
//       <section
//         id="features"
//         ref={sectionRef}
//         className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950/98 to-slate-900 py-32 text-slate-100"
//       >
//         {/* Sonic rings background – option A, more energetic */}
//         <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-[0.55]">
//           <div className="relative aspect-square w-[95rem] max-w-[90vw]">
//             {[0, 1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="absolute left-1/2 top-1/2 rounded-full border border-sky-400/15"
//                 style={{
//                   width: `${55 + i * 22}%`,
//                   height: `${55 + i * 22}%`,
//                   transform: "translate(-50%, -50%)",
//                   boxShadow:
//                     i === 0
//                       ? "0 0 60px rgba(56,189,248,0.35) inset, 0 0 80px rgba(56,189,248,0.15)"
//                       : "0 0 40px rgba(56,189,248,0.08)",
//                 }}
//               />
//             ))}

//             <motion.div
//               initial={{ scale: 0.85, opacity: 0.85 }}
//               animate={{
//                 scale: [0.85, 1.15, 0.85],
//                 opacity: [0.85, 0.4, 0.85],
//               }}
//               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_45px_rgba(56,189,248,0.55)]"
//             />
//           </div>
//         </div>

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative mx-auto mb-20 max-w-4xl px-6 text-center"
//         >
//           <p className="text-xs uppercase tracking-[0.3em] text-sky-300/70">
//             Beneficii
//           </p>
//           <h2 className="mt-4 bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.45)] md:text-5xl">
//             Beneficii Cheie ale Tehnologiei
//           </h2>
//           <div className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
//           <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
//             Vizualizări statistice ce vor demonstra performanța și eficiența
//             tehnologiei în aplicații reale.
//           </p>
//         </motion.div>

//         {/* Carousel */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative mx-auto max-w-7xl px-6"
//           onMouseEnter={() => setHover(true)}
//           onMouseLeave={() => setHover(false)}
//         >
//           <div className="relative overflow-hidden rounded-2xl border border-sky-400/20 bg-slate-900/40 shadow-[0_0_60px_rgba(56,189,248,0.25)] backdrop-blur-xl">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.55, ease: "easeInOut" }}
//                 onAnimationStart={() => setAnim(true)}
//                 onAnimationComplete={() => setAnim(false)}
//                 className="flex flex-col items-center gap-12 p-10 md:flex-row md:p-12"
//                 onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
//                 onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
//                 onTouchEnd={() => {
//                   const dx = touchStart - touchEnd;
//                   if (dx > 55) next();
//                   if (dx < -55) prev();
//                   setTouchStart(0);
//                   setTouchEnd(0);
//                 }}
//               >
//                 {/* Image */}
//                 <div className="relative w-full md:w-1/2">
//                   <img
//                     src={slides[current]}
//                     alt={`Statistică ${current + 1}`}
//                     className="h-[28rem] w-full rounded-2xl border border-sky-400/20 object-cover shadow-[0_0_35px_rgba(56,189,248,0.35)] md:h-[34rem]"
//                   />
//                   <div className="pointer-events-none absolute inset-5 border border-dashed border-sky-300/20" />
//                 </div>

//                 {/* Text */}
//                 <div className="w-full space-y-5 md:w-1/2">
//                   <h3 className="text-3xl font-semibold text-sky-300 drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]">
//                     Statistică #{current + 1}
//                   </h3>
//                   <p className="text-lg leading-relaxed text-slate-200">
//                     Vizualizarea finală va afișa performanța și eficiența
//                     sonic-tehnologiei în diferite scenarii reale, pe baza
//                     datelor măsurate și analizate.
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* CTA #2*/}
//           <div className="flex flex-col items-center mt-12">
//             <p className="text-slate-400 text-sm mb-3 max-w-md text-center">
//               Descoperă etapele tehnologiei și procesul din spatele produsului nostru.
//             </p>


//             <a
//               href="#features-detail"
//               className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5"
//               >
//               Explorează Procesul
//             </a>
//           </div>

//           {/* Arrows */}
//           <div className="pointer-events-none absolute inset-0 hidden items-center justify-between md:flex">
//             <button
//               onClick={prev}
//               className="pointer-events-auto rounded-full border border-sky-400/30 bg-slate-900/60 p-4 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition hover:bg-slate-800"
//               aria-label="Slide anterior"
//             >
//               <ChevronLeft className="h-6 w-6 text-sky-300" />
//             </button>

//             <button
//               onClick={next}
//               className="pointer-events-auto rounded-full border border-sky-400/30 bg-slate-900/60 p-4 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition hover:bg-slate-800"
//               aria-label="Slide următor"
//             >
//               <ChevronRight className="h-6 w-6 text-sky-300" />
//             </button>
//           </div>

//           {/* Dots */}
//           <div className="mt-8 flex justify-center gap-3">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => !anim && setCurrent(i)}
//                 className={`h-2.5 w-2.5 rounded-full border border-sky-400/40 transition-transform duration-200 ${
//                   current === i
//                     ? "scale-110 bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.6)]"
//                     : "bg-slate-900/70 hover:bg-sky-400/50"
//                 }`}
//                 aria-label={`Mergi la statistica ${i + 1}`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }

// export default Features;
