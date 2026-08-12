import type { WeddingConfig } from "@/config/types";

/**
 * ═══════════════════════════════════════════════════════════
 *  WEDDING INVITATION TEMPLATE — EDIT THIS FILE ONLY
 * ═══════════════════════════════════════════════════════════
 *
 * Yeni bir davetiye için aşağıdaki alanları güncelleyin.
 * Component kodlarına dokunmanız gerekmez.
 *
 * Medya:
 *  - Fotoğraflar → public/gallery/
 *  - Müzik      → public/audio/wedding.mp3
 */

export const weddingConfig: WeddingConfig = {
  meta: {
    title: "Leyla & Giray | Düğün Davetiyesi",
    description:
      "Sizi en özel günümüzde aramızda görmekten mutluluk duyarız.",
  },

  brideName: "Leyla",
  groomName: "Giray",
  families: {
    bride: "Aile Adı",
    groom: "Aile Adı",
  },

  dateISO: "2027-05-12T19:00:00+03:00",
  dateLabel: "12 MAYIS 2027",
  dateDisplay: "12 Mayıs 2027",
  time: "19:00",
  dayLabel: "Çarşamba",
  timezone: "Europe/Istanbul",
  durationHours: 5,
  calendarTitle: "Leyla & Giray Wedding",
  calendarDescription:
    "Leyla & Giray düğün töreni. Sizi aramızda görmekten mutluluk duyarız.",
  /** Boş bırakılırsa tarih + mekân alanlarından otomatik üretilir */
  calendarUrl: "",

  venue: "Örnek Düğün Mekanı",
  address: "İstanbul, Türkiye",
  addressDetail: "Beşiktaş, İstanbul, Türkiye",
  mapsUrl: "https://maps.google.com/?q=Istanbul+Turkey",

  description:
    "Bir ömürlük hikâyemizin en güzel sayfasını birlikte açıyoruz.",

  story: {
    eyebrow: "OUR STORY",
    title: "Hikâyemiz",
    paragraphs: [
      "Bir kahvenin buharında başlayan sohbet, zamanla ortak bir rüyaya dönüştü. Küçük bakışlar, uzun yürüyüşler ve paylaşılan sessizlikler…",
      "Bugün, o güzel başlangıcın en özel sayfasını birlikte çeviriyoruz. Sizleri bu mutluluğa tanıklık etmeye davet ediyoruz.",
    ],
    image: {
      src: "/gallery/story.svg",
      alt: "Leyla & Giray",
    },
  },

  music: {
    enabled: true,
    src: "/audio/wedding.mp3",
    title: "Wedding Music",
    autoPlayOnOpen: true,
  },

  gallery: {
    eyebrow: "GALLERY",
    title: "En güzel anlarımız",
    subtitle: "Birlikte biriktirdiğimiz en özel duraklar",
    images: [
      {
        src: "/gallery/01.svg",
        alt: "Nişan anı",
        span: "tall",
        edge: "soft",
        aspect: "3/4",
      },
      {
        src: "/gallery/02.svg",
        alt: "Çiçek detayı",
        span: "wide",
        edge: "sharp",
        aspect: "2/1",
      },
      {
        src: "/gallery/03.svg",
        alt: "El ele",
        span: "square",
        edge: "soft",
        aspect: "1/1",
      },
      {
        src: "/gallery/04.svg",
        alt: "Davet masası",
        span: "square",
        edge: "sharp",
        aspect: "4/5",
      },
      {
        src: "/gallery/05.svg",
        alt: "Yüzükler",
        span: "tall",
        edge: "soft",
        aspect: "3/4",
      },
      {
        src: "/gallery/06.svg",
        alt: "Gülümseyen çift",
        span: "wide",
        edge: "sharp",
        aspect: "16/10",
      },
    ],
  },

  rsvp: {
    enabled: true,
    provider: "mock",
    endpoint: "/api/rsvp",
    eyebrow: "RSVP",
    title: "Katılım Bildirimi",
    body: "Varlığınız bu günü daha da özel kılacak.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "İsminizi yazın...",
    statusLabel: "Katılım durumu",
    attending: "Katılacağım",
    declining: "Katılamayacağım",
    guestsLabel: "Kişi sayısı",
    messageLabel: "Mesaj",
    messagePlaceholder: "Birkaç satır bırakabilirsiniz…",
    submit: "Yanıtımı Gönder",
    submitting: "Gönderiliyor…",
    success: "Teşekkür ederiz. Yanıtınız alındı.",
    errors: {
      nameRequired: "Lütfen adınızı yazın.",
      nameTooShort: "Ad en az 2 karakter olmalı.",
      nameTooLong: "Ad en fazla 80 karakter olabilir.",
      statusRequired: "Lütfen katılım durumunu seçin.",
      guestsInvalid: "Kişi sayısı 1–10 arasında olmalı.",
      messageTooLong: "Mesaj çok uzun (en fazla 500 karakter).",
      network: "Bağlantı hatası. Lütfen tekrar deneyin.",
      generic: "Gönderilemedi. Lütfen tekrar deneyin.",
    },
  },

  socialLinks: [
    // { label: "Instagram", href: "https://instagram.com/..." },
  ],

  copy: {
    sealHint: "Davetiyeyi açmak için mührü dokunun",
    heroEyebrow: "DAVETLİSİNİZ",
    detailsEyebrow: "WEDDING DETAILS",
    detailsTitle: "Düğün Detayları",
    detailsVenueLabel: "Mekân",
    detailsAddressLabel: "Adres",
    detailsDateLabel: "Tarih",
    detailsTimeLabel: "Saat",
    mapCta: "Yol Tarifi Al",
    calendarCta: "Takvime Ekle",
    dateTimeEyebrow: "DATE & TIME",
    dateTimeTitle: "Tarih & Saat",
    dateTimeNote: "Sizi bekliyor olacağız",
    venueEyebrow: "VENUE",
    venueTitle: "Mekân",
    countdownEyebrow: "COUNTDOWN",
    countdownTitle: "Buluşmaya Kalan",
    countdownSubtitle: "Bu özel ana kalan zamanı heyecanla sayıyoruz",
    countdownArrived: "Gün geldi.",
    countdownLabels: {
      days: "GÜN",
      hours: "SAAT",
      minutes: "DK",
      seconds: "SN",
    },
    footerEyebrow: "WITH LOVE",
    footerMessage:
      "Hayatımızın bu en özel gününde yanımızda olmanız, bizim için en güzel hediye.",
    footerNote: "Sevgiyle bekliyoruz",
  },
};
