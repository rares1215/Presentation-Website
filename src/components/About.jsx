import { useState, useEffect, useRef } from "react";
import videoRo from "../assets/video_ro.mp4";
import videoEn from "../assets/video_en.mp4";

// Carousel simplu
const stats = [
  { id: 1, img: "/assets/stat1.png", title: "Stat 1", desc: "Lorem ipsum" },
  { id: 2, img: "/assets/stat2.png", title: "Stat 2", desc: "Lorem ipsum" },
  { id: 3, img: "/assets/stat3.png", title: "Stat 3", desc: "Lorem ipsum" },
];

function About() {
  const [currentStat, setCurrentStat] = useState(0);
  const [lang, setLang] = useState("RO"); // RO sau EN

  const textRef = useRef(null);
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  const videoRoRef = useRef(null);
  const videoEnRef = useRef(null);

  const [visibleText, setVisibleText] = useState(false);
  const [visibleCarousel, setVisibleCarousel] = useState(false);
  const [visibleVideo, setVisibleVideo] = useState(false);

  // IntersectionObservers pentru fade-in la scroll
  useEffect(() => {
    const options = { threshold: 0.2 };

    const observerText = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleText(true);
    }, options);

    const observerCarousel = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleCarousel(true);
    }, options);

    const observerVideo = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleVideo(true);
    }, options);

    if (textRef.current) observerText.observe(textRef.current);
    if (carouselRef.current) observerCarousel.observe(carouselRef.current);
    if (videoRef.current) observerVideo.observe(videoRef.current);

    return () => {
      observerText.disconnect();
      observerCarousel.disconnect();
      observerVideo.disconnect();
    };
  }, []);

  const handleNext = () =>
    setCurrentStat((prev) => (prev + 1) % stats.length);
  const handlePrev = () =>
    setCurrentStat((prev) => (prev - 1 + stats.length) % stats.length);

  // Schimbare limbă video cu pauză automată pentru cel invizibil
  const handleLangChange = (newLang) => {
    setLang(newLang);
    if (newLang === "RO") {
      videoEnRef.current?.pause();
    } else {
      videoRoRef.current?.pause();
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black/80 via-purple-900/70 to-blue-900/80 text-white"
    >
      <div className="container mx-auto px-6 space-y-24">

        {/* Text + Carousel Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">

          {/* Text stanga */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 ${
              visibleText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac leo nunc. Vestibulum et mauris vel ante. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel
              ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac leo nunc. Vestibulum et mauris vel ante. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel
              ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Carousel dreapta */}
          <div
            ref={carouselRef}
            className={`transition-all duration-1000 ${
              visibleCarousel ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <button
                onClick={handlePrev}
                className="bg-purple-500/50 hover:bg-purple-500/80 px-4 py-2 rounded-full transition-all"
              >
                &#8592;
              </button>

              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-xs  md:w-80">
                <img
                  src={stats[currentStat].img}
                  alt={stats[currentStat].title}
                  className="w-32 h-32 object-cover mb-4 rounded-xl"
                />
                <h3 className="text-2xl font-bold mb-2">
                  {stats[currentStat].title}
                </h3>
                <p className="opacity-80 text-center">{stats[currentStat].desc}</p>
              </div>

              <button
                onClick={handleNext}
                className="bg-purple-500/50 hover:bg-purple-500/80 px-4 py-2 rounded-full transition-all"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* Video sectiune jos */}
        <div
          ref={videoRef}
          className={`transition-all duration-1000 ${
            visibleVideo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-4">
            <p className="text-base sm:text-lg opacity-80 mb-4">
              Lorem ipsum dolor sit amet, prezentare scurta a video-ului.
            </p>
            <div className="flex justify-center gap-2 sm:gap-4 mb-4">
              <button
                className={`px-4 py-2 rounded-full font-semibold ${
                  lang === "RO" ? "bg-purple-500 text-white" : "bg-white/20"
                } transition-all`}
                onClick={() => handleLangChange("RO")}
              >
                RO
              </button>
              <button
                className={`px-4 py-2 rounded-full font-semibold ${
                  lang === "EN" ? "bg-purple-500 text-white" : "bg-white/20"
                } transition-all`}
                onClick={() => handleLangChange("EN")}
              >
                EN
              </button>
            </div>

            {/* Video suprapuse pentru fade smooth */}
            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-[500px]">
              <video
                ref={videoRoRef}
                src={videoRo}
                controls
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-700 ${
                  lang === "RO" ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
              <video
                ref={videoEnRef}
                src={videoEn}
                controls
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-700 ${
                  lang === "EN" ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blobs futurist */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
}

export default About;
