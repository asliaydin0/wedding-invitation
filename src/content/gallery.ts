import type { GalleryImage } from "@/types/invitation";

/**
 * Wedding gallery — replace src paths with real photos in /public/gallery
 * (jpg / webp recommended for Next.js Image optimization).
 */
export const galleryImages: GalleryImage[] = [
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
];
