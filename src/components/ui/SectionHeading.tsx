import { cn } from "@/lib/utils";
import { Divider } from "@/components/ui/Divider";
import { Typography } from "@/components/ui/Typography";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "onDark" | "ink" | "gold";
  className?: string;
  align?: "center" | "left";
};

/** Shared section heading — eyebrow + title + optional divider */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "onDark",
  className,
  align = "center",
}: Props) {
  const titleTone = tone === "ink" ? "ink" : tone === "gold" ? "gold" : "onDark";
  const subTone = tone === "ink" ? "muted" : "onDarkMuted";

  return (
    <header
      className={cn(
        "relative z-20 mb-10 px-2",
        align === "center" && "text-center",
        className,
      )}
    >
      <Typography variant="eyebrow" tone="gold" className="mb-4">
        {eyebrow}
      </Typography>
      <Typography as="h2" variant="heading" tone={titleTone} className="mb-4">
        {title}
      </Typography>
      <Divider className={align === "center" ? "mb-5" : "mb-5 ml-0 mr-auto"} />
      {subtitle ? (
        <Typography
          variant="body"
          tone={subTone}
          className={cn(align === "center" && "mx-auto max-w-sm")}
        >
          {subtitle}
        </Typography>
      ) : null}
    </header>
  );
}
