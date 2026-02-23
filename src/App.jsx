import { useState, useEffect } from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/WhyUs"
import WaveSeparator from "./components/WaveSeparator"
import FeaturesDetail from "./components/FeaturesDetails"
import HomagePage from "./components/HomagePage"
import VideoShowcase from "./components/Video"

function App() {
    // Verificăm dacă există o limbă salvată în browser, altfel punem "ro"
    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem("sonic_lang");
        return savedLang || "ro";
    });

    // De fiecare dată când limba se schimbă, o salvăm în memoria browserului
    useEffect(() => {
        localStorage.setItem("sonic_lang", lang);
    }, [lang]);

    return (
        <>
            {/* Navbar primește lang și setLang pentru a putea schimba limba în tot site-ul */}
            <Navbar lang={lang} setLang={setLang} />

            <main>
                <Hero lang={lang} />
                <WaveSeparator />
                <About lang={lang} />
                <WaveSeparator />
                <VideoShowcase lang={lang} />
                <WaveSeparator />
                <HomagePage lang={lang} />
                <WaveSeparator />
                <FeaturesDetail lang={lang} />
                <WaveSeparator />
                <WhyChooseUs lang={lang} />
                <WaveSeparator />
                <Footer lang={lang} />
            </main>
        </>
    );
}

export default App;