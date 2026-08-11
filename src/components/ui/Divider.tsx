import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "diamond" | "line" | "ornament";
};

/** Thin gold ornamental divider — restrained, editorial */
export function Divider({ className, variant = "diamond" }: Props) {
  if (variant === "line") {
    return <div aria-hidden className={cn("rule-gold w-full max-w-48", className)} />;
  }

  if (variant === "ornament") {
    return (
      <div
        aria-hidden
        className={cn("mx-auto flex w-full max-w-56 items-center gap-3", className)}
      >
        <span className="rule-gold h-px flex-1" />
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-gold-400/70">
          <path
            d="M1 4H5.5L7 1.5L8.5 4H13"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="rule-gold h-px flex-1" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn("mx-auto flex items-center justify-center gap-3", className)}
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/55" />
      <span className="size-1.5 rotate-45 bg-gold-400/75" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/55" />
    </div>
  );
}
