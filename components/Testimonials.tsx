"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    paragraphs: [
      "Tuve la oportunidad de participar en una simulación laboral junto a Iván Andrade, quien se desempeñó como UX/UI Designer del equipo.",
      "Es una de las personas más comprometidas que conocí, tanto con su trabajo como con el proyecto y el equipo. Su diseño no solo cumplió con los objetivos, sino que destacó por su calidad, creatividad y enfoque en la mejora continua.",
      "Además de sus capacidades técnicas, sus habilidades blandas sobresalen: tiene una comunicación clara, una excelente predisposición, iniciativa constante y una actitud siempre colaborativa.",
      "Verdaderamente alguien a quien tener en cuenta para sumar a su equipo.",
    ],
    name: "Alejandro Tomás Perren",
    role: "Desarrollador de Software · No Country · 2025",
    linkedin: "https://www.linkedin.com/in/ivan-andrade-uxui/details/recommendations/",
  },
  {
    paragraphs: [
      '"Tuve la oportunidad de trabajar junto a Ivan en distintos proyectos y siempre destacó por su creatividad, compromiso y profesionalismo en el área de UX/UI. Tiene una gran capacidad para transformar ideas en diseños modernos, intuitivos y funcionales, logrando una excelente experiencia para el usuario.',
      'Además de su talento como diseñador, es una persona muy predispuesta al trabajo en equipo y mantiene una comunicación clara y constante con el área de desarrollo, lo que hace que el trabajo conjunto sea mucho más eficiente y fluido. Sin dudas, recomiendo a Ivan para cualquier proyecto relacionado con diseño UX/UI y desarrollo de productos digitales."',
    ],
    name: "Matias Barisone",
    role: "Desarrollador Frontend · No Country · 2026",
    linkedin: "https://www.linkedin.com/in/ivan-andrade-uxui/details/recommendations/",
  },
  {
    paragraphs: [
      '“Iván participó en el No Country Fellowship como diseñador UX/UI en un contexto exigente: trabajar sobre un producto real con branding definido, mobile-first, y aprendiendo el modelo de negocio en paralelo.',
      'Lo que más valoro de su paso por el programa es su disposición a iterar. Cada semana los wireframes mejoraron, la documentación ganó coherencia y la integración con el equipo de desarrollo avanzó notablemente, algo que no es fácil de lograr cuando diseño y desarrollo trabajan en paralelo sobre el mismo producto.',
      'Tiene buena sensibilidad para los layouts y para adaptar estilos de diseño rápidamente. Su próximo paso es profundizar en la atención al detalle y en pensar en opcionalidades cuando falta información, dos habilidades que se desarrollan con práctica y que van a hacer la diferencia en su carrera.',
      'Iván tiene potencial real en UX/UI. Con más tiempo y continuidad, estoy seguro de que habría entregado trabajo muy sólido.”',
    ],
    name: "Leandro Buzeta",
    role: "CEO · No Country",
    linkedin: "https://www.linkedin.com/in/ivan-andrade-uxui/details/recommendations/",
    linkedinLabel: "Ver recomendaciones en LinkedIn",
    authorUrl: "https://www.linkedin.com/in/leandrobuzeta/",
    orgUrl: "https://www.linkedin.com/company/nocountrytalent/home/",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TESTIMONIALS[activeIndex];
  const move = (direction: -1 | 1) => setActiveIndex(current => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="home-section home-container home-testimonials" aria-labelledby="testimonials-heading">
      <div className="home-section-heading"><p className="home-kicker">06 / Recomendaciones</p><h2 id="testimonials-heading">Diseñar también es colaborar.</h2><p>Testimonios de personas con las que trabajé. Conservados con su atribución y contexto.</p></div>
      <div role="region" aria-roledescription="carousel" aria-label="Recomendaciones del equipo" tabIndex={0} className="home-quote-region" onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}>
        <div aria-live="polite" aria-atomic="true" className="home-quote-body">
          <Quote size={32} aria-hidden />
          <blockquote>{active.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</blockquote>
          <div className="home-quote-author"><div>{active.authorUrl ? <a href={active.authorUrl} target="_blank" rel="noopener noreferrer">{active.name} ↗</a> : <strong>{active.name}</strong>}<p>{active.orgUrl ? <a href={active.orgUrl} target="_blank" rel="noopener noreferrer">{active.role}</a> : active.role}</p></div><a href={active.linkedin} target="_blank" rel="noopener noreferrer" className="home-text-link"><LinkedinIcon />{active.linkedinLabel ?? "Ver recomendación en LinkedIn"}</a></div>
        </div>
        <div className="home-quote-controls">
          <div role="group" aria-label="Seleccionar recomendación">{TESTIMONIALS.map((item, i) => <button key={item.name} type="button" aria-label={`Mostrar recomendación de ${item.name}`} aria-pressed={activeIndex === i} onClick={() => setActiveIndex(i)}>{String(i + 1).padStart(2, "0")}</button>)}</div>
          <div><button type="button" onClick={() => move(-1)} aria-label="Recomendación anterior"><ChevronLeft size={20} aria-hidden /></button><button type="button" onClick={() => move(1)} aria-label="Siguiente recomendación"><ChevronRight size={20} aria-hidden /></button></div>
        </div>
      </div>
    </section>
  );
}
