import { cn } from "@/lib/utils";

type Variant = "diamond" | "line" | "ornament" | "rule";
type Align = "center" | "left" | "stretch";

type Props = {
  className?: string;
  variant?: Variant;
  align?: Align;
  /** Max width utility for centered rules */
  max?: "sm" | "md" | "lg" | "full";
};

const maxClass = {
  sm: "max-w-28",
  md: "max-w-44",
  lg: "max-w-56",
  full: "max-w-none",
} as const;

/**
 * Muted antique-gold divider — never shiny/metallic chrome.
 */
export function GoldDivider({
  className,
  variant = "diamond",
  align = "center",
  max = "md",
}: Props) {
  const alignClass =
    align === "left"
      ? "mr-auto"
      : align === "stretch"
        ? "w-full"
        : "mx-auto";

  if (variant === "line" || variant === "rule") {
    return (
      <div
        aria-hidden
        className={cn(
          "h-px w-full",
          maxClass[max],
          alignClass,
          "bg-gradient-to-r from-transparent via-gold-500/45 to-transparent",
          className,
        )}
      />
    );
  }

  if (variant === "ornament") {
    return (
      <div
        aria-hidden
        className={cn(
          "flex w-full items-center gap-3",
          maxClass[max],
          alignClass,
          className,
        )}
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/40" />
        <svg
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
          className="text-gold-500/65"
        >
          <path
            d="M1 4H6L8 1.5L10 4H15"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/40" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center justify-center gap-3",
        align === "left" && "justify-start",
        className,
      )}
    >
      <span className="h-px w-9 bg-gradient-to-r from-transparent to-gold-500/50" />
      <span className="size-1.5 rotate-45 bg-gold-500/70" />
      <span className="h-px w-9 bg-gradient-to-l from-transparent to-gold-500/50" />
    </div>
  );
}
