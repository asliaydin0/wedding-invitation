"use client";

import { FloralCorner, type FloralCornerPosition } from "@/components/decor/FloralCorner";
import { FloralMotif } from "@/components/decor/FloralMotif";
import type { BotanicalTone } from "@/components/decor/botanicals/svg";
import { cn } from "@/lib/utils";

type AccentPreset =
  | "hero"
  | "story"
  | "details"
  | "datetime"
  | "venue"
  | "countdown"
  | "gallery"
  | "rsvp"
  | "finale";

type Props = {
  preset: AccentPreset;
  className?: string;
  tone?: BotanicalTone;
};

/**
 * Section-specific botanical layouts — different compositions per chapter.
 */
export function FloralAccent({ preset, className, tone = "gold" }: Props) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {preset === "hero" && <HeroFlorals tone={tone} />}
      {preset === "story" && <StoryFlorals tone={tone} />}
      {preset === "details" && <SideBranchFlorals tone={tone} />}
      {preset === "datetime" && <BloomCorners tone={tone} />}
      {preset === "venue" && <MapFlorals tone={tone} />}
      {preset === "countdown" && <SparseFlorals tone={tone} />}
      {preset === "gallery" && <GalleryFlorals tone={tone} />}
      {preset === "rsvp" && <RsvpFlorals tone={tone} />}
      {preset === "finale" && <FinaleFlorals tone={tone} />}
    </div>
  );
}

function HeroFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralCorner position="tl" tone={tone} motion="sway" parallax={0.4} appearDelay={0.05} />
      <FloralCorner position="br" tone={tone} motion="float" parallax={0.35} appearDelay={0.18} />
      <FloralMotif
        motif="sprig"
        tone={tone}
        motion="drift"
        parallax={0.25}
        appearDelay={0.28}
        className="absolute right-1 top-[20%] h-28 w-16 rotate-[22deg] opacity-80 sm:right-3 sm:h-36 sm:w-20"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="sway"
        parallax={0.25}
        appearDelay={0.34}
        className="absolute bottom-[24%] left-1 h-28 w-16 -rotate-[18deg] opacity-80 sm:left-3 sm:h-36 sm:w-20"
      />
      <FloralMotif
        motif="bloom"
        tone="burgundy"
        motion="float"
        appearDelay={0.4}
        className="absolute right-[18%] top-[38%] h-10 w-8 opacity-70"
      />
    </>
  );
}

function StoryFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralMotif
        motif="rose"
        tone={tone}
        motion="float"
        parallax={0.3}
        className="absolute -right-1 top-8 h-20 w-16 opacity-75 sm:right-2"
      />
      <FloralMotif
        motif="leaf"
        tone={tone}
        flip
        motion="sway"
        parallax={0.2}
        appearDelay={0.12}
        className="absolute bottom-10 left-0 h-16 w-11 opacity-60"
      />
      <FloralMotif
        motif="bloom"
        tone="burgundy"
        motion="none"
        appearDelay={0.2}
        className="absolute right-8 bottom-24 h-9 w-7 opacity-55"
      />
    </>
  );
}

function SideBranchFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralMotif
        motif="branch"
        tone={tone}
        motion="drift"
        parallax={0.2}
        className="absolute -left-6 top-6 h-16 w-36 -rotate-6 opacity-55 sm:-left-2"
      />
      <FloralMotif
        motif="branch"
        tone={tone}
        flip
        motion="drift"
        parallax={0.2}
        appearDelay={0.15}
        className="absolute -right-6 bottom-8 h-16 w-36 rotate-6 opacity-55 sm:-right-2"
      />
    </>
  );
}

function BloomCorners({ tone }: { tone: BotanicalTone }) {
  const corners: FloralCornerPosition[] = ["tl", "br"];
  return (
    <>
      {corners.map((p, i) => (
        <FloralCorner
          key={p}
          position={p}
          tone={tone}
          variant="sprig"
          motion="sway"
          parallax={0.25}
          appearDelay={i * 0.12}
          className="h-28 w-20 opacity-70 sm:h-36 sm:w-28"
        />
      ))}
      <FloralMotif
        motif="rose"
        tone="burgundy"
        motion="float"
        appearDelay={0.2}
        className="absolute left-1/2 top-4 h-12 w-10 -translate-x-1/2 opacity-50"
      />
    </>
  );
}

function MapFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralMotif
        motif="sprig"
        tone={tone}
        motion="sway"
        parallax={0.2}
        className="absolute -left-2 top-2 h-24 w-14 opacity-60"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="float"
        parallax={0.2}
        appearDelay={0.1}
        className="absolute -right-2 bottom-2 h-24 w-14 opacity-60"
      />
      <FloralMotif
        motif="leaf"
        tone={tone}
        motion="none"
        appearDelay={0.18}
        className="absolute right-10 top-16 h-12 w-8 opacity-45"
      />
    </>
  );
}

function SparseFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralMotif
        motif="bloom"
        tone={tone}
        motion="float"
        className="absolute left-4 top-8 h-10 w-8 opacity-50"
      />
      <FloralMotif
        motif="bloom"
        tone={tone}
        flip
        motion="float"
        appearDelay={0.15}
        className="absolute right-4 bottom-10 h-10 w-8 opacity-50"
      />
    </>
  );
}

function GalleryFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralCorner
        position="tl"
        tone={tone}
        variant="cluster"
        motion="drift"
        parallax={0.3}
        className="h-32 w-24 opacity-55 sm:h-40 sm:w-32"
      />
      <FloralMotif
        motif="rose"
        tone="burgundy"
        motion="sway"
        parallax={0.2}
        appearDelay={0.12}
        className="absolute bottom-6 right-2 h-16 w-14 opacity-60"
      />
    </>
  );
}

function RsvpFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralMotif
        motif="sprig"
        tone={tone}
        motion="sway"
        parallax={0.15}
        className="absolute -left-3 -top-2 z-[3] h-24 w-14 opacity-65"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="float"
        parallax={0.15}
        appearDelay={0.1}
        className="absolute -bottom-2 -right-3 z-[3] h-24 w-14 opacity-65"
      />
      <FloralMotif
        motif="bloom"
        tone="burgundy"
        motion="none"
        appearDelay={0.2}
        className="absolute right-6 top-10 h-8 w-6 opacity-45"
      />
    </>
  );
}

function FinaleFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralCorner position="tl" tone={tone} motion="sway" parallax={0.35} className="opacity-70" />
      <FloralCorner position="br" tone={tone} motion="float" parallax={0.35} appearDelay={0.15} className="opacity-70" />
      <FloralMotif
        motif="rose"
        tone="burgundy"
        motion="float"
        appearDelay={0.25}
        className="absolute left-[12%] bottom-[30%] h-14 w-12 opacity-55"
      />
      <FloralMotif
        motif="rose"
        tone={tone}
        flip
        motion="sway"
        appearDelay={0.3}
        className="absolute right-[10%] top-[28%] h-14 w-12 opacity-55"
      />
    </>
  );
}
