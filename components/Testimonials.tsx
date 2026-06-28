import { Quote, User } from "lucide-react";

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
      "Es una de las personas mas comprometidas que conocí, tanto con su trabajo como con el proyecto y el equipo. Su diseño no solo cumplió con los objetivos, sino que destacó por su calidad, creatividad y enfoque en la mejora continua.",
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
      'Además de su talento como diseñador, es una persona muy predispuesta al trabajo en equipo y mantiene una comunicación clara y constante con el área de desarrollo, lo que hace que el trabajo conjunto sea mucho mas eficiente y fluido. Sin dudas, recomiendo a Ivan para cualquier proyecto relacionado con diseño UX/UI y desarrollo de productos digitales."',
    ],
    name: "Matias Barisone",
    role: "Desarrollador Fronted · No Country · 2026",
    linkedin: "https://www.linkedin.com/in/ivan-andrade-uxui/details/recommendations/",
  },
];

export default function Testimonials() {
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

      {/* ── Cards row: gap/lg=24px ── */}
      <div className="flex flex-wrap gap-6 items-start w-full">
        {TESTIMONIALS.map(({ paragraphs, name, role, linkedin }) => (
          /* Card
             Default: border-default, shadow-xs
             Hover:   border-interactive   ← per Figma 246:1918 */
          <div
            key={name}
            className="flex flex-col gap-3 p-6 rounded-xl flex-1 min-w-[320px] bg-[var(--bg-primary)] border border-[var(--border-default)] hover:border-[var(--border-interactive)] transition-colors duration-150 cursor-default"
            style={{ boxShadow: "0px 1px 2px 0px rgba(255,255,255,0.08)" }}
          >
            {/* Quote icon — 20px accent */}
            <Quote size={20} className="text-[var(--text-accent)] shrink-0" />

            {/* Body-M: 16px/400/28px — secondary */}
            <div className="flex flex-col text-[var(--text-secondary)] text-[16px] leading-7">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full border-t border-[var(--border-default)]" />

            {/* Author — gap/sm=12px */}
            <div className="flex items-center gap-3">
              {/* Avatar pill — bg-secondary, rounded-full, p-8px */}
              <div className="p-2 rounded-full bg-[var(--bg-secondary)] shrink-0">
                <User size={20} className="text-[var(--text-tertiary)]" />
              </div>
              {/* Name + role — gap/xs=8px */}
              <div className="flex flex-col flex-1 min-w-0 gap-2">
                <span className="text-[var(--text-primary)] text-[14px] font-semibold leading-5">
                  {name}
                </span>
                <span className="text-[var(--text-tertiary)] text-[12px] font-semibold leading-4 tracking-[1px]">
                  {role}
                </span>
              </div>
              {/* LinkedIn button — ghost, 32px, border-accent, rounded-control */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${name}`}
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-[var(--text-accent)] text-[var(--text-accent)] shrink-0 hover:bg-[rgba(45,212,191,0.08)] active:scale-[0.98] transition-all"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
