"use client";

import { FloralAccent } from "@/components/decor/FloralAccent";
import { FloralMotif } from "@/components/decor/FloralMotif";
import { VintageFrame } from "@/components/decor/VintageFrame";
import { InvitationImage } from "@/components/ui/InvitationImage";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { wedding } from "@/content/wedding";

export function StorySection() {
  return (
    <Section id="story" className="relative overflow-hidden">
      <FloralAccent preset="story" />

      <Reveal variant="fade">
        <SectionHeading
          eyebrow={wedding.story.eyebrow}
          title={wedding.story.title}
        />
      </Reveal>

      <div className="relative z-[1] grid gap-10 sm:gap-12">
        <Reveal variant="scale" className="relative mx-auto w-full max-w-[16rem]">
          <VintageFrame>
            <div className="relative aspect-[3/4] overflow-hidden bg-beige-300/40">
              <InvitationImage
                src={wedding.storyImage.src}
                alt={wedding.storyImage.alt}
                sizes="(max-width: 448px) 80vw, 256px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/25 to-transparent" />
            </div>
          </VintageFrame>
          <FloralMotif
            motif="sprig"
            motion="sway"
            appearDelay={0.15}
            className="absolute -left-6 -top-4 h-28 w-16 -rotate-12 opacity-75"
          />
          <FloralMotif
            motif="rose"
            tone="burgundy"
            flip
            motion="float"
            appearDelay={0.25}
            className="absolute -bottom-3 -right-4 h-16 w-14 opacity-80"
          />
        </Reveal>

        <Reveal variant="blur" className="space-y-5 text-center">
          {wedding.story.paragraphs.map((p) => (
            <Typography
              key={p.slice(0, 24)}
              variant="body"
              tone="onDarkMuted"
              className="mx-auto max-w-sm leading-relaxed"
            >
              {p}
            </Typography>
          ))}
          <Typography
            variant="script"
            className="pt-2 text-3xl text-burgundy-400 sm:text-4xl"
          >
            {wedding.couple.partnerOne} & {wedding.couple.partnerTwo}
          </Typography>
        </Reveal>
      </div>
    </Section>
  );
}
