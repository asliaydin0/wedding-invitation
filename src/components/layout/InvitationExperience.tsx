"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SealGate } from "@/components/sections/SealGate";
import { MusicControl } from "@/components/ui/MusicControl";
import { useFineFloralMotion } from "@/hooks/useFineFloralMotion";
import { useInvitation } from "@/hooks/useInvitation";
import { useScrollLock } from "@/hooks/useScrollLock";
import {
  contentReveal,
  contentRevealMobile,
  contentRevealReduced,
} from "@/lib/motion";
import { wedding } from "@/content/wedding";

type Props = {
  children: React.ReactNode;
};

/**
 * Orchestrates opening experience:
 * - locks scroll until invitation is open
 * - mounts SealGate while sealed/opening
 * - reveals main content (scale only on desktop; opacity on mobile)
 * - MusicControl sits at root (outside transforms) so fixed positioning works
 */
export function InvitationExperience({ children }: Props) {
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
      <AnimatePresence>{!isOpen ? <SealGate key="seal-gate" /> : null}</AnimatePresence>

      {wedding.audio.enabled ? <MusicControl /> : null}

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
        {children}
      </motion.div>
    </>
  );
}
