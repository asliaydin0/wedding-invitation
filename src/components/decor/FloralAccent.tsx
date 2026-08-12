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
 * Section botanicals — always behind copy (z-0), clipped to corners.
 * Never invade the center text column on mobile.
 */
export function FloralAccent({ preset, className, tone = "gold" }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
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

/** Corner-only — kept clear of the centered title stack */
function HeroFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralCorner
        position="tl"
        tone={tone}
        motion="sway"
        parallax={0.12}
        appearDelay={0.05}
        className="-translate-x-3 -translate-y-3 h-[4.5rem] w-[3.25rem] opacity-45 sm:h-36 sm:w-28 sm:opacity-55"
      />
      <FloralCorner
        position="br"
        tone={tone}
        motion="float"
        parallax={0.12}
        appearDelay={0.18}
        className="translate-x-3 translate-y-3 h-[4.5rem] w-[3.25rem] opacity-45 sm:h-36 sm:w-28 sm:opacity-55"
      />
      {/* Edge sprigs — only outside the center column */}
      <FloralMotif
        motif="sprig"
        tone={tone}
        motion="drift"
        parallax={0.08}
        appearDelay={0.28}
        className="absolute -right-1 top-[12%] h-16 w-10 rotate-[20deg] opacity-35 sm:right-1 sm:top-[16%] sm:h-28 sm:w-16 sm:opacity-50"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="sway"
        parallax={0.08}
        appearDelay={0.34}
        className="absolute -left-1 bottom-[14%] h-16 w-10 -rotate-[16deg] opacity-35 sm:left-1 sm:bottom-[16%] sm:h-28 sm:w-16 sm:opacity-50"
      />
    </>
  );
}

function StoryFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      {/* Anchored to top-right corner — not floating mid-heading */}
      <FloralMotif
        motif="rose"
        tone={tone}
        motion="float"
        parallax={0.08}
        className="absolute -right-1 top-2 h-12 w-9 opacity-40 sm:right-0 sm:top-4 sm:h-16 sm:w-12 sm:opacity-55"
      />
      <FloralMotif
        motif="leaf"
        tone={tone}
        flip
        motion="sway"
        parallax={0.08}
        appearDelay={0.12}
        className="absolute bottom-6 -left-1 h-12 w-8 opacity-40 sm:bottom-10 sm:left-0 sm:h-16 sm:w-11 sm:opacity-55"
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
        parallax={0.08}
        className="absolute -left-8 top-4 h-10 w-24 -rotate-6 opacity-35 sm:-left-3 sm:h-14 sm:w-32 sm:opacity-50"
      />
      <FloralMotif
        motif="branch"
        tone={tone}
        flip
        motion="drift"
        parallax={0.08}
        appearDelay={0.15}
        className="absolute -right-8 bottom-6 h-10 w-24 rotate-6 opacity-35 sm:-right-3 sm:h-14 sm:w-32 sm:opacity-50"
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
          parallax={0.1}
          appearDelay={i * 0.12}
          className="h-16 w-12 opacity-40 sm:h-28 sm:w-20 sm:opacity-55"
        />
      ))}
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
        parallax={0.08}
        className="absolute -left-1 top-1 h-16 w-10 opacity-40 sm:left-0 sm:h-20 sm:w-12 sm:opacity-50"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="float"
        parallax={0.08}
        appearDelay={0.1}
        className="absolute -right-1 bottom-1 h-16 w-10 opacity-40 sm:right-0 sm:h-20 sm:w-12 sm:opacity-50"
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
        className="absolute left-1 top-4 h-7 w-5 opacity-35 sm:left-3 sm:top-8 sm:h-9 sm:w-7 sm:opacity-45"
      />
      <FloralMotif
        motif="bloom"
        tone={tone}
        flip
        motion="float"
        appearDelay={0.15}
        className="absolute right-1 bottom-6 h-7 w-5 opacity-35 sm:right-3 sm:bottom-10 sm:h-9 sm:w-7 sm:opacity-45"
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
        parallax={0.1}
        className="-translate-x-2 -translate-y-2 h-16 w-12 opacity-35 sm:h-32 sm:w-24 sm:opacity-50"
      />
      <FloralMotif
        motif="rose"
        tone="burgundy"
        motion="sway"
        parallax={0.08}
        appearDelay={0.12}
        className="absolute bottom-2 -right-1 h-10 w-8 opacity-40 sm:bottom-4 sm:right-1 sm:h-14 sm:w-12 sm:opacity-50"
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
        parallax={0.08}
        className="absolute -left-2 -top-1 h-16 w-10 opacity-40 sm:h-20 sm:w-12 sm:opacity-50"
      />
      <FloralMotif
        motif="sprig"
        tone={tone}
        flip
        motion="float"
        parallax={0.08}
        appearDelay={0.1}
        className="absolute -bottom-1 -right-2 h-16 w-10 opacity-40 sm:h-20 sm:w-12 sm:opacity-50"
      />
    </>
  );
}

/** Finale: corners only — no mid-column roses over names */
function FinaleFlorals({ tone }: { tone: BotanicalTone }) {
  return (
    <>
      <FloralCorner
        position="tl"
        tone={tone}
        motion="sway"
        parallax={0.1}
        className="-translate-x-4 -translate-y-3 h-16 w-12 opacity-35 sm:h-32 sm:w-24 sm:opacity-50"
      />
      <FloralCorner
        position="br"
        tone={tone}
        motion="float"
        parallax={0.1}
        appearDelay={0.15}
        className="translate-x-4 translate-y-3 h-16 w-12 opacity-35 sm:h-32 sm:w-24 sm:opacity-50"
      />
    </>
  );
}
