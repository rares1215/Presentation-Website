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
      className="relative min-h-[100vh] flex flex-col justify-center text-white overflow-hidden"
    >
      {/* Poster blur fallback */}
      <img
        src="/heroimg.png"
        alt="Video background preview"
        className={`absolute inset-0 w-full h-full object-cover blur-2xl scale-105 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        playsInline
        muted
        loop
        preload="auto"
        poster="/heroimg.png"
        onCanPlayThrough={() => setLoaded(true)}
      >
        <source src="/Background1.webm" type="video/webm" />
        <source src="/Background1-optimized.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/40 to-blue-900/50" />

      {/* Content Box (Title + Quote) */}
      <div
        className={`relative z-10 text-center px-4 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl shadow-[0_0_30px_rgba(147,51,234,0.25)] border border-white/10 px-8 py-10 sm:px-10 sm:py-12 mt-28 sm:mt-36">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Sonic Technology
          </h1>
          <p className="mt-4 text-base sm:text-lg opacity-90 leading-relaxed">
            „Cunoscutul este finit, necunoscutul este infinit; din punct de
            vedere intelectual ne aflăm pe o mică insulă în mijlocul unui ocean
            ilimitabil al inexplicabilității. Sarcina noastră, în fiecare
            generație, este de a revendica ceva mai mult pământ.” <br />
            <span className="text-sm opacity-70 block mt-2">
              — T.H. Huxley, 1887
            </span>
          </p>
        </div>
      </div>

      {/* Descriptive text + CTA */}
      <div
        className={`relative z-10 container mx-auto px-6 py-16 text-center space-y-6 transition-all duration-700 ease-out delay-200 mt-20 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-sm sm:text-base md:text-lg opacity-85 leading-relaxed max-w-2xl mx-auto text-white/90">
          Fiecare idee pe care o explorăm ne aduce mai aproape de acel orizont
          infinit al cunoașterii. Prin tehnologie și imaginație, descoperim
          legături noi între știință, natură și viitor.
        </p>

        <a
          href="#about"
          role="button"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-base hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/30"
        >
          Descoperă
        </a>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500" />
    </section>
  );
}

export default Hero;


