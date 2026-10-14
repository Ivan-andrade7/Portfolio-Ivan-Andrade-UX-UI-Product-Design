import type { Metadata } from "next";
import { notFound } from "next/navigation";
export const metadata: Metadata = { title: "No disponible", robots: { index: false, follow: false }, alternates: { canonical: null } };
// Publication cut: review UI stays in the local candidate, never in the public route.
export default function ServicesReview() { notFound(); }
