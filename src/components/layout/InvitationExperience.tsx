"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SealGate } from "@/components/sections/SealGate";
import { MusicControl } from "@/components/ui/MusicControl";
import { useFineFloralMotion } from "@/hooks/useFineFloralMotion";
import { useInvitation } from "@/hooks/useInvitation";
import { useScrollLock } from "@/hooks/useScrollLock";
import type { WeddingData } from "@/config";
import {
  contentReveal,
  contentRevealMobile,
  contentRevealReduced,
} from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  data: WeddingData;
};

/**
 * Orchestrates opening experience from config-driven `data`.
 * Music control only after open — never above the seal dialog.
 */
export function InvitationExperience({ children, data }: Props) {
  const { phase, isOpen, isSealed, isOpening } = useInvitation();
  const reduced = useReducedMotion() ?? false;
  const desktopMotion = useFineFloralMotion();

  useScrollLock(isSealed || isOpening);

  const contentState =
    phase === "sealed" ? "sealed" : phase === "opening" ? "opening" : "open";

  const variants = reduced
    ? contentRevealReduced
    : desktopMotion
      ? contentReveal
      : contentRevealMobile;

  return (
    <>
      <AnimatePresence>
        {!isOpen ? <SealGate key="seal-gate" data={data.opening} /> : null}
      </AnimatePresence>

      {data.music.enabled && isOpen ? <MusicControl /> : null}

      <motion.div
        variants={variants}
        initial="sealed"
        animate={contentState}
        className="min-h-screen-mobile overflow-x-clip will-change-[opacity,transform]"
        style={{
          pointerEvents: phase === "sealed" ? "none" : "auto",
        }}
        aria-hidden={phase === "sealed"}
      >
        {/* Defer heavy tree until opening starts — fewer sealed-phase timers */}
        {phase !== "sealed" ? children : null}
      </motion.div>
    </>
  );
}
