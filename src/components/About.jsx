// src/components/About.jsx
import { useState, useEffect, useRef } from "react";
import videoRo from "../assets/video_ro.mp4";
import videoEn from "../assets/video_en.mp4";
import WaveSeparator from "./WaveSeparator";

function About() {
  const [lang, setLang] = useState("RO"); // RO sau EN

  const cardRef = useRef(null);
  const endTextRef = useRef(null);

  const videoRoRef = useRef(null);
  const videoEnRef = useRef(null);

  const [visibleCard, setVisibleCard] = useState(false);
  const [visibleEndText, setVisibleEndText] = useState(false);

  // Observers pentru fade-in
  useEffect(() => {
    const options = { threshold: 0.18 };

    const cardObserver = new IntersectionObserver(([entry]) => {
      setVisibleCard(entry.isIntersecting);
    }, options);

    const endObserver = new IntersectionObserver(([entry]) => {
      setVisibleEndText(entry.isIntersecting);
    }, options);

    if (cardRef.current) cardObserver.observe(cardRef.current);
    if (endTextRef.current) endObserver.observe(endTextRef.current);

    return () => {
      cardObserver.disconnect();
      endObserver.disconnect();
    };
  }, []);

  // Schimbare limbă video cu pauză/play automată (încearcă să redea, dar prinde reject)
  const handleLangChange = (newLang) => {
    if (newLang === lang) return;
    setLang(newLang);

    if (newLang === "RO") {
      try { videoRoRef.current?.play?.(); } catch (err) {console.log(err);
      }
      videoEnRef.current?.pause?.();
    } else {
      try { videoEnRef.current?.play?.(); } catch (err) {console.log(err);
      }
      videoRoRef.current?.pause?.();
    }
  };

  return (
    <>
      <WaveSeparator />

      <section
        id="about"
        className="relative py-32 bg-gradient-to-b from-black/85 via-purple-900/70 to-blue-900/80 text-white"
      >
        <div className="container mx-auto px-6 space-y-20">
          {/* TITLU */}
          <div className="text-center mb-8 mb-40">
            <h2
              className="text-5xl md:text-6xl font-extrabold tracking-tight
                         bg-clip-text text-transparent
                         bg-gradient-to-r from-purple-400 via-cyan-600 to-purple-400
                         drop-shadow-[0_0_25px_rgba(165,180,252,0.45)]"
            >
              About Us
            </h2>
            <div className="mt-4 w-40 h-1 mx-auto bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
          </div>

          {/* CARD: video sus, text jos */}
          <div
            ref={cardRef}
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              visibleCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/8 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
              {/* VIDEO (sus) */}
              <div className="relative">
                {/* butoane overlay (peste video) */}
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

                <div className="w-full h-72 sm:h-80 md:h-[420px] lg:h-[480px] bg-black/10">
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

              {/* TEXT (jos) */}
              <div className="p-8 md:p-12 lg:p-16 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Descriere Despre Noi</h3>
                <p className="text-base sm:text-lg md:text-xl opacity-85 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc.
                  Vestibulum et mauris vel ante. Suspendisse varius enim in eros elementum tristique.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna,
                  vel scelerisque nisl consectetur. Integer posuere erat a ante venenatis dapibus posuere
                  velit aliquet.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc.
                  Vestibulum et mauris vel ante. Suspendisse varius enim in eros elementum tristique.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna,
                  vel scelerisque nisl consectetur. Integer posuere erat a ante venenatis dapibus posuere
                  velit aliquet.
                </p>
              </div>
            </div>
          </div>

          {/* CONCLUZIE - mai jos si mai subtila */}
          <div
            ref={endTextRef}
            className={`text-center max-w-3xl mx-auto mt-40 transition-all duration-1000 ${
              visibleEndText ? "opacity-60 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
              O mică concluzie: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <span className="block mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-2xl">
              „Building the future of technology, today.”
            </span>
          </div>
        </div>

        {/* decorative subtle blob */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-25 rounded-full blur-3xl animate-pulse" />
      </section>
    </>
  );
}

export default About;
