"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SealGate } from "@/components/sections/SealGate";
import { MusicControl } from "@/components/ui/MusicControl";
import { useInvitation } from "@/hooks/useInvitation";
import { useScrollLock } from "@/hooks/useScrollLock";
import { contentReveal } from "@/lib/motion";
import { wedding } from "@/content/wedding";

type Props = {
  children: React.ReactNode;
};

/**
 * Orchestrates opening experience:
 * - locks scroll until invitation is open
 * - mounts SealGate while sealed/opening
 * - reveals main content with fade + scale
 * - MusicControl sits at root (outside transforms) so fixed positioning works
 */
export function InvitationExperience({ children }: Props) {
  const { phase, isOpen, isSealed, isOpening } = useInvitation();
  const reduced = useReducedMotion() ?? false;

  useScrollLock(isSealed || isOpening);

  const contentState =
    phase === "sealed" ? "sealed" : phase === "opening" ? "opening" : "open";

  return (
    <>
      <AnimatePresence>{!isOpen ? <SealGate key="seal-gate" /> : null}</AnimatePresence>

      {/* Outside motion/transform ancestors — true viewport-fixed */}
      {wedding.audio.enabled ? <MusicControl /> : null}

      <motion.div
        variants={
          reduced
            ? {
                sealed: { opacity: 0 },
                opening: { opacity: 1, transition: { duration: 0.35 } },
                open: { opacity: 1 },
              }
            : contentReveal
        }
        initial="sealed"
        animate={contentState}
        className="min-h-dvh"
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
