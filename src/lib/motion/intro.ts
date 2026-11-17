/**
 * Coordination with the royal welcome (WelcomeIntro, in the root layout).
 *
 * The welcome plays on every full page load (refresh or new visit), never
 * on navigation between pages. Its state lives on <html data-intro>:
 *   "playing"  set before first paint by the layout's pre-paint script
 *   "open"     the palace doors have started to open
 *   "done"     finished, skipped, not shown (reduced motion), or the
 *              10-second failsafe in the pre-paint script fired
 * While it is "playing", CSS entrance animations are paused (globals.css)
 * and GSAP page animations wait, so every page's opening plays as the
 * doors part instead of unseen underneath them.
 */

/** Fired as the doors begin to open. */
export const INTRO_REVEAL_EVENT = "brand:intro-reveal";

/** True while the welcome still covers the page. */
export function introPlaying(): boolean {
  return document.documentElement.dataset.intro === "playing";
}

/**
 * Runs `start` once the welcome has revealed the page (at once if it is
 * not playing). Returns a cleanup that cancels a pending start.
 */
export function afterIntro(start: () => void): () => void {
  if (!introPlaying()) {
    start();
    return () => {};
  }
  window.addEventListener(INTRO_REVEAL_EVENT, start, { once: true });
  return () => window.removeEventListener(INTRO_REVEAL_EVENT, start);
}
