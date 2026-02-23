/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const aboutTranslations = {
  ro: {
    badge: "Povestea Noastră",
    title: "Descoperă Sonic Technology",
    clickHint: "Click pe carte pentru a ne cunoaște viziunea",
    bookCover: "Despre Noi",
    bookHint: "Apasă pentru a răsfoi",
    bookTitle: "Descriere Despre Noi",
    mainText: "Suntem o companie fondată din pasiune și din dorința de a lăsa după noi o lume mai bună decât cea în care ne-am născut. Totul a început de la o carte, care ne prezenta o teorie surprinzătoare în ceea ce privește un domeniu al fizicii legat de lichide. Deși avea în jur de 100 de ani vechime, teoria deschidea ușa către multe aplicații și ne-a captat atenția.<br /><br />La început a fost mai mult o joacă, dar am simțit că acolo exista ceva ce putea produce o schimbare și am hotărât să ne apucăm de studiu. Treptat am început să înțelegem anumite lucruri, să facem experimente care ne-au validat principiul ce stă la baza primului nostru produs și ne-au dat curajul de a merge mai departe.",
    sonicTitle: "Ce reprezintă SONIC TECHNOLOGY?",
    details: [
      { letter: "S", title: "implitate", desc: "un sistem compus din piese puține și simple, foarte efficient." },
      { letter: "O", title: "riginalitate", desc: "folosim o tehnologie originală, veche de peste 100 de ani." },
      { letter: "N", title: "eutralitate", desc: "fără impact asupra mediului datorită consumului mic de energie, care cu ușurință poate fi susținut de energia verde și deasemenea datorită materialelor folosite care pot fi găsite în toată lumea." },
      { letter: "I", title: "novație", desc: "tehnologie care va inova multe domenii" },
      { letter: "C", title: "omfort", desc: "datorat fiabilității produselor și faptului ca nu va fi nevoie de autorizații sau revizii periodice. Energia produsă de centrala va fi la cel mai mic cost posibil existent la ora actuală" },
    ],
    ctaHint: "Află mai multe despre sursa noastră de inspirație și motivul pentru care am ales să facem acest proiect.",
    ctaBtn: "Despre Gogu Constantinescu",
    ariaOpen: "Închide cartea",
    ariaClosed: "Deschide descrierea despre Sonic Technology"
  },
  en: {
    badge: "Our Story",
    title: "Discover Sonic Technology",
    clickHint: "Click the book to discover our vision",
    bookCover: "About Us",
    bookHint: "Click to flip",
    bookTitle: "Our Description",
    mainText: "We are a company founded on passion and the desire to leave behind a better world than the one we were born into. It all started with a book that presented a surprising theory regarding a field of physics related to liquids. Although it was around 100 years old, the theory opened the door to many applications and captured our attention.<br /><br />At first, it was more of a game, but we felt there was something there that could produce a change and decided to start studying. Gradually, we began to understand certain things, conduct experiments that validated the principle behind our first product, and gave us the courage to move forward.",
    sonicTitle: "What does SONIC TECHNOLOGY represent?",
    details: [
      { letter: "S", title: "implicity", desc: "a system composed of few and simple parts, very efficient." },
      { letter: "O", title: "riginality", desc: "we use an original technology, over 100 years old." },
      { letter: "N", title: "eutrality", desc: "no environmental impact due to low energy consumption, easily supported by green energy, and also due to materials used that can be found worldwide." },
      { letter: "I", title: "nnovation", desc: "technology that will innovate many fields" },
      { letter: "C", title: "omfort", desc: "due to product reliability and the fact that no periodic permits or revisions will be needed. The energy produced will be at the lowest possible cost currently existing." },
    ],
    ctaHint: "Learn more about our source of inspiration and the reason we chose this project.",
    ctaBtn: "About Gogu Constantinescu",
    ariaOpen: "Close the book",
    ariaClosed: "Open the description about Sonic Technology"
  },
  fr: {
    badge: "Notre Histoire",
    title: "Découvrez Sonic Technology",
    clickHint: "Cliquez sur le livre pour découvrir notre vision",
    bookCover: "À Propos",
    bookHint: "Appuyez pour feuilleter",
    bookTitle: "Description De Nous",
    mainText: "Nous sommes une entreprise fondée sur la passion et le désir de laisser derrière nous un monde meilleur que celui dans lequel nous sommes nés. Tout a commencé par un livre qui présentait une théorie surprenante concernant un domaine de la physique lié aux liquides. Bien qu'elle ait environ 100 ans, la théorie ouvrait la porte à de nombreuses applications et a capté notre attention.<br /><br />Au début, c'était plutôt un jeu, mais nous avons senti qu'il y avait là quelque chose qui pouvait produire un changement et nous avons décidé de commencer à étudier. Progressivement, nous avons commencé à comprendre certaines choses, à mener des expériences qui ont validé le principe à la base de notre premier produit et nous ont donné le courage d'aller de l'avant.",
    sonicTitle: "Que représente SONIC TECHNOLOGY ?",
    details: [
      { letter: "S", title: "implicité", desc: "un système composé de pièces peu nombreuses et simples, très efficace." },
      { letter: "O", title: "riginalité", desc: "nous utilisons une technologie originale, vieille de plus de 100 ans." },
      { letter: "N", title: "eutralité", desc: "aucun impact environnemental grâce à une faible consommation d'énergie, facilement soutenue par l'énergie verte, et aux matériaux trouvables partout dans le monde." },
      { letter: "I", title: "nnovation", desc: "technologie qui innovera dans de nombreux domaines" },
      { letter: "C", title: "onfort", desc: "dû à la fiabilité des produits et à l'absence de permis ou révisions périodiques nécessaires. L'énergie produite sera au coût le plus bas possible actuellement." },
    ],
    ctaHint: "En savoir plus sur notre source d'inspiration et la raison pour laquelle nous avons choisi ce projet.",
    ctaBtn: "À propos de Gogu Constantinescu",
    ariaOpen: "Fermer le livre",
    ariaClosed: "Ouvrir la description de Sonic Technology"
  },
  es: {
    badge: "Nuestra Historia",
    title: "Descubre Sonic Technology",
    clickHint: "Haz clic en el libro para conocer nuestra visión",
    bookCover: "Nosotros",
    bookHint: "Pulsa para hojear",
    bookTitle: "Nuestra Descripción",
    mainText: "Somos una empresa fundada por pasión y por el deseo de dejar tras nosotros un mundo mejor que aquel en el que nacimos. Todo empezó con un libro que presentaba una teoría sorprendente sobre un campo de la física relacionado con los líquidos. Aunque tenía unos 100 años de antigüedad, la teoría abría la puerta a muchas aplicaciones y captó nuestra atención.<br /><br />Al principio fue más un juego, pero sentimos que había algo allí que podía producir un cambio y decidimos empezar a estudiar. Gradualmente empezamos a entender ciertas cosas, a realizar experimentos que validaron el principio que sustenta nuestro primer producto y nos dieron el valor para seguir adelante.",
    sonicTitle: "¿Qué representa SONIC TECHNOLOGY?",
    details: [
      { letter: "S", title: "implicidad", desc: "un sistema compuesto por piezas pocas y simples, muy eficiente." },
      { letter: "O", title: "riginalidad", desc: "utilizamos una tecnología original, de más de 100 años de antigüedad." },
      { letter: "N", title: "eutralidad", desc: "sin impacto ambiental debido al bajo consumo de energía, apoyado por energía verde, y debido a materiales disponibles en todo el mundo." },
      { letter: "I", title: "nnovación", desc: "tecnología que innovará en muchos campos" },
      { letter: "C", title: "omfort", desc: "debido a la fiabilidad de los productos y al hecho de que no se necesitarán permisos ni revisiones periódicas. La energía producida tendrá el coste más bajo posible actualmente." },
    ],
    ctaHint: "Conoce más sobre nuestra fuente de inspiración y el motivo por el cual elegimos este proyecto.",
    ctaBtn: "Sobre Gogu Constantinescu",
    ariaOpen: "Cerrar el libro",
    ariaClosed: "Abrir la descripción de Sonic Technology"
  },
  de: {
    badge: "Unsere Geschichte",
    title: "Entdecken Sie Sonic Technology",
    clickHint: "Klicken Sie auf das Buch, um unsere Vision kennenzulernen",
    bookCover: "Über Uns",
    bookHint: "Zum Blättern klicken",
    bookTitle: "Über Uns Beschreibung",
    mainText: "Wir sind ein Unternehmen, das aus Leidenschaft und dem Wunsch heraus gegründet wurde, eine bessere Welt zu hinterlassen, als wir sie vorgefunden haben. Alles begann mit einem Buch, das eine überraschende Theorie über ein Gebiet der Physik im Zusammenhang mit Flüssigkeiten vorstellte. Obwohl die Theorie etwa 100 Jahre alt war, öffnete sie die Tür zu vielen Anwendungen und fesselte unsere Aufmerksamkeit.<br /><br />Am Anfang war es eher ein Spiel, aber wir spürten, dass dort etwas war, das eine Veränderung bewirken konnte, und beschlossen, mit dem Studium zu beginnen. Allmählich begannen wir, bestimmte Dinge zu verstehen, Experimente durchzuführen, die das Prinzip hinter unserem ersten Produkt bestätigten, und uns den Mut gaben, weiterzumachen.",
    sonicTitle: "Was repräsentiert SONIC TECHNOLOGY?",
    details: [
      { letter: "S", title: "implizität", desc: "ein System aus wenigen und einfachen Teilen, sehr effizient." },
      { letter: "O", title: "riginalität", desc: "wir verwenden eine originelle Technologie, die über 100 Jahre alt ist." },
      { letter: "N", title: "eutralität", desc: "keine Umweltbelastung durch geringen Energieverbrauch, der problemlos durch grüne Energie gedeckt werden kann, sowie durch weltweit verfügbare Materialien." },
      { letter: "I", title: "nnovation", desc: "eine Technologie, die viele Bereiche innovieren wird." },
      { letter: "C", title: "omfort", desc: "dank der Zuverlässigkeit der Produkte und der Tatsache, dass keine Genehmigungen oder regelmäßigen Wartungen erforderlich sind. Die erzeugte Energie wird zu den derzeit niedrigsten Kosten verfügbar sein." },
    ],
    ctaHint: "Erfahren Sie mehr über unsere Inspirationsquelle und den Grund, warum wir uns für dieses Projekt entschieden haben.",
    ctaBtn: "Über Gogu Constantinescu",
    ariaOpen: "Buch schließen",
    ariaClosed: "Beschreibung über Sonic Technology öffnen"
  },
  it: {
    badge: "La Nostra Storia",
    title: "Scopri Sonic Technology",
    clickHint: "Clicca sul libro per conoscere la nostra visione",
    bookCover: "Chi Siamo",
    bookHint: "Clicca per sfogliare",
    bookTitle: "Descrizione Chi Siamo",
    mainText: "Siamo un'azienda fondata sulla passione e sul desiderio di lasciare un mondo migliore di quello in cui siamo nati. Tutto è iniziato con un libro che presentava una teoria sorprendente riguardante un campo della fisica legato ai liquidi. Sebbene avesse circa 100 anni, la teoria apriva la porta a molte applicazioni e ha catturato la nostra attenzione.<br /><br />All'inizio era più un gioco, ma sentivamo che c'era qualcosa che poteva produrre un cambiamento e abbiamo deciso di iniziare a studiare. Gradualmente abbiamo iniziato a capire certe cose, a condurre esperimenti che hanno convalidato il principio alla base del nostro primo prodotto e ci hanno dato il coraggio di andare avanti.",
    sonicTitle: "Cosa rappresenta SONIC TECHNOLOGY?",
    details: [
      { letter: "S", title: "emplicità", desc: "un sistema composto da pochi e semplici pezzi, molto efficiente." },
      { letter: "O", title: "riginalità", desc: "utilizziamo una tecnologia originale, vecchia di oltre 100 anni." },
      { letter: "N", title: "eutralità", desc: "nessun impatto ambientale grazie al basso consumo energetico, facilmente supportato dall'energia verde, e grazie ai materiali utilizzati reperibili in tutto il mondo." },
      { letter: "I", title: "nnovazione", desc: "tecnologia che innoverà molti campi" },
      { letter: "C", title: "omfort", desc: "grazie all'affidabilità dei prodotti e al fatto che non saranno necessari permessi o revisioni periodiche. L'energia prodotta sarà al costo più basso possibile attualmente esistente." },
    ],
    ctaHint: "Scopri di più sulla nostra fonte d'ispirazione e sul motivo per cui abbiamo scelto questo progetto.",
    ctaBtn: "Su Gogu Constantinescu",
    ariaOpen: "Chiudi il libro",
    ariaClosed: "Apri la descrizione di Sonic Technology"
  }
};

export default function About({ lang = "ro" }) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const t = aboutTranslations[lang];

  const toggleBook = () => setIsOpen(!isOpen);

  return (
    <section
      id="about"
      className="relative bg-[#EBF0F5] py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#455361]">{t.badge}</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#0056B3]">{t.title}</h2>
          <p className="mt-4 text-[#455361] font-medium italic">{t.clickHint}</p>
        </div>

        {/* CONTAINER CARTE */}
        <div className="relative perspective-2000 w-full max-w-6xl mx-auto h-[700px] md:h-[650px]">

          {/* PAGINA DREAPTA (Fixă - SONIC Acronim) */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-white shadow-xl rounded-r-3xl border border-[#D1D9E0] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-black text-[#1B263B] mb-8">
              {t.sonicTitle.split("SONIC TECHNOLOGY")[0]}
              <span className="text-[#0056B3]">SONIC TECHNOLOGY?</span>
            </h3>
            <div className="space-y-5">
              {t.details.map((item, index) => (
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
            aria-label={isOpen ? t.ariaOpen : t.ariaClosed}
            animate={{ rotateY: isOpen ? -180 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left"
            }}
            className="absolute top-0 left-0 md:left-1/2 w-full md:w-1/2 h-full z-20 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 rounded-3xl md:rounded-r-3xl md:rounded-l-none"
          >
            {/* FAȚA COPERȚII */}
            <div className="absolute inset-0 bg-[#0056B3] rounded-3xl md:rounded-r-3xl md:rounded-l-none shadow-2xl flex flex-col items-center justify-center text-white p-12 backface-hidden border-r-4 border-white/20">
              <div className="w-20 h-20 border-2 border-white/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-black">ST</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-widest">{t.bookCover}</h3>
              <div className="mt-10 flex flex-col items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] opacity-80">{t.bookHint}</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-2xl">➜</motion.div>
              </div>
            </div>

            {/* INTERIORUL COPERȚII */}
            <div
              className="absolute inset-0 bg-white rounded-3xl md:rounded-l-3xl md:rounded-r-none border-l border-[#D1D9E0] shadow-inner p-8 md:p-10 flex flex-col justify-center text-left backface-hidden"
              style={{ transform: "rotateY(180deg)" }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B263B]">
                {t.bookTitle}
              </h3>
              <p
                className="mt-6 text-base sm:text-lg leading-relaxed sm:leading-loose text-[#1B263B]"
                dangerouslySetInnerHTML={{ __html: t.mainText }}
              />
            </div>
          </motion.button>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mt-8 mb-4 text-[#455361] text-sm font-medium max-w-md">
              {t.ctaHint}
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
              {t.ctaBtn}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}