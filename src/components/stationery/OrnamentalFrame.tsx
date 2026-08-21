import { cn } from "@/lib/utils";

type Tone = "antique" | "bronze" | "ink";
type Padding = "sm" | "md" | "lg" | "none";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  padding?: Padding;
  /** Double inner rule */
  double?: boolean;
  /** Corner flourishes */
  corners?: boolean;
};

const toneBorder: Record<Tone, string> = {
  antique: "border-gold-500/35",
  bronze: "border-beige-400/45",
  ink: "border-brown-500/25",
};

const toneCorner: Record<Tone, string> = {
  antique: "text-gold-500/55",
  bronze: "text-beige-400/60",
  ink: "text-brown-500/40",
};

const padClass: Record<Padding, string> = {
  none: "",
  sm: "p-2.5 sm:p-3",
  md: "p-3.5 sm:p-4",
  lg: "p-5 sm:p-6",
};

function Corner({ className, tone }: { className: string; tone: Tone }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 28 28"
      fill="none"
      className={cn(
        "pointer-events-none absolute size-5 sm:size-6",
        toneCorner[tone],
        className,
      )}
    >
      <path
        d="M4 18V6.5C4 5.12 5.12 4 6.5 4H18"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M9 4.5c1.8 1.2 3 3 3 5"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M4.5 9c1.2 1.8 3 3 5 3"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/**
 * Ornamental stationery frame — thin antique border + optional corners.
 */
export function OrnamentalFrame({
  children,
  className,
  tone = "antique",
  padding = "md",
  double = true,
  corners = true,
}: Props) {
  return (
    <div
      className={cn(
        "relative rounded-[2px] border",
        toneBorder[tone],
        padClass[padding],
        className,
      )}
    >
      {double ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-[5px] rounded-[1px] border sm:inset-1.5",
            tone === "antique" && "border-gold-500/22",
            tone === "bronze" && "border-beige-400/25",
            tone === "ink" && "border-brown-500/15",
          )}
        />
      ) : null}

      {corners ? (
        <>
          <Corner tone={tone} className="left-0.5 top-0.5" />
          <Corner tone={tone} className="right-0.5 top-0.5 rotate-90" />
          <Corner tone={tone} className="bottom-0.5 left-0.5 -rotate-90" />
          <Corner tone={tone} className="bottom-0.5 right-0.5 rotate-180" />
        </>
      ) : null}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
