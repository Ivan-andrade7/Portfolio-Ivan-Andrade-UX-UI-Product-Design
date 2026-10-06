export default function CtaMid() {
  return (
    /* section/lg × section/sm = 96px × 48px */
    <section className="px-6 md:px-12 xl:px-24 py-12 bg-[var(--bg-primary)]">
      {/* Band: inset/xl=32px, gap/md=16px, radius/block=16px */}
      <div className="flex flex-col gap-4 p-8 rounded-2xl overflow-hidden bg-[var(--bg-secondary)] items-center text-center">
        {/* Eyebrow — Label-L: 14px/600/20px/0px */}
        <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5 tracking-[0px] w-full">
          Del problema a una experiencia clara
        </p>
        {/* H2: 32px/700/40px/-1.5px — primary + accent second line */}
        <h2 className="text-[var(--text-primary)] text-[32px] font-bold leading-10 tracking-[-1.5px] w-full">
          Diseño interfaces.
          <br />
          <span className="text-[var(--text-accent)]">También pienso el sistema que las sostiene.</span>
        </h2>
        {/* Body-L: 20px/400/32px */}
        <p className="text-[var(--text-secondary)] text-[20px] leading-8 w-full">
          Cada proyecto parte del problema real, las personas involucradas y el contexto de uso para convertir complejidad en una solución comprensible y consistente.
        </p>
      </div>
    </section>
  );
}
