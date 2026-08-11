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
import { wedding } from "@/content/wedding";

type AudioContextValue = {
  isPlaying: boolean;
  toggle: () => void;
  unlockAndPlay: () => void;
};

const AudioCtx = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!wedding.audio.enabled) return;
    const audio = new Audio(wedding.audio.src);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().then(() => setIsPlaying(true)).catch(() => undefined);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const unlockAndPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;
    void audio.play().then(() => setIsPlaying(true)).catch(() => undefined);
  }, []);

  const value = useMemo(
    () => ({ isPlaying, toggle, unlockAndPlay }),
    [isPlaying, toggle, unlockAndPlay],
  );

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return ctx;
}
