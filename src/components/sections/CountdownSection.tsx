"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { InvitationSection } from "@/components/stationery";
import type { WeddingData } from "@/config";

type Props = {
  data: WeddingData["countdown"];
};

export function CountdownSection({ data }: Props) {
  return (
    <InvitationSection
      id="countdown"
      floral="countdown"
      eyebrow={data.eyebrow}
      title={data.title}
      subtitle={data.subtitle}
      compact
    >
      <Reveal variant="fadeUp" intensity="subtle">
        <CountdownTimer
          targetISO={data.targetISO}
          labels={data.labels}
          arrivedMessage={data.arrivedMessage}
        />
      </Reveal>
    </InvitationSection>
  );
}
