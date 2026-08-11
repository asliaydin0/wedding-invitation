import { cn } from "@/lib/utils";
import { BotanicalSprig } from "@/components/decor/BotanicalSprig";

type Position = "tl" | "tr" | "bl" | "br";

type Props = {
  position?: Position;
  className?: string;
  embossed?: boolean;
};

const positionClass: Record<Position, string> = {
  tl: "left-0 top-0 origin-top-left",
  tr: "right-0 top-0 origin-top-right -scale-x-100",
  bl: "bottom-0 left-0 origin-bottom-left rotate-180 -scale-x-100",
  br: "bottom-0 right-0 origin-bottom-right rotate-180",
};

/** Corner botanical placement helper */
export function FloralCorner({
  position = "tl",
  className,
  embossed = false,
}: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-[2] h-28 w-20 sm:h-36 sm:w-28",
        positionClass[position],
        className,
      )}
    >
      <BotanicalSprig embossed={embossed} className="h-full w-full" />
    </div>
  );
}
