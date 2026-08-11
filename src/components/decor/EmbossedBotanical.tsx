import { FloralMotif } from "@/components/decor/FloralMotif";

type Props = {
  className?: string;
};

/** Tone-on-tone embossed botanical for gatefold / parchment panels */
export function EmbossedBotanical({ className }: Props) {
  return (
    <FloralMotif
      motif="sprig"
      tone="embossed"
      appear={false}
      motion="none"
      className={className ?? "h-40 w-28 opacity-90 sm:h-52 sm:w-36"}
    />
  );
}
