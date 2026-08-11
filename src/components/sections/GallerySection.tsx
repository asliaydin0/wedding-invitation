"use client";

import { useMemo, useState } from "react";
import { FloralAccent } from "@/components/decor/FloralAccent";
import { Reveal } from "@/components/ui/Reveal";
import { InvitationImage } from "@/components/ui/InvitationImage";
import { Lightbox } from "@/components/ui/Lightbox";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/content/gallery";
import { wedding } from "@/content/wedding";
import type { GalleryImage } from "@/types/invitation";
import { cn } from "@/lib/utils";

const masonryPlacement: Record<
  NonNullable<GalleryImage["span"]>,
  string
> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const aspectFallback: Record<NonNullable<GalleryImage["span"]>, string> = {
  tall: "3 / 4",
  wide: "2 / 1",
  square: "1 / 1",
};

function GalleryFrame({
  image,
  index,
  onOpen,
}: {
  image: GalleryImage;
  index: number;
  onOpen: (i: number) => void;
}) {
  const edge = image.edge ?? (index % 2 === 0 ? "soft" : "sharp");
  const span = image.span ?? "square";
  const aspect = image.aspect ?? aspectFallback[span];

  return (
    <Reveal
      variant="scale"
      delay={index * 0.06}
      className={cn(masonryPlacement[span])}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className={cn(
          "group relative h-full min-h-[9.5rem] w-full overflow-hidden bg-beige-300/25 outline-none",
          "shadow-soft transition duration-500 hover:shadow-lift",
          "focus-visible:ring-2 focus-visible:ring-gold-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50",
          edge === "soft" ? "rounded-[0.65rem]" : "rounded-none",
        )}
        style={{ aspectRatio: aspect }}
        aria-label={`${image.alt} — büyüt`}
      >
        <span
          className={cn(
            "pointer-events-none absolute inset-0 z-[2]",
            "border-[3px] border-ivory-50/90",
            "shadow-[inset_0_0_0_1px_rgba(92,64,51,0.18)]",
            edge === "soft" ? "rounded-[0.65rem]" : "rounded-none",
          )}
        />
        <span
          className={cn(
            "pointer-events-none absolute inset-[7px] z-[2] border border-gold-500/25",
            edge === "soft" ? "rounded-[0.35rem]" : "rounded-none",
          )}
        />
        <span
          className={cn(
            "pointer-events-none absolute inset-[11px] z-[2] border border-espresso-950/10",
            edge === "soft" ? "rounded-[0.2rem]" : "rounded-none",
          )}
        />

        <InvitationImage
          src={image.src}
          alt={image.alt}
          className={cn(
            "transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:scale-[1.035] group-active:scale-[1.02]",
          )}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
        />

        <span className="absolute inset-0 z-[1] bg-espresso-950/0 transition duration-500 group-hover:bg-espresso-950/18" />
      </button>
    </Reveal>
  );
}

export function GallerySection() {
  const images = useMemo(
    () =>
      galleryImages.filter(
        (img) => typeof img.src === "string" && img.src.trim().length > 0,
      ),
    [],
  );
  const [active, setActive] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <Section id="gallery" className="relative overflow-hidden">
      <FloralAccent preset="gallery" />

      <div className="relative z-[1]">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow={wedding.copy.galleryEyebrow}
            title={wedding.copy.galleryTitle}
            subtitle={wedding.copy.gallerySubtitle}
          />
        </Reveal>

        <div
          className={cn(
            "mt-3 grid auto-rows-[minmax(8.5rem,auto)] grid-cols-2 gap-3",
            "sm:mt-5 sm:auto-rows-[minmax(10.5rem,auto)] sm:gap-4",
            "md:grid-cols-3 md:gap-5",
            "lg:gap-6",
          )}
        >
          {images.map((img, i) => (
            <GalleryFrame
              key={`${img.src}-${i}`}
              image={img}
              index={i}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() =>
          setActive((i) =>
            i === null ? i : (i - 1 + images.length) % images.length,
          )
        }
        onNext={() =>
          setActive((i) => (i === null ? i : (i + 1) % images.length))
        }
      />
    </Section>
  );
}
