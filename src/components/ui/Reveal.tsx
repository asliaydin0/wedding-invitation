"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  revealBlur,
  revealFade,
  revealFadeScale,
  revealFadeUp,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

const presets = {
  fade: revealFade,
  fadeUp: revealFadeUp,
  scale: revealFadeScale,
  blur: revealBlur,
} as const;

type RevealPreset = keyof typeof presets;

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealPreset;
  delay?: number;
};

/** Once-per-scroll elegant reveal — skips motion when reduced-motion is on */
export function Reveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.22,
    margin: "0px 0px -6% 0px",
  });
  const reduced = useReducedMotion() ?? false;

  const base = presets[variant];
  const visibleBase =
    typeof base.visible === "object" && base.visible !== null
      ? base.visible
      : {};
  const transition =
    typeof visibleBase === "object" &&
    visibleBase !== null &&
    "transition" in visibleBase
      ? visibleBase.transition
      : {};

  const variants: Variants = {
    hidden: base.hidden,
    visible: {
      ...visibleBase,
      transition: {
        ...(typeof transition === "object" ? transition : {}),
        delay,
      },
    },
  };

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
