/* eslint-disable no-unused-vars */
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const footerTranslations = {
  ro: {
    title: "Contactează-ne",
    description: "Suntem aici pentru a răspunde întrebărilor tale legate de tehnologia sonicității.",
    ctaBtn: "Trimite-ne un mesaj",
    copyright: "Sonic Technology. Toate drepturile rezervate.",
    addressText: "Str. Via Solarino 39D, Viforata, DB",
    backToTop: "Înapoi sus",
    contacts: [
      { title: "Email" },
      { title: "Telefon" },
      { title: "Adresă" }
    ]
  },
  en: {
    title: "Contact Us",
    description: "We are here to answer your questions regarding sonic technology.",
    ctaBtn: "Send us a message",
    copyright: "Sonic Technology. All rights reserved.",
    addressText: "39D Via Solarino St., Viforata, DB",
    backToTop: "Back to top",
    contacts: [
      { title: "Email" },
      { title: "Phone" },
      { title: "Address" }
    ]
  },
  fr: {
    title: "Contactez-nous",
    description: "Nous sommes ici pour répondre à vos questions concernant la technologie sonique.",
    ctaBtn: "Envoyez-nous un message",
    copyright: "Sonic Technology. Tous droits réservés.",
    addressText: "39D Rue Via Solarino, Viforata, DB",
    backToTop: "Retour en haut",
    contacts: [
      { title: "E-mail" },
      { title: "Téléphone" },
      { title: "Adresse" }
    ]
  },
  es: {
    title: "Contáctanos",
    description: "Estamos aquí para responder a sus preguntas sobre la tecnología sónica.",
    ctaBtn: "Envíenos un mensaje",
    copyright: "Sonic Technology. Todos los derechos reservados.",
    addressText: "Calle Via Solarino 39D, Viforata, DB",
    backToTop: "Volver arriba",
    contacts: [
      { title: "Correo" },
      { title: "Teléfono" },
      { title: "Dirección" }
    ]
  },
  de: {
    title: "Kontaktieren Sie uns",
    description: "Wir sind hier, um Ihre Fragen zur Schalltechnologie (Sonik) zu beantworten.",
    ctaBtn: "Schicken Sie uns eine Nachricht",
    copyright: "Sonic Technology. Alle Rechte vorbehalten.",
    addressText: "Via Solarino Straße 39D, Viforata, DB",
    backToTop: "Nach oben",
    contacts: [
      { title: "E-Mail" },
      { title: "Telefon" },
      { title: "Adresse" }
    ]
  },
  it: {
    title: "Contattaci",
    description: "Siamo qui per rispondere alle tue domande sulla tecnologia sonica.",
    ctaBtn: "Inviaci un messaggio",
    copyright: "Sonic Technology. Tutti i diritti riservati.",
    addressText: "Via Via Solarino 39D, Viforata, DB",
    backToTop: "Torna su",
    contacts: [
      { title: "Email" },
      { title: "Telefono" },
      { title: "Indirizzo" }
    ]
  }
};

export default function Footer({ lang = "ro" }) {
  const prefersReducedMotion = useReducedMotion();
  const t = footerTranslations[lang] || footerTranslations["ro"];

  const scrollToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const contactData = [
    {
      icon: <Mail aria-hidden="true" className="w-10 h-10" />,
      title: t.contacts[0].title,
      // Folosim array pentru a suporta mai multe rânduri dacă e cazul
      items: [{ text: "office@sonictechnology.ro", link: "mailto:office@sonictechnology.ro" }],
    },
    {
      icon: <Phone aria-hidden="true" className="w-10 h-10" />,
      title: t.contacts[1].title,
      // Aici am adăugat cele 3 numere de telefon
      items: [
        { text: "+40 733 170 016", link: "tel:+40 733 170 016" },
        { text: "+40 740 149 481", link: "tel:+40 740 149 481" },
        { text: "+40 723 627 264", link: "tel:+40 723 627 264" },
      ],
    },
    {
      icon: <MapPin aria-hidden="true" className="w-10 h-10" />,
      title: t.contacts[2].title,
      items: [{ text: t.addressText, link: "https://maps.google.com" }],
    },
  ];

  return (
    <footer
      id="contacts"
      aria-labelledby="contacts-title"
      className="relative isolate overflow-hidden bg-[#EBF0F5] text-[#1B263B] py-32"
    >
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-6">
        <h2
          id="contacts-title"
          className="relative text-4xl md:text-5xl font-extrabold text-[#0056B3]"
        >
          {t.title}
        </h2>
        <p className="text-[#37474F] text-lg mt-4 font-semibold">
          {t.description}
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10" role="list">
        {contactData.map((card, i) => (
          <motion.div
            key={i}
            role="listitem"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative p-10 rounded-[2.5rem] bg-white border border-[#D1D9E0] shadow-xl shadow-blue-900/5 text-center group transition-all duration-300"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-20 bg-[#0056B3] rounded-b-full" />

            <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-full bg-[#EBF0F5] border border-[#0056B3]/10 mb-6 transition-colors duration-300 group-hover:bg-[#0056B3] group-hover:text-white">
              <div className="text-[#0056B3] group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#1B263B] mb-4 tracking-wide uppercase">
              {card.title}
            </h3>

            {/* Randare items (pentru telefon vor fi 3) */}
            <div className="flex flex-col gap-2">
              {card.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="inline-block text-[#37474F] text-base md:text-lg font-bold hover:text-[#0056B3] transition-colors px-2"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* BIG CTA */}
      <div className="text-center mt-20">
        <a
          href="mailto:office@sonictechnology.ro"
          className="inline-flex items-center justify-center px-12 py-5 min-h-[48px] rounded-full bg-[#0056B3] text-lg font-bold text-white shadow-lg shadow-blue-900/20 hover:bg-[#004494] hover:-translate-y-1 transition-all duration-300"
        >
          {t.ctaBtn}
        </a>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-t border-[#D1D9E0] mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-[#37474F]">
            © {new Date().getFullYear()} {t.copyright}
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 bg-white border border-[#D1D9E0] rounded-full text-[#0056B3] font-bold text-sm shadow-sm hover:shadow-md hover:border-[#0056B3] transition-all duration-300"
          >
            {t.backToTop}
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}