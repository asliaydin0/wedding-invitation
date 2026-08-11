import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

/** Elegant underline editorial input — accessible */
export function Input({
  label,
  hint,
  error,
  className,
  id,
  ...props
}: Props) {
  const inputId = id ?? props.name ?? label;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex w-full flex-col gap-2 text-left">
      <label htmlFor={inputId} className="text-label text-ink-muted">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "w-full border-0 border-b bg-transparent px-0 py-2.5 font-serif text-base text-ink outline-none transition",
          "placeholder:text-ink-muted/50 focus:border-burgundy-500",
          error ? "border-burgundy-500/70" : "border-brown-400/35",
          className,
        )}
        {...props}
      />
      {hint && !error ? (
        <p id={hintId} className="text-body-sans text-xs text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="font-serif text-xs text-burgundy-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
