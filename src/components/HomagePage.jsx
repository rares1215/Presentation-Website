import { motion, useReducedMotion } from "framer-motion";
import GoguImage from '../assets/GoguImage.jpeg'

export default function HomagePage() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="gogu-tribute"
            aria-labelledby="gogu-tribute-title"
            /* MODIFICARE: Fundal Ice Blue și text închis */
            className="relative isolate overflow-hidden py-32 bg-[#EBF0F5] text-[#1B263B]"
        >
            {/* Overlay subtil pentru textură */}
            <div className="absolute inset-0 -z-10 bg-[#0056B3]/5 opacity-50" />

            {/* HEADER */}
            <div className="relative mx-auto max-w-5xl text-center px-6 mb-20">
                <h2
                    id="gogu-tribute-title"
                    /* MODIFICARE: Culoare unitară cu CTA-ul */
                    className="text-4xl md:text-5xl font-extrabold pb-5 text-[#0056B3]"
                >
                    Despre Gogu Constantinescu
                </h2>

                <p className="text-[#576574] text-lg mt-4 max-w-3xl mx-auto">
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
                    {/* MODIFICARE: Border discret și umbră soft */}
                    <div className="rounded-3xl overflow-hidden border border-[#D1D9E0] shadow-2xl shadow-blue-900/10">
                        <img
                            src={GoguImage}
                            alt="Portret al lui George «Gogu» Constantinescu"
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
                        /* MODIFICARE: Glassmorphism alb pentru contrast */
                        className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-[#D1D9E0] shadow-lg shadow-blue-900/5"
                    >
                        <p className="text-lg leading-relaxed text-[#1B263B]">
                            "În realitate sunetele nu sunt decât o formă de energie și transmiterea sunetului este un caz particular al transmisiei de energie."
                        </p>

                        <p className="text-lg leading-relaxed text-[#1B263B] mt-6">
                            "Această transmisie se face prin unde sonore și atunci mi-am pus problema: oare dacă energii în cantități foarte mici se pot transmite la distanță prin vibrații, nu cumva s-ar putea transforma aceste vibrații în energie mecanică?"
                        </p>

                        <p className="text-lg font-semibold text-[#576574] mt-6">
                            — George "Gogu" Constantinescu
                        </p>

                        {/* CTA BUTTON 1 */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://ro.wikipedia.org/wiki/George_Constantinescu"
                            className="inline-flex min-h-[44px] 
                            min-w-[44px] items-center justify-center mt-8 rounded-full bg-[#0056B3] px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#004494]
                            hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002D5E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EBF0F5]"
                        >
                            Citește biografia completă
                        </a>
                    </motion.div>

                    {/* SECONDARY QUOTE BLOCK */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        /* MODIFICARE: Fundal foarte deschis pentru diferențiere */
                        className="p-8 rounded-3xl bg-[#0056B3]/5 border border-[#0056B3]/10 text-[#576574]"
                    >
                        <p className="text-xl italic leading-relaxed">
                            Nimic din ce am realizat pana acum,sau din ce vom realiza in viitor nu ar fi fost posibil fără George (Gogu) Constantinescu.A fost un mare om de știință despre care s-a vorbit prea putin si care ca si alții asemenea lui,a fost cu mult înaintea vremurilor in care a trăit.

                            A lăsat moștenire,o știință nouă, sonicitatea,din care au ieșit la lumina cateva inventii,mult prea puține, consideram noi,in comparație cu potențialul acesteia.                            Si din acest motiv,ca un omagiu adus la peste un secol de la apariția sonicitatii, vom incerca sa o readucem in lumină deoarece mai are multe de oferit lumii.

                            <br />
                        </p>
                        <p className="text-sm mt-10 text-[#1B263B]/70"> Află mai multe despre cum am implementat și cum funcționează produsul nostru</p>

                        {/* CTA BUTTON 2 */}
                        <a
                            href="#features-detail"
                            /* MODIFICARE: Varianta Outline/Solid adaptată */
                            className="inline-flex min-h-[44px] 
                            min-w-[44px] items-center justify-center mt-6 rounded-full bg-white border border-[#0056B3] px-8 py-3 text-sm font-semibold text-[#0056B3] shadow-sm hover:bg-[#0056B3] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002D5E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EBF0F5]"
                        >
                            Vezi Procesul Tehnologic
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}