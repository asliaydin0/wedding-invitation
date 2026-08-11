import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

/** Warm ivory paper surface with soft paper wash + grain */
export function PaperTexture({ className, children }: Props) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-paper", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 20%, rgb(255 255 255 / 0.5), transparent 55%), radial-gradient(ellipse at 70% 80%, rgb(196 167 106 / 0.1), transparent 50%)",
        }}
      />
      <div aria-hidden className="texture-grain absolute inset-0" />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}
