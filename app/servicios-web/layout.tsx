import "../home.css";
import "./services.css";
import { HomeNavbar, HomeFooter } from "@/components/HomeChrome";
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <div className="portfolio-home services-web"><HomeNavbar servicesMode />{children}<HomeFooter servicesMode /></div>;
}
