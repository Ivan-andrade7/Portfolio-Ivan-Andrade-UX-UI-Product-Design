import { Check } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Especialización",
    items: [
      "SaaS B2B",
      "Fintech",
      "Analytics Dashboards",
      "Design Systems",
      "Plataformas operacionales",
    ],
  },
  {
    title: "Disciplinas",
    items: [
      "UX Research",
      "UI Design",
      "Arquitectura de información",
      "Prototipado",
      "Interaction Design",
      "Accesibilidad",
    ],
  },
  {
    title: "Herramientas",
    items: [
      "Figma · FigJam",
      "Variables & Tokens",
      "Auto Layout",
      "Dev Mode",
      "Notion",
    ],
  },
  {
    title: "Método & soft",
    items: [
      "Handoff a desarrollo",
      "Documentación",
      "Pensamiento sistémico",
      "Trabajo en equipo",
      "Comunicación",
    ],
  },
];

export default function Skills() {
  return (
    /* section/lg × section/md = 96px × 64px; gap/xxl=48px between blocks */
    <section className="flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-16 bg-[var(--bg-primary)]">
      {/* ── Section header: gap/xs=8px outer, gap/sm=12px content ── */}
      <div className="flex flex-col gap-2 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 h-4">
          <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
          <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
            Capacidades
          </span>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px]">
            Lo que sé hacer
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">
            Disciplinas, especialización y herramientas con las que trabajo end-to-end.
          </p>
        </div>
      </div>

      {/* ── Skill groups: gap/lg=24px between cards ── */}
      <div className="flex flex-wrap gap-6 w-full">
        {SKILL_GROUPS.map(({ title, items }) => (
          /* Card: inset/lg=24px, radius/card=12px, gap/sm=12px, border-default */
          <div
            key={title}
            className="flex flex-col gap-3 flex-1 min-w-[240px] p-6 rounded-xl border border-[var(--border-default)]"
          >
            {/* Label-L: 14px/600/20px/0px — accent */}
            <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5 whitespace-nowrap">
              {title}
            </p>
            {/* Items — each with gap/xs=8px between icon and text */}
            {items.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={16} className="text-[var(--text-accent)] shrink-0" />
                <span className="text-[var(--text-secondary)] text-[16px] leading-7">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
