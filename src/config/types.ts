import type { GalleryImage, RsvpProvider } from "@/types/invitation";

/** Single gallery item in the invitation template */
export type WeddingGalleryImage = GalleryImage;

export type WeddingSocialLink = {
  label: string;
  href: string;
};

/**
 * Editable wedding invitation template config.
 * Change this shape only via `src/config/wedding.ts`.
 */
export type WeddingConfig = {
  /** Page <title> / Open Graph */
  meta: {
    title: string;
    description: string;
  };

  brideName: string;
  groomName: string;
  families: {
    bride: string;
    groom: string;
  };

  /** ISO 8601 with timezone offset — drives countdown + calendar */
  dateISO: string;
  /** Short uppercase label (hero / captions) */
  dateLabel: string;
  /** Long display date */
  dateDisplay: string;
  time: string;
  dayLabel: string;
  timezone: string;
  /** Calendar event length in hours */
  durationHours: number;
  calendarTitle: string;
  calendarDescription: string;
  /**
   * Optional pre-built Google Calendar URL.
   * Leave empty to auto-generate from date / venue fields.
   */
  calendarUrl: string;

  venue: string;
  address: string;
  addressDetail: string;
  mapsUrl: string;

  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: { src: string; alt: string };
  };

  /** Short description used in hero / meta-adjacent copy */
  description: string;

  music: {
    enabled: boolean;
    src: string;
    title: string;
    autoPlayOnOpen: boolean;
  };

  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    images: WeddingGalleryImage[];
  };

  rsvp: {
    enabled: boolean;
    provider: RsvpProvider;
    endpoint: string;
    eyebrow: string;
    title: string;
    body: string;
    nameLabel: string;
    namePlaceholder: string;
    statusLabel: string;
    attending: string;
    declining: string;
    guestsLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    errors: {
      nameRequired: string;
      nameTooShort: string;
      nameTooLong: string;
      statusRequired: string;
      guestsInvalid: string;
      messageTooLong: string;
      network: string;
      generic: string;
    };
  };

  socialLinks: WeddingSocialLink[];

  /** UI copy for sections / CTAs (still editable — no hard-coding in components) */
  copy: {
    sealHint: string;
    heroEyebrow: string;
    detailsEyebrow: string;
    detailsTitle: string;
    detailsVenueLabel: string;
    detailsAddressLabel: string;
    detailsDateLabel: string;
    detailsTimeLabel: string;
    mapCta: string;
    calendarCta: string;
    dateTimeEyebrow: string;
    dateTimeTitle: string;
    dateTimeNote: string;
    venueEyebrow: string;
    venueTitle: string;
    countdownEyebrow: string;
    countdownTitle: string;
    countdownSubtitle: string;
    countdownArrived: string;
    countdownLabels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    footerEyebrow: string;
    footerMessage: string;
    footerNote: string;
  };
};

/** Section-shaped data consumed by components */
export type WeddingData = {
  meta: WeddingConfig["meta"];
  opening: {
    sealHint: string;
    brideName: string;
    groomName: string;
  };
  hero: {
    eyebrow: string;
    brideName: string;
    groomName: string;
    dateLabel: string;
    body: string;
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    image: { src: string; alt: string };
    brideName: string;
    groomName: string;
  };
  details: {
    eyebrow: string;
    title: string;
    venueLabel: string;
    addressLabel: string;
    dateLabel: string;
    timeLabel: string;
    venue: string;
    address: string;
    dateDisplay: string;
    dayLabel: string;
    time: string;
    mapsUrl: string;
    mapCta: string;
    calendarUrl: string;
    calendarCta: string;
  };
  dateTime: {
    eyebrow: string;
    title: string;
    dayLabel: string;
    dateDisplay: string;
    time: string;
    note: string;
  };
  venue: {
    eyebrow: string;
    title: string;
    name: string;
    address: string;
    mapsUrl: string;
    mapCta: string;
  };
  countdown: {
    eyebrow: string;
    title: string;
    subtitle: string;
    targetISO: string;
    labels: WeddingConfig["copy"]["countdownLabels"];
    arrivedMessage: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    images: readonly WeddingGalleryImage[];
  };
  rsvp: WeddingConfig["rsvp"];
  music: WeddingConfig["music"];
  socialLinks: readonly WeddingSocialLink[];
  footer: {
    eyebrow: string;
    brideName: string;
    groomName: string;
    message: string;
    dateDisplay: string;
    time: string;
    note: string;
    socialLinks: readonly WeddingSocialLink[];
  };
  event: {
    dateISO: string;
    dateLabel: string;
    dateDisplay: string;
    time: string;
    dayLabel: string;
    timezone: string;
    durationHours: number;
    calendarTitle: string;
    calendarDescription: string;
  };
};
