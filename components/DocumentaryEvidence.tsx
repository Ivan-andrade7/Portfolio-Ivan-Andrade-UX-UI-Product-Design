import "@/app/proyectos/documentary-evidence.css";
import "@/app/proyectos/pending-cases-editorial.css";
import PendingCaseEvidence from "@/components/PendingCaseEvidence";

/** A labelled editorial synthesis; never a reconstructed historical artefact. */
export default function DocumentaryEvidence({title,note,items,artifacts}:{title:string;note:string;items:readonly (readonly string[])[];artifacts?:readonly {src:string;title:string;alt:string;caption:string;width:number;height:number}[]}) {
  return <aside className="documentary-evidence" aria-label={title}>
    <p className="documentary-kind">Síntesis documental</p>
    <h3>{title}</h3>
    <dl>{items.map(([label,text])=><div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
    {artifacts?.map(asset=><figure className="documentary-artifact" key={asset.src}>
      <PendingCaseEvidence asset={asset} caption={asset.caption}/>
      <figcaption>{asset.caption}</figcaption>
    </figure>)}
    <p className="documentary-note">{note}</p>
  </aside>;
}
