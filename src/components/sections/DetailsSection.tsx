"use client";

import { CalendarPlus, Clock3, MapPinned, Navigation } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Typography } from "@/components/ui/Typography";
import {
  GoldDivider,
  InvitationSection,
  VintageCard,
  VintageLink,
} from "@/components/stationery";
import type { WeddingData } from "@/config";

type Props = {
  data: WeddingData["details"];
};

export function DetailsSection({ data }: Props) {
  const detailRows = [
    { label: data.venueLabel, value: data.venue },
    { label: data.addressLabel, value: data.address },
    { label: data.dateLabel, value: data.dateDisplay, hint: data.dayLabel },
    { label: data.timeLabel, value: data.time },
  ] as const;

  return (
    <InvitationSection
      id="details"
      floral="details"
      eyebrow={data.eyebrow}
      title={data.title}
      compact
    >
      <Reveal variant="fadeUp" intensity="subtle">
        <VintageCard tone="ivory" rotate="subtle-left" padded="md">
          <div className="space-y-5 text-left">
            {detailRows.map((row, i) => (
              <div key={row.label}>
                {i > 0 ? (
                  <GoldDivider
                    variant="line"
                    className="mb-5"
                    max="full"
                    align="stretch"
                  />
                ) : null}
                <Typography variant="label" tone="muted" className="mb-1.5 block">
                  {row.label}
                </Typography>
                <Typography
                  variant="heading"
                  tone="ink"
                  className="text-lg sm:text-xl"
                >
                  {row.value}
                </Typography>
                {"hint" in row && row.hint ? (
                  <Typography variant="bodySans" tone="muted" className="mt-1 text-sm">
                    {row.hint}
                  </Typography>
                ) : null}
              </div>
            ))}
          </div>

          <GoldDivider variant="ornament" className="my-7" max="lg" />

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <VintageLink
              href={data.mapsUrl}
              variant="burgundy"
              size="sm"
              className="w-full sm:w-auto"
            >
              <Navigation size={15} strokeWidth={1.5} />
              {data.mapCta}
            </VintageLink>

            <VintageLink
              href={data.calendarUrl}
              variant="outline"
              size="sm"
              className="w-full border-brown-500/25 text-ink hover:border-gold-500/50 hover:text-burgundy-600 sm:w-auto"
            >
              <CalendarPlus size={15} strokeWidth={1.5} />
              {data.calendarCta}
            </VintageLink>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-brown-500/45">
            <MapPinned size={14} strokeWidth={1.4} />
            <Clock3 size={14} strokeWidth={1.4} />
          </div>
        </VintageCard>
      </Reveal>
    </InvitationSection>
  );
}
