
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Features from "./components/Features"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/WhyUs"
import WaveSeparator from "./components/WaveSeparator"
import FeaturesDetail from "./components/FeaturesDetails"

function App() {
    

    return(
    <>
        <Navbar />
        <Hero />
        <WaveSeparator />
        <About />
        <WaveSeparator />
        <Features />
        <WaveSeparator />
        <FeaturesDetail />
        <WaveSeparator />
        <WhyChooseUs />
        <WaveSeparator/>
        <Footer />
    </>
    )
}

export default App
