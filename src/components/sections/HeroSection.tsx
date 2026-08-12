"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FloralAccent } from "@/components/decor/FloralAccent";
import { GrainOverlay } from "@/components/decor/GrainOverlay";
import { Vignette } from "@/components/decor/Vignette";
import { Divider } from "@/components/ui/Divider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Typography } from "@/components/ui/Typography";
import { useInvitation } from "@/hooks/useInvitation";
import {
  heroAmpersand,
  heroBackdrop,
  heroMeta,
  heroName,
  heroRoot,
  heroScrollHint,
} from "@/lib/motion";
import { wedding } from "@/content/wedding";
import { cn } from "@/lib/utils";

/**
 * Full-viewport hero — revealed after invitation opens.
 * Mobile-first: safe areas, fluid names, no overflow.
 */
export function HeroSection() {
  const { isOpen } = useInvitation();
  const reduced = useReducedMotion() ?? false;
  const show = isOpen;

  return (
    <section
      id="hero"
      aria-label="Karşılama"
      className="relative flex min-h-screen-mobile flex-col overflow-x-clip overflow-y-hidden"
    >
      <motion.div
        className="absolute inset-0 will-change-[opacity]"
        variants={reduced ? undefined : heroBackdrop}
        initial={reduced ? false : "hidden"}
        animate={show ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 bg-atmosphere" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 50% 28%, rgb(110 90 70 / 0.38), transparent 55%),
              radial-gradient(ellipse at 20% 80%, rgb(122 31 51 / 0.12), transparent 45%),
              radial-gradient(ellipse at 80% 15%, rgb(196 167 106 / 0.1), transparent 40%),
              linear-gradient(180deg, rgb(44 36 28 / 0.2), transparent 35%, rgb(21 17 14 / 0.55) 100%)
            `,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[55%] opacity-40"
          style={{
            background:
              "linear-gradient(180deg, rgb(250 247 242 / 0.08), transparent)",
          }}
        />
        <GrainOverlay />
        <Vignette intensity="medium" />
      </motion.div>

      <motion.div
        className="relative z-10 flex min-h-screen-mobile flex-1 flex-col will-change-[opacity,transform]"
        variants={reduced ? undefined : heroRoot}
        initial={reduced ? false : "hidden"}
        animate={show ? "visible" : "hidden"}
      >
        {show ? <FloralAccent preset="hero" className="z-0" /> : null}

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 size-[min(78vw,20rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,247,242,0.14)_0%,transparent_70%)] blur-2xl sm:size-[min(88vw,22rem)]"
        />

        <div
          className={cn(
            "relative z-20 flex flex-1 flex-col items-center justify-center text-center",
            "px-5 sm:px-10",
            "pt-[max(3.5rem,calc(var(--safe-top)+2.5rem))]",
            "pb-[max(5.5rem,calc(var(--safe-bottom)+5rem))]",
          )}
        >
          <motion.div variants={reduced ? undefined : heroMeta}>
            <Typography variant="eyebrow" tone="gold" className="mb-6 sm:mb-10">
              {wedding.copy.heroEyebrow}
            </Typography>
          </motion.div>

          <h1 className="flex w-full max-w-[min(100%,18.5rem)] flex-col items-center px-2 sm:max-w-md">
            <motion.span
              variants={reduced ? undefined : heroName}
              className={cn(
                "font-script block w-full max-w-full break-words text-burgundy-400",
                "text-[clamp(2.35rem,11.5vw,4.5rem)] leading-[1.08] tracking-wide",
                "drop-shadow-[0_1px_12px_rgb(21_17_14/0.45)]",
              )}
            >
              {wedding.couple.partnerOne}
            </motion.span>

            <motion.span
              variants={reduced ? undefined : heroAmpersand}
              className="my-1.5 font-serif text-sm tracking-[0.35em] text-gold-400/85 sm:my-2.5 sm:text-base"
            >
              &
            </motion.span>

            <motion.span
              variants={reduced ? undefined : heroName}
              className={cn(
                "font-script block w-full max-w-full break-words text-burgundy-400",
                "text-[clamp(2.35rem,11.5vw,4.5rem)] leading-[1.08] tracking-wide",
                "drop-shadow-[0_1px_12px_rgb(21_17_14/0.45)]",
              )}
            >
              {wedding.couple.partnerTwo}
            </motion.span>
          </h1>

          <motion.div
            variants={reduced ? undefined : heroMeta}
            className="mt-7 flex w-full max-w-xs flex-col items-center sm:mt-10"
          >
            <Divider className="mb-5 sm:mb-6" />
            <Typography
              variant="caption"
              tone="onDarkMuted"
              className="px-2 text-ivory-100/70"
            >
              {wedding.event.dateLabel}
            </Typography>
          </motion.div>

          <motion.p
            variants={reduced ? undefined : heroMeta}
            className="mt-6 max-w-[16.5rem] px-1 font-serif text-[0.9rem] leading-relaxed text-ivory-100/65 italic sm:mt-8 sm:max-w-sm sm:text-base"
          >
            “{wedding.copy.heroBody}”
          </motion.p>
        </div>

        <motion.div
          variants={reduced ? undefined : heroScrollHint}
          className="absolute inset-x-0 z-20 flex justify-center safe-inset-bottom sm:bottom-9"
          style={{
            bottom: "max(1.5rem, calc(var(--safe-bottom) + 1.25rem))",
          }}
        >
          {show ? <ScrollIndicator href="#story" /> : null}
        </motion.div>
      </motion.div>
    </section>
  );
}
