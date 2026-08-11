import { VintageCard } from "@/components/stationery/VintageCard";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  elevated?: boolean;
};

/** @deprecated Prefer VintageCard — thin wrapper for compatibility */
export function PaperCard({
  children,
  className,
  padded = true,
  elevated = true,
}: Props) {
  return (
    <VintageCard
      padded={padded}
      elevated={elevated}
      framed
      className={cn(className)}
    >
      {children}
    </VintageCard>
  );
}
