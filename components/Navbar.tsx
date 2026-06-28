"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "Inicio",      href: "/#inicio",      id: "inicio" },
  { label: "Sobre mí",    href: "/#sobre-mi",    id: "sobre-mi" },
  { label: "Proyectos",   href: "/#proyectos",   id: "proyectos" },
  { label: "Experiencia", href: "/#experiencia", id: "experiencia" },
  { label: "Educación",   href: "/#educacion",   id: "educacion" },
  { label: "Contactos",   href: "/#contactos",   id: "contactos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("inicio");
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  /* ── scroll detection → backdrop ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── IntersectionObserver → active section ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 },
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navBg = scrolled
    ? isDark ? "rgba(2,6,23,0.85)" : "rgba(248,250,252,0.85)"
    : "var(--bg-primary)";

  return (
    <nav
      className="border-b sticky top-0 z-50 w-full backdrop-blur-sm"
      style={{ backgroundColor: navBg, borderColor: "var(--border-default)", transition: "background-color 0.2s ease" }}
    >
      {/* ── Bar ── */}
      <div className="relative flex items-center justify-between px-5 xl:px-8 py-4">

        {/* Toggle pill */}
        <button
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          onClick={toggle}
          className="flex items-center border rounded-full p-2 w-20 shrink-0 cursor-pointer transition-all duration-200"
          style={{
            backgroundColor: "var(--surface-elevated)",
            borderColor: "var(--border-default)",
            justifyContent: isDark ? "flex-start" : "flex-end",
          }}
        >
          {isDark
            ? <Moon className="w-4 h-4 xl:w-5 xl:h-5" style={{ color: "var(--text-accent)" }} />
            : <Sun  className="w-4 h-4 xl:w-5 xl:h-5" style={{ color: "var(--text-accent)" }} />
          }
        </button>

        {/* Logo — Mobile: centrado absoluto (no cliqueable), Desktop: enlace a home */}
        <Link
          href="/"
          className="
            absolute left-1/2 -translate-x-1/2
            xl:static xl:translate-x-0
            text-[20px] leading-7 xl:text-[24px] xl:leading-8
            font-semibold tracking-[-1px] shrink-0
            pointer-events-none xl:pointer-events-auto
          "
          style={{ color: "var(--text-accent)" }}
        >
          Iván Andrade
        </Link>

        {/* Desktop nav items */}
        <div className="hidden xl:flex items-center gap-2.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveId(link.id)}
                className={[
                  "text-[14px] font-semibold leading-5 tracking-[0px]",
                  "h-8 px-3 py-2 rounded-lg flex items-center",
                  "transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]",
                  isActive
                    ? "text-[var(--text-accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-accent)]",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: CV (desktop) + hamburger (mobile) */}
        <div className="flex items-center shrink-0">
          <a
            href="/cv/CV_Ivan_Andrade.pdf"
            download
            className="hidden xl:flex items-center gap-2 text-[14px] font-semibold leading-5 h-8 px-3 py-2 rounded-lg cursor-pointer bg-[var(--brand-primary)] text-[var(--text-inverse)] hover:bg-[var(--brand-hover)] active:scale-[0.98] transition-colors"
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </a>

          <button
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="xl:hidden flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer transition-colors hover:bg-[var(--bg-secondary)]"
            style={{ color: "var(--text-secondary)" }}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Mobile / tablet menu ── */}
      {isOpen && (
        <div
          className="xl:hidden border-t px-5 py-4 flex flex-col gap-1"
          style={{ borderColor: "var(--border-default)" }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => { setActiveId(link.id); setIsOpen(false); }}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "text-[14px] font-semibold leading-5 tracking-[0px]",
                  "h-8 px-3 py-2 rounded-lg flex items-center",
                  "transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]",
                  isActive
                    ? "text-[var(--text-accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-accent)]",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="/cv/CV_Ivan_Andrade.pdf"
            download
            className="flex items-center gap-2 text-[14px] font-semibold leading-5 h-8 px-3 py-2 rounded-lg mt-3 w-fit cursor-pointer bg-[var(--brand-primary)] text-[var(--text-inverse)] hover:bg-[var(--brand-hover)] active:scale-[0.98] transition-colors"
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </a>
        </div>
      )}
    </nav>
  );
}
