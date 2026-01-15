
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/WhyUs"
import WaveSeparator from "./components/WaveSeparator"
import FeaturesDetail from "./components/FeaturesDetails"
import HomagePage from "./components/HomagePage"
import ProjectPresentation from "./components/Prezentare"

function App() {


    return (
        <>
            <Navbar />
            <Hero />
            <WaveSeparator />
            <About />
            <WaveSeparator />
            <HomagePage />
            <WaveSeparator />
            <FeaturesDetail />
            <WaveSeparator />
            <ProjectPresentation />
            <WaveSeparator />
            <WhyChooseUs />
            <WaveSeparator />
            <Footer />
        </>
    )
}

export default App
