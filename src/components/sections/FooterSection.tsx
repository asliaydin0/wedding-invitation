"use client";

import { BotanicalCluster } from "@/components/decor/BotanicalCluster";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { wedding } from "@/content/wedding";

export function FooterSection() {
  return (
    <footer id="finale" aria-label="Kapanış mesajı">
      <Section className="overflow-hidden pb-28 pt-10 text-center">
        <Reveal variant="fade">
          <div className="relative px-2 py-12">
            <BotanicalCluster
              className="absolute -left-8 top-0 h-40 w-32 opacity-60"
              tone="gold"
            />
            <BotanicalCluster
              className="absolute -right-8 bottom-0 h-40 w-32 rotate-180 opacity-60"
              tone="gold"
            />

            <Typography variant="eyebrow" tone="gold" className="mb-6">
              {wedding.copy.footerEyebrow}
            </Typography>

            <Typography
              variant="script"
              className="mb-2 text-[clamp(2.4rem,12vw,3.5rem)] text-burgundy-400"
            >
              {wedding.couple.partnerOne}
            </Typography>
            <Typography variant="caption" tone="gold" className="mb-2">
              &
            </Typography>
            <Typography
              variant="script"
              className="mb-8 text-[clamp(2.4rem,12vw,3.5rem)] text-burgundy-400"
            >
              {wedding.couple.partnerTwo}
            </Typography>

            <Divider className="mb-8" />

            <Reveal variant="blur" delay={0.1}>
              <Typography
                variant="body"
                tone="onDarkMuted"
                className="mx-auto mb-8 max-w-xs leading-relaxed"
              >
                {wedding.copy.footerMessage}
              </Typography>
              <Typography variant="caption" tone="onDarkMuted">
                {wedding.event.dateDisplay} · {wedding.event.timeLabel}
              </Typography>
              <Typography
                variant="bodySans"
                tone="onDarkMuted"
                className="mt-10 text-xs tracking-wide"
              >
                {wedding.copy.footerNote}
              </Typography>
            </Reveal>
          </div>
        </Reveal>
      </Section>
    </footer>
  );
}
