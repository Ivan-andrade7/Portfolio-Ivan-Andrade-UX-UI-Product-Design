# AGENTS.md — Portfolio Ivan Andrade UX/UI Product Design

## Contexto del proyecto

Este repositorio corresponde al portfolio profesional de Iván Andrade como Product Designer / UX/UI Designer.

Es una aplicación web construida con Next.js, TypeScript y Tailwind CSS.

El objetivo principal del proyecto es presentar casos de estudio, experiencia, habilidades y contacto profesional.

---

## Arquitectura general

El proyecto utiliza:

- Next.js App Router.
- TypeScript con strict mode.
- Componentes React reutilizables.
- Tailwind CSS.
- Contenido estático gestionado mediante archivos TypeScript.

Estructura principal:

- `app/` → rutas, layouts y endpoints.
- `components/` → componentes visuales reutilizables.
- `lib/` → datos y lógica compartida.
- `public/` → imágenes, documentos y recursos estáticos.

---

## Reglas antes de modificar código

Antes de realizar cambios:

1. Leer siempre `CLAUDE.md`.
2. Revisar la arquitectura existente antes de crear nuevos archivos.
3. Mantener la separación entre contenido, componentes y configuración.
4. No modificar dependencias sin justificar el impacto.
5. No actualizar versiones importantes de frameworks sin confirmación.
6. No realizar cambios masivos sin explicar primero el plan.

---

## Contenido del portfolio

Los casos de estudio viven principalmente en:

`lib/cases.ts`

Ese archivo es la fuente única de información de proyectos.

Al modificar casos:

- respetar los tipos existentes;
- mantener consistencia de slugs;
- no duplicar información;
- no inventar métricas o resultados.

---

## Componentes

Antes de crear un componente nuevo:

- verificar si existe uno reutilizable;
- respetar patrones existentes;
- mantener consistencia visual.

---

## Diseño

El proyecto representa un sistema visual profesional.

Priorizar:

- claridad;
- jerarquía visual;
- accesibilidad;
- consistencia;
- responsive design.

No introducir cambios visuales grandes sin validar intención.

---

## Variables sensibles

Nunca:

- exponer claves API;
- modificar archivos `.env`;
- subir credenciales;
- registrar información privada.

---

## Git

Antes de cambios importantes:

- revisar estado del repositorio;
- realizar cambios pequeños y controlados;
- evitar modificaciones innecesarias.

---

## Regla general

Si existe incertidumbre sobre una decisión técnica o de diseño:

detenerse, explicar el problema y solicitar confirmación antes de modificar.