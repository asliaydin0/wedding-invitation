"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wedding } from "@/content/wedding";
import { cn } from "@/lib/utils";

const spanClass = {
  tall: "row-span-2 aspect-[3/4] sm:aspect-auto sm:min-h-[16rem]",
  wide: "col-span-2 aspect-[2/1] sm:aspect-[2/1]",
  square: "aspect-square",
} as const;

export function GallerySection() {
  const images = wedding.gallery.images;
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="gallery">
      <Reveal variant="fadeUp">
        <SectionHeading
          eyebrow={wedding.copy.galleryEyebrow}
          title={wedding.copy.galleryTitle}
          subtitle={wedding.copy.gallerySubtitle}
        />
      </Reveal>

      <div className="grid auto-rows-[8.5rem] grid-cols-2 gap-2.5 sm:auto-rows-[10rem] sm:gap-3">
        {images.map((img, i) => (
          <Reveal
            key={img.src}
            variant="scale"
            delay={i * 0.05}
            className={cn(spanClass[img.span ?? "square"])}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative h-full w-full overflow-hidden rounded-sm bg-beige-300/30 shadow-soft outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60"
              aria-label={`${img.alt} — büyüt`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-active:scale-[1.03]"
                sizes="(max-width: 448px) 45vw, 200px"
              />
              <span className="absolute inset-0 bg-espresso-950/0 transition group-hover:bg-espresso-950/20" />
              <span className="pointer-events-none absolute inset-1.5 border border-ivory-50/0 transition group-hover:border-ivory-50/25" />
            </button>
          </Reveal>
        ))}
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
