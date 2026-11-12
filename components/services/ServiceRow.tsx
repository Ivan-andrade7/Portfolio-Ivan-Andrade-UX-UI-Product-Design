"use client";
import { ArrowUpRight } from "lucide-react";
export default function ServiceRow({ project, name, text }: { project: string; name: string; text: string }) {
  return <a href="#contacto" className="sw-row" onClick={() => window.dispatchEvent(new CustomEvent("commercial-project", { detail: project }))}><span className="sw-row-main"><strong>{name}</strong><span>{text}</span></span><ArrowUpRight size={18} aria-hidden /></a>;
}
