import { LotusDivider } from "@/components/graphics/motifs";

/**
 * The brand divider: hairlines meeting at a small lotus, drawn in once.
 * Kept as a thin alias so existing pages use the new motif unchanged.
 */
export function Ornament({
  reveal = "scroll",
  className = "",
}: {
  /** "scroll" draws as it enters the screen; "enter" draws on load. */
  reveal?: "scroll" | "enter";
  className?: string;
}) {
  return <LotusDivider reveal={reveal} className={className} />;
}
