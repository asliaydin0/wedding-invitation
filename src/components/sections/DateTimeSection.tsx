"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Typography } from "@/components/ui/Typography";
import { InvitationSection, VintageCard } from "@/components/stationery";
import type { WeddingData } from "@/config";

type Props = {
  data: WeddingData["dateTime"];
};

export function DateTimeSection({ data }: Props) {
  return (
    <InvitationSection
      id="datetime"
      floral="datetime"
      eyebrow={data.eyebrow}
      title={data.title}
      compact
    >
      <Reveal variant="fadeUp" intensity="subtle">
        <VintageCard tone="cream" rotate="none" padded="md" className="text-center">
          <Typography variant="caption" tone="gold" className="mb-5">
            {data.dayLabel}
          </Typography>
          <Typography
            variant="display"
            tone="ink"
            className="text-[clamp(1.6rem,7vw,2.15rem)] text-espresso-900"
          >
            {data.dateDisplay}
          </Typography>
          <Typography
            variant="script"
            className="mt-3 text-3xl text-burgundy-500 sm:text-4xl"
          >
            {data.time}
          </Typography>
          <Typography variant="body" tone="muted" className="mt-6">
            {data.note}
          </Typography>
        </VintageCard>
      </Reveal>
    </InvitationSection>
  );
}
