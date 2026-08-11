import { cn } from "@/lib/utils";
import { FloralAccent } from "@/components/decor/FloralAccent";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PaperTexture } from "@/components/stationery/PaperTexture";

type FloralPreset =
  | "hero"
  | "story"
  | "details"
  | "datetime"
  | "venue"
  | "countdown"
  | "gallery"
  | "rsvp"
  | "finale"
  | "none";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  surface?: "atmosphere" | "paper" | "transparent";
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  headingTone?: "onDark" | "ink" | "gold";
  floral?: FloralPreset;
  revealHeading?: boolean;
  compact?: boolean;
};

/**
 * Invitation chapter shell — consistent padding, optional heading + florals.
 */
export function InvitationSection({
  id,
  children,
  className,
  surface = "transparent",
  eyebrow,
  title,
  subtitle,
  headingTone = "onDark",
  floral = "none",
  revealHeading = true,
  compact = false,
}: Props) {
  const heading =
    eyebrow && title ? (
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        tone={headingTone}
      />
    ) : null;

  const inner = (
    <>
      {floral !== "none" ? <FloralAccent preset={floral} /> : null}
      <div className="relative z-[1]">
        {heading ? (
          revealHeading ? (
            <Reveal variant="fadeUp" intensity="subtle">
              {heading}
            </Reveal>
          ) : (
            heading
          )
        ) : null}
        {children}
      </div>
    </>
  );

  const pad = compact
    ? "px-5 py-12 sm:px-6 md:px-8 md:py-14"
    : "px-5 py-16 sm:px-6 md:px-8 md:py-20";

  if (surface === "paper") {
    return (
      <section id={id} className={cn("relative mx-auto w-full max-w-invitation overflow-hidden", className)}>
        <PaperTexture tone="ivory" className={cn(pad, "text-ink")}>
          {inner}
        </PaperTexture>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-invitation overflow-hidden",
        pad,
        surface === "atmosphere" && "bg-atmosphere text-ink-on-dark",
        surface === "transparent" && "text-ink-on-dark",
        className,
      )}
    >
      {inner}
    </section>
  );
}
