import type { Metadata } from "next";
import FellowshipCase from "@/components/FellowshipCase";
import copy from "@/lib/fellowship-editorial.json";
import "../../revision/fellowship/fellowship.css";
export const metadata: Metadata = {
  title: `${copy.title} — Iván Andrade`, description: copy.intro,
  alternates: { canonical: "/proyectos/fellowship" },
  robots: { index: false, follow: false },
  openGraph: { type: "article", url: "/proyectos/fellowship", title: copy.title, description: copy.intro,
    images: [{url:"/projects/fellowship-editorial/aperturaDesktop.webp",alt:"Región de apertura de la landing Empresas diseñada para No Country."}] },
};
export default function Page(){ return <FellowshipCase/>; }
