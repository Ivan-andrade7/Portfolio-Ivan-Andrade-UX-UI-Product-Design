import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { NavItem } from "@/lib/cases";

export function CaseExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border-interactive)] bg-[var(--bg-primary)] px-4 py-2 text-[14px] font-semibold text-[var(--brand-hover)] transition-colors hover:bg-[var(--brand-soft)]">{children}</a>;
}

// Patrones existentes de la plantilla de casos; compartidos sin rediseño.
export function SectionHeader({ eyebrow, heading, subtitle }: { eyebrow: string; heading: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-2 w-full min-w-0">
      <div className="flex items-center gap-2 min-h-4">
        <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
        <span className="min-w-0 break-words text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">{eyebrow}</span>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-[30px] sm:text-[32px] font-bold leading-10 tracking-[-1.5px] text-[var(--text-primary)] w-full break-words">{heading}</h2>
        {subtitle && <p className="text-[16px] leading-7 text-[var(--text-secondary)] w-full">{subtitle}</p>}
      </div>
    </div>
  );
}

export function TagChip({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-center h-8 px-3 rounded-full border shrink-0" style={{ background: accent ? "var(--brand-soft)" : "var(--bg-secondary)", borderColor: accent ? "var(--border-interactive)" : "var(--border-default)" }}>
      <span className="text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap" style={{ color: accent ? "var(--text-accent)" : "var(--text-secondary)" }}>{label}</span>
    </div>
  );
}

export function BackToPortfolio({ contrast = false }: { contrast?: boolean }) {
  return (
    <Link href="/#proyectos" className={`inline-flex items-center gap-3 h-10 px-4 py-3 rounded-lg w-fit text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)] ${contrast ? "bg-[var(--bg-primary)]/75 backdrop-blur-sm shadow-sm" : ""}`}>
      <ArrowLeft size={20} aria-hidden="true" />
      <span className="text-[14px] font-semibold leading-5">Volver al portfolio</span>
    </Link>
  );
}

export function NavCard({ item, direction }: { item: NavItem; direction: "prev" | "next" }) {
  const isPrev = direction === "prev";
  return (
    <Link href={`/proyectos/${item.slug}`} className="group relative flex-1 min-w-0 flex flex-col gap-2 px-4 py-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] hover:bg-[var(--surface-secondary)] active:bg-[var(--surface-secondary)] transition-colors duration-200 overflow-hidden">
      <div className={`flex items-center gap-2 ${isPrev ? "" : "justify-end"}`}>
        {isPrev && <ArrowLeft size={16} aria-hidden="true" className="text-[var(--text-accent)] shrink-0" />}
        <span className="text-[14px] font-semibold leading-5 text-[var(--text-accent)]">{isPrev ? "Anterior" : "Siguiente"}</span>
        {!isPrev && <ArrowRight size={16} aria-hidden="true" className="text-[var(--text-accent)] shrink-0" />}
      </div>
      <div className={`flex flex-col gap-2 ${isPrev ? "" : "text-right"}`}>
        <p className="text-[24px] font-semibold leading-8 tracking-[-1px] text-[var(--text-primary)] truncate">{item.title}</p>
        <p className="text-[14px] font-semibold leading-5 text-[var(--text-tertiary)] truncate">{item.role}</p>
      </div>
      <span aria-hidden="true" className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-active:opacity-100 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.16)]" />
    </Link>
  );
}

export function CaseNavigation({ prev, next }: { prev?: NavItem; next?: NavItem }) {
  return (
    <nav aria-label="Navegación entre casos" className="flex flex-col sm:flex-row gap-4 py-16 min-w-0">
      {prev ? <NavCard item={prev} direction="prev" /> : <div className="hidden sm:block flex-1" />}
      {next ? <NavCard item={next} direction="next" /> : <div className="hidden sm:block flex-1" />}
    </nav>
  );
}
