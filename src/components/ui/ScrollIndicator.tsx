"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  className?: string;
  label?: string;
};

/** Minimal scroll affordance — soft drift, 44px+ touch target */
export function ScrollIndicator({
  href = "#story",
  className,
  label = "Aşağı kaydır",
}: Props) {
  const reduced = useReducedMotion() ?? false;

  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        "group inline-flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 px-3 text-ivory-100/50 transition hover:text-ivory-100/75",
        className,
      )}
    >
      <span className="font-serif text-[0.62rem] tracking-[0.22em] uppercase sm:text-[0.65rem]">
        {label}
      </span>
      <motion.span
        aria-hidden
        animate={reduced ? undefined : { y: [0, 4, 0] }}
        transition={
          reduced
            ? undefined
            : {
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="flex size-9 items-center justify-center rounded-full border border-ivory-100/20 sm:size-8"
      >
        <ChevronDown size={14} strokeWidth={1.25} />
      </motion.span>
    </a>
  );
}
