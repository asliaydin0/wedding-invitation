import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  tone?: "dark" | "light";
};

/** Subtle film grain — keep opacity very low */
export function GrainOverlay({ className, tone = "dark" }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1]",
        tone === "dark" ? "texture-grain" : "texture-grain-light",
        className,
      )}
    />
  );
}
