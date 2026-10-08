import { HomeNavbar, HomeFooter } from "@/components/HomeChrome";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import CtaFinal from "@/components/CtaFinal";
import Contact from "@/components/Contact";
import "./home.css";

export default function Home() {
  return (
    <div className="portfolio-home">
      <HomeNavbar />
      <main id="contenido-principal" tabIndex={-1}>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <CtaFinal />
        <Contact />
      </main>
      <HomeFooter />
    </div>
  );
}
