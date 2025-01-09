
import Head from 'next/head';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";


export default function Home() {
  return (

  <>
  <Head>
        <title>Home | Hodisan Mihai</title>
        <meta name="description" content="Welcome to my web development portfolio showcasing my skills and projects built with React, Next.js, and more." />
      </Head>
  
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
