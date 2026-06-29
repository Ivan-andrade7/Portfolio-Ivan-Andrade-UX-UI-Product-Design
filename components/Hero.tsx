import Image from "next/image";
import { ArrowRight, MapPin, Wifi } from "lucide-react";

type Stat =
  | { label: string; value: string; accent: boolean; parts?: never }
  | { label: string; parts: { text: string; accent: boolean }[]; value?: never; accent?: never };

const STATS: Stat[] = [
  { value: "5", label: "Proyectos", accent: false },
  {
    parts: [
      { text: "120", accent: false },
      { text: "+", accent: true },
    ],
    label: "Componentes diseñados",
  },
  { value: "WCAG AA", label: "Accesibilidad", accent: true },
  { value: "3", label: "Equipos coordinados", accent: false },
];

export default function Hero() {
  return (
    <section className="bg-[var(--bg-primary)] flex flex-col gap-8 items-center justify-center px-6 py-12 md:px-12 md:py-16 xl:px-24 xl:py-16 w-full transition-colors duration-200">

      {/* ── Hero row ── */}
      <div className="flex flex-col md:flex-row gap-12 items-center w-full">

        {/* Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">

            {/* Name */}
            <p className="text-[var(--text-accent)] text-[14px] font-semibold leading-5 tracking-[0.5px]">Ivan Andrade</p>

            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="block h-[2px] w-6 bg-[var(--text-accent)] shrink-0 self-center" />
              <span className="text-[var(--text-accent)] text-xs font-semibold leading-4 tracking-[1px] whitespace-nowrap">
                Product Designer · Buenos Aires, Argentina
              </span>
              <span className="flex items-center gap-2 bg-[var(--brand-soft)] border border-[var(--border-interactive)] rounded-full px-3 py-2 h-8 shrink-0">
                <span className="relative flex w-2 h-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--text-accent)] opacity-75" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-[var(--text-accent)]" />
                </span>
                <span className="text-[var(--text-accent)] text-xs font-semibold leading-4 tracking-[1px] whitespace-nowrap">
                  Disponible para proyectos
                </span>
              </span>
            </div>

            {/* Heading + subtitle */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[var(--text-primary)] text-[40px] font-bold leading-[48px] tracking-[-2px]">
                Diseño que transforma{" "}
                <span className="text-[var(--highlight)]">complejidad</span>
                {" "}en sistemas claros.
              </h1>
              <p className="text-[var(--text-secondary)] text-xl leading-8">
                Especializado en SaaS B2B, Fintech, Analytics Dashboards y
                Design Systems escalables. Disponible para trabajo remoto.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Primary LG */}
            <a
              href="#proyectos"
              className="flex items-center gap-3 bg-[var(--brand-primary)] text-[var(--text-inverse)] text-[14px] font-semibold leading-5 h-12 px-4 py-3 rounded-lg hover:bg-[var(--brand-hover)] active:scale-[0.98] transition-colors cursor-pointer"
            >
              Ver proyectos
              <ArrowRight className="w-5 h-5" />
            </a>
            {/* Secondary LG */}
            <a
              href="#contactos"
              className="flex items-center gap-3 border border-[var(--text-accent)] text-[var(--text-accent)] text-[14px] font-semibold leading-5 h-12 px-4 py-3 rounded-lg hover:bg-[var(--brand-soft)] active:scale-[0.98] transition-colors cursor-pointer"
            >
              Contactar
            </a>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-[var(--text-accent)] shrink-0" />
              <span className="text-[var(--text-tertiary)] text-sm leading-6 whitespace-nowrap">
                Buenos Aires, Argentina
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi className="w-5 h-5 text-[var(--text-accent)] shrink-0" />
              <span className="text-[var(--text-tertiary)] text-sm leading-6 whitespace-nowrap">
                Trabajo remoto
              </span>
            </span>
            <span className="flex items-center bg-[var(--brand-soft)] border border-[var(--border-interactive)] rounded px-3 py-2 h-8">
              <span className="font-mono text-[var(--text-accent)] text-xs leading-4 whitespace-nowrap">
                SaaS B2B · Fintech · Design Systems
              </span>
            </span>
          </div>
        </div>

        {/* Profile image */}
        <div className="w-full md:w-[349px] md:shrink-0">
          <div className="relative w-full aspect-[349/500] overflow-hidden rounded-xl border border-[var(--border-default)] shadow-[0_1px_2px_rgba(255,255,255,0.08)]">
            <Image
              src="/profile.jpg"
              alt="Ivan Andrade"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 767px) 100vw, 349px"
            />
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="flex flex-wrap gap-4 md:gap-6 w-full">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-xl p-4 transition-colors cursor-default shrink-0"
          >
            {stat.parts ? (
              <span className="text-base font-normal leading-7">
                {stat.parts.map((part, i) => (
                  <span
                    key={i}
                    className={part.accent ? "text-[var(--text-accent)]" : "text-[var(--text-primary)]"}
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ) : (
              <span
                className={`text-base font-normal leading-7 ${
                  stat.accent ? "text-[var(--text-accent)]" : "text-[var(--text-primary)]"
                }`}
              >
                {stat.value}
              </span>
            )}
            <span className="text-[var(--text-tertiary)] text-xs font-semibold leading-4 tracking-[1px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
