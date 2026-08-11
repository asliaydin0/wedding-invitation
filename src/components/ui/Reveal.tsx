"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, type ReactNode } from "react";
import { useMotionPreferences } from "@/hooks/useMotionPreferences";
import {
  createRevealVariants,
  staggerContainer,
  staggerGallery,
  type RevealIntensity,
  type RevealVariantName,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariantName;
  /** subtle = quieter section motion; emphasis = slightly stronger (still restrained) */
  intensity?: RevealIntensity;
  delay?: number;
  /** Override once/amount if needed */
  amount?: number;
};

/**
 * Once-per-scroll elegant reveal.
 * Transform + opacity first; blur/clip only when chosen.
 */
export function Reveal({
  children,
  className,
  variant = "fadeUp",
  intensity = "section",
  delay = 0,
  amount,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { reduced, viewport } = useMotionPreferences();
  const inView = useInView(ref, {
    once: viewport.once,
    amount: amount ?? viewport.amount,
    margin: viewport.margin,
  });

  const variants = useMemo(() => {
    const base = createRevealVariants(variant, intensity);
    const visible =
      typeof base.visible === "object" && base.visible !== null
        ? base.visible
        : {};
    const transition =
      typeof visible === "object" &&
      visible !== null &&
      "transition" in visible &&
      typeof visible.transition === "object"
        ? visible.transition
        : {};

    return {
      hidden: base.hidden,
      visible: {
        ...visible,
        transition: {
          ...(transition ?? {}),
          delay,
        },
      },
    };
  }, [variant, intensity, delay]);

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
      className={cn("will-change-[opacity,transform]", className)}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** gallery uses tighter stagger */
  tone?: "section" | "gallery";
  delayChildren?: number;
};

/**
 * Parent for staggered children — wrap each child in `<RevealItem />`.
 */
export function Stagger({
  children,
  className,
  tone = "section",
  delayChildren,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { reduced, viewport } = useMotionPreferences();
  const inView = useInView(ref, {
    once: viewport.once,
    amount: viewport.amount,
    margin: viewport.margin,
  });

  const variants = useMemo(() => {
    const base = tone === "gallery" ? staggerGallery : staggerContainer;
    if (delayChildren === undefined) return base;
    return {
      hidden: {},
      visible: {
        transition: {
          ...(typeof base.visible === "object" &&
          base.visible &&
          "transition" in base.visible
            ? base.visible.transition
            : {}),
          delayChildren,
        },
      },
    };
  }, [tone, delayChildren]);

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
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariantName;
  intensity?: RevealIntensity;
};

/** Child of `<Stagger />` — inherits timing from parent. */
export function RevealItem({
  children,
  className,
  variant = "fadeUp",
  intensity = "subtle",
}: RevealItemProps) {
  const { reduced } = useMotionPreferences();
  const variants = useMemo(
    () => createRevealVariants(variant, intensity),
    [variant, intensity],
  );

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-[opacity,transform]", className)}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
