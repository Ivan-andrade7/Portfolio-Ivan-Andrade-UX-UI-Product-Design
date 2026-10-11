import { CASE_SEQUENCE } from "@/lib/case-navigation";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import "@/app/fellowship-integration.css";
import "@/app/proyectos/case-presentation.css";

// Selección local: cada caso mantiene su naturaleza y alcance explícitos.
const PROJECT_RECORDS: Omit<Project, "index">[] = [
  {
    id: "fintech",    category: "Product Design",
    nature: "Simulación laboral · No Country",
    title: "Fintech PYME",
    tags: ["Fintech", "SaaS B2B", "KYC"],
    longDesc: "Simulación laboral No Country: diseño UX/UI de una experiencia de solicitud y revisión de créditos PYME.",
    role: "Único diseñador UX/UI del workstream · 2025",
    images: { treatment: "device", image: "/projects/devices/fintech-card-dos-caminos-8ea8197a452a.webp" },
  },
  {
    id: "garden-ads",    category: "Product Design",
    nature: "Simulación laboral · No Country",
    title: "GardenAds — Attribution & Tracking Health",
    tags: ["Analytics SaaS", "Dashboard", "2026"],
    longDesc: "Simulación laboral de No Country: propuesta de plataforma para detectar fallos de tracking y convertirlos en señales accionables.",
    role: "UX/UI Designer · único diseñador · ene–mar 2026",
    images: { treatment: "device", image: "/projects/devices/garden-ads-card-1200.webp" },
  },
  {
    id: "crm",    category: "Product Design",
    nature: "Simulación laboral · No Country",
    title: "ChatCRM — CRM para PyMEs",
    tags: ["CRM", "SaaS B2B", "Conversaciones"],
    longDesc: "Simulación laboral de No Country: diseño UX/UI para relacionar conversaciones, contactos y tareas de seguimiento.",
    role: "UX/UI Designer · equipo de 5",
    images: { treatment: "device", image: "/projects/devices/crm-card-1200.webp" },
  },
  {
    id: "multi-brand",    category: "Sistemas de diseño",
    nature: "Simulación colaborativa · No Country",
    title: "Multi-Brand Design System",
    tags: ["Design System", "EdTech", "Multi-marca"],
    longDesc: "Simulación laboral colaborativa de No Country: arquitectura de tokens compartida para Academy y Kids.",
    role: "UX/UI Designer · equipo de 5 · 5 semanas",
    images: { treatment: "device", image: "/projects/devices/multi-brand-card-1200.webp" },
  },
  {
    id: "trainit",    category: "UX/UI y componentes",
    nature: "Práctica formativa · TrainiT",
    title: "TrainiT — Gestión de Proyectos",
    tags: ["Pasantía formativa", "SaaS", "Kanban"],
    longDesc: "Pasantía/práctica formativa del Programa TrainiT: trabajo en el workstream Grupo 1/UI Components.",
    role: "Junior UX/UI Designer · 23 jun — 15 oct 2025",
    images: { treatment: "device", image: "/projects/devices/trainit-card-1200.webp" },
  },
  {
    id: "nodo",    category: "Diseño e implementación web",
    nature: "Proyecto personal conceptual",
    title: "NODO Arquitectura",
    tags: ["Diseño web", "Responsive", "UI"],
    longDesc: "Proyecto personal conceptual: sitio de arquitectura responsive, con componentes reutilizables y navegación coherente.",
    role: "Diseño UI · ejecución asistida",
    images: { treatment: "device", image: "/projects/devices/nodo-card-sistema-1200.webp" },
  },
  {
    id: "fellowship",    category: "Diseño web UX/UI",
    nature: "Trabajo real · Fellowship No Country",
    title: "Fellowship / No Country",
    tags: ["Diseño web", "Adaptación de marca", "Responsive"],
    longDesc: "Diseñé y documenté una landing para empresas, con una identidad existente, adaptación responsive y coordinación con desarrollo.",
    role: "Web Designer Fellow · diseño y documentación · 2026",
    images: { treatment: "device", image: "/projects/devices/fellowship-card-1200.webp" },
  },
];

const PROJECTS: Project[] = CASE_SEQUENCE.map((item, index) => {
  const project = PROJECT_RECORDS.find(project => project.id === item.slug);
  if (!project) throw new Error(`Missing project card: ${item.slug}`);
  return { ...project, index: String(index + 1).padStart(2, "0") };
});

export default function Projects() {
  return (
    <section id="proyectos" className="home-section home-container" aria-labelledby="projects-heading">
      <div className="home-section-heading">
        <p className="home-kicker">01 / Trabajo seleccionado</p>
        <h2 id="projects-heading">El criterio, en práctica.</h2>
        <p>Problemas, decisiones y aportes de diseño. Cada proyecto conserva su contexto: trabajo real, simulación, práctica formativa o proyecto personal.</p>
      </div>
      <p className="home-group-label">Producto, interfaces y sistemas <span>05 proyectos</span></p>
      <div className="home-project-grid">
        {PROJECTS.filter(p => p.id !== "nodo" && p.id !== "fellowship").map((project, i) => <ProjectCard key={project.id} project={project} featured={i === 0} />)}
      </div>
      <p className="home-group-label">Diseño web <span>02 proyectos</span></p>
      <div className="home-project-grid">
        {PROJECTS.filter(p => p.id === "nodo" || p.id === "fellowship").map(project => <ProjectCard key={project.id} project={project} featured />)}
      </div>
    </section>
  );
}
