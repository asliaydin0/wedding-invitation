import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Outer metallic frame tone */
  tone?: "gold" | "bronze";
};

/**
 * Vintage frame chrome — soft metallic edge, not baroque overload.
 * Corners get subtle flourishes; center stays clean for content.
 */
export function VintageFrame({ children, className, tone = "gold" }: Props) {
  const stroke = tone === "gold" ? "text-gold-400" : "text-beige-400";

  return (
    <div className={cn("relative p-3 sm:p-4", className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-sm border",
          tone === "gold" ? "border-gold-400/45" : "border-beige-400/50",
          "shadow-[inset_0_0_0_1px_rgb(250_247_242/0.08)]",
        )}
      />

      {/* Corner marks */}
      {(
        [
          "left-1 top-1",
          "right-1 top-1 rotate-90",
          "bottom-1 left-1 -rotate-90",
          "bottom-1 right-1 rotate-180",
        ] as const
      ).map((pos) => (
        <svg
          key={pos}
          aria-hidden
          viewBox="0 0 24 24"
          className={cn("pointer-events-none absolute size-5 opacity-70", stroke, pos)}
          fill="none"
        >
          <path
            d="M3 15V5.5C3 4.12 4.12 3 5.5 3H15"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M7 3.5c1.5 1 2.5 2.5 2.5 4.2"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      ))}

      <div className="relative z-10 overflow-hidden rounded-[2px]">{children}</div>
    </div>
  );
}
