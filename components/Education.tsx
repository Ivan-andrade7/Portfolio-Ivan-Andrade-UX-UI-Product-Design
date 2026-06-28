interface EduItem {
  title: string;
  institution: string;
  status: "Próximo" | "Cursando" | "Completado";
  date: string;
}

const FORMAL: EduItem[] = [
  {
    title: "Tecnicatura Universitaria en Diseño Gráfico Digital",
    institution: "Universidad Tecnológica Nacional (UTN)",
    status: "Próximo",
    date: "Ago 2026 — Presente",
  },
  {
    title: "Diplomatura en IA Aplicada a Entornos Digitales",
    institution: "UBA · C.U. Chivilcoy",
    status: "Cursando",
    date: "Abr 2026 — Presente",
  },
  {
    title: "Tecnicatura en Seguridad Pública",
    institution: "Formación terciaria",
    status: "Completado",
    date: "2018 — 2019",
  },
  {
    title: "Bachillerato en Ciencias Sociales",
    institution: "Educación secundaria",
    status: "Completado",
    date: "2012 — 2017",
  },
];

const CERTS: EduItem[] = [
  {
    title: "UX/UI | UX UI Avanzado | UX Research | UI | Prototipado | Product Manager",
    institution: "Coderhouse",
    status: "Completado",
    date: "2024 — 2026",
  },
  {
    title: "Introducción a la IA | UI Design",
    institution: "Talento Tech",
    status: "Completado",
    date: "2025",
  },
  {
    title: "Introducción al Desarrollo Web",
    institution: "Desafío Latam",
    status: "Completado",
    date: "2024",
  },
];

/* Dot icons — 16×16 filled circle */
function ActiveDot() {
  return <div className="w-4 h-4 rounded-full bg-[var(--text-accent)] shrink-0" />;
}
function InactiveDot() {
  return <div className="w-4 h-4 rounded-full bg-[var(--text-tertiary)] opacity-40 shrink-0" />;
}

/* Status tag — accent (Próximo/Cursando) | neutral (Completo) */
function StatusTag({ status }: { status: EduItem["status"] }) {
  const isActive = status !== "Completado";
  return (
    <div
      className="flex items-center justify-center h-8 px-3 py-2 rounded-full shrink-0"
      style={{
        background: isActive ? "var(--brand-soft)" : "var(--bg-secondary)",
        border: `1px solid ${isActive ? "var(--border-interactive)" : "var(--border-default)"}`,
      }}
    >
      <span
        className="text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap"
        style={{ color: isActive ? "var(--text-accent)" : "var(--text-secondary)" }}
      >
        {status}
      </span>
    </div>
  );
}

/* Education / Item
   Default: transparent bg
   Hover:   bg-[var(--bg-secondary)]   ← per Figma node 246:1736 */
function EduItemCard({ title, institution, status, date }: EduItem) {
  const isActive = status !== "Completado";
  return (
    <div className="flex flex-col gap-2 px-4 py-3 rounded-xl w-full cursor-default hover:bg-[var(--bg-secondary)] transition-colors duration-150">
      {/* Row: dot + title + status tag — gap/sm=12px */}
      <div className="flex items-center gap-3 w-full">
        {isActive ? <ActiveDot /> : <InactiveDot />}
        <p className="text-[var(--text-primary)] text-[14px] font-semibold leading-5 flex-1 min-w-0">
          {title}
        </p>
        <StatusTag status={status} />
      </div>
      {/* Institution — Body-S: 14px/400/24px — accent */}
      <p className="text-[var(--text-accent)] text-[14px] leading-6">
        {institution}
      </p>
      {/* Date — Label-S: 12px/600/16px/1px — tertiary */}
      <p className="text-[var(--text-tertiary)] text-[12px] font-semibold leading-4 tracking-[1px]">
        {date}
      </p>
    </div>
  );
}

export default function Education() {
  return (
    /* section/lg × section/md = 96px × 64px; gap/xxl=48px between blocks */
    <section
      id="educacion"
      className="flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-16 bg-[var(--bg-primary)]"
    >
      {/* ── Section header: gap/xs=8px outer, no subtitle (per Figma) ── */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2 h-4">
          <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
          <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
            Formación
          </span>
        </div>
        <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px]">
          Educación y certificaciones
        </h2>
      </div>

      {/* ── Edu Row: 2 columns — gap/lg=24px ── */}
      <div className="flex flex-wrap gap-6 items-start w-full">
        {/* Educación formal — gap/md=16px */}
        <div className="flex flex-col gap-4 flex-1 min-w-[320px]">
          <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5 whitespace-nowrap">
            Educación formal
          </p>
          {FORMAL.map((item) => (
            <EduItemCard key={item.title} {...item} />
          ))}
        </div>

        {/* Certificaciones — gap/md=16px */}
        <div className="flex flex-col gap-4 flex-1 min-w-[320px]">
          <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5 whitespace-nowrap">
            Certificaciones
          </p>
          {CERTS.map((item) => (
            <EduItemCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
