"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { GoldDivider } from "@/components/stationery/GoldDivider";
import { VintageCard } from "@/components/stationery/VintageCard";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

export type CountdownLabels = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type Props = {
  /** ISO datetime — read from content/config, never hardcode at call site */
  targetISO: string;
  labels: CountdownLabels;
  /** Shown when targetISO is in the past */
  arrivedMessage: string;
  className?: string;
  /** Wrap in VintageCard (default true) */
  card?: boolean;
};

function FlipDigit({
  value,
  label,
  pad = 2,
}: {
  value: number;
  label: string;
  pad?: number;
}) {
  const reduced = useReducedMotion() ?? false;
  const display = String(value).padStart(pad, "0");

  return (
    <div className="flex min-w-[3.75rem] flex-1 flex-col items-center gap-2.5 sm:min-w-[4.25rem]">
      <div
        className={cn(
          "relative flex h-[2.85rem] w-full items-center justify-center overflow-hidden sm:h-[3.35rem]",
          "rounded-[2px] border border-brown-500/12 bg-ivory-50/70",
          "shadow-[inset_0_1px_0_rgb(255_255_255/0.5)]",
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute font-serif text-[clamp(1.85rem,8vw,2.65rem)] font-medium leading-none tracking-wide text-burgundy-500"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-display text-[0.58rem] font-medium tracking-[0.22em] text-brown-500/70 uppercase sm:text-[0.62rem]">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      aria-hidden
      className="mt-2 select-none font-serif text-xl text-gold-500/40 sm:mt-3 sm:text-2xl"
    >
      :
    </span>
  );
}

/**
 * Reusable real-time wedding countdown.
 * Reads target datetime via props (from content/config).
 */
export function CountdownTimer({
  targetISO,
  labels,
  arrivedMessage,
  className,
  card = true,
}: Props) {
  const time = useCountdown(targetISO);

  const body = time.isPast ? (
    <div className="px-2 py-6 text-center">
      <GoldDivider variant="ornament" className="mb-6" max="md" />
      <Typography
        variant="script"
        className="text-[clamp(1.75rem,7vw,2.35rem)] text-burgundy-500"
      >
        {arrivedMessage}
      </Typography>
      <GoldDivider variant="line" className="mt-6" max="sm" />
    </div>
  ) : (
    <div className="px-1">
      <GoldDivider variant="ornament" className="mb-7" max="lg" />
      <div
        className="flex items-start justify-between gap-1 sm:gap-2"
        role="timer"
        aria-live="polite"
        aria-atomic="true"
      >
        <FlipDigit
          value={time.days}
          label={labels.days}
          pad={time.days >= 100 ? 3 : 2}
        />
        <Separator />
        <FlipDigit value={time.hours} label={labels.hours} />
        <Separator />
        <FlipDigit value={time.minutes} label={labels.minutes} />
        <Separator />
        <FlipDigit value={time.seconds} label={labels.seconds} />
      </div>
      <GoldDivider variant="line" className="mt-7" max="sm" />
    </div>
  );

  if (!card) {
    return <div className={cn(className)}>{body}</div>;
  }

  return (
    <VintageCard
      tone="ivory"
      rotate="none"
      padded="md"
      className={cn("mx-auto w-full max-w-sm", className)}
    >
      {body}
    </VintageCard>
  );
}
