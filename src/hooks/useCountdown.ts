"use client";

import { useEffect, useState } from "react";
import { formatCountdown } from "@/lib/utils";

export function useCountdown(targetISO: string) {
  const [time, setTime] = useState(() => formatCountdown(targetISO));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatCountdown(targetISO));
    }, 1000);
    return () => window.clearInterval(id);
  }, [targetISO]);

  return time;
}
