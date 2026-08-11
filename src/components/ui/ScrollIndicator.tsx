"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  className?: string;
  label?: string;
};

/** Minimal scroll affordance — soft pulse, not bounce-heavy */
export function ScrollIndicator({
  href = "#countdown",
  className,
  label = "Aşağı kaydır",
}: Props) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        "group inline-flex flex-col items-center gap-2 text-ivory-100/45 transition hover:text-ivory-100/70",
        className,
      )}
    >
      <span className="font-serif text-[0.65rem] tracking-[0.28em] uppercase">
        Scroll
      </span>
      <motion.span
        aria-hidden
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex size-8 items-center justify-center rounded-full border border-ivory-100/20"
      >
        <ChevronDown size={14} strokeWidth={1.25} />
      </motion.span>
    </a>
  );
}
