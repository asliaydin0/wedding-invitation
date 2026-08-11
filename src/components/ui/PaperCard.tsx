import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  elevated?: boolean;
};

/** Soft paper card surface — for RSVP, invite copy, forms */
export function PaperCard({
  children,
  className,
  padded = true,
  elevated = true,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-paper text-ink",
        elevated && "shadow-lift",
        padded && "px-6 py-8 sm:px-8 sm:py-10",
        className,
      )}
    >
      <div aria-hidden className="texture-grain absolute inset-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
