// src/components/WhyChooseUs.jsx
import { Shield, Star, Users, Heart } from "lucide-react";
import whyBg from "../assets/placeholder.jpg";
import WaveSeparator from "./WaveSeparator";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-300" />,
      title: "Reliability and Trust",
      desc: "Our systems are built with precision, ensuring stability, performance, and long-term value for our partners.",
    },
    {
      icon: <Star className="w-8 h-8 text-cyan-300" />,
      title: "Innovation at Core",
      desc: "We bring continuous innovation in clean heat and smart energy, helping you stay ahead of the curve.",
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-300" />,
      title: "Dedicated Team",
      desc: "Our professionals work closely with clients to provide exceptional solutions tailored to their goals.",
    },
    {
      icon: <Heart className="w-8 h-8 text-cyan-300" />,
      title: "Sustainability Focus",
      desc: "We are deeply committed to creating a greener, smarter future through sustainable technologies.",
    },
  ];

  return (
    <>
      <WaveSeparator />

      <section
        id="why-choose-us"
        className="relative overflow-hidden bg-gradient-to-b from-black/95 via-purple-900/80 to-black/95 text-white"
      >
        {/* Spațiu între separator și imagine */}
        <div className="pt-28 md:pt-36 flex justify-center">
          {/* Blocul cu imaginea și titlul */}
          <div
            className="relative max-w-6xl w-full rounded-3xl overflow-hidden text-white py-32 md:py-40 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(30,40,120,0.9), rgba(60,20,90,0.85), rgba(0,0,0,0.95)), url(${whyBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 px-6">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                Why Choose Us?
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                We are a leading company in clean heat and smart energy — built
                for innovation, reliability, and sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Zona cu motivele (cardul) */}
        <div className="relative py-24 md:py-28 flex justify-center px-6 -mt-20">
          {/* micșorăm max-width și apropiem cardul de imagine */}
          <div className="relative max-w-5xl w-full">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 text-center">
                {reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                      {reason.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                      {reason.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed max-w-xs">
                      {reason.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accente decorative */}
            <div className="absolute -top-10 right-16 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-16 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
