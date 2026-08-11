"use client";

import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { PaperCard } from "@/components/ui/PaperCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { wedding } from "@/content/wedding";

const cards = [
  {
    icon: CalendarDays,
    label: "Tarih",
    value: wedding.event.dateDisplay,
    hint: wedding.event.dayLabel,
  },
  {
    icon: Clock3,
    label: "Saat",
    value: wedding.event.timeLabel,
    hint: "Davet başlangıcı",
  },
  {
    icon: MapPin,
    label: "Mekân",
    value: wedding.venue.name,
    hint: wedding.venue.address,
  },
] as const;

export function DetailsSection() {
  return (
    <Section id="details" className="pt-8">
      <Reveal variant="fadeUp">
        <SectionHeading
          eyebrow={wedding.copy.detailsEyebrow}
          title={wedding.copy.detailsTitle}
        />
      </Reveal>

      <div className="flex flex-col gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.label} variant="scale" delay={i * 0.08}>
              <PaperCard className="!px-5 !py-6" elevated>
                <div className="flex items-start gap-4 text-left">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-gold-400/35 text-burgundy-500">
                    <Icon size={18} strokeWidth={1.4} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <Typography variant="label" tone="muted" className="mb-1.5 block">
                      {card.label}
                    </Typography>
                    <Typography variant="heading" tone="ink" className="text-xl leading-snug">
                      {card.value}
                    </Typography>
                    <Typography variant="bodySans" tone="muted" className="mt-1 text-sm">
                      {card.hint}
                    </Typography>
                  </div>
                </div>
              </PaperCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
