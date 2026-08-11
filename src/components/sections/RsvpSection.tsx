"use client";

import { useState, type FormEvent } from "react";
import { Check, Heart } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Reveal } from "@/components/ui/Reveal";
import { Textarea } from "@/components/ui/Textarea";
import { Typography } from "@/components/ui/Typography";
import {
  InvitationSection,
  VintageButton,
  VintageCard,
} from "@/components/stationery";
import { wedding } from "@/content/wedding";
import type { RsvpPayload, RsvpStatus } from "@/types/invitation";
import { cn } from "@/lib/utils";

async function mockSubmit(payload: RsvpPayload) {
  await new Promise((r) => setTimeout(r, 700));
  console.info("[RSVP mock]", payload);
  return { ok: true as const };
}

export function RsvpSection() {
  const [status, setStatus] = useState<RsvpStatus>("attending");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload: RsvpPayload = {
      name: String(data.get("name") ?? "").trim(),
      status,
      guests: Number(data.get("guests") ?? 1),
      message: String(data.get("message") ?? "").trim() || undefined,
    };
    if (!payload.name) return;

    setSubmitting(true);
    await mockSubmit(payload);
    setSubmitting(false);
    setDone(true);
  };

  return (
    <InvitationSection
      id="rsvp"
      floral="rsvp"
      eyebrow={wedding.copy.rsvpEyebrow}
      title={wedding.copy.rsvpTitle}
      subtitle={wedding.copy.rsvpBody}
    >
      <Reveal variant="scale">
        <VintageCard rotate="subtle-left" tone="ivory" padded="md">
          {done ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-burgundy-500/10 text-burgundy-500">
                <Check size={22} strokeWidth={1.5} />
              </span>
              <Typography variant="heading" tone="ink">
                {wedding.copy.rsvpSuccess}
              </Typography>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-7">
              <Input
                name="name"
                required
                autoComplete="name"
                label={wedding.copy.rsvpNameLabel}
                placeholder={wedding.copy.rsvpNamePlaceholder}
              />

              <fieldset>
                <legend className="text-label mb-3 text-ink-muted">
                  {wedding.copy.rsvpStatusLabel}
                </legend>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(
                    [
                      ["attending", wedding.copy.rsvpAttending],
                      ["declining", wedding.copy.rsvpDeclining],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setStatus(value)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-md border px-3 py-3 text-left font-serif text-sm transition",
                        status === value
                          ? "border-burgundy-500/45 bg-burgundy-500/8 text-ink"
                          : "border-brown-500/20 text-ink-soft hover:border-brown-500/35",
                      )}
                    >
                      <Heart
                        size={14}
                        strokeWidth={1.5}
                        className={
                          status === value
                            ? "fill-burgundy-500 text-burgundy-500"
                            : ""
                        }
                      />
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="flex w-full flex-col gap-2 text-left">
                <span className="text-label text-ink-muted">
                  {wedding.copy.rsvpGuestsLabel}
                </span>
                <select
                  name="guests"
                  defaultValue={1}
                  disabled={status === "declining"}
                  className="w-full appearance-none border-0 border-b border-brown-400/35 bg-transparent py-2.5 font-serif text-base text-ink outline-none focus:border-burgundy-500 disabled:opacity-40"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>

              <Textarea
                name="message"
                label={wedding.copy.rsvpMessageLabel}
                placeholder={wedding.copy.rsvpMessagePlaceholder}
              />

              <VintageButton
                type="submit"
                variant="burgundy"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? "…" : wedding.copy.rsvpSubmit}
              </VintageButton>
            </form>
          )}
        </VintageCard>
      </Reveal>
    </InvitationSection>
  );
}
