"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FloralAccent } from "@/components/decor/FloralAccent";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { useCountdown } from "@/hooks/useCountdown";
import { wedding } from "@/content/wedding";

function Digit({ value, label }: { value: number; label: string }) {
  const reduced = useReducedMotion() ?? false;
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex min-w-[4.25rem] flex-col items-center gap-2 sm:min-w-[4.75rem]">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block font-serif text-[clamp(2.4rem,10vw,3.25rem)] font-medium leading-none text-burgundy-400"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <Typography variant="caption" tone="onDarkMuted" className="text-[0.65rem]">
        {label}
      </Typography>
    </div>
  );
}

export function CountdownSection() {
  const time = useCountdown(wedding.event.dateISO);

  return (
    <Section id="countdown" className="relative overflow-hidden text-center">
      <FloralAccent preset="countdown" />

      <div className="relative z-[1]">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow={wedding.copy.countdownEyebrow}
            title={wedding.copy.countdownTitle}
            subtitle={wedding.copy.countdownSubtitle}
          />
        </Reveal>

        <Reveal variant="blur">
          <div className="mx-auto flex max-w-sm items-start justify-between gap-1 px-1 sm:gap-2">
            <Digit value={time.days} label="GÜN" />
            <span className="mt-2 font-serif text-2xl text-gold-400/50">:</span>
            <Digit value={time.hours} label="SAAT" />
            <span className="mt-2 font-serif text-2xl text-gold-400/50">:</span>
            <Digit value={time.minutes} label="DAKİKA" />
            <span className="mt-2 font-serif text-2xl text-gold-400/50">:</span>
            <Digit value={time.seconds} label="SANİYE" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
