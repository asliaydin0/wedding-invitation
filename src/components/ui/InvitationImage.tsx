"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Invitation photos from /public.
 * SVGs use unoptimized to skip the image optimizer pipeline.
 */
export function InvitationImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: Props) {
  const isSvg = src.toLowerCase().endsWith(".svg");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized={isSvg}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
