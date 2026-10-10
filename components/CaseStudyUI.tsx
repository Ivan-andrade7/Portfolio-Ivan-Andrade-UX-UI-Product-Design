import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { NavItem } from "@/lib/cases";

export function CaseExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="case-external-link inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border-interactive)] bg-[var(--bg-primary)] px-4 py-2 text-[14px] font-semibold text-[var(--brand-hover)] transition-colors hover:bg-[var(--brand-soft)]">{children}</a>;
}

// Shared editorial patterns for all six case studies.
export function SectionHeader({ eyebrow, heading, subtitle }: { eyebrow: string; heading: string; subtitle?: string }) {
  return (
    <div className="case-section-header flex flex-col gap-2 w-full min-w-0">
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
    <div className="case-tag flex items-center justify-center min-h-8 px-3 border" style={{ background: accent ? "var(--brand-soft)" : "var(--bg-secondary)", borderColor: accent ? "var(--border-interactive)" : "var(--border-default)" }}>
      <span className="text-[12px] font-semibold leading-4 tracking-[1px]" style={{ color: accent ? "var(--text-accent)" : "var(--text-secondary)" }}>{label}</span>
    </div>
  );
}

export function CaseTldr({ items }: { items: { label: string; value: string }[] }) {
  return (
    <section
      aria-labelledby="case-tldr-heading"
      className="case-tldr flex flex-col gap-6 rounded-2xl border border-[var(--border-interactive)] bg-[var(--brand-soft)] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 min-h-4">
          <span className="block h-[2px] w-6 shrink-0 bg-[var(--text-accent)]" />
          <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">Lectura rápida</span>
        </div>
        <h2 id="case-tldr-heading" className="text-[28px] font-bold leading-9 tracking-[-1px] text-[var(--text-primary)]">
          TL;DR del proyecto
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="flex min-w-0 flex-col gap-1 border-l-2 border-[var(--border-interactive)] pl-4">
            <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">{item.label}</p>
            <p className="break-words text-[14px] leading-6 text-[var(--text-secondary)]">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BackToPortfolio({ contrast = false }: { contrast?: boolean }) {
  return (
    <Link href="/#proyectos" className={`case-back inline-flex items-center gap-3 min-h-11 px-4 py-3 rounded-lg w-fit text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)] ${contrast ? "bg-[var(--bg-primary)]/75 backdrop-blur-sm shadow-sm" : ""}`}>
      <ArrowLeft size={20} aria-hidden="true" />
      <span className="text-[14px] font-semibold leading-5">Volver a proyectos</span>
    </Link>
  );
}

export function NavCard({ item, direction }: { item: NavItem; direction: "prev" | "next" }) {
  const isPrev = direction === "prev";
  return (
    <Link href={`/proyectos/${item.slug}`} className="case-nav-card group relative flex-1 min-w-0 flex flex-col gap-2 px-4 py-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] hover:bg-[var(--surface-secondary)] active:bg-[var(--surface-secondary)] transition-colors duration-200">
      <div className={`flex items-center gap-2 ${isPrev ? "" : "justify-end"}`}>
        {isPrev && <ArrowLeft size={16} aria-hidden="true" className="text-[var(--text-accent)] shrink-0" />}
        <span className="text-[14px] font-semibold leading-5 text-[var(--text-accent)]">{isPrev ? "Anterior" : "Siguiente"}</span>
        {!isPrev && <ArrowRight size={16} aria-hidden="true" className="text-[var(--text-accent)] shrink-0" />}
      </div>
      <div className={`flex flex-col gap-2 ${isPrev ? "" : "text-right"}`}>
        <p className="text-[24px] font-semibold leading-8 tracking-[-1px] text-[var(--text-primary)]">{item.title}</p>
        <p className="text-[14px] font-semibold leading-5 text-[var(--text-tertiary)]">{item.role}</p>
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
