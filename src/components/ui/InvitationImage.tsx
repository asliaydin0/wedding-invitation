"use client";

import Image from "next/image";
import { useState } from "react";
import { weddingConfig } from "@/config";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackClassName?: string;
  /** Monogram shown when image fails — defaults to couple initials from config */
  fallbackMonogram?: string;
};

function ImageFallback({
  alt,
  className,
  monogram,
}: {
  alt: string;
  className?: string;
  monogram: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-beige-200 via-ivory-100 to-beige-300",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-3 border border-brown-800/10" />
      <span className="font-script text-2xl text-brown-800/40 sm:text-3xl">
        {monogram}
      </span>
    </div>
  );
}

/**
 * Next.js Image wrapper with lazy loading, optimization (raster),
 * and graceful fallback when the asset is missing or fails to load.
 */
export function InvitationImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  fallbackClassName,
  fallbackMonogram,
}: Props) {
  const [failed, setFailed] = useState(false);
  const validSrc = typeof src === "string" && src.trim().length > 0;
  const isSvg = validSrc && src.toLowerCase().endsWith(".svg");
  const monogram =
    fallbackMonogram ??
    `${weddingConfig.brideName.charAt(0)} & ${weddingConfig.groomName.charAt(0)}`;

  if (!validSrc || failed) {
    return (
      <ImageFallback
        alt={alt}
        className={fallbackClassName}
        monogram={monogram}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized={isSvg}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
