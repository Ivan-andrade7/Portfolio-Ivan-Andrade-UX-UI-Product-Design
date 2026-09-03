interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  desc: string;
  accentTags: string[];
  neutralTags: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    date: "Abr — May 2026",
    title: "UX UI Designer — ChatCRM",
    company: "No Country · Proyecto colaborativo con desarrollo",
    desc: "CRM con pipeline visual kanban como pantalla principal y handoff como entregable primario para desarrollo.",
    accentTags: ["CRM", "Kanban"],
    neutralTags: ["Handoff"],
  },
  {
    date: "Feb — Mar 2026",
    title: "UX UI Designer — GardenAds",
    company: "No Country · Proyecto colaborativo con desarrollo",
    desc: "Propuesta SaaS de atribución con landing pública parcial, benchmark de 6 plataformas y handoff documentado.",
    accentTags: ["Analytics", "SaaS B2B"],
    neutralTags: ["Dark"],
  },
  {
    date: "Nov — Dic 2025",
    title: "UX UI Designer — Multi-Brand DS",
    company: "No Country · Equipo UX/UI y Product Design",
    desc: "Design system multimarca: una librería y dos identidades (Academy / Kids), con una base compartida documentada.",
    accentTags: ["DS", "Tokens"],
    neutralTags: ["EdTech"],
  },
  {
    date: "Sep — Oct 2025",
    title: "UX UI Designer — Fintech PYME",
    company: "No Country · Proyecto colaborativo con desarrollo",
    desc: "Plataforma dual de créditos B2B con onboarding KYC y superficies diferenciadas para solicitantes y supervisores.",
    accentTags: ["Fintech", "KYC"],
    neutralTags: ["RBAC"],
  },
  {
    date: "Jul — Oct 2025",
    title: "UX UI Designer Jr — TrainiT",
    company: "Programa TrainiT · Pasantía con equipo de desarrollo",
    desc: "Herramienta de gestión de proyectos con Dashboard como entrada y Kanban y Backlog separados.",
    accentTags: ["SaaS", "Kanban"],
    neutralTags: ["Gestión"],
  },
];

export default function Experience() {
  return (
    /* section/lg × section/md = 96px × 64px; gap/xxl=48px between blocks */
    <section
      id="experiencia"
      className="flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-16 bg-[var(--bg-primary)]"
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
            Experiencia en proyectos colaborativos
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">
            Experiencia en No Country y Programa TrainiT, con trabajo en equipos de diseño y desarrollo y metodologías ágiles.
          </p>
        </div>
      </div>

      {/* ── Exp list: gap/lg=24px between items ── */}
      <div className="flex flex-col gap-6 w-full">
        {EXPERIENCES.map(({ date, title, company, desc, accentTags, neutralTags }) => (
          /* Item: flex gap/lg=24px, pb-inset/lg=24px, border-b */
          <div
            key={title}
            className="flex gap-6 items-start pb-6 border-b border-[var(--border-default)]"
          >
            {/* Date — Label-S: 12px/600/16px/1px — tertiary, no-wrap */}
            <span className="shrink-0 whitespace-nowrap text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-tertiary)]">
              {date}
            </span>

            {/* Content — gap/sm=12px */}
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              {/* Header: title + company — gap/xs=8px */}
              <div className="flex flex-col gap-2">
                <p className="text-[var(--text-primary)] text-[14px] font-semibold leading-5">
                  {title}
                </p>
                <p className="text-[var(--text-accent)] text-[14px] leading-6">
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
