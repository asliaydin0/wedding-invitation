"use client";

import { Atmosphere } from "@/components/decor/Atmosphere";
import { FloralCorner } from "@/components/decor/FloralCorner";
import { InvitationExperience } from "@/components/layout/InvitationExperience";
import { InvitationShell } from "@/components/layout/InvitationShell";
import { Divider } from "@/components/ui/Divider";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { useInvitation } from "@/hooks/useInvitation";
import { wedding } from "@/content/wedding";

function OpenedInvitation() {
  const { isOpen } = useInvitation();

  return (
    <Atmosphere className="min-h-dvh">
      <InvitationShell>
        {isOpen ? <MusicToggle /> : null}

        <Section className="flex min-h-dvh flex-col items-center justify-center text-center">
          <FloralCorner position="tl" className="opacity-70" />
          <FloralCorner position="br" className="opacity-70" />

          <Typography variant="eyebrow" tone="gold" className="mb-6">
            {wedding.copy.heroEyebrow}
          </Typography>

          <Typography as="h1" variant="script" className="mb-1 text-burgundy-400">
            {wedding.couple.partnerOne}
          </Typography>
          <Typography variant="caption" tone="onDarkMuted" className="mb-1">
            &
          </Typography>
          <Typography as="p" variant="script" className="mb-8 text-burgundy-400">
            {wedding.couple.partnerTwo}
          </Typography>

          <Divider className="mb-6" />

          <Typography variant="caption" tone="onDarkMuted" className="mb-3">
            {wedding.event.dateLabel}
          </Typography>
          <Typography variant="body" tone="onDarkMuted" className="mx-auto max-w-xs">
            {wedding.copy.heroBody}
          </Typography>
        </Section>

        {/* Extra scroll room so open state is clearly scrollable */}
        <Section className="pb-24 pt-4 text-center">
          <Typography variant="eyebrow" tone="gold" className="mb-4">
            {wedding.copy.countdownTitle}
          </Typography>
          <Typography variant="bodySans" tone="onDarkMuted" className="mx-auto max-w-xs">
            {wedding.copy.countdownSubtitle}
          </Typography>
          <Typography
            variant="display"
            tone="burgundy"
            className="mt-8 text-burgundy-400"
          >
            {wedding.event.dateLabel}
          </Typography>
          <div className="mx-auto mt-16 h-px w-16 bg-gold-400/30" />
          <Typography variant="bodySans" tone="onDarkMuted" className="mt-8 text-xs">
            {wedding.copy.footerNote}
          </Typography>
        </Section>
      </InvitationShell>
    </Atmosphere>
  );
}

export default function HomePage() {
  return (
    <InvitationExperience>
      <OpenedInvitation />
    </InvitationExperience>
  );
}
