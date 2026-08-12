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
    <div className="flex min-w-0 flex-1 flex-col items-center gap-1.5 sm:gap-2.5">
      <div
        className={cn(
          "relative flex h-10 w-full max-w-[3.5rem] items-center justify-center overflow-hidden sm:h-[3.35rem] sm:max-w-none",
          "mx-auto rounded-[2px] border border-brown-500/12 bg-ivory-50/70",
          "shadow-[inset_0_1px_0_rgb(255_255_255/0.5)]",
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute font-serif text-[clamp(1.35rem,6.5vw,2.65rem)] font-medium leading-none tracking-wide text-burgundy-500"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="max-w-full truncate px-0.5 text-center font-display text-[0.5rem] font-medium tracking-[0.14em] text-brown-500/70 uppercase sm:text-[0.62rem] sm:tracking-[0.22em]">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      aria-hidden
      className="mt-1.5 shrink-0 select-none font-serif text-base text-gold-500/40 sm:mt-3 sm:text-2xl"
    >
      :
    </span>
  );
}

function TimerSkeleton({ labels }: { labels: CountdownLabels }) {
  const units = [labels.days, labels.hours, labels.minutes, labels.seconds];
  return (
    <div className="px-0.5 sm:px-1">
      <GoldDivider variant="ornament" className="mb-5 sm:mb-7" max="lg" />
      <div
        className="flex w-full items-start justify-between gap-0.5 sm:gap-2"
        role="timer"
        aria-busy="true"
        aria-label="Geri sayım yükleniyor"
      >
        {units.map((label, i) => (
          <div key={label} className="contents">
            {i > 0 ? <Separator /> : null}
            <div className="flex min-w-0 flex-1 flex-col items-center gap-1.5 sm:gap-2.5">
              <div
                className={cn(
                  "relative flex h-10 w-full max-w-[3.5rem] items-center justify-center overflow-hidden sm:h-[3.35rem] sm:max-w-none",
                  "mx-auto rounded-[2px] border border-brown-500/12 bg-ivory-50/70",
                )}
              >
                <span className="font-serif text-[clamp(1.35rem,6.5vw,2.65rem)] font-medium leading-none tracking-wide text-burgundy-500/35">
                  00
                </span>
              </div>
              <span className="max-w-full truncate px-0.5 text-center font-display text-[0.5rem] font-medium tracking-[0.14em] text-brown-500/70 uppercase sm:text-[0.62rem] sm:tracking-[0.22em]">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <GoldDivider variant="line" className="mt-5 sm:mt-7" max="sm" />
    </div>
  );
}

/**
 * Reusable real-time wedding countdown.
 * Renders a stable placeholder until client mount to avoid hydration mismatch.
 */
export function CountdownTimer({
  targetISO,
  labels,
  arrivedMessage,
  className,
  card = true,
}: Props) {
  const time = useCountdown(targetISO);

  const body = !time.ready ? (
    <TimerSkeleton labels={labels} />
  ) : time.isPast ? (
    <div className="px-2 py-6 text-center">
      <GoldDivider variant="ornament" className="mb-6" max="md" />
      <Typography
        variant="script"
        className="text-[clamp(1.5rem,6.5vw,2.35rem)] text-burgundy-500"
      >
        {arrivedMessage}
      </Typography>
      <GoldDivider variant="line" className="mt-6" max="sm" />
    </div>
  ) : (
    <div className="px-0.5 sm:px-1">
      <GoldDivider variant="ornament" className="mb-5 sm:mb-7" max="lg" />
      <div
        className="flex w-full items-start justify-between gap-0.5 sm:gap-2"
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
      <GoldDivider variant="line" className="mt-5 sm:mt-7" max="sm" />
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
      className={cn("mx-auto w-full max-w-sm overflow-hidden", className)}
    >
      {body}
    </VintageCard>
  );
}
