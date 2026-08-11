"use client";

import { FloralMotif, type FloralMotion } from "@/components/decor/FloralMotif";
import type { BotanicalTone } from "@/components/decor/botanicals/svg";
import { cn } from "@/lib/utils";

export type FloralCornerPosition = "tl" | "tr" | "bl" | "br";

type Props = {
  position?: FloralCornerPosition;
  className?: string;
  tone?: BotanicalTone;
  embossed?: boolean;
  motion?: FloralMotion;
  parallax?: number;
  appearDelay?: number;
  /** denser corner bouquet vs simple sprig */
  variant?: "bouquet" | "sprig" | "cluster";
};

const positionClass: Record<FloralCornerPosition, string> = {
  tl: "left-0 top-0 origin-top-left",
  tr: "right-0 top-0 origin-top-right",
  bl: "bottom-0 left-0 origin-bottom-left",
  br: "bottom-0 right-0 origin-bottom-right",
};

/** Flip / rotate so bouquet always grows inward from the corner */
const orientClass: Record<FloralCornerPosition, string> = {
  tl: "",
  tr: "-scale-x-100",
  bl: "rotate-180 -scale-x-100",
  br: "rotate-180",
};

export function FloralCorner({
  position = "tl",
  className,
  tone,
  embossed = false,
  motion = "sway",
  parallax = 0.35,
  appearDelay = 0,
  variant = "bouquet",
}: Props) {
  const resolvedTone: BotanicalTone = embossed ? "embossed" : (tone ?? "gold");
  const motif =
    variant === "sprig" ? "sprig" : variant === "cluster" ? "cluster" : "corner";

  return (
    <FloralMotif
      motif={motif}
      tone={resolvedTone}
      motion={motion}
      parallax={parallax}
      appearDelay={appearDelay}
      className={cn(
        "absolute z-[2] h-36 w-28 sm:h-48 sm:w-36",
        positionClass[position],
        orientClass[position],
        className,
      )}
    />
  );
}
