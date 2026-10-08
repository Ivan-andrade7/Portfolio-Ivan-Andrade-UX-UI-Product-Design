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
    status: "Cursando",
    date: "Ago 2026 — Presente",
  },
  {
    title: "Diplomatura en IA Aplicada a Entornos Digitales",
    institution: "UBA · C.U. Chivilcoy",
    status: "Cursando",
    date: "Abr 2026 — Presente",
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

export default function Education() {
  return (
    <section id="educacion" className="home-section home-container home-education" aria-labelledby="education-heading">
      <div className="home-section-heading"><p className="home-kicker">05 / Formación</p><h2 id="education-heading">Una práctica en construcción.</h2></div>
      <div className="home-education-grid">
        {[{ title: "Educación formal", items: FORMAL }, { title: "Cursos y certificaciones", items: CERTS }].map(group => <div key={group.title}><h3>{group.title}</h3>{group.items.map(item => <article key={item.title}><div><h4>{item.title}</h4><span className="home-status">{item.status}</span></div><p>{item.institution}</p><p className="home-education-date">{item.date}</p></article>)}</div>)}
      </div>
    </section>
  );
}
