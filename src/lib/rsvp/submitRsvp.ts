import { weddingConfig } from "@/config";
import type { RsvpPayload, RsvpProvider, RsvpResult } from "@/types/invitation";

/**
 * Central RSVP submit — swap provider in src/config/wedding.ts
 */
export async function submitRsvp(payload: RsvpPayload): Promise<RsvpResult> {
  const provider = (weddingConfig.rsvp.provider ?? "mock") as RsvpProvider;

  switch (provider) {
    case "api":
      return submitViaApi(payload);
    case "supabase":
    case "firebase":
      return {
        ok: false,
        error: `${provider} provider not configured yet.`,
      };
    case "mock":
    default:
      return submitViaMock(payload);
  }
}

async function submitViaMock(payload: RsvpPayload): Promise<RsvpResult> {
  await new Promise((r) => setTimeout(r, 900));
  if (process.env.NODE_ENV === "development") {
    console.info("[RSVP mock]", payload);
  }
  return { ok: true, id: `mock_${Date.now()}` };
}

async function submitViaApi(payload: RsvpPayload): Promise<RsvpResult> {
  try {
    const res = await fetch(weddingConfig.rsvp.endpoint, {
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
