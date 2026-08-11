import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
};

/** Thin double-line ornamental border — elegant, not ornate */
export function OrnamentalBorder({ children, className, inset = true }: Props) {
  return (
    <div
      className={cn(
        "relative rounded-sm border border-gold-400/30",
        inset && "p-3 sm:p-4",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-1.5 rounded-sm border border-gold-400/15" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
