"use client";

import { useEffect, useState } from "react";
import { formatCountdown, type CountdownValue } from "@/lib/utils";

/**
 * Live countdown to an ISO datetime from config.
 * Ticks once per second, aligned to the next whole second when possible.
 */
export function useCountdown(targetISO: string): CountdownValue {
  const [time, setTime] = useState(() => formatCountdown(targetISO));

  useEffect(() => {
    let intervalId = 0;
    let timeoutId = 0;

    const tick = () => setTime(formatCountdown(targetISO));

    tick();

    // Align first interval to the clock second for smoother updates
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

  return time;
}
