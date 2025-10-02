import WaveSeparator from "./WaveSeparator";
import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <>
    <WaveSeparator />
    <footer id="contacts" className="relative bg-black/90 text-white py-16">
      {/* Decorative neon blobs */}
      <div className="absolute top-0 left-0 w-25 h-25 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-25 h-25 bg-purple-500 opacity-25 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 grid  md:grid-cols-3 gap-12">
        {/* Contact info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <a 
            href="https://mail.google.com/mail/?view=cm&to=contact@raresgiurgescu.com&su=Subiect&body=Salut"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-80 hover:text-cyan-400 transition-colors">
            <Mail className="w-5 h-5 text-cyan-400" /> raresgiurgescu@gmail.com
          </a>

          <p className="flex items-center gap-2 opacity-80">
            <Phone className="w-5 h-5 text-purple-500" /> +40 123 456 789
          </p>

          <p className="flex items-center gap-2 opacity-80">
            <MapPin className="w-5 h-5 text-cyan-400" /> Str. Exemplu 123, București
          </p>
        </div>

        {/* Legal links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#impressum" className="hover:text-cyan-400 transition-colors">
                Impressum
              </a>
            </li>
          </ul>
        </div>

        {/* About / Short description */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2">Sonic Technology</h3>
          <p className="opacity-70 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transformăm ideile inovatoare în soluții reale și eficiente.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm opacity-70">
        &copy; {new Date().getFullYear()} Sonic Technology. All rights reserved.
      </div>
    </footer>
    </>
  );
}

export default Footer;
