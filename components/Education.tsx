interface EduItem {
  title: string;
  institution: string;
  status: "En etapa final" | "Próximo" | "Completado";
  date: string;
}

const FINAL_STAGE: EduItem[] = [
  {
    title: "Diplomatura en Inteligencia Artificial Aplicada a Entornos Digitales de Gestión",
    institution: "Universidad de Buenos Aires · Facultad de Ciencias Económicas · Cursada en el CUCH, Chivilcoy",
    status: "En etapa final",
    date: "Abr 2026 — Oct 2026 · TP integrador entregado el 6 nov 2026; pendiente de evaluación y certificado",
  },
];

const UPCOMING: EduItem[] = [
  {
    title: "Desarrollo Web",
    institution: "Coderhouse",
    status: "Próximo",
    date: "Inicia 12 dic 2026 · 10 semanas",
  },
];

const COMPLETED: EduItem[] = [
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

const COLUMNS = [
  [
    { title: "En etapa final", items: FINAL_STAGE },
    { title: "Próximo a comenzar", items: UPCOMING },
  ],
  [{ title: "Cursos completados", items: COMPLETED }],
];

export default function Education() {
  return (
    <section id="educacion" className="home-section home-container home-education" aria-labelledby="education-heading">
      <div className="home-section-heading"><p className="home-kicker">05 / Formación</p><h2 id="education-heading">Una práctica en construcción.</h2></div>
      <div className="home-education-grid">
        {COLUMNS.map((column, index) => <div key={index}>{column.map(group => <div key={group.title}><h3>{group.title}</h3>{group.items.map(item => <article key={item.title}><div><h4>{item.title}</h4><span className="home-status">{item.status}</span></div><p>{item.institution}</p><p className="home-education-date">{item.date}</p></article>)}</div>)}</div>)}
      </div>
    </section>
  );
}
