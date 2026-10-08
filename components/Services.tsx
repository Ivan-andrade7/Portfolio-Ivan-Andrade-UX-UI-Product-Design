import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  { title: "Landing pages y sitios institucionales", description: "Una estructura clara para presentar lo que hacés y facilitar una consulta. Diseño responsive e implementación según el alcance acordado." },
  { title: "Del diseño a la web", description: "Podemos partir desde la estructura y el UX/UI, o implementar un diseño y contenido que ya tengas. La publicación se incluye cuando corresponde." },
  { title: "Rediseño y mejoras", description: "Revisión de jerarquía, navegación, contenido y experiencia móvil. Primero definimos qué conviene mejorar y hasta dónde intervenir." },
];

export default function Services() {
  return (
    <section id="servicios" className="home-services" aria-labelledby="services-heading">
      <div className="home-container home-services-layout">
        <div className="home-section-heading">
          <p className="home-kicker">02 / Servicios web directos</p>
          <h2 id="services-heading">Tu propuesta.<br />Una web que la explique.</h2>
          <p>Diseño e implementación de webs para profesionales y negocios. Una oferta propia, con trato directo y alcance acordado.</p>
          <a href="#consulta-web" className="home-button home-button-primary">Consultar por una web <ArrowUpRight size={18} aria-hidden /></a>
        </div>
        <div className="home-service-list">
          {SERVICES.map((service, index) => <article key={service.title}><span className="home-kicker">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p></div></article>)}
          <p className="home-service-note">Objetivo y contenido → estructura y diseño → implementación → revisión y publicación.<br />Trabajo con asistencia de IA y revisión propia. Las etapas, integraciones y soporte se definen antes de empezar.</p>
        </div>
      </div>
    </section>
  );
}
