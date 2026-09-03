"use client";

import { useState } from "react";

type BrandTheme = {
  name: string;
  shortName: string;
  description: string;
  tokens: {
    primary: string;
    surface: string;
    card: string;
    text: string;
    muted: string;
    radius: string;
    font: string;
  };
};

const THEMES: Record<"academy" | "kids", BrandTheme> = {
  academy: {
    name: "EdTech Academy (Adultos)",
    shortName: "Academy",
    description: "Una expresión más sobria para una experiencia de aprendizaje profesional.",
    tokens: {
      primary: "#2563eb",
      surface: "#f8fafc",
      card: "#ffffff",
      text: "#0f172a",
      muted: "#64748b",
      radius: "8px",
      font: "var(--font-inter), sans-serif",
    },
  },
  kids: {
    name: "EdTech Kids (Infantil)",
    shortName: "Kids",
    description: "Una expresión más amable y expresiva para un público más joven.",
    tokens: {
      primary: "#f97316",
      surface: "#fffbeb",
      card: "#ffffff",
      text: "#451a03",
      muted: "#9a3412",
      radius: "20px",
      font: "ui-rounded, \"Arial Rounded MT Bold\", system-ui, sans-serif",
    },
  },
};

export default function TokenSwitcherWidget() {
  const [activeTheme, setActiveTheme] = useState<keyof typeof THEMES>("academy");
  const theme = THEMES[activeTheme];

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
      <div className="flex flex-col gap-4 border-b border-[var(--border-default)] pb-5 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[20px] font-semibold leading-8 text-[var(--text-primary)]">Una estructura, dos expresiones</h3>
            <span className="rounded-full border border-[var(--border-interactive)] bg-[var(--brand-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--text-accent)]">Demo conceptual</span>
          </div>
          <p className="max-w-2xl text-[14px] leading-6 text-[var(--text-secondary)]">Alterná entre marcas para ver cómo los tokens de color, radio y tipografía cambian la expresión sin duplicar la estructura del componente.</p>
        </div>

        <div className="inline-flex shrink-0 self-start rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] p-1" role="group" aria-label="Elegir marca">
          {(Object.keys(THEMES) as Array<keyof typeof THEMES>).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={activeTheme === key}
              onClick={() => setActiveTheme(key)}
              className={`rounded-md px-3 py-2 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)] ${activeTheme === key ? "text-white" : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"}`}
              style={activeTheme === key ? { backgroundColor: theme.tokens.primary } : undefined}
            >
              {THEMES[key].shortName}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)]" style={{ fontFamily: theme.tokens.font }}>
        <div className="flex flex-col gap-6 p-6 shadow-sm transition-all duration-300" style={{ backgroundColor: theme.tokens.card, borderRadius: theme.tokens.radius, color: theme.tokens.text }}>
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[1px]" style={{ backgroundColor: theme.tokens.surface, color: theme.tokens.primary }}>Curso activo</span>
            <span className="text-[12px]" style={{ color: theme.tokens.muted }}>Módulo 3 de 8</span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[20px] font-bold leading-8" style={{ color: theme.tokens.text }}>Introducción a la Ciencia de Datos</h4>
            <p className="text-[14px] leading-6" style={{ color: theme.tokens.muted }}>Aprendé a estructurar datasets, calcular métricas y visualizar tendencias.</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button type="button" className="rounded-lg px-4 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2" style={{ backgroundColor: theme.tokens.primary, borderRadius: theme.tokens.radius }}>Continuar lección</button>
            <span className="text-[14px] font-semibold" style={{ color: theme.tokens.text }}>75% completado</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] p-4">
          <div className="text-[12px] font-semibold text-[var(--text-tertiary)]">Tokens activos · {theme.name}</div>
          <dl className="flex flex-col gap-2 font-mono text-[12px] leading-5">
            {Object.entries({
              "--brand-primary": theme.tokens.primary,
              "--brand-surface": theme.tokens.surface,
              "--brand-radius": theme.tokens.radius,
              "--brand-font-family": theme.tokens.font,
            }).map(([token, value]) => (
              <div key={token} className="flex items-start justify-between gap-3 border-b border-[var(--border-default)] pb-2 last:border-0 last:pb-0">
                <dt className="text-[var(--text-accent)]">{token}</dt>
                <dd className="text-right text-[var(--text-secondary)]">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="pt-1 text-[12px] leading-5 text-[var(--text-tertiary)]">{theme.description}</p>
        </div>
      </div>

      <p className="text-[12px] leading-5 text-[var(--text-tertiary)]">Los valores son una demostración visual basada en la documentación del sistema; no representan modos activos de Figma ni una implementación del producto EdTech.</p>
    </div>
  );
}

