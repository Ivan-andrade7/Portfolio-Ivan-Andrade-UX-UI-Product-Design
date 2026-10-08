import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="home-hero" aria-labelledby="hero-heading">
      <div className="home-hero-stage">
      <div className="home-container home-hero-layout">
      <div className="home-hero-content">
        <p className="home-kicker">Iván Andrade · UX/UI Designer / Product Designer</p>
        <h1 id="hero-heading">Diseño experiencias<br className="home-desktop-break" /> digitales <em>claras.</em></h1>
        <p className="home-hero-intro">En productos, servicios y plataformas.<br />Y en webs que conectan una propuesta con las personas.</p>
        <div className="home-hero-actions">
          <a href="#proyectos" className="home-button home-button-primary">Ver proyectos <ArrowDown size={18} aria-hidden /></a>
          <a href="#servicios" className="home-button home-button-secondary">Servicios web <ArrowUpRight size={18} aria-hidden /></a>
        </div>
        <p className="home-availability"><span aria-hidden />Abierto a oportunidades full-time</p>
      </div>
      <figure className="home-portrait">
        <div className="home-portrait-image">
          <picture>
            <source media="(max-width: 767px)" srcSet="/hero/ivan-portrait-mobile.webp" width="800" height="1323" />
            <img src="/hero/ivan-portrait-desktop.webp" alt="Retrato de Iván Andrade" width="1920" height="981" fetchPriority="high" loading="eager" decoding="async" />
          </picture>
        </div>
        <figcaption><span>Buenos Aires, Argentina</span><span>Trabajo remoto ↗</span></figcaption>
      </figure>
      </div>
      </div>
      <div className="home-hero-paths home-container">
        <div><span className="home-kicker">01 / Para equipos</span><p>UX/UI y Product Design</p><span>Flujos, interfaces y sistemas. Abierto a distintos sectores y contextos.</span></div>
        <div><span className="home-kicker">02 / Para profesionales y negocios</span><p>Diseño e implementación web</p><span>Landing pages, sitios institucionales y soluciones web por alcance.</span></div>
      </div>
    </section>
  );
}
