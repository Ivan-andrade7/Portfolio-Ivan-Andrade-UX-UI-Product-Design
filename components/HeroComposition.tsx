import type { ReactNode } from "react";
import HeroPortrait from "@/components/HeroPortrait";
import { HERO_COMPOSITION_STYLES } from "@/lib/hero-composition";
/** One shared container and portrait frame; each journey owns only its content. */
export default function HeroComposition({ children, caption }: { children: ReactNode; caption?: ReactNode }) {
  return <div className="home-hero-stage"><style data-hero-composition>{HERO_COMPOSITION_STYLES}</style><div className="home-container home-hero-layout"><div className="home-hero-content">{children}</div><figure className="home-portrait"><div className="home-portrait-image"><HeroPortrait /></div>{caption && <figcaption>{caption}</figcaption>}</figure></div></div>;
}
