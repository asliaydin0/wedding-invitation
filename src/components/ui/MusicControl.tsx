"use client";

import { Music2, VolumeX } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/** Mini equalizer bars — transform only */
function Visualizer({ active }: { active: boolean }) {
  const reduced = useReducedMotion() ?? false;

  return (
    <span
      aria-hidden
      className="absolute inset-x-0 bottom-2 mx-auto flex h-2.5 w-5 items-end justify-center gap-[2px]"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            "w-[2px] rounded-full bg-gold-400/80",
            active && !reduced && "origin-bottom animate-music-bar",
          )}
          style={{
            height: active ? undefined : 3,
            animationDelay: active && !reduced ? `${i * 0.14}s` : undefined,
            ...(active && reduced ? { height: 5 + i } : null),
          }}
        />
      ))}
    </span>
  );
}

/**
 * Premium circular music control — fixed bottom-right.
 * Never autoplays; only reacts to user gestures (button / wax seal unlock).
 */
export function MusicControl({ className }: Props) {
  const { isPlaying, isAvailable, toggle } = useAudio();
  const reduced = useReducedMotion() ?? false;

  // Keep visible until a load is proven broken (idle/ready both show)
  if (!isAvailable) return null;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggle();
      }}
      aria-label={isPlaying ? "Müziği durdur" : "Müziği çal"}
      aria-pressed={isPlaying}
      className={cn(
        "group fixed bottom-6 right-5 z-[80] flex size-12 items-center justify-center rounded-full",
        "border border-gold-500/45 bg-burgundy-700 text-ivory-100",
        "shadow-[0_10px_28px_rgb(21_17_14/0.4),inset_0_1px_0_rgb(255_255_255/0.12)]",
        "backdrop-blur-sm outline-none transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-gold-400/60 hover:bg-burgundy-600",
        "focus-visible:ring-2 focus-visible:ring-gold-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-950",
        !isPlaying && !reduced && "animate-[seal-breathe_3.2s_ease-in-out_infinite]",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-[3px] rounded-full border border-gold-500/15"
      />

      {isPlaying ? (
        <>
          <Music2 size={17} strokeWidth={1.5} className="relative z-10 mb-0.5" />
          <Visualizer active />
        </>
      ) : (
        <VolumeX size={17} strokeWidth={1.5} className="relative z-10" />
      )}
    </button>
  );
}

/** @deprecated Use MusicControl */
export function MusicToggle(props: Props) {
  return <MusicControl {...props} />;
}
