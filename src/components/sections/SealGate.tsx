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
import { wedding } from "@/content/wedding";

function GatePanel({
  side,
  animate,
}: {
  side: "left" | "right";
  animate: "sealed" | "opening";
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
          "relative h-full w-full bg-paper shadow-lift",
          isLeft ? "border-r border-gold-400/25" : "border-l border-gold-400/25",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: isLeft
              ? "linear-gradient(90deg, rgb(250 247 242 / 0.35), transparent 55%), radial-gradient(ellipse at 20% 30%, rgb(255 255 255 / 0.4), transparent 50%)"
              : "linear-gradient(270deg, rgb(250 247 242 / 0.35), transparent 55%), radial-gradient(ellipse at 80% 70%, rgb(196 167 106 / 0.12), transparent 50%)",
          }}
        />
        <div aria-hidden className="texture-grain absolute inset-0" />

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-3 border border-gold-400/30 sm:inset-4",
            isLeft ? "border-r-gold-400/15" : "border-l-gold-400/15",
          )}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-4 border border-gold-400/12 sm:inset-5"
        />

        {isLeft ? (
          <>
            <SvgCornerBouquet
              tone="embossed"
              className="absolute bottom-4 left-0 h-52 w-40 opacity-90 sm:bottom-8 sm:left-2 sm:h-64 sm:w-48"
            />
            <SvgSprig
              tone="embossed"
              flip
              className="absolute right-2 top-10 h-28 w-16 rotate-[-12deg] opacity-50 sm:right-4"
            />
          </>
        ) : (
          <>
            <SvgCornerBouquet
              tone="embossed"
              flip
              className="absolute right-0 top-4 h-52 w-40 opacity-90 sm:right-2 sm:top-8 sm:h-64 sm:w-48"
            />
            <SvgSprig
              tone="embossed"
              className="absolute bottom-10 left-2 h-28 w-16 rotate-12 opacity-50 sm:left-4"
            />
          </>
        )}

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 w-8",
            isLeft
              ? "right-0 bg-gradient-to-l from-espresso-950/15 to-transparent"
              : "left-0 bg-gradient-to-r from-espresso-950/15 to-transparent",
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
}: {
  phase: "sealed" | "opening";
  onOpen: () => void;
  reduced: boolean;
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
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,167,106,0.55)_0%,transparent_68%)] blur-md sm:size-32"
        initial={{ opacity: 0.2, scale: 1 }}
        animate={
          phase === "opening"
            ? { opacity: [0.22, 0.8, 0.25], scale: [1, 1.28, 1.5] }
            : reduced
              ? { opacity: 0.22, scale: 1 }
              : { opacity: [0.16, 0.28, 0.16], scale: [1, 1.04, 1] }
        }
        transition={
          phase === "opening"
            ? { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
            : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <button
        type="button"
        disabled={!interactive}
        onClick={onOpen}
        aria-label={wedding.copy.sealHint}
        className={cn(
          "group relative flex size-[4.75rem] items-center justify-center rounded-full bg-burgundy-600 text-ivory-50 shadow-seal outline-none sm:size-24",
          "focus-visible:ring-2 focus-visible:ring-gold-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-100",
          interactive ? "cursor-pointer" : "pointer-events-none",
        )}
      >
        <span
          aria-hidden
          className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgb(154_51_72/0.95),transparent_55%),radial-gradient(circle_at_70%_80%,rgb(66_17_28/0.9),transparent_50%)]"
        />
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-45 mix-blend-soft-light transition duration-500 group-hover:opacity-60"
          style={{
            background:
              "linear-gradient(135deg, rgb(255 255 255 / 0.38) 0%, transparent 42%, rgb(0 0 0 / 0.22) 100%)",
          }}
        />
        <svg
          aria-hidden
          viewBox="0 0 64 64"
          className="relative z-10 size-[55%] text-ivory-100/90"
          fill="none"
        >
          <path
            d="M32 14c1.5 6 3 11 3 16s-1 9-3 14c-2-5-3-9-3-14s1.5-10 3-16Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M24 28c4 1.5 8 2 12 2s8-.5 12-2"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M26 36c3 .8 6 1.2 6 1.2s3-.4 6-1.2"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="32" cy="24" r="1.4" fill="currentColor" opacity="0.75" />
        </svg>
      </button>
    </motion.div>
  );
}

/**
 * Full-screen gatefold invitation cover.
 * AnimatePresence-compatible via forwarded ref.
 */
export const SealGate = forwardRef<HTMLDivElement>(function SealGate(_, ref) {
  const { phase, openInvitation } = useInvitation();
  const { unlockAndPlay } = useAudio();
  const reduced = useReducedMotion() ?? false;

  const panelPhase: "sealed" | "opening" =
    phase === "sealed" ? "sealed" : "opening";

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
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgb(86_74_60/0.45),transparent_65%)]"
      />
      <div aria-hidden className="texture-grain absolute inset-0 opacity-[0.6]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 size-[min(92vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,247,242,0.55)_0%,rgba(196,167,106,0.28)_35%,transparent_70%)] blur-2xl"
        variants={warmGlowVariants}
        initial="sealed"
        animate={panelPhase}
      />

      <div
        className="relative z-20 h-dvh w-full"
        style={{ perspective: reduced ? undefined : "1200px" }}
      >
        <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
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
                className="pointer-events-none absolute inset-4 border border-gold-400/25 sm:inset-6"
              />
            </motion.div>
          ) : (
            <>
              <GatePanel side="left" animate={panelPhase} />
              <GatePanel side="right" animate={panelPhase} />
            </>
          )}

          <SealButton phase={panelPhase} onOpen={handleOpen} reduced={reduced} />
        </div>
      </div>

      {phase === "sealed" ? (
        <motion.p
          className="pointer-events-none absolute bottom-10 left-1/2 z-40 w-full max-w-xs -translate-x-1/2 px-6 text-center font-serif text-xs tracking-[0.22em] text-ivory-100/55 uppercase"
          initial={reduced ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {wedding.copy.sealHint}
        </motion.p>
      ) : null}
    </motion.div>
  );
});
