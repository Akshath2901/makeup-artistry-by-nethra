import type { ReactNode } from "react";

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
      <div className="flex items-center gap-4">
        <span className="text-caption text-muted tabular-nums" data-reveal="rise">
          {index}
        </span>
        <span className="fine-line flex-1" data-reveal="line" aria-hidden="true" />
        <span className="text-caption text-muted" data-reveal="rise">
          {label}
        </span>
      </div>
      <h2 id={id} className="text-h2 mt-6 lg:mt-8" data-reveal="text">
        {title}
      </h2>
    </div>
  );
}
