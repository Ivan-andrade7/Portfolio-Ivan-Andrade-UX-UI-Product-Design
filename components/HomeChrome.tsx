"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import CommandMenu, { CommandMenuTrigger } from "@/components/CommandMenu";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios web" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#educacion", label: "Educación" },
  { href: "#contactos", label: "Contacto" },
];
const CV = "/cv/Iván Andrade - Product Designer UX UI.pdf";

function HomeLogo() {
  const { theme } = useTheme();
  return <span className="home-logo"><span className="home-logo-image"><Image src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"} width={180} height={120} alt="" className="home-logo-crop" /></span><span>Iván Andrade<span className="home-logo-role">UX/UI · Product Design</span></span></span>;
}

export function HomeNavbar({ caseMode = false }: { caseMode?: boolean }) {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (caseMode) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
    }, { rootMargin: "-15% 0px -65% 0px" });
    for (const link of LINKS) { const section = document.querySelector(link.href); if (section) observer.observe(section); }
    const hero = document.getElementById("inicio");
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, [caseMode]);

  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);

  function close() { setOpen(false); toggleRef.current?.focus(); }
  function navigate(href: string) {
    setOpen(false);
    if (caseMode) return;
    setActive(href);
    requestAnimationFrame(() => {
      const section = document.querySelector<HTMLElement>(href);
      if (section) { section.tabIndex = -1; section.focus({ preventScroll: true }); }
    });
  }

  return <header className="home-header" onKeyDown={event => { if (event.key === "Escape" && open && !document.querySelector('[role="dialog"]')) { event.preventDefault(); close(); } }}>
    <a href="#contenido-principal" className="skip-link">Saltar al contenido principal</a>
    <CommandMenu />
    <div className="home-container home-navbar">
      <Link href="/" aria-label="Iván Andrade · Inicio"><HomeLogo /></Link>
      <nav className="home-desktop-nav" aria-label="Navegación principal">{LINKS.map(link => <a key={link.href} href={`${caseMode ? "/" : ""}${link.href}`} onClick={() => navigate(link.href)} aria-current={active === link.href ? "location" : undefined}>{link.label}</a>)}</nav>
      <div className="home-nav-tools">
        <span className="home-search-trigger"><CommandMenuTrigger /></span>
        <button type="button" onClick={toggle} className="home-icon-button" aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>{theme === "dark" ? <Sun size={19} aria-hidden /> : <Moon size={19} aria-hidden />}</button>
        <a href={CV} download className="home-nav-cv"><Download size={16} aria-hidden /><span>CV</span></a>
        <button ref={toggleRef} type="button" className="home-icon-button home-menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="home-mobile-nav" aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}</button>
      </div>
    </div>
    <div ref={panelRef} id="home-mobile-nav" className="home-mobile-nav home-container" hidden={!open}>
      <nav aria-label="Navegación móvil">{LINKS.map(link => <a key={link.href} href={`${caseMode ? "/" : ""}${link.href}`} onClick={() => navigate(link.href)} aria-current={active === link.href ? "location" : undefined}>{link.label}<ArrowUpRight size={18} aria-hidden /></a>)}</nav>
      <a href={CV} download className="home-text-link">Descargar CV <Download size={16} aria-hidden /></a>
    </div>
  </header>;
}

export function HomeFooter({ caseMode = false }: { caseMode?: boolean }) {
  const prefix = caseMode ? "/" : "";
  return <footer className="home-footer"><div className="home-container">
    <div className="home-footer-top"><Link href="/" aria-label="Iván Andrade · Inicio"><HomeLogo /></Link><p>UX/UI y Product Design.<br />Diseño e implementación web.</p><a href="#inicio" className="home-text-link">Volver arriba ↑</a></div>
    <div className="home-footer-links"><nav aria-label="Navegación del pie">{LINKS.map(link => <a key={link.href} href={`${prefix}${link.href}`}>{link.label}</a>)}</nav><nav aria-label="Perfiles y contacto"><a href="mailto:ivanandradeuxui@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/ivan-andrade-uxui/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://www.behance.net/ivaanandrade" target="_blank" rel="noopener noreferrer">Behance ↗</a><a href="https://wa.me/5492346683761" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></nav></div>
    <div className="home-footer-bottom"><span>© 2026 Iván Andrade</span><span>Buenos Aires, Argentina · Diseño con criterio</span></div>
  </div></footer>;
}
