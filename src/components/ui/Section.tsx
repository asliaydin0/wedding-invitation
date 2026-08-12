import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "paper" | "transparent";
};

/** Mobile-first section shell within invitation column */
export function Section({
  id,
  children,
  className,
  tone = "transparent",
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-invitation overflow-x-clip px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20",
        tone === "dark" && "bg-atmosphere text-ink-on-dark",
        tone === "paper" && "bg-paper text-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}
