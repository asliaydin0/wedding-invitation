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
import { weddingData } from "@/config";

function OpenedInvitation() {
  return (
    <Atmosphere
      className="min-h-screen-mobile overflow-x-clip"
      withVignette={false}
      withGrain={false}
    >
      <InvitationShell>
        <HeroSection data={weddingData.hero} />
        <StorySection data={weddingData.story} />
        <DetailsSection data={weddingData.details} />
        <DateTimeSection data={weddingData.dateTime} />
        <VenueSection data={weddingData.venue} />
        <CountdownSection data={weddingData.countdown} />
        <GallerySection data={weddingData.gallery} />
        {weddingData.rsvp.enabled ? (
          <RsvpSection data={weddingData.rsvp} />
        ) : null}
        <FooterSection data={weddingData.footer} />
      </InvitationShell>
    </Atmosphere>
  );
}

export default function HomePage() {
  return (
    <InvitationExperience data={weddingData}>
      <OpenedInvitation />
    </InvitationExperience>
  );
}
