import type { MetadataRoute } from "next";
import { CASES } from "@/lib/cases";

const BASE_URL = "https://portfolio-ivan-andrade-ux-ui-produc.vercel.app";
const LAST_MODIFIED = new Date("2026-09-03T00:00:00-03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const caseUrls = CASES.filter((c) => c.published !== false).map((c) => ({
    url: `${BASE_URL}/proyectos/${c.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseUrls,
  ];
}
