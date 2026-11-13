/**
 * The brand's graphic language: original SVG motifs drawn from royal
 * Indian architecture and botanical linework, set in fine strokes so
 * they stay contemporary. Every stroke uses pathLength="1" so the motion
 * system (data-reveal="svg", or a GSAP timeline) can draw it in.
 *
 * All motifs are decorative: aria-hidden, never carrying meaning.
 */

/*
 * The palace arch: a pointed, gently cusped Mughal-style arch.
 * The same outline (0–1 units) is used to mask photographs and to draw
 * frames, so every arch on the site shares one silhouette.
 */
export const ARCH_PATH_UNIT =
  "M0,1 V0.37 C0,0.18 0.19,0.085 0.37,0.045 C0.44,0.03 0.475,0.018 0.5,0 C0.525,0.018 0.56,0.03 0.63,0.045 C0.81,0.085 1,0.18 1,0.37 V1 Z";

/** Inner arch line in 0–100 units, for frames drawn over images. */
const ARCH_INNER_100 =
  "M4,100 V38.5 C4,21.5 21.5,13 38.5,9.2 C45,7.8 48,6.8 50,5.2 C52,6.8 55,7.8 61.5,9.2 C78.5,13 96,21.5 96,38.5 V100";

/** Rendered once in the layout: the clip path used by .arch-mask. */
export function ArchClipDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="absolute">
      <defs>
        <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
          <path d={ARCH_PATH_UNIT} />
        </clipPath>
      </defs>
    </svg>
  );
}

/** A fine double arch line laid over an arch-masked photograph. */
export function ArchOutline({ tone = "paper", className = "" }: { tone?: "paper" | "rule"; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-0 h-full w-full ${tone === "paper" ? "text-paper/70" : "text-rule"} ${className}`}
      data-reveal="svg"
    >
      <path d={ARCH_INNER_100} pathLength={1} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Lotus divider: two hairlines meeting at a small lotus. */
export function LotusDivider({
  reveal = "scroll",
  className = "",
}: {
  reveal?: "scroll" | "enter" | "none";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`block h-7 w-60 max-w-full text-muted ${reveal === "enter" ? "enter-svg" : ""} ${className}`}
      data-reveal={reveal === "scroll" ? "svg" : undefined}
    >
      <path pathLength={1} d="M0 19H92" stroke="var(--color-rule)" vectorEffect="non-scaling-stroke" />
      <circle pathLength={1} cx="98" cy="19" r="1.5" />
      {/* Lotus: three petals on a shallow cup */}
      <path pathLength={1} d="M120 4C114.5 9.5 114.5 16 120 21C125.5 16 125.5 9.5 120 4Z" />
      <path pathLength={1} d="M120 21C112 20.5 106.5 15.5 105 9.5C111.5 10.5 117 14.5 120 21Z" />
      <path pathLength={1} d="M120 21C128 20.5 133.5 15.5 135 9.5C128.5 10.5 123 14.5 120 21Z" />
      <path pathLength={1} d="M107 22.5Q120 27 133 22.5" />
      <circle pathLength={1} cx="142" cy="19" r="1.5" />
      <path pathLength={1} d="M148 19H240" stroke="var(--color-rule)" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Small lotus bud used as a section mark and bullet. */
export function LotusBud({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`inline-block h-4 w-4 shrink-0 ${className}`}
    >
      <path d="M8 1.5C5.5 4.5 5.5 9 8 13C10.5 9 10.5 4.5 8 1.5Z" />
      <path d="M8 13C4.5 12.5 2 10 1.5 7C4.5 7.5 7 9.5 8 13Z" />
      <path d="M8 13C11.5 12.5 14 10 14.5 7C11.5 7.5 9 9.5 8 13Z" />
    </svg>
  );
}

/**
 * Corner flourish: a rounded frame corner with a curling tendril and two
 * leaves. Drawn for the top-left; mirror with the `corner` prop.
 */
export function CornerFlourish({
  corner = "tl",
  className = "",
  draw = true,
}: {
  corner?: "tl" | "tr" | "bl" | "br";
  className?: string;
  /** Mark strokes for drawing in (data-flourish). */
  draw?: boolean;
}) {
  const flip = { tl: "", tr: "-scale-x-100", bl: "-scale-y-100", br: "-scale-x-100 -scale-y-100" }[corner];
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`${flip} ${className}`}
      data-flourish={draw ? "" : undefined}
    >
      <path pathLength={1} d="M2 118V22Q2 2 22 2H118" />
      <path pathLength={1} d="M10 118V28Q10 10 28 10H118" />
      {/* tendril */}
      <path pathLength={1} d="M10 46C24 46 34 38 34 26C34 18 28 14 22 16C16 18 16 26 22 28" />
      <path pathLength={1} d="M46 10C46 24 38 34 26 34" />
      {/* leaves */}
      <path pathLength={1} d="M34 26C44 21 54 24 59 33C48 36 39 33 34 26Z" />
      <path pathLength={1} d="M26 34C21 44 24 54 33 59C36 48 33 39 26 34Z" />
      <circle pathLength={1} cx="44" cy="44" r="2" />
      <circle pathLength={1} cx="66" cy="10" r="1.5" />
      <circle pathLength={1} cx="10" cy="66" r="1.5" />
    </svg>
  );
}

/** Section mark: lotus bud, italic numeral, a drawn hairline and a label. */
export function SectionMarker({ index, label, className = "" }: { index: string; label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-muted ${className}`}>
      <span className="flex items-center gap-2" data-reveal="rise">
        <LotusBud />
        <span className="font-serif text-[1.0625rem] italic leading-none tabular-nums">{index}</span>
      </span>
      <span className="fine-line flex-1" data-reveal="line" aria-hidden="true" />
      <span className="text-eyebrow" data-reveal="rise">
        {label}
      </span>
    </div>
  );
}

/**
 * A large, faint arch drawn behind a section: an editorial backdrop that
 * echoes the welcome. Place inside a `relative overflow-hidden` parent.
 */
export function BackdropArch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 560"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute text-rule ${className}`}
      data-reveal="svg"
    >
      <path pathLength={1} d="M20 560V214C20 120 100 70 160 48C180 40 193 30 200 12C207 30 220 40 240 48C300 70 380 120 380 214V560" vectorEffect="non-scaling-stroke" />
      <path pathLength={1} d="M40 560V220C40 134 112 90 166 70C184 63 195 55 200 42C205 55 216 63 234 70C288 90 360 134 360 220V560" vectorEffect="non-scaling-stroke" />
      <circle pathLength={1} cx="200" cy="6" r="4" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
