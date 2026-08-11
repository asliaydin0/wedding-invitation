"use client";

import {
  FloralMotif,
  type FloralMotifKind,
  type FloralMotion,
} from "@/components/decor/FloralMotif";
import type { BotanicalTone } from "@/components/decor/botanicals/svg";
import { cn } from "@/lib/utils";

type Placement =
  | "tl"
  | "tr"
  | "bl"
  | "br"
  | "left"
  | "right"
  | "top"
  | "inline";

type Props = {
  className?: string;
  motif?: FloralMotifKind;
  tone?: BotanicalTone;
  placement?: Placement;
  flip?: boolean;
  motion?: FloralMotion;
  parallax?: number;
  appear?: boolean;
  appearDelay?: number;
  size?: "sm" | "md" | "lg";
};

const placementClass: Record<Placement, string> = {
  tl: "absolute left-0 top-0",
  tr: "absolute right-0 top-0",
  bl: "absolute bottom-0 left-0",
  br: "absolute bottom-0 right-0",
  left: "absolute left-0 top-1/2 -translate-y-1/2",
  right: "absolute right-0 top-1/2 -translate-y-1/2",
  top: "absolute left-1/2 top-0 -translate-x-1/2",
  inline: "relative inline-block",
};

const sizeClass = {
  sm: "h-16 w-12",
  md: "h-28 w-20",
  lg: "h-40 w-28 sm:h-48 sm:w-36",
} as const;

/**
 * Prop-driven floral accent for stationery layouts.
 */
export function FloralDecoration({
  className,
  motif = "sprig",
  tone = "gold",
  placement = "inline",
  flip = false,
  motion = "none",
  parallax = 0,
  appear = true,
  appearDelay = 0,
  size = "md",
}: Props) {
  return (
    <FloralMotif
      motif={motif}
      tone={tone}
      flip={flip}
      motion={motion}
      parallax={parallax}
      appear={appear}
      appearDelay={appearDelay}
      className={cn(
        placementClass[placement],
        sizeClass[size],
        placement !== "inline" && "z-[2]",
        className,
      )}
    />
  );
}
