interface ExperienceItem {
  date: string;
  dateExact?: string;
  title: string;
  company: string;
  desc: string;
  link?: {
    href: string;
    label: string;
  };
  accentTags: string[];
  neutralTags: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    date: "3 ago — 31 ago 2026",
    dateExact: "03/08/2026–31/08/2026",
    title: "Web Designer — Fellowship — No Country",
    company: "Experiencia profesional/formativa · Remoto",
    desc: "Trabajé en el diseño y la documentación de una landing mobile-first para el área de Comunicación / Sales & Marketing, con branding definido y en coordinación continua con desarrollo.",
    link: {
      href: "https://www.figma.com/design/amDM45xs0St1MQU40tfl0f/Landing---Empresa--%3E-Busca-talento?node-id=69-32&p=f",
      label: "Ver trabajo autorizado en Figma",
    },
    accentTags: ["Fellowship", "Web Design"],
    neutralTags: ["Mobile-first"],
  },
  {
    date: "9 mar — 18 abr 2026",
    title: "UX UI Designer — ChatCRM",
    company: "No Country · Simulación laboral · equipo de 5 · único diseñador UX/UI",
    desc: "Diseñé un concepto UX/UI para centralizar conversaciones y pipeline; personas, JTBD y oportunidad se presentan como hipótesis o síntesis de desk research.",
    accentTags: ["CRM", "Kanban"],
    neutralTags: ["Handoff"],
  },
  {
    date: "26 ene — 7 mar 2026",
    title: "UX UI Designer — GardenAds",
    company: "No Country · Simulación laboral · único diseñador UX/UI",
    desc: "Diseñé una propuesta de plataforma de tracking health con benchmark colaborativo de seis competidores, arquitectura y prototipos.",
    accentTags: ["Analytics", "SaaS B2B"],
    neutralTags: ["Dark"],
  },
  {
    date: "10 nov — 14 dic 2025",
    title: "UX UI Designer — Multi-Brand DS",
    company: "No Country · Simulación laboral colaborativa · 1 de 4 UX/UI en equipo de 5",
    desc: "Contribuí a una arquitectura de tokens compartida para Academy y Kids, con componentes, variantes, estados y documentación de handoff.",
    accentTags: ["DS", "Tokens"],
    neutralTags: ["EdTech"],
  },
  {
    date: "29 sep — 2 nov 2025",
    title: "UX UI Designer — Fintech PYME",
    company: "No Country · Simulación laboral · único diseñador UX/UI",
    desc: "Diseñé una plataforma dual de créditos B2B con onboarding KYC y superficies diferenciadas para solicitantes y supervisores.",
    accentTags: ["Fintech", "KYC"],
    neutralTags: ["RBAC"],
  },
  {
    date: "23 jun — 15 oct 2025",
    title: "Junior UX/UI Designer — TrainiT",
    company: "Programa TrainiT (PGT) · Pasantía/práctica formativa",
    desc: "Lideré el workstream Grupo 1/UI Components durante sprints concretos, coordinando a dos diseñadoras y trabajando nomenclatura, estados, tamaños, paddings e inventario de íconos dentro del sistema colaborativo.",
    accentTags: ["UI Components", "Design System"],
    neutralTags: ["Práctica formativa"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="home-section home-container home-experience-layout" aria-labelledby="experience-heading">
      <div className="home-section-heading"><p className="home-kicker">04 / Experiencia y práctica</p><h2 id="experience-heading">Aprender.<br />Colaborar.<br /><em>Hacer.</em></h2><p>Fellowship, simulaciones laborales y práctica formativa. Cada aporte, en su contexto.</p></div>
      <div className="home-experience-list">
        {EXPERIENCES.map(item => <article key={item.title}>
          <p className="home-kicker" title={item.dateExact}>{item.date}</p>
          <h3>{item.title}</h3>
          <p className="home-experience-context">{item.company}</p>
          <p>{item.desc}</p>
          {item.link && <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="home-text-link">{item.link.label} ↗</a>}
        </article>)}
      </div>
    </section>
  );
}
