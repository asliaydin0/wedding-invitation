"use client";

import { useEffect, useState } from "react";

/** True when continuous floral motion is appropriate (desktop + no reduced-motion) */
export function useFineFloralMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");

    const sync = () => setEnabled(!motion.matches && desktop.matches);
    sync();

    motion.addEventListener("change", sync);
    desktop.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
    };
  }, []);

  return enabled;
}
