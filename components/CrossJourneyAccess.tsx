"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";

const DESTINATIONS = {
  services: { label: "Servicios web", href: "/servicios-web", description: "Landing pages y sitios institucionales para profesionales y negocios.", action: "Conocer mis servicios web" },
  portfolio: { label: "Portfolio", href: "/", description: "Proyectos, experiencia y recorrido en UX/UI y Product Design.", action: "Ver portfolio profesional" },
};

export default function CrossJourneyAccess({ destination, compact = false, onNavigate }: { destination: keyof typeof DESTINATIONS; compact?: boolean; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const target = DESTINATIONS[destination];

  function cancelLeave() { if (leaveTimer.current) clearTimeout(leaveTimer.current); }
  function close() { cancelLeave(); setOpen(false); }
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); }, []);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);

  return <div ref={root} className={`cross-access${compact ? " cross-access-compact" : ""}`}
    onPointerEnter={event => { cancelLeave(); if (!compact && event.pointerType === "mouse") setOpen(true); }}
    onPointerLeave={event => { if (compact || event.pointerType !== "mouse") return; cancelLeave(); leaveTimer.current = setTimeout(() => { if (!root.current?.contains(document.activeElement)) setOpen(false); }, 150); }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close(); }}
    onKeyDown={event => { if (event.key === "Escape" && open) { event.preventDefault(); event.stopPropagation(); close(); trigger.current?.focus(); } }}>
    <button ref={trigger} type="button" className="cross-access-trigger" aria-expanded={open} aria-controls={id} onClick={() => { cancelLeave(); setOpen(value => !value); }}>
      {target.label}<ChevronDown size={16} aria-hidden className="cross-access-chevron" />
    </button>
    <div id={id} className="cross-access-panel" hidden={!open}>
      <div className="cross-access-surface">
        <p>{target.description}</p>
        <a href={target.href} className="home-button home-button-primary cross-access-primary" onClick={() => { close(); onNavigate?.(); }}>{target.action}</a>
        <a href={target.href} target="_blank" rel="noopener noreferrer" className="home-text-link cross-access-new-tab" aria-label={`${target.label}: abrir en otra pestaña`} onClick={() => { close(); onNavigate?.(); }}>Abrir en otra pestaña <ExternalLink size={16} aria-hidden /></a>
      </div>
    </div>
  </div>;
}
