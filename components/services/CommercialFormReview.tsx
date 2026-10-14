"use client";
import { useState } from "react";
import CommercialContact from "./CommercialContact";
import { readSubmissionResponse } from "@/lib/commercial-form";
export default function CommercialFormReview() {
  const [scenario, setScenario] = useState("success"), [attempts, setAttempts] = useState(0);
  async function controlled() {
    setAttempts(n => n + 1);
    await new Promise(resolve => setTimeout(resolve, 1200));
    if (scenario === "network") throw new Error("Controlled connection failure");
    const status = scenario === "limit" ? 429 : scenario === "error" ? 503 : scenario === "field" ? 422 : 200;
    const body = scenario === "success" ? { next: "/thanks" } : scenario === "field" ? { errors: [{ field: "web", message: "Invalid URL" }] } : scenario === "unexpected" ? {} : { errors: [{ message: "Controlled error" }] };
    return readSubmissionResponse(new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } }));
  }
  return <><aside className="sw-review-controls"><label htmlFor="review-response">Respuesta controlada</label><select id="review-response" className="sw-select h-12 px-4 rounded-lg border bg-[var(--surface-secondary)]" value={scenario} onChange={e => setScenario(e.target.value)}>{[["success","Aceptación (200)"],["error","Error (503)"],["limit","Límite (429)"],["network","Conexión / espera"],["field","Error de URL del proveedor (422)"],["unexpected","Respuesta inesperada (200)"]].map(([value,label]) => <option key={value} value={value}>{label}</option>)}</select><p role="status">Intentos controlados: {attempts}. No hay solicitudes al proveedor.</p></aside><CommercialContact reviewTransport={controlled} /></>;
}
