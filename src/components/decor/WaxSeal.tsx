"use client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  onClick?: () => void;
  pulse?: boolean;
};

const sizeMap = {
  sm: "size-14",
  md: "size-[4.5rem]",
  lg: "size-24",
} as const;

/**
 * Wax seal CTA — tactile burgundy disc with botanical imprint.
 * Intentionally restrained: no glitter, soft metallic sheen only.
 */
export function WaxSeal({
  className,
  size = "md",
  label = "Aç",
  onClick,
  pulse = true,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-full bg-burgundy-600 text-ivory-50 shadow-seal outline-none transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-gold-400/60",
        sizeMap[size],
        pulse && "animate-[seal-breathe_2.8s_ease-in-out_infinite]",
        "hover:scale-[1.03] active:scale-95",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgb(154_51_72/0.9),transparent_55%),radial-gradient(circle_at_70%_80%,rgb(66_17_28/0.85),transparent_50%)]"
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-40 mix-blend-soft-light"
        style={{
          background:
            "linear-gradient(135deg, rgb(255 255 255 / 0.35) 0%, transparent 40%, rgb(0 0 0 / 0.2) 100%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 64 64"
        className="relative z-10 size-[55%] text-ivory-100/85"
        fill="none"
      >
        <path
          d="M32 14c1.5 6 3 11 3 16s-1 9-3 14c-2-5-3-9-3-14s1.5-10 3-16Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M24 28c4 1.5 8 2 12 2s8-.5 12-2"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M26 36c3 .8 6 1.2 6 1.2s3-.4 6-1.2"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="32" cy="24" r="1.4" fill="currentColor" opacity="0.7" />
      </svg>
    </button>
  );
}
