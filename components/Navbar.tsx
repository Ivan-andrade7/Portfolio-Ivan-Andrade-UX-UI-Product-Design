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

function Logo({ theme }: { theme: string }) {
  const isLight = theme === "light";
  return (
    <div className="relative shrink-0 overflow-hidden" style={{ width: 40, height: 34.39 }}>
      <img
        src={isLight ? "/logo-light.png" : "/logo-dark.png"}
        alt=""
        className={`absolute max-w-none pointer-events-none ${
          isLight
            ? "h-[335.38%] left-[-173.33%] top-[-104.62%] w-[436%]"
            : "h-[348.3%] left-[-177.19%] top-[-103.06%] w-[449.12%]"
        }`}
      />
    </div>
  );
}

function ThemeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
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
        ? <Moon className="w-5 h-5" style={{ color: "var(--text-accent)" }} />
        : <Sun  className="w-5 h-5" style={{ color: "var(--text-accent)" }} />
      }
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("inicio");
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const navLinkClass = (isActive: boolean) => [
    "text-[14px] font-semibold leading-5 h-8 px-3 py-2 rounded-lg flex items-center transition-colors duration-150",
    "focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]",
    isActive
      ? "text-[var(--text-accent)]"
      : "text-[var(--text-secondary)] hover:text-[var(--text-accent)]",
  ].join(" ");

  return (
    <nav
      className="border-b sticky top-0 z-50 w-full backdrop-blur-sm"
      style={{ backgroundColor: navBg, borderColor: "var(--border-default)", transition: "background-color 0.2s ease" }}
    >
      {/* ── Desktop ── */}
      <div className="hidden xl:flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Ir al inicio">
          <Logo theme={theme} />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-2.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={activeId === link.id ? "page" : undefined}
              onClick={() => setActiveId(link.id)}
              className={navLinkClass(activeId === link.id)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme toggle + CV */}
        <div className="flex items-center gap-4 shrink-0">
          <ThemeToggle isDark={isDark} toggle={toggle} />
          <a
            href="/cv/CV_Ivan_Andrade.pdf"
            download
            className="flex items-center gap-2 text-[14px] font-semibold leading-5 h-8 px-3 py-2 rounded-lg cursor-pointer bg-[var(--brand-primary)] text-[var(--text-inverse)] hover:bg-[var(--brand-hover)] active:scale-[0.98] transition-colors"
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </a>
        </div>
      </div>

      {/* ── Mobile / Tablet — collapsed bar ── */}
      {!isOpen && (
        <div className="xl:hidden flex items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Ir al inicio">
            <Logo theme={theme} />
          </Link>
          <button
            aria-label="Abrir menú"
            aria-expanded={false}
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer transition-colors hover:bg-[var(--bg-secondary)]"
            style={{ color: "var(--text-secondary)" }}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ── Mobile / Tablet — expanded panel (reemplaza la barra completa) ── */}
      {isOpen && (
        <div className="xl:hidden flex flex-col items-start w-full">
          {/* Header: logo + cerrar (X) */}
          <div
            className="flex items-center justify-between border-b px-6 py-4 w-full"
            style={{ borderColor: "var(--border-default)" }}
          >
            <Link href="/" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
              <Logo theme={theme} />
            </Link>
            <button
              aria-label="Cerrar menú"
              aria-expanded={true}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer transition-colors hover:bg-[var(--bg-secondary)]"
              style={{ color: "var(--text-secondary)" }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigations */}
          <div className="flex flex-col gap-4 items-start p-6 w-full">
            {/* Nav links — centrados */}
            <div className="flex flex-col gap-2 items-center justify-center w-full">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActiveId(link.id); setIsOpen(false); }}
                  aria-current={activeId === link.id ? "page" : undefined}
                  className={navLinkClass(activeId === link.id) + " w-full justify-center"}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Modes & CV */}
            <div className="flex items-center gap-4 justify-center w-full">
              <ThemeToggle isDark={isDark} toggle={toggle} />
              <a
                href="/cv/CV_Ivan_Andrade.pdf"
                download
                className="flex flex-1 items-center justify-center gap-2 text-[14px] font-semibold leading-5 h-8 px-3 py-2 rounded-lg cursor-pointer bg-[var(--brand-primary)] text-[var(--text-inverse)] hover:bg-[var(--brand-hover)] active:scale-[0.98] transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
