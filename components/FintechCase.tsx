import { BackToPortfolio, CaseNavigation, SectionHeader } from "@/components/CaseStudyUI";
import FintechEvidence from "@/components/FintechEvidence";
import {
  fintechEditorial as copy, fintechEvidence as evidence, fintechCaptions as captions,
  fintechTranscripts, fintechLimits, fintechButtonStates, fintechFieldStates,
} from "@/lib/fintech-editorial";
import type { NavItem } from "@/lib/cases";

function Transcript({ id, lines }: { id: string; lines: readonly string[] }) {
  return <div id={id} className="fintech-transcript">
    <p className="fintech-label">Texto de la pantalla</p>
    <ul>{lines.map(line => <li key={line}>{line}</li>)}</ul>
  </div>;
}

export default function FintechCase({ next }: { next?: NavItem }) {
  return (
    <main id="contenido-principal" tabIndex={-1} className="case-main fintech-case">
      <header id="inicio" className="case-hero home-container">
        <BackToPortfolio />
        <div className="case-hero-layout fintech-opening">
          <div className="fintech-entry">
            <h1>{copy.title}</h1>
            <p className="fintech-intro">{copy.intro}</p>
          </div>
          <picture className="fintech-presentation">
            <img
              src="/projects/fintech-cover-dual/portada-b-1280.webp"
              srcSet="/projects/fintech-cover-dual/portada-b-480.webp 480w, /projects/fintech-cover-dual/portada-b-768.webp 768w, /projects/fintech-cover-dual/portada-b-1280.webp 1280w, /projects/fintech-cover-dual/portada-b-1920.webp 1920w, /projects/fintech-cover-dual/portada-b-2400.webp 2400w"
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) calc((92vw - 36px) * 0.524), min(942px, calc((92vw - 64px) * 0.524))"
              width={2400} height={2100}
              alt="Plataforma Fintech PYME con experiencia de carga de documentación y superficie operativa de revisión"
              loading="eager" fetchPriority="high" decoding="async"
            />
          </picture>
        </div>
        <div className="fintech-scope">
          <p id="fintech-context-heading" className="fintech-context-title"><strong>Contexto y alcance</strong></p>
          <dl className="fintech-context-list" aria-labelledby="fintech-context-heading">
            {copy.facts.map(fact => <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>)}
          </dl>
          <p className="fintech-scope-note" role="note">{copy.scope}</p>
        </div>
      </header>
      <article className="case-body home-container" aria-label="Decisiones y evidencia de Fintech PYME">
        {copy.sections.map((section, index) => (
          <section key={section.id} id={section.id} aria-label={section.heading}>
            <SectionHeader eyebrow={["Dos superficies", "KYC y recuperación", "Revisión y reglas", "Entrega", "Aprendizaje"][index]} heading={section.heading} />
            <div className="fintech-prose" data-evidence={section.id === "superficies" ? "E02" : section.id === "revision" ? "E05" : undefined}>
              {section.paragraphs.map((paragraph, p) => {
                if (section.id === "revision" && p === 0) {
                  const rule = "una solicitud sólo puede aprobarse cuando la identidad está verificada.";
                  const [before] = paragraph.split(rule);
                  return <p key={paragraph}>{before.trimEnd()}{" "}<strong className="fintech-rule">{rule}</strong></p>;
                }
                if (section.id === "entrega" && p === 2) return null;
                return <p key={paragraph}>{paragraph}</p>;
              })}
            </div>
            {section.id === "superficies" && <>
              <div className="fintech-cover" data-evidence="E01">
                <div className="fintech-dual">
                  <figure aria-labelledby="fintech-pyme-label" aria-describedby="fintech-cover-caption">
                    <figcaption id="fintech-pyme-label" className="fintech-label">{evidence.pyme.title}</figcaption>
                    <FintechEvidence asset={evidence.pyme} caption={captions.cover} describedBy="fintech-cover-caption" priority />
                    <p className="fintech-image-key">Documentos · Selfie · Validación · Resultado. Inicio del KYC: frente y dorso del DNI.</p>
                  </figure>
                  <figure aria-labelledby="fintech-operation-label" aria-describedby="fintech-cover-caption">
                    <figcaption id="fintech-operation-label" className="fintech-label">{evidence.operation.title}</figcaption>
                    <FintechEvidence asset={evidence.operation} caption={captions.cover} describedBy="fintech-cover-caption" priority />
                    <p className="fintech-image-key">Solicitudes nuevas, en revisión, que requieren acción, aprobadas y rechazadas. Cantidades de ejemplo del escenario simulado.</p>
                  </figure>
                </div>
                <p id="fintech-cover-caption" className="fintech-caption">{captions.cover}</p>
              </div>
            </>}
            {section.id === "kyc" && <div className="fintech-recovery">
              <figure data-evidence="E03">
                <FintechEvidence asset={evidence.camera} caption={captions.camera} describedBy="fintech-camera-caption fintech-camera-transcript" />
                <figcaption id="fintech-camera-caption" className="fintech-caption">{captions.camera}</figcaption>
                <Transcript id="fintech-camera-transcript" lines={fintechTranscripts.camera} />
              </figure>
              <figure data-evidence="E04">
                <FintechEvidence asset={evidence.identity} caption={captions.identity} describedBy="fintech-identity-caption fintech-identity-transcript" />
                <figcaption id="fintech-identity-caption" className="fintech-caption">{captions.identity}</figcaption>
                <Transcript id="fintech-identity-transcript" lines={fintechTranscripts.identity} />
              </figure>
            </div>}
            {section.id === "entrega" && <>
              <figure data-evidence="E06" className="fintech-states">
                <div className="fintech-states-desktop">
                  <FintechEvidence asset={evidence.buttons} caption={captions.states} describedBy="fintech-states-caption" />
                  <FintechEvidence asset={evidence.fields} caption={captions.states} describedBy="fintech-states-caption" />
                </div>
                <div className="fintech-states-mobile">
                  <div className="fintech-button-cells">{fintechButtonStates.map(asset => <div key={asset.src}>
                    <p className="fintech-label">{asset.title}</p>
                    <FintechEvidence asset={asset} caption={captions.states} />
                  </div>)}</div>
                  <div className="fintech-field-cells">{fintechFieldStates.map(asset => <div key={asset.src}>
                    <p className="fintech-label">{asset.title}</p>
                    <FintechEvidence asset={asset} caption={captions.states} />
                  </div>)}</div>
                </div>
                <figcaption id="fintech-states-caption" className="fintech-caption">{captions.states}</figcaption>
                <p className="fintech-image-key fintech-state-key">
                  Botones: Default (predeterminado), Hover & Active (hover y activo), Focus (foco), Disabled (deshabilitado).
                  Campos: Empty (vacío), Placeholder, Value (con contenido), Focus (foco), Error, Error Focus (error con foco), Disabled (deshabilitado).
                </p>
              </figure>
              <div className="fintech-prose"><p>{section.paragraphs[2]}</p></div>
            </>}
            {section.id === "aprendizaje" && <div data-evidence="E07" className="fintech-edge-cases">
              <p id="fintech-limits-caption" className="fintech-caption">{captions.limits}</p>
              <ul aria-labelledby="fintech-limits-caption">{fintechLimits.map(item => <li key={item}>{item}</li>)}</ul>
            </div>}
          </section>
        ))}
        <div className="fintech-return"><BackToPortfolio /></div>
        <CaseNavigation next={next} />
      </article>
    </main>
  );
}
