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
  published?: boolean;
  tags: string[];
  title: string;
  subtitle: string;
  links: { figma: string; behance: string; demo?: string };
  context: {
    rol: string;
    duracion: string;
    focoLabel: string;
    foco: string;
    tools: string;
  };
  description: string;
  notice?: string;
  problema: { title: string; body: string };
  estrategia: string;
  decisions: Decision[];
  images: string[];
  heroImages?: { desktop: string; tablet: string; mobile: string };
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
      "Una plataforma analytics B2B SaaS para detectar fallos de tracking antes de que afecten la atribución.",
    links: {
      figma: "https://www.figma.com/design/PNZKPUCsJNb9Mq5LFgIhJ2/Plataforma-de-ecommerce---NC--Legal-Tech-_-SaaS-?node-id=0-1&t=F30YoahuVttg9B5y-1",
      behance: "https://www.behance.net/gallery/245704303/GardenAds-Attribution-Tracking-Health-Platform",
      demo: "https://s02-26-equipo-03-web-app-developmen-green.vercel.app",
    },
    context: {
      rol: "Diseñador UX/UI",
      duracion: "5 semanas · 2026",
      focoLabel: "Contexto",
      foco: "Proyecto colaborativo · No Country",
      tools: "Figma · FigJam · Notion",
    },
    description:
      "GardenAds explora la propuesta de una plataforma analytics B2B SaaS para marketing managers, fundadores y sales ops que necesitan entender el rendimiento de sus campañas. La implementación pública verificada corresponde a una landing parcial; dos secciones todavía muestran un placeholder y un componente superpuesto.",
    notice:
      "Proyecto de No Country trabajado con diseñadores y desarrolladores. El deploy público verificado corresponde a una landing parcial: dos secciones siguen incompletas (placeholder y componente superpuesto). Presentarlo como demo parcial, no como plataforma completa ni como evidencia de resultados de negocio.",
    problema: {
      title: "Pérdida silenciosa de atribución",
      body: "El caso parte de un problema de diseño: un píxel roto, un UTM mal configurado o una integración caída pueden pasar inadvertidos y afectar la lectura de las campañas.\n\nConstraints: 5 semanas y alcance end-to-end (research → handoff). Objetivo: hacer visible ese riesgo y traducirlo a una señal que un perfil no técnico pueda entender.",
    },
    estrategia:
      "Arranqué con un benchmark de 6 plataformas (GA4, Mixpanel, Amplitude, Segment, HubSpot, entre otras). El análisis sugirió un espacio para explorar un diagnóstico proactivo de salud del tracking.\n\nEl alcance diseñado contemplaba RBAC para 6 arquetipos y una arquitectura Dashboard → Tracking Health → Atribución; la implementación pública disponible no cubre todavía todas esas superficies.",
    decisions: [
      {
        id: "01",
        title: "Tracking Health como funcionalidad central del MVP",
        motivo:
          "El benchmark revisó 6 plataformas y no documentó una funcionalidad equivalente con el mismo enfoque.",
        impacto:
          "Propone alertas proactivas de anomalías antes de que el problema avance.",
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
        title: "Health Score 0–100 para visualizar impacto financiero estimado",
        motivo: "Un perfil no técnico necesita entender el problema en plata, no en logs.",
        impacto: "Busca traducir un problema técnico a una señal comprensible para negocio.",
      },
    ],
    images: ["/projects/garden-ads.png"],
    heroImages: {
      desktop: "/projects/garden-ads-hero-desktop.png",
      tablet: "/projects/garden-ads-hero-tablet.png",
      mobile: "/projects/garden-ads-hero-mobile.png",
    },
    pantallas: [
      "/projects/garden-ads-screen-1.png",
      "/projects/garden-ads-screen-2.png",
      "/projects/garden-ads-screen-3.png",
      "/projects/garden-ads-screen-4.png",
      "/projects/garden-ads-screen-5.png",
    ],
    designSystem: {
      title: "Canopy DS · Emerald Garden",
      foundations:
        "Paleta Emerald Garden, 11 estilos tipográficos, fundaciones de espaciado e iconografía, con componentes y tokens documentados.",
      components: [
        "Tracking Health Score widget",
        "KPI cards con tendencia",
        "Alert system con severity levels",
        "RBAC permission matrix",
        "OAuth onboarding stepper",
      ],
    },
    metrics: [
      { value: "6", label: "plataformas revisadas en el benchmark" },
      { value: "5", label: "semanas de trabajo" },
      { value: "6", label: "roles RBAC diferenciados" },
    ],
    reflection:
      "El feature diferencial surgió del análisis competitivo, no de la intuición: sin revisar 6 plataformas a fondo nunca habría detectado el gap. Y diseñar para múltiples roles exige reflejar la arquitectura de permisos antes de abrir Figma —no después.",
    next: {
      slug: "fintech",
      title: "Fintech PYME — Plataforma de Créditos B2B",
      role: "Diseñador UX/UI · No Country · 2025",
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
      demo: "https://pyfin-nocountry.vercel.app",
    },
    context: {
      rol: "Diseñador UX/UI",
      duracion: "5 semanas · Sep–Oct 2025",
      focoLabel: "Equipo",
      foco: "Multidisciplinario · No Country",
      tools: "Figma · FigJam · Notion",
    },
    description:
      "Diseñé una plataforma de onboarding de créditos para PyMEs con dos superficies diferenciadas: un portal cliente y un panel admin. El objetivo era digitalizar un proceso manual, reducir la fricción operativa y mejorar la trazabilidad para ambos lados de la operación.",
    notice:
      "Proyecto de No Country trabajado con diseñadores y desarrolladores, con implementación y despliegue realizados durante el proyecto. Las cifras y estados mostrados en las interfaces describen el escenario documentado; no deben interpretarse como métricas de negocio posteriores sin evidencia específica.",
    problema: {
      title: "Onboarding manual, lento y sin trazabilidad",
      body: "El alta de crédito para PyMEs era un proceso manual y fragmentado: formularios sueltos, validación por fuera del sistema y cero visibilidad del estado para el solicitante.\n\nEl solicitante no sabía en qué paso estaba ni qué le faltaba; el operador no tenía una vista única para revisar, aprobar o pedir correcciones.",
    },
    estrategia:
      "Separé la operación en dos superficies con objetivos distintos: el Solicitante PyME (completar y enviar) y el Supervisor/Operador (revisar, aprobar, auditar), en vez de forzar una sola plataforma para ambos.\n\nDiseñé un onboarding KYC de 4 pasos con progreso siempre visible y construí un sistema de componentes desde cero con dark mode nativo y criterios inspirados en WCAG AA.",
    decisions: [
      {
        id: "01",
        title: "Dos superficies separadas: portal cliente y panel admin",
        motivo:
          "Solicitante y supervisor tienen objetivos opuestos; una plataforma unificada generaría errores operativos.",
        impacto: "Separa responsabilidades y facilita la trazabilidad de cada superficie.",
      },
      {
        id: "02",
        title: "KYC en 4 pasos con progreso visible",
        motivo:
          "Un alta larga sin feedback de avance puede aumentar la incertidumbre del solicitante.",
        impacto: "El solicitante puede identificar en qué paso está y qué información falta.",
      },
      {
        id: "03",
        title: "RBAC pensado como UX, no solo como capa técnica",
        motivo:
          "Los permisos definen qué ve y qué puede hacer cada operador; por eso forman parte de la experiencia.",
        impacto:
          "Cada operador ve exactamente lo que necesita, sin acciones que no le corresponden.",
      },
    ],
    images: ["/projects/fintech.png"],
    heroImages: {
      desktop: "/projects/fintech-hero-desktop.png",
      tablet: "/projects/fintech-hero-tablet.png",
      mobile: "/projects/fintech-hero-mobile.png",
    },
    pantallas: [
      "/projects/fintech-screen-1.png",
      "/projects/fintech-screen-2.png",
      "/projects/fintech-screen-3.png",
      "/projects/fintech-screen-4.png",
      "/projects/fintech-screen-5.png",
    ],
    designSystem: {
      title: "Sistema de componentes desde cero",
      foundations:
        "Sistema de componentes documentado con dark mode nativo, criterios inspirados en WCAG AA y una arquitectura dual (portal + admin).",
      components: [
        "KYC stepper de 4 pasos",
        "Estatus de solicitud",
        "Tablas de revisión con filtros",
        "Matriz de permisos RBAC",
        "Formularios con validación inline",
      ],
    },
    metrics: [
      { value: "4", label: "pasos del onboarding KYC" },
      { value: "2", label: "superficies diferenciadas" },
      { value: "RBAC", label: "modelo de permisos pensado como UX" },
    ],
    reflection:
      "Separar las dos superficies temprano fue la decisión que ordenó todo lo demás. Diseñar el RBAC como parte de la UX —y no como un detalle técnico del final— evitó rehacer pantallas más adelante.",
    prev: {
      slug: "garden-ads",
      title: "GardenAds — Attribution & Tracking Health",
      role: "Diseñador UX/UI · No Country · 2026",
    },
    next: {
      slug: "crm",
      title: "ChatCRM — CRM para PyMEs",
      role: "Diseñador UX/UI · No Country · 2026",
    },
  },
  {
    slug: "crm",
    tags: ["CRM", "SaaS B2B", "2026"],
    title: "ChatCRM — CRM para PyMEs",
    subtitle: "Centralizar conversaciones y pipeline para no perder contexto comercial.",
    links: {
      figma: "https://www.figma.com/design/bIFrL2uQ9F2ncrmVQo8IjC/Startup-CRM---Cross-Industry?node-id=62-133&t=dkT3NDrn7WMHkD70-1",
      behance: "https://www.behance.net/gallery/248459859/Startup-CRM-Plataforma-SaaS-UXUI?platform=direct",
      demo: "https://s03-26-equipo-02-web-app-developmen.vercel.app/",
    },
    context: {
      rol: "Diseñador UX/UI",
      duracion: "5 semanas · 2026",
      focoLabel: "Foco",
      foco: "Operación · Pipeline · Handoff",
      tools: "Figma · FigJam",
    },
    description:
      "ChatCRM unifica la información comercial que hoy vive dispersa en WhatsApp, email y notas sueltas. El foco fue la operación diaria del equipo de ventas y la trazabilidad del pipeline, con el handoff a desarrollo como entregable primario.",
    notice:
      "Proyecto de No Country trabajado con diseñadores y desarrolladores. La demo pública está incompleta y no contiene datos precargados suficientes para validar todos los flujos; presentarlo como implementación parcial del equipo y como evidencia del alcance diseñado, sin atribuir resultados de negocio.",
    problema: {
      title: "Información comercial dispersa y sin trazabilidad",
      body: "El caso parte de una oportunidad de diseño: la información de cada prospecto puede quedar repartida entre WhatsApp, mail y notas personales. Al cambiar de responsable o retomar un lead, el contexto puede perderse.\n\nLa documentación consultada no valida tamaño de mercado, adopción ni resultados de negocio; por eso el proyecto se presenta como trabajo de diseño documentado, sin atribuir resultados de negocio.",
    },
    estrategia:
      "Puse el pipeline visual kanban como pantalla principal: el estado de cada oportunidad se puede revisar y mover desde una vista central.\n\nEstructuré las variables en dos niveles (primitivos → semánticos) y traté el handoff como entregable principal, no como un extra del final.",
    decisions: [
      {
        id: "01",
        title: "Pipeline kanban como pantalla principal",
        motivo:
          "El equipo necesita ver y mover el estado de las oportunidades sin entrar a cada ficha.",
        impacto:
          "Permite consultar y mover oportunidades desde una vista central.",
      },
      {
        id: "02",
        title: "Variables en dos niveles: primitivos → semánticos",
        motivo:
          "Separar el valor crudo del uso semántico permite escalar y mantener el sistema sin romper pantallas.",
        impacto:
          "Facilita cambios de tema sin rehacer cada componente.",
      },
      {
        id: "03",
        title: "Handoff como entregable primario",
        motivo:
          "En un equipo real el diseño solo vale si el dev lo puede construir sin ambigüedades.",
        impacto:
          "Deja documentadas las decisiones necesarias para construir los componentes.",
      },
    ],
    images: ["/projects/crm.png"],
    heroImages: {
      desktop: "/projects/crm-hero-desktop.png",
      tablet: "/projects/crm-hero-tablet.png",
      mobile: "/projects/crm-hero-mobile.png",
    },
    pantallas: [
      "/projects/crm-screen-1.png",
      "/projects/crm-screen-2.png",
      "/projects/crm-screen-3.png",
      "/projects/crm-screen-4.png",
      "/projects/crm-screen-5.png",
    ],
    metrics: [
      { value: "MVP", label: "alcance de diseño documentado" },
      { value: "2", label: "niveles de variables documentados" },
      { value: "1", label: "handoff como entregable primario" },
    ],
    reflection:
      "Tratar el handoff como entregable principal cambió cómo diseñé: pensar en cómo se construye cada componente, no solo cómo se ve, hace que el sistema sea mucho más sólido.",
    prev: {
      slug: "fintech",
      title: "Fintech PYME — Plataforma de Créditos B2B",
      role: "Diseñador UX/UI · No Country · 2025",
    },
    next: {
      slug: "multi-brand",
      title: "Multi-Brand Design System",
      role: "Diseñador UX/UI · No Country · 2025",
    },
  },
  {
    slug: "multi-brand",
    tags: ["Design System", "EdTech", "2025"],
    title: "Multi-Brand Design System",
    subtitle: "Un sistema de diseño que escala dos marcas sin duplicar trabajo.",
    links: {
      figma: "https://www.figma.com/design/ISPPHrjlxu34hHO6zaI0JV/Edvance-Design-System",
      behance: "https://www.behance.net/gallery/240712809/Multi-Brand-Design-System",
    },
    context: {
      rol: "Diseñador UX/UI",
      duracion: "5 semanas · 2025",
      focoLabel: "Foco",
      foco: "Tokens · Arquitectura · Escala",
      tools: "Figma · Variables",
    },
    description:
      "Diseñé el sistema visual y la arquitectura de tokens para una plataforma EdTech con dos identidades diferenciadas: Academy (17+) y Kids (6–16). La documentación del proyecto describe una base de componentes compartida entre ambas marcas.",
    notice:
      "Proyecto colaborativo de No Country realizado por un equipo de UX/UI y Product Design. Las cifras y proporciones describen el archivo y el alcance documentado; no implican implementación de software ni resultados de negocio medidos.",
    problema: {
      title: "Fragmentación visual entre productos",
      body: "La plataforma EdTech tenía múltiples productos con identidades inconsistentes: cada equipo resolvía el estilo por su cuenta, duplicando trabajo y rompiendo la coherencia.\n\nSe necesitaban dos marcas con personalidad propia —Academy profesional y Kids lúdica— sin mantener dos sistemas separados.",
    },
    estrategia:
      "Definí una arquitectura de tokens única para ambas marcas: la estructura es la misma y solo cambian color, tipografía y radios por identidad.\n\nOrganicé los tokens en una arquitectura paralela por marca, de modo que cada componente tematizado apunta a los valores de su identidad sin rehacer la estructura.",
    decisions: [
      {
        id: "01",
        title: "Base compartida con identidad propia por marca",
        motivo:
          "Compartir la estructura evita mantener dos sistemas; variar solo lo identitario da personalidad sin duplicar.",
        impacto: "Propone una base común para evitar duplicar estructuras entre marcas.",
      },
      {
        id: "02",
        title: "Arquitectura de tokens paralela por marca",
        motivo:
          "Separar los valores por marca permite que cada identidad evolucione sin arrastrar a la otra.",
        impacto: "La separación conceptual permite ajustar valores de una marca sin rehacer la estructura común.",
      },
      {
        id: "03",
        title: "Dos identidades sobre una misma base",
        motivo:
          "Academy (17+, azules corporativos) y Kids (6–16, paleta vibrante) hablan a públicos distintos.",
        impacto: "Cada marca conserva una identidad diferenciada sobre una base compartida.",
      },
    ],
    images: ["/projects/multi-brand.png"],
    heroImages: {
      desktop: "/projects/multi-brand-hero-desktop.png",
      tablet: "/projects/multi-brand-hero-tablet.png",
      mobile: "/projects/multi-brand-hero-mobile.png",
    },
    pantallas: [
      "/projects/multi-brand-screen-1.png",
      "/projects/multi-brand-screen-2.png",
      "/projects/multi-brand-screen-3.png",
      "/projects/multi-brand-screen-4.png",
      "/projects/multi-brand-screen-5.png",
    ],
    designSystem: {
      title: "Arquitectura de tokens multimarca",
      foundations:
        "Componentes creados en el archivo vigente sobre una arquitectura de tokens común, con valores propios por marca (Academy / Kids). La cantidad exacta debe leerse como dato del archivo, no como resultado de negocio.",
      components: [
        "Tokens primitivos y semánticos",
        "Tokens por marca (Academy / Kids)",
        "Escala tipográfica por marca",
        "Componentes tematizados",
        "Documentación de uso",
      ],
    },
    metrics: [
      { value: "2", label: "identidades documentadas" },
      { value: "1", label: "arquitectura de tokens común" },
      { value: "70%", label: "componentes compartidos según documentación del proyecto" },
    ],
    reflection:
      "Lo que más me llevé fue dónde vive de verdad la identidad de una marca. La escala de espaciado terminó siendo idéntica en ambas y los neutrales se comparten enteros: lo que separa a Academy de Kids es el color y, sobre todo, el border-radius —de 4 a 16px en una, de 12 a 32 en la otra—. La estructura de un sistema puede ser común mucho más de lo que uno supone.",
    prev: {
      slug: "crm",
      title: "ChatCRM — CRM para PyMEs",
      role: "Diseñador UX/UI · No Country · 2026",
    },
    next: {
      slug: "trainit",
      title: "TrainiT — Gestión de Proyectos",
      role: "Diseñador UX/UI Jr. · Programa TrainiT · 2025",
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
      rol: "Diseñador UX/UI Jr.",
      duracion: "3 meses · Programa TrainiT · 2025",
      focoLabel: "Foco",
      foco: "Flujos · Coordinación",
      tools: "Figma · FigJam",
    },
    description:
      "Diseñé e iteré los flujos principales de TrainiT: dashboard, backlog, kanban, módulo de miembros y configuración. Coordiné el diseño durante 3 sprints, pasando por rondas de feedback técnico real.",
    notice:
      "Pasantía en Programa TrainiT trabajada con un equipo de desarrollo que implementó los flujos diseñados. La evidencia disponible documenta el alcance del trabajo; no se presenta como experiencia de No Country ni se atribuyen resultados de uso o negocio sin una fuente específica.",
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
    heroImages: {
      desktop: "/projects/trainit-hero-desktop.png",
      tablet: "/projects/trainit-hero-tablet.png",
      mobile: "/projects/trainit-hero-mobile.png",
    },
    pantallas: [
      "/projects/trainit-screen-1.png",
      "/projects/trainit-screen-2.png",
      "/projects/trainit-screen-3.png",
      "/projects/trainit-screen-4.png",
      "/projects/trainit-screen-5.png",
    ],
    metrics: [
      { value: "25", label: "pantallas verificadas en el archivo" },
      { value: "3", label: "sprints de iteración" },
      { value: "1", label: "Design System compartido" },
    ],
    reflection:
      "Poner el dashboard como entrada fue contraintuitivo pero correcto: el kanban es potente, pero sin contexto previo aturde. Iterar con desarrollo en cada sprint me enseñó a diseñar para lo que se puede construir.",
    prev: {
      slug: "multi-brand",
      title: "Multi-Brand Design System",
      role: "Diseñador UX/UI · No Country · 2025",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug && c.published !== false);
}
