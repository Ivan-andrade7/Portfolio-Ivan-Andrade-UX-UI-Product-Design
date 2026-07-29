const SKILLS = [
  "Figma", "FigJam", "Variables", "Auto Layout", "Dev Mode", "Notion", "Miro",
  "Tokens", "Componentes", "Dark Mode", "WCAG AA", "UX Research", "UI Design",
  "Prototipado", "Design Systems", "Accesibilidad", "Arquitectura de información",
  "Wireframing", "Interaction Design", "Handoff", "Responsive",
];

function SkillPill({ skill }: { skill: string }) {
  return (
    <div className="flex items-center justify-center px-3 py-2 h-8 rounded-full shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-default)]">
      <span className="text-[var(--text-secondary)] text-xs font-semibold leading-4 tracking-[1px] whitespace-nowrap">
        {skill}
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="py-12 bg-[var(--bg-primary)] w-full">
      {/* Inner band: bg-secondary + border-subtle, full-width */}
      <div className="w-full bg-[var(--bg-secondary)] border-y border-[var(--border-default)] px-6 py-4 overflow-hidden">
        <div className="marquee-track flex flex-row gap-3 w-max py-3">
          {/* Copia real, visible para lectores de pantalla */}
          <div className="flex flex-row gap-3">
            {SKILLS.map((skill, i) => (
              <SkillPill key={i} skill={skill} />
            ))}
          </div>
          {/* Copia duplicada solo para el loop visual del marquee — oculta de lectores de pantalla */}
          <div className="flex flex-row gap-3" aria-hidden="true">
            {SKILLS.map((skill, i) => (
              <SkillPill key={i} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
