import { cn } from "@/lib/utils";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

/** Elegant underline editorial textarea — accessible */
export function Textarea({ label, error, className, id, ...props }: Props) {
  const inputId = id ?? props.name ?? label;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className="flex w-full flex-col gap-2 text-left">
      <label htmlFor={inputId} className="text-label text-ink-muted">
        {label}
      </label>
      <textarea
        id={inputId}
        rows={3}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          "w-full resize-none border-0 border-b bg-transparent px-0 py-2.5 font-serif text-base text-ink outline-none transition",
          "placeholder:text-ink-muted/50 focus:border-burgundy-500",
          error ? "border-burgundy-500/70" : "border-brown-400/35",
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} role="alert" className="font-serif text-xs text-burgundy-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
