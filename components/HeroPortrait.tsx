export default function HeroPortrait({ mobileMedia = "(max-width: 767px)" }: { mobileMedia?: string }) {
  return <picture><source media={mobileMedia} srcSet="/hero/ivan-portrait-mobile.webp" width="800" height="1323" /><img src="/hero/ivan-portrait-desktop.webp" alt="Retrato de Iván Andrade" width="1920" height="981" fetchPriority="high" loading="eager" decoding="async" /></picture>;
}
