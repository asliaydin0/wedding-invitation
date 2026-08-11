"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Typography } from "@/components/ui/Typography";
import {
  GoldDivider,
  InvitationSection,
  OrnamentalFrame,
  WaxSeal,
} from "@/components/stationery";
import { wedding } from "@/content/wedding";

export function DateTimeSection() {
  return (
    <InvitationSection
      id="datetime"
      floral="datetime"
      eyebrow={wedding.copy.dateTimeEyebrow}
      title={wedding.copy.dateTimeTitle}
      className="text-center"
    >
      <Reveal variant="fadeUp" intensity="subtle">
        <OrnamentalFrame
          tone="antique"
          padding="lg"
          className="bg-espresso-800/40 backdrop-blur-[2px]"
        >
          <Typography variant="caption" tone="gold" className="mb-5">
            {wedding.event.dayLabel}
          </Typography>

          <Typography
            as="p"
            variant="display"
            tone="onDark"
            className="text-[clamp(1.6rem,7vw,2.15rem)] text-ivory-50"
          >
            {wedding.event.dateDisplay}
          </Typography>

          <GoldDivider className="my-6" />

          <Typography
            variant="script"
            className="text-4xl text-burgundy-400 sm:text-5xl"
          >
            {wedding.event.timeLabel}
          </Typography>

          <Typography
            variant="body"
            tone="onDarkMuted"
            className="mx-auto mt-6 max-w-xs"
          >
            {wedding.copy.dateTimeNote}
          </Typography>

          <div className="mt-8 flex justify-center">
            <WaxSeal size="sm" decorative pulse={false} />
          </div>
        </OrnamentalFrame>
      </Reveal>
    </InvitationSection>
  );
}
