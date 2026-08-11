"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useMotionPreferences } from "@/hooks/useMotionPreferences";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /**
   * Parallax strength 0–1.
   * Keep ≤ 0.35 for premium subtlety (maps to ~±12px at 1).
   */
  intensity?: number;
};

/**
 * Subtle scroll parallax — transform only (y), GPU-friendly.
 * Disabled under prefers-reduced-motion.
 */
export function Parallax({ children, className, intensity = 0.2 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { reduced } = useMotionPreferences();
  const clamped = Math.min(Math.max(intensity, 0), 1);
  const travel = clamped * 18;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  if (reduced || clamped === 0) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

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
