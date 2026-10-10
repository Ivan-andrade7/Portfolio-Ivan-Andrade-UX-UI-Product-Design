// Copy editorial 0.3 aprobado; fecha pública limitada a 2025.
export const fintechEditorial = {
  "title": "Fintech PYME — Solicitar un crédito y organizar su revisión",
  "intro": "Una solicitud de crédito exige dos recorridos relacionados: la PyME necesita aportar información y entender cómo continuar; el equipo interno necesita revisar documentación y decidir qué solicitudes pueden avanzar. Diseñé la propuesta alrededor de esa relación.",
  "facts": [
    {
      "label": "Tipo",
      "value": "Simulación laboral"
    },
    {
      "label": "Organización",
      "value": "No Country"
    },
    {
      "label": "Año",
      "value": "2025"
    },
    {
      "label": "Rol",
      "value": "Único diseñador UX/UI"
    },
    {
      "label": "Contribución",
      "value": "Flujos, UI y prototipo"
    }
  ],
  "scope": "Diseño sin implementación ni resultados comerciales medidos. Los datos de las pantallas pertenecen al escenario simulado; no hay pruebas con usuarios documentadas. La simulación cerró sin una presentación en el Showcase tras reducirse la conformación del equipo.",
  "sections": [
    {
      "id": "superficies",
      "heading": "Dos superficies para tareas diferentes",
      "paragraphs": [
        "Separé el portal de la PyME de la superficie operativa. En el primero, el recorrido se organiza alrededor de verificar la identidad, completar una solicitud y consultar su estado. En el segundo, la atención se concentra en la revisión y la gestión de solicitudes.",
        "La separación responde a lo que cada persona necesita hacer. Quien solicita debe saber qué información falta y cuál es el siguiente paso. Quien revisa necesita consultar documentación y registrar un dictamen.",
        "Ambas superficies comparten una base visual y de componentes. La decisión suma una segunda interfaz que mantener, pero permite ordenar navegación y acciones según la tarea, sin mezclar la carga del solicitante con las herramientas de revisión."
      ]
    },
    {
      "id": "kyc",
      "heading": "KYC: orientar y ofrecer una salida ante el error",
      "paragraphs": [
        "Organicé la verificación de identidad en cuatro etapas: documentos, selfie, validación y resultado. Esta secuencia pertenece al KYC; la solicitud de crédito es otro recorrido.",
        "En mi análisis documental de American Express, Nubi y Mercado Pago encontré referencias sobre registro por etapas, DNI y selfie, y orientación mediante progreso visible. Tomé esos patrones como punto de partida para estructurar el flujo.",
        "La decisión implica más pantallas que un formulario único. A cambio, cada etapa presenta su tarea y señala el avance. La prioridad fue acompañar una operación sensible con instrucciones y estados explícitos.",
        "También trabajé situaciones en las que el recorrido se interrumpe. Ante un problema de acceso a la cámara, la pantalla indica revisar permisos y ofrece reintentar o subir un archivo. Si la identidad no se verifica, presenta posibles causas y acciones para intentar nuevamente o contactar a soporte. Son alternativas diseñadas para continuar, sin atribuir una causa concreta que el sistema no haya confirmado."
      ]
    },
    {
      "id": "revision",
      "heading": "Revisar exige reglas, además de estados",
      "paragraphs": [
        "La documentación distingue la verificación de identidad, la revisión de documentos y el dictamen sobre la solicitud. Una condición central del diseño es que una solicitud sólo puede aprobarse cuando la identidad está verificada.",
        "En los requisitos, el rol de operador consulta el estado de identidad y revisa documentación; el rol de supervisor contempla la asignación de solicitudes. Estas reglas orientan las acciones y la información que corresponde mostrar a cada perfil.",
        "La revisión incluye respuestas diferentes: aprobar, rechazar o pedir una corrección. Pedir que se complete documentación requiere explicar qué falta y cómo volver a enviarla. Rechazar requiere comunicar un motivo. La intención es que el estado tenga una consecuencia comprensible para quien solicita y una responsabilidad definida para quien revisa."
      ]
    },
    {
      "id": "entrega",
      "heading": "Entrega: hacer explícito el comportamiento",
      "paragraphs": [
        "El material reúne flujos, pantallas, prototipo y una biblioteca de componentes con variantes de interacción. La documentación toma shadcn/ui como referencia; por eso describo una base de componentes documentada, sin atribuirme un sistema íntegramente creado desde cero.",
        "En botones y campos, el archivo diferencia estados como foco, error y deshabilitado. Esa distinción lleva las decisiones del recorrido a elementos concretos de la interfaz: qué acción está disponible, dónde está el foco y qué información necesita atención.",
        "La documentación actual, organizada posteriormente, recoge criterios para revisar cámara denegada, carga fallida, validación demorada y ausencia de solicitudes."
      ]
    },
    {
      "id": "aprendizaje",
      "heading": "Aprendizaje: la continuidad depende de las excepciones",
      "paragraphs": [
        "Este caso me llevó a mirar la relación entre las dos superficies con más atención. El recorrido no termina cuando la PyME envía información: también importa cómo se revisa y qué recibe la persona cuando necesita actuar otra vez.",
        "Mi principal aprendizaje es definir juntos estado, motivo, permiso y siguiente acción. Una pantalla puede estar resuelta visualmente y conservar ambigüedades en esa relación.",
        "En un siguiente trabajo, priorizaría revisar un mismo expediente de punta a punta y contrastar el lenguaje de las excepciones antes de ampliar la interfaz. Ese ejercicio ayudaría a detectar diferencias entre lo que la operación registra y lo que el solicitante entiende."
      ]
    }
  ]
} as const;

export type FintechAsset = { src: string; width: number; height: number; title: string; alt: string };
const asset = (name: string, width: number, height: number, title: string, alt: string): FintechAsset => ({ src: "/projects/fintech-editorial/" + name + ".webp", width, height, title, alt });
export const fintechEvidence = {
  portal: {src: "/projects/documentary/fintech-portal-cliente-c38a2f14a2a8.webp", width:1440,height:1024,title:"PyME · Portal de solicitudes",alt:"Portal de la PyME verificada: solicitudes activas, estado Corregir, información adicional requerida y acción Nueva solicitud."},
  supervisor: {src: "/projects/documentary/fintech-dashboard-supervisor-5fb34c52f3e9.webp",width:1440,height:1024,title:"Superficie operativa · Dashboard de solicitudes",alt:"Dashboard de la superficie operativa con distribución de estados, solicitudes pendientes de asignación y tabla de solicitudes recientes."},
  pyme: asset("e01-pyme", 1000,560,"PyME · Verificación de identidad","Inicio de verificación de identidad, con zonas vacías para cargar el frente y dorso del DNI."),
  operation: asset("e01-operacion",1440,500,"Superficie operativa · Resumen de solicitudes","Resumen de solicitudes por estado en la superficie operativa, con cantidades de ejemplo."),
  camera: asset("e03-camara",540,450,"Acceso a cámara","Error de acceso a la cámara, con instrucción de revisar permisos y acciones Subir archivo e Intentar de nuevo."),
  identity: asset("e04-identidad",1000,575,"Identidad no verificada","Resultado de identidad no verificada, con posibles causas y acciones Contactar a Soporte e Intentar de nuevo."),
  buttons: asset("e06-botones",480,154,"Estados de botones","Variantes del botón principal en estados predeterminado, hover y activo, foco y deshabilitado."),
  fields: asset("e06-campos",1104,320,"Estados de campos","Variantes de campos vacíos, con contenido, foco, error, error con foco y deshabilitados."),
};
export const fintechCaptions = {
  cover: "Portal del cliente y dashboard operativo completos. Son vistas independientes, no un mismo expediente: incluso una numeración coincidente no acredita correspondencia entre sus datos. Estados, organizaciones e importes pertenecen al escenario diseñado.",
  camera: "Detalle del error de acceso a cámara: instrucciones y alternativas para continuar.",
  identity: "Si la identidad no se verifica, la pantalla presenta posibles causas, un reintento y contacto con soporte.",
  states: "Botones y campos: variantes de interacción documentadas en el archivo actual.",
  limits: "Casos límite recogidos en la documentación actual para revisar el diseño.",
};
export const fintechTranscripts = {
  camera: ["No pudimos acceder a tu cámara","Por favor, revisa los permisos de tu navegador e inténtalo de nuevo.","Subir archivo","Intentar de nuevo"],
  identity: ["No pudimos validar tu identidad","Esto puede ocurrir por varias razones. Las más comunes son:","La foto de tu DNI no era clara o tenía reflejos.","Los datos del DNI no coincidían con la información ingresada.","La selfie no era nítida o tu rostro no estaba completamente visible.","Contactar a Soporte","Intentar de nuevo"],
};
export const fintechLimits = ["Cámara denegada en selfie","Carga de documento fallida / reintento","Timeout en validación","CUIT o nombre de empresa largo (overflow)","Usuario con 0 solicitudes (estado vacío)"];
export const fintechButtonStates = [
  asset("e06-boton-default",93,77,"Default · Predeterminado","Botón principal en estado predeterminado."),
  asset("e06-boton-hover",93,77,"Hover & Active · Hover y activo","Botón principal en estado hover y activo."),
  asset("e06-boton-focus",93,77,"Focus · Foco","Botón principal con anillo de foco visible."),
  asset("e06-boton-disabled",93,77,"Disabled · Deshabilitado","Botón principal en estado deshabilitado."),
];
export const fintechFieldStates = [
  asset("e06-campo-empty",328,73,"Empty · Vacío","Campo vacío."),
  asset("e06-campo-placeholder",328,73,"Placeholder","Campo con placeholder."),
  asset("e06-campo-value",328,73,"Value · Con contenido","Campo con contenido de ejemplo."),
  asset("e06-campo-focus",328,73,"Focus · Foco","Campo con anillo de foco visible."),
  asset("e06-campo-error",328,73,"Error","Campo en estado de error."),
  asset("e06-campo-error-focus",328,73,"Error Focus · Error con foco","Campo en estado de error con anillo de foco visible."),
  asset("e06-campo-disabled",328,73,"Disabled · Deshabilitado","Campo en estado deshabilitado."),
];
