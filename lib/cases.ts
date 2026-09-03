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
  links: { figma: string; behance: string };
  context: {
    rol: string;
    duracion: string;
    focoLabel: string;
    foco: string;
    tools: string;
  };
  description: string;
  notice?: string;
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
    subtitle: "De proceso manual fragmentado a plataforma dual de créditos B2B.",
    links: {
      figma: "https://www.figma.com/design/ryoPAtXnEr6GqFaWHXPTvO",
      behance: "https://www.behance.net/gallery/237822185/Plataforma-Fintech-B2B-para-Onboarding-de-Crditos-PYME",
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
    users: {
      title: "Solicitante y operador",
      body: "El solicitante PyME necesita completar y seguir su solicitud; el supervisor u operador necesita revisar, aprobar o pedir correcciones con trazabilidad.",
    },
    outcome: {
      title: "Resultado esperado",
      body: "La propuesta ordena el onboarding y separa las responsabilidades de cada superficie. No hay una medición posterior disponible para afirmar mejoras de conversión, tiempo o eficiencia.",
    },
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
          "Cada operador ve exactamente lo que necesita, sin acciones que no le corresponden.",
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
    next: {
      slug: "garden-ads",
      title: "GardenAds — Attribution & Tracking Health",
      role: "Diseñador UX/UI · No Country · 2026",
    },
  },
  {
    slug: "garden-ads",
    tags: ["Analytics SaaS", "Analytics", "2026"],
    title: "GardenAds — Attribution & Tracking Health",
    subtitle:
      "Una plataforma SaaS para detectar fallos de tracking antes de que afecten la atribución.",
    links: {
      figma: "https://www.figma.com/design/8SMwklByslExRkjFk8P9U2",
      behance: "https://www.behance.net/gallery/245704303/GardenAds-Attribution-Tracking-Health-Platform",
    },
    context: {
      rol: "Diseñador UX/UI",
      duracion: "5 semanas · Feb–Mar 2026",
      focoLabel: "Contexto",
      foco: "Proyecto colaborativo · No Country",
      tools: "Figma · FigJam · Notion",
    },
    description:
      "GardenAds explora la propuesta de una plataforma analytics B2B SaaS para marketing managers, fundadores y sales ops que necesitan entender el rendimiento de sus campañas. El caso se presenta desde el trabajo documentado y las capturas de interfaz disponibles.",
    notice:
      "Proyecto de No Country trabajado con diseñadores y desarrolladores. El caso se presenta como trabajo documentado de diseño e implementación parcial, no como plataforma completa ni como evidencia de resultados de negocio.",
    users: {
      title: "Equipos que dependen del dato",
      body: "El alcance diseñado contempla perfiles de marketing, founders, sales ops, análisis, administración y desarrollo, con necesidades diferentes frente al estado del tracking.",
    },
    outcome: {
      title: "Estado de implementación",
      body: "El diseño documenta una propuesta de diagnóstico proactivo y una arquitectura de producto. El deploy público disponible sigue siendo una landing parcial; no hay resultados de negocio verificables.",
    },
    problema: {
      title: "Pérdida silenciosa de atribución",
      body: "Los equipos de marketing B2B sufren pérdida silenciosa de datos por fallos de tracking no detectados: un píxel roto, un UTM mal configurado o una integración caída pueden pasar semanas sin detectarse, generando decisiones de inversión basadas en datos incorrectos.\n\nConstraints: 5 semanas, único diseñador, alcance end-to-end (research → handoff). Objetivo: detectar esos fallos y traducir el dolor técnico en impacto financiero concreto que un perfil no técnico pueda entender.",
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
        tradeoff: "Prioriza diagnóstico y prevención antes que sumar otra vista de reporting histórico.",
      },
      {
        id: "02",
        title: "Cada rol arranca en una vista personalizada, no en un dashboard genérico",
        motivo:
          "Los 6 arquetipos (Marketing Manager, Founder, Sales Ops, Data Analyst, Admin, Developer) tienen necesidades muy distintas.",
        impacto: "Relevancia inmediata y menos fricción: cada usuario ve primero lo que le importa.",
        tradeoff: "Aumenta la complejidad de la arquitectura, pero evita un dashboard genérico para todos.",
      },
      {
        id: "03",
        title: "Health Score 0–100 para visualizar impacto financiero estimado",
        motivo: "Un perfil no técnico necesita entender el problema en plata, no en logs.",
        impacto: "Busca traducir un problema técnico a una señal comprensible para negocio.",
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
      { src: "/projects/garden-ads-ui-executive-dashboard.webp", width: 1440, height: 1024, name: "Dashboard ejecutivo", task: "Consultar una lectura de alto nivel sobre revenue y atribución.", decision: "La vista ejecutiva prioriza señales de negocio para perfiles que no necesitan leer logs.", alt: "Dashboard ejecutivo de GardenAds con indicadores de revenue y atribución.", role: "flow" },
      { src: "/projects/garden-ads-ui-integrations.webp", width: 1440, height: 1024, name: "Integraciones", task: "Conectar las fuentes que alimentan el diagnóstico de tracking.", decision: "Las integraciones se presentan como conexiones de solo lectura para reducir el riesgo percibido.", alt: "Pantalla de integraciones de GardenAds con conexiones de Stripe, Meta y Google Ads.", role: "flow" },
      { src: "/projects/garden-ads-ui-onboarding.webp", width: 1440, height: 1024, name: "Onboarding", task: "Configurar el espacio inicial antes de revisar la salud del tracking.", decision: "El onboarding ordena la configuración antes de exponer el diagnóstico del producto.", alt: "Flujo de onboarding de GardenAds para configurar una cuenta.", role: "gallery" },
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
    prev: {
      slug: "fintech",
      title: "Fintech PYME — Plataforma de Créditos B2B",
      role: "Diseñador UX/UI · No Country · 2025",
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
      figma: "https://www.figma.com/design/WfehLZHqanlAyZy5qPrlcV",
      behance: "https://www.behance.net/gallery/248459859/Startup-CRM-Plataforma-SaaS-UXUI?platform=direct",
    },
    context: {
      rol: "Diseñador UX/UI",
      duracion: "5 semanas · Mar–Abr 2026",
      focoLabel: "Foco",
      foco: "Operación · Pipeline · Handoff",
      tools: "Figma · FigJam",
    },
    description:
      "ChatCRM unifica la información comercial que hoy vive dispersa en WhatsApp, email y notas sueltas. El foco fue la operación diaria del equipo de ventas y la trazabilidad del pipeline, con el handoff a desarrollo como entregable primario.",
    notice:
      "Proyecto de No Country trabajado con diseñadores y desarrolladores. La implementación pública es parcial y no contiene datos suficientes para validar todos los flujos; presentarlo como evidencia del alcance diseñado, sin atribuir resultados de negocio.",
    users: {
      title: "Equipo comercial",
      body: "El foco está en equipos de ventas que necesitan recuperar el contexto de un prospecto y mantener visible el próximo paso del pipeline.",
    },
    outcome: {
      title: "Resultado documentado",
      body: "El alcance de diseño prioriza un pipeline kanban y un handoff claro para desarrollo. La implementación pública no tiene datos suficientes para presentar una experiencia completa ni resultados medidos.",
    },
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
          "En un equipo real el diseño solo vale si el dev lo puede construir sin ambigüedades.",
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
      "Tratar el handoff como entregable principal cambió cómo diseñé: pensar en cómo se construye cada componente, no solo cómo se ve, hace que el sistema sea mucho más sólido.",
    prev: {
      slug: "garden-ads",
      title: "GardenAds — Attribution & Tracking Health",
      role: "Diseñador UX/UI · No Country · 2026",
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
      figma: "https://www.figma.com/design/1jHTtZiRuYJM2cG5mtoEG3",
      behance: "https://www.behance.net/gallery/240712809/Multi-Brand-Design-System",
    },
    context: {
      rol: "Diseñador UX/UI",
      duracion: "5 semanas · Nov–Dic 2025",
      focoLabel: "Foco",
      foco: "Tokens · Arquitectura · Escala",
      tools: "Figma · Variables",
    },
    description:
      "Diseñé el sistema visual y la arquitectura de tokens para una plataforma EdTech con dos identidades diferenciadas: Academy (17+) y Kids (6–16). La documentación del proyecto describe una base de componentes compartida entre ambas marcas.",
    notice:
      "Proyecto colaborativo de No Country realizado por un equipo de UX/UI y Product Design. Las cifras y proporciones describen el archivo y el alcance documentado; no implican implementación de software ni resultados de negocio medidos.",
    users: {
      title: "Dos identidades, una base",
      body: "Academy y Kids representan públicos distintos dentro de una misma plataforma; el sistema debe permitir diferenciar la experiencia sin mantener dos estructuras separadas.",
    },
    outcome: {
      title: "Resultado documentado",
      body: "La documentación deja una arquitectura visual común con valores diferenciados por marca. El resultado se presenta como trabajo de sistema documentado, no como una reducción medida de tiempo o costo.",
    },
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
        tradeoff: "Limita la libertad de resolver cada marca desde cero, pero mantiene una base escalable.",
      },
      {
        id: "02",
        title: "Arquitectura de tokens paralela por marca",
        motivo:
          "Separar los valores por marca permite que cada identidad evolucione sin arrastrar a la otra.",
        impacto: "La separación conceptual permite ajustar valores de una marca sin rehacer la estructura común.",
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
      { src: "/projects/multi-brand-screen-2.webp", width: 1440, height: 1826, name: "Dashboard Kids", task: "Consultar el mismo tipo de experiencia en la identidad Kids.", decision: "La comparación muestra qué puede variar por marca sin duplicar la estructura del producto.", alt: "Dashboard de la marca Kids dentro del sistema de aprendizaje multimarca.", role: "comparison" },
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
      figma: "https://www.figma.com/design/mRTUkA0fo9kmxB94q6y57N",
      behance: "https://www.behance.net/gallery/240653385/TrainiT-PGT-%28Plataforma-de-Gestion-de-Proyectos%29",
    },
    context: {
      rol: "Diseñador UX/UI Jr.",
      duracion: "3 meses · Jul–Oct 2025",
      focoLabel: "Foco",
      foco: "Flujos · Coordinación",
      tools: "Figma · FigJam",
    },
    description:
      "Diseñé e iteré los flujos principales de TrainiT: dashboard, backlog, kanban, módulo de miembros y configuración. Coordiné el diseño durante 3 sprints, pasando por rondas de feedback técnico real.",
    notice:
      "Pasantía en Programa TrainiT trabajada con un equipo de desarrollo que implementó los flujos diseñados. La evidencia disponible documenta el alcance del trabajo; no se presenta como experiencia de No Country ni se atribuyen resultados de uso o negocio sin una fuente específica.",
    users: {
      title: "Equipo de proyecto",
      body: "El alcance se centra en las personas que coordinan tareas, priorizan trabajo y necesitan entender el estado general del proyecto antes de operar.",
    },
    outcome: {
      title: "Resultado documentado",
      body: "Los flujos principales fueron coordinados e iterados durante 3 sprints con feedback técnico. No se atribuyen resultados de adopción o negocio sin una fuente específica.",
    },
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
        tradeoff: "Agrega una pantalla de entrada, pero evita que el tablero sea el único contexto del proyecto.",
      },
      {
        id: "02",
        title: "Kanban y Backlog como módulos separados",
        motivo:
          "Mezclar el trabajo en curso con el pendiente genera ruido y desorganiza la vista.",
        impacto:
          "Cada módulo cumple un rol claro: ejecutar (kanban) vs priorizar (backlog).",
        tradeoff: "Duplica puntos de navegación, pero evita mezclar trabajo activo con trabajo pendiente.",
      },
      {
        id: "03",
        title: "Iteración en 3 sprints con feedback técnico",
        motivo:
          "Validar con desarrollo en cada sprint evita diseñar flujos imposibles de construir.",
        impacto:
          "Flujos refinados y realistas, alineados con lo que el equipo podía implementar.",
        tradeoff: "El feedback iterativo puede ralentizar decisiones puntuales, pero mantiene el alcance construible.",
      },
    ],
    images: ["/projects/trainit.webp"],
    heroImages: {
      desktop: "/projects/trainit-hero-desktop.webp",
      tablet: "/projects/trainit-hero-tablet.webp",
      mobile: "/projects/trainit-hero-mobile.webp",
    },
    galleryAspect: "16 / 9",
    pantallas: [
      { src: "/projects/trainit-ui-home.webp", width: 1366, height: 1210, fit: "cover", objectPosition: "center top", name: "Dashboard", task: "Entender el estado general del proyecto antes de operar.", decision: "El dashboard funciona como entrada para dar contexto antes del kanban.", alt: "Dashboard principal de TrainiT con resumen del estado del proyecto.", role: "key" },
      { src: "/projects/trainit-ui-backlog.webp", width: 1366, height: 768, fit: "cover", objectPosition: "center top", name: "Backlog", task: "Priorizar el trabajo pendiente del equipo.", decision: "Backlog y Kanban se separan para distinguir priorización de ejecución.", alt: "Backlog de TrainiT con tareas pendientes del proyecto.", role: "flow" },
      { src: "/projects/trainit-ui-card-detail.webp", width: 1366, height: 1094, fit: "cover", objectPosition: "center top", name: "Detalle de tarjeta", task: "Consultar y editar el detalle de una tarea.", decision: "El detalle concentra la información sin sacar al usuario del flujo de gestión.", alt: "Detalle de una tarjeta de tarea en TrainiT.", role: "flow" },
      { src: "/projects/trainit-ui-notifications.webp", width: 1366, height: 1210, fit: "cover", objectPosition: "center top", name: "Notificaciones", task: "Revisar novedades relevantes del proyecto.", decision: "Las notificaciones funcionan como una capa de seguimiento sobre los módulos principales.", alt: "Centro de notificaciones de TrainiT.", role: "flow" },
      { src: "/projects/trainit-ui-members.webp", width: 1366, height: 1162, fit: "cover", objectPosition: "center top", name: "Miembros", task: "Consultar la composición del equipo del proyecto.", decision: "La gestión de miembros se trata como módulo propio para no mezclarla con las tareas.", alt: "Vista de miembros de un proyecto en TrainiT.", role: "gallery" },
      { src: "/projects/trainit-ui-login.webp", width: 1366, height: 768, fit: "cover", objectPosition: "center center", name: "Ingreso", task: "Acceder al espacio de trabajo del proyecto.", decision: "El acceso se mantiene separado de la operación interna del producto.", alt: "Pantalla de ingreso de TrainiT.", role: "gallery" },
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
      role: "Diseñador UX/UI · No Country · 2025",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug && c.published !== false);
}
