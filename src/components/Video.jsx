/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { useRef, useState } from "react";
import videoRo from "../assets/video_ro.mp4";

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative py-24 bg-[#EBF0F5] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER SECȚIUNE - Aliniat cu lățimea mare a video-ului */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0056B3] mb-4">
            Showcase Tehnologic
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#1B263B] leading-tight">
            Sonicitate: <span className="text-[#0056B3]">Demonstrația Completă</span>
          </h2>
          <p className="mt-6 text-[#455361] text-lg font-medium leading-relaxed">
            O incursiune detaliată în inovația care stă la baza sistemelor noastre. 
            Vizionați prezentarea noastră oficială pentru a înțelege potențialul disruptiv al acestei tehnologii.
          </p>
        </div>

        {/* PLAYER VIDEO - VERSION WIDE & CINEMATIC */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,86,179,0.2)] bg-black border-[6px] border-white"
        >
          <video
            ref={videoRef}
            className="w-full h-auto aspect-video object-cover cursor-pointer"
            poster="/assets/video-thumbnail.png" 
            preload="metadata"
            onClick={togglePlay}
          >
            <source src={videoRo} type="video/mp4" />
            Browserul dumneavoastră nu suportă redarea video.
          </video>

          {/* OVERLAY CENTRAL - Buton Play Mare */}
          <div 
            className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-500 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
          >
            <button
              onClick={togglePlay}
              className="group/btn relative flex items-center justify-center"
              aria-label={isPlaying ? "Pauză" : "Redare prezentare video"}
            >
              {/* Inele animate în jurul butonului de play (ca tema sonic) */}
              {!isPlaying && (
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping scale-150" />
              )}
              <div className="relative h-20 w-20 md:h-28 md:w-28 bg-[#0056B3] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover/btn:scale-110">
                {isPlaying ? (
                  <Pause size={40} fill="currentColor" />
                ) : (
                  <Play size={40} fill="currentColor" className="ml-2" />
                )}
              </div>
            </button>
          </div>

          {/* CONTROALE BARĂ JOS (Subtile) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
            <div className="flex items-center gap-6">
               <button onClick={toggleMute} className="text-white hover:text-sky-400 transition" aria-label="Sunet">
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
               </button>
               <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Sonic Technology | Prezentare Oficială</span>
            </div>
            
            <button 
              onClick={handleFullscreen}
              className="text-white hover:text-sky-400 transition"
              aria-label="Ecran complet"
            >
              <Maximize size={24} />
            </button>
          </div>
        </motion.div>

        {/* FOOTER SECȚIUNE - Indicatori Tehnici */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-[#D1D9E0] pt-12">
            <div className="text-center">
              <span className="block text-2xl font-black text-[#1B263B]">3:00</span>
              <span className="text-xs uppercase tracking-widest text-[#0056B3] font-bold">Durată Video</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black text-[#1B263B]">4K</span>
              <span className="text-xs uppercase tracking-widest text-[#0056B3] font-bold">Rezoluție</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black text-[#1B263B]">2026</span>
              <span className="text-xs uppercase tracking-widest text-[#0056B3] font-bold">Update Tehnic</span>
            </div>
        </div>
      </div>
    </section>
  );
}