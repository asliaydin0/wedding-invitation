"use client";

import { Reveal } from "@/components/ui/Reveal";
import { RsvpForm } from "@/components/rsvp/RsvpForm";
import { InvitationSection, VintageCard } from "@/components/stationery";
import { wedding } from "@/content/wedding";

export function RsvpSection() {
  return (
    <InvitationSection
      id="rsvp"
      floral="rsvp"
      eyebrow={wedding.copy.rsvpEyebrow}
      title={wedding.copy.rsvpTitle}
      subtitle={wedding.copy.rsvpBody}
    >
      <Reveal variant="scale">
        <VintageCard rotate="subtle-left" tone="ivory" padded="md">
          <RsvpForm />
        </VintageCard>
      </Reveal>
    </InvitationSection>
  );
}
