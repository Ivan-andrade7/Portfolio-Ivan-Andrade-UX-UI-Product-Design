"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Info, Maximize2, X } from "lucide-react";
import type { Screen } from "@/lib/cases";
import ResilientImage from "@/components/ResilientImage";

// Lightbox — modal de ampliación sin dependencias externas.
// Cierre: Escape, click en el fondo o botón visible. Foco: entra al abrir, se atrapa con Tab,
// vuelve al disparador al cerrar. Scroll lock compensando el ancho de la scrollbar (evita layout shift).
function Lightbox({
  screens,
  idx,
  title,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  screens: Screen[];
  idx: number;
  title: string;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") {
        onPrev();
        return;
      }
      if (e.key === "ArrowRight") {
        onNext();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLButtonElement>("button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — pantalla ${idx + 1} de ${total}, ampliada`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(2, 6, 23, 0.92)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Cerrar ampliación"
        className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center justify-center size-10 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]"
      >
        <X size={20} />
      </button>

      {idx > 0 && (
        <button
          type="button"
          onClick={onPrev}
          aria-label="Pantalla anterior"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {idx < total - 1 && (
        <button
          type="button"
          onClick={onNext}
          aria-label="Pantalla siguiente"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* En el lightbox siempre se ve la imagen COMPLETA (nunca el recorte del escenario principal).
          Horizontal: object-contain clásico, cabe entera en el viewport.
          Vertical/extremadamente larga: se respeta su proporción real a ancho completo y,
          si no entra en alto, el contenedor scrollea verticalmente en vez de achicarla hasta ilegible. */}
      {screens[idx].height > screens[idx].width ? (
        <div
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <ResilientImage
            src={screens[idx].src}
            alt={`${title} — pantalla ${idx + 1} ampliada`}
            width={screens[idx].width}
            height={screens[idx].height}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      ) : (
        <div className="relative w-full h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
          <ResilientImage
            src={screens[idx].src}
            alt={`${title} — pantalla ${idx + 1} ampliada`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      )}

      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/80 whitespace-nowrap">
        {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>,
    document.body
  );
}

export default function UICarousel({
  screens,
  title,
  note,
  galleryAspect,
}: {
  screens: Screen[];
  title: string;
  note?: string;
  galleryAspect?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const expandBtnRef = useRef<HTMLButtonElement>(null);
  const total = screens.length;
  const keyIndex = Math.max(0, screens.findIndex((screen) => screen.role === "key"));
  const flowScreens = screens.filter((screen) => screen.role === "flow");
  const comparisonScreens = screens.filter((screen) => screen.role === "comparison");
  const galleryScreens = screens.filter((screen) => !screen.role || screen.role === "gallery");
  const idBase = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  function openScreen(screen: Screen) {
    setIdx(screens.indexOf(screen));
    setLightboxOpen(true);
  }

  function previewClass(screen: Screen) {
    const isPortrait = screen.height > screen.width;
    const fit = screen.fit ?? (isPortrait ? "contain" : "contain");
    return fit === "cover" ? "object-cover" : "object-contain";
  }

  function previewStyle(screen: Screen) {
    if (screen.fit !== "cover") return undefined;
    return { objectPosition: screen.objectPosition ?? "center top" };
  }

  return (
    <div className="flex flex-col gap-12 w-full overflow-hidden">

      {/* Bloque 1 — pantalla clave: se ve completa y tiene contexto antes de pedirle al recruiter que explore. */}
      <section className="flex flex-col gap-6" aria-labelledby={`${idBase}-key-screen`}>
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">01 · Pantalla clave</p>
          <h3 id={`${idBase}-key-screen`} className="text-[24px] font-semibold leading-8 text-[var(--text-primary)]">
            {screens[keyIndex].name}
          </h3>
          <p className="text-[16px] leading-7 text-[var(--text-secondary)]">{screens[keyIndex].task}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(260px,0.75fr)] items-start">
          <button
            ref={expandBtnRef}
            type="button"
            onClick={() => openScreen(screens[keyIndex])}
            aria-label={`Ampliar captura: ${title}, ${screens[keyIndex].name}`}
            className="group relative w-full rounded-xl overflow-hidden border border-[var(--border-default)] cursor-zoom-in focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]"
            style={{ aspectRatio: galleryAspect ?? "800 / 569", background: "var(--bg-secondary)" }}
          >
            <ResilientImage
              src={screens[keyIndex].src}
              alt={screens[keyIndex].alt}
              fill
              className="object-contain p-3 md:p-6 transition-transform duration-300 group-hover:scale-[1.01]"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-3 right-3 flex items-center justify-center size-8 rounded-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
              style={{ background: "var(--overlay-card)", color: "var(--text-primary)" }}
            >
              <Maximize2 size={16} />
            </span>
          </button>

          <div className="flex flex-col gap-5 p-6 rounded-xl border bg-[var(--bg-secondary)] border-[var(--border-default)]">
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-tertiary)]">Qué demuestra</span>
              <p className="text-[16px] leading-7 text-[var(--text-secondary)]">{screens[keyIndex].decision}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-tertiary)]">Evidencia disponible</span>
              <p className="text-[14px] leading-6 text-[var(--text-secondary)]">Captura de interfaz diseñada; no implica por sí sola un resultado de negocio medido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso discreto opcional. */}
      {note && (
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-lg border text-[14px] leading-5"
          style={{
            background: "var(--feedback-info-bg)",
            borderColor: "var(--feedback-info-border)",
            color: "var(--feedback-info-text)",
          }}
        >
          <Info size={16} className="shrink-0" />
          <span>{note}</span>
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          screens={screens}
          idx={idx}
          title={title}
          total={total}
          onClose={() => {
            setLightboxOpen(false);
            expandBtnRef.current?.focus();
          }}
          onPrev={() => setIdx((i) => Math.max(0, i - 1))}
          onNext={() => setIdx((i) => Math.min(total - 1, i + 1))}
        />
      )}

      {/* Bloque 2 — flujo: tres pantallas alineadas para explicar una secuencia. */}
      {flowScreens.length > 0 && (
        <section className="flex flex-col gap-6" aria-labelledby={`${idBase}-flow`}>
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">02 · Flujo</p>
            <h3 id={`${idBase}-flow`} className="text-[24px] font-semibold leading-8 text-[var(--text-primary)]">Del problema a la acción</h3>
            <p className="text-[16px] leading-7 text-[var(--text-secondary)]">Una selección breve de pantallas que muestra cómo se recorre la solución.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {flowScreens.slice(0, 3).map((screen, i) => (
              <button
                key={screen.src}
                type="button"
                onClick={() => openScreen(screen)}
                aria-label={`Ampliar ${screen.name}`}
                className="group flex flex-col gap-3 text-left rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] overflow-hidden cursor-zoom-in focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]"
              >
                <span className="relative block w-full aspect-[4/3]" style={{ background: "var(--bg-primary)" }}>
                  <ResilientImage src={screen.src} alt={screen.alt} fill className={`${previewClass(screen)} p-3 transition-transform duration-300 group-hover:scale-[1.02]`} style={previewStyle(screen)} sizes="(max-width: 768px) 100vw, 33vw" />
                </span>
                <span className="flex flex-col gap-1 px-4 pb-4">
                  <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">0{i + 1}</span>
                  <span className="text-[16px] font-semibold leading-6 text-[var(--text-primary)]">{screen.name}</span>
                  <span className="text-[14px] leading-6 text-[var(--text-secondary)]">{screen.task}</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Bloque 3 — comparación: sólo aparece cuando la evidencia permite comparar dos superficies. */}
      {comparisonScreens.length > 1 && (
        <section className="flex flex-col gap-6" aria-labelledby={`${idBase}-comparison`}>
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">03 · Comparación</p>
            <h3 id={`${idBase}-comparison`} className="text-[24px] font-semibold leading-8 text-[var(--text-primary)]">Una base, dos identidades</h3>
            <p className="text-[16px] leading-7 text-[var(--text-secondary)]">La estructura se conserva mientras cambia la expresión visual de cada marca.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisonScreens.map((screen) => (
              <button key={screen.src} type="button" onClick={() => openScreen(screen)} aria-label={`Ampliar ${screen.name}`} className="group flex flex-col gap-3 text-left rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] overflow-hidden cursor-zoom-in focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]">
                <span className="relative block w-full aspect-[4/3]" style={{ background: "var(--bg-primary)" }}>
                  <ResilientImage src={screen.src} alt={screen.alt} fill className={`${previewClass(screen)} p-3 transition-transform duration-300 group-hover:scale-[1.02]`} style={previewStyle(screen)} sizes="(max-width: 768px) 100vw, 50vw" />
                </span>
                <span className="flex flex-col gap-1 px-4 pb-4">
                  <span className="text-[16px] font-semibold leading-6 text-[var(--text-primary)]">{screen.name}</span>
                  <span className="text-[14px] leading-6 text-[var(--text-secondary)]">{screen.task}</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Bloque 4 — galería secundaria: conserva la evidencia restante sin esconderla en un carrusel. */}
      {galleryScreens.length > 0 && (
        <section className="flex flex-col gap-6" aria-labelledby={`${idBase}-gallery`}>
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">04 · Galería secundaria</p>
            <h3 id={`${idBase}-gallery`} className="text-[24px] font-semibold leading-8 text-[var(--text-primary)]">Más pantallas del sistema</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryScreens.map((screen) => (
              <button key={screen.src} type="button" onClick={() => openScreen(screen)} aria-label={`Ampliar ${screen.name}`} className="group flex flex-col gap-3 text-left rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] overflow-hidden cursor-zoom-in focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]">
                <span className="relative block w-full aspect-[4/3]" style={{ background: "var(--bg-primary)" }}>
                  <ResilientImage src={screen.src} alt={screen.alt} fill className={`${previewClass(screen)} p-3 transition-transform duration-300 group-hover:scale-[1.02]`} style={previewStyle(screen)} sizes="(max-width: 640px) 100vw, 50vw" />
                </span>
                <span className="flex flex-col gap-1 px-4 pb-4">
                  <span className="text-[16px] font-semibold leading-6 text-[var(--text-primary)]">{screen.name}</span>
                  <span className="text-[14px] leading-6 text-[var(--text-secondary)]">{screen.task}</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
