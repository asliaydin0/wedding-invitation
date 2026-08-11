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

const PREF_KEY = "wedding-music-pref";

type MusicPref = "on" | "off";
type LoadState = "idle" | "ready" | "error";

type AudioContextValue = {
  isPlaying: boolean;
  isReady: boolean;
  /** False after a failed load attempt — control hides */
  isAvailable: boolean;
  isMutedPref: boolean;
  play: () => Promise<boolean>;
  pause: () => void;
  toggle: () => void;
  /** Trusted gesture (wax seal) — respects mute preference */
  unlockAndPlay: () => void;
};

const AudioCtx = createContext<AudioContextValue | null>(null);

function readPref(): MusicPref | null {
  try {
    const v = window.localStorage.getItem(PREF_KEY);
    if (v === "on" || v === "off") return v;
  } catch {
    /* private mode */
  }
  return null;
}

function writePref(value: MusicPref) {
  try {
    window.localStorage.setItem(PREF_KEY, value);
  } catch {
    /* ignore */
  }
}

/**
 * Background music — no network request until a user gesture.
 * Missing /audio/wedding.mp3 fails silently (no throw, control hides).
 */
export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const loadAttemptedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadState, setLoadState] = useState<LoadState>(
    wedding.audio.enabled ? "idle" : "error",
  );
  const [isMutedPref, setIsMutedPref] = useState(false);

  useEffect(() => {
    if (!wedding.audio.enabled) return;

    setIsMutedPref(readPref() === "off");

    const audio = document.createElement("audio");
    audio.loop = true;
    audio.preload = "none";
    audio.setAttribute("playsinline", "true");
    audio.setAttribute("webkit-playsinline", "true");
    (audio as HTMLAudioElement & { playsInline?: boolean }).playsInline = true;
    audio.volume = 0.85;

    const onPlaying = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    const onReady = () => setLoadState((s) => (s === "error" ? s : "ready"));
    const onError = () => {
      setLoadState("error");
      setIsPlaying(false);
    };

    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("canplay", onReady);
    audio.addEventListener("loadeddata", onReady);
    audio.addEventListener("error", onError);

    // Do NOT set src here — avoids 404 on every page load when file is missing
    audioRef.current = audio;

    return () => {
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("canplay", onReady);
      audio.removeEventListener("loadeddata", onReady);
      audio.removeEventListener("error", onError);
      audio.pause();
      audio.removeAttribute("src");
      try {
        audio.load();
      } catch {
        /* ignore */
      }
      audioRef.current = null;
    };
  }, []);

  const ensureSource = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || loadState === "error") return null;
    if (!audio.src || !loadAttemptedRef.current) {
      loadAttemptedRef.current = true;
      audio.src = wedding.audio.src;
      try {
        audio.load();
      } catch {
        setLoadState("error");
        return null;
      }
    }
    return audio;
  }, [loadState]);

  const play = useCallback(async () => {
    if (loadState === "error") return false;
    const audio = ensureSource();
    if (!audio) return false;

    try {
      // Must stay in user-gesture call stack for Mobile Safari
      const result = audio.play();
      if (result !== undefined) await result;
      setIsPlaying(true);
      setIsMutedPref(false);
      writePref("on");
      return true;
    } catch {
      // Missing file / autoplay block / decode error
      if (audio.error) setLoadState("error");
      setIsPlaying(false);
      return false;
    }
  }, [loadState, ensureSource]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setIsMutedPref(true);
    writePref("off");
  }, []);

  const toggle = useCallback(() => {
    if (loadState === "error") return;
    const audio = audioRef.current;
    if (audio && !audio.paused && loadAttemptedRef.current) {
      pause();
      return;
    }
    void play();
  }, [loadState, play, pause]);

  const unlockAndPlay = useCallback(() => {
    if (!wedding.audio.autoPlayOnOpen) return;
    if (loadState === "error") return;
    if (readPref() === "off") return;
    void play();
  }, [loadState, play]);

  const value = useMemo<AudioContextValue>(
    () => ({
      isPlaying,
      isReady: loadState === "ready",
      isAvailable: loadState !== "error",
      isMutedPref,
      play,
      pause,
      toggle,
      unlockAndPlay,
    }),
    [isPlaying, loadState, isMutedPref, play, pause, toggle, unlockAndPlay],
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
