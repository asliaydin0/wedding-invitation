"use client";

import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Typography } from "@/components/ui/Typography";
import {
  InvitationSection,
  VintageCard,
} from "@/components/stationery";
import { wedding } from "@/content/wedding";

const cards = [
  {
    icon: CalendarDays,
    label: "Tarih",
    value: wedding.event.dateDisplay,
    hint: wedding.event.dayLabel,
    rotate: "subtle-left" as const,
  },
  {
    icon: Clock3,
    label: "Saat",
    value: wedding.event.timeLabel,
    hint: "Davet başlangıcı",
    rotate: "subtle-right" as const,
  },
  {
    icon: MapPin,
    label: "Mekân",
    value: wedding.venue.name,
    hint: wedding.venue.address,
    rotate: "none" as const,
  },
] as const;

export function DetailsSection() {
  return (
    <InvitationSection
      id="details"
      floral="details"
      eyebrow={wedding.copy.detailsEyebrow}
      title={wedding.copy.detailsTitle}
      compact
    >
      <div className="flex flex-col gap-5">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.label} variant="scale" delay={i * 0.08}>
              <VintageCard rotate={card.rotate} padded="sm" tone="ivory">
                <div className="flex items-start gap-4 text-left">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-gold-500/30 text-burgundy-500">
                    <Icon size={18} strokeWidth={1.4} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <Typography variant="label" tone="muted" className="mb-1.5 block">
                      {card.label}
                    </Typography>
                    <Typography
                      variant="heading"
                      tone="ink"
                      className="text-xl leading-snug"
                    >
                      {card.value}
                    </Typography>
                    <Typography
                      variant="bodySans"
                      tone="muted"
                      className="mt-1 text-sm"
                    >
                      {card.hint}
                    </Typography>
                  </div>
                </div>
              </VintageCard>
            </Reveal>
          );
        })}
      </div>
    </InvitationSection>
  );
}
