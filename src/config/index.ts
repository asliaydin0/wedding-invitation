import { weddingConfig } from "@/config/wedding";
import type { WeddingConfig, WeddingData } from "@/config/types";
import { buildGoogleCalendarUrl } from "@/lib/calendar";

export type { WeddingConfig, WeddingData, WeddingGalleryImage, WeddingSocialLink } from "@/config/types";
export { weddingConfig } from "@/config/wedding";

function resolveCalendarUrl(config: WeddingConfig): string {
  if (config.calendarUrl.trim()) return config.calendarUrl;
  return buildGoogleCalendarUrl({
    title: config.calendarTitle,
    description: config.calendarDescription,
    location: config.addressDetail,
    startISO: config.dateISO,
    durationHours: config.durationHours,
    timezone: config.timezone,
  });
}

/**
 * Section-shaped, data-driven invitation payload.
 * Components should consume slices: `<HeroSection data={weddingData.hero} />`
 */
export function buildWeddingData(config: WeddingConfig = weddingConfig): WeddingData {
  const calendarUrl = resolveCalendarUrl(config);

  return {
    meta: config.meta,
    opening: {
      sealHint: config.copy.sealHint,
      brideName: config.brideName,
      groomName: config.groomName,
    },
    hero: {
      eyebrow: config.copy.heroEyebrow,
      brideName: config.brideName,
      groomName: config.groomName,
      dateLabel: config.dateLabel,
      body: config.description,
    },
    story: {
      eyebrow: config.story.eyebrow,
      title: config.story.title,
      paragraphs: config.story.paragraphs,
      image: config.story.image,
      brideName: config.brideName,
      groomName: config.groomName,
    },
    details: {
      eyebrow: config.copy.detailsEyebrow,
      title: config.copy.detailsTitle,
      venueLabel: config.copy.detailsVenueLabel,
      addressLabel: config.copy.detailsAddressLabel,
      dateLabel: config.copy.detailsDateLabel,
      timeLabel: config.copy.detailsTimeLabel,
      venue: config.venue,
      address: config.addressDetail,
      dateDisplay: config.dateDisplay,
      dayLabel: config.dayLabel,
      time: config.time,
      mapsUrl: config.mapsUrl,
      mapCta: config.copy.mapCta,
      calendarUrl,
      calendarCta: config.copy.calendarCta,
    },
    dateTime: {
      eyebrow: config.copy.dateTimeEyebrow,
      title: config.copy.dateTimeTitle,
      dayLabel: config.dayLabel,
      dateDisplay: config.dateDisplay,
      time: config.time,
      note: config.copy.dateTimeNote,
    },
    venue: {
      eyebrow: config.copy.venueEyebrow,
      title: config.copy.venueTitle,
      name: config.venue,
      address: config.addressDetail,
      mapsUrl: config.mapsUrl,
      mapCta: config.copy.mapCta,
    },
    countdown: {
      eyebrow: config.copy.countdownEyebrow,
      title: config.copy.countdownTitle,
      subtitle: config.copy.countdownSubtitle,
      targetISO: config.dateISO,
      labels: config.copy.countdownLabels,
      arrivedMessage: config.copy.countdownArrived,
    },
    gallery: {
      eyebrow: config.gallery.eyebrow,
      title: config.gallery.title,
      subtitle: config.gallery.subtitle,
      images: config.gallery.images,
    },
    rsvp: config.rsvp,
    music: config.music,
    socialLinks: config.socialLinks,
    footer: {
      eyebrow: config.copy.footerEyebrow,
      brideName: config.brideName,
      groomName: config.groomName,
      message: config.copy.footerMessage,
      dateDisplay: config.dateDisplay,
      time: config.time,
      note: config.copy.footerNote,
      socialLinks: config.socialLinks,
    },
    event: {
      dateISO: config.dateISO,
      dateLabel: config.dateLabel,
      dateDisplay: config.dateDisplay,
      time: config.time,
      dayLabel: config.dayLabel,
      timezone: config.timezone,
      durationHours: config.durationHours,
      calendarTitle: config.calendarTitle,
      calendarDescription: config.calendarDescription,
    },
  };
}

export const weddingData = buildWeddingData();

/**
 * Legacy-shaped accessor for hooks that still expect nested `wedding.*`.
 * Prefer `weddingConfig` / `weddingData` in new code.
 */
export const wedding = {
  meta: weddingConfig.meta,
  couple: {
    partnerOne: weddingConfig.brideName,
    partnerTwo: weddingConfig.groomName,
    families: {
      partnerOne: weddingConfig.families.bride,
      partnerTwo: weddingConfig.families.groom,
    },
  },
  event: {
    dateISO: weddingConfig.dateISO,
    dateLabel: weddingConfig.dateLabel,
    dateDisplay: weddingConfig.dateDisplay,
    timeLabel: weddingConfig.time,
    dayLabel: weddingConfig.dayLabel,
    timezone: weddingConfig.timezone,
    durationHours: weddingConfig.durationHours,
    calendarTitle: weddingConfig.calendarTitle,
    calendarDescription: weddingConfig.calendarDescription,
  },
  venue: {
    name: weddingConfig.venue,
    address: weddingConfig.address,
    addressDetail: weddingConfig.addressDetail,
    mapsUrl: weddingConfig.mapsUrl,
  },
  story: weddingConfig.story,
  copy: {
    ...weddingConfig.copy,
    heroBody: weddingConfig.description,
    heroScript: "Let's celebrate",
    galleryTitle: weddingConfig.gallery.title,
    galleryEyebrow: weddingConfig.gallery.eyebrow,
    gallerySubtitle: weddingConfig.gallery.subtitle,
    galleryCta: "ANI DAHA GÖRÜNTÜLE",
    rsvpTitle: weddingConfig.rsvp.title,
    rsvpEyebrow: weddingConfig.rsvp.eyebrow,
    rsvpBody: weddingConfig.rsvp.body,
    rsvpNameLabel: weddingConfig.rsvp.nameLabel,
    rsvpNamePlaceholder: weddingConfig.rsvp.namePlaceholder,
    rsvpStatusLabel: weddingConfig.rsvp.statusLabel,
    rsvpAttending: weddingConfig.rsvp.attending,
    rsvpDeclining: weddingConfig.rsvp.declining,
    rsvpGuestsLabel: weddingConfig.rsvp.guestsLabel,
    rsvpMessageLabel: weddingConfig.rsvp.messageLabel,
    rsvpMessagePlaceholder: weddingConfig.rsvp.messagePlaceholder,
    rsvpSubmit: weddingConfig.rsvp.submit,
    rsvpSubmitting: weddingConfig.rsvp.submitting,
    rsvpSuccess: weddingConfig.rsvp.success,
    rsvpErrorNameRequired: weddingConfig.rsvp.errors.nameRequired,
    rsvpErrorNameShort: weddingConfig.rsvp.errors.nameTooShort,
    rsvpErrorStatus: weddingConfig.rsvp.errors.statusRequired,
    rsvpErrorGuests: weddingConfig.rsvp.errors.guestsInvalid,
    rsvpErrorMessage: weddingConfig.rsvp.errors.messageTooLong,
    rsvpErrorNetwork: weddingConfig.rsvp.errors.network,
    rsvpErrorGeneric: weddingConfig.rsvp.errors.generic,
  },
  audio: weddingConfig.music,
  storyImage: weddingConfig.story.image,
  gallery: {
    images: weddingConfig.gallery.images,
  },
  rsvp: {
    provider: weddingConfig.rsvp.provider,
    endpoint: weddingConfig.rsvp.endpoint,
  },
  socialLinks: weddingConfig.socialLinks,
} as const;
