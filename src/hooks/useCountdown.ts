"use client";

import { useEffect, useState } from "react";
import {
  countdownEquals,
  formatCountdown,
  type CountdownValue,
} from "@/lib/utils";

const EMPTY: CountdownValue = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isPast: false,
  isInvalid: false,
};

/**
 * Live countdown to an ISO datetime from config.
 * Starts after mount so SSR HTML matches the first client paint (no hydration mismatch).
 * Stops ticking once the target is reached / invalid.
 */
export function useCountdown(targetISO: string): CountdownValue & {
  ready: boolean;
} {
  const [time, setTime] = useState<CountdownValue>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let intervalId = 0;
    let timeoutId = 0;
    let stopped = false;

    const apply = (next: CountdownValue) => {
      setTime((prev) => (countdownEquals(prev, next) ? prev : next));
    };

    const tick = () => {
      const next = formatCountdown(targetISO);
      apply(next);
      if (next.isPast || next.isInvalid) {
        stopped = true;
        window.clearInterval(intervalId);
        window.clearTimeout(timeoutId);
      }
    };

    tick();
    setReady(true);

    if (stopped) return;

    const msToNextSecond = 1000 - (Date.now() % 1000);
    timeoutId = window.setTimeout(() => {
      tick();
      if (stopped) return;
      intervalId = window.setInterval(tick, 1000);
    }, msToNextSecond);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [targetISO]);

  return { ...time, ready };
}
