import { cn } from "@/lib/utils";

type Variant = "burgundy" | "paper" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const sizeClass: Record<Size, string> = {
  sm: "px-5 py-2 text-[0.7rem] tracking-[0.18em]",
  md: "px-8 py-3 text-sm tracking-[0.2em]",
  lg: "px-10 py-3.5 text-sm tracking-[0.22em]",
};

function variantClass(variant: Variant) {
  return cn(
    variant === "burgundy" &&
      "border border-burgundy-700/30 bg-burgundy-500 text-ivory-50 shadow-[0_10px_28px_rgb(66_17_28/0.28),inset_0_1px_0_rgb(255_255_255/0.12)] hover:bg-burgundy-400",
    variant === "paper" &&
      "border border-brown-500/20 bg-ivory-50 text-ink shadow-[0_8px_24px_rgb(21_17_14/0.12)] hover:bg-ivory-100",
    variant === "outline" &&
      "border border-gold-500/40 bg-transparent text-gold-500 hover:border-gold-500/60 hover:text-gold-400",
    variant === "ghost" &&
      "border border-ivory-200/20 bg-ivory-50/8 text-ink-on-dark backdrop-blur-sm hover:bg-ivory-50/14",
  );
}

const baseClass =
  "inline-flex items-center justify-center gap-2 font-serif uppercase rounded-full transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

/**
 * Stationery-styled CTA — muted burgundy / antique paper, not glossy UI.
 */
export function VintageButton({
  className,
  variant = "burgundy",
  size = "md",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClass, sizeClass[size], variantClass(variant), className)}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  variant?: Variant;
  size?: Size;
  /** Defaults to safe external tab */
  external?: boolean;
};

/** Vintage button styled as a safe external (or internal) link */
export function VintageLink({
  className,
  variant = "burgundy",
  size = "md",
  children,
  href,
  external = true,
  ...props
}: LinkProps) {
  return (
    <a
      href={href}
      className={cn(baseClass, sizeClass[size], variantClass(variant), className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...props}
    >
      {children}
    </a>
  );
}
