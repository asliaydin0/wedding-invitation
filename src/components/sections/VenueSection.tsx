"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { BotanicalSprig } from "@/components/decor/BotanicalSprig";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { wedding } from "@/content/wedding";

export function VenueSection() {
  return (
    <Section id="venue" className="overflow-hidden">
      <Reveal variant="fadeUp">
        <SectionHeading
          eyebrow={wedding.copy.venueEyebrow}
          title={wedding.copy.venueTitle}
        />
      </Reveal>

      <Reveal variant="scale" className="relative">
        {/* Stylized map tiles */}
        <div className="relative mb-8 grid grid-cols-2 gap-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-md bg-beige-200/90 shadow-soft"
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
            className="pointer-events-none absolute inset-3 overflow-visible"
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

          <span className="absolute bottom-[18%] right-[18%] flex size-9 items-center justify-center rounded-full bg-burgundy-500 text-ivory-50 shadow-seal">
            <MapPin size={16} strokeWidth={1.75} />
          </span>

          <BotanicalSprig className="absolute -left-3 -top-2 h-24 w-14 opacity-50" />
          <BotanicalSprig
            flip
            className="absolute -bottom-2 -right-3 h-24 w-14 opacity-50"
          />
        </div>
      </Reveal>

      <Reveal variant="fadeUp" className="text-center">
        <Typography
          as="h3"
          variant="heading"
          tone="onDark"
          className="mb-2 text-xl italic sm:text-2xl"
        >
          {wedding.venue.name}
        </Typography>
        <Typography variant="bodySans" tone="onDarkMuted" className="mb-8">
          {wedding.venue.addressDetail}
        </Typography>

        <Button
          variant="primary"
          className="gap-2"
          onClick={() => window.open(wedding.venue.mapsUrl, "_blank", "noopener,noreferrer")}
        >
          {wedding.copy.mapCta}
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </Button>
      </Reveal>
    </Section>
  );
}
