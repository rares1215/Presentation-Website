// src/components/WaveSeparator.jsx
export default function WaveSeparator() {
  return (
    <div className="relative w-full overflow-hidden leading-none bg-black">
      <svg
        className="relative block w-full h-12 md:h-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,122.7C840,139,960,149,1080,144C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="url(#waveGradient)"
          className="opacity-70 animate-neon"
        ></path>
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9333EA" /> {/* mov neon */}
            <stop offset="100%" stopColor="#06B6D4" /> {/* turcoaz neon */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
