import type { getCaseBySlug } from "@/lib/cases";
import { BackToPortfolio, CaseExternalLink, CaseNavigation, SectionHeader } from "@/components/CaseStudyUI";
import CasePresentation from "@/components/CasePresentation";
import MultiBrandEvidence from "@/components/MultiBrandEvidence";
import copy from "@/lib/multi-brand-editorial.json";

const figma = "https://www.figma.com/design/1jHTtZiRuYJM2cG5mtoEG3/";
const ux = "https://www.notion.so/2aafd0da0de580c7b818f224a4e12587";
const hu04 = "https://www.notion.so/2aafd0da0de58053918dd6bc9bec3221";
const assets = {
  referenceEntry: { src: "/projects/multi-brand-editorial/platzi-onboarding.webp", width: 1916, height: 852, title: "Referencia Platzi · Onboarding", alt: "Interfaz de referencia de Platzi: pregunta qué se quiere lograr y ofrece una acción para continuar." },
  entry: { src: "/projects/multi-brand-editorial/academy-onboarding.webp", width: 1440, height: 1024, title: "Academy · Onboarding del equipo", alt: "Onboarding diseñado para Academy: paso 1 de 4, selección de situación profesional y botón Continuar." },
  referenceCards: { src: "/projects/multi-brand-editorial/platzi-cards.webp", width: 1347, height: 641, title: "Referencia Platzi · Nivel del curso", alt: "Catálogo de referencia de Platzi con tarjetas que muestran instructor y etiquetas de nivel básico, intermedio y avanzado." },
  cards: { src: "/projects/multi-brand-editorial/academy-cards.webp", width: 941, height: 420, title: "Academy · Cards del equipo", alt: "Tres cards diseñadas para Academy con badge Nivel Básico, título, docente y metadata del curso." },
  academyCheckout: { src: "/projects/multi-brand-editorial/academy-checkout-original.png", width: 1440, height: 1024, title: "Academy · Checkout", alt: "Checkout Academy del equipo: formulario de pago, resumen del curso Fundamentos de Diseño UX/UI y acción Completar Compra." },
  kidsCheckout: { src: "/projects/multi-brand-editorial/kids-checkout-original.png", width: 2880, height: 2048, title: "Kids · Checkout", alt: "Checkout Kids del equipo: formulario de pago, resumen Mi primer videojuego y acción Inscribir en Autodidacta." },
};
function Source({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.includes("notion.so")) return <span className="mb-source">{children} · síntesis documental</span>;
  return <a className="mb-source" href={href} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only"> (abre en otra pestaña)</span> ↗</a>;
}
function Figure({ asset, label, caption, source, reference = false, transcript }: { asset: typeof assets.entry; label: string; caption: string; source: string; reference?: boolean; transcript?: string }) {
  const captionId = `mb-caption-${asset.src.split("/").pop()?.replace(/\.(webp|png)$/, "")}`;
  return <figure className={`mb-figure ${reference ? "mb-reference" : "mb-application"}`}>
    <p className="mb-label">{label}</p>
    <MultiBrandEvidence asset={asset} caption={caption} describedBy={captionId} />
    <figcaption id={captionId}>{caption} <Source href={source}>Fuente</Source></figcaption>
    {transcript && <p className="mb-transcript"><strong>Texto de la interfaz:</strong> {transcript}</p>}
  </figure>;
}
function Requirement({ children }: { children: React.ReactNode }) {
  return <aside className="mb-requirement" aria-label="Necesidad documentada en HU09"><p className="mb-label">Definición UX · trabajé con Paula de Alba</p>{children}<Source href={ux}>HU09 · Inventario por flujo</Source></aside>;
}
function Paragraph({ text }: { text: string }) {
  if (text.startsWith("- **Academy:")) return <ul className="mb-messages">{text.split("\n").map(line => { const [label, body] = line.replace(/^- \*\*/, "").split(":** "); return <li key={label}><strong>{label}:</strong> {body}</li>; })}</ul>;
  return <p>{text.split(/(`[^`]+`)/).map((part, i) => part.startsWith("`") ? <code key={i}>{part.slice(1, -1)}</code> : part)}</p>;
}
export default function MultiBrandCase({ caseData: c }: { caseData: NonNullable<ReturnType<typeof getCaseBySlug>> }) {
  const sections = copy.sections;
  return <main id="contenido-principal" tabIndex={-1} className="case-main multi-brand-case">
    <header id="inicio" className="case-hero home-container">
      <BackToPortfolio />
      <div className="case-hero-layout">
        <div className="case-hero-copy"><h1>{copy.title}</h1><p className="mb-intro">{copy.intro}</p></div>
        <CasePresentation project="multi-brand" alt="Catálogos Academy y Kids del equipo en dos monitores desktop" />
      </div>
    </header>
    <article className="case-body home-container" aria-label="Contribución UX y decisiones de Multi-Brand">
      <section className="mb-context" aria-labelledby="mb-context-heading"><h2 id="mb-context-heading">Contexto y alcance</h2><dl>{copy.facts.map(f => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl><div className="case-project-links"><CaseExternalLink href={figma}>Ver diseño en Figma ↗</CaseExternalLink><CaseExternalLink href="https://nocountry.tech/showcase/simulacion-laboral-noviembre-2025/equipo-22-productdesign">Showcase del equipo ↗</CaseExternalLink></div></section>
      {sections.map((section, i) => <section key={section.id} id={`mb-${section.id}`} aria-labelledby={`mb-heading-${section.id}`}>
        <div className="case-editorial-row">
        <div className="mb-reading" id={`mb-heading-${section.id}`}><SectionHeader eyebrow={["Benchmark y definición UX", "Del criterio al componente", "Identidad", "Arquitectura", "Feedback", "Cierre"][i]} heading={section.heading} /></div>
        <div className="mb-prose">{section.paragraphs.map(p => <Paragraph key={p} text={p} />)}</div>
        </div>
        {i === 0 && <div className="mb-chain">
          <Figure reference asset={assets.referenceEntry} label="Referencia observada · Platzi" caption="En mi benchmark registré que Platzi pregunta qué se quiere lograr antes de continuar. La interfaz es de Platzi." source="https://www.notion.so/2abfd0da0de580c0a30ddb7864548d4b" transcript="¿Qué quisieras lograr con Platzi? · Continuar." />
          <div className="mb-designed"><Requirement><ul><li>Barra de progreso.</li><li>Chip o card seleccionable.</li><li>Botón para continuar.</li></ul></Requirement><Figure asset={assets.entry} label="Aplicación diseñada · Academy · Equipo" caption="Trabajé con Paula de Alba en la definición UX documentada en HU09: selección, progreso y continuidad. El onboarding Academy muestra esas necesidades en una propuesta de cuatro pasos. La pantalla es trabajo del equipo." source={`${figma}?node-id=467-7146`} transcript="Paso 1 de 4 · ¿Cuál es tu situación actual? · Busco mi primer empleo IT · Ya trabajo en el sector · Estoy emprendiendo / Soy freelance · Continuar." /></div>
        </div>}
        {i === 1 && <div className="mb-chain">
          <Figure reference asset={assets.referenceCards} label="Referencia observada · Platzi" caption="Las cards de Platzi muestran el nivel junto a la información del curso. En mi benchmark recomendé incorporar esa metadata." source="https://www.notion.so/2aefd0da0de580f88781d447d48fbac5" transcript="Nivel básico · Nivel intermedio · Nivel avanzado." />
          <div className="mb-designed"><Requirement><ul><li>Card de curso.</li><li>Badge de nivel o popularidad.</li></ul></Requirement><Figure asset={assets.cards} label="Aplicación diseñada · Academy · Equipo" caption="Con Paula de Alba definimos un inventario UX que incluye una card de curso y un badge de nivel. El catálogo Academy sitúa ‘Nivel Básico’ sobre la imagen. La aplicación visual es trabajo del equipo." source={`${figma}?node-id=1304-31704`} transcript="Nivel Básico · Autodidacta · Mentorizado. Las cifras interiores pertenecen al contenido de la propuesta diseñada." /></div>
        </div>}
        {i === 2 && <>
          <figure className="mb-figure">
            <div className="mb-comparison">
              <div><p className="mb-label">Academy · Checkout</p><MultiBrandEvidence asset={assets.academyCheckout} caption={copy.identityEvidence.caption} describedBy="mb-caption-checkout" /></div>
              <div><p className="mb-label">Kids · Checkout</p><MultiBrandEvidence asset={assets.kidsCheckout} caption={copy.identityEvidence.caption} describedBy="mb-caption-checkout" /></div>
            </div>
            <figcaption id="mb-caption-checkout">{copy.identityEvidence.caption} <Source href={`${figma}?node-id=649-23313`}>Original Academy</Source> · <Source href={`${figma}?node-id=1163-27274`}>Original Kids</Source></figcaption>
          </figure>
          <p className="mb-caption">{copy.identityEvidence.sampleNote}</p>
          <div className="mb-table-wrap"><table><caption>Definiciones del sistema · equipo</caption><thead><tr><th scope="col">Criterio</th><th scope="col">Academy</th><th scope="col">Kids</th></tr></thead><tbody><tr><th scope="row">Espaciado</th><td colSpan={2}>4, 8, 16, 24, 32, 40, 48 y 64 px</td></tr><tr><th scope="row">Texto</th><td colSpan={2}>Nunito</td></tr><tr><th scope="row">Titulares</th><td>Barlow Condensed</td><td>Baloo 2</td></tr><tr><th scope="row">Radio medio</th><td>8 px</td><td>20 px</td></tr></tbody></table></div>
          <p className="mb-caption">{copy.identityEvidence.tableNote} <Source href={`${figma}?node-id=229-1595`}>Guías del equipo</Source></p>

        </>}
        {i === 3 && <div className="mb-architecture">
          <aside className="mb-requirement"><p className="mb-label">Propuesta personal · HU04</p><dl><div><dt>Primitivos</dt><dd>Valores de base.</dd></div><div><dt>Semánticos</dt><dd>Roles de uso para los componentes.</dd></div></dl><p>En HU04 propuse separar valores primitivos y roles semánticos.</p><Source href={hu04}>Consultar propuesta</Source></aside>
          <div><div className="mb-table-wrap"><table><caption>Ejemplo de vinculación · arquitectura del equipo</caption><thead><tr><th scope="col">Propiedad</th><th scope="col">Variable</th><th scope="col">Resolución</th></tr></thead><tbody><tr><th scope="row">Borde y título del panel</th><td><code>brand/primary</code></td><td>Modo Academy o Kids</td></tr><tr><th scope="row">Inputs de estos paneles</th><td>Variables base</td><td>Vinculación directa</td></tr></tbody></table></div><p className="mb-caption">Ejemplo de vinculación: borde y título usan <code>brand/primary</code>, resuelto por marca. Los inputs de estos paneles usan variables base directamente. Arquitectura y paneles: equipo. <Source href={`${figma}?node-id=40002120-1029`}>Panel Academy</Source> · <Source href={`${figma}?node-id=40002120-1111`}>Panel Kids</Source></p></div>
        </div>}
        {i === 4 && <div className="case-editorial-followup"><p className="mb-caption">Mismo problema y acción de recuperación, distinta voz de marca. Mensajes y reglas de uso documentados por el equipo. <Source href={`${figma}?node-id=229-2246`}>Guía Academy</Source> · <Source href={`${figma}?node-id=229-2324`}>Guía Kids</Source></p></div>}
      </section>)}
      
      <CaseNavigation prev={c.prev} next={c.next} />
    </article>
  </main>;
}
