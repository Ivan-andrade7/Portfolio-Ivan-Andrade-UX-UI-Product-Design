import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BackToPortfolio, CaseNavigation, CaseTldr, SectionHeader, TagChip } from "@/components/CaseStudyUI";
import { SiBehance, SiFigma } from "react-icons/si";
import { CASES, getCaseBySlug } from "@/lib/cases";
import UICarousel from "@/components/UICarousel";
import ResilientImage from "@/components/ResilientImage";

export async function generateStaticParams() {
  return CASES.filter((c) => c.published !== false).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};

  const title = `${c.title} — Ivan Andrade`;
  const canonical = `/proyectos/${c.slug}`;
  const image = c.heroImages?.desktop ?? c.images[0];

  return {
    title,
    description: c.subtitle,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description: c.subtitle,
      siteName: "Ivan Andrade — Product Designer",
      locale: "es_AR",
      images: [{ url: image, alt: c.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: c.subtitle,
      images: [image],
    },
  };
}


// ── Decision block — Figma 223:720 ───────────────────────────────────────────
function DecisionBlock({
  decision,
}: {
  decision: { id: string; title: string; motivo: string; impacto: string; tradeoff?: string };
}) {
  return (
    <div className="case-decision border-l-2 rounded-br-xl rounded-tr-xl w-full" style={{ borderColor: "var(--border-interactive)" }}>
      <div
        className="flex flex-col gap-2 p-6 rounded-br-xl rounded-tr-xl border"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border-default)" }}
      >
        <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">
          Decisión {decision.id}
        </p>
        <p className="text-[20px] leading-8 w-full text-[var(--text-primary)]">{decision.title}</p>
        <div className="flex flex-col sm:flex-row gap-3 items-start text-[20px] leading-8">
          <span className="shrink-0 whitespace-nowrap text-[var(--text-tertiary)]">Motivo</span>
          <p className="flex-1 min-w-0 text-[var(--text-secondary)]">{decision.motivo}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-start text-[20px] leading-8">
          <span className="shrink-0 whitespace-nowrap text-[var(--text-tertiary)]">Efecto buscado</span>
          <p className="flex-1 min-w-0 text-[var(--text-secondary)]">{decision.impacto}</p>
        </div>
        {decision.tradeoff && (
          <div className="flex flex-col sm:flex-row gap-3 items-start text-[16px] leading-7">
            <span className="shrink-0 whitespace-nowrap text-[var(--text-tertiary)]">Trade-off</span>
            <p className="flex-1 min-w-0 text-[var(--text-secondary)]">{decision.tradeoff}</p>
          </div>
        )}
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
    <div className="case-metric flex flex-col gap-2 p-6 rounded-xl border flex-1 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] border-[var(--border-default)] transition-colors cursor-default">
      <p className="text-[56px] font-bold leading-[64px] tracking-[-2px]">
        <span className="text-[var(--text-primary)]">{number}</span>
        {suffix && <span className="text-[var(--text-accent)]">{suffix}</span>}
      </p>
      <p className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-tertiary)]">{label}</p>
    </div>
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
  const coverScreen = c.pantallas?.find(screen => screen.role === "key") ?? c.pantallas?.[0];

  return (
    <>
      <main id="contenido-principal" tabIndex={-1} className="case-main">

        <header id="inicio" className="case-hero home-container">
          <BackToPortfolio />
          <div className="case-hero-layout">
            <div className="case-hero-copy">
              <div className="case-tags">{c.tags.map((tag, i) => <TagChip key={tag} label={tag} accent={i === 0} />)}</div>
              <h1>{c.title}</h1>
              <p className="case-subtitle">{c.subtitle}</p>
              <div className="case-hero-links">
                <a href={c.links.behance} target="_blank" rel="noopener noreferrer" aria-label="Ver en Behance" className="case-icon-link"><SiBehance size={20} aria-hidden /></a>
                {c.links.figma ? (
                  <a href={c.links.figma} target="_blank" rel="noopener noreferrer" aria-label="Ver prototipo en Figma" className="case-icon-link"><SiFigma size={20} aria-hidden /></a>
                ) : c.links.figmaNote ? (
                  <span className="case-link-note">Figma: {c.links.figmaNote}</span>
                ) : null}
              </div>
            </div>
            <div className="case-hero-media">
              <ResilientImage src={coverScreen?.src ?? c.images[0]} alt={coverScreen?.alt ?? c.title} fill preload sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1296px) 52vw, 595px" className="object-contain p-4" fallbackLabel={`${c.title}: imagen no disponible`} />
            </div>
          </div>
        </header>

        {/* ── Content — px-6/12/24 (96px en desktop) ── */}
        <div className="case-body home-container">

          {c.slug === "fintech" && c.attribution && (
            <div className="py-12">
              <CaseTldr
                items={[
                  { label: "Rol", value: c.context.rol },
                  { label: "Equipo / contexto", value: c.context.foco },
                  { label: "Tipo de proyecto", value: "Simulación laboral de No Country" },
                  { label: "Alcance", value: c.attribution.responsibility },
                  { label: "Entregables", value: c.attribution.deliverables },
                  { label: "Evidencia", value: c.attribution.evidence },
                  { label: "Límites", value: c.notice ?? "No se presentan métricas, testing ni resultados no documentados." },
                ]}
              />
            </div>
          )}

          {/* Overview */}
          <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="Overview" heading="Contexto del proyecto" />
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 w-full min-w-0">
              {[
                { label: "Rol", value: c.context.rol },
                { label: "Duración", value: c.context.duracion },
                { label: c.context.focoLabel, value: c.context.foco },
                { label: "Tools", value: c.context.tools },
              ].map(({ label, value }) => (
                <div key={label} className="flex min-w-0 flex-col gap-1">
                  <p className="text-[14px] leading-6 text-[var(--text-tertiary)]">{label}</p>
                  <p className="text-[14px] font-semibold leading-5 text-[var(--text-primary)] break-words">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-[16px] leading-7 text-[var(--text-secondary)] w-full">{c.description}</p>
            {c.notice && (
              <div
                role="note"
                className="flex items-start gap-3 rounded-lg border px-4 py-3"
                style={{
                  background: "var(--brand-soft)",
                  borderColor: "var(--border-interactive)",
                }}
              >
                <span className="text-[var(--text-accent)] text-[14px] font-semibold leading-6">Nota</span>
                <p className="text-[14px] leading-6 text-[var(--text-secondary)]">{c.notice}</p>
              </div>
            )}
          </section>

          {c.attribution && (
            <section className="flex flex-col gap-8 py-16 border-b border-[var(--border-default)]">
              <SectionHeader eyebrow="Atribución y evidencia" heading="Mi trabajo y su alcance" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Mi responsabilidad", value: c.attribution.responsibility },
                  { label: "Colaboración", value: c.attribution.collaboration },
                  { label: "Entregables descritos", value: c.attribution.deliverables },
                  { label: "Evidencia y límites", value: c.attribution.evidence },
                ].map(({ label, value }) => (
                  <div key={label} className="case-panel flex flex-col gap-2 p-6 rounded-xl border bg-[var(--bg-secondary)] border-[var(--border-default)]">
                    <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">{label}</span>
                    <p className="text-[16px] leading-7 text-[var(--text-secondary)]">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {(c.users || c.outcome) && (
            <section className="flex flex-col gap-8 py-16 border-b border-[var(--border-default)]">
              <SectionHeader eyebrow="Lectura del caso" heading="Personas y entregables" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {c.users && (
                  <div className="case-panel flex flex-col gap-3 p-6 rounded-xl border bg-[var(--bg-secondary)] border-[var(--border-default)]">
                    <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">Personas involucradas</span>
                    <h3 className="text-[20px] font-semibold leading-8 text-[var(--text-primary)]">{c.users.title}</h3>
                    <p className="text-[16px] leading-7 text-[var(--text-secondary)]">{c.users.body}</p>
                  </div>
                )}
                {c.outcome && (
                  <div className="case-panel flex flex-col gap-3 p-6 rounded-xl border bg-[var(--bg-secondary)] border-[var(--border-default)]">
                    <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">{c.outcome.title}</span>
                    <p className="text-[16px] leading-7 text-[var(--text-secondary)]">{c.outcome.body}</p>
                  </div>
                )}
              </div>
            </section>
          )}

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
          {c.pantallas && (
            <section className="flex flex-col gap-6 py-16 border-b border-[var(--border-default)]">
              <SectionHeader eyebrow="Pantallas" heading="Selección de UI" />
              <UICarousel
                screens={c.pantallas}
                title={c.title}
                note={c.galleryNote}
                galleryAspect={c.galleryAspect}
              />
            </section>
          )}

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

          {/* Datos del proyecto — métricas de contexto, no resultados de negocio */}
          <section className="flex flex-col gap-8 py-16 border-b border-[var(--border-default)]">
            <SectionHeader eyebrow="Datos del proyecto" heading="Contexto y alcance" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full min-w-0">
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
          <CaseNavigation prev={c.prev} next={c.next} />
        </div>
      </main>
    </>
  );
}
