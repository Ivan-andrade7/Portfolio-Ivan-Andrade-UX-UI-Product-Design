import ProjectCard, { type Project } from "@/components/ProjectCard";

const MAIN_PROJECTS: Project[] = [
  {
    id: "fintech",
    title: "Fintech PYME — Plataforma de Créditos",
    tags: ["Fintech", "SaaS B2B", "KYC"],
    longDesc: "Onboarding KYC de 4 pasos y dos superficies (solicitante / supervisor) con RBAC pensado como UX, no solo como técnica.",
    role: "UX/UI Designer · 5 semanas",
    images: {
      narrow: "/projects/fintech-card-tall.png",
      medium: "/projects/fintech-card-square.png",
      wide: "/projects/fintech-card-square.png",
    },
  },
  {
    id: "garden-ads",
    title: "GardenAds — Attribution & Tracking Health",
    tags: ["Analytics SaaS", "Dashboard", "2026"],
    longDesc: "Plataforma SaaS de atribución end-to-end como único designer: Tracking Health, benchmark de 6 competidores y handoff completo.",
    role: "UX/UI Designer · 5 semanas",
    images: {
      narrow: "/projects/garden-ads-card-tall.png",
      medium: "/projects/garden-ads-card-square.png",
      wide: "/projects/garden-ads-card-square.png",
    },
  },
  {
    id: "crm",
    title: "ChatCRM — CRM para PyMEs",
    tags: ["CRM", "SaaS B2B", "Pipeline"],
    longDesc: "CRM con pipeline visual kanban como pantalla principal y handoff como entregable primario para desarrollo.",
    role: "UX/UI Designer · 5 semanas",
    images: {
      narrow: "/projects/crm-card-tall.png",
      medium: "/projects/crm-card-square.png",
      wide: "/projects/crm-card-wide.png",
    },
  },
];

const SELECTED_WORK: Project[] = [
  {
    id: "multi-brand",
    title: "Multi-Brand Design System",
    tags: ["Design System", "EdTech", "Multi-marca"],
    longDesc: "Design system multimarca: una librería, dos identidades (Academy / Kids), con ~70% de componentes compartidos.",
    role: "UX/UI Designer · 5 semanas",
    images: {
      narrow: "/projects/multi-brand-card-tall.png",
      medium: "/projects/multi-brand-card-tall.png",
      wide: "/projects/multi-brand-card-wide.png",
    },
  },
  {
    id: "trainit",
    title: "TrainiT — Gestión de proyectos",
    tags: ["SaaS", "Kanban", "Gestión"],
    longDesc: "Herramienta de gestión de proyectos con Dashboard como entrada y Kanban y Backlog separados.",
    role: "UX/UI Designer Jr · 3 meses",
    images: {
      narrow: "/projects/trainit-card-tall.png",
      medium: "/projects/trainit-card-tall.png",
      wide: "/projects/trainit-card-wide.png",
    },
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
            Proyectos end-to-end que resuelven problemas operacionales reales con criterio de diseño.
          </p>
        </div>
      </div>

      {/* ── Proyectos principales ── */}
      <div className="flex flex-col gap-6 w-full">
        <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5">
          Proyectos principales
        </p>
        <div className="flex flex-wrap gap-6">
          {MAIN_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      {/* Divider between grupos */}
      <div className="w-full border-t border-[var(--border-default)]" />

      {/* ── Trabajo seleccionado ── */}
      <div className="flex flex-col gap-6 w-full">
        <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5">
          Trabajo seleccionado
        </p>
        <div className="flex flex-wrap gap-6">
          {SELECTED_WORK.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
