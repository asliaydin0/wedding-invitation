import type { RsvpFieldErrors, RsvpPayload, RsvpStatus } from "@/types/invitation";

export type RsvpFormValues = {
  name: string;
  status: RsvpStatus | "";
  guests: number;
  message: string;
};

type ValidateMessages = {
  nameRequired: string;
  nameTooShort: string;
  nameTooLong: string;
  statusRequired: string;
  guestsInvalid: string;
  messageTooLong: string;
};

const NAME_MIN = 2;
const NAME_MAX = 80;
const MESSAGE_MAX = 500;
const GUESTS_MIN = 1;
const GUESTS_MAX = 10;

export function validateRsvp(
  values: RsvpFormValues,
  messages: ValidateMessages,
): { valid: true; payload: RsvpPayload } | { valid: false; errors: RsvpFieldErrors } {
  const errors: RsvpFieldErrors = {};
  const name = values.name.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = messages.nameRequired;
  } else if (name.length < NAME_MIN) {
    errors.name = messages.nameTooShort;
  } else if (name.length > NAME_MAX) {
    errors.name = messages.nameTooLong;
  }

  if (values.status !== "attending" && values.status !== "declining") {
    errors.status = messages.statusRequired;
  }

  const guests = Number(values.guests);
  if (values.status === "attending") {
    if (!Number.isInteger(guests) || guests < GUESTS_MIN || guests > GUESTS_MAX) {
      errors.guests = messages.guestsInvalid;
    }
  }

  if (message.length > MESSAGE_MAX) {
    errors.message = messages.messageTooLong;
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  const status = values.status as RsvpStatus;
  const payload: RsvpPayload = {
    name,
    status,
    guests: status === "declining" ? 0 : guests,
    message: message || undefined,
  };

  return { valid: true, payload };
}
