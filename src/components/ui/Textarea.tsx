import { cn } from "@/lib/utils";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export function Textarea({ label, className, id, ...props }: Props) {
  const inputId = id ?? props.name;

  return (
    <label className="flex w-full flex-col gap-2 text-left">
      {label ? <span className="text-label text-ink-muted">{label}</span> : null}
      <textarea
        id={inputId}
        rows={3}
        className={cn(
          "w-full resize-none border-0 border-b border-brown-400/35 bg-transparent px-0 py-2.5 font-serif text-base text-ink outline-none transition placeholder:text-ink-muted/55 focus:border-burgundy-500",
          className,
        )}
        {...props}
      />
    </label>
  );
}
