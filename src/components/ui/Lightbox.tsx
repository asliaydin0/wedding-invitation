"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { InvitationImage } from "@/components/ui/InvitationImage";
import { useSwipe } from "@/hooks/useSwipe";
import { duration, ease } from "@/lib/motion";
import type { GalleryImage } from "@/types/invitation";
import { cn } from "@/lib/utils";

type Props = {
  images: readonly GalleryImage[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const open = index !== null;
  const current = index !== null ? images[index] : null;
  const count = images.length;

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      }
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

  const swipe = useSwipe({
    onSwipeLeft: onNext,
    onSwipeRight: onPrev,
  });

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso-950/88 p-4 backdrop-blur-[6px] sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration.micro + 0.05 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button
            type="button"
            aria-label="Kapat"
            className="absolute right-3 top-3 z-20 flex size-11 items-center justify-center rounded-full border border-ivory-100/20 bg-espresso-950/40 text-ivory-100/85 transition hover:bg-ivory-100/10 sm:right-5 sm:top-5"
            onClick={onClose}
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          {count > 1 ? (
            <>
              <button
                type="button"
                aria-label="Önceki"
                className="absolute left-2 z-20 flex size-11 items-center justify-center rounded-full border border-ivory-100/15 bg-espresso-950/35 text-ivory-100/75 transition hover:bg-ivory-100/10 sm:left-5"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
              >
                <ChevronLeft size={22} strokeWidth={1.35} />
              </button>

              <button
                type="button"
                aria-label="Sonraki"
                className="absolute right-2 z-20 flex size-11 items-center justify-center rounded-full border border-ivory-100/15 bg-espresso-950/35 text-ivory-100/75 transition hover:bg-ivory-100/10 sm:right-5"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
              >
                <ChevronRight size={22} strokeWidth={1.35} />
              </button>
            </>
          ) : null}

          <motion.div
            key={current.src + String(index)}
            className={cn(
              "relative w-full max-w-2xl overflow-hidden shadow-lift",
              "border border-ivory-100/15 bg-espresso-900/40",
              "ring-1 ring-gold-400/15",
            )}
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: duration.sectionSoft, ease: ease.cinematic }}
            onClick={(e) => e.stopPropagation()}
            {...swipe}
          >
            <div className="relative mx-auto aspect-[3/4] max-h-[78dvh] w-full sm:aspect-[4/5]">
              <InvitationImage
                src={current.src}
                alt={current.alt}
                sizes="(max-width: 672px) 100vw, 672px"
                priority
              />
              {/* Vintage inner frame */}
              <span className="pointer-events-none absolute inset-3 border border-ivory-50/20 sm:inset-4" />
              <span className="pointer-events-none absolute inset-4 border border-gold-400/15 sm:inset-5" />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-ivory-100/10 px-4 py-3 sm:px-5">
              <p className="truncate font-display text-sm tracking-wide text-ivory-100/80">
                {current.alt}
              </p>
              {count > 1 ? (
                <p className="shrink-0 font-ui text-[0.65rem] tracking-[0.22em] text-ivory-100/45">
                  {index! + 1} / {count}
                </p>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
