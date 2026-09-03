"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Command, Copy, ExternalLink, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type CommandAction = {
  id: string;
  label: string;
  category: string;
  href?: string;
  tag?: string;
  external?: boolean;
  copy?: string;
};

const ACTIONS: CommandAction[] = [
  { id: "garden-ads", label: "GardenAds — Attribution & Tracking Health", category: "Casos de estudio", href: "/proyectos/garden-ads", tag: "Analytics SaaS" },
  { id: "fintech", label: "Fintech PYME — Plataforma de Créditos B2B", category: "Casos de estudio", href: "/proyectos/fintech", tag: "Fintech" },
  { id: "multi-brand", label: "Multi-Brand Design System", category: "Casos de estudio", href: "/proyectos/multi-brand", tag: "Design System" },
  { id: "crm", label: "ChatCRM — CRM para PyMEs", category: "Casos de estudio", href: "/proyectos/crm", tag: "SaaS B2B" },
  { id: "trainit", label: "TrainiT — Gestión de Proyectos", category: "Casos de estudio", href: "/proyectos/trainit", tag: "Product Design" },
  { id: "copy-email", label: "Copiar correo de contacto", category: "Acciones", copy: "ivanandradeuxui@gmail.com", tag: "Email" },
  { id: "linkedin", label: "Abrir perfil de LinkedIn", category: "Enlaces", href: "https://www.linkedin.com/in/ivan-andrade-uxui/", external: true },
  { id: "cv", label: "Descargar CV actualizado", category: "Acciones", href: "/cv/CV_Ivan_Andrade.pdf", tag: "PDF" },
];

function openCommandMenu() {
  window.dispatchEvent(new Event("portfolio:open-command-menu"));
}

export function CommandMenuTrigger() {
  return (
    <button
      type="button"
      onClick={openCommandMenu}
      aria-label="Abrir navegación rápida"
      className="hidden xl:flex items-center gap-2 h-8 px-3 rounded-lg border border-[var(--border-default)] text-[14px] font-semibold leading-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]"
    >
      <Search size={16} />
      Buscar
      <kbd className="ml-1 rounded border border-[var(--border-default)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--text-tertiary)]">⌘K</kbd>
    </button>
  );
}

export default function CommandMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const filteredActions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return ACTIONS;
    return ACTIONS.filter((action) =>
      [action.label, action.category, action.tag].filter(Boolean).some((value) => value!.toLowerCase().includes(normalizedQuery)),
    );
  }, [query]);

  useEffect(() => {
    function handleGlobalKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((current) => !current);
      }
      if (event.key === "Escape") setIsOpen(false);
    }

    function handleOpenRequest() {
      setIsOpen(true);
    }

    window.addEventListener("keydown", handleGlobalKeyDown);
    window.addEventListener("portfolio:open-command-menu", handleOpenRequest);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
      window.removeEventListener("portfolio:open-command-menu", handleOpenRequest);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setCopied(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex((current) => Math.min(current, Math.max(filteredActions.length - 1, 0)));
  }, [filteredActions.length]);

  function closeMenu() {
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  async function executeAction(action: CommandAction) {
    if (action.copy) {
      try {
        await navigator.clipboard.writeText(action.copy);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } catch {
        setCopied(false);
      }
      return;
    }

    if (!action.href) return;
    if (action.external) {
      window.open(action.href, "_blank", "noopener,noreferrer");
    } else if (action.href !== pathname) {
      router.push(action.href);
    }
    closeMenu();
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((current) => filteredActions.length ? (current + 1) % filteredActions.length : 0);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((current) => filteredActions.length ? (current - 1 + filteredActions.length) % filteredActions.length : 0);
    } else if (event.key === "Enter" && filteredActions[selectedIndex]) {
      event.preventDefault();
      void executeAction(filteredActions[selectedIndex]);
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    function trapFocus(event: KeyboardEvent) {
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, input, [href]"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", trapFocus);
    return () => window.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  return (
    <>
      <button ref={triggerRef} type="button" onClick={openCommandMenu} aria-label="Abrir navegación rápida" className="sr-only">
        Abrir navegación rápida
      </button>

      {isOpen && createPortal(
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-[var(--overlay-card)] px-4 pt-20 backdrop-blur-sm md:pt-28"
          role="presentation"
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeMenu(); }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-menu-title"
            className="flex w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-[var(--border-default)] px-4 py-3">
              <Search size={18} className="shrink-0 text-[var(--text-tertiary)]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => { setQuery(event.target.value); setSelectedIndex(0); }}
                onKeyDown={handleInputKeyDown}
                placeholder="Buscar casos, etiquetas o acciones…"
                aria-label="Buscar en el portfolio"
                className="min-w-0 flex-1 bg-transparent text-[16px] leading-7 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-placeholder)]"
              />
              <kbd className="hidden rounded border border-[var(--border-default)] px-2 py-1 text-[12px] text-[var(--text-tertiary)] sm:inline-flex">Esc</kbd>
            </div>

            <div id="command-menu-title" className="sr-only">Navegación rápida del portfolio</div>
            <div className="max-h-[min(60vh,480px)] overflow-y-auto p-2" role="listbox" aria-label="Resultados de navegación">
              {filteredActions.length === 0 ? (
                <p className="px-4 py-8 text-center text-[14px] text-[var(--text-tertiary)]">No se encontraron resultados.</p>
              ) : filteredActions.map((action, index) => {
                const isSelected = index === selectedIndex;
                const isCopied = action.copy && copied;
                return (
                  <button
                    key={action.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={() => void executeAction(action)}
                    className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-3 text-left transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)] ${isSelected ? "bg-[var(--bg-secondary)]" : "hover:bg-[var(--bg-secondary)]"}`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-default)] text-[var(--text-accent)]">
                        {isCopied ? <Check size={16} /> : action.copy ? <Copy size={16} /> : action.external ? <ExternalLink size={16} /> : <Command size={16} />}
                      </span>
                      <span className="flex min-w-0 flex-col gap-0.5">
                        <span className="truncate text-[14px] font-semibold leading-5 text-[var(--text-primary)]">{isCopied ? "Correo copiado" : action.label}</span>
                        <span className="truncate text-[12px] leading-4 text-[var(--text-tertiary)]">{action.category}</span>
                      </span>
                    </span>
                    {action.tag && <span className="shrink-0 rounded-full border border-[var(--border-default)] px-2 py-1 text-[11px] font-semibold text-[var(--text-tertiary)]">{action.tag}</span>}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-default)] px-4 py-3 text-[12px] text-[var(--text-tertiary)]">
              <span><kbd className="rounded border border-[var(--border-default)] px-1.5 py-0.5">↑↓</kbd> navegar · <kbd className="rounded border border-[var(--border-default)] px-1.5 py-0.5">↵</kbd> abrir</span>
              <span>Ctrl K / ⌘K</span>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

