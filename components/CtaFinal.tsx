export default function CtaFinal() {
  return (
    /* section/lg × section/sm = 96px × 48px */
    <section className="px-6 md:px-12 xl:px-24 py-12 bg-[var(--bg-primary)]">
      {/* Band: inset/xl=32px, gap/lg=24px, radius/block=16px, bg-secondary */}
      <div className="flex flex-col gap-6 p-8 rounded-2xl overflow-hidden items-center text-center bg-[var(--bg-secondary)]">

        {/* "Disponible para proyectos" — mismo dot que el Hero */}
        <div className="flex items-center gap-2 h-8 px-3 py-2 rounded-full bg-[var(--brand-soft)] border border-[var(--border-interactive)] shrink-0">
          <span className="relative flex w-2 h-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--text-accent)] opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-[var(--text-accent)]" />
          </span>
          <span className="text-[var(--text-accent)] text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap">
            Disponible para proyectos
          </span>
        </div>

        {/* H1: 40px/700/48px/-2px — primary + accent */}
        <h2 className="text-[var(--text-primary)] text-[40px] font-bold leading-[48px] tracking-[-2px]">
          ¿Trabajamos{" "}
          <span className="text-[var(--text-accent)]">juntos</span>?
        </h2>

        {/* Body-L: 20px/400/32px — secondary */}
        <p className="text-[var(--text-secondary)] text-[20px] leading-8">
          Si buscás un Product Designer con criterio para resolver problemas reales de producto, escribime.
        </p>

        {/* Buttons — gap/sm=12px */}
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {/* Primary LG */}
          <a
            href="#contactos"
            className="flex items-center justify-center h-12 px-4 py-3 rounded-lg bg-[var(--brand-primary)] text-[var(--text-inverse)] text-[14px] font-semibold leading-5 hover:bg-[var(--brand-hover)] active:scale-[0.98] transition-colors"
          >
            Contactame
          </a>
          {/* Secondary LG */}
          <a
            href="#proyectos"
            className="flex items-center justify-center h-12 px-4 py-3 rounded-lg border border-[var(--text-accent)] text-[var(--text-accent)] text-[14px] font-semibold leading-5 hover:bg-[var(--brand-soft)] active:scale-[0.98] transition-colors"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
