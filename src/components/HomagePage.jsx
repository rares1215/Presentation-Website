import { motion, useReducedMotion } from "framer-motion";
import GoguImage from '../assets/GoguImage.jpeg';

// 1. DICȚIONARUL DE TRADUCERI
const translations = {
    ro: {
        title: "Despre Gogu Constantinescu",
        subtitle: "Inspirația și motivul pentru care ne aflăm astăzi aici.",
        altText: "Portret al lui George «Gogu» Constantinescu, inventatorul sonicității",
        quote1: "În realitate sunetele nu sunt decât o formă de energie și transmiterea sunetului este un caz particular al transmisiei de energie.",
        quote2: "Această transmisie se face prin unde sonore și atunci mi-am pus problema: oare dacă energii în cantități foarte mici se pot transmite la distanță prin vibrații, nu cumva s-ar putea transforma aceste vibrații în energie mecanică?",
        author: "George \"Gogu\" Constantinescu",
        bioBtn: "Citește biografia completă",
        secondaryText: "Nimic din ce am realizat până acum, sau din ce vom realiza în viitor nu ar fi fost posibil fără George (Gogu) Constantinescu. A fost un mare om de știință despre care s-a vorbit prea puțin și care, ca și alții asemenea lui, a fost cu mult înaintea vremurilor în care a trăit. A lăsat moștenire o știință nouă, sonicitatea, din care au ieșit la lumină câteva invenții, mult prea puține în comparație cu potențialul acesteia. Și din acest motiv, ca un omagiu adus la peste un secol de la apariția sonicității, vom încerca să o readucem în lumină deoarece mai are multe de oferit lumii.",
        featuresInfo: "Află mai multe despre cum am implementat și cum funcționează produsul nostru",
        featuresBtn: "Vezi Procesul Tehnologic"
    },
    en: {
        title: "About Gogu Constantinescu",
        subtitle: "The inspiration and the reason why we are here today.",
        altText: "Portrait of George «Gogu» Constantinescu, the inventor of sonics",
        quote1: "In reality, sounds are nothing but a form of energy, and the transmission of sound is a particular case of energy transmission.",
        quote2: "This transmission occurs through sound waves, and so I asked myself: if very small amounts of energy can be transmitted at a distance through vibrations, could these vibrations not be transformed into mechanical energy?",
        author: "George \"Gogu\" Constantinescu",
        bioBtn: "Read the full biography",
        secondaryText: "Nothing we have achieved so far, or will achieve in the future, would have been possible without George (Gogu) Constantinescu. He was a great scientist who was spoken of too little and who, like others of his kind, was far ahead of the times in which he lived. He left behind a new science, sonics, from which several inventions emerged, far too few compared to its potential. And for this reason, as a tribute more than a century after the appearance of sonics, we will try to bring it back into the light because it still has much to offer the world.",
        featuresInfo: "Learn more about how we implemented it and how our product works",
        featuresBtn: "View Technical Process"
    },
    fr: {
        title: "À propos de Gogu Constantinescu",
        subtitle: "L'inspiration et la raison pour laquelle nous sommes ici aujourd'hui.",
        altText: "Portrait de George «Gogu» Constantinescu, l'inventeur de la sonicité",
        quote1: "En réalité, les sons ne sont qu'une forme d'énergie et la transmission du son est un cas particulier de la transmission d'énergie.",
        quote2: "Cette transmission se fait par ondes sonores et je me suis alors posé la question : si des énergies en très petites quantités peuvent être transmises à distance par des vibrations, ne pourrait-on pas transformer ces vibrations en énergie mécanique ?",
        author: "George \"Gogu\" Constantinescu",
        bioBtn: "Lire la biographie complète",
        secondaryText: "Rien de ce que nous avons réalisé jusqu'à présent, ou de ce que nous réaliserons à l'avenir, n'aurait été possible sans George (Gogu) Constantinescu. C'était un grand scientifique dont on a trop peu parlé et qui, comme d'autres comme lui, était bien en avance sur son temps. Il a légué une science nouvelle, la sonicité, de laquelle sont nées quelques inventions, bien trop peu par rapport à son potentiel. C'est pour cette raison, en hommage plus d'un siècle après l'apparition de la sonicité, que nous tenterons de la remettre en lumière car elle a encore beaucoup à offrir au monde.",
        featuresInfo: "En savoir plus sur notre implémentation et le fonctionnement de notre produit",
        featuresBtn: "Voir le Processus Technique"
    },
    es: {
        title: "Sobre Gogu Constantinescu",
        subtitle: "La inspiración y el motivo por el cual estamos hoy aquí.",
        altText: "Retrato de George «Gogu» Constantinescu, el inventor de la sónica",
        quote1: "En realidad, los sonidos no son más que una forma de energía y la transmisión del sonido es un caso particular de la transmisión de energía.",
        quote2: "Esta transmisión se realiza a través de ondas sonoras y entonces me pregunté: ¿si energías en cantidades muy pequeñas pueden transmitirse a distancia mediante vibraciones, no podrían transformarse estas vibraciones en energía mecánica?",
        author: "George \"Gogu\" Constantinescu",
        bioBtn: "Leer la biografía completa",
        secondaryText: "Nada de lo que hemos logrado hasta ahora, ni lo que lograremos en el futuro, habría sido posible sin George (Gogu) Constantinescu. Fue un gran científico del que se habló demasiado poco y que, al igual que otros como él, estuvo muy adelantado a los tiempos en los que vivió. Dejó como legado una nueva ciencia, la sónica, de la cual surgieron algunos inventos, muy pocos en comparación con su potencial. Por este motivo, como homenaje más de un siglo después de la aparición de la sónica, intentaremos sacarla de nuevo a la luz porque todavía tiene mucho que ofrecer al mundo.",
        featuresInfo: "Conozca más sobre cómo lo implementamos y cómo funciona nuestro producto",
        featuresBtn: "Ver el Proceso Técnico"
    }
};

export default function HomagePage({ lang = "ro" }) {
    const prefersReducedMotion = useReducedMotion();
    const t = translations[lang]; // Selectăm traducerile pe baza limbii primite

    return (
        <section
            id="gogu-tribute"
            aria-labelledby="gogu-tribute-title"
            className="relative isolate overflow-hidden py-32 bg-[#EBF0F5] text-[#1B263B]"
        >
            <div className="absolute inset-0 -z-10 bg-[#0056B3]/5 opacity-50" aria-hidden="true" />

            {/* HEADER */}
            <div className="relative mx-auto max-w-5xl text-center px-6 mb-20">
                <h2
                    id="gogu-tribute-title"
                    className="text-4xl md:text-5xl font-extrabold pb-5 text-[#0056B3]"
                >
                    {t.title}
                </h2>
                <p className="text-[#43515E] text-lg mt-4 max-w-3xl mx-auto font-medium">
                    {t.subtitle}
                </p>
            </div>

            {/* MAIN FLEX LAYOUT */}
            <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* IMAGE SECTION */}
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="rounded-3xl overflow-hidden border border-[#D1D9E0] shadow-2xl shadow-blue-900/10">
                        <img
                            src={GoguImage}
                            alt={t.altText}
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
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-[#D1D9E0] shadow-lg shadow-blue-900/5"
                    >
                        <blockquote className="space-y-6">
                            <p className="text-lg leading-relaxed text-[#1B263B]">
                                "{t.quote1}"
                            </p>
                            <p className="text-lg leading-relaxed text-[#1B263B]">
                                "{t.quote2}"
                            </p>
                            <footer className="text-lg font-bold text-[#43515E] mt-6">
                                — {t.author}
                            </footer>
                        </blockquote>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://ro.wikipedia.org/wiki/George_Constantinescu"
                            className="inline-flex min-h-[48px] items-center justify-center mt-8 rounded-full bg-[#0056B3] px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-[#004494] hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50"
                        >
                            {t.bioBtn}
                        </a>
                    </motion.div>

                    {/* SECONDARY QUOTE BLOCK */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 rounded-3xl bg-[#0056B3]/5 border border-[#0056B3]/10 text-[#43515E]"
                    >
                        <p className="text-xl italic leading-relaxed text-[#1B263B]">
                            {t.secondaryText}
                        </p>

                        <p className="text-sm mt-10 text-[#1B263B] font-medium">
                            {t.featuresInfo}
                        </p>

                        <a
                            href="#features-detail"
                            className="inline-flex min-h-[48px] items-center justify-center mt-6 rounded-full bg-white border-2 border-[#0056B3] px-8 py-3 text-base font-bold text-[#0056B3] shadow-sm hover:bg-[#0056B3] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50"
                        >
                            {t.featuresBtn}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}