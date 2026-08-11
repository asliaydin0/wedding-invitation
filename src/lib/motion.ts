import type { Transition, Variants } from "framer-motion";

/** Shared cinematic easing — soft, intentional, never snappy */
export const cinematic: Transition = {
  duration: 1.15,
  ease: [0.22, 1, 0.36, 1],
};

export const soft: Transition = {
  duration: 0.75,
  ease: [0.33, 1, 0.68, 1],
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: soft,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...soft, duration: 0.9 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: cinematic,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/** Gatefold panels — slide + gentle perspective hinge */
export const gateLeft: Variants = {
  sealed: {
    x: "0%",
    rotateY: 0,
    opacity: 1,
  },
  opening: {
    x: "-102%",
    rotateY: -18,
    opacity: 1,
    transition: {
      duration: 1.25,
      delay: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    x: "-110%",
    rotateY: -22,
    opacity: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const gateRight: Variants = {
  sealed: {
    x: "0%",
    rotateY: 0,
    opacity: 1,
  },
  opening: {
    x: "102%",
    rotateY: 18,
    opacity: 1,
    transition: {
      duration: 1.25,
      delay: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    x: "110%",
    rotateY: 22,
    opacity: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const sealVariants: Variants = {
  sealed: {
    scale: 1,
    y: 0,
    opacity: 1,
    filter: "drop-shadow(0 0 0px rgba(192, 140, 70, 0))",
  },
  idle: {
    scale: [1, 1.035, 1],
    y: 0,
    opacity: 1,
    filter: "drop-shadow(0 0 0px rgba(192, 140, 70, 0))",
    transition: {
      duration: 2.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  opening: {
    scale: [1, 0.92, 1.12, 0.55],
    y: [0, 2, -6, -20],
    opacity: [1, 1, 1, 0],
    filter: [
      "drop-shadow(0 0 0px rgba(192, 140, 70, 0))",
      "drop-shadow(0 0 12px rgba(196, 167, 106, 0.55))",
      "drop-shadow(0 0 28px rgba(196, 167, 106, 0.75))",
      "drop-shadow(0 0 8px rgba(196, 167, 106, 0))",
    ],
    transition: {
      duration: 0.85,
      times: [0, 0.22, 0.45, 1],
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const warmGlowVariants: Variants = {
  sealed: { opacity: 0, scale: 0.6 },
  opening: {
    opacity: [0, 0.85, 0.55],
    scale: [0.6, 1.15, 1.4],
    transition: {
      duration: 1.4,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    opacity: 0.25,
    scale: 1.5,
    transition: { duration: 0.8 },
  },
};

export const contentReveal: Variants = {
  sealed: { opacity: 0, scale: 0.96 },
  opening: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      delay: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    opacity: 1,
    scale: 1,
  },
};

export const gateOverlay: Variants = {
  sealed: { opacity: 1 },
  opening: { opacity: 1 },
  open: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeOut" },
    pointerEvents: "none" as unknown as undefined,
  },
};

/** Hero — restrained stagger after invitation opens */
export const heroRoot: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.12,
    },
  },
};

export const heroBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroFloral: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Names: soft rise + fade — elegant, not dramatic */
export const heroName: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroAmpersand: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
};

export const heroMeta: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.33, 1, 0.68, 1] },
  },
};

export const heroScrollHint: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.35, ease: [0.33, 1, 0.68, 1] },
  },
};
