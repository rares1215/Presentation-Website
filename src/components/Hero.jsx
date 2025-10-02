import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/placeholder.jpg";
import logo from "../assets/logo.jpg";

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
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay gradient mai întunecat */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/80 to-blue-900/90"></div>

      {/* Grid Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-white mt-15">
        {/* Left - Description */}
        <div
          className={`space-y-7 text-center md:text-left transition-all duration-2000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold opacity-80">
            Descriere Scurtă despre noi și ce facem noi
          </h2>
          <p className="text-lg opacity-70 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae pellentesque sem placerat in id cursus mi. Tempus leo eu aenean sed diam urna tempor. Nec metus bibendum egestas iaculis massa nisl malesuada. Ut hendrerit semper vel class aptent taciti sociosqu. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Montes nascetur ridiculus mus donec rhoncus eros lobortis. Maximus.
          </p>
          <a
            href="#features"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse font-semibold hover:scale-105 transition-all duration-300"
          >
            Descoperă
          </a>
        </div>

        {/* Center - Motto */}
        <div
          className={`text-center transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            "Innovating the Future"
          </h1>
          <p className="mt-6 text-xl opacity-80">
            Clean Heat with Smart Energy
          </p>
        </div>

        {/* Right - Logo modernizat */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-500">
            <img
              src={logo}
              alt="logo"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

        {/* Bottom - Benefits Cards */}
        <div
          className={`relative z-10 container mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8`}
        >
          {["Advantage 1", "Advantage 2", "Advantage 3"].map((title, idx) => (
            <div
              key={idx}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-700`}
              style={{
                transitionDelay: `${visible ? idx * 300 : 0}ms`, // delay progresiv
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                odio. Praesent libero.
              </p>
            </div>
          ))}
        </div>


      {/* Futuristic blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-50 h-50 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
}

export default Hero;
