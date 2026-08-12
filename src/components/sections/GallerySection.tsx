"use client";

import { useMemo, useState } from "react";
import { FloralAccent } from "@/components/decor/FloralAccent";
import { Reveal, RevealItem, Stagger } from "@/components/ui/Reveal";
import { InvitationImage } from "@/components/ui/InvitationImage";
import { Lightbox } from "@/components/ui/Lightbox";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { WeddingData, WeddingGalleryImage } from "@/config";
import { cn } from "@/lib/utils";

type Props = {
  data: WeddingData["gallery"];
};

const masonryPlacement: Record<
  NonNullable<WeddingGalleryImage["span"]>,
  string
> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const aspectFallback: Record<NonNullable<WeddingGalleryImage["span"]>, string> = {
  tall: "3 / 4",
  wide: "2 / 1",
  square: "1 / 1",
};

function GalleryFrame({
  image,
  index,
  onOpen,
}: {
  image: WeddingGalleryImage;
  index: number;
  onOpen: (i: number) => void;
}) {
  const edge = image.edge ?? (index % 2 === 0 ? "soft" : "sharp");
  const span = image.span ?? "square";
  const aspect = image.aspect ?? aspectFallback[span];

  return (
    <RevealItem
      variant="scale"
      intensity="subtle"
      className={cn("min-w-0", masonryPlacement[span])}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className={cn(
          "group relative h-full min-h-[44px] w-full min-w-0 overflow-hidden bg-beige-300/25 outline-none",
          "shadow-soft transition duration-500 hover:shadow-lift",
          "focus-visible:ring-2 focus-visible:ring-gold-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50",
          edge === "soft" ? "rounded-[0.5rem] sm:rounded-[0.65rem]" : "rounded-none",
        )}
        style={{ aspectRatio: aspect }}
        aria-label={`${image.alt} — büyüt`}
      >
        <span
          className={cn(
            "pointer-events-none absolute inset-0 z-[2]",
            "border-[2px] border-ivory-50/90 sm:border-[3px]",
            "shadow-[inset_0_0_0_1px_rgba(92,64,51,0.18)]",
            edge === "soft" ? "rounded-[0.5rem] sm:rounded-[0.65rem]" : "rounded-none",
          )}
        />
        <span
          className={cn(
            "pointer-events-none absolute inset-[5px] z-[2] border border-gold-500/25 sm:inset-[7px]",
            edge === "soft" ? "rounded-[0.25rem] sm:rounded-[0.35rem]" : "rounded-none",
          )}
        />

        <InvitationImage
          src={image.src}
          alt={image.alt}
          className={cn(
            "transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:scale-[1.02] group-active:scale-[1.01]",
            "md:group-hover:scale-[1.025]",
          )}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
        />

        <span className="absolute inset-0 z-[1] bg-espresso-950/0 transition duration-500 group-hover:bg-espresso-950/14" />
      </button>
    </RevealItem>
  );
}

export function GallerySection({ data }: Props) {
  const images = useMemo(
    () =>
      data.images.filter(
        (img) => typeof img.src === "string" && img.src.trim().length > 0,
      ),
    [data.images],
  );
  const [active, setActive] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <Section id="gallery" className="relative overflow-x-clip">
      <FloralAccent preset="gallery" />

      <div className="relative z-[1] min-w-0">
        <Reveal variant="fadeUp" intensity="subtle">
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            subtitle={data.subtitle}
          />
        </Reveal>

        <Stagger
          tone="gallery"
          className={cn(
            "mt-3 grid min-w-0 auto-rows-[minmax(7.5rem,auto)] grid-cols-2 gap-2",
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
        </Stagger>
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
