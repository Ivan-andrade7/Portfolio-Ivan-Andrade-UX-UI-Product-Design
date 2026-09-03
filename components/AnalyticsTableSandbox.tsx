"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Check, Search, X } from "lucide-react";

type HealthStatus = "healthy" | "warning" | "critical";
type SortKey = "name" | "healthScore" | "revenue" | "roas" | "conversions";

type Campaign = {
  id: string;
  name: string;
  platform: string;
  revenue: number;
  roas: number;
  conversions: number;
  healthStatus: HealthStatus;
  healthScore: number;
  discrepancy: string;
  lastPing: string;
  events: { pageView: number; addToCart: number; purchase: number };
};

const INITIAL_DATA: Campaign[] = [
  { id: "camp-01", name: "Meta Ads — Retargeting High LTV", platform: "Meta Ads", revenue: 48250, roas: 4.8, conversions: 612, healthStatus: "healthy", healthScore: 98, discrepancy: "1.2%", lastPing: "Hace 2 min", events: { pageView: 18400, addToCart: 2310, purchase: 612 } },
  { id: "camp-02", name: "Google Search — Brand Core Terms", platform: "Google Ads", revenue: 34100, roas: 5.4, conversions: 420, healthStatus: "healthy", healthScore: 95, discrepancy: "2.1%", lastPing: "Hace 5 min", events: { pageView: 12100, addToCart: 1540, purchase: 420 } },
  { id: "camp-03", name: "TikTok Ads — Top of Funnel UGC", platform: "TikTok Ads", revenue: 19800, roas: 2.1, conversions: 285, healthStatus: "warning", healthScore: 78, discrepancy: "12.4%", lastPing: "Hace 18 min", events: { pageView: 34200, addToCart: 890, purchase: 285 } },
  { id: "camp-04", name: "Klaviyo — Abandoned Cart Flow", platform: "Klaviyo", revenue: 16400, roas: 8.9, conversions: 195, healthStatus: "healthy", healthScore: 99, discrepancy: "0.5%", lastPing: "Hace 1 min", events: { pageView: 4200, addToCart: 620, purchase: 195 } },
  { id: "camp-05", name: "Pinterest Ads — Summer Catalog Lookbook", platform: "Pinterest", revenue: 6200, roas: 1.3, conversions: 84, healthStatus: "critical", healthScore: 54, discrepancy: "28.6%", lastPing: "Hace 45 min · caída detectada", events: { pageView: 9800, addToCart: 210, purchase: 84 } },
];

const STATUS_LABELS: Record<HealthStatus, string> = {
  healthy: "Healthy",
  warning: "Warning",
  critical: "Critical",
};

function HealthBadge({ status, score }: { status: HealthStatus; score: number }) {
  const token = status === "healthy" ? "success" : status === "warning" ? "warning" : "error";
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[12px] font-semibold" style={{ background: `var(--feedback-${token}-bg)`, borderColor: `var(--feedback-${token}-border)`, color: `var(--feedback-${token}-text)` }}>
      <span className="size-1.5 rounded-full" style={{ background: `var(--feedback-${token}-text)` }} aria-hidden />
      {STATUS_LABELS[status]} · {score}%
    </span>
  );
}

function SortButton({ label, sortKey, activeKey, ascending, onSort, align = "left" }: { label: string; sortKey: SortKey; activeKey: SortKey; ascending: boolean; onSort: (key: SortKey) => void; align?: "left" | "right" }) {
  const active = sortKey === activeKey;
  return (
    <button type="button" onClick={() => onSort(sortKey)} className={`flex min-h-10 w-full items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)] ${align === "right" ? "justify-end text-right" : "text-left"}`}>
      {label}
      {active && (ascending ? <ArrowUp size={13} aria-label="ascendente" /> : <ArrowDown size={13} aria-label="descendente" />)}
    </button>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export default function AnalyticsTableSandbox() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<HealthStatus | "all">("all");
  const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");
  const [sortKey, setSortKey] = useState<SortKey>("revenue");
  const [ascending, setAscending] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const filteredData = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return INITIAL_DATA
      .filter((campaign) => {
        const matchesQuery = !normalizedQuery || `${campaign.name} ${campaign.platform}`.toLowerCase().includes(normalizedQuery);
        const matchesStatus = statusFilter === "all" || campaign.healthStatus === statusFilter;
        return matchesQuery && matchesStatus;
      })
      .toSorted((a, b) => {
        const first = a[sortKey];
        const second = b[sortKey];
        const comparison = typeof first === "string" && typeof second === "string" ? first.localeCompare(second) : Number(first) - Number(second);
        return ascending ? comparison : -comparison;
      });
  }, [query, sortKey, ascending, statusFilter]);

  function handleSort(key: SortKey) {
    if (sortKey === key) setAscending((current) => !current);
    else {
      setSortKey(key);
      setAscending(false);
    }
  }

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)]">
      <div className="flex flex-col gap-5 border-b border-[var(--border-default)] p-5 md:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[20px] font-semibold leading-8 text-[var(--text-primary)]">Tracking Health & Attribution</h3>
            <span className="rounded-full border border-[var(--border-interactive)] bg-[var(--brand-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--text-accent)]">Sandbox conceptual</span>
          </div>
          <p className="max-w-3xl text-[14px] leading-6 text-[var(--text-secondary)]">Una recreación interactiva del patrón de inspección diseñado para GardenAds. La tabla carga datos simulados para mostrar búsqueda, filtros, ordenamiento y el drawer contextual.</p>
          <p className="text-[12px] leading-5 text-[var(--text-tertiary)]">Los valores no son datos reales del producto ni resultados de negocio medidos.</p>
        </div>

        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <label className="relative block w-full xl:max-w-xs">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
            <span className="sr-only">Buscar campaña o canal</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar campaña o canal…" className="h-10 w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] pl-10 pr-3 text-[14px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-placeholder)] focus-visible:border-[var(--border-interactive)] focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]" />
          </label>
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por salud del tracking">
            {(["all", "healthy", "warning", "critical"] as const).map((status) => {
              const active = statusFilter === status;
              return <button key={status} type="button" aria-pressed={active} onClick={() => setStatusFilter(status)} className={`min-h-10 rounded-lg border px-3 text-[12px] font-semibold transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)] ${active ? "border-[var(--border-interactive)] bg-[var(--brand-soft)] text-[var(--text-accent)]" : "border-[var(--border-default)] text-[var(--text-tertiary)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)]"}`}>{status === "all" ? "Todos" : STATUS_LABELS[status]}</button>;
            })}
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Cambiar densidad de la tabla">
            <span className="text-[12px] text-[var(--text-tertiary)]">Densidad</span>
            {(["comfortable", "compact"] as const).map((value) => <button key={value} type="button" aria-pressed={density === value} onClick={() => setDensity(value)} className={`min-h-10 rounded-lg border px-3 text-[12px] font-semibold capitalize transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)] ${density === value ? "border-[var(--border-interactive)] bg-[var(--brand-soft)] text-[var(--text-accent)]" : "border-[var(--border-default)] text-[var(--text-tertiary)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)]"}`}>{value === "comfortable" ? "Cómoda" : "Compacta"}</button>)}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <caption className="sr-only">Campañas y estado simulado del tracking</caption>
          <thead className="border-b border-[var(--border-default)] bg-[var(--bg-primary)]">
            <tr>
              <th scope="col" className="px-4 py-2"><SortButton label="Campaña / canal" sortKey="name" activeKey={sortKey} ascending={ascending} onSort={handleSort} /></th>
              <th scope="col" className="px-4 py-2"><SortButton label="Tracking health" sortKey="healthScore" activeKey={sortKey} ascending={ascending} onSort={handleSort} /></th>
              <th scope="col" className="px-4 py-2"><SortButton label="Revenue atribuido" sortKey="revenue" activeKey={sortKey} ascending={ascending} onSort={handleSort} align="right" /></th>
              <th scope="col" className="px-4 py-2"><SortButton label="ROAS" sortKey="roas" activeKey={sortKey} ascending={ascending} onSort={handleSort} align="right" /></th>
              <th scope="col" className="px-4 py-2"><SortButton label="Conversiones" sortKey="conversions" activeKey={sortKey} ascending={ascending} onSort={handleSort} align="right" /></th>
              <th scope="col" className="px-4 py-2 text-right text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--text-tertiary)]">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-[14px] text-[var(--text-tertiary)]">No se encontraron campañas con los filtros seleccionados.</td></tr>
            ) : filteredData.map((campaign) => (
              <tr key={campaign.id} className="border-b border-[var(--border-default)] last:border-0 hover:bg-[var(--bg-primary)]">
                <td className={`${density === "compact" ? "py-2" : "py-4"} px-4`}>
                  <div className="flex flex-col gap-1"><span className="text-[14px] font-semibold text-[var(--text-primary)]">{campaign.name}</span><span className="text-[12px] text-[var(--text-tertiary)]">{campaign.platform}</span></div>
                </td>
                <td className={`${density === "compact" ? "py-2" : "py-4"} px-4`}><HealthBadge status={campaign.healthStatus} score={campaign.healthScore} /></td>
                <td className={`${density === "compact" ? "py-2" : "py-4"} px-4 text-right font-mono text-[14px] text-[var(--text-primary)]`}>{formatCurrency(campaign.revenue)}</td>
                <td className={`${density === "compact" ? "py-2" : "py-4"} px-4 text-right font-mono text-[14px] text-[var(--text-secondary)]`}>{campaign.roas}x</td>
                <td className={`${density === "compact" ? "py-2" : "py-4"} px-4 text-right font-mono text-[14px] text-[var(--text-secondary)]`}>{campaign.conversions.toLocaleString("es-AR")}</td>
                <td className={`${density === "compact" ? "py-2" : "py-4"} px-4 text-right`}><button type="button" onClick={() => setSelectedCampaign(campaign)} className="min-h-10 rounded-lg px-3 text-[12px] font-semibold text-[var(--text-accent)] underline decoration-[var(--border-interactive)] underline-offset-4 hover:bg-[var(--brand-soft)] focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]">Inspeccionar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCampaign && (
        <div className="fixed inset-0 z-[55] flex justify-end bg-[var(--overlay-card)] backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedCampaign(null); }}>
          <aside className="flex h-full w-full max-w-md flex-col gap-8 overflow-y-auto border-l border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="analytics-drawer-title">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border-default)] pb-5">
              <div className="flex flex-col gap-1"><span className="text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--text-accent)]">{selectedCampaign.platform} · diagnóstico</span><h3 id="analytics-drawer-title" className="text-[20px] font-semibold leading-8 text-[var(--text-primary)]">{selectedCampaign.name}</h3></div>
              <button type="button" onClick={() => setSelectedCampaign(null)} aria-label="Cerrar inspección" className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_var(--focus-ring)]"><X size={18} /></button>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4"><div className="flex flex-col gap-1"><span className="text-[12px] text-[var(--text-tertiary)]">Última sincronización</span><span className="text-[14px] font-semibold text-[var(--text-primary)]">{selectedCampaign.lastPing}</span></div><HealthBadge status={selectedCampaign.healthStatus} score={selectedCampaign.healthScore} /></div>

            <dl className="grid grid-cols-2 gap-3"><div className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4"><dt className="text-[12px] text-[var(--text-tertiary)]">Revenue atribuido</dt><dd className="mt-1 font-mono text-[20px] font-semibold text-[var(--text-primary)]">{formatCurrency(selectedCampaign.revenue)}</dd></div><div className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4"><dt className="text-[12px] text-[var(--text-tertiary)]">Discrepancia</dt><dd className="mt-1 font-mono text-[20px] font-semibold text-[var(--feedback-warning-text)]">{selectedCampaign.discrepancy}</dd></div></dl>

            <div className="flex flex-col gap-3"><h4 className="text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--text-tertiary)]">Volumen de eventos rastreados</h4><ul className="flex flex-col gap-2">{([["PageView", selectedCampaign.events.pageView], ["AddToCart", selectedCampaign.events.addToCart], ["Purchase", selectedCampaign.events.purchase]] as const).map(([label, value]) => <li key={label} className="flex items-center justify-between rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-[14px]"><span className="text-[var(--text-secondary)]">{label}</span><span className="font-mono font-semibold text-[var(--text-primary)]">{value.toLocaleString("es-AR")}</span></li>)}</ul></div>

            <div className="mt-auto flex items-start gap-3 border-t border-[var(--border-default)] pt-5 text-[12px] leading-5 text-[var(--text-tertiary)]"><Check size={16} className="mt-0.5 shrink-0 text-[var(--text-accent)]" /><p>Esta inspección demuestra un patrón de UI; los datos de este sandbox son simulados.</p></div>
          </aside>
        </div>
      )}
    </div>
  );
}

