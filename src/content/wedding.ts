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
    dateISO: "2027-05-12T19:00:00+03:00",
    dateLabel: "12 MAYIS 2027",
    dateDisplay: "12 Mayıs 2027",
    timeLabel: "19:00",
    dayLabel: "Pazar",
    timezone: "Europe/Istanbul",
    /** Calendar event length (hours) */
    durationHours: 5,
    calendarTitle: "Leyla & Giray Wedding",
    calendarDescription:
      "Leyla & Giray düğün töreni. Sizi aramızda görmekten mutluluk duyarız.",
  },

  venue: {
    name: "Örnek Düğün Mekanı",
    address: "İstanbul, Türkiye",
    addressDetail: "Beşiktaş, İstanbul, Türkiye",
    /** Editable Google Maps directions link */
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
    detailsVenueLabel: "Venue Name",
    detailsAddressLabel: "Address",
    detailsDateLabel: "Date",
    detailsTimeLabel: "Time",
    mapCta: "Yol Tarifi Al",
    calendarCta: "Takvime Ekle",
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
    rsvpMessageLabel: "Mesaj",
    rsvpMessagePlaceholder: "Birkaç satır bırakabilirsiniz…",
    rsvpSubmit: "Yanıtımı Gönder",
    rsvpSubmitting: "Gönderiliyor…",
    rsvpSuccess: "Teşekkür ederiz. Yanıtınız alındı.",
    rsvpErrorNameRequired: "Lütfen adınızı yazın.",
    rsvpErrorNameShort: "Ad en az 2 karakter olmalı.",
    rsvpErrorStatus: "Lütfen katılım durumunu seçin.",
    rsvpErrorGuests: "Kişi sayısı 1–10 arasında olmalı.",
    rsvpErrorMessage: "Mesaj çok uzun (en fazla 500 karakter).",
    rsvpErrorNetwork: "Bağlantı hatası. Lütfen tekrar deneyin.",
    rsvpErrorGeneric: "Gönderilemedi. Lütfen tekrar deneyin.",
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
    /** mock | api | supabase | firebase */
    provider: "mock" as const,
    endpoint: "/api/rsvp",
  },
} as const;

export type WeddingContent = typeof wedding;
