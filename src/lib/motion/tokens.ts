import type { Transition } from "framer-motion";

/**
 * Motion design tokens — elegant · slow · cinematic · subtle · premium
 * Prefer transform + opacity only for 60fps.
 */

export const ease = {
  /** Primary invitation curve */
  cinematic: [0.22, 1, 0.36, 1] as const,
  /** Softer settle for meta / secondary */
  soft: [0.33, 1, 0.68, 1] as const,
  /** Gentle exit */
  exit: [0.4, 0, 0.2, 1] as const,
};

export const duration = {
  /** Seal gatefold — strongest beat */
  opening: 1.65,
  seal: 1.1,
  glow: 1.55,
  content: 1.35,
  /** Post-open hero */
  hero: 1.15,
  /** In-page scroll reveals (quieter than opening) */
  section: 0.9,
  sectionSoft: 0.75,
  micro: 0.45,
  exit: 0.5,
} as const;

/** Vertical travel in px — keep section motion smaller than opening/hero */
export const rise = {
  opening: 0,
  hero: 16,
  section: 12,
  sectionSoft: 8,
  micro: 4,
} as const;

export const scale = {
  /** Avoid flashy zoom — max ~4% on sections */
  section: 0.985,
  hero: 0.97,
  opening: 0.96,
  sealPulse: 1.02,
} as const;

export const stagger = {
  hero: 0.2,
  section: 0.08,
  gallery: 0.05,
  delayChildren: 0.06,
} as const;

export const viewport = {
  once: true as const,
  amount: 0.18 as const,
  margin: "0px 0px -8% 0px" as `${number}px ${number}px ${number}% ${number}px`,
};

/** Shared transitions */
export const cinematic: Transition = {
  duration: duration.hero,
  ease: ease.cinematic,
};

export const soft: Transition = {
  duration: duration.section,
  ease: ease.soft,
};

export const sectionTransition: Transition = {
  duration: duration.section,
  ease: ease.cinematic,
};

export const openingTransition: Transition = {
  duration: duration.opening,
  ease: ease.cinematic,
};
