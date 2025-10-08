import { useEffect, useRef, useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import WaveSeparator from "./WaveSeparator";
import stat1 from "../assets/placeholder.jpg";
import stat2 from "../assets/placeholder.jpg";
import stat3 from "../assets/placeholder.jpg";
import FeaturesDetail from "./Features.details";

function Features() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef(null);

  const stats = [stat1, stat2, stat3];

  const advantages = [
    {
      title: "Avantaj 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
    {
      title: "Avantaj 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
    {
      title: "Avantaj 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
    },
  ];

  // Intersection Observer for entire section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.18 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered || isSmallScreen || isAnimating) return;
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % stats.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, isSmallScreen, stats.length, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setCurrentSlide((prev) => (prev + 1) % stats.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setCurrentSlide((prev) => (prev - 1 + stats.length) % stats.length);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentSlide) return;
    setCurrentSlide(index);
  };

  // Animation variants for title and carousel
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <>
      <WaveSeparator />

      <section
        id="features"
        ref={sectionRef}
        className="relative py-24 bg-gradient-to-b from-blue-900/90 via-purple-900/80 to-black/95 text-white"
      >
        <div className="container mx-auto px-6 space-y-16">
          {/* Title & Intro */}
          <motion.div
            initial="hidden"
            animate={isSectionVisible ? "visible" : "hidden"}
            variants={titleVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.25)]">
              Beneficii Cheie
            </h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
              ex sapien vitae pellentesque sem placerat.
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial="hidden"
            animate={isSectionVisible ? "visible" : "hidden"}
            variants={carouselVariants}
            className="flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-7xl mx-auto">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative w-full h-auto">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      onAnimationStart={() => setIsAnimating(true)}
                      onAnimationComplete={() => setIsAnimating(false)}
                      className="flex w-full flex-col md:flex-row items-center gap-12 px-6 py-10"
                      onTouchStart={(e) =>
                        setTouchStartX(e.targetTouches[0].clientX)
                      }
                      onTouchMove={(e) =>
                        setTouchEndX(e.targetTouches[0].clientX)
                      }
                      onTouchEnd={() => {
                        const deltaX = touchStartX - touchEndX;
                        const swipeThreshold = 50;
                        if (deltaX > swipeThreshold) handleNext();
                        else if (deltaX < -swipeThreshold) handlePrev();
                        setTouchStartX(0);
                        setTouchEndX(0);
                      }}
                    >
                      <div className="w-full md:w-[55%]">
                        <img
                          src={stats[currentSlide]}
                          alt={`Slide ${currentSlide + 1}`}
                          className="rounded-2xl w-full h-[26rem] sm:h-[30rem] md:h-[34rem] object-cover shadow-xl"
                        />
                      </div>

                      <div className="w-full md:w-[45%] space-y-4 text-left">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center shadow-lg">
                            <CheckCircle className="w-6 h-6 text-black/90" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-semibold">
                            {advantages[currentSlide].title}
                          </h3>
                        </div>
                        <p className="text-base md:text-lg opacity-80 leading-relaxed">
                          {advantages[currentSlide].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="absolute inset-0 hidden md:flex justify-between items-center pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto h-full w-12 hover:bg-white/15 flex justify-center items-center transition-all duration-300 rounded-l-3xl"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto h-full w-12 hover:bg-white/15 flex justify-center items-center transition-all duration-300 rounded-r-3xl"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-6 justify-center">
              {stats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer hover:bg-cyan-400 ${
                    i === currentSlide ? "bg-cyan-400 scale-110" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute -top-12 right-6 w-56 h-56 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-50 h-50 bg-purple-600 opacity-25 rounded-full blur-3xl animate-pulse delay-700"></div>
      </section>

      <FeaturesDetail />
    </>
  );
}

export default Features;
