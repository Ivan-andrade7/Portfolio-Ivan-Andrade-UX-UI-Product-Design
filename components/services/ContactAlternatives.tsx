import { Mail, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/Contact";
const message = "Hola, Iván. Me interesa consultar por una web para mi actividad.";
export default function ContactAlternatives() {
  return <div className="sw-contact-alternatives"><p>¿Preferís conversar primero? Escribime por WhatsApp.</p><div className="flex flex-col gap-3">{[
    { label: "WhatsApp", href: `https://wa.me/5492346683761?text=${encodeURIComponent(message)}`, Icon: WhatsAppIcon },
    { label: "ivanandradeuxui@gmail.com", href: "mailto:ivanandradeuxui@gmail.com", Icon: () => <Mail size={20} aria-hidden /> }
  ].map(({ label, href, Icon }) => <a key={href} href={href} target={href.startsWith("https") ? "_blank" : undefined} rel={href.startsWith("https") ? "noopener noreferrer" : undefined} className="group flex items-center gap-2 px-4 py-3 portfolio-action bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:border-[var(--border-interactive)] transition-colors no-underline"><span className="text-[var(--text-accent)] shrink-0"><Icon /></span><span className="text-[var(--text-secondary)] group-hover:text-[var(--text-accent)] text-[14px] font-semibold leading-5 flex-1 min-w-0 break-all transition-colors">{label}</span><ArrowRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-accent)] shrink-0 transition-colors" aria-hidden /></a>)}</div><p className="sw-channel-help">WhatsApp abre una conversación con el mensaje inicial; vos decidís enviarlo.</p></div>;
}
