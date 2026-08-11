"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  INVITATION_OPEN_MS,
  INVITATION_OPEN_REDUCED_MS,
  type InvitationPhase,
} from "@/types/invitation";

type InvitationContextValue = {
  phase: InvitationPhase;
  isSealed: boolean;
  isOpening: boolean;
  isOpen: boolean;
  openInvitation: () => void;
};

const InvitationContext = createContext<InvitationContextValue | null>(null);

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function InvitationProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<InvitationPhase>("sealed");
  const openingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const openInvitation = useCallback(() => {
    if (openingRef.current) return;
    openingRef.current = true;
    setPhase("opening");

    const duration = prefersReducedMotion()
      ? INVITATION_OPEN_REDUCED_MS
      : INVITATION_OPEN_MS;

    timerRef.current = window.setTimeout(() => {
      setPhase("open");
    }, duration);
  }, []);

  const value = useMemo<InvitationContextValue>(
    () => ({
      phase,
      isSealed: phase === "sealed",
      isOpening: phase === "opening",
      isOpen: phase === "open",
      openInvitation,
    }),
    [phase, openInvitation],
  );

  return (
    <InvitationContext.Provider value={value}>{children}</InvitationContext.Provider>
  );
}

export function useInvitation() {
  const ctx = useContext(InvitationContext);
  if (!ctx) {
    throw new Error("useInvitation must be used within InvitationProvider");
  }
  return ctx;
}
