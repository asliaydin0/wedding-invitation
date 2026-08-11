import { cn } from "@/lib/utils";

export type BotanicalTone = "gold" | "ivory" | "soft" | "burgundy" | "embossed";

export function botanicalToneClass(tone: BotanicalTone = "gold") {
  switch (tone) {
    case "ivory":
      return "text-ivory-100/40";
    case "soft":
      return "text-beige-300/50";
    case "burgundy":
      return "text-burgundy-400/45";
    case "embossed":
      return "text-brown-600/28 [filter:drop-shadow(0_1px_0_rgb(255_255_255/0.22))]";
    default:
      return "text-gold-400/55";
  }
}

type SvgProps = {
  className?: string;
  tone?: BotanicalTone;
  flip?: boolean;
};

function svgClass(tone: BotanicalTone, flip: boolean | undefined, className?: string) {
  return cn(
    "pointer-events-none select-none overflow-visible",
    botanicalToneClass(tone),
    flip && "-scale-x-100",
    className,
  );
}

/** Classic leaf spray / sprig */
export function SvgSprig({ className, tone = "gold", flip }: SvgProps) {
  return (
    <svg aria-hidden viewBox="0 0 120 160" fill="none" className={svgClass(tone, flip, className)}>
      <path
        d="M60 152C58 122 54 96 52 72C50 50 52 30 60 14"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path d="M60 48c-10-2-18-10-22-18M60 48c10-2 18-10 22-18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M58 72c-12 0-22-8-26-16M62 72c12 0 22-8 26-16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M57 98c-11 2-20-4-24-12M63 98c11 2 20-4 24-12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M56 122c-9 3-16-1-20-8M64 122c9 3 16-1 20-8" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
      <circle cx="60" cy="36" r="1.6" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** Soft peony / rose bloom */
export function SvgRose({ className, tone = "gold", flip }: SvgProps) {
  return (
    <svg aria-hidden viewBox="0 0 80 90" fill="none" className={svgClass(tone, flip, className)}>
      <path
        d="M40 78C38 62 36 52 36 42"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M36 58c-10 2-16 10-18 18M36 58c8 4 14 8 16 14"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* Outer petals */}
      <path
        d="M40 42c12-2 20 6 18 16c-2 8-10 12-18 10c-8 2-16-2-18-10c-2-10 6-18 18-16Z"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M40 38c9-8 20-4 22 6c1 8-4 14-12 16"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M40 38c-9-8-20-4-22 6c-1 8 4 14 12 16"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Inner swirl */}
      <path
        d="M40 44c4 0 7 3 7 7c0 5-3 8-7 8c-3 0-5-2-5-5c0-2 1.5-3.5 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="40" cy="50" r="1.4" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

/** Curving branch with leaves */
export function SvgBranch({ className, tone = "gold", flip }: SvgProps) {
  return (
    <svg aria-hidden viewBox="0 0 180 100" fill="none" className={svgClass(tone, flip, className)}>
      <path
        d="M8 78C40 70 70 48 98 36C126 24 150 18 172 22"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path d="M48 66c-6-12-4-22 2-28M48 66c8-4 16-4 22 0" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
      <path d="M84 46c-4-14 0-24 8-30M84 46c10-2 18 2 22 8" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
      <path d="M120 32c-2-12 4-20 12-24M120 32c10 0 16 6 18 12" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M148 24c0-10 6-16 12-18" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
      <circle cx="160" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="108" cy="28" r="1.3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

/** Single leaf accent */
export function SvgLeaf({ className, tone = "gold", flip }: SvgProps) {
  return (
    <svg aria-hidden viewBox="0 0 48 72" fill="none" className={svgClass(tone, flip, className)}>
      <path
        d="M24 68C22 48 14 34 8 22C18 24 28 20 36 12C34 28 30 48 24 68Z"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinejoin="round"
      />
      <path d="M24 68C22 50 20 34 22 18" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M22 40c-6-2-10-8-12-14M24 48c5-1 10-4 14-10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/** Tiny botanical blossom */
export function SvgBloom({ className, tone = "gold", flip }: SvgProps) {
  return (
    <svg aria-hidden viewBox="0 0 40 48" fill="none" className={svgClass(tone, flip, className)}>
      <path d="M20 44V28" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M20 36c-6 0-10 4-12 8M20 36c6 0 10 4 12 8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <path
        d="M20 26c6-1 10 3 9 8c-1 4-5 6-9 5c-4 1-8-1-9-5c-1-5 3-9 9-8Z"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinejoin="round"
      />
      <path d="M20 18c4-5 10-4 12 1M20 18c-4-5-10-4-12 1" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" opacity="0.8" />
      <circle cx="20" cy="29" r="1.2" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

/** Corner bouquet — roses + foliage extending inward */
export function SvgCornerBouquet({ className, tone = "gold", flip }: SvgProps) {
  return (
    <svg aria-hidden viewBox="0 0 220 260" fill="none" className={svgClass(tone, flip, className)}>
      {/* Main stems */}
      <path
        d="M28 240C36 190 48 150 68 112C88 74 118 42 158 22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M48 220C70 180 102 150 138 132"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M40 200C62 168 88 142 120 120"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Foliage */}
      <path d="M56 188c-18-4-30-18-34-32M56 188c16 2 28-2 38-12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M72 148c-16-8-26-22-28-36M72 148c14-2 28-8 36-18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M96 108c-14-10-20-24-20-38M96 108c12-4 26-12 34-24" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
      <path d="M52 210c-14 0-24-10-28-20M52 210c12 4 22 2 30-4" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />

      {/* Rose #1 */}
      <path
        d="M158 22c14-2 24 8 22 20c-2 10-12 16-22 14c-10 2-20-4-22-14c-2-12 8-22 22-20Z"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinejoin="round"
      />
      <path
        d="M158 28c6-6 14-4 16 2c1 5-2 9-8 10"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M158 34c3 0 5 2 5 5c0 3-2 5-5 5c-2 0-3.5-1.5-3.5-3.5"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />

      {/* Rose #2 smaller */}
      <path
        d="M138 132c10-1 17 6 16 14c-1 7-8 11-15 10c-7 1-14-3-15-10c-1-8 5-15 14-14Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M138 138c4 0 6.5 2.5 6.5 6s-2.5 5.5-6 5.5"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
      />

      {/* Small bloom */}
      <path
        d="M120 120c7 0 11 4 10 9c-1 4-5 6-9 5c-4 1-8-1-9-5c-1-5 2-9 8-9Z"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity="0.8"
      />

      <circle cx="148" cy="48" r="1.6" fill="currentColor" opacity="0.45" />
      <circle cx="100" cy="96" r="1.4" fill="currentColor" opacity="0.4" />
      <circle cx="168" cy="36" r="1.2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/** Dense editorial cluster */
export function SvgCluster({ className, tone = "gold", flip }: SvgProps) {
  return (
    <svg aria-hidden viewBox="0 0 200 240" fill="none" className={svgClass(tone, flip, className)}>
      <path d="M36 220C42 170 48 130 58 92C68 54 86 28 118 12" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M58 150C78 138 108 128 142 132" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M52 110C72 92 98 78 128 74" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
      <path d="M62 175c-16-2-28-14-32-26M62 175c14 4 24 2 34-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M56 140c-14-6-22-18-24-30M56 140c12 0 24-6 32-16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M64 100c-12-8-18-20-18-32M64 100c10-2 22-10 28-20" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
      <path d="M118 12c8 6 12 14 10 22c-6-4-12-6-18-6c2-8 4-14 8-16Z" stroke="currentColor" strokeWidth="0.95" strokeLinejoin="round" />
      <path d="M128 74c10 4 16 12 16 20c-8-2-16-2-22 2c0-8 2-16 6-22Z" stroke="currentColor" strokeWidth="0.95" strokeLinejoin="round" />
      <path d="M142 132c10 6 14 14 12 22c-8-2-16 0-22 4c2-10 4-18 10-26Z" stroke="currentColor" strokeWidth="0.95" strokeLinejoin="round" />
      <circle cx="98" cy="48" r="2" fill="currentColor" opacity="0.55" />
      <circle cx="78" cy="88" r="1.6" fill="currentColor" opacity="0.45" />
      <circle cx="118" cy="118" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
