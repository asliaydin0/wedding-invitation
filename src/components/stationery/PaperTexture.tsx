import { cn } from "@/lib/utils";

type Tone = "ivory" | "cream" | "parchment" | "dark";
type Intensity = "soft" | "medium";

type Props = {
  className?: string;
  children?: React.ReactNode;
  tone?: Tone;
  /** Grain / noise strength */
  grain?: Intensity;
  /** Soft fiber wash overlay */
  wash?: boolean;
};

const toneClass: Record<Tone, string> = {
  ivory: "bg-ivory-100",
  cream: "bg-ivory-50",
  parchment: "bg-beige-200",
  dark: "bg-espresso-900",
};

/**
 * Physical paper surface — warm wash + subtle noise.
 * Use as a layer or as a wrapping surface.
 */
export function PaperTexture({
  className,
  children,
  tone = "ivory",
  grain = "soft",
  wash = true,
}: Props) {
  return (
    <div className={cn("relative isolate overflow-hidden", toneClass[tone], className)}>
      {wash ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              tone === "dark"
                ? "radial-gradient(ellipse at 30% 20%, rgb(110 90 70 / 0.25), transparent 55%), radial-gradient(ellipse at 80% 85%, rgb(21 17 14 / 0.55), transparent 50%)"
                : "radial-gradient(ellipse at 28% 18%, rgb(255 255 255 / 0.55), transparent 52%), radial-gradient(ellipse at 78% 88%, rgb(176 143 82 / 0.1), transparent 48%), linear-gradient(165deg, rgb(250 247 242 / 0.5), transparent 60%)",
          }}
        />
      ) : null}

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          tone === "dark" ? "texture-grain-light" : "texture-grain",
          grain === "medium" && "opacity-[1.35]",
        )}
      />

      {children !== undefined ? (
        <div className="relative z-10">{children}</div>
      ) : null}
    </div>
  );
}
