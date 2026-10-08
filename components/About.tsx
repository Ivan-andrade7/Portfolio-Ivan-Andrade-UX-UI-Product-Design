export default function About() {
  return (
    <section id="sobre-mi" className="home-section home-container" aria-labelledby="about-heading">
      <div className="home-about-layout">
        <div className="home-section-heading"><p className="home-kicker">03 / Sobre mí</p><h2 id="about-heading">Una mirada de diseño.<br /><em>Distintos contextos.</em></h2></div>
        <div className="home-about-copy">
          <p>Soy Iván, UX/UI Designer y Product Designer. Busco sumarme a un equipo full-time para trabajar en productos, servicios y plataformas de distintos sectores.</p>
          <p>Mis proyectos actuales incluyen SaaS B2B, Fintech, CRM y sistemas de componentes. Son ejemplos de mi práctica: me interesa entender el problema, ordenar la información y diseñar interfaces claras.</p>
          <p>En paralelo, desarrollo una oferta web directa que conecta estructura, UX/UI, responsive e implementación asistida por IA. Diseñé e implementé este portfolio con Codex, con decisiones y revisión propias.</p>
          <a href="/cv/Iván Andrade - Product Designer UX UI.pdf" download className="home-text-link">Conocer mi recorrido · Descargar CV ↗</a>
        </div>
      </div>
      <div className="home-values">
        <div><span className="home-kicker">01</span><h3>Entender antes de resolver</h3><p>El contexto, las tareas y las restricciones orientan las decisiones.</p></div>
        <div><span className="home-kicker">02</span><h3>Pensar en sistemas</h3><p>Flujos, componentes y estados conectados, con documentación clara.</p></div>
        <div><span className="home-kicker">03</span><h3>Diseñar cerca de la ejecución</h3><p>Colaboración con desarrollo y revisión de lo que se lleva a la web.</p></div>
      </div>
    </section>
  );
}
