
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Language from "./components/LanguageSwitcher";
import LanguageSwitcher from "./components/LanguageSwitcher";


export default function Home() {
  return (

  <>
    <Navbar />
    <Hero />
    <About />
    <Portofolio/>
    <Skills/>
    <Contact />
    <Footer />
    <LanguageSwitcher />
  </>

  );
}
