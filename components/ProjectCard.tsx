"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ResilientImage from "@/components/ResilientImage";

export interface ProjectImages {
  /** Card width < 384px (equiv. Tailwind container breakpoint @sm) */
  narrow: string;
  /** Card width 384–448px (equiv. @sm–@md) */
  medium: string;
  /** Card width ≥ 448px (equiv. @md) */
  wide: string;
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  longDesc: string;
  role: string;
  images: ProjectImages;
}

// Matches Tailwind's default container-query breakpoints (@sm / @md), so the
// image variant depends on the card's own rendered width, not the viewport —
// needed because a card can be full-width mid-layout (e.g. ChatCRM alone on
// tablet) while its viewport-siblings are still paired.
const NARROW_MAX = 384;
const MEDIUM_MAX = 448;

function pickVariant(width: number): keyof ProjectImages {
  if (width < NARROW_MAX) return "narrow";
  if (width < MEDIUM_MAX) return "medium";
  return "wide";
}

export default function ProjectCard({ project }: { project: Project }) {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [variant, setVariant] = useState<keyof ProjectImages>("medium");

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      setVariant(pickVariant(entry.contentRect.width));
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href={`/proyectos/${project.id}`}
      ref={containerRef}
      aria-label={`Ver caso: ${project.title}`}
      className="relative h-[460px] min-w-[340px] no-underline"
      style={{ flex: "1 0 0" }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      {/* Image layer */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <ResilientImage
          src={project.images[variant]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300"
          style={{ transform: active ? "scale(1.03)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Info overlay con gradiente Figma */}
      <div
        className="absolute inset-0 flex flex-col gap-3 items-center justify-end p-6 rounded-xl border transition-all duration-200 cursor-pointer"
        style={{
          backgroundImage: "linear-gradient(180deg, var(--card-gradient-0) 0%, var(--card-gradient-1) 50%, var(--card-gradient-3) 75%, var(--card-gradient-4) 100%)",
          borderColor: active ? "var(--border-interactive)" : "var(--border-default)",
          boxShadow: active ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 items-center w-full">
          {/* First tag = Accent */}
          <div
            className="flex items-center justify-center h-8 px-3 py-2 rounded-full shrink-0 border"
            style={{
              background: "var(--brand-soft)",
              borderColor: "var(--border-interactive)",
            }}
          >
            <span
              className="text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap"
              style={{ color: "var(--text-accent)" }}
            >
              {project.tags[0]}
            </span>
          </div>
          {/* Remaining tags = Neutral */}
          {project.tags.slice(1).map((tag) => (
            <div
              key={tag}
              className="flex items-center justify-center h-8 px-3 py-2 rounded-full shrink-0 border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-default)",
              }}
            >
              <span
                className="text-[12px] font-semibold leading-4 tracking-[1px] whitespace-nowrap"
                style={{ color: "var(--text-secondary)" }}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Title */}
        <p
          className="w-full text-[24px] font-semibold leading-8 tracking-[-1px] truncate text-left transition-colors duration-200"
          style={{ color: active ? "var(--text-accent)" : "var(--text-primary)" }}
        >
          {project.title}
        </p>

        {/* Hover-only content */}
        <div
          className={`grid transition-all duration-300 ease-in-out w-full ${
            active
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 max-xl:grid-rows-[1fr] max-xl:opacity-100"
          }`}
        >
          <div className="overflow-hidden min-h-0 flex flex-col gap-3">
            <p
              className="w-full text-[14px] leading-6 text-left"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.longDesc}
            </p>
            <div className="flex flex-wrap gap-3 items-center w-full">
              <p
                className="flex-1 min-w-0 text-[14px] leading-6 text-left"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.role}
              </p>
              <span
                className="flex items-center gap-3 h-10 px-4 py-3 rounded-lg border text-[14px] font-semibold leading-5 shrink-0 active:scale-[0.98] transition-colors hover:bg-[var(--brand-soft)]"
                style={{
                  borderColor: "var(--text-accent)",
                  color: "var(--text-accent)",
                }}
              >
                Ver caso
                <ArrowRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
