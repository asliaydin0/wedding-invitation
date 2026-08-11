export type RsvpStatus = "attending" | "declining";

export type RsvpPayload = {
  name: string;
  status: RsvpStatus;
  message?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

/** sealed → opening → open */
export type InvitationPhase = "sealed" | "opening" | "open";

/** Total opening choreography duration (ms) before phase becomes `open` */
export const INVITATION_OPEN_MS = 1800;

/** Reduced-motion shortcut duration */
export const INVITATION_OPEN_REDUCED_MS = 400;
