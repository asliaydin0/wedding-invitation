import { GoldDivider } from "@/components/stationery/GoldDivider";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "diamond" | "line" | "ornament";
};

/** @deprecated Prefer GoldDivider */
export function Divider({ className, variant = "diamond" }: Props) {
  return (
    <GoldDivider
      variant={variant}
      className={cn(className)}
    />
  );
}
