import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResilientImage from "@/components/ResilientImage";

export interface ProjectImages { image: string; treatment?: "screen" | "device" }
export interface Project {
  id: string;
  index: string;
  category: string;
  nature: string;
  title: string;
  tags: string[];
  longDesc: string;
  role: string;
  images: ProjectImages;
}

export default function ProjectCard({ project, featured = false, compact = false, context = "home" }: { project: Project; featured?: boolean; compact?: boolean; context?: string }) {
  const titleId = `${context}-project-${project.id}`, metaId = `${context}-project-meta-${project.id}`;
  return (
    <Link href={`/proyectos/${project.id}`} aria-labelledby={titleId} aria-describedby={metaId} className={`home-project${featured ? " home-project-featured" : ""}${compact ? " home-project-compact" : ""}`}>
      <div className={`home-project-image${project.images.treatment === "screen" ? " home-project-screen" : project.images.treatment === "device" ? " home-project-device" : ""}`}>
        <ResilientImage src={project.images.image} alt={`Vista del proyecto ${project.title}`} fill className="object-cover" sizes={featured ? "(max-width: 767px) 100vw, 55vw" : "(max-width: 767px) 100vw, 50vw"} />
        {!compact && <span className="home-project-index" aria-hidden>{project.index}</span>}
      </div>
      <div className="home-project-content">
        <div id={metaId} className="home-project-meta"><span>{project.category}</span><span>{project.nature}</span></div>
        <h3 id={titleId}>{project.title}<ArrowUpRight size={24} aria-hidden /></h3>
        <p>{project.longDesc}</p>
        {!compact && <ul className="home-project-tags" aria-label="Temas del proyecto">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
        <div className="home-project-bottom"><span>{project.role}</span><span className="home-text-link">Ver caso <ArrowUpRight size={16} aria-hidden /></span></div>
      </div>
    </Link>
  );
}
