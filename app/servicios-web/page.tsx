import type { Metadata } from "next";
import ServicesLanding from "@/components/services/ServicesLanding";
export const metadata: Metadata = {
  title: "Servicios web | Iván Andrade",
  description: "Landing pages y sitios institucionales para profesionales, estudios y pequeños negocios de servicios.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://portfolio-ivan-andrade-ux-ui-produc.vercel.app/servicios-web" },
  openGraph: { type: "website", locale: "es_AR", title: "Servicios web | Iván Andrade", description: "Landing pages y sitios institucionales para profesionales, estudios y pequeños negocios de servicios.", url: "https://portfolio-ivan-andrade-ux-ui-produc.vercel.app/servicios-web" },
  twitter: { card: "summary", title: "Servicios web | Iván Andrade", description: "Landing pages y sitios institucionales para profesionales, estudios y pequeños negocios de servicios." }
};
export default function ServicesWebPage() { return <ServicesLanding heroVariant="portrait" />; }
