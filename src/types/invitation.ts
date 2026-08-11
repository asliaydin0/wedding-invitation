export type RsvpStatus = "attending" | "declining";

export type RsvpPayload = {
  name: string;
  status: RsvpStatus;
  guests: number;
  message?: string;
};

export type RsvpFieldErrors = Partial<
  Record<"name" | "status" | "guests" | "message" | "form", string>
>;

export type RsvpResult =
  | { ok: true; id?: string }
  | { ok: false; error: string; fieldErrors?: RsvpFieldErrors };

/** Backend provider switch — change in content config */
export type RsvpProvider = "mock" | "api" | "supabase" | "firebase";

export type GalleryImage = {
  src: string;
  alt: string;
  /** Masonry cell span */
  span?: "tall" | "wide" | "square";
  /** Soft rounded vs sharp editorial crop */
  edge?: "soft" | "sharp";
  /** CSS aspect-ratio value, e.g. "3/4" */
  aspect?: string;
};

/** sealed → opening → open */
export type InvitationPhase = "sealed" | "opening" | "open";

/** Gatefold + seal + content settle — keep in sync with lib/motion opening tokens */
export const INVITATION_OPEN_MS = 2400;
export const INVITATION_OPEN_REDUCED_MS = 400;
