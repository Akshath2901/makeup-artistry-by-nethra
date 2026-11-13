/**
 * The single place GSAP and its plugins are imported and registered.
 * Import { gsap, ScrollTrigger, SplitText, Flip } from here, never from
 * "gsap" directly, so plugins are registered exactly once.
 *
 * GSAP 3.15.1, Standard "no charge" licence (all plugins included):
 * https://gsap.com/standard-license
 */
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let registered = false;

if (typeof window !== "undefined" && !registered) {
  gsap.registerPlugin(ScrollTrigger, SplitText, Flip);
  gsap.defaults({ ease: "power3.out", duration: 1 });
  registered = true;
}

/** Shared easing language (matches the CSS motion tokens). */
export const EASE = {
  /** Arrivals: quick start, long gentle settle. */
  editorial: "expo.out",
  /** Curtains and masks: symmetrical, deliberate. */
  curtain: "power4.inOut",
  /** Small UI movement. */
  soft: "power2.out",
} as const;

/** Media queries used with gsap.matchMedia(). */
export const MQ = {
  /** Any animation at all. */
  motion: "(prefers-reduced-motion: no-preference)",
  /** Desktop-only extras such as pinned sections. */
  desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
  /** Phones and tablets: lighter versions. */
  compact: "(max-width: 1023.98px) and (prefers-reduced-motion: no-preference)",
} as const;

/** Reads a stagger delay set in markup as style={{ "--delay": "120ms" }}. */
export function delayOf(el: Element): number {
  const raw = (el as HTMLElement).style?.getPropertyValue("--delay");
  const ms = raw ? parseFloat(raw) : 0;
  return Number.isFinite(ms) ? ms / 1000 : 0;
}

/**
 * SplitText masks clip to the line box. Display headings are set tight
 * (line-height ~1), which cuts descenders such as the y in "Artistry".
 * This extends each mask below the line, with a matching negative margin
 * so the layout does not move. Call it right after SplitText.create.
 */
export function roomForDescenders(masks: Element[]): void {
  if (masks.length) gsap.set(masks, { paddingBottom: "0.22em", marginBottom: "-0.22em" });
}

export { Flip, gsap, ScrollTrigger, SplitText };

