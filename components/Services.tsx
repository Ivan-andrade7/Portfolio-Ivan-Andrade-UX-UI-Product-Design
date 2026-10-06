import { ArrowRight, BriefcaseBusiness, LayoutTemplate, SearchCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Landing pages y sitios institucionales",
    description:
      "Diseño sitios claros, responsive y orientados a presentar una propuesta, generar consultas o validar una idea.",
    includes: ["Arquitectura y contenido", "Diseño UX/UI responsive", "Implementación y publicación"],
    Icon: LayoutTemplate,
  },
  {
    title: "Portfolios profesionales",
    description:
      "Organizo experiencia, proyectos y propuesta de valor en un sitio personal fácil de recorrer y mantener.",
    includes: ["Estructura narrativa", "Diseño visual", "Versión móvil y desktop"],
    Icon: BriefcaseBusiness,
  },
  {
    title: "Auditoría y mejora de sitios",
    description:
      "Reviso jerarquía, navegación, responsive, contenido y accesibilidad para detectar y priorizar mejoras concretas.",
    includes: ["Diagnóstico priorizado", "Propuesta UX/UI", "Ajustes acordados"],
    Icon: SearchCheck,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="flex min-w-0 flex-col gap-12 bg-[var(--bg-secondary)] px-6 py-16 md:px-12 xl:px-24"
    >
      <div className="flex max-w-3xl flex-col gap-3">
        <div className="flex min-h-4 items-center gap-2">
          <span className="block h-[2px] w-6 shrink-0 bg-[var(--text-accent)]" />
          <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">
            Servicios web
          </span>
        </div>
        <h2 className="text-[32px] font-bold leading-10 tracking-[-1.5px] text-[var(--text-primary)]">
          Diseño y creación de sitios web
        </h2>
        <p className="text-[16px] leading-7 text-[var(--text-secondary)]">
          Además de mi búsqueda full-time, tomo proyectos web seleccionados para profesionales, marcas y equipos pequeños. Combino UX/UI, diseño responsive e implementación asistida por IA, con revisión propia en cada etapa.
        </p>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-3">
        {SERVICES.map(({ title, description, includes, Icon }) => (
          <article
            key={title}
            className="flex min-w-0 flex-col gap-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-6"
          >
            <span className="flex size-11 items-center justify-center rounded-lg border border-[var(--border-interactive)] bg-[var(--brand-soft)] text-[var(--text-accent)]">
              <Icon size={22} aria-hidden />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] font-semibold leading-8 text-[var(--text-primary)]">{title}</h3>
              <p className="text-[14px] leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
            <ul className="flex flex-col gap-2" aria-label={`Incluye ${title}`}>
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] leading-6 text-[var(--text-secondary)]">
                  <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-[var(--text-accent)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 md:flex-row md:items-center">
        <div className="flex max-w-2xl flex-col gap-1">
          <p className="text-[16px] font-semibold leading-7 text-[var(--text-primary)]">¿Tenés una web en mente?</p>
          <p className="text-[14px] leading-6 text-[var(--text-secondary)]">
            Contame el objetivo, el alcance aproximado y si ya tenés contenido o identidad visual. Primero evaluamos si el proyecto encaja.
          </p>
        </div>
        <a
          href="#contactos"
          className="flex h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-[var(--brand-primary)] px-4 py-3 text-[14px] font-semibold leading-5 text-[var(--text-inverse)] transition-colors hover:bg-[var(--brand-hover)] active:scale-[0.98]"
        >
          Consultar por una web
          <ArrowRight size={18} aria-hidden />
        </a>
      </div>
    </section>
  );
}
