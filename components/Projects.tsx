import ProjectCard, { type Project } from "@/components/ProjectCard";

const PROJECTS: Project[] = [
  {
    id: "garden-ads",
    title: "GardenAds — Attribution & Tracking Health",
    tags: ["Analytics SaaS", "Dashboard", "2026"],
    longDesc: "Plataforma SaaS de atribución end-to-end como único designer: Tracking Health, benchmark de 5 competidores y handoff completo.",
    role: "UX UI Designer · 5 semanas",
    image: "/projects/garden-ads.png",
  },
  {
    id: "crm",
    title: "ChatCRM — CRM para PyMEs",
    tags: ["CRM", "SaaS B2B", "Pipeline"],
    longDesc: "CRM con pipeline visual kanban como pantalla principal y handoff como entregable primario para desarrollo.",
    role: "UX UI Designer · 2 meses",
    image: "/projects/crm.png",
  },
  {
    id: "fintech",
    title: "Fintech PYME — Plataforma de Créditos",
    tags: ["Fintech", "SaaS B2B", "KYC"],
    longDesc: "Onboarding KYC de 4 pasos y dos superficies (solicitante / supervisor) con RBAC pensado como UX, no solo como técnica.",
    role: "UX UI Designer · 5 semanas",
    image: "/projects/fintech.png",
  },
  {
    id: "multi-brand",
    title: "Multi-Brand Design System",
    tags: ["Design System", "EdTech", "Multi-marca"],
    longDesc: "Design system multimarca: 70% tokens compartidos + 30% de marca, con dos identidades (Academy / Kids).",
    role: "UX UI Designer · 3 semanas",
    image: "/projects/multi-brand.png",
  },
  {
    id: "trainit",
    title: "TrainiT — Gestión de proyectos",
    tags: ["SaaS", "Kanban", "Gestión"],
    longDesc: "Herramienta de gestión de proyectos con Dashboard como entrada y Kanban y Backlog separados.",
    role: "UX UI Designer Jr · 3 meses",
    image: "/projects/trainit.png",
  },
];

export default function Projects() {
  return (
    /* Section: px-96px py-64px (section/lg × section/md) */
    <section
      id="proyectos"
      className="bg-[var(--bg-primary)] flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-12 md:py-16"
    >
      {/* ── Section header ── */}
      <div className="flex flex-col gap-2 items-start w-full">

        {/* Eyebrow: divider line + label-s */}
        <div className="flex items-center gap-2 h-4">
          <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
          <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
            Proyectos seleccionados
          </span>
        </div>

        {/* Content: H2 + body-m */}
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px]">
            Casos de estudio
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">
            Proyectos end-to-end que resuelven problemas operacionales reales con criterio de diseño y foco en el impacto.
          </p>
        </div>
      </div>

      {/* ── Grid: flex-col gap-24px, rows use flex-wrap ── */}
      <div className="flex flex-col gap-6 w-full">
        {/* Row 1 — 2 cards */}
        <div className="flex flex-wrap gap-6">
          {PROJECTS.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="flex flex-wrap gap-6">
          {PROJECTS.slice(2).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
