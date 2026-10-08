const GROUPS = [
  { title: "Estructura y flujos", items: "Arquitectura de información · User flows · Desk research y benchmark · Wireframes" },
  { title: "Interfaces y sistemas", items: "UI responsive · Componentes y estados · Variables y tokens · Prototipado en Figma" },
  { title: "Colaboración", items: "Documentación · Handoff · Trabajo multidisciplinario · Comunicación de decisiones" },
  { title: "IA en el proceso", items: "Exploración · Síntesis · Documentación · Implementación asistida y revisión propia" },
];
export default function Skills() {
  return (
    <section className="home-capabilities home-container" aria-labelledby="capabilities-heading">
      <div className="home-capabilities-title"><p className="home-kicker">Herramientas y método</p><h2 id="capabilities-heading">Cómo lo trabajo</h2></div>
      <div className="home-capabilities-grid">{GROUPS.map(group => <div key={group.title}><h3>{group.title}</h3><p>{group.items}</p></div>)}</div>
    </section>
  );
}
