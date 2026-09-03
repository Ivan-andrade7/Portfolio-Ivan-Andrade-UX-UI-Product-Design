"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ResilientImageProps = Omit<ImageProps, "onError"> & {
  fallbackLabel?: string;
};

export default function ResilientImage({ fallbackLabel = "Imagen no disponible", className = "", fill, alt, ...props }: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${fill ? "absolute inset-0 " : ""} grid place-items-center bg-[var(--bg-secondary)] text-center text-[14px] leading-6 text-[var(--text-tertiary)] ${className}`}
      >
        <span className="px-4">{fallbackLabel}</span>
      </div>
    );
  }

  return <Image {...props} alt={alt} fill={fill} className={className} onError={() => setFailed(true)} />;
}
