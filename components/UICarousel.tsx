"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Button / Icon — Ghost SM — Figma node 201-503
// Default:  bg transparent
// Hover:    bg var(--bg-secondary) = #0f172a
// Pressed:  bg var(--bg-secondary) + inner shadow (rendered as absolute span, matching Figma)
// Focus:    transparent + focus ring 0 0 0 4px rgba(20,184,166,0.3)
// Disabled: bg #1e293b + opacity-40 rendered as <div> (avoids browser :disabled style conflicts)
function CarouselBtn({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  if (disabled) {
    return (
      <div
        className="flex items-center justify-center p-2 rounded-lg shrink-0 size-8 opacity-40"
        style={{ background: "#1e293b", color: "var(--text-primary)" }}
      >
        {children}
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center p-2 rounded-lg shrink-0 size-8 cursor-pointer transition-colors bg-transparent
        hover:bg-[var(--bg-secondary)]
        active:bg-[var(--bg-secondary)]
        focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(20,184,166,0.3)]"
      style={{ color: "var(--text-primary)" }}
    >
      {children}
      {/* Pressed inner shadow — Figma Ghost SM Pressed: inset shadow as absolute overlay */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-active:opacity-100 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.16)]"
      />
    </button>
  );
}

export default function UICarousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  return (
    <div className="flex flex-col gap-6 w-full overflow-hidden">

      {/* Main image — aspect-[800/569], opacity-96, rounded-xl */}
      <div
        className="relative w-full rounded-xl overflow-hidden border border-[var(--border-default)]"
        style={{ aspectRatio: "800 / 569", opacity: 0.96 }}
      >
        <Image
          src={images[idx]}
          alt={`${title} — pantalla ${idx + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1000px"
        />
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between w-full">
        <CarouselBtn onClick={() => setIdx((i) => i - 1)} disabled={idx === 0}>
          <ChevronLeft size={16} />
        </CarouselBtn>

        <span className="text-[14px] font-semibold leading-5 text-[var(--text-tertiary)] whitespace-nowrap">
          {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>

        <CarouselBtn onClick={() => setIdx((i) => i + 1)} disabled={idx === total - 1}>
          <ChevronRight size={16} />
        </CarouselBtn>
      </div>

      {/* Thumbnails — Image / Small — Figma node 385-1041
          Default: border-default
          Hover:   border-[--text-tertiary] (slightly lighter, visible feedback)
          Active:  border-interactive (teal) */}
      <div className="flex gap-3 items-center w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`shrink-0 relative rounded-xl overflow-hidden border cursor-pointer transition-colors ${
              i === idx
                ? "border-[var(--border-interactive)]"
                : "border-[var(--border-default)] hover:border-[var(--text-tertiary)]"
            }`}
            style={{ width: 100, aspectRatio: "720 / 512" }}
          >
            <Image
              src={img}
              alt={`${title} — ${i + 1}`}
              fill
              className="object-cover"
              sizes="100px"
            />
          </button>
        ))}
      </div>

    </div>
  );
}
