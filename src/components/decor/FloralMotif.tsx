"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import {
  SvgBloom,
  SvgBranch,
  SvgCluster,
  SvgCornerBouquet,
  SvgLeaf,
  SvgRose,
  SvgSprig,
  type BotanicalTone,
} from "@/components/decor/botanicals/svg";
import { useFineFloralMotion } from "@/hooks/useFineFloralMotion";
import { duration, ease, scale } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type FloralMotifKind =
  | "sprig"
  | "rose"
  | "branch"
  | "leaf"
  | "bloom"
  | "corner"
  | "cluster";

export type FloralMotion = "none" | "sway" | "float" | "drift";

type Props = {
  motif?: FloralMotifKind;
  tone?: BotanicalTone;
  flip?: boolean;
  className?: string;
  appear?: boolean;
  appearDelay?: number;
  motion?: FloralMotion;
  /** Scroll parallax intensity 0–1 (kept very low) */
  parallax?: number;
  children?: ReactNode;
};

const MotifMap = {
  sprig: SvgSprig,
  rose: SvgRose,
  branch: SvgBranch,
  leaf: SvgLeaf,
  bloom: SvgBloom,
  corner: SvgCornerBouquet,
  cluster: SvgCluster,
} as const;

function ParallaxY({
  intensity,
  className,
  children,
}: {
  intensity: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const travel = intensity * 16;
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reusable botanical motif with cinematic, restrained motion.
 * Transform + opacity only. Continuous sway disabled on mobile / reduced-motion.
 */
export function FloralMotif({
  motif = "sprig",
  tone = "gold",
  flip = false,
  className,
  appear = true,
  appearDelay = 0,
  motion: motionKind = "none",
  parallax = 0,
  children,
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const fine = useFineFloralMotion();

  const Motif = MotifMap[motif];
  const graphic =
    children ?? <Motif tone={tone} flip={flip} className="h-full w-full" />;

  const continuousClass =
    fine && !reduced && motionKind !== "none"
      ? motionKind === "sway"
        ? "animate-floral-sway"
        : motionKind === "float"
          ? "animate-floral-float"
          : "animate-floral-drift"
      : undefined;

  const animatedGraphic = (
    <div className={cn("h-full w-full will-change-transform", continuousClass)}>
      {graphic}
    </div>
  );

  const withParallax =
    fine && !reduced && parallax > 0 ? (
      <ParallaxY intensity={parallax} className="h-full w-full">
        {animatedGraphic}
      </ParallaxY>
    ) : (
      animatedGraphic
    );

  if (!appear || reduced) {
    return (
      <div aria-hidden className={cn("pointer-events-none", className)}>
        {withParallax}
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none will-change-[opacity,transform]",
        className,
      )}
      initial={{ opacity: 0, scale: scale.section, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: duration.section + 0.15,
        delay: appearDelay,
        ease: ease.cinematic,
      }}
    >
      {withParallax}
    </motion.div>
  );
}
