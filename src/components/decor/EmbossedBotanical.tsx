import { cn } from "@/lib/utils";
import { BotanicalSprig } from "@/components/decor/BotanicalSprig";

type Props = {
  className?: string;
};

/** Tone-on-tone embossed botanical for gatefold / parchment panels */
export function EmbossedBotanical({ className }: Props) {
  return (
    <BotanicalSprig
      embossed
      className={cn("h-40 w-28 opacity-90 sm:h-52 sm:w-36", className)}
    />
  );
}
