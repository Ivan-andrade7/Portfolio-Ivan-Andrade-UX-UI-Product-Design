@AGENTS.md



\## Contexto de diseño — Portfolio 2026



> Resumen de producto y marca para que cualquier sesión de Claude Code en este repo tenga el mismo criterio que el diseño en Figma y el Documento de Marca. No reemplaza esas fuentes — son la referencia completa (enlaces al final).



\### Qué es este proyecto

Sitio web personal de portfolio de Ivan Andrade (Product Designer UX/UI): Home one-page + 5 case studies, dark/light, responsive (1440 / 834 / 390). Objetivo: conseguir entrevistas para un primer rol en tech.



\### Usuario objetivo

\- Recruiters y hiring managers de producto en SaaS B2B, Fintech y equipos con Design Systems: necesitan entender el perfil en unos 90 segundos.

\- Product Leads y Design Leads: evaluan criterio, decisiones y trade-offs.

\- Founders y equipos pequenos: evaluan autonomia y capacidad end-to-end.

\- Perfiles tecnicos: evaluan claridad de componentes, tokens, documentacion y handoff.



\### Tono de voz (microcopy, About, case studies)

Claro, directo, profesional, argentino, calido pero riguroso, concreto, escaneable, honesto, centrado en decisiones y fundamentos, seguro sin sonar arrogante, tecnico solo cuando aporta comprension.

\- Si: explicar decisiones y trade-offs, hablar de sistemas/componentes/tokens, seniority honesta (junior con pensamiento de producto maduro), ejemplos concretos.

\- No: adjetivos vacios ("interfaces modernas y atractivas"), tono motivacional, metricas o resultados sin evidencia, forzar la historia de seguridad publica en cada pieza.

\- No inventar metricas ni afirmar "cumple WCAG AA" sin auditoria real -> usar "criterios de accesibilidad basados en WCAG AA".



\### Paleta y tokens (fuente real: Figma -> Tokens Colors, Dark/Light)

Regla de oro: 0 valores hardcodeados. Todo color, spacing, radio y tipografia sale de un token semantico. Si algo no tiene token, avisar antes de inventar uno.



| Token semantico | Dark | Light |

| --- | --- | --- |

| Background/Primary | #020617 | #f8fafc |

| Brand/Primary | #14b8a6 | #0d9488 |

| Text/Primary | #f8fafc | #0f172a |

| Text/Accent | #2dd4bf | #0f766e |



Tipografia: Inter (400/600/700) + JetBrains Mono (500, solo snippets de codigo). Spacing base 4px. Radios: control 8px, card 12px, pill 9999px. Lista completa de tokens y ambos modos: Figma -> Tokens Colors.



\### Restricciones tecnicas

\- Sitio estatico (SPA liviana), sin backend/CMS/formularios con envio real (contacto es mailto o links externos).

\- 3 breakpoints exactos: desktop 1440, tablet 834, mobile 390.

\- Accesibilidad WCAG AA: contraste, focus visible, touch targets de 40px o mas, "prefers-reduced-motion" respetado.

\- Bug conocido del export de variables (variables2css): corregir a mano FontWeight/Regular -> 400, Opacity/40 -> 0.4, Duration/150 -> 150ms.



\### Enlaces

\- Figma (Dev Mode): https://www.figma.com/design/W9bE6DynJkt5JroGYLVtN5/Portfolio-2026?node-id=188-4014

\- Pagina del proyecto en Notion: https://app.notion.com/p/3a6194b0e2d881aabe87de24d7d766ab

\- Developer Handoff completo (specs, componentes, patrones, QA): https://app.notion.com/p/380194b0e2d881859878e0ef6ae2ba4b

\- Documento de Marca — fuente de verdad de tono e identidad: https://app.notion.com/p/394194b0e2d8816c9c48c6ecaef57ccb



\## Changelog

\- 01/08/2026: agregado por Claude (Cowork) segun la idea A5 del catalogo de ideas ("CLAUDE.md por proyecto de diseno"). Contenido tomado de las paginas reales "Portfolio 2026", "Developer Handoff — Portfolio 2026" y "Documento de Marca — Ivan Andrade" en Notion, no inventado. El "@AGENTS.md" existente se mantiene sin cambios.
