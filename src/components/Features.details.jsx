import { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Cpu } from "lucide-react"; // iconițe simbolice

function FeaturesDetail() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // Intersection Observer pentru fade-in la scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Step 1: Ideea de baza",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit quisque faucibus ex sapien vitae pellentesque sem. Sem placerat in id cursus mi pretium tellus.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "Step 2: Construirea",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit quisque faucibus ex sapien vitae pellentesque sem. Sed diam urna tempor pulvinar vivamus fringilla lacus.",
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-cyan-400" />,
      title: "Step 3: Eficienta si Practica",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit quisque faucibus ex sapien vitae pellentesque sem. Lacus nec metus bibendum egestas iaculis massa nisl.",
    },
  ];

  return (
    <section
      id="features-detail"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-black/95 via-blue-900/80 to-purple-900/90 text-white"
    >
      <div className="container mx-auto px-6 space-y-12">
        {/* Titlu Secțiune */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Cum Funcționează Produsul Nostru
          </h2>
          <p className="text-base md:text-lg opacity-80 leading-relaxed">
            Următorii pași descriu detaliat procesul prin care produsul nostru
            transformă ideile în rezultate reale.
          </p>
        </div>

        {/* Pași */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-md rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 300}ms` }}
            >
              {/* Badge circular animat */}
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.7)] ">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative neon blobs */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-500 opacity-25 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
    </section>
  );
}

export default FeaturesDetail;
