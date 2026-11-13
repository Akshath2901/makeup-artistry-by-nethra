import { categories } from "@/content/portfolio";

/**
 * A typographic interlude: the occasions, set at statement scale, drift
 * sideways in opposite directions as the page scrolls (scrubbed, never
 * looping). Decorative, so hidden from screen readers; the same words are
 * real links in the portfolio. Clipped, so it never causes sideways scroll.
 */
export function OccasionsBand() {
  const words = categories.map((c) => c.label);
  const line = (offset: number) =>
    [...words.slice(offset), ...words.slice(0, offset), ...words].map((word, i) => (
      <span key={`${word}-${i}`} className="inline-flex items-center">
        <span className={i % 2 === 0 ? "italic" : ""}>{word}</span>
        <svg viewBox="0 0 12 12" className="mx-[0.35em] inline-block h-[0.22em] w-[0.22em] text-muted" aria-hidden="true">
          <path d="M6 0 12 6 6 12 0 6Z" fill="currentColor" />
        </svg>
      </span>
    ));

  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-rule py-10 lg:py-16">
      <div className="text-statement whitespace-nowrap" data-scrub="x">
        {line(0)}
      </div>
      <div className="text-statement mt-2 whitespace-nowrap text-muted lg:mt-4" data-scrub="x" data-direction="right">
        {line(2)}
      </div>
    </section>
  );
}
