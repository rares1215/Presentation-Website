// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";

function Hero() {
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 }
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
      {/* Poster fallback (blur) */}
      <img
        src="/placeholder.jpg"
        alt="Background placeholder"
        className={`absolute inset-0 w-full h-full object-cover blur-xl scale-105 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video background — optimizat */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/placeholder.jpg"
        onCanPlayThrough={() => setLoaded(true)}
      >
        {/* Variante multiple pentru compatibilitate + performanță */}
        <source src="/Background1.webm" type="video/webm" />
        <source src="/Background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/60 to-blue-900/70"></div>

      {/* Brand + Titlu central */}
      <div
        className={`relative z-10 text-center mt-26 sm:mt-24 md:mt-28 lg:mt-24 px-4 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Cardul cu titlul (mai mic acum) */}
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.25)] border border-white/10 px-6 py-8 sm:px-8 sm:py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Innovating the Future
          </h1>
          <p className="mt-3 text-base sm:text-lg opacity-90">
            Clean Heat with Smart Energy
          </p>
        </div>
      </div>

      {/* Text descriptiv + CTA (împins jos) */}
      <div
        className={`relative z-10 container mx-auto px-6 pb-10 sm:pb-12 md:pb-14 lg:pb-16 text-center space-y-6 transition-all duration-1000 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-sm sm:text-base md:text-base opacity-80 leading-relaxed max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae
          pellentesque sem placerat in id cursus mi. Tempus leo eu aenean sed
          diam urna tempor.
        </p>
        <a
          href="#about"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-sm sm:text-base md:text-sm hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse"
        >
          Descoperă
        </a>
      </div>

      {/* Decorative blobs */}
      <div className="absolute bottom-0 right-0 w-40 sm:w-40 h-40 sm:h-40 bg-cyan-500 opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );  
}

export default Hero;
