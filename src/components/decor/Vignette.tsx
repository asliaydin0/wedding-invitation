import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  intensity?: "soft" | "medium";
};

/** Soft cinematic vignette over atmosphere backgrounds */
export function Vignette({ className, intensity = "soft" }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1]",
        intensity === "soft" &&
          "bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(21_17_14/0.35)_100%)]",
        intensity === "medium" &&
          "bg-[radial-gradient(ellipse_at_center,transparent_35%,rgb(21_17_14/0.55)_100%)]",
        className,
      )}
    />
  );
}
