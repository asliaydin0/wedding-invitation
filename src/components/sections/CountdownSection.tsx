"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { InvitationSection } from "@/components/stationery";
import { wedding } from "@/content/wedding";

export function CountdownSection() {
  return (
    <InvitationSection
      id="countdown"
      floral="countdown"
      eyebrow={wedding.copy.countdownEyebrow}
      title={wedding.copy.countdownTitle}
      subtitle={wedding.copy.countdownSubtitle}
      className="text-center"
    >
      <Reveal variant="blur">
        <CountdownTimer
          targetISO={wedding.event.dateISO}
          labels={wedding.copy.countdownLabels}
          arrivedMessage={wedding.copy.countdownArrived}
        />
      </Reveal>
    </InvitationSection>
  );
}
