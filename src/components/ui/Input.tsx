import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

/** Underline-style editorial input */
export function Input({ label, hint, className, id, ...props }: Props) {
  const inputId = id ?? props.name;

  return (
    <label className="flex w-full flex-col gap-2 text-left">
      {label ? (
        <span className="text-label text-ink-muted">{label}</span>
      ) : null}
      <input
        id={inputId}
        className={cn(
          "w-full border-0 border-b border-brown-400/35 bg-transparent px-0 py-2.5 font-serif text-base text-ink outline-none transition placeholder:text-ink-muted/55 focus:border-burgundy-500",
          className,
        )}
        {...props}
      />
      {hint ? <span className="text-body-sans text-xs text-ink-muted">{hint}</span> : null}
    </label>
  );
}
