import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-[var(--bg-primary)]">
      <section className="flex flex-col gap-6 max-w-xl w-full">
        <span className="text-[12px] font-semibold leading-4 tracking-[1px] text-[var(--text-accent)]">404 · Página no encontrada</span>
        <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.14] tracking-[-2px] text-[var(--text-primary)]">
          Este recorrido no existe.
        </h1>
        <p className="text-[18px] leading-8 text-[var(--text-secondary)]">
          La dirección que abriste no corresponde a una página publicada del portfolio.
        </p>
        <Link href="/" className="inline-flex items-center gap-3 h-12 px-4 py-3 rounded-lg w-fit bg-[var(--brand-primary)] text-[var(--text-inverse)] text-[14px] font-semibold hover:bg-[var(--brand-hover)] transition-colors">
          <ArrowLeft size={20} aria-hidden />
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
