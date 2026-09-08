"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";

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
      '“Iván participó en el No Country Fellowship como diseñador UX/UI en un contexto exigente: trabajar sobre un producto real con branding definido y mobile-first.”',
      '“Lo que más valoro de su paso por el programa es su disposición a iterar y la coherencia que fue ganando su documentación.”',
    ],
    name: "Leandro",
    role: "CEO · No Country · Fellowship",
    linkedin: "https://www.linkedin.com/in/ivan-andrade-uxui/details/recommendations/",
    linkedinLabel: "Ver recomendaciones en LinkedIn",
    authorUrl: "https://www.linkedin.com/in/leandrobuzeta/",
    orgUrl: "https://www.linkedin.com/company/nocountrytalent/home/",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    /* section/lg × section/md = 96px × 64px; gap/xxl=48px between blocks */
    <section className="flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-16 bg-[var(--bg-primary)]">
      {/* ── Section header: gap/xs=8px outer, no subtitle (per Figma) ── */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2 h-4">
          <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
          <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
            Testimonios
          </span>
        </div>
        <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px]">
          Lo que dice el equipo
        </h2>
      </div>

      <div
        className="flex flex-col gap-6 w-full min-w-0"
        role="region"
        aria-roledescription="carousel"
        aria-label="Recomendaciones del equipo"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
      >
        {/* ── Single recommendation card ── */}
        <div
          key={activeTestimonial.name}
          className="flex min-w-0 flex-col gap-3 p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-default)] hover:border-[var(--border-interactive)] transition-colors duration-150 cursor-default"
          style={{ boxShadow: "var(--shadow-card)" }}
          aria-live="polite"
        >
            {/* Quote icon — 20px accent */}
            <Quote size={20} className="text-[var(--text-accent)] shrink-0" />

            {/* Body-M: 16px/400/28px — secondary */}
            <div className="flex flex-col text-[var(--text-secondary)] text-[16px] leading-7">
              {activeTestimonial.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full border-t border-[var(--border-default)]" />

            {/* Author — gap/sm=12px */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {/* Avatar pill — bg-secondary, rounded-full, p-8px */}
                <div className="p-2 rounded-full bg-[var(--bg-secondary)] shrink-0">
                  <User size={20} className="text-[var(--text-tertiary)]" />
                </div>
                {/* Name + role — gap/xs=8px */}
                <div className="flex flex-col flex-1 min-w-0 gap-2">
                  {activeTestimonial.authorUrl ? (
                    <a href={activeTestimonial.authorUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] text-[14px] font-semibold leading-5 hover:text-[var(--text-accent)] transition-colors">
                      {activeTestimonial.name}
                    </a>
                  ) : (
                    <span className="text-[var(--text-primary)] text-[14px] font-semibold leading-5">
                      {activeTestimonial.name}
                    </span>
                  )}
                  <span className="text-[var(--text-tertiary)] text-[12px] font-semibold leading-4 tracking-[1px]">
                    {activeTestimonial.orgUrl ? <a href={activeTestimonial.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-accent)] transition-colors">{activeTestimonial.role}</a> : activeTestimonial.role}
                  </span>
                </div>
              </div>
              {/* LinkedIn — enlace con texto, no URL cruda */}
              {activeTestimonial.linkedin ? (
                <a
                  href={activeTestimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-fit text-[var(--text-accent)] text-[14px] font-semibold leading-5 hover:opacity-80 transition-opacity"
                >
                  <LinkedinIcon />
                  {activeTestimonial.linkedinLabel ?? "Ver recomendación en LinkedIn"}
                </a>
              ) : (
                <span className="text-[var(--text-tertiary)] text-[12px] leading-5">
                  Recomendación recibida · perfil público de Leandro
                </span>
              )}
            </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Seleccionar recomendación">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Mostrar recomendación de ${testimonial.name}`}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-6 bg-[var(--text-accent)]" : "w-2 bg-[var(--border-interactive)]"}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Recomendación anterior" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--border-interactive)] hover:text-[var(--text-accent)] transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Siguiente recomendación" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--border-interactive)] hover:text-[var(--text-accent)] transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
