export interface Decision {
  id: string;
  title: string;
  motivo: string;
  impacto: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface DesignSystem {
  title: string;
  foundations: string;
  components: string[];
}

export interface NavItem {
  slug: string;
  title: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  tags: string[];
  title: string;
  subtitle: string;
  links: { figma: string; behance: string };
  context: {
    rol: string;
    duracion: string;
    focoLabel: string;
    foco: string;
    tools: string;
  };
  description: string;
  problema: { title: string; body: string };
  estrategia: string;
  decisions: Decision[];
  images: string[];
  pantallas?: string[];
  designSystem?: DesignSystem;
  metrics: Metric[];
  reflection: string;
  prev?: NavItem;
  next?: NavItem;
}

export const CASES: CaseStudy[] = [
  {
    slug: "garden-ads",
    tags: ["Analytics SaaS", "Analytics", "2026"],
    title: "GardenAds — Attribution & Tracking Health",
    subtitle:
      "La única plataforma que alerta sobre fallos de tracking antes de que destruyan tu atribución.",
    links: {
      figma: "https://www.figma.com/design/PNZKPUCsJNb9Mq5LFgIhJ2/Plataforma-de-ecommerce---NC--Legal-Tech-_-SaaS-?node-id=0-1&t=F30YoahuVttg9B5y-1",
      behance: "https://www.behance.net/gallery/245704303/GardenAds-Attribution-Tracking-Health-Platform",
    },
    context: {
      rol: "Único Diseñador UX/UI",
      duracion: "5 semanas · 2026",
      focoLabel: "Contexto",
      foco: "Simulación No Country",
      tools: "Figma · FigJam · Notion",
    },
    description:
      "GardenAds es una plataforma analytics B2B SaaS para marketing managers, fundadores y sales ops que necesitan entender el rendimiento real de sus campañas. El problema central: ninguna plataforma existente alertaba proactivamente sobre fallos de tracking, generando pérdidas de atribución invisibles con impacto financiero directo.",
    problema: {
      title: "Pérdida silenciosa de atribución",
      body: "Los equipos de marketing B2B sufren pérdida silenciosa de datos por fallos de tracking no detectados: un píxel roto, un UTM mal configurado o una integración caída pueden pasar semanas sin detectarse, generando decisiones de inversión basadas en datos incorrectos.\n\nConstraints: 5 semanas, único diseñador, alcance end-to-end (research → handoff). Objetivo: detectar esos fallos y traducir el dolor técnico en impacto financiero concreto que un perfil no técnico pueda entender.",
    },
    estrategia:
      "Arranqué con un análisis competitivo de 5 plataformas (GA4, Mixpanel, Amplitude, Segment, HubSpot). El hallazgo unánime: ninguna tiene un diagnóstico proactivo de salud del tracking. Ese gap definió el feature central.\n\nDefiní RBAC para 6 arquetipos de usuario y una arquitectura de navegación Dashboard → Tracking Health → Atribución, priorizando que el usuario confíe en el dato antes de profundizar.",
    decisions: [
      {
        id: "01",
        title: "Tracking Health como funcionalidad central del MVP",
        motivo:
          "Ninguno de los 5 competidores analizados tiene una funcionalidad equivalente — es el diferencial real del producto.",
        impacto:
          "Alerta proactiva de anomalías antes de que el problema consuma presupuesto de campaña.",
      },
      {
        id: "02",
        title: "Cada rol arranca en una vista personalizada, no en un dashboard genérico",
        motivo:
          "Los 6 arquetipos (Marketing Manager, Founder, Sales Ops, Data Analyst, Admin, Developer) tienen necesidades muy distintas.",
        impacto: "Relevancia inmediata y menos fricción: cada usuario ve primero lo que le importa.",
      },
      {
        id: "03",
        title: "Health Score 0–100 con impacto financiero en tiempo real",
        motivo: "Un perfil no técnico necesita entender el problema en plata, no en logs.",
        impacto: "Traduce un dolor técnico en una decisión de negocio concreta.",
      },
    ],
    images: ["/projects/garden-ads.png"],
    pantallas: [
      "https://www.figma.com/api/mcp/asset/e10bd425-3eda-422f-8429-72cb8942e482",
      "https://www.figma.com/api/mcp/asset/434cd69b-a96a-4a0a-9ce8-bf5ed7957271",
      "https://www.figma.com/api/mcp/asset/62444c21-0866-4685-81d6-90815340e648",
      "https://www.figma.com/api/mcp/asset/4d2cc230-ac71-4b3c-88b2-4ded699fd9a9",
      "https://www.figma.com/api/mcp/asset/4af01999-9441-4868-ac67-08e24e0fdf4d",
    ],
    designSystem: {
      title: "Canopy DS · Emerald Garden",
      foundations:
        "Paleta Emerald Garden, 11 estilos tipográficos, fundaciones de espaciado e iconografía. 40+ componentes y 40+ líneas de design tokens exportados en JSON.",
      components: [
        "Tracking Health Score widget",
        "KPI cards con tendencia",
        "Alert system con severity levels",
        "RBAC permission matrix",
        "OAuth onboarding stepper",
      ],
    },
    metrics: [
      { value: "0", label: "competidores con tracking health proactivo" },
      { value: "40+", label: "componentes en el design system" },
      { value: "6", label: "roles RBAC diferenciados" },
    ],
    reflection:
      "El feature diferencial surgió del análisis competitivo, no de la intuición: sin revisar 5 plataformas a fondo nunca habría detectado el gap. Y diseñar para múltiples roles exige reflejar la arquitectura de permisos antes de abrir Figma —no después.",
    next: {
      slug: "fintech",
      title: "Fintech PYME — Plataforma de Créditos B2B",
      role: "Lead UX/UI Designer · No Country · 2025",
    },
  },
  {
    slug: "fintech",
    tags: ["Fintech", "SaaS B2B", "2025"],
    title: "Fintech PYME — Plataforma de Créditos B2B",
    subtitle: "De proceso manual fragmentado a plataforma dual de créditos B2B.",
    links: {
      figma: "https://www.figma.com/design/JCq729uNiFQGcy3Pa4FgN7/Plataforma-Web-de-Onboarding-de-Cr%C3%A9ditos-para-PYMES?node-id=4636-25615&t=kkn0iD5pdC92jTca-1",
      behance: "https://www.behance.net/gallery/237822185/Plataforma-Fintech-B2B-para-Onboarding-de-Crditos-PYME",
    },
    context: {
      rol: "Lead UX/UI Designer",
      duracion: "2 meses · Sep–Oct 2025",
      focoLabel: "Equipo",
      foco: "Multidisciplinario · No Country",
      tools: "Figma · FigJam · Notion",
    },
    description:
      "Diseñé una plataforma de onboarding de créditos para PyMEs con dos superficies diferenciadas: un portal cliente y un panel admin. El objetivo era digitalizar un proceso manual, reducir la fricción operativa y mejorar la trazabilidad para ambos lados de la operación.",
    problema: {
      title: "Onboarding manual, lento y sin trazabilidad",
      body: "El alta de crédito para PyMEs era un proceso manual y fragmentado: formularios sueltos, validación por fuera del sistema y cero visibilidad del estado para el solicitante.\n\nEl solicitante no sabía en qué paso estaba ni qué le faltaba; el operador no tenía una vista única para revisar, aprobar o pedir correcciones.",
    },
    estrategia:
      "Separé la operación en dos superficies con objetivos distintos: el Solicitante PyME (completar y enviar) y el Supervisor/Operador (revisar, aprobar, auditar), en vez de forzar una sola plataforma para ambos.\n\nDiseñé un onboarding KYC de 4 pasos con progreso siempre visible y construí un sistema de componentes desde cero con dark mode nativo y accesibilidad WCAG AA.",
    decisions: [
      {
        id: "01",
        title: "Dos superficies separadas: portal cliente y panel admin",
        motivo:
          "Solicitante y supervisor tienen objetivos opuestos; una plataforma unificada generaría errores operativos.",
        impacto: "Menos errores, mejor trazabilidad y una experiencia enfocada para cada rol.",
      },
      {
        id: "02",
        title: "KYC en 4 pasos con progreso visible",
        motivo:
          "Un alta larga sin feedback de avance dispara el abandono y la incertidumbre.",
        impacto: "El solicitante siempre sabe en qué paso está y qué le falta.",
      },
      {
        id: "03",
        title: "RBAC pensado como UX, no solo como capa técnica",
        motivo:
          "Los permisos definen qué ve y qué puede hacer cada operador; impactan directo en la interfaz.",
        impacto:
          "Cada operador ve exactamente lo que necesita, sin acciones que no le corresponden.",
      },
    ],
    images: ["/projects/fintech.png"],
    pantallas: [
      "https://www.figma.com/api/mcp/asset/08330f77-16ec-408f-bed8-87bc81536407",
      "https://www.figma.com/api/mcp/asset/96b7a25f-356f-4c49-9f42-5c1015818a41",
      "https://www.figma.com/api/mcp/asset/97a93375-fb9c-4973-b61f-94dc155d66e1",
      "https://www.figma.com/api/mcp/asset/f4f52d19-38b8-4367-9188-c0b6419b44b9",
      "https://www.figma.com/api/mcp/asset/310f1794-4ea2-4357-a8ce-228f5fac18a6",
    ],
    designSystem: {
      title: "Sistema de componentes desde cero",
      foundations:
        "120+ componentes con dark mode nativo, accesibilidad WCAG AA y una arquitectura dual (portal + admin) que comparte foundations y tiene superficies.",
      components: [
        "KYC stepper de 4 pasos",
        "Estatus de solicitud",
        "Tablas de revisión con filtros",
        "Matriz de permisos RBAC",
        "Formularios con validación inline",
      ],
    },
    metrics: [
      { value: "120+", label: "componentes en el sistema" },
      { value: "100%", label: "del proceso digitalizado" },
      { value: "2", label: "superficies diferenciadas" },
    ],
    reflection:
      "Separar las dos superficies temprano fue la decisión que ordenó todo lo demás. Diseñar el RBAC como parte de la UX —y no como un detalle técnico del final— evitó rehacer pantallas más adelante.",
    prev: {
      slug: "garden-ads",
      title: "GardenAds — Attribution & Tracking Health",
      role: "UX/UI Designer · No Country · 2026",
    },
    next: {
      slug: "crm",
      title: "ChatCRM — CRM para PyMEs",
      role: "UX/UI Designer · No Country · 2024",
    },
  },
  {
    slug: "crm",
    tags: ["CRM", "SaaS B2B", "2024"],
    title: "ChatCRM — CRM para PyMEs",
    subtitle: "Centralizar conversaciones y pipeline para no perder contexto comercial.",
    links: {
      figma: "https://www.figma.com/design/bIFrL2uQ9F2ncrmVQo8IjC/Startup-CRM---Cross-Industry?node-id=62-133&t=dkT3NDrn7WMHkD70-1",
      behance: "https://www.behance.net/gallery/248459859/Startup-CRM-Plataforma-SaaS-UXUI?platform=direct",
    },
    context: {
      rol: "UX/UI Designer",
      duracion: "No Country · 2026",
      focoLabel: "Foco",
      foco: "Operación · Pipeline · Handoff",
      tools: "Figma · FigJam",
    },
    description:
      "ChatCRM unifica la información comercial que hoy vive dispersa en WhatsApp, email y notas sueltas. El foco fue la operación diaria del equipo de ventas y la trazabilidad del pipeline, con el handoff a desarrollo como entregable primario.",
    problema: {
      title: "Información comercial dispersa y sin trazabilidad",
      body: "La información de cada prospecto estaba repartida entre WhatsApp, mail y notas personales. Al cambiar de responsable o retomar un lead, el contexto se perdía.\n\nEl mercado de CRM crece ~14% anual, pero la adopción en PyMEs es baja justamente por herramientas pesadas y poco claras para equipos chicos.",
    },
    estrategia:
      "Puse el pipeline visual kanban como pantalla principal: el estado de cada oportunidad se ve de un vistazo y se mueve con drag & drop.\n\nEstructuré las variables en dos niveles (primitivos → semánticos) y traté el handoff como entregable principal, no como un extra del final.",
    decisions: [
      {
        id: "01",
        title: "Pipeline kanban como pantalla principal",
        motivo:
          "El equipo necesita ver y mover el estado de las oportunidades sin entrar a cada ficha.",
        impacto:
          "Menos clics, contexto compartido y trazabilidad del pipeline en una sola vista.",
      },
      {
        id: "02",
        title: "Variables en dos niveles: primitivos → semánticos",
        motivo:
          "Separar el valor crudo del uso semántico permite escalar y mantener el sistema sin romper pantallas.",
        impacto:
          "Cambios de marca o tema sin tocar cada componente; base lista para dark mode.",
      },
      {
        id: "03",
        title: "Handoff como entregable primario",
        motivo:
          "En un equipo real el diseño solo vale si el dev lo puede construir sin ambigüedades.",
        impacto:
          "12 secciones de handoff documentadas; menos idas y vueltas con desarrollo.",
      },
    ],
    images: ["/projects/crm.png"],
    pantallas: [
      "https://www.figma.com/api/mcp/asset/5f43a93b-6a5b-44c0-8d40-dff97ed2bd1f",
      "https://www.figma.com/api/mcp/asset/e9e1c24f-3696-4aaf-be02-974de8c1c17a",
      "https://www.figma.com/api/mcp/asset/16dbadee-e013-450c-bb0c-100e6c593fe1",
      "https://www.figma.com/api/mcp/asset/5ba6060e-6dc5-4f75-b070-a417e97cee74",
      "https://www.figma.com/api/mcp/asset/d652ef68-0d5c-4203-ae09-0794dc09e44e",
    ],
    metrics: [
      { value: "8", label: "pantallas core" },
      { value: "12", label: "secciones de handoff" },
      { value: "2", label: "niveles de variables" },
    ],
    reflection:
      "Tratar el handoff como entregable principal cambió cómo diseñé: pensar en cómo se construye cada componente, no solo cómo se ve, hace que el sistema sea mucho más sólido.",
    prev: {
      slug: "fintech",
      title: "Fintech PYME — Plataforma de Créditos B2B",
      role: "Lead UX/UI Designer · No Country · 2025",
    },
    next: {
      slug: "multi-brand",
      title: "Multi-Brand Design System",
      role: "UX/UI Designer · No Country · 2025",
    },
  },
  {
    slug: "multi-brand",
    tags: ["Design System", "EdTech", "2025"],
    title: "Multi-Brand Design System",
    subtitle: "Un sistema de diseño que escala dos marcas sin duplicar trabajo.",
    links: {
      figma: "https://www.figma.com/design/RfCquxoqVi6x3bipKzBpoQ/Doc-Ed-Tech_No-country?node-id=0-1&t=REJ14uqOSn8jxSr5-1",
      behance: "https://www.behance.net/gallery/240712809/Multi-Brand-Design-System",
    },
    context: {
      rol: "UX/UI Designer",
      duracion: "No Country · 2025",
      focoLabel: "Foco",
      foco: "Tokens · Arquitectura · Escala",
      tools: "Figma · Variables",
    },
    description:
      "Diseñé el sistema visual y la arquitectura de tokens para una plataforma EdTech con dos identidades diferenciadas: Academy (17+) y Kids (6–16). El sistema comparte el 70% de los tokens y varía el 30% por marca.",
    problema: {
      title: "Fragmentación visual entre productos",
      body: "La plataforma EdTech tenía múltiples productos con identidades inconsistentes: cada equipo resolvía el estilo por su cuenta, duplicando trabajo y rompiendo la coherencia.\n\nSe necesitaban dos marcas con personalidad propia —Academy profesional y Kids lúdica— sin mantener dos sistemas separados.",
    },
    estrategia:
      "Definí una arquitectura de 70% tokens compartidos + 30% tokens de marca: la estructura es única y solo cambian color, tipografía y radios por identidad.\n\nUsé naming semántico (no descriptivo) para que cambiar de marca sea cambiar un modo, no reemplazar valores en cada componente.",
    decisions: [
      {
        id: "01",
        title: "70% tokens compartidos + 30% de marca",
        motivo:
          "Compartir la estructura evita mantener dos sistemas; variar solo lo identitario da personalidad sin duplicar.",
        impacto: "Reducción estimada de 30–45% del tiempo de desarrollo entre marcas.",
      },
      {
        id: "02",
        title: "Naming semántico, no descriptivo",
        motivo:
          "Un token llamado por su función (no por su color) sobrevive a los cambios de marca y tema.",
        impacto: "Cambiar de Academy a Kids es cambiar un modo, sin tocar componentes.",
      },
      {
        id: "03",
        title: "Dos identidades sobre una misma base",
        motivo:
          "Academy (17+, teal profesional) y Kids (6–16, violeta lúdico) hablan a públicos distintos.",
        impacto: "Cada marca se siente propia compartiendo el 70% del sistema.",
      },
    ],
    images: ["/projects/multi-brand.png"],
    pantallas: [
      "https://www.figma.com/api/mcp/asset/2b1c88ec-929a-4e67-bddd-ca6d78e130ad",
      "https://www.figma.com/api/mcp/asset/aff2b240-059c-43b8-8176-e208348dae08",
      "https://www.figma.com/api/mcp/asset/4b6a0f3d-7d64-4a9b-9614-ab51fa92bb70",
      "https://www.figma.com/api/mcp/asset/c0c91efd-6c39-4d92-9e59-705f646f37b3",
      "https://www.figma.com/api/mcp/asset/d1f15577-752c-4528-9205-546be4d82b1a",
    ],
    designSystem: {
      title: "Arquitectura de tokens multimarca",
      foundations:
        "80+ componentes documentados sobre una base de tokens compartidos al 70%, con naming semántico y modos por marca (Academy / Kids).",
      components: [
        "Tokens primitivos y semánticos",
        "Modos de marca (Academy / Kids)",
        "Escala tipográfica por marca",
        "Componentes tematizados",
        "Documentación de uso",
      ],
    },
    metrics: [
      { value: "80+", label: "componentes documentados" },
      { value: "70%", label: "tokens compartidos" },
      { value: "30-45%", label: "menos tiempo de desarrollo" },
    ],
    reflection:
      "El naming semántico fue lo que hizo escalable al sistema. Si los tokens se hubieran llamado por su color, cada marca nueva habría implicado rehacer medio sistema.",
    prev: {
      slug: "crm",
      title: "ChatCRM — CRM para PyMEs",
      role: "UX/UI Designer · No Country · 2024",
    },
    next: {
      slug: "trainit",
      title: "TrainiT — Gestión de Proyectos",
      role: "UX/UI Designer Jr. · No Country · 2025",
    },
  },
  {
    slug: "trainit",
    tags: ["SaaS B2B", "Kanban", "2025"],
    title: "TrainiT — Gestión de Proyectos",
    subtitle: "Flujos de gestión de proyectos que el equipo realmente quiere usar.",
    links: {
      figma: "https://www.figma.com/design/hVoZTFVZtIfZ2H9JNETvhE/Nuevo---PGT-Gesti%C3%B3n-de-tareas?node-id=1-2",
      behance: "https://www.behance.net/gallery/240653385/TrainiT-PGT-%28Plataforma-de-Gestion-de-Proyectos%29",
    },
    context: {
      rol: "UX/UI Designer Jr",
      duracion: "3 sprints · No Country · 2025",
      focoLabel: "Foco",
      foco: "Flujos · Liderazgo",
      tools: "Figma · FigJam",
    },
    description:
      "Diseñé e iteré los flujos principales de TrainiT: dashboard, backlog, kanban, módulo de miembros y configuración. Coordiné el diseño durante 3 sprints, pasando por rondas de feedback técnico real.",
    problema: {
      title: "Herramientas dispares para gestionar proyectos",
      body: "El equipo gestionaba proyectos con herramientas dispersas: una para tareas, otra para seguimiento, otra para el equipo. El contexto se perdía entre saltos.\n\nFaltaba un punto de entrada claro: la gente abría directamente el tablero sin una vista que resumiera el estado general.",
    },
    estrategia:
      "Definí el Dashboard como entrada de la herramienta —no el kanban— para que el usuario entienda el estado general antes de operar.\n\nSeparé Kanban y Backlog en módulos distintos, e iteré los flujos durante 3 sprints con feedback técnico real.",
    decisions: [
      {
        id: "01",
        title: "Dashboard como entrada, no el kanban",
        motivo:
          "Entrar directo al tablero da detalle sin contexto; el usuario necesita primero el panorama.",
        impacto:
          "El equipo entiende el estado general antes de meterse en una tarea puntual.",
      },
      {
        id: "02",
        title: "Kanban y Backlog como módulos separados",
        motivo:
          "Mezclar el trabajo en curso con el pendiente genera ruido y desorganiza la vista.",
        impacto:
          "Cada módulo cumple un rol claro: ejecutar (kanban) vs priorizar (backlog).",
      },
      {
        id: "03",
        title: "Iteración en 3 sprints con feedback técnico",
        motivo:
          "Validar con desarrollo en cada sprint evita diseñar flujos imposibles de construir.",
        impacto:
          "Flujos refinados y realistas, alineados con lo que el equipo podía implementar.",
      },
    ],
    images: ["/projects/trainit.png"],
    pantallas: [
      "https://www.figma.com/api/mcp/asset/78bd473d-bb98-4b8f-b1b3-01f01fd0b9bf",
      "https://www.figma.com/api/mcp/asset/47d20446-57d7-47a1-a650-482ebea818c2",
      "https://www.figma.com/api/mcp/asset/81c36264-5a76-4a4f-93f0-9cd12ec84963",
      "https://www.figma.com/api/mcp/asset/b3869ce3-9a26-4b8e-a120-cb168dc0a51c",
      "https://www.figma.com/api/mcp/asset/3d7b3b73-9ff8-4e1b-8cc4-6b144f309f93",
    ],
    metrics: [
      { value: "4", label: "módulos core" },
      { value: "3", label: "sprints de iteración" },
      { value: "1", label: "equipo coordinado" },
    ],
    reflection:
      "Poner el dashboard como entrada fue contraintuitivo pero correcto: el kanban es potente, pero sin contexto previo aturde. Iterar con desarrollo en cada sprint me enseñó a diseñar para lo que se puede construir.",
    prev: {
      slug: "multi-brand",
      title: "Multi-Brand Design System",
      role: "UX/UI Designer · No Country · 2025",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
