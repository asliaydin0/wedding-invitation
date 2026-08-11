/**
 * Single source of truth for invitation copy & media.
 * Edit this file to customize the entire invitation — no component hunting required.
 */

export const wedding = {
  meta: {
    title: "Leyla & Giray | Düğün Davetiyesi",
    description:
      "Sizi en özel günümüzde aramızda görmekten mutluluk duyarız.",
  },

  couple: {
    partnerOne: "Leyla",
    partnerTwo: "Giray",
    families: {
      partnerOne: "Aile Adı",
      partnerTwo: "Aile Adı",
    },
  },

  event: {
    /** ISO datetime used by countdown & calendar links */
    dateISO: "2026-08-08T19:00:00+03:00",
    dateLabel: "08 AĞUSTOS 2026",
    timeLabel: "19:00",
    timezone: "Europe/Istanbul",
  },

  venue: {
    name: "Four Seasons Hotel Istanbul At The Bosphorus",
    address: "No:28, Çırağan Cd., 34349 Beşiktaş / İstanbul, Türkiye",
    mapsUrl: "https://maps.google.com/?q=Four+Seasons+Hotel+Istanbul+At+The+Bosphorus",
    embedQuery: "Four Seasons Hotel Istanbul At The Bosphorus",
  },

  copy: {
    sealHint: "Davetiyeyi açmak için mührü dokunun",
    heroEyebrow: "DAVETLİSİNİZ",
    heroScript: "Let's celebrate",
    heroBody:
      "BU ANLAMLI GÜNDE SİZLERİ ARAMIZDA GÖRMEKTEN MUTLULUK DUYARIZ",
    countdownTitle: "BULUŞMAYA KALAN",
    countdownSubtitle: "Bu özel ana kalan zamanı heyecanla sayıyoruz",
    mapCta: "YOL TARİFİ",
    galleryTitle: "En güzel anlarımız",
    gallerySubtitle: "Birlikte biriktirdiğimiz en özel duraklar",
    galleryCta: "ANI DAHA GÖRÜNTÜLE",
    rsvpTitle: "Katılım Bildirimi",
    rsvpBody: "Varlığınız bu günü daha da özel kılacak.",
    rsvpNamePlaceholder: "İsminizi yazın...",
    rsvpAttending: "Katılacağım",
    rsvpDeclining: "Katılamayacağım",
    rsvpSubmit: "GÖNDER",
    footerNote: "Sevgiyle bekliyoruz",
  },

  audio: {
    enabled: true,
    /** Place file under /public/audio/ */
    src: "/audio/background.mp3",
    title: "Background Music",
  },

  gallery: {
    /** Paths under /public/gallery/ — replace with real photos */
    images: [
      { src: "/gallery/01.jpg", alt: "Anı 1" },
      { src: "/gallery/02.jpg", alt: "Anı 2" },
      { src: "/gallery/03.jpg", alt: "Anı 3" },
    ],
    maxGuestUploads: 15,
  },

  rsvp: {
    /** Hook up later: Formspree / API route / Google Sheet */
    endpoint: "/api/rsvp",
  },
} as const;

export type WeddingContent = typeof wedding;
