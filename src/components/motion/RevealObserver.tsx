"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not([data-revealed])";
/** Reveal once the element's top passes 92% of the screen height. */
const TRIGGER = 0.92;

/**
 * Powers scroll-triggered reveals (data-reveal="rise" | "text" | "image").
 *
 * Renders nothing. One lightweight check serves the whole site:
 * - Content is visible until this runs, so a JavaScript failure never
 *   hides anything.
 * - Elements already on screen at load are shown at once ("instant").
 * - Others animate once as they come into view ("animate").
 * - Elements skipped by a fast scroll are shown without animation, so
 *   nothing is ever left hidden above the screen.
 * - Checks run at most once per frame, only while there is something
 *   left to reveal, using element positions (an IntersectionObserver
 *   cannot see an image whose own mask hides it).
 * - With reduced motion, nothing is hidden (handled in CSS).
 * - New pages are picked up through a MutationObserver.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    let pending: HTMLElement[] = [];
    let frame = 0;

    const sweep = (firstRun = false) => {
      frame = 0;
      if (pending.length === 0) return;
      const limit = window.innerHeight * TRIGGER;
      // Read every position first, then write, to avoid layout thrashing.
      const tops = pending.map((el) => el.getBoundingClientRect());
      const next: HTMLElement[] = [];
      pending.forEach((el, i) => {
        const rect = tops[i];
        if (rect.top >= limit) {
          next.push(el);
        } else if (firstRun || rect.bottom <= 0) {
          el.dataset.revealed = "instant";
        } else {
          el.dataset.revealed = "animate";
        }
      });
      pending = next;
    };

    const schedule = () => {
      if (!frame && pending.length) frame = requestAnimationFrame(() => sweep());
    };

    const collect = () => {
      const found = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
      pending = found;
    };

    collect();
    sweep(true);
    root.classList.add("js-reveal");

    // A new page (client-side navigation) brings new elements. Elements on
    // screen when they arrive animate in alongside the page transition.
    const mo = new MutationObserver(() => {
      collect();
      schedule();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
