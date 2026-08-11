/**
 * Google Calendar template URL builder.
 * All event fields come from content/config.
 */

type CalendarEventInput = {
  title: string;
  description?: string;
  location?: string;
  /** Event start — ISO 8601 with offset preferred */
  startISO: string;
  /** Duration in hours (default 4) */
  durationHours?: number;
  /** IANA timezone shown in Google Calendar */
  timezone?: string;
};

/** Parse ISO wall-clock parts: YYYY-MM-DDTHH:mm[:ss][offset] */
function parseWallClock(iso: string) {
  const m = iso.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?/,
  );
  if (!m) return null;
  return {
    y: Number(m[1]),
    mo: Number(m[2]),
    d: Number(m[3]),
    h: Number(m[4]),
    mi: Number(m[5]),
    s: Number(m[6] ?? 0),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function toGCalStamp(parts: {
  y: number;
  mo: number;
  d: number;
  h: number;
  mi: number;
  s: number;
}) {
  return `${parts.y}${pad(parts.mo)}${pad(parts.d)}T${pad(parts.h)}${pad(parts.mi)}${pad(parts.s)}`;
}

/** Add hours to wall-clock parts (simple calendar arithmetic) */
function addHours(
  parts: { y: number; mo: number; d: number; h: number; mi: number; s: number },
  hours: number,
) {
  const utc = Date.UTC(parts.y, parts.mo - 1, parts.d, parts.h + hours, parts.mi, parts.s);
  const end = new Date(utc);
  return {
    y: end.getUTCFullYear(),
    mo: end.getUTCMonth() + 1,
    d: end.getUTCDate(),
    h: end.getUTCHours(),
    mi: end.getUTCMinutes(),
    s: end.getUTCSeconds(),
  };
}

export function buildGoogleCalendarUrl(input: CalendarEventInput): string {
  const duration = input.durationHours ?? 4;
  const startParts = parseWallClock(input.startISO);

  let dates: string;
  if (startParts) {
    const endParts = addHours(startParts, duration);
    dates = `${toGCalStamp(startParts)}/${toGCalStamp(endParts)}`;
  } else {
    // Fallback: UTC stamps from Date
    const start = new Date(input.startISO);
    const end = new Date(start.getTime() + duration * 60 * 60 * 1000);
    const stamp = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
    dates = `${stamp(start)}/${stamp(end)}`;
  }

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: input.title,
    dates,
  });

  if (input.description) params.set("details", input.description);
  if (input.location) params.set("location", input.location);
  if (input.timezone) params.set("ctz", input.timezone);

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
