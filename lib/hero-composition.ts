/** Last stacked CSS pixel, shared by geometry and picture selection. */
export const HERO_STACK_MAX_WIDTH = 767;
export const HERO_STACK_MEDIA = `(max-width: ${HERO_STACK_MAX_WIDTH}px)`;

/** Rendered in the server composition so CSS and picture use one condition. */
export const HERO_COMPOSITION_STYLES = `
.portfolio-home .home-hero-stage { position: relative; isolation: isolate; overflow: clip; }
.portfolio-home .home-hero-stage .home-hero-layout { --hero-frame-height: clamp(680px, 42vw, 820px); width: min(1800px, calc(100% - clamp(96px, 8vw, 192px))); margin-inline: auto; min-width: 0; position: relative; min-height: var(--hero-frame-height); display: flex; align-items: center; padding-block: 48px 40px; }
.portfolio-home .home-hero-stage .home-portrait { position: absolute; inset: 0 0 auto 30%; height: var(--hero-frame-height); z-index: 0; margin: 0; width: auto; max-width: none; pointer-events: none; }
.portfolio-home .home-hero-stage .home-portrait-image { position: absolute; inset: 0; overflow: hidden; aspect-ratio: auto; mask-image: linear-gradient(to right, transparent 0%, transparent 18%, #000 58%, #000 95%, transparent 100%), linear-gradient(to bottom, #000 72%, transparent 100%); mask-composite: intersect; }
.portfolio-home .home-hero-stage .home-portrait picture, .portfolio-home .home-hero-stage .home-portrait img { display: block; width: 100%; height: 100%; }
.portfolio-home .home-hero-stage .home-portrait img { position: static; inset: auto; object-fit: cover; object-position: 65% 45%; filter: saturate(.72); }
.portfolio-home .home-hero-stage .home-portrait figcaption { position: absolute; bottom: 26px; right: 0; display: flex; gap: 18px; color: var(--text-primary); font-family: var(--font-mono); font-size: 10px; }
@media ${HERO_STACK_MEDIA} {
  .portfolio-home .home-hero-stage .home-hero-layout { width: calc(100% - 40px); min-height: 0; display: block; padding-block: 48px 0; }
  .portfolio-home .home-hero-stage .home-hero-content { width: 100%; }
  .portfolio-home .home-hero-stage .home-portrait { position: relative; inset: auto; height: auto; width: 100%; max-width: 440px; margin: 32px max(0px, calc((100% - 440px) / 2)) 0; }
  .portfolio-home .home-hero-stage .home-portrait-image { position: relative; inset: auto; aspect-ratio: 3/4; mask-image: linear-gradient(to bottom, #000 76%, transparent 100%); mask-composite: add; }
  .portfolio-home .home-hero-stage .home-portrait img { position: absolute; inset: 0; object-position: center 25%; }
  .portfolio-home .home-hero-stage .home-portrait figcaption { position: relative; inset: auto; justify-content: space-between; gap: 12px; margin-top: -8px; }
}
`;
