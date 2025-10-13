// src/components/About.jsx
import { useState, useEffect, useRef } from "react";
import videoRo from "../assets/video_ro.mp4";
import videoEn from "../assets/video_en.mp4";
import WaveSeparator from "./WaveSeparator";

function About() {
  const [lang, setLang] = useState("RO");

  const cardRef = useRef(null);
  const videoRoRef = useRef(null);
  const videoEnRef = useRef(null);
  const [visibleCard, setVisibleCard] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.05 };
    const observer = new IntersectionObserver(([entry]) => {
      setVisibleCard(entry.isIntersecting);
    }, options);
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLangChange = (newLang) => {
    if (newLang === lang) return;
    setLang(newLang);

    if (newLang === "RO") {
      try { videoRoRef.current?.play?.(); } catch {""}
      videoEnRef.current?.pause?.();
    } else {
      try { videoEnRef.current?.play?.(); } catch {""}
      videoRoRef.current?.pause?.();
    }
  };

  return (
    <>
      <WaveSeparator />

      <section
        id="about"
        className="relative py-32 bg-gradient-to-b from-black/90 via-purple-900/80 to-blue-900/90 text-white overflow-hidden"
      >
        <div className="container mx-auto px-6">
          {/* TITLE */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.25)]">
              About Us
            </h2>
          </div>

          {/* CARD + GRID */}
          <div
            ref={cardRef}
            className={`relative transition-all duration-1000 ${
              visibleCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Background card */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl pointer-events-none"></div>

            {/* Grid: Text left, Video right */}
            <div className="relative grid md:grid-cols-2 gap-1 items-center p-10 md:p-16">
              {/* Left: Text */}
              <div className="text-center md:text-left z-10 md:w-130">
                <h3 className="text-3xl  md:text-4xl font-bold mb-6">
                  Descriere Despre Noi
                </h3>
                <p className="text-base sm:text-lg md:text-xl opacity-85 mb-10 md:mb-auto leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc.
                  Vestibulum et mauris vel ante. Suspendisse varius enim in eros elementum tristique.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc.
                  Vestibulum et mauris vel ante. Suspendisse varius enim in eros elementum tristique.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                </p>
              </div>

              {/* Right: Video */}
              <div className="relative w-full h-64 sm:h-80 md:h-[480px] lg:h-[480px] z-10 rounded-2xl overflow-hidden shadow-xl">
                {/* Language buttons */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button
                    onClick={() => handleLangChange("RO")}
                    className={`px-4 py-2 rounded-full font-semibold backdrop-blur-md transition-all duration-300 ${
                      lang === "RO"
                        ? "bg-purple-500/85 text-white"
                        : "bg-white/20 text-white/90 hover:bg-white/30"
                    }`}
                  >
                    RO
                  </button>
                  <button
                    onClick={() => handleLangChange("EN")}
                    className={`px-4 py-2 rounded-full font-semibold backdrop-blur-md transition-all duration-300 ${
                      lang === "EN"
                        ? "bg-purple-500/85 text-white"
                        : "bg-white/20 text-white/90 hover:bg-white/30"
                    }`}
                  >
                    EN
                  </button>
                </div>

                <video
                  ref={videoRoRef}
                  src={videoRo}
                  controls
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${
                    lang === "RO" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
                <video
                  ref={videoEnRef}
                  src={videoEn}
                  controls
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${
                    lang === "EN" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-600 opacity-25 rounded-full blur-3xl animate-pulse" />
      </section>
    </>
  );
}

export default About;
