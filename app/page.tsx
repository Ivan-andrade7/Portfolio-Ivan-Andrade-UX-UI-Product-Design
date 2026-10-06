import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import CtaMid from "@/components/CtaMid";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import CtaFinal from "@/components/CtaFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <Marquee />
        <Projects />
        <CtaMid />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <Testimonials />
        <CtaFinal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
