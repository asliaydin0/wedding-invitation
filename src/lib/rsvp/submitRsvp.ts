import { wedding } from "@/content/wedding";
import type { RsvpPayload, RsvpProvider, RsvpResult } from "@/types/invitation";

/**
 * Central RSVP submit entry — swap provider in content/wedding.ts
 * without touching UI components.
 *
 * Providers:
 * - mock: local delay (current)
 * - api: POST to wedding.rsvp.endpoint
 * - supabase / firebase: wire SDK here later
 */
export async function submitRsvp(payload: RsvpPayload): Promise<RsvpResult> {
  const provider = (wedding.rsvp.provider ?? "mock") as RsvpProvider;

  switch (provider) {
    case "api":
      return submitViaApi(payload);
    case "supabase":
      return submitViaSupabase(payload);
    case "firebase":
      return submitViaFirebase(payload);
    case "mock":
    default:
      return submitViaMock(payload);
  }
}

async function submitViaMock(payload: RsvpPayload): Promise<RsvpResult> {
  await new Promise((r) => setTimeout(r, 900));
  // Simulate occasional failure for testing: never by default
  console.info("[RSVP mock]", payload);
  return { ok: true, id: `mock_${Date.now()}` };
}

async function submitViaApi(payload: RsvpPayload): Promise<RsvpResult> {
  try {
    const res = await fetch(wedding.rsvp.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return {
        ok: false,
        error: text || `Request failed (${res.status})`,
      };
    }
    const data = (await res.json().catch(() => ({}))) as { id?: string };
    return { ok: true, id: data.id };
  } catch {
    return { ok: false, error: "network" };
  }
}

/** Placeholder — replace with Supabase client insert */
async function submitViaSupabase(_payload: RsvpPayload): Promise<RsvpResult> {
  return {
    ok: false,
    error: "Supabase provider not configured yet.",
  };
}

/** Placeholder — replace with Firestore / Cloud Function */
async function submitViaFirebase(_payload: RsvpPayload): Promise<RsvpResult> {
  return {
    ok: false,
    error: "Firebase provider not configured yet.",
  };
}
