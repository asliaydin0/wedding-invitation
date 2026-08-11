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
  span?: "tall" | "wide" | "square";
};

/** sealed → opening → open */
export type InvitationPhase = "sealed" | "opening" | "open";

export const INVITATION_OPEN_MS = 1800;
export const INVITATION_OPEN_REDUCED_MS = 400;
