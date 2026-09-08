import ProjectCard, { type Project } from "@/components/ProjectCard";

// Todos los casos publicados se presentan en una selección unificada.
const PROJECTS: Project[] = [
  {
    id: "fintech",
    title: "Fintech PYME — Plataforma de Créditos B2B",
    tags: ["Fintech", "SaaS B2B", "KYC"],
    longDesc: "Simulación laboral de No Country: plataforma dual de créditos B2B con onboarding KYC y superficies diferenciadas.",
    role: "UX/UI Designer · único diseñador · 5 semanas",
    images: { image: "/projects/fintech-card-square.webp" },
  },
  {
    id: "garden-ads",
    title: "GardenAds — Attribution & Tracking Health",
    tags: ["Analytics SaaS", "Dashboard", "2026"],
    longDesc: "Simulación laboral de No Country: propuesta de plataforma para detectar fallos de tracking y convertirlos en señales accionables.",
    role: "UX/UI Designer · único diseñador · 5 semanas",
    images: { image: "/projects/garden-ads-card-square.webp" },
  },
  {
    id: "crm",
    title: "ChatCRM — CRM para PyMEs",
    tags: ["CRM", "SaaS B2B", "Pipeline"],
    longDesc: "Simulación laboral de No Country: concepto de CRM con pipeline visual kanban y handoff como entregable de diseño.",
    role: "UX/UI Designer · equipo de 5",
    images: { image: "/projects/crm-card-square.webp" },
  },
  {
    id: "multi-brand",
    title: "Multi-Brand Design System",
    tags: ["Design System", "EdTech", "Multi-marca"],
    longDesc: "Simulación laboral colaborativa de No Country: arquitectura de tokens compartida para Academy y Kids.",
    role: "UX/UI Designer · equipo de 5 · 5 semanas",
    images: { image: "/projects/multi-brand-card-square.webp" },
  },
  {
    id: "trainit",
    title: "TrainiT — Gestión de Proyectos",
    tags: ["Pasantía formativa", "SaaS", "Kanban"],
    longDesc: "Pasantía/práctica formativa del Programa TrainiT: trabajo en el workstream Grupo 1/UI Components.",
    role: "Junior UX/UI Designer · 23 jun — 15 oct 2025",
    images: { image: "/projects/trainit-card-square.webp" },
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-[var(--bg-primary)] flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-12 md:py-16 min-w-0">
      <div className="flex flex-col gap-2 items-start w-full">
        <div className="flex items-center gap-2 min-h-4">
          <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
          <span className="min-w-0 break-words text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px]">Proyectos seleccionados</span>
        </div>
        <div className="flex flex-col gap-3 w-full min-w-0">
          <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px] break-words">Casos de estudio</h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">Proyectos de diseño de producto que exploran problemas complejos con criterio, sistemas y documentación.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-w-0">
        {PROJECTS.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}
