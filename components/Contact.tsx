"use client";

import { useState } from "react";
import { Send, ArrowRight, Mail, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { SiBehance } from "react-icons/si";

/* ── Brand icons ── */
function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ── Contact links ── */
const CONTACT_LINKS = [
  {
    label: "ivanandradeuxui@gmail.com",
    href: "mailto:ivanandradeuxui@gmail.com",
    Icon: () => <Mail size={20} aria-hidden />,
  },
  {
    label: "Ivan Andrade",
    href: "https://www.linkedin.com/in/ivan-andrade-uxui/",
    Icon: LinkedinIcon,
  },
  {
    label: "Ivan Andrade",
    href: "https://www.behance.net/ivaanandrade",
    Icon: () => <SiBehance size={20} aria-hidden />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5492346683761",
    Icon: WhatsAppIcon,
  },
];

/* ── Feedback banner (Figma 210:417) ──
   Success: #022c22 bg / #065f46 border / #6ee7b7 text
   Warning: #451a03 bg / #92400e border / #fcd34d text
   Error:   #4c0519 bg / #9f1239 border / #fda4af text          */
type FeedbackType = "success" | "warning" | "error";

const FEEDBACK = {
  success: {
    bg:     "var(--feedback-success-bg)",
    border: "var(--feedback-success-border)",
    color:  "var(--feedback-success-text)",
    Icon: CheckCircle2,
    title: "Mensaje enviado correctamente",
    body: "Te responderé en menos de 48hs hábiles.",
  },
  warning: {
    bg:     "var(--feedback-warning-bg)",
    border: "var(--feedback-warning-border)",
    color:  "var(--feedback-warning-text)",
    Icon: AlertTriangle,
    title: "Campos incompletos o inválidos",
    body: "Completá tu nombre, un email válido y un mensaje antes de enviar.",
  },
  error: {
    bg:     "var(--feedback-error-bg)",
    border: "var(--feedback-error-border)",
    color:  "var(--feedback-error-text)",
    Icon: XCircle,
    title: "Error al enviar",
    body: "Intentá de nuevo o escribime directamente a ivanandradeuxui@gmail.com.",
  },
} as const;

function FeedbackBanner({ type, bodyOverride }: { type: FeedbackType; bodyOverride?: string }) {
  const { bg, border, color, Icon, title, body } = FEEDBACK[type];
  return (
    <div
      className="flex gap-3 items-start p-4 rounded-xl border w-full"
      style={{ background: bg, borderColor: border }}
      role="alert"
      aria-live="polite"
    >
      <Icon size={20} style={{ color }} className="shrink-0 mt-[2px]" aria-hidden />
      <div className="flex flex-col gap-2 flex-1 min-w-0" style={{ color }}>
        <p className="text-[14px] font-semibold leading-5">{title}</p>
        <p className="text-[14px] leading-6 font-normal">{bodyOverride ?? body}</p>
      </div>
    </div>
  );
}

/* ── Input class helper ── */
const INPUT_BASE =
  "w-full px-4 rounded-lg text-[16px] leading-7 bg-[var(--surface-secondary)] border outline-none transition-all placeholder:text-[var(--text-placeholder)]";

function inputCls(hasError: boolean): string {
  return hasError
    ? `${INPUT_BASE} border-[#9f1239] text-[var(--text-primary)]`
    : `${INPUT_BASE} border-[var(--border-default)] text-[var(--text-primary)] hover:border-2 hover:border-[var(--border-default)] focus:border-[var(--border-interactive)] focus:shadow-[0_0_0_4px_var(--focus-ring)]`;
}

/* Strict email regex */
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

/* Typo detection for common email domains */
const COMMON_DOMAINS = [
  "gmail.com", "hotmail.com", "outlook.com", "yahoo.com",
  "icloud.com", "live.com", "hotmail.es", "yahoo.com.ar",
  "hotmail.com.ar", "gmail.com.ar",
];

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

function detectEmailTypo(email: string): string | null {
  const at = email.lastIndexOf("@");
  if (at < 0) return null;
  const domain = email.slice(at + 1).toLowerCase();
  for (const common of COMMON_DOMAINS) {
    if (domain !== common && levenshtein(domain, common) <= 1) return common;
  }
  return null;
}

type FieldErrors = { name?: boolean; email?: boolean; message?: boolean };

/* ── Links column (shared between form and success states) ── */
function LinksColumn() {
  return (
    <div className="flex flex-col gap-6 flex-1 min-w-[320px]">
      <div className="flex flex-col gap-3">
        <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5 whitespace-nowrap">
          Otros canales
        </p>
        {CONTACT_LINKS.map(({ label, href, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:border-[var(--border-interactive)] transition-colors no-underline"
          >
            <span className="text-[var(--text-accent)] shrink-0"><Icon /></span>
            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-accent)] text-[14px] font-semibold leading-5 flex-1 min-w-0 truncate transition-colors">
              {label}
            </span>
            <ArrowRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-accent)] shrink-0 transition-colors" aria-hidden />
          </a>
        ))}
      </div>
      <div
        className="flex flex-col p-4 rounded-lg bg-[var(--bg-secondary)]"
        style={{ gap: "2px", border: "1px solid var(--surface-secondary)" }}
      >
        <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5">Zona horaria</p>
        <p className="text-[var(--text-secondary)] text-[14px] leading-6">
          Buenos Aires (UTC-3) · Disponible para reuniones remotas
        </p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors]   = useState<FieldErrors>({});
  const [banner, setBanner]   = useState<FeedbackType | null>(null);
  const [bannerBody, setBannerBody] = useState<string | undefined>(undefined);
  const [sent, setSent]       = useState(false);   // true → show success state

  /* Clear individual field error on edit */
  const clearErr = (field: keyof FieldErrors) =>
    setErrors((prev) => ({ ...prev, [field]: undefined }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    /* ── Strict validation ── */
    const emailVal = email.trim();
    const validFormat = emailVal.length > 0 && EMAIL_RE.test(emailVal);
    const typoSuggestion = validFormat ? detectEmailTypo(emailVal) : null;

    const newErrors: FieldErrors = {};
    if (!name.trim())                     newErrors.name    = true;
    if (!validFormat || typoSuggestion)   newErrors.email   = true;
    if (!message.trim())                  newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setBanner("warning");
      if (typoSuggestion) {
        const local = emailVal.slice(0, emailVal.lastIndexOf("@") + 1);
        setBannerBody(`El email parece tener un error tipográfico. ¿Quisiste escribir ${local}${typoSuggestion}?`);
      } else {
        setBannerBody(undefined);
      }
      return;
    }

    /* ── All valid: send via API ── */
    setErrors({});
    setBanner(null);
    setBannerBody(undefined);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: emailVal, message: message.trim() }),
      });

      if (!res.ok) throw new Error("send failed");

      setSent(true);
    } catch {
      setBanner("error");
    }
  };

  const handleReset = () => {
    setName(""); setEmail(""); setMessage("");
    setErrors({}); setBanner(null); setBannerBody(undefined); setSent(false);
  };

  return (
    <section
      id="contactos"
      className="flex flex-col gap-12 px-6 md:px-12 xl:px-24 py-16 bg-[var(--bg-primary)]"
    >
      {/* ── Section header ── */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2 h-4">
          <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0" />
          <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
            Contacto
          </span>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px]">
            Hablemos sobre{" "}
            <span className="text-[var(--text-accent)]">tu proyecto</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-7">
            Disponible para roles full-time remotos, proyectos freelance y colaboraciones. Respondo en menos de 48hs hábiles.
          </p>
        </div>
      </div>

      {/* ── Contact Row ── */}
      <div className="flex flex-wrap gap-12 items-start w-full">

        {/* ── LEFT COLUMN: form OR success state ── */}
        {sent ? (
          /* Success state (Figma 864:11035) — replace form entirely */
          <div className="flex flex-col gap-4 flex-1 min-w-[320px]">
            <FeedbackBanner type="success" />
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center h-10 px-4 rounded-lg text-[var(--text-primary)] text-[14px] font-semibold leading-5 hover:bg-[var(--bg-secondary)] transition-colors w-fit"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 flex-1 min-w-[320px]"
          >
            {/* Nombre */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold leading-5 text-[var(--text-secondary)]">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                autoComplete="name"
                onChange={(e) => { setName(e.target.value); clearErr("name"); }}
                className={`${inputCls(!!errors.name)} h-12 py-3`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold leading-5 text-[var(--text-secondary)]">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                autoComplete="email"
                onChange={(e) => { setEmail(e.target.value); clearErr("email"); }}
                className={`${inputCls(!!errors.email)} h-12 py-3`}
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold leading-5 text-[var(--text-secondary)]">
                Mensaje
              </label>
              <textarea
                placeholder="Contame sobre tu proyecto"
                value={message}
                onChange={(e) => { setMessage(e.target.value); clearErr("message"); }}
                className={`${inputCls(!!errors.message)} h-[96px] py-3 resize-none`}
              />
            </div>

            {/* Warning / Error banner — visible before submit button */}
            {banner && <FeedbackBanner type={banner} bodyOverride={bannerBody} />}

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center gap-3 h-12 px-4 py-3 rounded-lg shrink-0 w-fit bg-[var(--brand-primary)] text-[var(--text-inverse)] text-[14px] font-semibold leading-5 hover:bg-[var(--brand-hover)] active:scale-[0.98] transition-colors"
            >
              <Send size={20} aria-hidden />
              Enviar mensaje
            </button>
          </form>
        )}

        {/* ── RIGHT COLUMN: always visible ── */}
        <LinksColumn />
      </div>
    </section>
  );
}
