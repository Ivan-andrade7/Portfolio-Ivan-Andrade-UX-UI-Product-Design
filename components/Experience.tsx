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
    date: "Mar — Abr 2026",
    title: "UX UI Designer — ChatCRM",
    company: "No Country · Simulación laboral remota",
    desc: "CRM con pipeline visual kanban como pantalla principal y handoff como entregable primario para desarrollo.",
    accentTags: ["CRM", "Kanban"],
    neutralTags: ["Handoff"],
  },
  {
    date: "Ene — Mar 2026",
    title: "UX UI Designer — GardenAds",
    company: "No Country · Simulación laboral remota",
    desc: "Plataforma SaaS de atribución end-to-end como único designer: Tracking Health, benchmark de 5 competidores y handoff completo.",
    accentTags: ["Analytics", "SaaS B2B"],
    neutralTags: ["Dark"],
  },
  {
    date: "Nov — Dic 2025",
    title: "UX UI Designer — Multi-Brand DS",
    company: "No Country · Simulación laboral remota",
    desc: "Design system multimarca: 70% tokens compartidos + 30% de marca, con dos identidades (Academy / Kids).",
    accentTags: ["DS", "Tokens"],
    neutralTags: ["EdTech"],
  },
  {
    date: "Sep — Nov 2025",
    title: "UX UI Designer — Fintech PYME",
    company: "No Country · Simulación laboral remota",
    desc: "Onboarding KYC de 4 pasos y dos superficies (solicitante / supervisor) con RBAC pensado como UX, no solo como técnica.",
    accentTags: ["Fintech", "KYC"],
    neutralTags: ["RBAC"],
  },
  {
    date: "Jul — Oct 2025",
    title: "UX UI Designer Jr — TrainiT",
    company: "No Country · Simulación laboral remota",
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
            Simulaciones laborales remotas
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">
            Simulaciones laborales en No Country — programa de aceleración para profesionales tech en equipos reales con metodologías ágiles.
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
