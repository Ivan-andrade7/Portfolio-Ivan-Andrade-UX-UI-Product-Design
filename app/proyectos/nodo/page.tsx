import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BackToPortfolio, CaseExternalLink, CaseNavigation, SectionHeader, TagChip } from "@/components/CaseStudyUI";
import UICarousel from "@/components/UICarousel";
import type { Screen } from "@/lib/cases";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResilientImage from "@/components/ResilientImage";
import cover from "@/public/projects/nodo/05-sobre-nodo-introduccion-desktop.jpg";
import projectsDesktop from "@/public/projects/nodo/01-proyectos-desktop.jpg";
import projectsMobile from "@/public/projects/nodo/02-proyectos-mobile.jpg";
import projectDetail from "@/public/projects/nodo/04-casa-patio-desarrollo-desktop.jpg";
import contactError from "@/public/projects/nodo/08-contacto-error-desktop.jpg";
import contactSuccess from "@/public/projects/nodo/09-contacto-success-desktop.jpg";
import contactMobile from "@/public/projects/nodo/10-contacto-success-mobile.jpg";

export const metadata: Metadata = {
  title: "NODO Arquitectura — Diseño web responsive | Iván Andrade",
  description: "Un sitio de arquitectura: jerarquía editorial, sistema visual y adaptación responsive, desde Figma hasta una implementación web.",
  alternates: { canonical: "/proyectos/nodo" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "NODO Arquitectura — Diseño web responsive",
    description: "Del diseño visual a una web responsive.",
    url: "/proyectos/nodo",
    images: [{ url: cover.src, width: cover.width, height: cover.height, alt: "Sobre NODO: composición dividida entre contenido e imagen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NODO Arquitectura — Diseño web responsive",
    description: "Del diseño visual a una web responsive.",
    images: [cover.src],
  },
};

const body = "text-base leading-7 text-[var(--text-secondary)]";

function screen(image: StaticImageData, name: string, task: string, decision: string, alt: string, role: Screen["role"]): Screen {
  return { src: image.src, width: image.width, height: image.height, name, task, decision, alt, role, fit: "contain" };
}

const listingScreens = [
  screen(projectsDesktop, "Proyectos · Desktop", "Explorar categorías y cuatro proyectos.", "Una jerarquía compartida organiza filtros y cards.", "Listado desktop de NODO con filtros y cuatro cards de proyecto", "key"),
  screen(projectsMobile, "Proyectos · Mobile", "Explorar el inicio del listado en un ancho compacto.", "Filtros compactos y cards en una columna.", "Inicio del listado mobile con filtros y primera card", "gallery"),
];
const contactScreens = [
  screen(contactError, "Contacto · Error", "Identificar campos que requieren corrección.", "Los errores aparecen junto a sus campos.", "Formulario de Contacto con errores de validación", "key"),
  screen(contactSuccess, "Contacto · Validación completada", "Comprender el resultado de la validación local.", "El resultado no confirma una consulta enviada: no transmite ni almacena datos.", "Estado de validación completada de Contacto", "gallery"),
  screen(contactMobile, "Contacto · Mobile", "Leer el resultado en un ancho compacto.", "La jerarquía del estado se conserva en mobile.", "Validación completada de Contacto en mobile", "gallery"),
];

function Capture({ image, alt, caption, priority = false }: { image: StaticImageData; alt: string; caption: string; priority?: boolean }) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)]">
        <ResilientImage src={image} alt={alt} sizes="(min-width: 1280px) 1120px, 100vw" priority={priority} className="h-auto w-full" />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-[var(--text-tertiary)]">
        {caption}{" "}
        <a href={image.src} target="_blank" rel="noopener noreferrer" className="text-[var(--text-link)] underline underline-offset-4">Ver captura original<span className="sr-only"> (se abre en otra pestaña)</span></a>
      </figcaption>
    </figure>
  );
}

export default function NodoCasePage() {
  return (
    <>
      <Navbar />
      <main className="min-w-0 bg-[var(--bg-primary)] px-6 pt-12 sm:px-12 lg:px-24">
        <article className="flex w-full min-w-0 flex-col">
          <header className="space-y-8 border-b border-[var(--border-default)] pb-16">
            <BackToPortfolio />
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2"><TagChip label="Diseño web" accent /><TagChip label="Proyecto personal conceptual" /></div>
              <h1 className="text-[34px] sm:text-[40px] md:text-[56px] font-bold leading-[1.14] tracking-[-1.5px] md:tracking-[-2px] text-[var(--text-primary)] w-full min-w-0 break-words">NODO Arquitectura</h1>
              <p className="text-xl leading-8 text-[var(--text-secondary)]">Del diseño visual a una web responsive.</p>
              <p className={body}>Una web de arquitectura necesita dar protagonismo a los proyectos y, al mismo tiempo, explicar qué ofrece el estudio. NODO explora ese equilibrio mediante una lectura editorial, imágenes amplias y una estructura compartida.</p>
              <CaseExternalLink href="https://nodo-arquitectura-five.vercel.app/">Ver sitio <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (se abre en otra pestaña)</span></CaseExternalLink>
            </div>
            <dl className="grid gap-6 border-y border-[var(--border-default)] py-6 sm:grid-cols-3">
              {[
                ["Mi rol", "Dirección visual, diseño y revisión"],
                ["Alcance", "UI, sistema visual, responsive e implementación"],
                ["Entrega", "Cinco páginas y cuatro detalles de proyecto"],
              ].map(([label, value]) => <div key={label}><dt className="mb-2 text-sm text-[var(--text-tertiary)]">{label}</dt><dd className="text-base text-[var(--text-primary)]">{value}</dd></div>)}
            </dl>
            <Capture image={cover} alt="Introducción de Sobre NODO: título y descripción a la izquierda, interior del estudio a la derecha" caption="La composición dividida introduce la identidad sin convertir la página en una galería de imágenes." priority />
          </header>

          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="01 · El desafío" heading="Dar contexto, no sólo mostrar imágenes" />
            <div className="max-w-3xl space-y-4">
              <p className={body}>La Home introduce la propuesta del estudio; el listado permite explorar sus proyectos; cada detalle desarrolla contexto, materialidad y organización espacial. La navegación conecta ese recorrido con Servicios, Sobre NODO y Contacto.</p>
              <p className={body}>El desafío surgió del brief y de las iteraciones de diseño: mantener esa jerarquía al cambiar de tamaño, sin depender de cards rígidas ni reducir toda la interfaz como si fuera una imagen.</p>
            </div>
          </section>

          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="02 · Estructura y responsive" heading="Una misma lógica entre pantallas" />
            <div className="mb-8 max-w-3xl space-y-4">
              <p className={body}>En Figma, cada pantalla contiene frames de sección que organizan grupos y componentes. El padding y los gaps se aplican en ese nivel; las variables se mantienen en dos colecciones: Primitiva y Semántica.</p>
              <p className={body}>El contenido tiene un ancho máximo de 1280 px. Las grillas se reorganizan con el espacio disponible, mientras que navegación y tipografía cambian según el modo. La adaptación no implica que todos los controles deban ocupar todo el ancho.</p>
            </div>
            <UICarousel screens={listingScreens} title="NODO · Proyectos" note="Capturas reales de la web. Mobile muestra el inicio del listado." />
          </section>

          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="03 · Detalle de proyecto" heading="Contar el proyecto más allá de su portada" />
            <div className="mb-8 max-w-3xl space-y-4">
              <p className={body}>Casa Patio explica el patrón compartido por los cuatro detalles: desafío y respuesta, galería, materialidad, concepto espacial y recorrido. Planta y recorrido conviven en dos columnas en tablet y desktop y se apilan en mobile.</p>
              <p className={body}>El enlace superior vuelve al listado y conserva ancho de contenido y alineación izquierda. Abajo, anterior y siguiente se mantienen en horizontal para distinguir la navegación entre proyectos.</p>
            </div>
            <Capture image={projectDetail} alt="Desarrollo de Casa Patio con galería, materialidad y planta y recorrido en dos columnas" caption="Materialidad y organización espacial amplían la lectura del proyecto; los esquemas son ilustrativos, no documentación constructiva." />
          </section>

          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="04 · Implementación" heading="El diseño también está en el comportamiento" />
            <div className="mb-8 max-w-3xl space-y-4">
              <p className={body}>La web se implementó con Astro, TypeScript y CSS: componentes compartidos, fuentes locales, iconos Lucide y assets preparados como WebP. La revisión incluyó rutas, imágenes, filtros, menú y estados del formulario.</p>
              <p className={body}>Una corrección concreta fue retirar el error de un campo cuando vuelve a ser válido, sin mover el foco mientras se escribe. Contacto demuestra validación local: el estado final dice «Validación completada», no confirma una consulta recibida.</p>
            </div>
            <UICarousel screens={contactScreens} title="NODO · Contacto" note="Validación local, sin transmisión ni almacenamiento de datos." />
          </section>

          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="05 · Resultado" heading="Coherencia desde el sistema hasta la web" />
            <div className="max-w-3xl space-y-4">
              <p className={body}>El resultado es una web estática publicada en Vercel, con nueve rutas, un listado filtrable y estados de contacto. El aprendizaje fue sostener una misma lógica en estructura, componentes, contenido y comportamiento, sin multiplicar versiones para cada ajuste.</p>
              <p className={body}>Definí y revisé la dirección visual y las decisiones de diseño. La ejecución y las comprobaciones se realizaron con asistencia de Codex; las visualizaciones arquitectónicas y los retratos se generaron con IA.</p>
              <p className="text-sm leading-6 text-[var(--text-tertiary)]">Alcance del caso: no hubo investigación con usuarios ni medición de resultados de negocio. La QA técnica documentada no equivale a certificación de accesibilidad; quedan pendientes otros motores de navegador, zoom real, lector de pantalla y dispositivos físicos. El formulario no transmite ni almacena datos.</p>
            </div>
          </section>
          <CaseNavigation prev={{ slug: "trainit", title: "TrainiT — Gestión de Proyectos", role: "Junior UX/UI Designer · Práctica formativa" }} />
        </article>
      </main>
      <Footer />
    </>
  );
}
