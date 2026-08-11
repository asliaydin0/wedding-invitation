"use client";

import { Atmosphere } from "@/components/decor/Atmosphere";
import { InvitationExperience } from "@/components/layout/InvitationExperience";
import { InvitationShell } from "@/components/layout/InvitationShell";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { DateTimeSection } from "@/components/sections/DateTimeSection";
import { DetailsSection } from "@/components/sections/DetailsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RsvpSection } from "@/components/sections/RsvpSection";
import { StorySection } from "@/components/sections/StorySection";
import { VenueSection } from "@/components/sections/VenueSection";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { useInvitation } from "@/hooks/useInvitation";
import { wedding } from "@/content/wedding";

function OpenedInvitation() {
  const { isOpen } = useInvitation();

  return (
    <Atmosphere className="min-h-dvh" withVignette={false} withGrain={false}>
      <InvitationShell>
        {isOpen && wedding.audio.enabled ? <MusicToggle /> : null}
        <HeroSection />
        <StorySection />
        <DetailsSection />
        <DateTimeSection />
        <VenueSection />
        <CountdownSection />
        <GallerySection />
        <RsvpSection />
        <FooterSection />
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
