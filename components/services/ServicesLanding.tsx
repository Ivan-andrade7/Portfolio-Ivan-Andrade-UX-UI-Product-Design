import HeroComposition from "@/components/HeroComposition";
import ContactAlternatives from "@/components/services/ContactAlternatives";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import CasePresentation from "@/components/CasePresentation";
import ServiceRow from "@/components/services/ServiceRow";
import CommercialContact from "@/components/services/CommercialContact";
import ProjectCard from "@/components/ProjectCard";
import HeroPortrait from "@/components/HeroPortrait";
const SERVICE_GROUPS = [
  { title: "Una web que presente tu negocio", lead: "Para cuando tu información está dispersa en redes y cuesta entender qué ofrecés.", items: [
    { name: "Landing profesional", text: "Una página con una acción principal: consultar, reservar o contactarte.", project: "Landing profesional" },
    { name: "Sitio institucional", text: "Varias secciones para explicar quién sos, qué hacés y cómo trabajás.", project: "Sitio institucional" },
    { name: "Diagnóstico de tu web", text: "Revisión de tu inicio y páginas clave: qué se entiende, qué falta y qué cambiar primero.", project: "Diagnóstico de mi web" },
  ] },
  { title: "Una tienda para vender online", lead: "Para cuando querés vender tus productos y no sabés por dónde empezar.", items: [
    { name: "Tienda online", text: "La configuro en Tiendanube, Shopify o WooCommerce con tu catálogo y las reglas de tu rubro. Las suscripciones y comisiones de la plataforma las pagás vos.", project: "Tienda online" },
  ] },
  { title: "Procesos más simples", lead: "Para cuando perdés tiempo repitiendo pedidos, consultas y planillas a mano.", items: [
    { name: "Diagnóstico de procesos", text: "Miramos cómo trabajás hoy y te devuelvo un documento con qué ordenar o automatizar primero.", project: "Ordenar un proceso" },
    { name: "Automatización de un proceso simple", text: "Conecto herramientas para que una tarea repetida deje de hacerse a mano.", project: "Ordenar un proceso" },
    { name: "Panel de control", text: "Un tablero con los números que mirás todos los días.", project: "Ordenar un proceso" },
  ] },
  { title: "Diseño de producto digital", lead: "Para cuando necesitás definir una pantalla, un flujo o un producto antes de construirlo.", items: [
    { name: "Diseño UX/UI", text: "Para una pantalla, un flujo o un producto digital, con la profundidad que elijas.", project: "Diseño UX/UI" },
  ] },
];
const STEPS = [
  { title: "Entender", text: "Me contás tu actividad y qué necesitás resolver. Revisamos el punto de partida y el material que tenés.", stages: "Consulta" },
  { title: "Definir", text: "Acordamos objetivos, alcance, plazos y precio por escrito antes de empezar.", stages: "Definición · Propuesta" },
  { title: "Diseñar y construir", text: "Estructura, diseño responsive e implementación, con revisiones dentro del alcance acordado.", stages: "Diseño · Desarrollo" },
  { title: "Entregar", text: "Controles finales, publicación, accesos y el soporte inicial acordado.", stages: "Revisión · Publicación" },
];
const MODES = [
  { title: "Esencial", text: "Lo mínimo que resuelve tu decisión. Para proyectos acotados y de poco riesgo." },
  { title: "Estándar", text: "Suma descubrimiento y validación proporcionales cuando una pregunta lo justifica." },
  { title: "Completo", text: "Recorre el proceso entero según el riesgo del proyecto. Para productos y sistemas." },
];
const INCLUDED = [
  "Qué páginas, secciones y funciones incluye el trabajo.",
  "Qué aporta cada parte: textos, imágenes, identidad y accesos.",
  "Plazos, instancias de revisión y controles previos a publicar.",
  "Anticipo, etapas y medios de pago.",
  "Soporte inicial y costos externos (suscripciones, dominios y herramientas), que paga el cliente aparte.",
];
const FAQ = [
  { q: "¿Cuánto cuesta y cómo se paga?", a: "No tengo precios de lista. Cada propuesta indica el precio, la moneda, el anticipo, las etapas y los medios de pago antes de comenzar. Te la mando después de entender tu proyecto." },
  { q: "¿Cuánto tarda y cuántas revisiones incluye?", a: "Depende del alcance, los materiales y los tiempos de feedback. La estimación y las instancias de revisión se detallan en la propuesta. Los cambios nuevos se evalúan por separado." },
  { q: "¿Qué necesito tener para comenzar?", a: "Una explicación de tu actividad, qué necesitás resolver y el material disponible: textos, imágenes, identidad, web o referencias. Si faltan elementos, los identificamos antes de cerrar la propuesta." },
  { q: "¿Y si todavía no tengo textos o imágenes definitivas?", a: "Podemos evaluar el proyecto con lo que tengas. La propuesta deja claro qué contenido necesitás aportar, qué trabajo puedo incluir y qué falta resolver antes de diseñar o publicar." },
  { q: "¿El dominio y el hosting están incluidos?", a: "Se definen en cada propuesta. Si no los tenés, puedo orientarte y contemplar su configuración. Las suscripciones y servicios de terceros se identifican por separado." },
  { q: "¿Podés trabajar sobre una web o un diseño existente?", a: "Sí, después de revisar su estado, los materiales disponibles y las condiciones técnicas. Así definimos qué puede conservarse, qué se adapta y qué necesita rehacerse." },
  { q: "¿Qué sucede después de publicar?", a: "La entrega contempla el cierre y el soporte inicial acordados. El mantenimiento y las actualizaciones pueden definirse como un adicional, con tareas, frecuencia, tiempos de respuesta y límites propios." },
];
export default function ServicesLanding({ heroVariant = "nodo", portraitFraming = "integrated" }: { heroVariant?: "nodo" | "portrait"; portraitFraming?: "integrated" | "refined" | "original" }){ const content = <><span className="sw-eyebrow">Diseño y desarrollo web</span><h1 id="hero-title">Una web profesional que explique lo que hacés y facilite el contacto.</h1><p className="sw-lead">Diseño landings, sitios y tiendas online para profesionales y pequeños negocios, y te ayudo a ordenar cómo trabajás para que dejes de hacer todo a mano.</p><div className="sw-actions"><a className="sw-button home-button home-button-primary" href="#contacto">Contame sobre tu proyecto <ArrowUpRight size={18} aria-hidden /></a><a className="sw-button home-button home-button-secondary" href="#trabajos">Ver trabajos <ArrowDown size={18} aria-hidden /></a></div><p className="sw-support">Estrategia, UX/UI, diseño responsive e implementación dentro de un alcance claro.</p></>; return <main id="contenido-principal" tabIndex={-1}>{heroVariant === "portrait" && portraitFraming === "integrated" ? <section id="inicio" className="sw-integrated-hero" aria-labelledby="hero-title"><HeroComposition caption={<><span>Iván Andrade</span><span>Diseño e implementación web</span></>}>{content}</HeroComposition></section> : <section id="inicio" className="sw-wrap sw-hero" aria-labelledby="hero-title">
<div>{content}</div>
{heroVariant === "portrait" ? <figure className={`sw-hero-media sw-portrait${portraitFraming === "original" ? " sw-portrait-original" : ""}`}><HeroPortrait /><figcaption className="sw-caption"><strong>Iván Andrade</strong>Diseño e implementación web.</figcaption></figure> : <figure className="sw-hero-media"><div className="sw-media"><CasePresentation project="nodo" alt="NODO: interfaces originales en monitor, tablet y teléfono completos." /></div><figcaption className="sw-caption"><strong>NODO · Proyecto conceptual personal</strong>Diseño responsive, implementación y publicación.</figcaption></figure>}
</section>}
<section id="servicios" className="sw-wrap sw-section" aria-labelledby="services-title"><div className="sw-head"><span className="sw-eyebrow">Servicios</span><h2 id="services-title">Elegí por dónde empezar.</h2><p>Para que tu negocio se entienda, venda online y trabaje con menos tareas manuales. Elegí lo que necesitás y contame tu caso.</p></div>
<div className="sw-cards">{SERVICE_GROUPS.map(group => <article className="sw-card" key={group.title}><h3>{group.title}</h3><p className="sw-card-lead">{group.lead}</p><div className="sw-rows">{group.items.map(item => <ServiceRow key={item.name} name={item.name} text={item.text} project={item.project} />)}</div></article>)}</div>
<p className="sw-aside">Si ya tenés una web o un diseño, lo revisamos y vemos qué conservar. El mantenimiento y las actualizaciones se suman como complemento, con alcance acordado por separado.</p></section>
<section id="trabajos" className="sw-wrap sw-section" aria-labelledby="work-title"><div className="sw-head"><span className="sw-eyebrow">Trabajos</span><h2 id="work-title">Dos casos para ver cómo trabajo.</h2><p>Una muestra de diseño web y trabajo responsive. Cada caso indica su contexto y su atribución.</p></div>
<div className="sw-work"><ProjectCard context="services" compact project={{ id: "nodo", index: "", category: "Diseño e implementación web", nature: "Proyecto conceptual personal", title: "NODO", tags: [], longDesc: "Trabajé la estrategia, la identidad visual, el diseño responsive, la implementación y la publicación de un sitio para un estudio de arquitectura conceptual.", role: "No representa un cliente ni resultados comerciales.", images: { image: "/projects/devices/nodo-card-sistema-1200.webp", treatment: "device" } }} /><ProjectCard context="services" compact project={{ id: "fellowship", index: "", category: "Diseño web responsive", nature: "Trabajo real colaborativo · No Country", title: "Fellowship · UI Empresas", tags: [], longDesc: "Diseñé la experiencia responsive y preparé la entrega para el equipo de desarrollo de No Country.", role: "Diseño y entrega para desarrollo · No Country", images: { image: "/projects/devices/fellowship-card-1200.webp", treatment: "device" } }} /></div></section>
<section id="proceso" className="sw-band" aria-labelledby="process-title"><div className="sw-wrap sw-section"><div className="sw-head"><span className="sw-eyebrow">Cómo trabajo</span><h2 id="process-title">Primero lo definimos. Después lo construimos.</h2><p>Un recorrido simple, de la primera conversación a la publicación. Se adapta a lo que ya tengas: contenido, identidad, diseño o una web existente.</p></div>
<ol className="sw-steps">{STEPS.map((step, index) => <li key={step.title}><span className="sw-step">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p><span className="sw-step-stages">{step.stages}</span></li>)}</ol>
<div className="sw-modes-block"><h3>Vos elegís cuánto proceso necesitás</h3><div className="sw-modes">{MODES.map(mode => <div className="sw-mode" key={mode.title}><strong>{mode.title}</strong><p>{mode.text}</p></div>)}</div><p className="sw-note">Si elegís menos de lo que el riesgo pide, lo dejamos por escrito: qué se omite y qué implica.</p></div></div></section>
<section id="precio" className="sw-wrap sw-section" aria-labelledby="price-title"><div className="sw-price"><div className="sw-head"><span className="sw-eyebrow">Precio y alcance</span><h2 id="price-title">Una propuesta clara antes de empezar.</h2><p>No tengo precios de lista: cada proyecto se cotiza según lo que necesita. La propuesta indica el precio en dólares con su equivalente en pesos el día en que se envía, y hasta cuándo vale.</p></div><ul className="sw-checks">{INCLUDED.map(text => <li key={text}><Check size={18} aria-hidden />{text}</li>)}</ul></div>
<p className="sw-note sw-exclusions-note"><strong>Fuera del alcance inicial, salvo cotización específica:</strong> branding completo, fotografías, redacción extensa, backend personalizado, cuentas de usuario, pagos, stock, logística, CMS, integraciones complejas, campañas, SEO mensual y mantenimiento indefinido.</p></section>
<section id="preguntas" className="sw-wrap sw-section sw-faq-layout" aria-labelledby="faq-title"><div className="sw-head"><span className="sw-eyebrow">Preguntas frecuentes</span><h2 id="faq-title">Antes de dar el primer paso.</h2></div><div className="sw-faq-list">{FAQ.map(item => <details className="sw-disclosure" key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>

<section id="contacto" className="sw-wrap sw-section sw-contact" aria-labelledby="contact-title"><div className="sw-contact-copy"><span className="sw-eyebrow">Primera consulta</span><h2 id="contact-title">Contame sobre<br />tu proyecto.</h2><p>Con tres datos ya puedo orientarte: quién sos, qué necesitás y cómo contactarte.</p><div className="sw-next"><p>Revisaré tu necesidad y el material disponible para proponerte un siguiente paso.</p></div><ContactAlternatives /></div><CommercialContact /></section></main>; }