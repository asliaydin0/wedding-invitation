/**
 * Single source of truth for invitation copy & media.
 * Edit this file to customize the entire invitation.
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
    dateISO: "2026-08-08T19:00:00+03:00",
    dateLabel: "08 AĞUSTOS 2026",
    dateDisplay: "08 Ağustos 2026",
    timeLabel: "19:00",
    dayLabel: "Cumartesi",
    timezone: "Europe/Istanbul",
  },

  venue: {
    name: "Örnek Düğün Mekanı",
    address: "İstanbul, Türkiye",
    addressDetail: "Beşiktaş, İstanbul, Türkiye",
    mapsUrl: "https://maps.google.com/?q=Istanbul+Turkey",
    embedQuery: "Istanbul, Turkey",
  },

  story: {
    title: "Hikâyemiz",
    eyebrow: "OUR STORY",
    paragraphs: [
      "Bir kahvenin buharında başlayan sohbet, zamanla ortak bir rüyaya dönüştü. Küçük bakışlar, uzun yürüyüşler ve paylaşılan sessizlikler…",
      "Bugün, o güzel başlangıcın en özel sayfasını birlikte çeviriyoruz. Sizleri bu mutluluğa tanıklık etmeye davet ediyoruz.",
    ],
  },

  copy: {
    sealHint: "Davetiyeyi açmak için mührü dokunun",
    heroEyebrow: "DAVETLİSİNİZ",
    heroScript: "Let's celebrate",
    heroBody:
      "Bir ömürlük hikâyemizin en güzel sayfasını birlikte açıyoruz.",
    detailsTitle: "Düğün Detayları",
    detailsEyebrow: "WEDDING DETAILS",
    dateTimeTitle: "Tarih & Saat",
    dateTimeEyebrow: "DATE & TIME",
    dateTimeNote: "Sizi bekliyor olacağız",
    venueTitle: "Mekân",
    venueEyebrow: "VENUE",
    countdownTitle: "Buluşmaya Kalan",
    countdownEyebrow: "COUNTDOWN",
    countdownSubtitle: "Bu özel ana kalan zamanı heyecanla sayıyoruz",
    countdownArrived: "The day has arrived.",
    countdownLabels: {
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES",
      seconds: "SECONDS",
    },
    mapCta: "YOL TARİFİ",
    galleryTitle: "En güzel anlarımız",
    galleryEyebrow: "GALLERY",
    gallerySubtitle: "Birlikte biriktirdiğimiz en özel duraklar",
    galleryCta: "ANI DAHA GÖRÜNTÜLE",
    rsvpTitle: "Katılım Bildirimi",
    rsvpEyebrow: "RSVP",
    rsvpBody: "Varlığınız bu günü daha da özel kılacak.",
    rsvpNameLabel: "Ad Soyad",
    rsvpNamePlaceholder: "İsminizi yazın...",
    rsvpStatusLabel: "Katılım durumu",
    rsvpAttending: "Katılacağım",
    rsvpDeclining: "Katılamayacağım",
    rsvpGuestsLabel: "Kişi sayısı",
    rsvpMessageLabel: "Mesajınız",
    rsvpMessagePlaceholder: "Birkaç satır bırakabilirsiniz…",
    rsvpSubmit: "GÖNDER",
    rsvpSuccess: "Teşekkürler — yanıtınız bize ulaştı.",
    footerEyebrow: "WITH LOVE",
    footerNote: "Sevgiyle bekliyoruz",
    footerMessage:
      "Hayatımızın bu en özel gününde yanımızda olmanız, bizim için en güzel hediye.",
  },

  audio: {
    enabled: true,
    /** Place file at public/audio/wedding.mp3 — missing file fails silently */
    src: "/audio/wedding.mp3",
    title: "Wedding Music",
    /** Start on wax-seal tap unless user previously muted */
    autoPlayOnOpen: true,
  },

  storyImage: {
    src: "/gallery/story.svg",
    alt: "Leyla & Giray",
  },

  gallery: {
    images: [
      {
        src: "/gallery/01.svg",
        alt: "Nişan anı",
        span: "tall" as const,
      },
      {
        src: "/gallery/02.svg",
        alt: "Çiçek detayı",
        span: "wide" as const,
      },
      {
        src: "/gallery/03.svg",
        alt: "El ele",
        span: "square" as const,
      },
      {
        src: "/gallery/04.svg",
        alt: "Davet masası",
        span: "square" as const,
      },
      {
        src: "/gallery/05.svg",
        alt: "Yüzükler",
        span: "tall" as const,
      },
      {
        src: "/gallery/06.svg",
        alt: "Gülümseyen çift",
        span: "wide" as const,
      },
    ],
    maxGuestUploads: 15,
  },

  rsvp: {
    endpoint: "/api/rsvp",
  },
} as const;

export type WeddingContent = typeof wedding;
