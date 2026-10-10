import type { NavItem } from "./cases";

// Single circular sequence shared by records and dedicated routes.
export const CASE_SEQUENCE: readonly NavItem[] = [
  {
    "slug": "fintech",
    "title": "Fintech PYME — Plataforma de Créditos B2B",
    "role": "Único diseñador UX/UI · Simulación laboral · No Country · 2025"
  },
  {
    "slug": "garden-ads",
    "title": "GardenAds — Attribution & Tracking Health",
    "role": "Único diseñador UX/UI · Simulación laboral · No Country · 2026"
  },
  {
    "slug": "crm",
    "title": "ChatCRM — CRM para PyMEs",
    "role": "Único diseñador UX/UI · Simulación laboral · No Country · 2026"
  },
  {
    "slug": "multi-brand",
    "title": "Multi-Brand Design System",
    "role": "1 de 4 UX/UI · Simulación laboral colaborativa · No Country · 2025"
  },
  {
    "slug": "trainit",
    "title": "TrainiT — Gestión de Proyectos",
    "role": "Junior UX/UI · Pasantía formativa TrainiT · 2025"
  },
  {
    "slug": "nodo",
    "title": "NODO Arquitectura",
    "role": "Diseño web · Proyecto personal conceptual"
  },
  {
    "slug": "fellowship",
    "title": "Fellowship / No Country",
    "role": "Diseño web · Trabajo real · Fellowship No Country"
  }
];

export function getCaseNavigation(slug: string): { prev: NavItem; next: NavItem } {
  const index = CASE_SEQUENCE.findIndex(item => item.slug === slug);
  if (index < 0) throw new Error(`Unknown case: ${slug}`);
  return { prev: CASE_SEQUENCE[(index + CASE_SEQUENCE.length - 1) % CASE_SEQUENCE.length], next: CASE_SEQUENCE[(index + 1) % CASE_SEQUENCE.length] };
}
