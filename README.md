# Portfolio 2026 — Iván Andrade

Sitio estático del portfolio profesional de Iván Andrade, Product Designer UX/UI especializado en SaaS B2B, Fintech, Analytics Dashboards y Design Systems.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio local queda disponible en `http://localhost:3000`.

## Verificación

```bash
npx tsc --noEmit
npm run build
```

## Estructura

- `app/`: rutas, layout, metadata y tokens globales.
- `components/`: secciones de la home, navegación, contacto y carruseles.
- `lib/cases.ts`: fuente de datos de los cinco casos publicados.
- `public/projects/`: imágenes optimizadas usadas por el sitio.

El contacto funciona como flujo estático: valida los campos y abre un mensaje precompletado en el cliente de correo del visitante. No hay backend ni envío de formularios desde el servidor.

La estrategia, evidencia, narrativa y criterios de publicación se mantienen en la documentación canónica externa:

`C:/Users/Ivan/OneDrive/Documentos/ChatGPT/Portfolio`

AtlasOne es un caso académico de curso y no forma parte del portfolio profesional.
