"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

type Mode = { title: string; tag: string; suggested?: string; rows: string[][] };

/* Disclosure independiente: cerrado muestra solo nombre y etiqueta; abre con clic, toque, Enter o Espacio. */
export default function ModeCard({ mode }: { mode: Mode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <div className="sw-mode" data-open={open}>
      <button type="button" className="sw-mode-toggle" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)}>
        <span className="sw-mode-head">
          <strong>{mode.title}</strong>
          <span className="sw-mode-tag">{mode.tag}</span>
          {mode.suggested ? <span className="sw-mode-hint">{mode.suggested}</span> : null}
        </span>
        <Plus className="sw-mode-icon" size={22} aria-hidden />
      </button>
      <div id={panelId} role="region" aria-label={`Detalle de ${mode.title}`} className="sw-mode-panel">
        <div className="sw-mode-panel-inner">
          <dl>
            {mode.rows.map(([label, text]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
