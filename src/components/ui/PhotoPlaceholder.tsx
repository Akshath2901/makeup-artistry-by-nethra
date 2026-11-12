/*
 * Phase 2 aspect-ratio system. Class names are written out in full so
 * Tailwind can find them.
 */
const RATIOS = {
  "4:5": "aspect-[4/5]",
  "2:3": "aspect-[2/3]",
  "1:1": "aspect-square",
  "3:2": "aspect-[3/2]",
  "16:9": "aspect-video",
} as const;

const RATIOS_SM = {
  "4:5": "sm:aspect-[4/5]",
  "2:3": "sm:aspect-[2/3]",
  "1:1": "sm:aspect-square",
  "3:2": "sm:aspect-[3/2]",
  "16:9": "sm:aspect-video",
} as const;

const RATIOS_LG = {
  "4:5": "lg:aspect-[4/5]",
  "2:3": "lg:aspect-[2/3]",
  "1:1": "lg:aspect-square",
  "3:2": "lg:aspect-[3/2]",
  "16:9": "lg:aspect-video",
} as const;

export type PhotoRatio = keyof typeof RATIOS;

/** Responsive aspect-ratio classes: phone first, then tablet and desktop. */
export function ratioClasses(ratio: PhotoRatio, ratioSm?: PhotoRatio, ratioLg?: PhotoRatio) {
  return [RATIOS[ratio], ratioSm && RATIOS_SM[ratioSm], ratioLg && RATIOS_LG[ratioLg]]
    .filter(Boolean)
    .join(" ");
}

/**
 * Stand-in for a client photograph that has not arrived yet. Space is
 * reserved with the Phase 2 ratios, so nothing shifts when the real image
 * replaces it. The label is searchable: "[CLIENT PHOTO: …]". Optional
 * composition and treatment notes tell the client what to supply.
 */
export function PhotoPlaceholder({
  ratio,
  ratioSm,
  ratioLg,
  label,
  composition,
  treatment,
  reveal,
  className = "",
}: {
  ratio: PhotoRatio;
  ratioSm?: PhotoRatio;
  ratioLg?: PhotoRatio;
  label: string;
  composition?: string;
  treatment?: string;
  /** "scroll" reveals as it enters the screen; "enter" reveals on load. */
  reveal?: "scroll" | "enter";
  className?: string;
}) {
  const shown = [ratio, ratioSm, ratioLg].filter((r, i, all) => r && all.indexOf(r) === i).join(" → ");
  const text = `[CLIENT PHOTO: ${label}, ${shown}]`;
  return (
    <div
      className={`overflow-hidden ${ratioClasses(ratio, ratioSm, ratioLg)} ${reveal === "enter" ? "enter-image" : ""} ${className}`}
      data-reveal={reveal === "scroll" ? "image" : undefined}
    >
      <div
        role="img"
        aria-label={text}
        className="flex h-full w-full flex-col justify-end gap-1 overflow-hidden bg-rule p-3 sm:p-4"
      >
        <span className="text-caption line-clamp-3 text-ink">{text}</span>
        {composition && (
          <span className="text-caption line-clamp-3 text-muted max-sm:hidden" aria-hidden="true">
            {composition}
          </span>
        )}
        {treatment && (
          <span className="text-caption line-clamp-2 text-muted max-lg:hidden" aria-hidden="true">
            {treatment}
          </span>
        )}
      </div>
    </div>
  );
}
