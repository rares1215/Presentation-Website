import { useEffect, useRef, useState } from "react";
import { Shield, Star, Users, Heart } from "lucide-react";
import whyBg from "../assets/placeholder.jpg";
import WaveSeparator from "./WaveSeparator";

function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-300 group-hover:scale-110 transition-transform duration-300" />,
      title: "Reliability and Trust",
      desc: "Our systems are built with precision, ensuring stability, performance, and long-term value for our partners.",
    },
    {
      icon: <Star className="w-8 h-8 text-cyan-300 group-hover:rotate-12 transition-transform duration-300" />,
      title: "Innovation at Core",
      desc: "We bring continuous innovation in clean heat and smart energy, helping you stay ahead of the curve.",
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-300 group-hover:scale-110 transition-transform duration-300" />,
      title: "Dedicated Team",
      desc: "Our professionals work closely with clients to provide exceptional solutions tailored to their goals.",
    },
    {
      icon: <Heart className="w-8 h-8 text-cyan-300 group-hover:scale-110 transition-transform duration-300" />,
      title: "Sustainability Focus",
      desc: "We are deeply committed to creating a greener, smarter future through sustainable technologies.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <WaveSeparator />

      <section
        id="reasons"
        ref={sectionRef}
        className="relative overflow-hidden bg-gradient-to-b from-black via-purple-900/90 to-black text-white"
      >
        {/* Titlu și fundal */}
        <div className="pt-20 md:pt-28 flex justify-center">
          <div
            className="relative max-w-6xl w-full rounded-3xl overflow-hidden text-white py-20 md:py-28 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(30,40,120,0.85), rgba(60,20,90,0.8), rgba(0,0,0,0.9)), url(${whyBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`relative z-10 px-6 transition-all duration-1000 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.25)]">
                Why Choose Us?
              </h2>
              <p className="text-md md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed text-white/90">
                We are a leading company in clean heat and smart energy — built
                for innovation, reliability, and sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Carduri */}
        <div className="relative py-24 md:py-28 flex justify-center px-6 -mt-16">
          <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className={`group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_60px_rgba(0,255,255,0.2)] transform transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] ${
                  visible
                    ? `opacity-100 translate-y-0 delay-${idx * 100}`
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}

            {/* Elemente decorative */}
            <div className="absolute -top-10 right-10 w-52 h-52 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-10 w-52 h-52 bg-cyan-500/20 blur-3xl rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
