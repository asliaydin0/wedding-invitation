"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Extra class on the fallback surface */
  fallbackClassName?: string;
};

function ImageFallback({
  alt,
  className,
}: {
  alt: string;
  className?: string;
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
      <span className="font-script text-2xl text-brown-800/35 sm:text-3xl">
        L &amp; G
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
}: Props) {
  const [failed, setFailed] = useState(false);
  const validSrc = typeof src === "string" && src.trim().length > 0;
  const isSvg = validSrc && src.toLowerCase().endsWith(".svg");

  if (!validSrc || failed) {
    return <ImageFallback alt={alt} className={fallbackClassName} />;
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
