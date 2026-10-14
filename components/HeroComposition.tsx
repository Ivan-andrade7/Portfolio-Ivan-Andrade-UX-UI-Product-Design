import type { ReactNode } from "react";
import HeroPortrait from "@/components/HeroPortrait";
/** Composition and portrait treatment shared with the portfolio's existing home.css. */
export default function HeroComposition({ children, caption, containerClass = "home-container", portraitMobileMedia }: { children: ReactNode; caption?: ReactNode; containerClass?: string; portraitMobileMedia?: string }) {
  return <div className="home-hero-stage"><div className={`${containerClass} home-hero-layout`}><div className="home-hero-content">{children}</div><figure className="home-portrait"><div className="home-portrait-image"><HeroPortrait mobileMedia={portraitMobileMedia} /></div>{caption && <figcaption>{caption}</figcaption>}</figure></div></div>;
}
