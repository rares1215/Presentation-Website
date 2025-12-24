import { motion, useReducedMotion } from "framer-motion";
import GoguImage from '../assets/GoguImage.jpeg'

export default function HomagePage() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="gogu-tribute"
            aria-labelledby="gogu-tribute-title"
            /* FUNDAL: Ice Blue și text închis pentru lizibilitate */
            className="relative isolate overflow-hidden py-32 bg-[#EBF0F5] text-[#1B263B]"
        >
            {/* Overlay subtil pentru textură - aria-hidden pentru a nu confuza cititoarele de ecran */}
            <div className="absolute inset-0 -z-10 bg-[#0056B3]/5 opacity-50" aria-hidden="true" />

            {/* HEADER */}
            <div className="relative mx-auto max-w-5xl text-center px-6 mb-20">
                <h2
                    id="gogu-tribute-title"
                    className="text-4xl md:text-5xl font-extrabold pb-5 text-[#0056B3]"
                >
                    Despre Gogu Constantinescu
                </h2>

                {/* MODIFICARE: Culoare text ajustată pentru contrast WCAG AA (#43515E) */}
                <p className="text-[#43515E] text-lg mt-4 max-w-3xl mx-auto font-medium">
                    Inspirația și motivul pentru care ne aflăm astăzi aici.
                </p>
            </div>

            {/* MAIN FLEX LAYOUT */}
            <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* IMAGE SECTION */}
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="rounded-3xl overflow-hidden border border-[#D1D9E0] shadow-2xl shadow-blue-900/10">
                        <img
                            src={GoguImage}
                            /* ALT TEXT: Respectă regula de text alternativ descriptiv */
                            alt="Portret al lui George «Gogu» Constantinescu, inventatorul sonicității"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>

                {/* TEXT BLOCKS */}
                <div className="space-y-10">
                    {/* MAIN TEXT CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-[#D1D9E0] shadow-lg shadow-blue-900/5"
                    >
                        <blockquote className="space-y-6">
                            <p className="text-lg leading-relaxed text-[#1B263B]">
                                "În realitate sunetele nu sunt decât o formă de energie și transmiterea sunetului este un caz particular al transmisiei de energie."
                            </p>

                            <p className="text-lg leading-relaxed text-[#1B263B]">
                                "Această transmisie se face prin unde sonore și atunci mi-am pus problema: oare dacă energii în cantități foarte mici se pot transmite la distanță prin vibrații, nu cumva s-ar putea transforma aceste vibrații în energie mecanică?"
                            </p>

                            {/* MODIFICARE: Contrast crescut pentru autorul citatului */}
                            <footer className="text-lg font-bold text-[#43515E] mt-6">
                                — George "Gogu" Constantinescu
                            </footer>
                        </blockquote>

                        {/* CTA BUTTON 1 - MODIFICARE: min-h-[48px] și ring-4 pentru accesibilitate */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://ro.wikipedia.org/wiki/George_Constantinescu"
                            className="inline-flex min-h-[48px] 
                            min-w-[48px] items-center justify-center mt-8 rounded-full bg-[#0056B3] px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-[#004494]
                            hover:-translate-y-0.5 transition-all 
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EBF0F5]"
                        >
                            Citește biografia completă
                        </a>
                    </motion.div>

                    {/* SECONDARY QUOTE BLOCK */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        /* MODIFICARE: Culoare text #43515E pentru lizibilitate pe fundalul deschis */
                        className="p-8 rounded-3xl bg-[#0056B3]/5 border border-[#0056B3]/10 text-[#43515E]"
                    >
                        <p className="text-xl italic leading-relaxed">
                            Nimic din ce am realizat până acum, sau din ce vom realiza în viitor nu ar fi fost posibil fără George (Gogu) Constantinescu. A fost un mare om de știință despre care s-a vorbit prea puțin și care, ca și alții asemenea lui, a fost cu mult înaintea vremurilor în care a trăit.
                            <br /><br />
                            A lăsat moștenire o știință nouă, sonicitatea, din care au ieșit la lumină câteva invenții, mult prea puține în comparație cu potențialul acesteia. Și din acest motiv, ca un omagiu adus la peste un secol de la apariția sonicității, vom încerca să o readucem în lumină deoarece mai are multe de oferit lumii.
                        </p>

                        {/* MODIFICARE: Contrast îmbunătățit pentru textul mic secundar */}
                        <p className="text-sm mt-10 text-[#1B263B] font-medium">
                            Află mai multe despre cum am implementat și <br /> cum funcționează produsul nostru
                        </p>

                        {/* CTA BUTTON 2 - MODIFICARE: min-h-[48px], text-base pentru scalabilitate și focus vizibil */}
                        <a
                            href="#features-detail"
                            className="inline-flex min-h-[48px] 
                            min-w-[48px] items-center justify-center mt-6 rounded-full bg-white border-2 border-[#0056B3] px-8 py-3 text-base font-bold text-[#0056B3] shadow-sm hover:bg-[#0056B3] hover:text-white transition-all 
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EBF0F5]"
                        >
                            Vezi Procesul Tehnologic
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}