import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiBehance, SiFigma } from "react-icons/si";
import { CASES, getCaseBySlug } from "@/lib/cases";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UICarousel from "@/components/UICarousel";

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return { title: `${c.title} — Ivan Andrade`, description: c.subtitle };
}

// ── Section header — Figma 246:1503 ──────────────────────────────────────────
// Eyebrow row: línea teal (h-[2px] w-6) + label 12px/600/1px tracking
// Heading: H2 32px/700/40px/-1.5px
// Subtitle opcional: Body M 16px/400/28px
function SectionHeader({
  eyebrow,
  heading,
  subtitle,
}: {
  eyebrow: string;
  heading: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-2 h-4">
        <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
        <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)] whitespace-nowrap">
          {eyebrow}
        </span>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-[32px] font-bold leading-10 tracking-[-1.5px] text-[var(--text-primary)] w-full">
          {heading}
        </h2>
        {subtitle && (
          <p className="text-[16px] leading-7 text-[var(--text-secondary)] w-full">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

// ── Tag chip ──────────────────────────────────────────────────────────────────
function TagChip({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div
      className="flex items-center justify-center h-8 px-3 rounded-full border shrink-0"
      style={{
        background: accent ? "var(--brand-soft)" : "var(--bg-secondary)",
        borderColor: accent ? "var(--border-interactive)" : "var(--border-default)",
      }}
    >
      <span
        className="text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap"
        style={{ color: accent ? "var(--text-accent)" : "var(--text-secondary)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Decision block — Figma 223:720 ───────────────────────────────────────────
function DecisionBlock({
  decision,
}: {
  decision: { id: string; title: string; motivo: string; impacto: string };
}) {
  return (
    <div className="border-l-2 rounded-br-xl rounded-tr-xl w-full" style={{ borderColor: "var(--border-interactive)" }}>
      <div
        className="flex flex-col gap-2 p-6 rounded-br-xl rounded-tr-xl border"
        style={{ background: "var(--bg-secondary)", borderColor: "#1e293b" }}
      >
        <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">
          Decisión {decision.id}
        </p>
        <p className="text-[20px] leading-8 w-full text-[var(--text-primary)]">{decision.title}</p>
        <div className="flex gap-3 items-start text-[20px] leading-8">
          <span className="shrink-0 whitespace-nowrap text-[var(--text-tertiary)]">Motivo</span>
          <p className="flex-1 min-w-0 text-[var(--text-secondary)]">{decision.motivo}</p>
        </div>
        <div className="flex gap-3 items-start text-[20px] leading-8">
          <span className="shrink-0 whitespace-nowrap text-[var(--text-tertiary)]">Impacto</span>
          <p className="flex-1 min-w-0 text-[var(--text-secondary)]">{decision.impacto}</p>
        </div>
      </div>
    </div>
  );
}

// ── Metric card — Figma 223:702 ───────────────────────────────────────────────
function MetricCard({ value, label }: { value: string; label: string }) {
  const match = value.match(/^([\d\-]+)([+%]*)$/);
  const number = match ? match[1] : value;
  const suffix = match ? match[2] : "";
  return (
    <div className="flex flex-col gap-2 p-6 rounded-xl border flex-1 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] border-[var(--border-default)] transition-colors cursor-default">
      <p className="text-[56px] font-bold leading-[64px] tracking-[-2px]">
        <span className="text-[var(--text-primary)]">{number}</span>
        {suffix && <span className="text-[var(--text-accent)]">{suffix}</span>}
      </p>
      <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-tertiary)]">{label}</p>
    </div>
  );
}

// ── Nav card — Figma 236:952 ──────────────────────────────────────────────────
// Default: bg-secondary (#0f172a), Hover: surface-secondary (#1e293b)
// Pressed: hover bg + inset shadow overlay
function NavCard({
  item,
  direction,
}: {
  item: { slug: string; title: string; role: string };
  direction: "prev" | "next";
}) {
  const isPrev = direction === "prev";
  return (
    <Link
      href={`/proyectos/${item.slug}`}
      className="group relative flex-1 flex flex-col gap-2 px-4 py-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] hover:bg-[var(--surface-secondary)] active:bg-[var(--surface-secondary)] transition-colors duration-200 overflow-hidden"
    >
      {/* Direction label + icon */}
      <div className={`flex items-center gap-2 ${isPrev ? "" : "justify-end"}`}>
        {isPrev && <ArrowLeft size={16} className="text-[var(--text-accent)] shrink-0" />}
        <span className="text-[14px] font-semibold leading-5 text-[var(--text-accent)]">
          {isPrev ? "Anterior" : "Siguiente"}
        </span>
        {!isPrev && <ArrowRight size={16} className="text-[var(--text-accent)] shrink-0" />}
      </div>
      {/* Title + role */}
      <div className={`flex flex-col gap-2 ${isPrev ? "" : "text-right"}`}>
        <p className="text-[24px] font-semibold leading-8 tracking-[-1px] text-[var(--text-primary)] truncate">
          {item.title}
        </p>
        <p className="text-[14px] font-semibold leading-5 text-[var(--text-tertiary)] truncate">
          {item.role}
        </p>
      </div>
      {/* Pressed inner shadow overlay */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-active:opacity-100 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.16)]"
      />
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-[var(--bg-primary)]">

        {/* ── Hero — Figma 338:2433 ── */}
        <div className="relative w-full min-h-[520px]">
          <Image src={c.images[0]} alt={c.title} fill className="object-cover" priority />

          <div className="absolute inset-0 flex flex-col justify-between px-6 sm:px-12 lg:px-24 py-12 bg-[var(--overlay-card)]">

            {/* Ghost button MD — Figma 198:253 */}
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-3 h-10 px-4 py-3 rounded-lg w-fit text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)]"
            >
              <ArrowLeft size={20} />
              <span className="text-[14px] font-semibold leading-5">Volver al portfolio</span>
            </Link>

            {/* Bottom content */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag, i) => (
                  <TagChip key={tag} label={tag} accent={i === 0} />
                ))}
              </div>

              <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.14] tracking-[-2px] text-[var(--text-primary)] w-full">
                {c.title}
              </h1>

              <p className="text-[18px] md:text-[20px] leading-8 text-[var(--text-secondary)] w-full">
                {c.subtitle}
              </p>

              {/* Button Icon Secondary MD — Behance + Figma */}
              <div className="flex gap-3">
                <a
                  href={c.links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver en Behance"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--text-accent)] text-[var(--text-accent)] bg-transparent transition-colors hover:bg-[var(--brand-soft)]"
                >
                  <SiBehance size={20} />
                </a>
                <a
                  href={c.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver prototipo en Figma"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--text-accent)] text-[var(--text-accent)] bg-transparent transition-colors hover:bg-[var(--brand-soft)]"
                >
                  <SiFigma size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content — px-6/12/24 (96px en desktop) ── */}
        <div className="px-6 sm:px-12 lg:px-24">

          {/* Overview */}
          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="Overview" heading="Contexto del proyecto" />
            <div className="flex flex-wrap gap-[48px] pt-4 w-full">
              {[
                { label: "Rol", value: c.context.rol },
                { label: "Duración", value: c.context.duracion },
                { label: c.context.focoLabel, value: c.context.foco },
                { label: "Tools", value: c.context.tools },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1 shrink-0">
                  <p className="text-[14px] leading-6 text-[var(--text-tertiary)]">{label}</p>
                  <p className="text-[14px] font-semibold leading-5 text-[var(--text-primary)]">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-[16px] leading-7 text-[var(--text-secondary)] w-full">{c.description}</p>
          </section>

          {/* El problema */}
          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="El problema" heading={c.problema.title} />
            {c.problema.body.split("\n\n").map((p, i) => (
              <p key={i} className="text-[16px] leading-7 text-[var(--text-secondary)] w-full">{p}</p>
            ))}
          </section>

          {/* Estrategia */}
          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="Estrategia" heading="Cómo encaré el problema" />
            {c.estrategia.split("\n\n").map((p, i) => (
              <p key={i} className="text-[16px] leading-7 text-[var(--text-secondary)] w-full">{p}</p>
            ))}
          </section>

          {/* Decisiones clave */}
          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="Decisiones clave" heading="Criterio de diseño" />
            {c.decisions.map((d) => (
              <DecisionBlock key={d.id} decision={d} />
            ))}
          </section>

          {/* Selección de UI */}
          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="Pantallas" heading="Selección de UI" />
            {c.pantallas && <UICarousel images={c.pantallas} title={c.title} />}
          </section>

          {/* Design System (opcional) */}
          {c.designSystem && (
            <section className="flex flex-col gap-8 py-16 border-b border-[var(--border-default)]">
              <SectionHeader eyebrow="Design System" heading={c.designSystem.title} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-semibold tracking-[1px] uppercase text-[var(--text-tertiary)]">
                    Foundations
                  </span>
                  <p className="text-[16px] leading-7 text-[var(--text-secondary)]">{c.designSystem.foundations}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-semibold tracking-[1px] uppercase text-[var(--text-tertiary)]">
                    Componentes clave
                  </span>
                  <ul className="flex flex-col gap-2">
                    {c.designSystem.components.map((comp) => (
                      <li key={comp} className="flex items-start gap-2">
                        <span className="mt-[10px] w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--text-accent)]" />
                        <span className="text-[16px] leading-7 text-[var(--text-secondary)]">{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Resultados */}
          <section className="flex flex-col gap-8 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="Resultados" heading="En números" />
            <div className="flex flex-wrap gap-6 w-full">
              {c.metrics.map((m) => (
                <MetricCard key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </section>

          {/* Reflexión */}
          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="Reflexión" heading="Qué me llevé" />
            <p className="text-[16px] leading-7 text-[var(--text-secondary)] w-full">{c.reflection}</p>
          </section>

          {/* Navegación prev / next */}
          <div className="flex gap-4 py-16">
            {c.prev ? <NavCard item={c.prev} direction="prev" /> : <div className="flex-1" />}
            {c.next ? <NavCard item={c.next} direction="next" /> : <div className="flex-1" />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
