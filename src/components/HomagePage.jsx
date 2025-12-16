import { motion } from "framer-motion";
import GoguImage from '../assets/GoguImage.jpeg'
export default function HomagePage() {
    return (
        <section
            id="gogu-tribute"
            className="relative isolate overflow-hidden py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100"        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-black opacity-90" />
            {/* HEADER */}
            <div className="relative mx-auto max-w-5xl text-center px-6 mb-20">
                <h2
                    className="text-4xl md:text-6xl font-extrabold pb-5 text-white bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-300 drop-shadow-[0_0_26px_rgba(56,189,248,0.45)] supports-[(-webkit-text-fill-color:transparent)]:text-transparent supports-[(-webkit-background-clip:text)]:bg-clip-text supports-[background-clip:text]:bg-clip-text"
                >
                    Despre Gogu Constantinescu
                </h2>

                <p className="text-slate-300 text-lg mt-4 max-w-3xl mx-auto">
                    Insiparatia si Motivul pentru care ne aflam astazi aici.
                </p>
            </div>

            {/* MAIN FLEX LAYOUT */}
            <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="rounded-3xl overflow-hidden border border-cyan-400/20 shadow-[0_0_45px_rgba(56,189,248,0.25)]">
                        <img
                            src={GoguImage}
                            alt="Portret al lui George «Gogu» Constantinescu, inginer și om de știință român, fondatorul teoriei sonicității"
                            className="w-full h-full object-cover"
                        />

                    </div>
                </motion.div>

                {/* TEXT BLOCKS */}
                <div className="space-y-10">
                    {/* MAIN TEXT ABOUT HIM */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="p-10 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_55px_rgba(56,189,248,0.35)]"
                    >
                        <p className="text-lg leading-relaxed text-slate-200">
                            "In realitate sunetele nu sunt decat o formă de energie si transmiterea sunetului este un caz particular al transmisiei de energie.
                        </p>

                        <p className="text-lg leading-relaxed text-slate-200 mt-6">
                            Această transmisie se face prin unde sonore si atunci mi-am pus problema: oare daca energii in cantități foarte mici cum e de exemplu energia unei trompete,se pot transmite la distanță prin vibrații, nu cumva s-ar putea transforma aceste vibrații in energie mecanică?"
                        </p>

                        <p className="text-lg leading-relaxed text-slate-200 mt-6 opacity-85">
                            -George "Gogu" Constantinescu
                        </p>

                        {/* CTA BUTTON */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://ro.wikipedia.org/wiki/George_Constantinescu"
                            aria-label="Deschide biografia lui George Gogu Constantinescu pe Wikipedia"
                            className="inline-flex items-center justify-center mt-8 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-8 py-3 min-h-[44px] min-w-[44px] text-sm font-semibold text-slate-900 shadow-lg hover:-translate-y-0.5 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 .focus-visible:ring-offset-slate-950">

                            Citește biografia completă
                        </a>

                    </motion.div>

                    {/* LEFT QUOTE BLOCK */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 rounded-3xl bg-black/40 border border-cyan-400/10 shadow-[0_0_25px_rgba(56,189,248,0.12)] text-slate-300"
                    >
                        <p className="text-xl italic leading-relaxed">
                            Nimic din ce am realizat pana acum,sau din ce vom realiza in viitor nu ar fi fost posibil fără George (Gogu) Constantinescu.A fost un mare om de știință despre care s-a vorbit prea putin si care ca si alții asemenea lui,a fost cu mult înaintea vremurilor in care a trăit.
                            A lăsat moștenire,o știință nouă, sonicitatea,din care au ieșit la lumina cateva inventii,mult prea puține, consideram noi,in comparație cu potențialul acesteia.                            Si din acest motiv,ca un omagiu adus la peste un secol de la apariția sonicitatii, vom incerca sa o readucem in lumină deoarece mai are multe de oferit lumii.
                            <br />
                        </p>
                        <p className="opacity-90 mt-10"> Afla mai multe despre cum am implementat si cum functioneaza produsul nostru</p>
                        <a
                            href="#features-detail"
                            aria-label="Navighează către secțiunea cu procesul tehnologic"
                            className="inline-flex items-center justify-center mt-6 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-8 py-3 min-h-[44px] min-w-[44px] text-sm font-semibold text-slate-900 shadow-[0_0_22px_rgba(56,189,248,0.45)] hover:-translate-y-0.5 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"

                        >
                            Vezi Procesul Tehnologic
                        </a>

                    </motion.div>
                </div>
            </div>
        </section >
    );
}

