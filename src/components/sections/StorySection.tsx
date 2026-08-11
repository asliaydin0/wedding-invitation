"use client";

import { FloralDecoration, InvitationSection, OrnamentalFrame } from "@/components/stationery";
import { InvitationImage } from "@/components/ui/InvitationImage";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Typography } from "@/components/ui/Typography";
import { wedding } from "@/content/wedding";

export function StorySection() {
  return (
    <InvitationSection
      id="story"
      floral="story"
      eyebrow={wedding.story.eyebrow}
      title={wedding.story.title}
    >
      <div className="grid gap-10 sm:gap-12">
        <Reveal
          variant="clip"
          intensity="subtle"
          className="relative mx-auto w-full max-w-[16rem]"
        >
          <Parallax intensity={0.18}>
            <OrnamentalFrame tone="antique" padding="sm" className="bg-ivory-100/90">
              <div className="relative aspect-[3/4] overflow-hidden bg-beige-300/40">
                <InvitationImage
                  src={wedding.storyImage.src}
                  alt={wedding.storyImage.alt}
                  sizes="(max-width: 448px) 80vw, 256px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/25 to-transparent" />
              </div>
            </OrnamentalFrame>
          </Parallax>
          <FloralDecoration
            motif="sprig"
            motion="sway"
            appearDelay={0.15}
            placement="inline"
            className="absolute -left-6 -top-4 h-28 w-16 -rotate-12 opacity-75"
          />
          <FloralDecoration
            motif="rose"
            tone="burgundy"
            flip
            motion="float"
            appearDelay={0.25}
            placement="inline"
            className="absolute -bottom-3 -right-4 h-16 w-14 opacity-80"
          />
        </Reveal>

        <Reveal
          variant="fadeUp"
          intensity="subtle"
          delay={0.08}
          className="space-y-5 text-center"
        >
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
    </InvitationSection>
  );
}
