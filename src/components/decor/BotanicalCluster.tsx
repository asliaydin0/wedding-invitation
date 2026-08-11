import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  tone?: "gold" | "ivory" | "soft";
};

/**
 * Fuller floral cluster for hero corners —
 * line-drawn, editorial, extends inward without clutter.
 */
export function BotanicalCluster({ className, tone = "gold" }: Props) {
  const color =
    tone === "ivory"
      ? "text-ivory-100/35"
      : tone === "soft"
        ? "text-beige-300/45"
        : "text-gold-400/50";

  return (
    <svg
      aria-hidden
      viewBox="0 0 200 240"
      fill="none"
      className={cn("pointer-events-none select-none", color, className)}
    >
      {/* Main stem */}
      <path
        d="M36 220C42 170 48 130 58 92C68 54 86 28 118 12"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      {/* Side stem */}
      <path
        d="M58 150C78 138 108 128 142 132"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M52 110C72 92 98 78 128 74"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinecap="round"
      />

      {/* Leaves along main stem */}
      <path
        d="M62 175c-16-2-28-14-32-26M62 175c14 4 24 2 34-6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M56 140c-14-6-22-18-24-30M56 140c12 0 24-6 32-16"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M64 100c-12-8-18-20-18-32M64 100c10-2 22-10 28-20"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinecap="round"
      />

      {/* Bloom petals — restrained */}
      <path
        d="M118 12c8 6 12 14 10 22c-6-4-12-6-18-6c2-8 4-14 8-16Z"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinejoin="round"
      />
      <path
        d="M128 74c10 4 16 12 16 20c-8-2-16-2-22 2c0-8 2-16 6-22Z"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinejoin="round"
      />
      <path
        d="M142 132c10 6 14 14 12 22c-8-2-16 0-22 4c2-10 4-18 10-26Z"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinejoin="round"
      />

      {/* Bud accents */}
      <circle cx="98" cy="48" r="2" fill="currentColor" opacity="0.55" />
      <circle cx="78" cy="88" r="1.6" fill="currentColor" opacity="0.45" />
      <circle cx="118" cy="118" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
