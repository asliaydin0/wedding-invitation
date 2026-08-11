"use client";

import { Headphones, VolumeX } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function MusicToggle({ className }: Props) {
  const { isPlaying, toggle } = useAudio();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? "Müziği durdur" : "Müziği çal"}
      className={cn(
        "fixed bottom-6 right-5 z-50 flex size-11 items-center justify-center rounded-full border border-ivory-200/20 bg-espresso-950/75 text-ivory-100 shadow-soft backdrop-blur-md transition hover:bg-espresso-800",
        className,
      )}
    >
      {isPlaying ? <Headphones size={18} strokeWidth={1.5} /> : <VolumeX size={18} strokeWidth={1.5} />}
    </button>
  );
}
