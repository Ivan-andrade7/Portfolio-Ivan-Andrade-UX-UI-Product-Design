const SKILLS = [
  "Figma", "FigJam", "Variables", "Auto Layout", "Dev Mode", "Notion", "Miro",
  "Tokens", "Componentes", "Dark Mode", "WCAG AA", "UX Research", "UI Design",
  "Prototipado", "Design Systems", "Accesibilidad", "Arquitectura de información",
  "Wireframing", "Interaction Design", "Handoff", "Responsive",
];

const DOUBLED = [...SKILLS, ...SKILLS];

export default function Marquee() {
  return (
    <section className="py-12 bg-[var(--bg-primary)] w-full">
      {/* Inner band: bg-secondary + border-subtle, full-width */}
      <div className="w-full bg-[var(--bg-secondary)] border-y border-[var(--border-default)] px-6 py-4 overflow-hidden">
        <div className="marquee-track flex flex-row gap-3 w-max py-3">
          {DOUBLED.map((skill, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-3 py-2 h-8 rounded-full shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-default)]"
            >
              <span className="text-[var(--text-secondary)] text-xs font-semibold leading-4 tracking-[1px] whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
