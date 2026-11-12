export default function About() {
  return (
    <section id="sobre-mi" className="home-section home-container" aria-labelledby="about-heading">
      <div className="home-about-layout">
        <div className="home-section-heading"><p className="home-kicker">03 / Sobre mí</p><h2 id="about-heading">Una mirada de diseño.<br /><em>Distintos contextos.</em></h2></div>
        <div className="home-about-copy">
          <p>Soy Iván, Product Designer (UX/UI) y trabajo con IA aplicada al diseño y al producto. Busco sumarme a un equipo, full-time o part-time, para trabajar en productos, servicios y plataformas de distintos sectores.</p>
          <p>Mis proyectos actuales incluyen SaaS B2B, Fintech, CRM y sistemas de componentes. Son ejemplos de mi práctica: me interesa entender el problema, ordenar la información y diseñar interfaces claras.</p>
          <p>En paralelo, desarrollo una oferta web directa que conecta estructura, UX/UI, responsive e implementación asistida por IA. Diseñé e implementé este portfolio y desarrollé un CRM propio para gestionar mi trabajo freelance, con desarrollo asistido por IA y con decisiones y revisión propias. También armo automatizaciones con n8n; una de ellas convierte videos de YouTube en informes en Notion.</p>
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
