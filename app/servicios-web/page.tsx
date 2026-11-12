import type { Metadata } from "next";
import ServicesLanding from "@/components/services/ServicesLanding";
export const metadata: Metadata = {
  title: "Servicios web | Iván Andrade",
  description: "Landing pages, sitios institucionales, tiendas online y procesos más simples para profesionales y pequeños negocios.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://portfolio-ivan-andrade-ux-ui-produc.vercel.app/servicios-web" },
  openGraph: { type: "website", locale: "es_AR", title: "Servicios web | Iván Andrade", description: "Landing pages, sitios institucionales, tiendas online y procesos más simples para profesionales y pequeños negocios.", url: "https://portfolio-ivan-andrade-ux-ui-produc.vercel.app/servicios-web" },
  twitter: { card: "summary", title: "Servicios web | Iván Andrade", description: "Landing pages, sitios institucionales, tiendas online y procesos más simples para profesionales y pequeños negocios." }
};
export default function ServicesWebPage() { return <ServicesLanding heroVariant="portrait" />; }
