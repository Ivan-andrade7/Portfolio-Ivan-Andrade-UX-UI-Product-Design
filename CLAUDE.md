# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Objetivo del proyecto

Este repositorio contiene el portfolio profesional de Iván Andrade como Product Designer / UX/UI Designer.

El objetivo es mantener un portfolio:
- profesional;
- recruiter-friendly;
- claro;
- orientado a producto digital.

## Comandos

- `npm run dev` — servidor de desarrollo (http://localhost:3000).
- `npm run build` — build de producción.
- `npm run start` — sirve el build de producción.

No hay scripts de lint ni de test configurados en `package.json`.

## Arquitectura

- Landing single-page: `app/page.tsx` compone las secciones en orden fijo (Navbar, Hero, Marquee, Projects, CtaMid, About, Skills, Experience, Education, Testimonials, CtaFinal, Contact, Footer). No hay rutas propias más allá de los casos de estudio.
- Casos de estudio: ruta dinámica `app/proyectos/[slug]/page.tsx`, con `generateStaticParams` generado a partir de `lib/cases.ts` (SSG). Todo el contenido de cada caso vive en el array `CASES` (tipo `CaseStudy`); `getCaseBySlug(slug)` resuelve la página. No hay CMS ni fetch externo: el contenido es 100% estático en TypeScript.
- `CaseStudy` (en `lib/cases.ts`) estructura cada proyecto en: metadata (`slug`, `tags`, `title`, `subtitle`, `links` a Figma/Behance), `context` (rol, duración, foco, tools), narrativa (`description`, `problema`, `estrategia`, `decisions: Decision[]`, `reflection`), assets (`images`, `heroImages` desktop/tablet/mobile, `pantallas`), `designSystem` opcional y `metrics: Metric[]`. `prev`/`next` (`NavItem`) arman la navegación entre casos.
- Theming: tokens CSS definidos en `app/globals.css` (`:root` = tema dark, `html.light` = tema light) y consumidos como `var(--token)` directamente en los componentes, no como clases de color de Tailwind. `ThemeProvider` (`components/ThemeProvider.tsx`) es un context client-side que alterna las clases `dark`/`light` en `<html>` y persiste la preferencia en `localStorage`; dark es el tema por defecto (`app/layout.tsx` fuerza la clase `dark` en el SSR inicial para evitar flash).
- Formulario de contacto: `app/api/contact/route.ts` (Route Handler) envía el mensaje vía Resend (`RESEND_API_KEY` en `.env.local`, no versionado) a un inbox fijo.
- Imágenes de cada caso en `public/projects/` (hero desktop/tablet/mobile + screens numerados), referenciadas por ruta desde `lib/cases.ts`.
- Deploy en Vercel; `next.config.ts` habilita `remotePatterns` para servir imágenes desde la API de assets de Figma.
- Fuentes vía `next/font/google` en `app/layout.tsx`: Inter (`--font-inter`, texto) y JetBrains Mono (`--font-jetbrains-mono`, acentos/mono).
- Alias de import `@/*` → raíz del repo (definido en `tsconfig.json`).

## Prioridades de trabajo

Antes de realizar cambios considerar:

1. Impacto visual.
2. Consistencia del sistema de diseño.
3. Experiencia del usuario.
4. Performance.
5. Mantenibilidad del código.

No modificar contenido, casos de estudio o decisiones de diseño sin confirmación explícita.

## Reglas operativas

### Git y despliegue
- Trabajar siempre en una rama de trabajo; nunca modificar `main` directamente.
- No hacer deploy, merge, push ni crear PR sin aprobación explícita del usuario.

### Variables de entorno
- No leer, mostrar, registrar ni versionar valores de `.env.local`.

### Dependencias
- No ejecutar `npm audit fix` ni `npm audit fix --force`, ni actualizar dependencias, salvo pedido explícito del usuario.

### Antes de editar
- Inspeccionar el código relevante y explicar el alcance del cambio antes de modificarlo.
- Mantener el sistema visual existente salvo que la tarea autorice explícitamente un rediseño.

### Antes de dar por terminada una implementación
- Validar los cambios en 1440px, 834px y 390px.
- Ejecutar `npm run build` y confirmar que no haya errores.

### Galerías e imágenes
- En galerías UI, no usar `object-cover` sobre capturas completas salvo recorte intencional y documentado.

### Contenido de los casos
- No inventar métricas, resultados de negocio, validaciones ni evidencia (cualitativa o cuantitativa) para los casos de estudio.