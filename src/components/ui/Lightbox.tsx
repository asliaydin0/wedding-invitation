"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { InvitationImage } from "@/components/ui/InvitationImage";
import { cn } from "@/lib/utils";

type Item = {
  src: string;
  alt: string;
};

type Props = {
  images: readonly Item[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const open = index !== null;
  const current = index !== null ? images[index] : null;

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [open, onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso-950/92 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button
            type="button"
            aria-label="Kapat"
            className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-ivory-100/20 text-ivory-100/80 transition hover:bg-ivory-100/10"
            onClick={onClose}
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Önceki"
            className="absolute left-3 z-10 flex size-10 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-100/70 sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <ChevronLeft size={20} strokeWidth={1.4} />
          </button>

          <button
            type="button"
            aria-label="Sonraki"
            className="absolute right-3 z-10 flex size-10 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-100/70 sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <ChevronRight size={20} strokeWidth={1.4} />
          </button>

          <motion.div
            key={current.src}
            className={cn(
              "relative max-h-[78dvh] w-full max-w-lg overflow-hidden rounded-sm shadow-lift",
            )}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] w-full bg-espresso-900">
              <InvitationImage
                src={current.src}
                alt={current.alt}
                sizes="(max-width: 512px) 100vw, 512px"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
