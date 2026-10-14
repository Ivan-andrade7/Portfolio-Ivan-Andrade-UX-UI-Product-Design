import "../../home.css";
import "../../servicios-web/services.css";
import { notFound } from "next/navigation";
import { HomeNavbar, HomeFooter } from "@/components/HomeChrome";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Revisión local · Servicios web", robots: { index: false, follow: false }, alternates: { canonical: null } };
export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  if (process.env.SERVICES_WEB_REVIEW !== "true") notFound();
  return <div className="portfolio-home services-web"><HomeNavbar servicesMode /><aside className="sw-review-bar"><div className="sw-wrap"><span>Revisión local · retrato integrado elegido · publicación pendiente · sin envíos</span><a href="/revision/servicios-web">Comparar heroes y controles</a></div></aside>{children}<HomeFooter servicesMode /></div>;
}
