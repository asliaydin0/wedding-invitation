"use client";

import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SvgCornerBouquet, SvgSprig } from "@/components/decor/botanicals/svg";
import { useAudio } from "@/hooks/useAudio";
import { useInvitation } from "@/hooks/useInvitation";
import {
  gateLeft,
  gateRight,
  sealVariants,
  warmGlowVariants,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { WeddingData } from "@/config";

function GatePanel({
  side,
  animate,
  monogram,
}: {
  side: "left" | "right";
  animate: "sealed" | "opening";
  monogram: string;
}) {
  const isLeft = side === "left";

  return (
    <motion.div
      className={cn(
        "absolute top-0 z-20 h-full w-1/2 overflow-hidden will-change-transform",
        isLeft ? "left-0 origin-left" : "right-0 origin-right",
      )}
      variants={isLeft ? gateLeft : gateRight}
      initial="sealed"
      animate={animate}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={cn(
          "relative h-full w-full bg-paper",
          isLeft
            ? "border-r border-gold-500/30 shadow-[8px_0_32px_rgb(21_17_14/0.24),inset_0_0_60px_rgb(86_74_60/0.08)]"
            : "border-l border-gold-500/30 shadow-[-8px_0_32px_rgb(21_17_14/0.24),inset_0_0_60px_rgb(86_74_60/0.08)]",
        )}
      >
        {/* Warm paper wash + gentle light */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: isLeft
              ? "linear-gradient(105deg, rgb(255 255 255 / 0.42), transparent 48%), radial-gradient(ellipse at 18% 28%, rgb(255 255 255 / 0.5), transparent 52%), radial-gradient(ellipse at 70% 85%, rgb(176 143 82 / 0.1), transparent 45%)"
              : "linear-gradient(255deg, rgb(255 255 255 / 0.42), transparent 48%), radial-gradient(ellipse at 82% 22%, rgb(255 255 255 / 0.48), transparent 52%), radial-gradient(ellipse at 30% 80%, rgb(176 143 82 / 0.11), transparent 45%)",
          }}
        />
        <div aria-hidden className="texture-grain absolute inset-0 opacity-[1.15]" />
        <div aria-hidden className="texture-grain-light absolute inset-0 opacity-80" />

        {/* Antique double gold frame */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-[0.65rem] border border-gold-500/40 sm:inset-4",
            isLeft ? "border-r-gold-500/18" : "border-l-gold-500/18",
          )}
        />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-[0.95rem] border border-gold-400/18 sm:inset-[1.35rem]",
            isLeft ? "border-r-transparent" : "border-l-transparent",
          )}
        />

        {/* Soft monogram — stationery identity */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-[42%] z-[1] -translate-y-1/2 font-script text-[clamp(2.75rem,9vw,4.25rem)] leading-none text-burgundy-600/[0.07]",
            isLeft ? "right-[12%]" : "left-[12%]",
          )}
        >
          {isLeft ? monogram.charAt(0) : monogram.slice(-1)}
        </div>

        {/* Botanical layering */}
        {isLeft ? (
          <>
            <SvgCornerBouquet
              tone="embossed"
              className="absolute bottom-2 left-0 z-[2] h-44 w-32 opacity-[0.92] sm:bottom-8 sm:left-1 sm:h-64 sm:w-48"
            />
            <SvgSprig
              tone="embossed"
              flip
              className="absolute right-2 top-9 z-[2] h-20 w-12 rotate-[-14deg] opacity-40 sm:right-5 sm:top-12 sm:h-28 sm:w-16 sm:opacity-50"
            />
            <SvgSprig
              tone="gold"
              className="absolute bottom-[38%] left-1 z-[1] h-14 w-9 rotate-[-28deg] opacity-25 sm:left-3 sm:h-16 sm:w-10"
            />
          </>
        ) : (
          <>
            <SvgCornerBouquet
              tone="embossed"
              flip
              className="absolute right-0 top-2 z-[2] h-44 w-32 opacity-[0.92] sm:right-1 sm:top-8 sm:h-64 sm:w-48"
            />
            <SvgSprig
              tone="embossed"
              className="absolute bottom-9 left-2 z-[2] h-20 w-12 rotate-[14deg] opacity-40 sm:bottom-12 sm:left-5 sm:h-28 sm:w-16 sm:opacity-50"
            />
            <SvgSprig
              tone="gold"
              flip
              className="absolute right-1 top-[38%] z-[1] h-14 w-9 rotate-[28deg] opacity-25 sm:right-3 sm:h-16 sm:w-10"
            />
          </>
        )}

        {/* Fold spine shade */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 w-10 sm:w-12",
            isLeft
              ? "right-0 bg-gradient-to-l from-espresso-950/18 via-espresso-950/6 to-transparent"
              : "left-0 bg-gradient-to-r from-espresso-950/18 via-espresso-950/6 to-transparent",
          )}
        />
      </div>
    </motion.div>
  );
}

function SealButton({
  phase,
  onOpen,
  reduced,
  sealHint,
  initials,
}: {
  phase: "sealed" | "opening";
  onOpen: () => void;
  reduced: boolean;
  sealHint: string;
  initials: string;
}) {
  const interactive = phase === "sealed";
  const sealAnimate =
    phase === "opening" ? "opening" : reduced ? "sealed" : "idle";

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2"
      variants={sealVariants}
      initial="sealed"
      animate={sealAnimate}
    >
      {/* Soft gold halo */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,167,106,0.5)_0%,transparent_68%)] blur-md sm:size-36"
        initial={{ opacity: 0.22, scale: 1 }}
        animate={
          phase === "opening"
            ? { opacity: [0.25, 0.85, 0.28], scale: [1, 1.3, 1.55] }
            : reduced
              ? { opacity: 0.22, scale: 1 }
              : { opacity: [0.18, 0.32, 0.18], scale: [1, 1.05, 1] }
        }
        transition={
          phase === "opening"
            ? { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
            : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <button
        type="button"
        disabled={!interactive}
        onClick={onOpen}
        aria-label={sealHint}
        className={cn(
          "group relative flex touch-target size-[5rem] items-center justify-center rounded-full outline-none sm:size-[6.25rem]",
          "bg-burgundy-600 text-ivory-50 shadow-seal",
          "ring-1 ring-gold-400/35 ring-offset-2 ring-offset-ivory-100/40",
          "focus-visible:ring-2 focus-visible:ring-gold-400/80",
          interactive ? "cursor-pointer" : "pointer-events-none",
        )}
      >
        {/* Wax depth */}
        <span
          aria-hidden
          className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle_at_30%_24%,rgb(154_51_72/0.98),transparent_52%),radial-gradient(circle_at_72%_82%,rgb(66_17_28/0.92),transparent_48%)]"
        />
        {/* Antique gold rim */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[3px] rounded-full border border-gold-300/35"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[7px] rounded-full border border-gold-500/20"
        />
        {/* Specular highlight */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-50 mix-blend-soft-light transition duration-500 group-hover:opacity-65"
          style={{
            background:
              "linear-gradient(140deg, rgb(255 255 255 / 0.42) 0%, transparent 40%, rgb(0 0 0 / 0.25) 100%)",
          }}
        />

        <span className="relative z-10 flex flex-col items-center">
          <span className="font-script text-[1.35rem] leading-none tracking-wide text-ivory-50/95 sm:text-[1.65rem]">
            {initials}
          </span>
          <svg
            aria-hidden
            viewBox="0 0 48 12"
            className="mt-1 w-8 text-gold-300/70 sm:w-9"
            fill="none"
          >
            <path
              d="M2 6c6-4 12-4 22 0s16 4 22 0"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
    </motion.div>
  );
}

/**
 * Full-screen gatefold invitation cover —
 * first 3–5s should read as physical stationery, not a webpage.
 */
export const SealGate = forwardRef<
  HTMLDivElement,
  { data: WeddingData["opening"] }
>(function SealGate({ data }, ref) {
  const { phase, openInvitation } = useInvitation();
  const { unlockAndPlay } = useAudio();
  const reduced = useReducedMotion() ?? false;

  const panelPhase: "sealed" | "opening" =
    phase === "sealed" ? "sealed" : "opening";

  const initials = `${data.brideName.charAt(0)}&${data.groomName.charAt(0)}`;
  const monogram = `${data.brideName.charAt(0)}${data.groomName.charAt(0)}`;

  const handleOpen = () => {
    if (phase !== "sealed") return;
    unlockAndPlay();
    openInvitation();
  };

  return (
    <motion.div
      ref={ref}
      id="seal-gate"
      role="dialog"
      aria-modal="true"
      aria-label="Düğün davetiyesi"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-espresso-950"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      exit={{
        opacity: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Room atmosphere — deep, warm, candlelit */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 50% 42%, rgb(86 74 60 / 0.55), transparent 58%),
            radial-gradient(ellipse at 20% 80%, rgb(122 31 51 / 0.12), transparent 40%),
            radial-gradient(ellipse at 80% 18%, rgb(196 167 106 / 0.1), transparent 35%),
            linear-gradient(180deg, rgb(21 17 14 / 0.2), rgb(21 17 14 / 0.65))
          `,
        }}
      />
      <div aria-hidden className="texture-grain absolute inset-0 opacity-[0.55]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(21_17_14/0.55)_100%)]"
      />

      {/* Soft invitation glow behind the fold */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 size-[min(90vw,30rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,247,242,0.5)_0%,rgba(196,167,106,0.26)_38%,transparent_70%)] blur-2xl sm:size-[min(92vw,34rem)]"
        variants={warmGlowVariants}
        initial="sealed"
        animate={panelPhase}
      />

      <motion.div
        className="relative z-20 h-screen-mobile w-full"
        style={{ perspective: reduced ? undefined : "1280px" }}
        initial={reduced ? false : { scale: 0.985, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {reduced ? (
            <motion.div
              className="absolute inset-0 z-20 bg-paper"
              initial={{ opacity: 1 }}
              animate={{ opacity: panelPhase === "opening" ? 0 : 1 }}
              transition={{ duration: 0.35 }}
            >
              <div aria-hidden className="texture-grain absolute inset-0" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-4 border border-gold-400/30 sm:inset-6"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-5 border border-gold-500/15 sm:inset-7"
              />
            </motion.div>
          ) : (
            <>
              <GatePanel
                side="left"
                animate={panelPhase}
                monogram={monogram}
              />
              <GatePanel
                side="right"
                animate={panelPhase}
                monogram={monogram}
              />
            </>
          )}

          <SealButton
            phase={panelPhase}
            onOpen={handleOpen}
            reduced={reduced}
            sealHint={data.sealHint}
            initials={initials}
          />
        </div>
      </motion.div>

      {phase === "sealed" ? (
        <motion.div
          className="pointer-events-none absolute left-1/2 z-40 flex w-full max-w-sm -translate-x-1/2 flex-col items-center px-5"
          style={{
            bottom: "max(2rem, calc(var(--safe-bottom) + 1.5rem))",
          }}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            aria-hidden
            className="mb-4 h-px w-16 bg-gradient-to-r from-transparent via-gold-400/55 to-transparent"
          />
          <p className="text-center font-serif text-[0.68rem] tracking-[0.22em] text-ivory-100/80 uppercase sm:text-xs sm:tracking-[0.24em]">
            {data.sealHint}
          </p>
        </motion.div>
      ) : null}
    </motion.div>
  );
});
