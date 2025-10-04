// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import heroVideo from "../assets/Background1.mp4";
import heroPoster from "../assets/placeholder.jpg"; // fallback static image

function Hero() {
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);

        // Control video playback
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {}); // în caz că autoplay e blocat
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 } // rulează când ~30% din secțiune e vizibilă
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between text-white overflow-hidden"
    >
      {/* Poster (blurred fallback while video loads) */}
      <img
        src={heroPoster}
        alt="Background placeholder"
        className={`absolute inset-0 w-full h-full object-cover blur-xl scale-105 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={heroPoster}
        onCanPlayThrough={() => setLoaded(true)}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-purple-900/70 to-blue-900/80"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center ">
        {/* Logo centrat sus */}
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className="max-w-[380px]  drop-shadow-[0_0_40px_rgba(165,180,252,0.85)]"
          />
        </div>

       {/* Motto + Avantaje sub el */}
        <div
          className={`text-center space-y-10 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-x-6"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Innovating the Future
          </h1>
          <p className="text-xl opacity-80">Clean Heat with Smart Energy</p>

          {/* Avantaje pe verticală */}
          <div className="grid md:grid-cols-3 gap-8 mt-14 mb-24">
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
          className={`max-w-3xl text-center space-y-6 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-lg opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae pellentesque
            sem placerat in id cursus mi. Tempus leo eu aenean sed diam urna tempor.
          </p>
          <a
            href="#features"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
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
