"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import ResilientImage from "@/components/ResilientImage";
import type { FintechAsset } from "@/lib/fintech-editorial";

/** Isolated from UICarousel: previews and enlargements use the same safe physical crop. */
export default function FintechEvidence({ asset, caption, describedBy, priority = false }: {
  asset: FintechAsset; caption?: string; describedBy?: string; priority?: boolean;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef<string | null>(null);
  const [naturalSize, setNaturalSize] = useState(false);

  function finish() {
    if (previousOverflow.current === null) return;
    document.body.style.overflow = previousOverflow.current;
    previousOverflow.current = null;
    trigger.current?.focus({ preventScroll: true });
  }
  // Release the lock synchronously: native close events are queued and another
  // independent evidence dialog may open before that event is delivered.
  function close() { dialog.current?.close(); finish(); }
  function keepFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const targets = [...event.currentTarget.querySelectorAll<HTMLElement>("button, [tabindex='0']")];
    const first = targets[0], last = targets[targets.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  }
  function open() {
    setNaturalSize(false);
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    closeButton.current?.focus();
  }
  useEffect(() => () => {
    if (previousOverflow.current !== null) document.body.style.overflow = previousOverflow.current;
  }, []);

  return (
    <>
      <button ref={trigger} type="button" className="fintech-image-trigger"
        onClick={open} aria-label={`Ampliar: ${asset.title}`}
        aria-haspopup="dialog" aria-controls={id} aria-describedby={describedBy}>
        <ResilientImage src={asset.src} alt={asset.alt} width={asset.width} height={asset.height}
          preload={priority} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) 80vw, 1104px"
          unoptimized />
        <span className="fintech-enlarge" aria-hidden="true">Ampliar ↗</span>
      </button>
      <dialog ref={dialog} id={id} className="fintech-dialog"
        aria-labelledby={id + "-title"} aria-describedby={caption ? id + "-caption" : undefined}
        onKeyDown={keepFocus} onClose={finish} onCancel={(event) => { event.preventDefault(); close(); }}>
        <div className="fintech-dialog-toolbar">
          <h3 id={id + "-title"}>{asset.title}</h3>
          <button type="button" aria-pressed={naturalSize} onClick={() => setNaturalSize(!naturalSize)}>
            {naturalSize ? "Ajustar a ventana" : "Tamaño original"}
          </button>
          <button type="button" ref={closeButton} onClick={close}>Cerrar</button>
        </div>
        <div className={`fintech-dialog-viewport ${naturalSize ? "is-natural" : ""}`}
          tabIndex={0} role="region" aria-label="Imagen ampliada; desplázate si supera la ventana">
          <ResilientImage src={asset.src} alt={asset.alt} width={asset.width} height={asset.height}
            unoptimized style={naturalSize ? { width: asset.width, maxWidth: "none" } : undefined} />
        </div>
        {caption && <p id={id + "-caption"} className="fintech-dialog-caption">{caption}</p>}
      </dialog>
    </>
  );
}
