export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatCountdown(targetISO: string) {
  const target = new Date(targetISO).getTime();
  const now = Date.now();

  if (!Number.isFinite(target)) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPast: true,
      isInvalid: true as const,
    };
  }

  const isPast = now >= target;
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast, isInvalid: false as const };
}

export type CountdownValue = ReturnType<typeof formatCountdown>;

/** Shallow equality for countdown ticks — avoids needless re-renders */
export function countdownEquals(a: CountdownValue, b: CountdownValue) {
  return (
    a.days === b.days &&
    a.hours === b.hours &&
    a.minutes === b.minutes &&
    a.seconds === b.seconds &&
    a.isPast === b.isPast &&
    a.isInvalid === b.isInvalid
  );
}
