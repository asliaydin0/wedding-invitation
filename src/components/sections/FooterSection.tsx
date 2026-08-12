"use client";

import { FloralAccent } from "@/components/decor/FloralAccent";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import type { WeddingData } from "@/config";

type Props = {
  data: WeddingData["footer"];
};

export function FooterSection({ data }: Props) {
  return (
    <footer id="finale" aria-label="Kapanış mesajı">
      <Section className="relative overflow-x-clip pb-[max(7rem,calc(var(--safe-bottom)+5.5rem))] pt-10 text-center">
        <FloralAccent preset="finale" />

        <Reveal variant="fade" intensity="subtle">
          <div className="relative z-20 px-4 py-10 sm:px-6 sm:py-12">
            <Typography variant="eyebrow" tone="gold" className="mb-6">
              {data.eyebrow}
            </Typography>

            <Typography
              variant="script"
              className="mb-2 max-w-full break-words text-[clamp(2.1rem,11vw,3.5rem)] text-burgundy-400 drop-shadow-[0_1px_12px_rgb(21_17_14/0.5)]"
            >
              {data.brideName}
            </Typography>
            <Typography variant="caption" tone="gold" className="mb-2">
              &
            </Typography>
            <Typography
              variant="script"
              className="mb-8 max-w-full break-words text-[clamp(2.1rem,11vw,3.5rem)] text-burgundy-400 drop-shadow-[0_1px_12px_rgb(21_17_14/0.5)]"
            >
              {data.groomName}
            </Typography>

            <Divider className="mb-8" />

            <Reveal variant="fadeUp" intensity="subtle" delay={0.1}>
              <Typography
                variant="body"
                tone="onDarkMuted"
                className="mx-auto mb-8 max-w-xs leading-relaxed"
              >
                {data.message}
              </Typography>
              <Typography variant="caption" tone="onDarkMuted">
                {data.dateDisplay} · {data.time}
              </Typography>

              {data.socialLinks.length > 0 ? (
                <ul className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  {data.socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-sm tracking-wide text-gold-400/80 underline-offset-4 transition hover:text-gold-300 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}

              <Typography
                variant="bodySans"
                tone="onDarkMuted"
                className="mt-10 text-xs tracking-wide"
              >
                {data.note}
              </Typography>
            </Reveal>
          </div>
        </Reveal>
      </Section>
    </footer>
  );
}
