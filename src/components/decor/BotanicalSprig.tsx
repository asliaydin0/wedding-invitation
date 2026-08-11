import {
  SvgSprig,
  type BotanicalTone,
} from "@/components/decor/botanicals/svg";

type Props = {
  className?: string;
  embossed?: boolean;
  flip?: boolean;
  tone?: BotanicalTone;
};

/** @deprecated Prefer FloralMotif motif="sprig" — kept for SealGate compatibility */
export function BotanicalSprig({
  className,
  embossed = false,
  flip = false,
  tone,
}: Props) {
  return (
    <SvgSprig
      className={className}
      flip={flip}
      tone={embossed ? "embossed" : (tone ?? "gold")}
    />
  );
}
