"use client";

import { useEffect, useState } from "react";
import { formatCountdown, type CountdownValue } from "@/lib/utils";

const EMPTY: CountdownValue = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isPast: false,
};

/**
 * Live countdown to an ISO datetime from config.
 * Starts after mount so SSR HTML matches the first client paint (no hydration mismatch).
 */
export function useCountdown(targetISO: string): CountdownValue & {
  ready: boolean;
} {
  const [time, setTime] = useState<CountdownValue>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let intervalId = 0;
    let timeoutId = 0;

    const tick = () => setTime(formatCountdown(targetISO));

    tick();
    setReady(true);

    const msToNextSecond = 1000 - (Date.now() % 1000);
    timeoutId = window.setTimeout(() => {
      tick();
      intervalId = window.setInterval(tick, 1000);
    }, msToNextSecond);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [targetISO]);

  return { ...time, ready };
}
