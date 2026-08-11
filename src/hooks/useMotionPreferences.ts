"use client";

import { useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { duration, viewport } from "@/lib/motion";

/**
 * Single source for motion preferences + tuned viewport/duration.
 */
export function useMotionPreferences() {
  const reduced = useReducedMotion() ?? false;

  return useMemo(
    () => ({
      reduced,
      /** Skip enter animations entirely when reduced */
      shouldAnimate: !reduced,
      viewport,
      /** Opening sequence length (ms) for timers */
      openingMs: reduced ? 400 : Math.round(duration.opening * 1000 + 400),
      sectionDuration: reduced ? 0.01 : duration.section,
    }),
    [reduced],
  );
}
