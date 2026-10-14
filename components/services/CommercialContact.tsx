"use client";
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { inputCls, FeedbackBanner } from "@/components/Contact";
import { EMAIL_RE, detectEmailTypo } from "@/lib/contact-validation";

import { COMMERCIAL_ENABLED, submitCommercial, type SubmissionResult } from "@/lib/commercial-form";

const PROJECTS = ["Landing profesional", "Sitio institucional", "Rediseño o mejora", "Implementación desde un diseño existente", "Mantenimiento o actualización", "No estoy seguro"];
const INITIAL = { nombre: "", email: "", actividad: "", tipo: "", necesidad: "", web: "", plazo: "", presupuesto: "" };
type Field = keyof typeof INITIAL;
export default function CommercialContact({ reviewTransport }: { reviewTransport?: (data: Record<string, string>) => Promise<SubmissionResult> }) {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [optionalOpen, setOptionalOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error" | "limit">("idle");
  const busy = useRef(false), accepted = useRef("");
  const statusRef = useRef<HTMLDivElement>(null);
  const available = !!reviewTransport || COMMERCIAL_ENABLED;
  const review = !!reviewTransport;
  const formRef = useRef<HTMLFormElement>(null);
  const optionalRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const selectProject = (event: Event) => { const project = (event as CustomEvent<string>).detail; if (PROJECTS.includes(project)) setValues(prev => ({ ...prev, tipo: project })); };
    window.addEventListener("commercial-project", selectProject);
    return () => window.removeEventListener("commercial-project", selectProject);
  }, []);
  function change(field: Field, value: string) { if (busy.current) return; setNotice(""); setState("idle"); setValues(prev => ({ ...prev, [field]: value })); setErrors(prev => ({ ...prev, [field]: undefined })); }
  async function validate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current || !available || accepted.current === JSON.stringify(values)) return;
    const next: Partial<Record<Field, string>> = {};
    if (!values.nombre.trim()) next.nombre = "Completá tu nombre.";
    const email = values.email.trim(), typo = EMAIL_RE.test(email) ? detectEmailTypo(email) : null;
    if (!EMAIL_RE.test(email) || typo) next.email = typo ? `¿Quisiste escribir ${email.slice(0, email.lastIndexOf("@") + 1)}${typo}?` : "Ingresá un email válido.";
    if (!values.actividad.trim()) next.actividad = "Contame cuál es tu actividad.";
    if (!PROJECTS.includes(values.tipo)) next.tipo = "Seleccioná una opción.";
    if (!values.necesidad.trim()) next.necesidad = "Contame qué necesitás resolver.";
    if (values.web.trim()) { try { const url = new URL(values.web.trim()); if (!['http:', 'https:'].includes(url.protocol)) throw new Error(); } catch { next.web = "Ingresá un enlace completo válido."; } }
    if (next.web) { if (optionalRef.current) optionalRef.current.open = true; setOptionalOpen(true); }
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) { setState("idle"); setNotice("Revisá los campos indicados. No se envió ningún dato."); requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`#commercial-${first}`)?.focus()); return; }
    busy.current = true; setState("sending"); setNotice("Enviando la consulta…");
    try {
      const payload = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()]));
      const result = await (reviewTransport || submitCommercial)(payload);
      const providerErrors: Partial<Record<Field, string>> = {};
      for (const [key, message] of Object.entries(result.fields || {})) if (key in INITIAL) providerErrors[key as Field] = message;
      setErrors(providerErrors);
      if (providerErrors.web) { if (optionalRef.current) optionalRef.current.open = true; setOptionalOpen(true); }
      setState(result.kind);
      setNotice(result.kind === "success" ? "Tu consulta se envió correctamente. Revisaré la información para responderte al email indicado." : result.kind === "limit" ? "El proveedor limitó los envíos. Esperá antes de volver a intentar o usá WhatsApp o email. Conservamos lo que escribiste." : "No pudimos confirmar la aceptación de la consulta. Conservamos lo que escribiste. Podés volver a intentar o usar WhatsApp o email.");
      if (result.kind === "success") accepted.current = JSON.stringify(values);
      requestAnimationFrame(() => { const key = Object.keys(providerErrors)[0]; if (key) formRef.current?.querySelector<HTMLElement>(`#commercial-${key}`)?.focus(); else statusRef.current?.focus(); });
    } catch {
      setState("error"); setNotice("No pudimos confirmar el envío por un problema de conexión o espera. Puede haber llegado al proveedor: evitá repetirlo inmediatamente. Los datos siguen disponibles."); requestAnimationFrame(() => statusRef.current?.focus());
    } finally { busy.current = false; }
  }
  function field(name: Field, label: string, options: { optional?: boolean; full?: boolean; textarea?: boolean; type?: string; placeholder?: string } = {}) {
    const id = `commercial-${name}`, errorId = `${id}-error`;
    const described = [name === 'necesidad' ? `${id}-hint` : null, errors[name] ? errorId : null].filter(Boolean).join(' ') || undefined;
    const common = { disabled: state === "sending", id, name, value: values[name], required: !options.optional, "aria-invalid": errors[name] ? true as const : undefined, "aria-describedby": described, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => change(name, e.target.value) };
    return <div className={`sw-field ${options.full ? 'sw-full' : ''}`} key={name}><label htmlFor={id} className="text-[14px] font-semibold leading-5 text-[var(--text-secondary)]">{label}{options.optional && <span className="sw-optional-label"> · opcional</span>}</label>
      {name === 'tipo' ? <select {...common} className={`${inputCls(!!errors[name])} h-12 sw-select`}><option value="">Seleccioná una opción</option>{PROJECTS.map(p => <option key={p}>{p}</option>)}</select> : options.textarea ? <textarea {...common} placeholder={options.placeholder} className={`${inputCls(!!errors[name])} h-[96px] py-3 resize-none`} /> : <input {...common} type={options.type || 'text'} autoComplete={name === 'nombre' ? 'name' : name === 'email' ? 'email' : undefined} placeholder={options.placeholder} className={`${inputCls(!!errors[name])} h-12 py-3`} />}
      {name === 'necesidad' && <p id={`${id}-hint`} className="text-[12px] leading-5 text-[var(--text-tertiary)]">Podés incluir referencias o enlaces en esta descripción.</p>}
      {errors[name] && <p id={errorId} className="text-[12px] leading-5 text-[var(--feedback-error-text)]">{errors[name]}</p>}
    </div>;
  }
  return <form ref={formRef} id="commercial-consulta" className="home-contact sw-form" aria-busy={state === "sending"} noValidate onSubmit={validate}>
    <div className="sw-fields">{field('nombre', 'Nombre')}{field('email', 'Email', { type: 'email' })}{field('actividad', 'Negocio o actividad', { full: true })}{field('tipo', 'Tipo de proyecto', { full: true })}{field('necesidad', '¿Qué necesitás resolver?', { full: true, textarea: true, placeholder: 'Qué querés comunicar, mejorar o facilitar con la web.' })}</div>
    <details ref={optionalRef} className="sw-optional sw-disclosure" onToggle={e => setOptionalOpen(e.currentTarget.open)}><summary aria-expanded={optionalOpen} aria-controls="commercial-optional-fields">Sumar información opcional <span aria-hidden="true" className="sw-optional-label">{optionalOpen ? 'Abierto' : 'Cerrado'}</span></summary><div id="commercial-optional-fields" className="sw-fields">{field('web', 'Web actual', { optional: true, full: true, type: 'url', placeholder: 'https://' })}{field('plazo', 'Plazo aproximado', { optional: true, placeholder: 'Una fecha o referencia' })}{field('presupuesto', 'Presupuesto estimado', { optional: true, placeholder: 'Si ya tenés una referencia' })}</div></details>
    {Object.values(errors).some(Boolean) && <FeedbackBanner type="warning" bodyOverride={notice} />}
    {notice && !Object.values(errors).some(Boolean) && <div ref={statusRef} tabIndex={-1} className={`sw-simulation-feedback sw-${state}`} role={state === "error" || state === "limit" ? "alert" : "status"}>{review && <strong>Respuesta controlada · sin envío real. </strong>}{notice}</div>}
    <button type="submit" disabled={!available || state === "sending" || accepted.current === JSON.stringify(values)} aria-busy={state === "sending" ? true : undefined} aria-describedby="commercial-availability" className="flex items-center gap-3 h-12 px-4 py-3 rounded-lg shrink-0 w-fit bg-[var(--brand-primary)] text-[var(--text-inverse)] text-[14px] font-semibold leading-5 hover:bg-[var(--brand-hover)] active:scale-[0.98] transition-colors sw-form-action"><Send size={20} aria-hidden />{state === 'sending' ? 'Enviando…' : 'Enviar consulta'}</button>
    <p id="commercial-availability" className="text-[12px] leading-5 text-[var(--text-tertiary)]">{review ? "Revisión con respuestas controladas: no se transmite ningún dato." : available ? "El envío se procesa a través de Formspree." : "El formulario no está disponible en este momento. Podés contactarme por WhatsApp o email."}</p>
    <details className="sw-disclosure sw-data-note"><summary>Información sobre tus datos</summary><p>Uso tu nombre, email y la información que compartas para revisar tu consulta y responderte. El formulario la procesa Formspree y envía una notificación a ivanandradeuxui@gmail.com. En el plan Free, Formspree ofrece un archivo de consultas de 30 días. Las copias en Gmail se conservan de forma independiente de ese archivo.</p><p>Las consultas comerciales que no avancen a un trabajo se eliminarán manualmente de Gmail a los 90 días desde la última interacción. Las que se conviertan en trabajo tendrán un tratamiento separado según la relación y la documentación correspondiente. Esta eliminación manual no implica borrar automáticamente el archivo ni los backups de Formspree.</p><p>Podés escribirme a ivanandradeuxui@gmail.com para consultar sobre tus datos o solicitar su eliminación. Evitá incluir información sensible. Si elegís WhatsApp o email, tus datos pasan al canal que abras.</p></details>
  </form>;
}
