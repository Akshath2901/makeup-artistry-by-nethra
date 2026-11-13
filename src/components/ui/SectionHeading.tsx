import type { ReactNode } from "react";
import { SectionMarker } from "@/components/graphics/motifs";

/**
 * Editorial section opening: a numbered label on a fine line that draws
 * in, then a serif heading that rises out of a mask. Used to mark the
 * passage from one section to the next.
 */
export function SectionHeading({
  index,
  label,
  title,
  id,
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <SectionMarker index={index} label={label} />
      <h2 id={id} className="text-h2 mt-6 lg:mt-8" data-reveal="text">
        {title}
      </h2>
    </div>
  );
}
