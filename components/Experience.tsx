interface ExperienceItem {
  date: string;
  dateExact?: string;
  title: string;
  company: string;
  desc: string;
  accentTags: string[];
  neutralTags: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    date: "3 ago — 31 ago 2026",
    dateExact: "03/08/2026–31/08/2026",
    title: "Web Designer Fellow — No Country",
    company: "No Country · Fellowship / voluntariado · experiencia profesional privada bajo NDA",
    desc: "Participé en un proyecto profesional de diseño web del área Comunicación / Sales & Marketing, en coordinación con desarrollo. Entregables y detalles del proyecto protegidos por NDA.",
    accentTags: ["Fellowship", "Web Design"],
    neutralTags: ["NDA"],
  },
  {
    date: "9 mar — 18 abr 2026",
    title: "UX UI Designer — ChatCRM",
    company: "No Country · Simulación laboral · equipo de 5 · único diseñador UX/UI",
    desc: "Diseñé un concepto UX/UI para centralizar conversaciones y pipeline; personas, JTBD y oportunidad se presentan como hipótesis o síntesis de desk research.",
    accentTags: ["CRM", "Kanban"],
    neutralTags: ["Handoff"],
  },
  {
    date: "26 ene — 7 mar 2026",
    title: "UX UI Designer — GardenAds",
    company: "No Country · Simulación laboral · único diseñador UX/UI",
    desc: "Diseñé una propuesta de plataforma de tracking health con benchmark colaborativo de seis competidores, arquitectura y prototipos.",
    accentTags: ["Analytics", "SaaS B2B"],
    neutralTags: ["Dark"],
  },
  {
    date: "10 nov — 14 dic 2025",
    title: "UX UI Designer — Multi-Brand DS",
    company: "No Country · Simulación laboral colaborativa · 1 de 4 UX/UI en equipo de 5",
    desc: "Contribuí a una arquitectura de tokens compartida para Academy y Kids, con componentes, variantes, estados y documentación de handoff.",
    accentTags: ["DS", "Tokens"],
    neutralTags: ["EdTech"],
  },
  {
    date: "29 sep — 2 nov 2025",
    title: "UX UI Designer — Fintech PYME",
    company: "No Country · Simulación laboral · único diseñador UX/UI",
    desc: "Diseñé una plataforma dual de créditos B2B con onboarding KYC y superficies diferenciadas para solicitantes y supervisores.",
    accentTags: ["Fintech", "KYC"],
    neutralTags: ["RBAC"],
  },
  {
    date: "23 jun — 15 oct 2025",
    title: "Junior UX/UI Designer — TrainiT",
    company: "Programa TrainiT (PGT) · Pasantía/práctica formativa",
    desc: "Participé como UX/UI Designer Jr en diseño de experiencia e interfaz, user flows, wireframing, prototipado en Figma y validación visual; además lideré el workstream Grupo 1/UI Components durante sprints concretos.",
    accentTags: ["SaaS", "Kanban"],
    neutralTags: ["Gestión"],
  },
];

export default function Experience() {
  return (
    /* section/lg × section/md = 96px × 64px; gap/xxl=48px between blocks */
    <section
      id="experiencia"
      className="flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-16 bg-[var(--bg-primary)] min-w-0"
    >
      {/* ── Section header: gap/xs=8px outer, gap/sm=12px content ── */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2 h-4">
          <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
          <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
            Experiencia
          </span>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px]">
            Experiencia en producto y formación
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">
            Fellowship y simulaciones laborales de No Country, junto con práctica formativa en TrainiT, con atribución diferenciada por equipo y alcance.
          </p>
        </div>
      </div>

      {/* ── Exp list: gap/lg=24px between items ── */}
      <div className="flex flex-col gap-6 w-full">
        {EXPERIENCES.map(({ date, dateExact, title, company, desc, accentTags, neutralTags }) => (
          /* Item: flex gap/lg=24px, pb-inset/lg=24px, border-b */
          <div
            key={title}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start pb-6 border-b border-[var(--border-default)] min-w-0"
          >
            {/* Date — Label-S: 12px/600/16px/1px — tertiary, no-wrap */}
            <span className="shrink-0 sm:whitespace-nowrap text-[12px] font-bold leading-4 tracking-[1px] text-[var(--text-secondary)]">
              <span title={dateExact}>{date}</span>
            </span>

            {/* Content — gap/sm=12px */}
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              {/* Header: title + company — gap/xs=8px */}
              <div className="flex flex-col gap-2">
                <p className="text-[var(--text-primary)] text-[14px] font-bold leading-5">
                  {title}
                </p>
                <p className="text-[var(--text-accent)] text-[14px] font-bold leading-6">
                  {company}
                </p>
              </div>

              {/* Description — Body-S: 14px/400/24px */}
              <p className="text-[var(--text-secondary)] text-[14px] leading-6">
                {desc}
              </p>

              {/* Tags — gap/xs=8px */}
              <div className="flex flex-wrap gap-2">
                {accentTags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center justify-center h-8 px-3 py-2 rounded-full shrink-0 bg-[var(--brand-soft)] border border-[var(--border-interactive)]"
                  >
                    <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
                      {tag}
                    </span>
                  </div>
                ))}
                {neutralTags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center justify-center h-8 px-3 py-2 rounded-full shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-default)]"
                  >
                    <span className="text-[var(--text-secondary)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
