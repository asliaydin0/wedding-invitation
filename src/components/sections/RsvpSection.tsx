"use client";

import { Reveal } from "@/components/ui/Reveal";
import { RsvpForm } from "@/components/rsvp/RsvpForm";
import { InvitationSection, VintageCard } from "@/components/stationery";
import type { WeddingData } from "@/config";

type Props = {
  data: WeddingData["rsvp"];
};

export function RsvpSection({ data }: Props) {
  return (
    <InvitationSection
      id="rsvp"
      floral="rsvp"
      eyebrow={data.eyebrow}
      title={data.title}
      subtitle={data.body}
    >
      <Reveal variant="fadeUp" intensity="subtle">
        <VintageCard tone="ivory" rotate="none" padded="md">
          <RsvpForm data={data} />
        </VintageCard>
      </Reveal>
    </InvitationSection>
  );
}
