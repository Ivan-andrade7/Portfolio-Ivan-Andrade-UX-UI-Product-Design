import { HomeNavbar, HomeFooter } from "@/components/HomeChrome";
import "../home.css";
import "./cases.css";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-home portfolio-case">
      <HomeNavbar caseMode />
      {children}
      <HomeFooter caseMode />
    </div>
  );
}
