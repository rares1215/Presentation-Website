// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/placeholder.jpg";
import logo from "../assets/logo.png";

function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/80 to-blue-900/90"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center space-y-16">
        
        {/* Logo centrat sus */}
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className="max-w-[260px] mx-auto drop-shadow-[0_0_35px_rgba(165,180,252,0.8)]"
          />
        </div>

        {/* Grid cu motto și avantaje */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-start">
          {/* Motto */}
          <div
            className={`text-center lg:text-left space-y-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Innovating the Future
            </h1>
            <p className="mt-4 text-xl opacity-80">
              Clean Heat with Smart Energy
            </p>
          </div>

          {/* Avantaje pe verticală */}
          <div
            className={`flex flex-col space-y-6 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {["Advantage 1", "Advantage 2", "Advantage 3"].map((title, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="opacity-80 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                  odio. Praesent libero.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Descriere + CTA jos */}
        <div
          className={`mt-10 max-w-3xl text-center space-y-6 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-lg opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae pellentesque
            sem placerat in id cursus mi. Tempus leo eu aenean sed diam urna tempor.
          </p>
          <a
            href="#features"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse"
          >
            Descoperă
          </a>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
}

export default Hero;

