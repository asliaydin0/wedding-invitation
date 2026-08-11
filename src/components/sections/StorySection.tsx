"use client";

import Image from "next/image";
import { BotanicalSprig } from "@/components/decor/BotanicalSprig";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { VintageFrame } from "@/components/decor/VintageFrame";
import { wedding } from "@/content/wedding";

export function StorySection() {
  return (
    <Section id="story" className="overflow-hidden">
      <Reveal variant="fade">
        <SectionHeading
          eyebrow={wedding.story.eyebrow}
          title={wedding.story.title}
        />
      </Reveal>

      <div className="grid gap-10 sm:gap-12">
        <Reveal variant="scale" className="relative mx-auto w-full max-w-[16rem]">
          <VintageFrame>
            <div className="relative aspect-[3/4] overflow-hidden bg-beige-300/40">
              <Image
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=700&q=80"
                alt={`${wedding.couple.partnerOne} & ${wedding.couple.partnerTwo}`}
                fill
                className="object-cover"
                sizes="(max-width: 448px) 80vw, 256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/25 to-transparent" />
            </div>
          </VintageFrame>
          <BotanicalSprig className="absolute -left-6 -top-4 h-28 w-16 -rotate-12 opacity-70" />
          <BotanicalSprig
            flip
            className="absolute -bottom-4 -right-5 h-28 w-16 rotate-12 opacity-70"
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
