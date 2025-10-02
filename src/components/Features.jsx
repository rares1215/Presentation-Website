// src/components/Features.jsx
import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import WaveSeparator from "./WaveSeparator";
import stat1 from "../assets/placeholder.jpg";
import stat2 from "../assets/placeholder.jpg";
import stat3 from "../assets/placeholder.jpg";
import FeaturesDetail from "./Features.details";

 function Features() {
  const [visibleText, setVisibleText] = useState(false);
  const [visibleGrid, setVisibleGrid] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const textRef = useRef(null);
  const gridRef = useRef(null);

  const stats = [stat1, stat2, stat3];

  // Intersection Observer pentru fade-in la scroll
  useEffect(() => {
    const options = { threshold: 0.18 };

    const observerText = new IntersectionObserver(([entry]) => {
      setVisibleText(entry.isIntersecting);
    }, options);

    const observerGrid = new IntersectionObserver(([entry]) => {
      setVisibleGrid(entry.isIntersecting);
    }, options);

    if (textRef.current) observerText.observe(textRef.current);
    if (gridRef.current) observerGrid.observe(gridRef.current);

    return () => {
      observerText.disconnect();
      observerGrid.disconnect();
    };
  }, []);

  // Carousel auto-slide logic
  useEffect(() => {
    if (isHovered) return; // dacă e hover, nu schimbăm slide-ul
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % stats.length);
    }, 3000); // la 3 secunde
    return () => clearInterval(interval);
  }, [isHovered, stats.length]);

  const advantages = [
    {
      title: "Lorem Ipsum",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
    {
      title: "Lorem Ipsum",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
    {
      title: "Lorem Ipsum",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
  ];

  return (
    <>
      {/* Wave separator */}
      <WaveSeparator />

      <section
        id="features"
        className="relative py-20 bg-gradient-to-b from-blue-900/90 via-purple-900/80 to-black/95 text-white"
      >
        <div className="container mx-auto px-6 space-y-12">
          {/* Titlu + Intro */}
          <div
            ref={textRef}
            className={`max-w-3xl mx-auto text-center transition-all duration-1200 ease-out ${
              visibleText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Beneficii Cheie
            </h2>
            <p className="text-base md:text-lg opacity-80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.
            </p>
          </div>

          {/* Grid 2 coloane */}
          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 gap-10 items-start transition-all duration-900 ease-out ${
              visibleGrid ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Left: Avantaje */}
            <div className="space-y-6">
              {advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-white/6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center shadow-md">
                      <CheckCircle className="w-5 h-5 text-black/90" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">{adv.title}</h3>
                    <p className="text-sm md:text-base opacity-80 leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Carousel */}
            <div
              className="flex flex-col items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full max-w-md">
                {/* viewport */}
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {stats.map((img, idx) => (
                      <div key={idx} className="flex-shrink-0 w-full">
                        <img
                          src={img}
                          alt={`Stat ${idx + 1}`}
                          className="w-full h-64 sm:h-72 md:h-80 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots */}
                <div className="flex gap-2 mt-4 justify-center">
                  {stats.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer hover:bg-cyan-400 ${
                        i === currentSlide ? "bg-cyan-400 scale-110" : "bg-white/30"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-12 right-6 w-56 h-56 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-50 h-50 bg-purple-600 opacity-25 rounded-full blur-3xl animate-pulse delay-700"></div>
      </section>
      <FeaturesDetail />
    </>
  );
}


export default Features;
