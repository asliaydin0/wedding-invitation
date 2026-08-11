import type { Variants } from "framer-motion";
import { duration, ease, rise, scale, stagger } from "@/lib/motion/tokens";

export const heroRoot: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.hero,
      delayChildren: 0.18,
    },
  },
};

export const heroBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.hero + 0.15, ease: ease.cinematic },
  },
};

export const heroFloral: Variants = {
  hidden: { opacity: 0, scale: scale.hero },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.hero, ease: ease.cinematic },
  },
};

export const heroName: Variants = {
  hidden: { opacity: 0, y: rise.hero },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.hero, ease: ease.cinematic },
  },
};

export const heroAmpersand: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: ease.soft },
  },
};

export const heroMeta: Variants = {
  hidden: { opacity: 0, y: rise.sectionSoft },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: ease.soft },
  },
};

export const heroScrollHint: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, delay: 0.4, ease: ease.soft },
  },
};
