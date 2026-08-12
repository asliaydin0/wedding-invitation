"use client";

import { FloralAccent } from "@/components/decor/FloralAccent";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { wedding } from "@/content/wedding";

export function FooterSection() {
  return (
    <footer id="finale" aria-label="Kapanış mesajı">
      <Section className="relative overflow-x-clip pb-[max(7rem,calc(var(--safe-bottom)+5.5rem))] pt-10 text-center">
        <FloralAccent preset="finale" />

        <Reveal variant="fade" intensity="subtle">
          <div className="relative z-[1] px-1 py-10 sm:px-2 sm:py-12">
            <Typography variant="eyebrow" tone="gold" className="mb-6">
              {wedding.copy.footerEyebrow}
            </Typography>

            <Typography
              variant="script"
              className="mb-2 max-w-full break-words text-[clamp(2.1rem,11vw,3.5rem)] text-burgundy-400"
            >
              {wedding.couple.partnerOne}
            </Typography>
            <Typography variant="caption" tone="gold" className="mb-2">
              &
            </Typography>
            <Typography
              variant="script"
              className="mb-8 max-w-full break-words text-[clamp(2.1rem,11vw,3.5rem)] text-burgundy-400"
            >
              {wedding.couple.partnerTwo}
            </Typography>

            <Divider className="mb-8" />

            <Reveal variant="fadeUp" intensity="subtle" delay={0.1}>
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
