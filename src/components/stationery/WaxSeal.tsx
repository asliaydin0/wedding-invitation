"use client";

import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";

type Props = {
  className?: string;
  size?: Size;
  label?: string;
  onClick?: () => void;
  pulse?: boolean;
  /** Decorative only — not interactive */
  decorative?: boolean;
  disabled?: boolean;
};

const sizeMap: Record<Size, string> = {
  sm: "size-12",
  md: "size-[4.5rem]",
  lg: "size-24",
  xl: "size-28",
};

/**
 * Burgundy wax seal with embossed botanical imprint + soft 3D depth.
 */
export function WaxSeal({
  className,
  size = "md",
  label = "Mühür",
  onClick,
  pulse = false,
  decorative = false,
  disabled = false,
}: Props) {
  const classes = cn(
    "relative inline-flex items-center justify-center rounded-full outline-none",
    "bg-burgundy-600 text-ivory-50",
    "shadow-[0_10px_28px_rgb(66_17_28/0.42),0_2px_4px_rgb(0_0_0/0.2),inset_0_1px_2px_rgb(255_255_255/0.22),inset_0_-8px_14px_rgb(0_0_0/0.28)]",
    sizeMap[size],
    pulse && "animate-[seal-breathe_2.8s_ease-in-out_infinite]",
    !decorative &&
      "cursor-pointer transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] active:scale-95 focus-visible:ring-2 focus-visible:ring-gold-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-100",
    decorative && "pointer-events-none",
    disabled && "pointer-events-none opacity-60",
    className,
  );

  const body = (
    <>
      {/* Wax body depth */}
      <span
        aria-hidden
        className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle_at_30%_22%,rgb(154_51_72/0.95),transparent_52%),radial-gradient(circle_at_70%_82%,rgb(66_17_28/0.92),transparent_48%)]"
      />
      {/* Soft specular — muted, not chrome */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-[0.38] mix-blend-soft-light"
        style={{
          background:
            "linear-gradient(140deg, rgb(255 255 255 / 0.32) 0%, transparent 42%, rgb(0 0 0 / 0.22) 100%)",
        }}
      />
      {/* Rim */}
      <span
        aria-hidden
        className="absolute inset-[3px] rounded-full border border-burgundy-400/25"
      />
      {/* Embossed botanical */}
      <svg
        aria-hidden
        viewBox="0 0 64 64"
        className="relative z-10 size-[54%] text-ivory-100/80"
        fill="none"
      >
        <path
          d="M32 12c1.6 7 3.2 13 3.2 18.5S34 41 32 48c-2-7-3.2-12-3.2-17.5S30.4 19 32 12Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M22 27c5 1.8 10 2.5 10 2.5s5-.7 10-2.5"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <path
          d="M24 36c4 .9 8 1.4 8 1.4s4-.5 8-1.4"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
        />
        <path
          d="M26 43c3 .6 6 1 6 1s3-.4 6-1"
          stroke="currentColor"
          strokeWidth="0.95"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="32" cy="22" r="1.5" fill="currentColor" opacity="0.7" />
      </svg>
    </>
  );

  if (decorative) {
    return (
      <div aria-hidden className={classes}>
        {body}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={classes}
    >
      {body}
    </button>
  );
}
