import { cn } from "@/lib/utils";
import { GrainOverlay } from "@/components/decor/GrainOverlay";
import { Vignette } from "@/components/decor/Vignette";

type Props = {
  className?: string;
  children?: React.ReactNode;
  withVignette?: boolean;
  withGrain?: boolean;
};

/** Full atmosphere stack: espresso wash + grain + vignette */
export function Atmosphere({
  className,
  children,
  withVignette = true,
  withGrain = true,
}: Props) {
  return (
    <div className={cn("relative isolate bg-atmosphere", className)}>
      {withGrain ? <GrainOverlay /> : null}
      {withVignette ? <Vignette /> : null}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
