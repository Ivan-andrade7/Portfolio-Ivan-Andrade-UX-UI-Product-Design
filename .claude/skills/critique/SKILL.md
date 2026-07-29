---
name: critique
description: Audita el portfolio publicado (Home, casos de estudio, componentes o secciones UI) antes de implementar cambios, usando el framework "Lead escéptico con 90 segundos" y las fuentes de estrategia en Notion. Usar cuando el usuario escriba /critique seguido de un alcance, ej. "/critique Home", "/critique sección Selección de UI de Fintech", "/critique portfolio completo". Es de solo lectura: nunca modifica archivos, Notion, Git ni producción.
---

# critique

Auditoría crítica del portfolio de Iván Andrade (Product Designer / UX-UI), simulando a un Head of Design escéptico que revisa el sitio sin ganas de que le vaya bien. El objetivo es encontrar lo que un lead encontraría antes de que lo encuentre él, no confirmar que todo está bien.

Esta skill es de **solo lectura y de diagnóstico**. No implementa cambios: produce hallazgos priorizados para que el usuario decida qué hacer y luego se implemente en una conversación aparte.

## Regla no negociable

Durante una crítica **no se modifica nada**: ni archivos del repo, ni páginas de Notion, ni Git (branches, commits, push), ni producción/deploy. Herramientas permitidas: lectura de código (Read, Grep, Glob), lectura de Notion (`notion-search`, `notion-fetch`), y navegación de solo lectura del sitio publicado (browser: navegar, leer texto/DOM, capturar pantalla). No usar Edit, Write, Bash mutante, `notion-create-*`, `notion-update-*`, ni ningún comando de git que altere estado.

No inventar métricas, research, validaciones ni resultados de negocio en ningún hallazgo ni recomendación. Si algo no está documentado ni es verificable, se marca explícitamente como no verificable — nunca se completa con un supuesto presentado como hecho.

## Alcance (argumento después de `/critique`)

La skill recibe un alcance concreto como argumento, por ejemplo:

- `/critique Home`
- `/critique sección Selección de UI de Fintech`
- `/critique portfolio completo`
- `/critique componente ProjectCard`
- `/critique caso GardenAds`

Si no se especifica alcance, preguntar cuál es antes de empezar (no asumir "portfolio completo" por defecto).

Mapeo orientativo de alcance → dónde mirar (arquitectura real, ver `CLAUDE.md`):

| Alcance | Código a revisar | Ruta del sitio |
|---|---|---|
| Home | `app/page.tsx` y los componentes que compone (Navbar, Hero, Marquee, Projects, ProjectCard, CtaMid, About, Skills, Experience, Education, Testimonials, CtaFinal, Contact, Footer) | `/` |
| Un caso de estudio | La entrada correspondiente en `CASES` (`lib/cases.ts`, por `slug`) y `app/proyectos/[slug]/page.tsx` | `/proyectos/<slug>` |
| Galería / selección de UI de un caso | Campos `images`, `heroImages`, `pantallas`, `designSystem` de ese caso en `lib/cases.ts`, y el componente que renderiza la galería (`components/UICarousel.tsx`) | `/proyectos/<slug>` (sección de pantallas) |
| Un componente puntual | El archivo en `components/` y cada sección donde se usa | Donde se use |
| Portfolio completo | Todo lo anterior para Home + los 5 casos en `lib/cases.ts` | Sitio completo |

Los slugs vigentes se confirman leyendo `lib/cases.ts` (no asumir de memoria cuáles son: la lista de casos del sitio real puede diferir de lo que digan los documentos de Notion — ver "Contradicciones" más abajo).

## Fuentes de estrategia en Notion

Antes de emitir hallazgos, consultar (con `notion-fetch`, en fresco — no asumir contenido de memoria porque son documentos vivos que cambian):

1. **"Plan prioritario — Mejora del portfolio y galerías UI"** — `https://app.notion.com/p/3ab194b0e2d881c5bb45fc23ebb55d1c` — diagnóstico vigente de galerías UI, Home y plan por etapas P0–P3. Es la fuente más reciente sobre el estado real del sitio.
2. **"Auditoría de Casos — Framework 'Lead Escéptico'"** — `https://app.notion.com/p/394194b0e2d88157b629d33342b23632` — define el framework de los 90 segundos y el detalle caso por caso (decisiones/trade-offs, outcome honesto, rol vs. equipo).
3. **"Portfolio profesional — Estrategia y ejecución"** — `https://app.notion.com/p/e4b194b0e2d883abb9df8103da46c88c` — posicionamiento, arquitectura del sitio, identidad visual, copy objetivo de Home y de cada caso. Es una página muy larga (>150k caracteres): si `notion-fetch` falla por exceder el límite de tokens, el resultado queda guardado en un archivo de texto; usar Grep sobre ese archivo para localizar los encabezados (`##`) relevantes al alcance pedido en vez de leerlo completo (ej. para Home: secciones "00. Dashboard general", "02. Arquitectura del sitio", "03. Identidad visual", "04. Home"; para un caso: "05. Casos de estudio").

Si Notion no está disponible, indicarlo como limitación explícita en el reporte final y continuar la crítica solo con sitio real y código.

## Método

### 1. Reunir contexto (sin modificar nada)

- Fetch de las fuentes de Notion relevantes al alcance.
- Lectura del código relevante (`lib/cases.ts`, componentes, ruta afectada).
- Si el sitio publicado está disponible, navegarlo y revisarlo tal como lo vería un visitante (no solo el código): usar las herramientas de navegador de solo lectura. Si no está disponible, decirlo explícitamente y trabajar solo con código.

### 2. Separar hechos, inferencias y no verificable

Para cada observación, clasificarla como:

- **Hecho observado**: algo visto directamente en el sitio publicado o leído directamente en el código/Notion (citar dónde: archivo+línea, sección de Notion, o "sitio en vivo, ruta X").
- **Inferencia**: interpretación razonable a partir de hechos, pero no confirmada (ej. "probablemente esto genera desconfianza en un recruiter porque...").
- **No verificable**: research, validaciones con usuarios, métricas de negocio reales o decisiones internas que no están documentadas ni son observables. Nunca se completa este vacío inventando un dato; se deja marcado como pendiente de confirmar con el usuario.

No mezclar los tres tipos en una misma afirmación sin distinguirlos.

### 3. Test del "Lead escéptico con 90 segundos"

Por cada pieza revisada (Home, un caso, una sección), responder:

1. ¿Se entiende qué se hizo y su impacto en 90 segundos?
2. ¿Qué queda sin responder?
3. ¿Dónde falta el "por qué" (la decisión y su trade-off, no solo el resultado)?

### 4. Evaluar

Revisar explícitamente cada uno de estos ejes (marcar "no aplica" si el alcance no lo incluye, no omitirlo en silencio):

- posicionamiento y claridad;
- jerarquía visual;
- usabilidad;
- contenido y narrativa;
- rol personal frente al equipo;
- decisiones y trade-offs;
- resultados y evidencia honesta;
- calidad de imágenes UI;
- consistencia;
- responsive;
- accesibilidad;
- performance y fallos técnicos visibles.

Criterios recurrentes ya identificados en la documentación (útiles como checklist, no como hallazgos dados por hechos — hay que re-verificar contra el estado actual del sitio/código):

- ¿La capa de decisiones + trade-offs está presente y explícita, o solo se ve el qué/cómo?
- ¿El outcome está enmarcado con honestidad (validación, estimación fundamentada y rotulada como tal, o resultado esperado), o hay un vacío ("¿y entonces qué?") o un número sin respaldo?
- ¿El rol personal vs. el del equipo queda claro en los primeros segundos, en proyectos grupales?
- Galerías UI: ¿las capturas completas de producto se muestran enteras (sin recorte automático tipo `object-cover`) o se pierde información relevante dentro de un marco fijo? Un recorte solo es aceptable si es intencional y está documentado como detalle de una decisión.
- ¿Todas las imágenes cargan en producción (sin huecos, fallback roto, o assets con nombre/ruta desalineados)?

### 5. Revisar sitio real y código

Cruzar lo que dicen los documentos de estrategia contra lo que efectivamente hay:

- en el sitio publicado (si es accesible), y
- en el código (`lib/cases.ts`, componentes, rutas).

### 6. Señalar contradicciones

Marcar explícitamente cualquier discrepancia entre:

- el sitio publicado y el código (ej. algo que el código implementa distinto de lo que se ve en producción, posible problema de build/deploy/caché);
- el código y la estrategia documentada (ej. orden de proyectos, nombres de casos, copy congelado en Notion que no coincide con lo publicado);
- los propios documentos de Notion entre sí (pueden estar desactualizados unos respecto a otros — priorizar el de fecha de edición más reciente y señalar el conflicto en vez de resolverlo por cuenta propia).

No decidir en silencio cuál fuente "gana": reportar la contradicción y dejar que el usuario confirme.

### 7. Clasificar hallazgos

- **P0**: roto, bloqueante o genera desconfianza (ej. imagen rota, dato que parece inventado, contradicción flagrante).
- **P1**: alto impacto estratégico (ej. jerarquía de Home, caso insignia mal posicionado, falta la capa de decisiones en el caso principal).
- **P2**: mejora importante pero no bloqueante.
- **P3**: pulido.

### 8. Priorizar acciones

Elegir **máximo cinco** acciones a partir de los hallazgos y explicar por qué van en ese orden (impacto en confianza/credibilidad primero, luego impacto estratégico, luego pulido). No proponer más de cinco: si hay más hallazgos válidos, quedan listados pero fuera del plan de acción inmediato.

## Formato de salida

Terminar siempre con esta estructura, en este orden:

1. **Qué funciona** — lo que ya cumple el objetivo, con evidencia.
2. **Hallazgos priorizados** — lista con severidad (P0–P3), cada uno con: hecho observado / inferencia / no verificable claramente distinguidos, y ubicación exacta (archivo+línea, sección de Notion, o ruta del sitio).
3. **Recomendación** — postura clara sobre qué atacar primero y por qué.
4. **Plan de acción** — máximo 5 acciones ordenadas, con la razón de ese orden.
5. **Definition of Done** — condiciones concretas y verificables para dar por resuelta cada acción del plan.
6. **Preguntas abiertas** — todo lo que quedó en "no verificable" y requiere una respuesta del usuario antes de implementar (nunca completarlo por cuenta propia).
