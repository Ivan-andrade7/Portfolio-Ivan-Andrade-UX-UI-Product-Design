"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Info, Maximize2, X } from "lucide-react";
import type { Screen } from "@/lib/cases";

// Button / Icon — Ghost SM — Figma node 201-503
// Default:  bg transparent
// Hover:    bg var(--bg-secondary) = #0f172a
// Pressed:  bg var(--bg-secondary) + inner shadow (rendered as absolute span, matching Figma)
// Focus:    transparent + focus ring 0 0 0 4px rgba(20,184,166,0.3)
// Disabled: bg #1e293b + opacity-40 rendered as <div> (avoids browser :disabled style conflicts)
function CarouselBtn({
  onClick,
  disabled,
  label,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`group relative flex items-center justify-center p-2 rounded-lg shrink-0 size-8 transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)] ${
        disabled
          ? "cursor-not-allowed opacity-40 bg-[var(--surface-secondary)]"
          : "cursor-pointer bg-transparent hover:bg-[var(--bg-secondary)] active:bg-[var(--bg-secondary)]"
      }`}
      style={{ color: "var(--text-primary)" }}
    >
      {children}
      {/* Pressed inner shadow — Figma Ghost SM Pressed: inset shadow as absolute overlay */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-active:opacity-100 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.16)]"
      />
    </button>
  );
}

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
          <Image
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
          <Image
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
  const total = screens.length;
  const single = total === 1;
  const expandBtnRef = useRef<HTMLButtonElement>(null);

  const current = screens[idx];
  // Modo derivado de la proporción real de cada imagen (metadata explícita), nunca del nombre de archivo o del caso.
  // `fit`/`objectPosition` en la metadata permiten un override puntual por imagen cuando el derivado no alcanza.
  const isPortrait = current.height > current.width;
  const fit = current.fit ?? (isPortrait ? "cover" : "contain");
  const objectPosition = current.objectPosition ?? (isPortrait ? "center top" : "center center");

  return (
    <div className="flex flex-col gap-6 w-full overflow-hidden">

      {/* Main image — escenario fijo por caso (800:569 default, o galleryAspect si el caso lo define):
          constante entre todos los slides de ESE caso (sin layout shift al navegar).
          - Horizontal: object-contain, se ve completa, centrada, sin deformar.
          - Vertical o extremadamente larga: object-cover + object-top es un RECORTE INTENCIONAL
            (vista previa desde arriba dentro del escenario fijo); la imagen completa solo se ve
            en el lightbox, con scroll vertical si hace falta. */}
      <div
        className="relative w-full rounded-xl overflow-hidden border border-[var(--border-default)]"
        style={{ aspectRatio: galleryAspect ?? "800 / 569", background: "var(--bg-secondary)" }}
      >
        <button
          ref={expandBtnRef}
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Ampliar captura: ${title}, pantalla ${idx + 1} de ${total}`}
          className="group absolute inset-0 p-4 md:p-6 cursor-zoom-in focus-visible:outline-none"
        >
          <Image
            src={current.src}
            alt={`${title} — pantalla ${idx + 1}`}
            fill
            className={fit === "cover" ? "object-cover" : "object-contain"}
            style={fit === "cover" ? { objectPosition } : undefined}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1000px"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-3 right-3 flex items-center justify-center size-8 rounded-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
            style={{ background: "var(--overlay-card)", color: "var(--text-primary)" }}
          >
            <Maximize2 size={16} />
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-2 md:inset-3 rounded-lg opacity-0 group-focus-visible:opacity-100 transition-opacity"
            style={{ boxShadow: "0 0 0 4px var(--focus-ring)" }}
          />
        </button>
      </div>

      {/* Aviso discreto opcional (ej. TrainiT: caso con una sola pantalla final disponible). */}
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

      {/* Con una sola pantalla: evidencia estática ampliable, sin flechas/contador/miniaturas. */}
      {!single && (
        <>
          <div className="flex items-center justify-between w-full">
            <CarouselBtn onClick={() => setIdx((i) => i - 1)} disabled={idx === 0} label="Pantalla anterior">
              <ChevronLeft size={16} />
            </CarouselBtn>

            <span className="text-[14px] font-semibold leading-5 text-[var(--text-tertiary)] whitespace-nowrap">
              {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            <CarouselBtn onClick={() => setIdx((i) => i + 1)} disabled={idx === total - 1} label="Pantalla siguiente">
              <ChevronRight size={16} />
            </CarouselBtn>
          </div>

          {/* Thumbnails — mismo escenario recortado en los cinco casos (Image / Small — Figma node 385-1041):
              vista previa intencional con object-cover/object-top, uniforme sin importar el modo de la
              imagen principal. El activo se diferencia por borde de acento. */}
          <div className="flex gap-3 items-center w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {screens.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Ver pantalla ${i + 1} de ${total}`}
                aria-current={i === idx ? "true" : undefined}
                className={`shrink-0 relative rounded-xl overflow-hidden border cursor-pointer transition-colors ${
                  i === idx
                    ? "border-[var(--border-interactive)]"
                    : "border-[var(--border-default)] hover:border-[var(--text-tertiary)]"
                }`}
                style={{ width: 100, aspectRatio: "720 / 512" }}
              >
                <Image
                  src={s.src}
                  alt={`${title} — ${i + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="100px"
                />
              </button>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
