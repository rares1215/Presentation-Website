
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Features from "./components/Features"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/WhyUs"
import WaveSeparator from "./components/WaveSeparator"
import FeaturesDetail from "./components/FeaturesDetails"
import HomagePage from "./components/HomagePage"

function App() {


    return (
        <>
            <Navbar />
            <Hero />
            <WaveSeparator />
            <About />
            <WaveSeparator />
            <FeaturesDetail />
            <WaveSeparator />
            <WhyChooseUs />
            <WaveSeparator />
            <HomagePage />
            <WaveSeparator />
            <Footer />
        </>
    )
}

export default App
