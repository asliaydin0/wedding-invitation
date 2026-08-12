"use client";

import { useId, useState, type FormEvent } from "react";
import { Check, Heart, LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Typography } from "@/components/ui/Typography";
import { VintageButton } from "@/components/stationery";
import { submitRsvp } from "@/lib/rsvp/submitRsvp";
import { validateRsvp } from "@/lib/rsvp/validate";
import type { WeddingData } from "@/config";
import type { RsvpFieldErrors, RsvpStatus } from "@/types/invitation";
import { cn } from "@/lib/utils";

type Props = {
  data: WeddingData["rsvp"];
  className?: string;
};

/**
 * Premium RSVP form — all labels/errors come from config via `data`.
 */
export function RsvpForm({ data, className }: Props) {
  const formId = useId();
  const [name, setName] = useState("");
  const [status, setStatus] = useState<RsvpStatus | "">("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<RsvpFieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const statusGroupId = `${formId}-status`;
  const guestsDisabled = status === "declining" || status === "";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const result = validateRsvp(
      { name, status, guests, message },
      {
        nameRequired: data.errors.nameRequired,
        nameTooShort: data.errors.nameTooShort,
        statusRequired: data.errors.statusRequired,
        guestsInvalid: data.errors.guestsInvalid,
        messageTooLong: data.errors.messageTooLong,
      },
    );

    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const response = await submitRsvp(result.payload);

    setSubmitting(false);

    if (!response.ok) {
      setFormError(
        response.error === "network" ? data.errors.network : data.errors.generic,
      );
      return;
    }

    setDone(true);
  };

  if (done) {
    return (
      <div
        className={cn("flex flex-col items-center gap-4 py-8 text-center", className)}
        role="status"
        aria-live="polite"
      >
        <span className="flex size-14 items-center justify-center rounded-full border border-gold-500/30 bg-burgundy-500/8 text-burgundy-500">
          <Check size={24} strokeWidth={1.5} aria-hidden />
        </span>
        <Typography variant="heading" tone="ink" className="max-w-xs text-xl">
          {data.success}
        </Typography>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-7", className)}
      noValidate
      aria-busy={submitting}
    >
      <Input
        name="name"
        label={data.nameLabel}
        placeholder={data.namePlaceholder}
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        disabled={submitting}
      />

      <fieldset aria-describedby={errors.status ? `${statusGroupId}-error` : undefined}>
        <legend className="text-label mb-3 text-ink-muted">{data.statusLabel}</legend>
        <div
          id={statusGroupId}
          role="radiogroup"
          aria-label={data.statusLabel}
          aria-required="true"
          className="grid grid-cols-1 gap-2.5 sm:grid-cols-2"
        >
          {(
            [
              ["attending", data.attending],
              ["declining", data.declining],
            ] as const
          ).map(([value, label]) => {
            const selected = status === value;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={selected}
                disabled={submitting}
                onClick={() => {
                  setStatus(value);
                  if (value === "declining") setGuests(0);
                  if (value === "attending" && guests < 1) setGuests(1);
                }}
                className={cn(
                  "flex min-h-11 items-center gap-2.5 rounded-sm border px-3 py-3 text-left font-serif text-sm transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500/40",
                  selected
                    ? "border-burgundy-500/45 bg-burgundy-500/8 text-ink"
                    : "border-brown-500/20 text-ink-soft hover:border-brown-500/35",
                  errors.status && !selected && "border-burgundy-500/40",
                )}
              >
                <Heart
                  size={14}
                  strokeWidth={1.5}
                  aria-hidden
                  className={selected ? "fill-burgundy-500 text-burgundy-500" : ""}
                />
                {label}
              </button>
            );
          })}
        </div>
        {errors.status ? (
          <p
            id={`${statusGroupId}-error`}
            role="alert"
            className="mt-2 font-serif text-xs text-burgundy-500"
          >
            {errors.status}
          </p>
        ) : null}
      </fieldset>

      <div className="flex w-full flex-col gap-2 text-left">
        <label htmlFor={`${formId}-guests`} className="text-label text-ink-muted">
          {data.guestsLabel}
        </label>
        <select
          id={`${formId}-guests`}
          name="guests"
          value={status === "declining" ? 0 : guests}
          disabled={submitting || guestsDisabled}
          aria-invalid={errors.guests ? true : undefined}
          aria-describedby={errors.guests ? `${formId}-guests-error` : undefined}
          onChange={(e) => setGuests(Number(e.target.value))}
          className={cn(
            "min-h-11 w-full appearance-none border-0 border-b bg-transparent py-2.5 font-serif text-base text-ink outline-none transition",
            "focus:border-burgundy-500 disabled:cursor-not-allowed disabled:opacity-40",
            errors.guests ? "border-burgundy-500/70" : "border-brown-400/35",
          )}
        >
          {status === "declining" ? (
            <option value={0}>—</option>
          ) : (
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))
          )}
        </select>
        {errors.guests ? (
          <p
            id={`${formId}-guests-error`}
            role="alert"
            className="font-serif text-xs text-burgundy-500"
          >
            {errors.guests}
          </p>
        ) : null}
      </div>

      <Textarea
        name="message"
        label={data.messageLabel}
        placeholder={data.messagePlaceholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={errors.message}
        disabled={submitting}
      />

      <div aria-live="assertive" aria-atomic="true">
        {formError ? (
          <p role="alert" className="mb-3 text-center font-serif text-sm text-burgundy-500">
            {formError}
          </p>
        ) : null}
      </div>

      <VintageButton
        type="submit"
        variant="burgundy"
        className="w-full"
        disabled={submitting}
        aria-disabled={submitting}
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <LoaderCircle size={16} className="animate-spin" aria-hidden />
            {data.submitting}
          </span>
        ) : (
          data.submit
        )}
      </VintageButton>
    </form>
  );
}
