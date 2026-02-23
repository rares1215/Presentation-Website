/* eslint-disable no-unused-vars */
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const footerTranslations = {
  ro: {
    title: "Contactează-ne",
    description: "Suntem aici pentru a răspunde întrebărilor tale legate de tehnologia sonicității.",
    ctaBtn: "Trimite-ne un mesaj",
    copyright: "Sonic Technology. Toate drepturile rezervate.",
    addressText: "Str. Inovației 12, București",
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
    addressText: "12 Innovation St., Bucharest",
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
    addressText: "12 Rue de l'Innovation, Bucarest",
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
    addressText: "Calle de la Innovación 12, Bucarest",
    contacts: [
      { title: "Correo" },
      { title: "Teléfono" },
      { title: "Dirección" }
    ]
  }
};

export default function Footer({ lang = "ro" }) {
  const prefersReducedMotion = useReducedMotion();
  const t = footerTranslations[lang] || footerTranslations["ro"];

  const contactData = [
    {
      icon: <Mail aria-hidden="true" className="w-10 h-10" />,
      title: t.contacts[0].title,
      text: "contact@sonictech.com",
      link: "mailto:contact@sonictech.com",
    },
    {
      icon: <Phone aria-hidden="true" className="w-10 h-10" />,
      title: t.contacts[1].title,
      text: "+40 123 456 789",
      link: "tel:+40123456789",
    },
    {
      icon: <MapPin aria-hidden="true" className="w-10 h-10" />,
      title: t.contacts[2].title,
      text: t.addressText,
      link: "https://maps.google.com",
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

      {/* CONTACT CARDS PANEL */}
      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10" role="list">
        {contactData.map((item, i) => (
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

            {/* ICON CONTAINER */}
            <div
              className="flex items-center justify-center h-24 w-24 mx-auto rounded-full bg-[#EBF0F5] border border-[#0056B3]/10 mb-6 transition-colors duration-300 group-hover:bg-[#0056B3] group-hover:text-white"
            >
              <div className="text-[#0056B3] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#1B263B] mb-2 tracking-wide uppercase">
              {item.title}
            </h3>

            <a
              href={item.link}
              className="inline-block text-[#37474F] text-base md:text-lg font-bold hover:text-[#0056B3] transition-colors min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056B3] focus-visible:rounded-lg px-2"
            >
              {item.text}
            </a>
          </motion.div>
        ))}
      </div>

      {/* BIG CTA */}
      <div className="text-center mt-20">
        <a
          href="mailto:contact@sonictech.com"
          className="
              inline-flex items-center justify-center
              px-12 py-5
              min-h-[48px]
              rounded-full
              bg-[#0056B3]
              text-lg font-bold text-white
              shadow-lg shadow-blue-900/20
              hover:bg-[#004494]
              hover:-translate-y-1
              transition-all duration-300
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-[#0056B3]/40
              focus-visible:ring-offset-4
              focus-visible:ring-offset-[#EBF0F5]
            "
        >
          {t.ctaBtn}
        </a>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-[#D1D9E0] mt-24 pt-8 text-center text-sm font-bold text-[#37474F]">
        © {new Date().getFullYear()} {t.copyright}
      </div>
    </footer>
  );
}