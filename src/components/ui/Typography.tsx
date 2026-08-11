import { cn } from "@/lib/utils";

type Variant =
  | "script"
  | "display"
  | "heading"
  | "eyebrow"
  | "body"
  | "bodySans"
  | "caption"
  | "label";

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  variant?: Variant;
  tone?: "default" | "muted" | "gold" | "burgundy" | "onDark" | "onDarkMuted" | "ink";
  className?: string;
};

const variantClass: Record<Variant, string> = {
  script: "text-display-script",
  display: "text-display-serif",
  heading: "text-heading",
  eyebrow: "text-eyebrow",
  body: "text-body",
  bodySans: "text-body-sans",
  caption: "text-caption",
  label: "text-label",
};

const toneClass = {
  default: "text-ink",
  muted: "text-ink-muted",
  gold: "text-accent-gold",
  burgundy: "text-accent",
  onDark: "text-ink-on-dark",
  onDarkMuted: "text-ink-on-dark-muted",
  ink: "text-ink",
} as const;

export function Typography({
  children,
  as: Tag = "p",
  variant = "body",
  tone = "default",
  className,
}: Props) {
  return (
    <Tag className={cn(variantClass[variant], toneClass[tone], className)}>
      {children}
    </Tag>
  );
}
