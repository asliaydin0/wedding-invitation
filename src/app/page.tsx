"use client";

import { Atmosphere } from "@/components/decor/Atmosphere";
import { InvitationExperience } from "@/components/layout/InvitationExperience";
import { InvitationShell } from "@/components/layout/InvitationShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { useInvitation } from "@/hooks/useInvitation";
import { wedding } from "@/content/wedding";

function OpenedInvitation() {
  const { isOpen } = useInvitation();

  return (
    <Atmosphere className="min-h-dvh" withVignette={false} withGrain={false}>
      <InvitationShell>
        {isOpen ? <MusicToggle /> : null}
        <HeroSection />

        {/* Placeholder until next sections are built */}
        <Section id="after-hero" className="pb-28 pt-8 text-center">
          <Typography variant="eyebrow" tone="gold" className="mb-4">
            {wedding.copy.countdownTitle}
          </Typography>
          <Typography
            variant="bodySans"
            tone="onDarkMuted"
            className="mx-auto max-w-xs"
          >
            {wedding.copy.countdownSubtitle}
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
