import type { Transition, Variants } from "framer-motion";
import {
  duration,
  ease,
  rise,
  scale,
  sectionTransition,
  soft,
  stagger,
} from "@/lib/motion/tokens";

export type RevealVariantName =
  | "fade"
  | "fadeUp"
  | "fadeIn"
  | "scale"
  | "blur"
  | "clip"
  | "clipUp";

export type RevealIntensity = "subtle" | "section" | "emphasis";

/** Legacy aliases kept for call sites */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...soft, duration: duration.sectionSoft },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: rise.section },
  visible: {
    opacity: 1,
    y: 0,
    transition: sectionTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: scale.section },
  visible: {
    opacity: 1,
    scale: 1,
    transition: sectionTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.section,
      delayChildren: stagger.delayChildren,
    },
  },
};

export const staggerGallery: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.gallery,
      delayChildren: 0.04,
    },
  },
};

/** Build intensity-tuned transition */
function intensityTransition(
  intensity: RevealIntensity,
  baseDuration: number,
): Transition {
  const d =
    intensity === "subtle"
      ? Math.min(baseDuration, duration.sectionSoft)
      : intensity === "emphasis"
        ? baseDuration + 0.12
        : baseDuration;

  return {
    duration: d,
    ease: ease.cinematic,
  };
}

function intensityRise(intensity: RevealIntensity): number {
  if (intensity === "subtle") return rise.sectionSoft;
  if (intensity === "emphasis") return rise.section + 4;
  return rise.section;
}

function intensityScale(intensity: RevealIntensity): number {
  if (intensity === "subtle") return 0.992;
  if (intensity === "emphasis") return 0.975;
  return scale.section;
}

/**
 * Factory for scroll-reveal variants — transform/opacity first.
 * Blur & clip used sparingly (costlier).
 */
export function createRevealVariants(
  name: RevealVariantName,
  intensity: RevealIntensity = "section",
): Variants {
  const t = intensityTransition(intensity, duration.section);
  const y = intensityRise(intensity);
  const s = intensityScale(intensity);

  switch (name) {
    case "fade":
    case "fadeIn":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: t },
      };
    case "fadeUp":
      return {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: t },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: s },
        visible: { opacity: 1, scale: 1, transition: t },
      };
    case "blur":
      return {
        hidden: {
          opacity: 0,
          y: y * 0.65,
          filter: intensity === "subtle" ? "blur(4px)" : "blur(6px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { ...t, duration: t.duration! + 0.08 },
        },
      };
    case "clip":
      return {
        hidden: {
          opacity: 0.2,
          clipPath: "inset(8% 8% 8% 8%)",
        },
        visible: {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { ...t, duration: duration.section + 0.1 },
        },
      };
    case "clipUp":
      return {
        hidden: {
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        visible: {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { ...t, duration: duration.section + 0.15 },
        },
      };
    default:
      return fadeUp;
  }
}

/** Static presets (section intensity) — for direct imports */
export const revealFade = createRevealVariants("fade");
export const revealFadeUp = createRevealVariants("fadeUp");
export const revealFadeScale = createRevealVariants("scale");
export const revealBlur = createRevealVariants("blur");
export const revealClip = createRevealVariants("clip");
export const revealClipUp = createRevealVariants("clipUp");

export const revealStagger = staggerContainer;

/** Child item for stagger parents */
export const revealItemFadeUp: Variants = createRevealVariants("fadeUp", "subtle");
export const revealItemScale: Variants = createRevealVariants("scale", "subtle");
