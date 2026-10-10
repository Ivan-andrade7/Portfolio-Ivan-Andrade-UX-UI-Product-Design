import "@/app/proyectos/case-presentation.css";

type PresentationProject = "garden-ads" | "crm" | "multi-brand" | "trainit" | "fellowship" | "fintech" | "nodo";
/** Presentation only: the case evidence retains its own sources and enlargements. */
export default function CasePresentation({ project, alt }: { project: PresentationProject; alt: string }) {
  const root = project === "nodo" ? "/projects/devices/nodo-responsive-25-47-hero" : project === "fintech" ? "/projects/devices/fintech-dos-caminos-8ea8197a452a" : `/projects/devices/${project}-hero`;
  const largest = project === "nodo" ? 1800 : 1920;
  return <picture className="case-presentation">
    <img src={`${root}-1280.webp`} srcSet={`${root}-480.webp 480w, ${root}-768.webp 768w, ${root}-1280.webp 1280w, ${root}-${largest}.webp ${largest}w`} sizes="(max-width:767px) calc(100vw - 40px), (max-width:1023px) calc(100vw - 96px), min(820px, 46vw)" width={project === "nodo" ? 1800 : 2400} height={project === "nodo" ? 1350 : project === "fintech" ? 1600 : 1800} alt={alt} loading="eager" fetchPriority="high" decoding="async" />
  </picture>;
}
