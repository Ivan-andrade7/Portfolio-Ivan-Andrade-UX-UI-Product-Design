import { BackToPortfolio, CaseExternalLink, CaseNavigation, SectionHeader, TagChip } from "@/components/CaseStudyUI";
import PendingCaseEvidence from "@/components/PendingCaseEvidence";
import DocumentaryEvidence from "@/components/DocumentaryEvidence";
import copy from "@/lib/pending-cases-editorial.json";
import type { CaseStudy } from "@/lib/cases";
import CasePresentation from "@/components/CasePresentation";

export type PendingCaseSlug = keyof typeof copy;
export default function PendingEditorialCase({ caseData }: { caseData: CaseStudy }) {
  const c = copy[caseData.slug as PendingCaseSlug];
  const dimension = (file: string) => file.startsWith("trainit") ? {width:1366,height:file.includes("card-detail")?1094:file.includes("home")?1210:768} : {width:1440,height:1024};
  return <main id="contenido-principal" tabIndex={-1} className={`case-main pending-case pending-${caseData.slug}`}>
    <article className="pending-container">
      <header id="inicio" className="pending-opening">
        <BackToPortfolio />
        <div className="pending-hero-layout">
          <div className="pending-hero-copy"><div className="pending-tags"><TagChip label={c.nature} accent /></div><h1>{c.title}</h1><p className="pending-intro">{c.intro}</p></div>
          <CasePresentation project={caseData.slug as PendingCaseSlug} alt={caseData.slug === "trainit" ? "TrainiT: vista de Backlog del equipo en una composición de presentación desktop" : caseData.slug === "crm" ? "ChatCRM: bandeja de conversaciones y contexto del contacto en una composición desktop" : "GardenAds: vista desktop de Salud de Tracking en una composición de presentación"} />
        </div>
        <dl className="pending-context">{[["Mi responsabilidad",c.role],["Período",c.period],["Entrega de diseño",c.delivery]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p className="pending-scope">{c.scope}</p>
        <div className="pending-links">{caseData.links.figma&&<CaseExternalLink href={caseData.links.figma}>Ver diseño en Figma ↗<span className="sr-only"> (se abre en otra pestaña)</span></CaseExternalLink>}{caseData.links.showcase&&<CaseExternalLink href={caseData.links.showcase}>Showcase del equipo ↗<span className="sr-only"> (se abre en otra pestaña)</span></CaseExternalLink>}</div>
      </header>
      {c.sections.map((section,index)=>{
        const s = section as {label:string;title:string;body:string[];layout?:string;assets?:{file:string;src:string;title:string;alt:string;caption:string;width?:number;height?:number}[];documents?:{title:string;note:string;items:string[][];artifacts?:{src:string;title:string;alt:string;caption:string;width:number;height:number}[]}[];table?:{headers:string[];rows:string[][];note:string}};
        return <section key={s.title} className={`pending-section pending-layout-${s.layout || (s.assets && s.assets.length > 1 ? "comparison" : "sequence")}`} id={`caso-${index+1}`}>
          <div className="pending-argument"><SectionHeader eyebrow={s.label} heading={s.title}/><div className="pending-prose">{s.body.map(p=><p key={p}>{p}</p>)}</div></div>
          {s.documents?.map(d=><DocumentaryEvidence key={d.title} {...d}/>)}
          {s.table&&<div className="pending-document"><table><caption>{s.title} · síntesis documental</caption><thead><tr>{s.table.headers.map(h=><th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{s.table.rows.map(row=><tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td></tr>)}</tbody></table><p className="pending-caption">{s.table.note}</p></div>}
          {s.assets && <div className="pending-evidence-group">{s.assets.map(a=><figure key={a.file} className="pending-figure"><PendingCaseEvidence asset={{...dimension(a.file),...a}} caption={a.caption}/><figcaption className="pending-caption">{a.caption}</figcaption></figure>)}</div>}
        </section>;
      })}
      <CaseNavigation prev={caseData.prev} next={caseData.next}/>
    </article>
  </main>;
}
