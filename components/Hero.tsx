import HeroComposition from "@/components/HeroComposition";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="home-hero" aria-labelledby="hero-heading">
      <HeroComposition caption={<><span>Chivilcoy, Provincia de Buenos Aires</span><span>Remoto o híbrido</span></>}>
        <p className="home-kicker">Iván Andrade · Product Designer UX/UI · IA aplicada</p>
        <h1 id="hero-heading">Diseño experiencias<br className="home-desktop-break" /> digitales <em>claras.</em></h1>
        <p className="home-hero-intro">En productos, servicios y plataformas.<br />Y en webs que conectan una propuesta con las personas.</p>
        <div className="home-hero-actions">
          <a href="#proyectos" className="home-button home-button-primary">Ver proyectos <ArrowDown size={18} aria-hidden /></a>
        </div>
        <p className="home-availability"><span aria-hidden />Abierto a oportunidades full-time o part-time</p>
      </HeroComposition>
      <div className="home-hero-paths home-container">
        <div><span className="home-kicker">Diseño y capacidades</span><p>Product Design, UX/UI e IA aplicada</p><span>Flujos, interfaces y sistemas, con IA en la investigación, el prototipado y la automatización. Diseño e implementación web. Abierto a distintos sectores y contextos.</span></div>
      </div>
    </section>
  );
}
