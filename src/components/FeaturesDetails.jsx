import { motion, useReducedMotion } from "framer-motion";
import { Zap, Droplets, ThermometerSun, ShieldCheck, Sun, Settings2, Sparkles } from "lucide-react";

// DICȚIONARUL DE TRADUCERI INTEGRAL
const featuresTranslations = {
  ro: {
    badge: "Viitorul ACM & Încălzirii",
    title: "O soluție",
    titleAccent: "revoluționară",
    titleEnd: "pentru confortul tău",
    para1: "Viața modernă este intim legată de două necesități fundamentale pentru confort și igienă: <strong>apa caldă menajeră (ACM)</strong> și <strong>încălzirea locuințelor</strong>. De la ritualurile zilnice de igienă personală până la confortul termic esențial în anotimpurile reci, acestea nu sunt un lux, ci piloni ai calității vieții.",
    para2: "SONIC TECHNOLOGY propune o abordare vizionară prin înlocuirea arzătoarelor pe gaz cu un <strong>generator sonic pe bază de curent electric</strong>, adaptând producția de ACM și căldură la standardele de eficiență și sustenabilitate ale viitorului.",
    quote: "SONIC TECHNOLOGY nu produce centrala finală, ci pune la dispoziție tehnologia noastră oricărui producător interesat.",
    generatorLabel: "GENERATOR",
    sonicLabel: "SONIC",
    advantagesTitle: "Avantajele Centralei Sonice",
    ctaBtn: "Descoperă De Ce Să Ne Alegi",
    advantages: [
      { title: "Compactă și Versatilă", desc: "Dimensiuni similare centralelor pe gaz, înlocuind cu succes vechile sisteme fără a ocupa spațiu extra." },
      { title: "Zero Birocrație", desc: "Nu necesită autorizații speciale ISCIR sau verificări periodice ale instalației de gaz." },
      { title: "Instalare Simplificată", desc: "Fără coș de evacuare sau găuri în pereți. Necesită doar o sursă de apă și curent electric." },
      { title: "Eco-Ready", desc: "Consum redus de energie, fiind ideală pentru conectarea directă la panouri fotovoltaice." },
      { title: "Performanță Extremă", desc: "Spre deosebire de pompele de căldură, eficiența rămâne maximă chiar și sub -8°C." },
      { title: "Costuri Reduse", desc: "Mentenanță minimală prin eliminarea verificărilor obligatorii la fiecare 2 ani." },
    ]
  },
  en: {
    badge: "The Future of DHW & Heating",
    title: "A",
    titleAccent: "revolutionary",
    titleEnd: "solution for your comfort",
    para1: "Modern life is intimately linked to two fundamental necessities for comfort and hygiene: <strong>domestic hot water (DHW)</strong> and <strong>home heating</strong>. From daily personal hygiene rituals to essential thermal comfort in cold seasons, these are not a luxury, but pillars of quality of life.",
    para2: "SONIC TECHNOLOGY proposes a visionary approach by replacing gas burners with an <strong>electric-based sonic generator</strong>, adapting DHW and heat production to the efficiency and sustainability standards of the future.",
    quote: "SONIC TECHNOLOGY does not produce the final boiler, but makes our technology available to any interested manufacturer.",
    generatorLabel: "GENERATOR",
    sonicLabel: "SONIC",
    advantagesTitle: "Advantages of the Sonic Boiler",
    ctaBtn: "Discover Why To Choose Us",
    advantages: [
      { title: "Compact & Versatile", desc: "Dimensions similar to gas boilers, successfully replacing old systems without taking up extra space." },
      { title: "Zero Bureaucracy", desc: "Does not require special ISCIR permits or periodic checks of the gas installation." },
      { title: "Simplified Installation", desc: "No exhaust flue or holes in the walls. Requires only a water source and electricity." },
      { title: "Eco-Ready", desc: "Low energy consumption, making it ideal for direct connection to photovoltaic panels." },
      { title: "Extreme Performance", desc: "Unlike heat pumps, efficiency remains maximum even below -8°C." },
      { title: "Reduced Costs", desc: "Minimal maintenance by eliminating mandatory checks every 2 years." },
    ]
  },
  fr: {
    badge: "L'avenir de l'ECS et du Chauffage",
    title: "Une solution",
    titleAccent: "révolutionnaire",
    titleEnd: "pour votre confort",
    para1: "La vie moderne est intimement liée à deux nécessités fondamentales pour le confort et l'hygiène : <strong>l'eau chaude sanitaire (ECS)</strong> et <strong>le chauffage des habitations</strong>. Des rituels quotidiens d'hygiène personnelle au confort thermique essentiel en saison froide, ce ne sont pas un luxe, mais des piliers de la qualité de vie.",
    para2: "SONIC TECHNOLOGY propose une approche visionnaire en remplaçant les brûleurs à gaz par un <strong>générateur sonique électrique</strong>, adaptant la production d'ECS et de chaleur aux normes d'efficacité et de durabilité du futur.",
    quote: "SONIC TECHNOLOGY ne produit pas la chaudière finale, mais met notre technologie à la disposition de tout fabricant intéressé.",
    generatorLabel: "GÉNÉRATEUR",
    sonicLabel: "SONIQUE",
    advantagesTitle: "Avantages de la Chaudière Sonique",
    ctaBtn: "Découvrez Pourquoi Nous Choisir",
    advantages: [
      { title: "Compacte et Polyvalente", desc: "Dimensions similaires aux chaudières à gaz, remplaçant avec succès les anciens systèmes sans prendre d'espace supplémentaire." },
      { title: "Zéro Bureaucratie", desc: "Ne nécessite pas d'autorisations spéciales ISCIR ou de vérifications périodiques de l'installation de gaz." },
      { title: "Installation Simplifiée", desc: "Pas de conduit d'évacuation ni de trous dans les murs. Nécessite uniquement une source d'eau et de l'électricité." },
      { title: "Eco-Ready", desc: "Faible consommation d'énergie, idéal pour une connexion directe aux panneaux photovoltaïques." },
      { title: "Performance Extrême", desc: "Contrairement aux pompes à chaleur, l'efficacité reste maximale même en dessous de -8°C." },
      { title: "Coûts Réduits", desc: "Entretien minimal en éliminant les contrôles obligatoires tous les 2 ans." },
    ]
  },
  es: {
    badge: "El Futuro del ACS y la Calefacción",
    title: "Una solución",
    titleAccent: "revolucionaria",
    titleEnd: "para su comodidad",
    para1: "La vida moderna está íntimamente ligada a dos necesidades fundamentales para el confort y la higiene: <strong>el agua caliente sanitaria (ACS)</strong> y <strong>la calefacción de los hogares</strong>. Desde los rituales diarios de higiene personal hasta el confort térmico esencial en las estaciones frías, estos no son un lujo, sino pilares de la calidad de vida.",
    para2: "SONIC TECHNOLOGY propone un enfoque visionario al sustituir los quemadores de gas por un <strong>generador sónico eléctrico</strong>, adaptando la producción de ACS y calor a los estándares de eficiencia y sostenibilidad del futuro.",
    quote: "SONIC TECHNOLOGY no produce la caldera final, sino que pone nuestra tecnología a disposición de cualquier fabricante interesado.",
    generatorLabel: "GENERADOR",
    sonicLabel: "SÓNICO",
    advantagesTitle: "Ventajas de la Caldera Sónica",
    ctaBtn: "Descubra Por Qué Elegirnos",
    advantages: [
      { title: "Compacta y Versátil", desc: "Dimensiones similares a las calderas de gas, sustituyendo con éxito los sistemas antiguos sin ocupar espacio extra." },
      { title: "Cero Burocracia", desc: "No requiere permisos especiales de ISCIR ni revisiones periódicas de la instalación de gas." },
      { title: "Instalación Simplificada", desc: "Sin conducto de evacuación ni agujeros en las paredes. Solo requiere una fuente de agua y electricidad." },
      { title: "Eco-Ready", desc: "Bajo consumo de energía, ideal para la conexión directa a paneles fotovoltaicos." },
      { title: "Rendimiento Extremo", desc: "A diferencia de las bombas de calor, la eficiencia se mantiene al máximo incluso por debajo de -8°C." },
      { title: "Costes Reducidos", desc: "Mantenimiento mínimo al eliminar las revisiones obligatorias cada 2 años." },
    ]
  },
  de: {
    badge: "Die Zukunft von Brauchwarmwasser & Heizung",
    title: "Eine",
    titleAccent: "revolutionäre",
    titleEnd: "Lösung für Ihren Komfort",
    para1: "Das moderne Leben ist eng mit zwei grundlegenden Bedürfnissen für Komfort und Hygiene verbunden: <strong>Brauchwarmwasser (BWW)</strong> und <strong>Wohnraumbeheizung</strong>. Von den täglichen Ritualen der Körperpflege bis hin zum lebensnotwendigen Wärmekomfort in der kalten Jahreszeit sind dies kein Luxus, sondern Säulen der Lebensqualität.",
    para2: "SONIC TECHNOLOGY schlägt einen visionären Ansatz vor, indem Gasbrenner durch einen <strong>elektrisch betriebenen Schallgenerator</strong> ersetzt werden und so die BWW- und Wärmeerzeugung an die Effizienz- und Nachhaltigkeitsstandards der Zukunft angepasst wird.",
    quote: "SONIC TECHNOLOGY stellt nicht den fertigen Heizkessel her, sondern stellt unsere Technologie jedem interessierten Hersteller zur Verfügung.",
    generatorLabel: "GENERATOR",
    sonicLabel: "SCHALL",
    advantagesTitle: "Vorteile des Schall-Heizkessels",
    ctaBtn: "Entdecken Sie, warum Sie uns wählen sollten",
    advantages: [
      { title: "Kompakt & Vielseitig", desc: "Ähnliche Abmessungen wie Gasthermen, ersetzt erfolgreich alte Systeme, ohne zusätzlichen Platz zu beanspruchen." },
      { title: "Null Bürokratie", desc: "Erfordert keine speziellen Genehmigungen oder regelmäßige Überprüfungen der Gasinstallation." },
      { title: "Vereinfachte Installation", desc: "Kein Schornstein oder Wanddurchbrüche erforderlich. Benötigt nur eine Wasserquelle und Stromanschluss." },
      { title: "Eco-Ready", desc: "Geringer Energieverbrauch, ideal für den direkten Anschluss an Photovoltaikanlagen." },
      { title: "Extreme Leistung", desc: "Im Gegensatz zu Wärmepumpen bleibt der Wirkungsgrad auch unter -8°C maximal." },
      { title: "Reduzierte Kosten", desc: "Minimaler Wartungsaufwand durch Wegfall der obligatorischen Überprüfungen alle 2 Jahre." },
    ]
  },
  it: {
    badge: "Il Futuro dell'ACS e del Riscaldamento",
    title: "Una soluzione",
    titleAccent: "rivoluzionaria",
    titleEnd: "per il tuo comfort",
    para1: "La vita moderna è intimamente legata a due necessità fondamentali per il comfort e l'igiene: <strong>l'acqua calda sanitaria (ACS)</strong> e <strong>il riscaldamento delle abitazioni</strong>. Dai rituali quotidiani di igiene personale al comfort termico essenziale nelle stagioni fredde, questi non sono un lusso, ma pilari della qualità della vita.",
    para2: "SONIC TECHNOLOGY propone un approccio visionario sostituendo i bruciatori a gas con un <strong>generatore sonico alimentato a corrente elettrica</strong>, adattando la produzione di ACS e calore agli standard di efficienza e sostenibilità del futuro.",
    quote: "SONIC TECHNOLOGY non produce la caldaia finale, ma mette la nostra tecnologia a disposizione di qualsiasi produttore interessato.",
    generatorLabel: "GENERATORE",
    sonicLabel: "SONICO",
    advantagesTitle: "Vantaggi della Caldaia Sonica",
    ctaBtn: "Scopri Perché Sceglierci",
    advantages: [
      { title: "Compatta e Versatile", desc: "Dimensioni simili alle caldaie a gas, sostituendo con successo i vecchi sistemi senza occupare spazio extra." },
      { title: "Zero Burocrazia", desc: "Non richiede autorizzazioni speciali o controlli periodici dell'impianto a gas." },
      { title: "Installazione Semplificata", desc: "Senza canna fumaria o fori nei muri. Richiede solo una fonte d'acqua e corrente elettrica." },
      { title: "Eco-Ready", desc: "Basso consumo energetico, ideale per il collegamento diretto ai pannelli fotovoltaici." },
      { title: "Prestazioni Estreme", desc: "A differenza delle pompe di calore, l'efficienza rimane massima anche sotto i -8°C." },
      { title: "Costi Ridotti", desc: "Manutenzione minima eliminando i controlli obbligatori ogni 2 anni." },
    ]
  }
};

export default function FeaturesDetail({ lang = "ro" }) {
  const prefersReducedMotion = useReducedMotion();
  const t = featuresTranslations[lang] || featuresTranslations["ro"];

  // Mapăm iconițele pe avantajele traduse
  const icons = [
    <Settings2 className="w-6 h-6" aria-hidden="true" />,
    <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
    <Zap className="w-6 h-6" aria-hidden="true" />,
    <Sun className="w-6 h-6" aria-hidden="true" />,
    <ThermometerSun className="w-6 h-6" aria-hidden="true" />,
    <Sparkles className="w-6 h-6" aria-hidden="true" />,
  ];

  return (
    <section
      id="features-detail"
      aria-labelledby="main-features-heading"
      className="relative py-32 bg-[#EBF0F5] text-[#1B263B] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[50rem] h-[50rem] bg-[#0056B3]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-white rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0056B3]/15 text-[#004494] text-sm font-bold uppercase tracking-widest">
              <Droplets className="w-4 h-4" aria-hidden="true" /> {t.badge}
            </div>

            <h2 id="main-features-heading" className="text-4xl md:text-5xl font-extrabold leading-tight">
              {t.title} <span className="text-[#0056B3]">{t.titleAccent}</span> {t.titleEnd}
            </h2>

            <div className="space-y-4 text-[#37474F] text-lg leading-relaxed font-medium">
              <p dangerouslySetInnerHTML={{ __html: t.para1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.para2 }} />
            </div>

            <div className="p-6 rounded-2xl bg-white/60 border border-white shadow-sm italic text-[#37474F] font-medium">
              "{t.quote}"
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square flex items-center justify-center lg:mt-10"
          >
            <div
              className={`absolute w-full h-full border-[20px] border-white/40 rounded-full ${!prefersReducedMotion ? 'animate-[spin_20s_linear_infinite]' : ''}`}
              aria-hidden="true"
            />
            <div className="relative z-10 p-12 bg-white rounded-[3rem] shadow-[15px_15px_40px_rgba(0,0,0,0.05)] text-center">
              <Zap className="w-20 h-20 text-[#0056B3] mx-auto mb-6" aria-hidden="true" />
              <span className="block text-3xl font-black text-[#1B263B]">{t.generatorLabel}</span>
              <span className="block text-xl font-bold text-[#0056B3]">{t.sonicLabel}</span>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-extrabold mb-4">{t.advantagesTitle}</h3>
          <div className="mx-auto h-1.5 w-20 bg-[#0056B3] rounded-full" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {t.advantages.map((adv, i) => (
            <motion.div
              key={i}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-white/60 rounded-[2.5rem] border border-white shadow-lg shadow-blue-900/5 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EBF0F5] text-[#0056B3] flex items-center justify-center mb-6 group-hover:bg-[#0056B3] group-hover:text-white transition-colors duration-300">
                {icons[i]}
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#1B263B]">{adv.title}</h4>
              <p className="text-[#37474F] leading-relaxed font-medium">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.a
            href="#reasons"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-12 py-5 
              min-h-[48px] min-w-[200px]
              bg-[#0056B3] text-white text-lg font-bold rounded-full shadow-xl shadow-blue-900/20 hover:bg-[#004494] transition-all
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0056B3]/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#EBF0F5]"
          >
            {t.ctaBtn}
          </motion.a>
        </div>
      </div>
    </section>
  );
}