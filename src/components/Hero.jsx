import heroImg from "../assets/placeholder.jpeg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-blue-900/80"></div>

      {/* Grid Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 grid md:grid-cols-3 gap-12 items-center text-white">
        {/* Left - Description */}
        <div className="space-y-6 animate-fadeInUp">
          <h2 className="text-3xl font-bold">Lorem Ipsum</h2>
          <p className="text-lg opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="#features"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            Descoperă
          </a>
        </div>

        {/* Center - Motto */}
        <div className="text-center animate-fadeInUp delay-200">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            "Innovating the Future"
          </h1>
          <p className="mt-6 text-xl opacity-80">
            Clean Heat with smart Energy
          </p>
        </div>

        {/* Right - Image placeholder */}
        <div className="flex justify-center animate-fadeInUp delay-400">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center">
            <span className="text-xl font-bold">[ IMG ]</span>
          </div>
        </div>
      </div>

      {/* Bottom - Benefits Cards */}
      <div className="relative z-10 container mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
        {["Advantage 1", "Advantage 2", "Advantage 3"].map((title, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </div>
        ))}
      </div>

      {/* Futuristic blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
}

export default Hero;
