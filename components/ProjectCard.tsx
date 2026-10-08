import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResilientImage from "@/components/ResilientImage";

export interface ProjectImages { image: string; treatment?: "screen" }
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

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Link href={`/proyectos/${project.id}`} aria-labelledby={`home-project-${project.id}`} aria-describedby={`home-project-meta-${project.id}`} className={`home-project${featured ? " home-project-featured" : ""}`}>
      <div className={`home-project-image${project.images.treatment === "screen" ? " home-project-screen" : ""}`}>
        <ResilientImage src={project.images.image} alt={`Vista del proyecto ${project.title}`} fill className="object-cover" sizes={featured ? "(max-width: 767px) 100vw, 55vw" : "(max-width: 767px) 100vw, 50vw"} />
        <span className="home-project-index" aria-hidden>{project.index}</span>
      </div>
      <div className="home-project-content">
        <div id={`home-project-meta-${project.id}`} className="home-project-meta"><span>{project.category}</span><span>{project.nature}</span></div>
        <h3 id={`home-project-${project.id}`}>{project.title}<ArrowUpRight size={24} aria-hidden /></h3>
        <p>{project.longDesc}</p>
        <ul className="home-project-tags" aria-label="Temas del proyecto">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <div className="home-project-bottom"><span>{project.role}</span><span className="home-text-link">Ver caso <ArrowUpRight size={16} aria-hidden /></span></div>
      </div>
    </Link>
  );
}
