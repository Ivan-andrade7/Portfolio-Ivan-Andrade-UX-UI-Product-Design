import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SiBehance } from "react-icons/si";

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function BehanceIcon() {
  return <SiBehance size={20} aria-hidden />;
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const PROJECT_LINKS = [
  { label: "GardenAds", href: "/proyectos/garden-ads" },
  { label: "Fintech PYME", href: "/proyectos/fintech" },
  { label: "CRM Startup", href: "/proyectos/crm" },
  { label: "Multi-Brand DS", href: "/proyectos/multi-brand" },
  { label: "TrainiT", href: "/proyectos/trainit" },
];

const CONTACT_LINKS = [
  { label: "ivanandradeuxui@gmail.com", href: "mailto:ivanandradeuxui@gmail.com", Icon: () => <Mail size={20} aria-hidden /> },
  { label: "Ivan Andrade", href: "https://www.linkedin.com/in/ivan-andrade-uxui/", Icon: LinkedinIcon },
  { label: "Ivan Andrade", href: "https://www.behance.net/ivaanandrade", Icon: BehanceIcon },
  { label: "WhatsApp", href: "https://wa.me/5492346683761", Icon: WhatsAppIcon },
];

const NAV_LINKS = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Educación", href: "/#educacion" },
  { label: "Contacto", href: "/#contactos" },
];

/* Navigation / Item states (836:3121):
   Default: text-secondary
   Hover / Active / Focus: text-accent */
const NAV_ITEM = "flex items-center gap-2 h-8 px-3 py-2 rounded-lg text-[var(--text-secondary)] text-[14px] font-semibold leading-5 hover:text-[var(--text-accent)] transition-colors no-underline";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-default)]">
      {/* p-8 = inset/xl=32px; gap/lg=24px between blocks */}
      <div className="p-8 flex flex-col gap-6">

        {/* Top row: justify-between, gap-y only (columns fill via flex-1) */}
        <div className="flex flex-wrap gap-y-6 items-start justify-between w-full">

          {/* Brand */}
          <div className="flex flex-col gap-2 flex-1 min-w-[220px]">
            {/* H3: 24px/600/32px/-1px — accent */}
            <Link href="/" className="text-[var(--text-accent)] text-[24px] font-semibold leading-8 tracking-[-1px] w-fit">
              Iván Andrade
            </Link>
            {/* Body-S: 14px/400/24px — tertiary */}
            <p className="text-[var(--text-tertiary)] text-[14px] leading-6">
              Product Designer especializado en SaaS B2B, Fintech y Design Systems. Buenos Aires, Argentina.
            </p>
          </div>

          {/* Projects column */}
          <div className="flex flex-col gap-2 flex-1 min-w-[220px]">
            {/* Label-S: 12px/600/16px/1px — tertiary, px-3 */}
            <p className="text-[var(--text-tertiary)] text-[12px] font-semibold leading-4 tracking-[1px] px-3">
              PROYECTOS
            </p>
            <div className="flex flex-col gap-2">
              {PROJECT_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className={NAV_ITEM}>
                  <ArrowRight size={20} className="shrink-0" aria-hidden />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-2 flex-1 min-w-[220px]">
            <p className="text-[var(--text-tertiary)] text-[12px] font-semibold leading-4 tracking-[1px] px-3">
              CONTACTO
            </p>
            <div className="flex flex-col gap-2">
              {CONTACT_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={NAV_ITEM}
                >
                  <span className="shrink-0"><Icon /></span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[var(--border-default)]" />

        {/* Bottom row: copyright left, nav links right */}
        <div className="flex flex-wrap gap-2 items-start justify-end w-full">
          {/* Label-S: 12px/600/16px/1px — tertiary, flex-1 */}
          <p className="flex-1 min-w-px text-[var(--text-tertiary)] text-[12px] font-semibold leading-4 tracking-[1px] h-8 flex items-center">
            © 2026 Iván Andrade · Diseñado con criterio.
          </p>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center justify-center h-8 px-4 text-[var(--text-link)] text-[14px] font-semibold leading-5 whitespace-nowrap hover:opacity-80 transition-opacity no-underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
