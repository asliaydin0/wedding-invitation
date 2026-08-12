"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Typography } from "@/components/ui/Typography";
import {
  InvitationSection,
  VintageCard,
  VintageLink,
} from "@/components/stationery";
import type { WeddingData } from "@/config";

type Props = {
  data: WeddingData["venue"];
};

export function VenueSection({ data }: Props) {
  return (
    <InvitationSection
      id="venue"
      floral="venue"
      eyebrow={data.eyebrow}
      title={data.title}
    >
      <Reveal variant="fadeUp" intensity="subtle">
        <VintageCard
          rotate="subtle-right"
          padded="sm"
          tone="cream"
          className="mb-8"
        >
          <div className="relative grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-[2px] bg-beige-200/90"
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, rgb(250 247 242 / 0.9), rgb(228 215 196 / 0.85)),
                    repeating-linear-gradient(0deg, transparent, transparent 18px, rgb(176 143 82 / 0.08) 18px, rgb(176 143 82 / 0.08) 19px),
                    repeating-linear-gradient(90deg, transparent, transparent 18px, rgb(176 143 82 / 0.08) 18px, rgb(176 143 82 / 0.08) 19px)
                  `,
                }}
              />
            ))}

            <svg
              aria-hidden
              className="pointer-events-none absolute inset-2 overflow-visible"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M30 40C60 55 80 90 95 120C110 150 140 165 170 175"
                stroke="#7a1f33"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="4 6"
                className="opacity-80"
              />
            </svg>

            <span className="absolute bottom-[18%] right-[18%] flex size-9 items-center justify-center rounded-full bg-burgundy-500 text-ivory-50 shadow-[0_8px_20px_rgb(66_17_28/0.35)]">
              <MapPin size={16} strokeWidth={1.75} />
            </span>
          </div>
        </VintageCard>
      </Reveal>

      <Reveal variant="fadeUp" intensity="subtle" delay={0.06} className="text-center">
        <Typography
          as="h3"
          variant="heading"
          tone="onDark"
          className="mb-2 text-xl italic sm:text-2xl"
        >
          {data.name}
        </Typography>
        <Typography variant="bodySans" tone="onDarkMuted" className="mb-8">
          {data.address}
        </Typography>

        <VintageLink href={data.mapsUrl} variant="burgundy" className="gap-2">
          {data.mapCta}
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </VintageLink>
      </Reveal>
    </InvitationSection>
  );
}
