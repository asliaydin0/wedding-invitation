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
 * Section-specific botanical layouts — clipped, mobile-safe sizes.
 */
export function FloralAccent({ preset, className, tone = "gold" }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
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
      <FloralCorner
        position="tl"
        tone={tone}
        motion="sway"
        parallax={0.25}
        appearDelay={0.05}
        className="h-24 w-16 opacity-90 sm:h-auto sm:w-auto"
      />
      <FloralCorner
        position="br"
        tone={tone}
        motion="float"
        parallax={0.22}
        appearDelay={0.18}
        className="h-24 w-16 opacity-90 sm:h-auto sm:w-auto"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        motion="drift"
        parallax={0.15}
        appearDelay={0.28}
        className="absolute right-0 top-[20%] h-20 w-12 rotate-[18deg] opacity-70 sm:right-3 sm:h-36 sm:w-20 sm:rotate-[22deg] sm:opacity-80"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="sway"
        parallax={0.15}
        appearDelay={0.34}
        className="absolute bottom-[24%] left-0 h-20 w-12 -rotate-[14deg] opacity-70 sm:left-3 sm:h-36 sm:w-20 sm:-rotate-[18deg] sm:opacity-80"
      />
      <FloralMotif
        motif="bloom"
        tone="burgundy"
        motion="float"
        appearDelay={0.4}
        className="absolute right-[16%] top-[38%] hidden h-10 w-8 opacity-70 sm:block"
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
        parallax={0.15}
        className="absolute right-0 top-8 h-16 w-12 opacity-70 sm:right-2 sm:h-20 sm:w-16 sm:opacity-75"
      />
      <FloralMotif
        motif="leaf"
        tone={tone}
        flip
        motion="sway"
        parallax={0.12}
        appearDelay={0.12}
        className="absolute bottom-10 left-0 h-14 w-9 opacity-55 sm:h-16 sm:w-11 sm:opacity-60"
      />
      <FloralMotif
        motif="bloom"
        tone="burgundy"
        motion="none"
        appearDelay={0.2}
        className="absolute right-6 bottom-24 hidden h-9 w-7 opacity-55 sm:block"
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
        parallax={0.12}
        className="absolute -left-4 top-6 h-12 w-28 -rotate-6 opacity-45 sm:-left-2 sm:h-16 sm:w-36 sm:opacity-55"
      />
      <FloralMotif
        motif="branch"
        tone={tone}
        flip
        motion="drift"
        parallax={0.12}
        appearDelay={0.15}
        className="absolute -right-4 bottom-8 h-12 w-28 rotate-6 opacity-45 sm:-right-2 sm:h-16 sm:w-36 sm:opacity-55"
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
          parallax={0.15}
          appearDelay={i * 0.12}
          className="h-24 w-16 opacity-65 sm:h-36 sm:w-28 sm:opacity-70"
        />
      ))}
      <FloralMotif
        motif="rose"
        tone="burgundy"
        motion="float"
        appearDelay={0.2}
        className="absolute left-1/2 top-4 h-10 w-8 -translate-x-1/2 opacity-45 sm:h-12 sm:w-10 sm:opacity-50"
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
        parallax={0.12}
        className="absolute left-0 top-2 h-20 w-12 opacity-55 sm:-left-2 sm:h-24 sm:w-14 sm:opacity-60"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="float"
        parallax={0.12}
        appearDelay={0.1}
        className="absolute right-0 bottom-2 h-20 w-12 opacity-55 sm:-right-2 sm:h-24 sm:w-14 sm:opacity-60"
      />
      <FloralMotif
        motif="leaf"
        tone={tone}
        motion="none"
        appearDelay={0.18}
        className="absolute right-8 top-16 hidden h-12 w-8 opacity-45 sm:block"
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
        className="absolute left-3 top-8 h-8 w-6 opacity-45 sm:left-4 sm:h-10 sm:w-8 sm:opacity-50"
      />
      <FloralMotif
        motif="bloom"
        tone={tone}
        flip
        motion="float"
        appearDelay={0.15}
        className="absolute right-3 bottom-10 h-8 w-6 opacity-45 sm:right-4 sm:h-10 sm:w-8 sm:opacity-50"
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
        parallax={0.15}
        className="h-24 w-16 opacity-50 sm:h-40 sm:w-32 sm:opacity-55"
      />
      <FloralMotif
        motif="rose"
        tone="burgundy"
        motion="sway"
        parallax={0.12}
        appearDelay={0.12}
        className="absolute bottom-4 right-1 h-12 w-10 opacity-55 sm:bottom-6 sm:right-2 sm:h-16 sm:w-14 sm:opacity-60"
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
        parallax={0.1}
        className="absolute left-0 top-0 z-[3] h-20 w-12 opacity-55 sm:-left-3 sm:-top-2 sm:h-24 sm:w-14 sm:opacity-65"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="float"
        parallax={0.1}
        appearDelay={0.1}
        className="absolute bottom-0 right-0 z-[3] h-20 w-12 opacity-55 sm:-bottom-2 sm:-right-3 sm:h-24 sm:w-14 sm:opacity-65"
      />
      <FloralMotif
        motif="bloom"
        tone="burgundy"
        motion="none"
        appearDelay={0.2}
        className="absolute right-5 top-10 hidden h-8 w-6 opacity-45 sm:block"
      />
    </>
  );
}

function FinaleFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralCorner
        position="tl"
        tone={tone}
        motion="sway"
        parallax={0.2}
        className="h-24 w-16 opacity-65 sm:h-auto sm:w-auto sm:opacity-70"
      />
      <FloralCorner
        position="br"
        tone={tone}
        motion="float"
        parallax={0.2}
        appearDelay={0.15}
        className="h-24 w-16 opacity-65 sm:h-auto sm:w-auto sm:opacity-70"
      />
      <FloralMotif
        motif="rose"
        tone="burgundy"
        motion="float"
        appearDelay={0.25}
        className="absolute bottom-[28%] left-[8%] h-12 w-10 opacity-50 sm:left-[12%] sm:h-14 sm:w-12 sm:opacity-55"
      />
      <FloralMotif
        motif="rose"
        tone={tone}
        flip
        motion="sway"
        appearDelay={0.3}
        className="absolute right-[8%] top-[26%] h-12 w-10 opacity-50 sm:right-[10%] sm:h-14 sm:w-12 sm:opacity-55"
      />
    </>
  );
}
