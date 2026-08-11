"use client";

import { FloralAccent } from "@/components/decor/FloralAccent";
import { OrnamentalBorder } from "@/components/decor/OrnamentalBorder";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { wedding } from "@/content/wedding";

export function DateTimeSection() {
  return (
    <Section id="datetime" className="relative overflow-hidden text-center">
      <FloralAccent preset="datetime" />

      <div className="relative z-[1]">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow={wedding.copy.dateTimeEyebrow}
            title={wedding.copy.dateTimeTitle}
          />
        </Reveal>

        <Reveal variant="blur">
          <OrnamentalBorder className="bg-espresso-800/35 px-6 py-10 backdrop-blur-sm sm:px-8">
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

            <Divider className="my-6" />

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
          </OrnamentalBorder>
        </Reveal>
      </div>
    </Section>
  );
}
