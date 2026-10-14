"use client";
import { ArrowUpRight } from "lucide-react";
export default function InquiryLink({ project, children }: { project: string; children: React.ReactNode }) {
  return <a href="#contacto" className="home-text-link" onClick={() => window.dispatchEvent(new CustomEvent("commercial-project", { detail: project }))}>{children}<ArrowUpRight size={18} aria-hidden /></a>;
}
