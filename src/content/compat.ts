import { weddingConfig, weddingData, wedding } from "@/config";

export { weddingConfig, weddingData, wedding };

/** @deprecated Use weddingData.gallery.images */
export const galleryImages = weddingConfig.gallery.images;

export type WeddingContent = typeof wedding;
