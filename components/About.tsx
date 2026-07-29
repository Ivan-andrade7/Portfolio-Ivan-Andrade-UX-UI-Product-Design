import { Shield, Component, CircleHelp, Code2 } from "lucide-react";

const VALUES = [
  {
    icon: <Component size={24} className="text-[var(--text-accent)]" />,
    title: "Sistemas sobre pantallas",
    desc: "Construyo design systems que el equipo implementa sin ambigüedades.",
  },
  {
    icon: <CircleHelp size={24} className="text-[var(--text-accent)]" />,
    title: "Problema antes que solución",
    desc: "Cada decisión de diseño tiene un criterio. No diseño por estética: diseño para resolver un problema concreto.",
  },
  {
    icon: <Code2 size={24} className="text-[var(--text-accent)]" />,
    title: "Handoff sin fricción",
    desc: "Tokens, especificaciones y documentación clara. El diseño no termina en Figma, termina en producción.",
  },
];

export default function About() {
  return (
    /* section/lg × section/md = 96px × 64px; gap/xxl=48px between blocks */
    <section
      id="sobre-mi"
      className="flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-16 bg-[var(--bg-primary)]"
    >
      {/* ── Section header: gap/xs=8px outer, gap/sm=12px content ── */}
      <div className="flex flex-col gap-2 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 h-4">
          <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
          <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
            Sobre mí
          </span>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px]">
            Una cabeza de sistemas aplicada al diseño
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">
            Una mirada particular sobre la claridad, la prevención de errores y la confianza en interfaces de alta fricción.
          </p>
        </div>
      </div>

      {/* ── About Row: Bio + Diferencial card — gap/xxl=48px ── */}
      <div className="flex flex-wrap gap-12 items-start w-full">
        {/* Bio — gap/md=16px between paragraphs */}
        <div className="flex flex-col gap-4 flex-1 min-w-[320px] text-[16px] leading-7 text-[var(--text-secondary)]">
          <p>
            Soy{" "}
            <span className="text-[var(--text-accent)]">
              Product Designer orientado a plataformas operacionales complejas
            </span>
            . Diseño end-to-end: desde la arquitectura de información y los flujos de usuario hasta los componentes, los tokens y el handoff a desarrollo.
          </p>
          <p>
            Trabajo principalmente en{" "}
            <span className="text-[var(--text-accent)]">SaaS B2B, Fintech y herramientas data-heavy</span>
            {" "}donde la claridad y la escalabilidad son tan importantes como la estética. No diseño para que se vea bien. Diseño para que funcione bien y se entienda mejor.
          </p>
          <p>
            Trabajo con una forma de pensar poco común para el diseño: foco en la confianza del usuario, prevención de errores y claridad en situaciones de alta presión. Eso es justo lo que necesitan los entornos donde el error se paga caro —{" "}
            <span className="text-[var(--text-accent)]">fintech, SaaS B2B, herramientas data-heavy</span>
            .
          </p>
        </div>

        {/* Diferencial card — bg-secondary, border-interactive, gap/sm=12px, inset/lg=24px */}
        <div className="flex flex-col gap-3 p-6 rounded-xl flex-1 min-w-[320px] bg-[var(--bg-secondary)] border border-[var(--border-interactive)]">
          {/* Chip — bg-brand-soft, control=8px radius, no border (per Figma) */}
          <div className="p-2 rounded-lg bg-[var(--brand-soft)] shrink-0 self-start">
            <Shield size={24} className="text-[var(--text-accent)]" />
          </div>
          {/* H3: 24px/600/32px/-1px */}
          <h3 className="text-[var(--text-primary)] text-[24px] font-semibold leading-8 tracking-[-1px]">
            Mi diferencial
          </h3>
          {/* Body-M: 16px/400/28px */}
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">
            Rigor documental, calma bajo presión y la costumbre de anticipar el error antes de que pase. Además de diseñar, programé este mismo portfolio (Claude Code, Git, Vercel), así que entiendo el lado técnico y colaboro de cerca con desarrollo.
          </p>
        </div>
      </div>

      {/* ── Values — gap/lg=24px between items ── */}
      <div className="flex flex-wrap gap-6 w-full">
        {VALUES.map(({ icon, title, desc }) => (
          <div key={title} className="flex flex-row gap-3 flex-1 min-w-[240px] items-start">
            {/* Icon chip — bg-brand-soft, border-accent, control=8px radius */}
            <div className="p-2 rounded-lg bg-[var(--brand-soft)] border border-[var(--text-accent)] shrink-0">
              {icon}
            </div>
            {/* Text — gap/xs=8px */}
            <div className="flex flex-col gap-2">
              <p className="text-[var(--text-primary)] text-[14px] font-semibold leading-5">
                {title}
              </p>
              <p className="text-[var(--text-secondary)] text-[14px] leading-6">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
