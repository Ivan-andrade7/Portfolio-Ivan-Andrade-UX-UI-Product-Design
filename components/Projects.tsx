import ProjectCard, { type Project } from "@/components/ProjectCard";

// Todos los casos publicados se presentan en una selección unificada.
const PROJECTS: Project[] = [
  {
    id: "fintech",
    index: "01",
    category: "Product Design",
    nature: "Simulación laboral · No Country",
    title: "Fintech PYME",
    tags: ["Fintech", "SaaS B2B", "KYC"],
    longDesc: "Simulación laboral No Country: diseño UX/UI de una experiencia de solicitud y revisión de créditos PYME.",
    role: "Único diseñador UX/UI del workstream · 2025",
    images: { image: "/projects/fintech-card-dual/fintech-card-plataforma-dual-b.webp" },
  },
  {
    id: "garden-ads",
    index: "02",
    category: "Product Design",
    nature: "Simulación laboral · No Country",
    title: "GardenAds — Attribution & Tracking Health",
    tags: ["Analytics SaaS", "Dashboard", "2026"],
    longDesc: "Simulación laboral de No Country: propuesta de plataforma para detectar fallos de tracking y convertirlos en señales accionables.",
    role: "UX/UI Designer · único diseñador · 5 semanas",
    images: { image: "/projects/garden-ads-card-square.webp" },
  },
  {
    id: "crm",
    index: "03",
    category: "Product Design",
    nature: "Simulación laboral · No Country",
    title: "ChatCRM — CRM para PyMEs",
    tags: ["CRM", "SaaS B2B", "Pipeline"],
    longDesc: "Simulación laboral de No Country: concepto de CRM con pipeline visual kanban y handoff como entregable de diseño.",
    role: "UX/UI Designer · equipo de 5",
    images: { image: "/projects/crm-card-square.webp" },
  },
  {
    id: "multi-brand",
    index: "04",
    category: "Sistemas de diseño",
    nature: "Simulación colaborativa · No Country",
    title: "Multi-Brand Design System",
    tags: ["Design System", "EdTech", "Multi-marca"],
    longDesc: "Simulación laboral colaborativa de No Country: arquitectura de tokens compartida para Academy y Kids.",
    role: "UX/UI Designer · equipo de 5 · 5 semanas",
    images: { image: "/projects/multi-brand-card-square.webp" },
  },
  {
    id: "trainit",
    index: "05",
    category: "UX/UI y componentes",
    nature: "Práctica formativa · TrainiT",
    title: "TrainiT — Gestión de Proyectos",
    tags: ["Pasantía formativa", "SaaS", "Kanban"],
    longDesc: "Pasantía/práctica formativa del Programa TrainiT: trabajo en el workstream Grupo 1/UI Components.",
    role: "Junior UX/UI Designer · 23 jun — 15 oct 2025",
    images: { image: "/projects/trainit-card-square.webp" },
  },
  {
    id: "nodo",
    index: "06",
    category: "Diseño e implementación web",
    nature: "Proyecto personal conceptual",
    title: "NODO Arquitectura",
    tags: ["Diseño web", "Responsive", "UI"],
    longDesc: "Proyecto personal conceptual: sitio de arquitectura responsive, con componentes reutilizables y navegación coherente.",
    role: "Diseño UI · ejecución asistida",
    images: { image: "/projects/nodo/05-sobre-nodo-introduccion-desktop.jpg", treatment: "screen" },
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="home-section home-container" aria-labelledby="projects-heading">
      <div className="home-section-heading">
        <p className="home-kicker">01 / Trabajo seleccionado</p>
        <h2 id="projects-heading">El criterio, en práctica.</h2>
        <p>Problemas, decisiones y aportes de diseño. Cada proyecto conserva su contexto: simulación, práctica formativa o proyecto personal.</p>
      </div>
      <p className="home-group-label">Producto, interfaces y sistemas <span>05 proyectos</span></p>
      <div className="home-project-grid">
        {PROJECTS.filter(p => p.id !== "nodo").map((project, i) => <ProjectCard key={project.id} project={project} featured={i === 0} />)}
      </div>
      <p className="home-group-label">Diseño web <span>01 proyecto</span></p>
      <div className="home-project-grid">
        {PROJECTS.filter(p => p.id === "nodo").map(project => <ProjectCard key={project.id} project={project} featured />)}
      </div>
    </section>
  );
}
