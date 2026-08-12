import type { Variants } from "framer-motion";
import {
  duration,
  ease,
  scale,
} from "@/lib/motion/tokens";

/** Gatefold panels — cinematic hinge, restrained rotate */
export const gateLeft: Variants = {
  sealed: {
    x: "0%",
    rotateY: 0,
    opacity: 1,
  },
  opening: {
    x: "-104%",
    rotateY: -10,
    opacity: 1,
    transition: {
      duration: duration.opening,
      delay: 0.32,
      ease: ease.cinematic,
    },
  },
  open: {
    x: "-112%",
    rotateY: -12,
    opacity: 0,
    transition: { duration: duration.exit, ease: ease.exit },
  },
};

export const gateRight: Variants = {
  sealed: {
    x: "0%",
    rotateY: 0,
    opacity: 1,
  },
  opening: {
    x: "104%",
    rotateY: 10,
    opacity: 1,
    transition: {
      duration: duration.opening,
      delay: 0.32,
      ease: ease.cinematic,
    },
  },
  open: {
    x: "112%",
    rotateY: 12,
    opacity: 0,
    transition: { duration: duration.exit, ease: ease.exit },
  },
};

/** Wax seal — slow pulse idle; elegant dissolve on open (no bounce) */
export const sealVariants: Variants = {
  sealed: {
    scale: 1,
    y: 0,
    opacity: 1,
    filter: "drop-shadow(0 0 0px rgba(192, 140, 70, 0))",
  },
  idle: {
    scale: [1, scale.sealPulse, 1],
    y: 0,
    opacity: 1,
    filter: "drop-shadow(0 0 0px rgba(192, 140, 70, 0))",
    transition: {
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  opening: {
    scale: [1, 0.97, 1.04, 0.5],
    y: [0, 1, -4, -28],
    opacity: [1, 1, 0.95, 0],
    filter: [
      "drop-shadow(0 0 0px rgba(192, 140, 70, 0))",
      "drop-shadow(0 0 10px rgba(196, 167, 106, 0.4))",
      "drop-shadow(0 0 22px rgba(196, 167, 106, 0.55))",
      "drop-shadow(0 0 6px rgba(196, 167, 106, 0))",
    ],
    transition: {
      duration: duration.seal,
      times: [0, 0.2, 0.48, 1],
      ease: ease.cinematic,
    },
  },
};

export const warmGlowVariants: Variants = {
  sealed: { opacity: 0, scale: 0.7 },
  opening: {
    opacity: [0, 0.75, 0.4],
    scale: [0.7, 1.1, 1.35],
    transition: {
      duration: duration.glow,
      delay: 0.22,
      ease: ease.cinematic,
    },
  },
  open: {
    opacity: 0.2,
    scale: 1.4,
    transition: { duration: 0.9 },
  },
};

/** Main invitation content under the gate — opacity only on small screens via CSS; scale kept tiny */
export const contentReveal: Variants = {
  sealed: {
    opacity: 0,
    scale: scale.opening,
  },
  opening: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.content,
      delay: 0.62,
      ease: ease.cinematic,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
  },
};

/** Prefer opacity-only reveal on mobile to avoid transform overflow */
export const contentRevealMobile: Variants = {
  sealed: { opacity: 0 },
  opening: {
    opacity: 1,
    transition: {
      duration: duration.content * 0.85,
      delay: 0.45,
      ease: ease.cinematic,
    },
  },
  open: { opacity: 1 },
};

export const contentRevealReduced: Variants = {
  sealed: { opacity: 0 },
  opening: { opacity: 1, transition: { duration: 0.35 } },
  open: { opacity: 1 },
};

export const gateOverlay: Variants = {
  sealed: { opacity: 1 },
  opening: { opacity: 1 },
  open: {
    opacity: 0,
    transition: { duration: duration.exit, ease: ease.exit },
  },
};
