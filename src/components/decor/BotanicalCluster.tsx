import { SvgCluster, type BotanicalTone } from "@/components/decor/botanicals/svg";

type Props = {
  className?: string;
  tone?: BotanicalTone;
  flip?: boolean;
};

/** @deprecated Prefer FloralMotif motif="cluster" */
export function BotanicalCluster({ className, tone = "gold", flip }: Props) {
  return <SvgCluster className={className} tone={tone} flip={flip} />;
}
