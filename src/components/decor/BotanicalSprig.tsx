import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Soft tone-on-tone emboss for gatefold panels */
  embossed?: boolean;
  flip?: boolean;
};

/** Minimal botanical sprig — line illustration, not photo-real clutter */
export function BotanicalSprig({ className, embossed = false, flip = false }: Props) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 160"
      fill="none"
      className={cn(
        "pointer-events-none select-none",
        flip && "-scale-x-100",
        embossed
          ? "text-brown-600/25 [filter:drop-shadow(0_1px_0_rgb(255_255_255/0.25))]"
          : "text-gold-400/55",
        className,
      )}
    >
      <path
        d="M60 150C58 120 54 95 52 70C50 48 52 28 60 12"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M60 48c-10-2-18-10-22-18M60 48c10-2 18-10 22-18"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M58 72c-12 0-22-8-26-16M62 72c12 0 22-8 26-16"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M57 98c-11 2-20-4-24-12M63 98c11 2 20-4 24-12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M56 122c-9 3-16-1-20-8M64 122c9 3 16-1 20-8"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      <circle cx="60" cy="36" r="1.6" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
