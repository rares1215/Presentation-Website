import { useState, useEffect, useRef } from "react";
import videoRo from "../assets/video_ro.mp4";
import videoEn from "../assets/video_en.mp4";
import WaveSeparator from "./WaveSeparator";

function About() {
  const [lang, setLang] = useState("RO"); // RO sau EN

  const textRef = useRef(null);
  const videoRef = useRef(null);
  const endTextRef = useRef(null);

  const videoRoRef = useRef(null);
  const videoEnRef = useRef(null);

  const [visibleText, setVisibleText] = useState(false);
  const [visibleVideo, setVisibleVideo] = useState(false);
  const [visibleEndText, setVisibleEndText] = useState(false);

  // IntersectionObservers pentru fade-in la scroll
  useEffect(() => {
    const options = { threshold: 0.2 };

    const observerText = new IntersectionObserver(([entry]) => {
      setVisibleText(entry.isIntersecting);
    }, options);

    const observerVideo = new IntersectionObserver(([entry]) => {
      setVisibleVideo(entry.isIntersecting);
    }, options);

    const observerEndText = new IntersectionObserver(([entry]) => {
      setVisibleEndText(entry.isIntersecting);
    }, options);

    if (textRef.current) observerText.observe(textRef.current);
    if (videoRef.current) observerVideo.observe(videoRef.current);
    if (endTextRef.current) observerEndText.observe(endTextRef.current);

    return () => {
      observerText.disconnect();
      observerVideo.disconnect();
      observerEndText.disconnect();
    };
  }, []);

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
    <>
    <WaveSeparator />
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black/80 via-purple-900/70 to-blue-900/80 text-white"
    >
      <div className="container mx-auto px-6 space-y-20">

        {/* Text + Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left mb-40">

          {/* Text stânga */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 ${
              visibleText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              O descriere detaliata sau scruta despre Produsul nostru si cum am ajuns sa l facem + video de promovare.
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

          {/* Video dreapta */}
          <div
            ref={videoRef}
            className={`transition-all duration-1000 ${
              visibleVideo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-center mb-4">
              <div className="flex justify-center gap-2 sm:gap-4 mb-4">
                <button
                  className={`px-4 py-2 rounded-full font-semibold ${
                    lang === "RO" ? "bg-purple-500 text-white" : "bg-white/20"
                  } transition-all cursor-pointer hover:bg-purple-500 transition-colors duration-300`}
                  onClick={() => handleLangChange("RO")}
                >
                  RO
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-semibold ${
                    lang === "EN" ? "bg-purple-500 text-white" : "bg-white/20"
                  } transition-all cursor-pointer hover:bg-purple-500 transition-colors duration-300`}
                  onClick={() => handleLangChange("EN")}
                >
                  EN
                </button>
              </div>

              {/* Video suprapuse pentru fade smooth */}
              <div className="relative max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl h-56 sm:h-72 md:h-80 lg:h-96">
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

        {/* Text de încheiere */}
        <div
          ref={endTextRef}
          className={`text-center max-w-3xl mx-auto mt-16 transition-all duration-1000 ${
            visibleEndText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-90 leading-relaxed">
             O mica concluzie: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.  
            <span className="block mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              „Building the future of technology, today.”
            </span>
          </p>
        </div>
      </div>

      {/* Blobs futurist */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
    </section>
    </>
  );
}

export default About;
