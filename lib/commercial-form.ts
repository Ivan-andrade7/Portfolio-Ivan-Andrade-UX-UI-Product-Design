// Public form URL only; no account/API credentials.
export const COMMERCIAL_ENDPOINT = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(process.env.NEXT_PUBLIC_SERVICES_FORMSPREE_ENDPOINT || "") ? process.env.NEXT_PUBLIC_SERVICES_FORMSPREE_ENDPOINT! : "";
export const COMMERCIAL_ENABLED = process.env.NEXT_PUBLIC_SERVICES_FORM_ENABLED === "true" && !!COMMERCIAL_ENDPOINT;
export type SubmissionResult = { kind: "success" | "error" | "limit"; fields?: Record<string, string> };
export async function readSubmissionResponse(response: Response): Promise<SubmissionResult> {
  if (response.status === 429) return { kind: "limit" };
  const body: unknown = await response.json().catch(() => null);
  if (!body || typeof body !== "object") return { kind: "error" };
  const data = body as { next?: unknown; errors?: unknown; error?: unknown };
  if (Array.isArray(data.errors) || typeof data.error === "string") {
    const fields: Record<string, string> = {};
    if (Array.isArray(data.errors)) for (const error of data.errors) {
      if (error && typeof error.field === "string") fields[error.field] = "Revisá este campo: el proveedor no lo aceptó.";
    }
    return { kind: "error", fields };
  }
  // Formspree core success schema; do not navigate to arbitrary next.
  return response.ok && typeof data.next === "string" ? { kind: "success" } : { kind: "error" };
}
export async function submitCommercial(data: Record<string, string>): Promise<SubmissionResult> {
  if (!COMMERCIAL_ENABLED) return { kind: "error" };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    return await readSubmissionResponse(await fetch(COMMERCIAL_ENDPOINT, { method: "POST", mode: "cors", credentials: "omit", redirect: "error", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data), signal: controller.signal }));
  } finally { clearTimeout(timeout); }
}
