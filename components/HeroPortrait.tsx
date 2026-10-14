import { HERO_STACK_MEDIA } from "@/lib/hero-composition";

export default function HeroPortrait() {
  return <picture><source media={HERO_STACK_MEDIA} srcSet="/hero/ivan-portrait-mobile.webp" width="800" height="1323" /><img src="/hero/ivan-portrait-desktop.webp" alt="Retrato de Iván Andrade" width="1920" height="981" fetchPriority="high" loading="eager" decoding="async" /></picture>;
}
