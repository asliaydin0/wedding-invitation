import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "px-5 py-2 text-xs tracking-[0.18em]",
  md: "px-8 py-3 text-sm tracking-[0.2em]",
  lg: "px-10 py-3.5 text-sm tracking-[0.22em]",
} as const;

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-serif uppercase transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        sizeClass[size],
        variant === "primary" &&
          "rounded-full bg-accent text-ivory-50 shadow-lift hover:bg-accent-hover",
        variant === "secondary" &&
          "rounded-full border border-beige-300/60 bg-ivory-50 text-ink shadow-soft hover:bg-ivory-100",
        variant === "ghost" &&
          "rounded-full border border-ivory-200/25 bg-ivory-50/8 text-ink-on-dark backdrop-blur-sm hover:bg-ivory-50/14",
        variant === "gold" &&
          "rounded-full border border-gold-400/40 bg-transparent text-accent-gold hover:border-gold-300 hover:text-gold-300",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
