"use client";

import { useCallback, useRef, type PointerEvent as ReactPointerEvent } from "react";

type Options = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  /** Minimum horizontal distance in px (default 56) */
  threshold?: number;
};

/**
 * Touch / pointer swipe helpers for lightbox navigation.
 */
export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  threshold = 56,
}: Options) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const onPointerDown = useCallback((e: ReactPointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
  }, []);

  const onPointerUp = useCallback(
    (e: ReactPointerEvent) => {
      if (startX.current === null || startY.current === null) return;
      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;
      startX.current = null;
      startY.current = null;

      // Prefer horizontal gestures; ignore mostly-vertical scrolls
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy) * 1.2) {
        return;
      }

      if (dx < 0) onSwipeLeft?.();
      else onSwipeRight?.();
    },
    [onSwipeLeft, onSwipeRight, threshold],
  );

  const onPointerCancel = useCallback(() => {
    startX.current = null;
    startY.current = null;
  }, []);

  return {
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    style: { touchAction: "pan-y" as const },
  };
}
