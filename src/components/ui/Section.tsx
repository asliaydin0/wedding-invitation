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
        "relative mx-auto w-full max-w-invitation px-5 py-16 sm:px-6 md:px-8 md:py-20",
        tone === "dark" && "bg-atmosphere text-ink-on-dark",
        tone === "paper" && "bg-paper text-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}
