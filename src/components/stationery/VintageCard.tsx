import { cn } from "@/lib/utils";
import { OrnamentalFrame } from "@/components/stationery/OrnamentalFrame";
import { PaperTexture } from "@/components/stationery/PaperTexture";

type Padding = "sm" | "md" | "lg";
type Rotate = "none" | "left" | "right" | "subtle-left" | "subtle-right";

type Props = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean | Padding;
  elevated?: boolean;
  framed?: boolean;
  /** Soft editorial tilt — keep subtle for readability */
  rotate?: Rotate;
  tone?: "ivory" | "cream" | "parchment";
};

const padMap: Record<Padding, string> = {
  sm: "px-4 py-5 sm:px-6 sm:py-7",
  md: "px-4 py-6 sm:px-8 sm:py-10",
  lg: "px-5 py-8 sm:px-10 sm:py-12",
};

const rotateClass: Record<Rotate, string> = {
  none: "",
  /* Soft tilt only from sm up — avoids horizontal clip on 320px */
  "subtle-left": "sm:-rotate-[0.6deg]",
  "subtle-right": "sm:rotate-[0.6deg]",
  left: "sm:-rotate-1",
  right: "sm:rotate-1",
};

/**
 * Luxury vintage invitation card —
 * paper texture, noise, soft shadow, thin border, ornamental corners.
 */
export function VintageCard({
  children,
  className,
  padded = true,
  elevated = true,
  framed = true,
  rotate = "none",
  tone = "ivory",
}: Props) {
  const paddingClass =
    padded === false
      ? ""
      : padded === true
        ? padMap.md
        : padMap[padded];

  const card = (
    <PaperTexture
      tone={tone}
      grain="soft"
      className={cn(
        "rounded-[3px] text-ink",
        "border border-brown-500/15",
        elevated &&
          "shadow-[0_14px_40px_rgb(21_17_14/0.18),0_2px_6px_rgb(21_17_14/0.08),inset_0_1px_0_rgb(255_255_255/0.45)]",
        rotateClass[rotate],
        className,
      )}
    >
      {framed ? (
        <OrnamentalFrame
          tone="antique"
          padding="none"
          className={cn("border-0", paddingClass)}
          double
          corners
        >
          {children}
        </OrnamentalFrame>
      ) : (
        <div className={cn(paddingClass)}>{children}</div>
      )}
    </PaperTexture>
  );

  return card;
}
