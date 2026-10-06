export interface Decision {
  id: string;
  title: string;
  motivo: string;
  impacto: string;
  tradeoff?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Screen {
  src: string;
  width: number;
  height: number;
  name: string;
  task: string;
  decision: string;
  alt: string;
  role?: "key" | "flow" | "comparison" | "gallery";
  // Override explícito y puntual del recorte en el escenario principal del carrusel.
  // Si se omite, se deriva de width/height (portrait → cover; landscape → contain).
  fit?: "contain" | "cover";
  // Solo aplica cuando fit="cover". Si se omite, se usa "center top" (portrait) o "center center" (landscape).
  objectPosition?: string;
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
  links: { figma?: string; behance: string; figmaNote?: string };
  context: {
    rol: string;
    duracion: string;
    focoLabel: string;
    foco: string;
    tools: string;
  };
  description: string;
  notice?: string;
  attribution?: {
    responsibility: string;
    collaboration: string;
    deliverables: string;
    evidence: string;
  };
  users?: { title: string; body: string };
  outcome?: { title: string; body: string };
  problema: { title: string; body: string };
  estrategia: string;
  decisions: Decision[];
  images: string[];
  heroImages?: { desktop: string; tablet: string; mobile: string };
  pantallas?: Screen[];
  // Aviso discreto bajo la galería "Selección de UI" (ej. cuando el caso tiene una sola pantalla final disponible).
  galleryNote?: string;
  // Ratio "width / height" del escenario principal del carrusel para este caso puntual.
  // Opt-in: si se omite, UICarousel usa "800 / 569" (default de los otros casos, sin cambios).
  galleryAspect?: string;
  designSystem?: DesignSystem;
  metrics: Metric[];
  reflection: string;
  prev?: NavItem;
  next?: NavItem;
}

export const CASES: CaseStudy[] = [
  {
    slug: "fintech",
    tags: ["Fintech", "SaaS B2B", "2025"],
    title: "Fintech PYME — Plataforma de Créditos B2B",
    subtitle: "Onboarding y operación de créditos B2B organizados en dos superficies.",
    links: {
      figma: "https://www.figma.com/design/ryoPAtXnEr6GqFaWHXPTvO",
      behance: "https://www.behance.net/gallery/237822185/Plataforma-Fintech-B2B-para-Onboarding-de-Crditos-PYME",
    },
    context: {
      rol: "Único diseñador UX/UI",
      duracion: "5 semanas · 29 sep — 2 nov 2025",
      focoLabel: "Equipo",
      foco: "Simulación laboral · No Country",
      tools: "Figma · FigJam",
    },
    description:
      "En una simulación laboral de No Country diseñé una plataforma de onboarding de créditos para PyMEs con dos superficies diferenciadas: un portal cliente y un panel admin. El alcance de diseño buscó ordenar el proceso y hacer visible el estado de cada solicitud.",
    notice:
      "Simulación laboral de No Country. Fui el único diseñador UX/UI; el caso documenta entregables de diseño y no resultados de negocio, implementación ni despliegue.",
    attribution: {
      responsibility: "Diseño de la plataforma dual de onboarding: portal cliente, panel admin, KYC y RBAC.",
      collaboration: "Simulación laboral de No Country con colaboración multidisciplinaria.",
      deliverables: "Flujos de onboarding, superficies diferenciadas y sistema de componentes.",
      evidence: "La documentación del proyecto me identifica como Diseñador UX/UI y reúne capturas de interfaz, enlaces a Figma y Behance y el caso escrito. No presento métricas posteriores de negocio.",
    },
    users: {
      title: "Solicitante y operador",
      body: "El solicitante PyME necesita completar y seguir su solicitud; el supervisor u operador necesita revisar, aprobar o pedir correcciones con trazabilidad.",
    },
    outcome: {
      title: "Alcance documentado",
      body: "La propuesta ordena el onboarding y separa las responsabilidades de cada superficie. No hay una medición posterior disponible para afirmar mejoras de conversión, tiempo o eficiencia.",
    },
    problema: {
      title: "Un proceso sensible, largo y propenso a errores",
      body: "La simulación explora un alta de crédito para PyMEs que combina KYC, documentación y revisión operativa. Un dato incorrecto o una identidad sin verificar puede afectar la continuidad de la solicitud.\n\nEl objetivo de diseño fue hacer visible el progreso para quien solicita y organizar la revisión para quien opera, sin presentar una reducción medida de errores o tiempos.",
    },
    estrategia:
      "Separé la operación en dos superficies con objetivos distintos: el Solicitante PyME (completar y enviar) y el Supervisor/Operador (revisar, aprobar, auditar), en vez de forzar una sola plataforma para ambos.\n\nDiseñé un onboarding KYC de 4 pasos con progreso siempre visible y documenté un sistema de componentes desde cero con dark mode nativo. La accesibilidad queda pendiente de verificación.",
    decisions: [
      {
        id: "01",
        title: "Dos superficies separadas: portal cliente y panel admin",
        motivo:
          "Solicitante y supervisor realizan tareas y acciones diferentes dentro del flujo documentado.",
        impacto: "Separa responsabilidades y facilita la trazabilidad de cada superficie.",
        tradeoff: "Suma una segunda superficie que requiere reglas compartidas, pero evita mezclar tareas y permisos opuestos.",
      },
      {
        id: "02",
        title: "KYC en 4 pasos con progreso visible",
        motivo:
          "Un alta larga sin feedback de avance puede aumentar la incertidumbre del solicitante.",
        impacto: "El solicitante puede identificar en qué paso está y qué información falta.",
        tradeoff: "Agrega pasos al recorrido, pero hace visible el avance y la información pendiente.",
      },
      {
        id: "03",
        title: "RBAC pensado como UX, no solo como capa técnica",
        motivo:
          "Los permisos definen qué ve y qué puede hacer cada operador; impactan directo en la interfaz.",
        impacto:
          "Organiza la visibilidad y las acciones propuestas de acuerdo con el rol del operador.",
        tradeoff: "Requiere modelar permisos desde el diseño, pero reduce acciones irrelevantes en cada rol.",
      },
    ],
    images: ["/projects/fintech.webp"],
    heroImages: {
      desktop: "/projects/fintech-hero-desktop.webp",
      tablet: "/projects/fintech-hero-tablet.webp",
      mobile: "/projects/fintech-hero-mobile.webp",
    },
    pantallas: [
      { src: "/projects/fintech-screen-1.webp", width: 1440, height: 1024, name: "Dashboard de solicitudes", task: "Revisar el estado general de las solicitudes de crédito.", decision: "Una vista operativa única concentra el estado que antes estaba fragmentado.", alt: "Dashboard de solicitudes de crédito para PyMEs con estados y acciones de revisión.", role: "key" },
      { src: "/projects/fintech-screen-2.webp", width: 1440, height: 1024, name: "Inicio del onboarding", task: "Entender qué información necesita el solicitante para comenzar.", decision: "El flujo explicita el punto de partida y reduce la incertidumbre antes de completar datos.", alt: "Pantalla inicial del onboarding de créditos para una empresa solicitante.", role: "flow" },
      { src: "/projects/fintech-screen-3.webp", width: 1440, height: 1024, name: "Paso de crédito", task: "Completar una etapa del alta sin perder el progreso.", decision: "El onboarding se divide en pasos visibles para hacer legible un proceso largo.", alt: "Paso del formulario de solicitud de crédito con progreso visible.", role: "flow" },
      { src: "/projects/fintech-screen-4.webp", width: 1440, height: 1024, name: "Revisión de solicitudes", task: "Revisar información y detectar qué requiere atención del operador.", decision: "La tabla prioriza el estado y la trazabilidad por encima de una lectura documental aislada.", alt: "Vista de revisión de solicitudes de crédito para el operador.", role: "flow" },
      { src: "/projects/fintech-screen-5.webp", width: 1440, height: 1024, name: "Dashboard del administrador", task: "Supervisar la operación desde la superficie administrativa.", decision: "La superficie admin se separa del portal del solicitante para respetar objetivos y permisos distintos.", alt: "Dashboard administrativo de una plataforma de créditos B2B.", role: "gallery" },
    ],
    designSystem: {
      title: "Sistema de componentes desde cero",
      foundations:
        "Sistema de componentes documentado con dark mode nativo y una arquitectura dual (portal + admin). La auditoría de accesibilidad queda pendiente de verificación.",
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
      { value: "61 / 540", label: "entidades / variantes documentadas" },
    ],
    reflection:
      "Separar las dos superficies temprano ordenó la arquitectura del caso. También aprendí a considerar el RBAC como parte de la experiencia desde el diseño, dejando su implementación técnica y validación fuera del alcance demostrado.",
    next: {
      slug: "garden-ads",
      title: "GardenAds — Attribution & Tracking Health",
      role: "Único diseñador UX/UI · Simulación laboral · No Country · 2026",
    },
  },
  {
    slug: "garden-ads",
    tags: ["Analytics SaaS", "Analytics", "2026"],
    title: "GardenAds — Attribution & Tracking Health",
    subtitle:
      "Una propuesta SaaS para hacer visible la salud del tracking y anticipar fallos que podrían afectar la atribución.",
    links: {
      figma: "https://www.figma.com/design/8SMwklByslExRkjFk8P9U2",
      behance: "https://www.behance.net/gallery/245704303/GardenAds-Attribution-Tracking-Health-Platform",
    },
    context: {
      rol: "Único diseñador UX/UI",
      duracion: "5 semanas · 2026",
      focoLabel: "Contexto",
      foco: "Simulación laboral · No Country",
      tools: "Figma · FigJam · Canopy DS",
    },
    description:
      "En GardenAds participé en una simulación laboral de No Country y diseñé una propuesta de plataforma analytics B2B SaaS para equipos que necesitan entender el estado de su tracking. Presento el trabajo a partir de la documentación y las capturas de interfaz disponibles.",
    notice:
      "Simulación laboral de No Country. Fui el único diseñador UX/UI dentro del equipo; documento entregables de diseño y prototipos, no una plataforma implementada ni resultados de negocio. Las cifras, testimonios y estados visibles en la interfaz son escenarios ficticios.",
    attribution: {
      responsibility: "Benchmark y diseño de la propuesta de producto, con foco en Tracking Health.",
      collaboration: "Simulación laboral de No Country con colaboración multidisciplinaria.",
      deliverables: "Benchmark colaborativo de seis competidores, arquitectura de producto, UI de Tracking Health y Canopy DS.",
      evidence: "La documentación del equipo me identifica como UX/UI Designer y reúne capturas de interfaz y el benchmark colaborativo descrito en el caso. No presento resultados de negocio.",
    },
    users: {
      title: "Equipos que dependen del dato",
      body: "El alcance diseñado contempla perfiles de marketing, founders, sales ops, análisis, administración y desarrollo, con necesidades diferentes frente al estado del tracking.",
    },
    outcome: {
      title: "Entregables documentados",
      body: "El diseño documenta una propuesta de diagnóstico proactivo, arquitectura de producto y prototipos navegables en Figma. El responsive visual queda pendiente y no hay resultados de negocio verificables.",
    },
    problema: {
      title: "Pérdida silenciosa de atribución",
      body: "Los equipos que dependen del dato pueden perder visibilidad cuando un píxel, UTM o integración falla.\n\nAlcance documentado: 5 semanas, único diseñador UX/UI, arquitectura, pantallas desktop y prototipos navegables en Figma. El objetivo de diseño fue explorar cómo hacer visible el estado del tracking, sin presentar resultados económicos ni de mercado.",
    },
    estrategia:
      "El proyecto incluye un benchmark colaborativo de seis competidores. Ese análisis abrió un espacio para explorar un diagnóstico proactivo de salud del tracking.\n\nEl alcance de diseño contempla una arquitectura Dashboard → Tracking Health → Atribución y seis arquetipos documentados; no se presenta como producto implementado ni como resultado de mercado.",
    decisions: [
      {
        id: "01",
        title: "Tracking Health como funcionalidad central del MVP",
        motivo:
          "El benchmark colaborativo revisó seis plataformas y abrió la hipótesis de un diagnóstico proactivo centrado en la salud del tracking.",
        impacto:
          "Propone alertas proactivas de anomalías antes de que el problema avance.",
        tradeoff: "Prioriza diagnóstico y prevención antes que sumar otra vista de reporting histórico.",
      },
      {
        id: "02",
        title: "Cada rol arranca en una vista personalizada, no en un dashboard genérico",
        motivo:
          "El alcance documentó seis perfiles —Marketing Manager, Founder, Sales Ops, Data Analyst, Admin y Developer— con prioridades de información propuestas para cada rol.",
        impacto: "Organiza la información inicial según el rol en lugar de concentrarla en una única vista genérica.",
        tradeoff: "Aumenta la complejidad de la arquitectura, pero evita un dashboard genérico para todos.",
      },
      {
        id: "03",
        title: "Health Score para resumir el estado del tracking",
        motivo: "Un perfil no técnico necesita una lectura resumida del estado del tracking, no sólo logs.",
        impacto: "Propone traducir señales técnicas a una señal comprensible para la operación.",
        tradeoff: "Simplifica una situación técnica en una señal resumida, por lo que requiere mostrar el detalle detrás del score.",
      },
    ],
    images: ["/projects/garden-ads.webp"],
    heroImages: {
      desktop: "/projects/garden-ads-hero-desktop.webp",
      tablet: "/projects/garden-ads-hero-tablet.webp",
      mobile: "/projects/garden-ads-hero-mobile.webp",
    },
    // Pantallas completas del producto (sidebar + nav + contenido), exportadas de Figma
    // "05A. ⭐ Key screens — Recruiter walkthrough" a 1440×1024 — mismo ratio que Fintech/ChatCRM,
    // usan el escenario 800/569 default sin overrides. Tracking Health primero: es el diferencial.
    // Nombres descriptivos (no garden-ads-screen-N) a propósito: cache-busting real, esas rutas
    // nunca fueron pedidas con contenido viejo por ningún navegador.
    pantallas: [
      { src: "/projects/garden-ads-ui-tracking-health.webp", width: 1440, height: 1024, name: "Tracking Health", task: "Detectar fallos de tracking antes de tomar decisiones de inversión.", decision: "El Health Score convierte señales técnicas dispersas en una alerta operativa comprensible.", alt: "Dashboard de Tracking Health con score y alertas de integridad del tracking.", role: "key" },
      { src: "/projects/garden-ads-ui-incident-detail.webp", width: 1440, height: 1024, name: "Detalle de incidente", task: "Entender qué integración falló y qué requiere atención.", decision: "El detalle conecta la alerta con una explicación accionable, no sólo con un estado de error.", alt: "Detalle de un incidente de tracking con severidad, causa y acciones.", role: "flow" },
      { src: "/projects/garden-ads-ui-executive-dashboard.webp", width: 1440, height: 1024, name: "Dashboard ejecutivo", task: "Consultar una lectura de alto nivel sobre el estado del tracking.", decision: "La vista ejecutiva prioriza señales resumidas para perfiles que no necesitan leer logs.", alt: "Dashboard ejecutivo de GardenAds con indicadores de tracking y atribución.", role: "flow" },
      { src: "/projects/garden-ads-ui-integrations.webp", width: 1440, height: 1024, name: "Integraciones", task: "Conectar las fuentes que alimentan el diagnóstico de tracking.", decision: "Las integraciones se presentan como conexiones de solo lectura para reducir el riesgo percibido.", alt: "Pantalla de integraciones de GardenAds con conexiones de Stripe, Meta y Google Ads.", role: "flow" },
      { src: "/projects/garden-ads-ui-onboarding.webp", width: 1440, height: 1024, name: "Onboarding", task: "Configurar el espacio inicial antes de revisar la salud del tracking.", decision: "El onboarding ordena la configuración antes de exponer el diagnóstico del producto.", alt: "Flujo de onboarding de GardenAds para configurar una cuenta.", role: "gallery" },
    ],
    designSystem: {
      title: "Canopy DS · Emerald Garden",
      foundations:
        "Paleta Emerald Garden, 11 estilos tipográficos, fundaciones de espaciado e iconografía, con 69 entidades de componente documentadas (30 sets con 225 variantes y 39 componentes independientes).",
      components: [
        "Tracking Health Score widget",
        "KPI cards con tendencia",
        "Alert system con severity levels",
        "RBAC permission matrix",
        "Onboarding de 4 pasos",
      ],
    },
    metrics: [
      { value: "55", label: "pantallas desktop documentadas" },
      { value: "69", label: "entidades de componente documentadas" },
      { value: "4", label: "pasos del onboarding" },
      { value: "5", label: "semanas de trabajo" },
    ],
    reflection:
      "El benchmark colaborativo abrió la hipótesis de Tracking Health como eje del producto. También aprendí que, al diseñar para varios perfiles, conviene definir temprano la arquitectura de información y los permisos para que las pantallas respondan a un modelo coherente.",
    prev: {
      slug: "fintech",
      title: "Fintech PYME — Plataforma de Créditos B2B",
      role: "Único diseñador UX/UI · Simulación laboral · No Country · 2025",
    },
    next: {
      slug: "crm",
      title: "ChatCRM — CRM para PyMEs",
      role: "Único diseñador UX/UI · Simulación laboral · No Country · 2026",
    },
  },
  {
    slug: "crm",
    tags: ["CRM", "SaaS B2B", "2026"],
    title: "ChatCRM — CRM para PyMEs",
    subtitle: "Centralizar conversaciones y pipeline para no perder contexto comercial.",
    links: {
      figma: "https://www.figma.com/design/WfehLZHqanlAyZy5qPrlcV",
      behance: "https://www.behance.net/gallery/248459859/Startup-CRM-Plataforma-SaaS-UXUI?platform=direct",
    },
    context: {
      rol: "Único diseñador UX/UI",
      duracion: "5 semanas · 2026",
      focoLabel: "Foco",
      foco: "Simulación laboral · equipo de 5 · No Country",
      tools: "Figma · FigJam",
    },
    description:
      "ChatCRM es una simulación laboral de No Country en un equipo de cinco integrantes; fui el único diseñador UX/UI. El concepto explora cómo centralizar conversaciones y pipeline, con el handoff como entregable de diseño.",
    notice:
      "Simulación laboral de No Country. Personas, JTBD, adopción, precio y oportunidad son hipótesis o síntesis de desk research; no hay usuarios reales, testing ni resultados de negocio verificados.",
    attribution: {
      responsibility: "Diseño del pipeline kanban y handoff a desarrollo dentro de un equipo de cinco integrantes.",
      collaboration: "Simulación laboral de No Country; fui el único diseñador UX/UI.",
      deliverables: "MVP de operación comercial, variables en dos niveles y documentación de handoff.",
      evidence: "La documentación del equipo me identifica como UX/UI Designer y reúne capturas del alcance diseñado y documentación enlazada. No presento research con participantes, testing, implementación ni resultados medidos.",
    },
    users: {
      title: "Equipo comercial",
      body: "El concepto contempla equipos de ventas que necesitan recuperar el contexto de un prospecto y mantener visible el próximo paso del pipeline. Se trata de una hipótesis de diseño, no de usuarios reales observados.",
    },
    outcome: {
      title: "Alcance documentado",
      body: "El alcance de diseño prioriza un pipeline kanban y un handoff claro para desarrollo. No se presentan implementación, conversión, adopción ni resultados medidos.",
    },
    problema: {
      title: "Información comercial dispersa y sin trazabilidad",
      body: "El caso parte de una oportunidad de diseño: la información de cada prospecto puede quedar repartida entre WhatsApp, mail y notas personales. Al cambiar de responsable o retomar un lead, el contexto puede perderse.\n\nPersonas, JTBD, precio y oportunidad son hipótesis o síntesis de desk research; no se presentan como investigación con participantes ni como resultados de negocio.",
    },
    estrategia:
      "Propuse el pipeline visual kanban como pantalla principal y acerqué las conversaciones de WhatsApp y email al contexto comercial.\n\nEstructuré las variables en dos niveles (primitivos → semánticos) y traté el handoff como entregable principal, no como un extra del final.",
    decisions: [
      {
        id: "01",
        title: "Pipeline kanban como pantalla principal",
        motivo:
          "La hipótesis de diseño plantea que una vista central puede hacer visible el estado de las oportunidades sin entrar a cada ficha.",
        impacto:
          "Permite consultar y mover oportunidades desde una vista central.",
        tradeoff: "Concentra la operación en una vista más densa, pero evita saltos constantes entre fichas.",
      },
      {
        id: "02",
        title: "Variables en dos niveles: primitivos → semánticos",
        motivo:
          "Separar el valor crudo del uso semántico permite escalar y mantener el sistema sin romper pantallas.",
        impacto:
          "Facilita cambios de tema sin rehacer cada componente.",
        tradeoff: "Agrega una capa de abstracción inicial, pero reduce inconsistencias cuando el sistema crece.",
      },
      {
        id: "03",
        title: "Handoff como entregable primario",
        motivo:
          "Un handoff claro ayuda a que el equipo pueda interpretar y construir los componentes sin ambigüedades.",
        impacto:
          "Deja documentadas las decisiones necesarias para construir los componentes.",
        tradeoff: "Exige más detalle antes de cerrar el diseño, pero reduce ambigüedad en la implementación.",
      },
    ],
    images: ["/projects/crm.webp"],
    heroImages: {
      desktop: "/projects/crm-hero-desktop.webp",
      tablet: "/projects/crm-hero-tablet.webp",
      mobile: "/projects/crm-hero-mobile.webp",
    },
    pantallas: [
      { src: "/projects/crm-screen-1.webp", width: 1440, height: 1024, name: "Pipeline kanban", task: "Revisar y mover oportunidades desde una vista central.", decision: "El pipeline es la pantalla principal porque hace visible el estado comercial sin entrar en cada ficha.", alt: "Pipeline kanban de ChatCRM con oportunidades organizadas por etapa.", role: "key" },
      { src: "/projects/crm-screen-2.webp", width: 1440, height: 1024, name: "Bandeja de conversaciones", task: "Recuperar el contexto de una conversación comercial.", decision: "La bandeja acerca las conversaciones al flujo comercial en lugar de dejarlas aisladas.", alt: "Bandeja de conversaciones de ChatCRM vinculada a oportunidades comerciales.", role: "flow" },
      { src: "/projects/crm-screen-3.webp", width: 1440, height: 1024, name: "Ficha de contacto", task: "Consultar la información relevante de un prospecto.", decision: "La ficha reúne contexto para que el equipo pueda retomar un lead sin depender de notas sueltas.", alt: "Ficha de contacto de ChatCRM con información de un prospecto.", role: "flow" },
      { src: "/projects/crm-screen-4.webp", width: 1440, height: 1024, name: "Tareas", task: "Convertir el seguimiento comercial en acciones visibles.", decision: "Las tareas conectan el estado del pipeline con el próximo paso operativo.", alt: "Vista de tareas de ChatCRM para el seguimiento comercial.", role: "flow" },
      { src: "/projects/crm-screen-5.webp", width: 1440, height: 1024, name: "Ajustes", task: "Configurar el espacio de trabajo del equipo.", decision: "La configuración queda separada de la operación diaria para no cargar la vista principal.", alt: "Pantalla de ajustes de ChatCRM para configurar el espacio de trabajo.", role: "gallery" },
    ],
    metrics: [
      { value: "MVP", label: "alcance de diseño documentado" },
      { value: "2", label: "niveles de variables documentados" },
      { value: "1", label: "handoff como entregable primario" },
    ],
    reflection:
      "Tratar el handoff como entregable principal cambió mi forma de diseñar: me obligó a explicar estados, reglas y componentes con suficiente claridad para que otra persona pudiera interpretarlos, aunque la implementación no esté verificada.",
    prev: {
      slug: "garden-ads",
      title: "GardenAds — Attribution & Tracking Health",
      role: "Único diseñador UX/UI · Simulación laboral · No Country · 2026",
    },
    next: {
      slug: "multi-brand",
      title: "Multi-Brand Design System",
      role: "1 de 4 UX/UI · Simulación laboral colaborativa · No Country · 2025",
    },
  },
  {
    slug: "multi-brand",
    tags: ["Design System", "EdTech", "2025"],
    title: "Multi-Brand Design System",
    subtitle: "Arquitectura compartida para dos marcas de una plataforma EdTech.",
    links: {
      behance: "https://www.behance.net/gallery/240712809/Multi-Brand-Design-System",
      figma: "https://www.figma.com/design/1jHTtZiRuYJM2cG5mtoEG3/Multi-Brand-Design-System-%E2%80%94-EdTech",
    },
    context: {
      rol: "UX/UI Designer · 1 de 4 diseñadores UX/UI",
      duracion: "5 semanas · 10 nov — 14 dic 2025",
      focoLabel: "Foco",
      foco: "Simulación laboral colaborativa · equipo de 5",
      tools: "Figma · Variables",
    },
    description:
      "En una simulación laboral colaborativa de No Country participé como uno de cuatro diseñadores UX/UI dentro de un equipo de cinco. El alcance documenta una arquitectura de tokens compartida para una plataforma EdTech con dos identidades: Academy (17+) y Kids (6–16).",
    notice:
      "Proyecto colaborativo de No Country realizado por un equipo de UX/UI y Product Design. Las cifras y proporciones describen el archivo y el alcance documentado; no implican implementación de software ni resultados de negocio medidos.",
    attribution: {
      responsibility: "Contribución colaborativa a la arquitectura de tokens y entregables visuales para Academy y Kids.",
      collaboration: "Uno de cuatro diseñadores UX/UI dentro de un equipo de cinco en una simulación laboral colaborativa de No Country.",
      deliverables: "Arquitectura de tokens compartida, componentes, variantes, estados, pantallas, prototipos y documentación de handoff.",
      evidence: "La documentación del equipo me identifica como uno de cuatro diseñadores UX/UI. El archivo vigente registra 66 variables en cuatro colecciones, un modo por colección y 209 componentes creados; más de 80 componentes corresponden a un conteo de distinto alcance. No presento resultados de negocio medidos.",
    },
    users: {
      title: "Dos identidades, una base",
      body: "Academy y Kids representan públicos distintos dentro de una misma plataforma; el sistema debe permitir diferenciar la experiencia sin mantener dos estructuras separadas.",
    },
    outcome: {
      title: "Alcance documentado",
      body: "La documentación deja una arquitectura visual común con valores diferenciados por marca. Consistencia, reducción de duplicación y ahorro de tiempo son objetivos del enfoque, no resultados demostrados.",
    },
    problema: {
      title: "Fragmentación visual entre productos",
      body: "La plataforma EdTech necesitaba dos marcas con personalidad propia —Academy profesional y Kids lúdica— sobre una arquitectura que pudiera mantenerse compartida. La consistencia y la reducción de duplicación se plantearon como objetivos del enfoque.",
    },
    estrategia:
      "Contribuí a una arquitectura de tokens compartida para ambas marcas: la estructura es común y los valores se diferencian por prefijo de marca. Las colecciones actuales tienen un solo modo por colección.\n\nEl enfoque busca favorecer consistencia y reducir duplicación, sin presentar esos objetivos como resultados medidos ni atribuirme el liderazgo total del sistema.",
    decisions: [
      {
        id: "01",
        title: "Base compartida con identidad propia por marca",
        motivo:
          "Compartir la estructura permite explorar una base común; variar lo identitario da personalidad a cada marca.",
        impacto: "Propone una base común para mantener criterios consistentes entre marcas.",
        tradeoff: "Limita la libertad de resolver cada marca desde cero, pero mantiene una base escalable.",
      },
      {
        id: "02",
        title: "Arquitectura de tokens paralela por marca",
        motivo:
          "Separar los valores por marca permite que cada identidad evolucione sin arrastrar a la otra.",
        impacto: "La separación conceptual permite explorar valores diferenciados por marca dentro de una estructura común.",
        tradeoff: "Requiere disciplina para mantener dos capas de valores, pero evita mezclar decisiones de identidad.",
      },
      {
        id: "03",
        title: "Dos identidades sobre una misma base",
        motivo:
          "Academy (17+, azules corporativos) y Kids (6–16, paleta vibrante) hablan a públicos distintos.",
        impacto: "Cada marca conserva una identidad diferenciada sobre una base compartida.",
        tradeoff: "No todos los patrones pueden divergir igual, por lo que la base común define límites deliberados.",
      },
    ],
    images: ["/projects/multi-brand.webp"],
    heroImages: {
      desktop: "/projects/multi-brand-hero-desktop.webp",
      tablet: "/projects/multi-brand-hero-tablet.webp",
      mobile: "/projects/multi-brand-hero-mobile.webp",
    },
    pantallas: [
      // Única con recorte intencional: en "contain" quedaba con gutters muy grandes a los costados
      // (ratio casi cuadrado vs. escenario 800/569). "cover" + top llena el escenario mostrando
      // header, banner y progreso/recompensas. screen-2/1/5/3 sin cambios (aprobadas).
      { src: "/projects/multi-brand-screen-4.webp", width: 1440, height: 1379, fit: "cover", objectPosition: "center top", name: "Dashboard Academy", task: "Consultar el estado de aprendizaje en la identidad Academy.", decision: "La base estructural se mantiene mientras la identidad visual cambia por marca.", alt: "Dashboard de la marca Academy dentro del sistema de aprendizaje multimarca.", role: "comparison" },
      { src: "/projects/multi-brand-screen-2.webp", width: 1440, height: 1826, name: "Dashboard Kids", task: "Consultar el mismo tipo de experiencia en la identidad Kids.", decision: "La comparación muestra qué puede variar por marca dentro de una arquitectura compartida.", alt: "Dashboard de la marca Kids dentro del sistema de aprendizaje multimarca.", role: "comparison" },
      { src: "/projects/multi-brand-screen-1.webp", width: 1440, height: 2488, name: "Cursos Academy", task: "Explorar la oferta de cursos de Academy.", decision: "Los patrones se mantienen reconocibles aunque cambien los valores visuales de la marca.", alt: "Listado de cursos de la marca Academy.", role: "flow" },
      { src: "/projects/multi-brand-screen-5.webp", width: 1309, height: 4096, name: "Cursos Kids", task: "Explorar cursos con la identidad dirigida a un público más joven.", decision: "La tematización permite adaptar la expresión visual sin rehacer cada componente.", alt: "Listado de cursos de la marca Kids.", role: "flow" },
      { src: "/projects/multi-brand-screen-3.webp", width: 1440, height: 1872, name: "Detalle de curso", task: "Consultar el contenido de un curso antes de comenzar.", decision: "El componente de detalle funciona como patrón compartido entre las dos identidades.", alt: "Detalle de un curso dentro de la plataforma de aprendizaje.", role: "gallery" },
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
      { value: "66", label: "variables en 4 colecciones" },
      { value: "1", label: "modo por colección" },
      { value: "209", label: "componentes creados en el archivo vigente" },
      { value: ">80", label: "componentes documentados · conteo de distinto alcance" },
    ],
    reflection:
      "Lo que más me llevé fue dónde vive de verdad la identidad de una marca. La escala de espaciado terminó siendo idéntica en ambas y los neutrales se comparten enteros: lo que separa a Academy de Kids es el color y, sobre todo, el border-radius —de 4 a 16px en una, de 12 a 32 en la otra—. La estructura de un sistema puede ser común mucho más de lo que uno supone.",
    prev: {
      slug: "crm",
      title: "ChatCRM — CRM para PyMEs",
      role: "Único diseñador UX/UI · Simulación laboral · No Country · 2026",
    },
    next: {
      slug: "trainit",
      title: "TrainiT — Gestión de Proyectos",
      role: "Junior UX/UI · Pasantía formativa TrainiT · 2025",
    },
  },
  {
    slug: "trainit",
    tags: ["Práctica formativa", "UI Components", "2025"],
    title: "TrainiT — Gestión de Proyectos",
    subtitle: "Componentes, estados y coordinación de un workstream dentro de una práctica formativa.",
    links: {
      behance: "https://www.behance.net/gallery/240653385/TrainiT-PGT-%28Plataforma-de-Gestion-de-Proyectos%29",
      figma: "https://www.figma.com/design/mRTUkA0fo9kmxB94q6y57N/TrainiT-%E2%80%94-Gesti%C3%B3n-de-Proyectos",
    },
    context: {
      rol: "Junior UX/UI Designer · líder del workstream Grupo 1/UI Components",
      duracion: "23 jun — 15 oct 2025",
      focoLabel: "Foco",
      foco: "Pasantía/práctica formativa · Programa TrainiT (PGT)",
      tools: "Figma · FigJam",
    },
    description:
      "Pasantía/práctica formativa del Programa TrainiT (PGT). Fui Junior UX/UI Designer y lideré el workstream Grupo 1/UI Components durante sprints concretos, coordinando a dos diseñadoras y colaborando con el Design System del equipo.",
    notice:
      "Pasantía/práctica formativa del Programa TrainiT (PGT). Lideré el workstream Grupo 1/UI Components durante sprints concretos; mi alcance no implicó ownership del producto ni del Design System completo. No presento resultados de producción, research, testing, productividad ni negocio.",
    attribution: {
      responsibility: "Lideré el workstream Grupo 1/UI Components durante sprints concretos y coordiné a dos diseñadoras.",
      collaboration: "Práctica formativa colaborativa con el equipo de diseño y colaboración con el Design System.",
      deliverables: "UI Components, flujos, estados, pantallas, prototipo, documentación y handoff dentro del alcance del workstream.",
      evidence: "El working file documenta mi aporte en seis secciones, junto con trabajo de compañeros y áreas colaborativas del equipo. No presento claims de research, testing, producción o resultados.",
    },
    users: {
      title: "Equipo de diseño y usuarios del tablero",
      body: "El trabajo del workstream debía integrarse a una plataforma colaborativa de tareas y a un Design System compartido. Los resultados de research con usuarios no están verificados.",
    },
    outcome: {
      title: "Alcance documentado",
      body: "El caso documenta entregables del workstream Grupo 1/UI Components dentro de la práctica formativa. La atribución es parcial y no se presentan resultados de adopción, producción ni negocio.",
    },
    problema: {
      title: "Consistencia dentro de un producto colaborativo",
      body: "La práctica formativa trabajó sobre una plataforma de tareas con tableros kanban, miembros, etiquetas y filtros. Dentro de ese contexto, el desafío comprobable de mi workstream fue producir componentes consistentes con el sistema compartido.\n\nMi contribución se concentró en nomenclatura, estados, tamaños, paddings, formularios, filtros e inventario de íconos; no en el ownership de todas las pantallas del producto.",
    },
    estrategia:
      "Trabajé durante sprints concretos en el workstream Grupo 1/UI Components, coordinando a dos diseñadoras y revisando que componentes, estados y nombres pudieran integrarse al Design System del equipo.\n\nLas pantallas de producto se conservan como contexto del archivo colaborativo; su presencia en la galería no implica autoría individual.",
    decisions: [
      {
        id: "01",
        title: "Convención común para componentes y variantes",
        motivo:
          "El trabajo de varias diseñadoras necesitaba una nomenclatura compartida para identificar tipo, componente y variante.",
        impacto:
          "Deja una referencia común para ordenar y revisar los componentes del workstream.",
        tradeoff: "Exige acordar y mantener la convención, pero reduce interpretaciones distintas dentro del subequipo.",
      },
      {
        id: "02",
        title: "Estados, tamaños y paddings normalizados",
        motivo:
          "Variaciones inconsistentes dificultaban integrar los componentes al sistema compartido.",
        impacto:
          "Documenta reglas visuales comunes para los componentes trabajados por el subequipo.",
        tradeoff: "Reduce excepciones locales y obliga a justificar cualquier variante que se aparte del patrón.",
      },
      {
        id: "03",
        title: "Coordinación del workstream en sprints concretos",
        motivo:
          "El subequipo necesitaba distribuir componentes, revisar avances y mantener alineación con el Design System colaborativo.",
        impacto:
          "Mantiene visibles las responsabilidades y los criterios de revisión dentro del alcance del workstream.",
        tradeoff: "La coordinación agrega instancias de revisión, pero evita consolidar componentes incompatibles al final.",
      },
    ],
    images: ["/projects/trainit.webp"],
    heroImages: {
      desktop: "/projects/trainit-hero-desktop.webp",
      tablet: "/projects/trainit-hero-tablet.webp",
      mobile: "/projects/trainit-hero-mobile.webp",
    },
    galleryAspect: "16 / 9",
    galleryNote:
      "Pantallas del archivo colaborativo mostradas como contexto del producto. La autoría individual de estas vistas no está confirmada; mi aporte comprobable corresponde al workstream Grupo 1/UI Components.",
    pantallas: [
      { src: "/projects/trainit-ui-home.webp", width: 1366, height: 1210, fit: "cover", objectPosition: "center top", name: "Dashboard", task: "Entender el contexto general del producto colaborativo.", decision: "Pantalla del archivo de equipo utilizada para mostrar dónde se integran componentes y patrones compartidos.", alt: "Dashboard principal de TrainiT con resumen del estado del proyecto.", role: "key" },
      { src: "/projects/trainit-ui-backlog.webp", width: 1366, height: 768, fit: "cover", objectPosition: "center top", name: "Backlog", task: "Observar el uso de componentes dentro del módulo de trabajo pendiente.", decision: "Vista del archivo colaborativo presentada como contexto del sistema, no como autoría individual confirmada.", alt: "Backlog de TrainiT con tareas pendientes del proyecto.", role: "flow" },
      { src: "/projects/trainit-ui-card-detail.webp", width: 1366, height: 1094, fit: "cover", objectPosition: "center top", name: "Detalle de tarjeta", task: "Observar estados y componentes aplicados al detalle de una tarea.", decision: "El detalle permite contextualizar variantes y estados trabajados por el equipo de diseño.", alt: "Detalle de una tarjeta de tarea en TrainiT.", role: "flow" },
      { src: "/projects/trainit-ui-notifications.webp", width: 1366, height: 1210, fit: "cover", objectPosition: "center top", name: "Notificaciones", task: "Observar componentes de seguimiento dentro del producto.", decision: "Vista del archivo colaborativo incluida para mostrar el alcance general del sistema.", alt: "Centro de notificaciones de TrainiT.", role: "flow" },
      { src: "/projects/trainit-ui-members.webp", width: 1366, height: 1162, fit: "cover", objectPosition: "center top", name: "Miembros", task: "Contextualizar formularios y componentes vinculados a miembros.", decision: "Esta superficie se relaciona con componentes trabajados en el workstream, sin atribuir la pantalla completa como autoría individual.", alt: "Vista de miembros de un proyecto en TrainiT.", role: "gallery" },
      { src: "/projects/trainit-ui-login.webp", width: 1366, height: 768, fit: "cover", objectPosition: "center center", name: "Ingreso", task: "Mostrar otra superficie del archivo colaborativo.", decision: "Pantalla atribuida a otro integrante y conservada únicamente como contexto del producto de equipo.", alt: "Pantalla de ingreso de TrainiT.", role: "gallery" },
    ],
    metrics: [
      { value: "6", label: "secciones del working file atribuidas a mi aporte" },
      { value: "2", label: "diseñadoras coordinadas" },
      { value: "1", label: "workstream UI Components" },
    ],
    reflection:
      "Coordinar un workstream me enseñó que un sistema compartido no se sostiene sólo con componentes: también necesita nombres, estados, criterios de revisión y responsabilidades claras. Ese aprendizaje es transferible, aunque la implementación y los resultados del producto no estén verificados.",
    prev: {
      slug: "multi-brand",
      title: "Multi-Brand Design System",
      role: "1 de 4 UX/UI · Simulación laboral colaborativa · No Country · 2025",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug && c.published !== false);
}
