import { OrnamentalBorder } from "@/components/decor/OrnamentalBorder";

/** @deprecated Prefer OrnamentalBorder — kept as alias during migration */
export function OrnateFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <OrnamentalBorder className={className}>{children}</OrnamentalBorder>;
}
