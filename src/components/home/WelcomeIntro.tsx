"use client";

import { useLayoutEffect, useRef } from "react";
import { CornerFlourish, LotusDivider } from "@/components/graphics/motifs";
import { brand } from "@/content/site";
import { EASE, gsap, SplitText } from "@/lib/motion/gsap";

const STORAGE_KEY = "nethra-welcome";
/** Fired as the doors begin to open, so the hero can begin underneath. */
export const INTRO_REVEAL_EVENT = "brand:intro-reveal";

/**
 * The royal welcome: an Indian wedding invitation coming alive.
 *
 *   1. The invitation: an ivory card, a double frame, corner flourishes
 *      drawing in, a soft warm light.
 *   2. The palace arch draws itself: outer lines, cusped opening, pillars,
 *      finial, hanging lamp, flowering sprigs.
 *   3. The brand: MAKEUP / ARTISTRY rise letter by letter, "by Nethra",
 *      a lotus divider, the artist's name.
 *   4. The palace doors: the card parts down the middle and the two doors
 *      slide away, revealing the arch-framed hero as it animates in.
 *
 * Home page only, once per browser session. About 4.4 s. "Skip" or Escape
 * ends it at once. Never shown with reduced motion; a CSS failsafe hides
 * it if JavaScript stalls. Decorative (aria-hidden) apart from Skip: the
 * hero carries the real heading. No audio, no video, no extra photographs.
 */
export function WelcomeIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const skip = useRef<() => void>(() => {});

  useLayoutEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    if (!el) return;

    const seen = () => {
      try {
        return sessionStorage.getItem(STORAGE_KEY) === "1";
      } catch {
        return false;
      }
    };

    if (!root.classList.contains("js-motion") || root.classList.contains("intro-seen") || seen()) {
      root.classList.add("intro-seen");
      root.dataset.intro = "done";
      return;
    }
    root.dataset.intro = "playing";

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
    };
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* private browsing: the welcome may replay, which is harmless */
      }
      root.classList.add("intro-seen");
      root.dataset.intro = "done";
      reveal();
    };

    let tl: gsap.core.Timeline | null = null;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(el);
      // Strokes to draw: the marked element itself if it is a shape, or the
      // shapes inside it. Hidden (opacity 0) until drawn, so round line caps
      // never leave dots where a line is about to start.
      const SHAPES = "path, circle, line, rect";
      const draw = (sel: string) => {
        const strokes = q(sel).flatMap((node) =>
          node.matches(SHAPES) ? [node] : Array.from(node.querySelectorAll(SHAPES)),
        );
        gsap.set(strokes, { strokeDasharray: 1, strokeDashoffset: 1, opacity: 0 });
        return strokes;
      };

      const primary = SplitText.create(q("[data-w-primary]"), { type: "chars", mask: "chars" });
      const name = q("[data-w-name]");

      tl = gsap.timeline({ onComplete: finish });
      tl.timeScale(1.12);

      // 1. The invitation
      tl.fromTo(q("[data-w-frame]"), { autoAlpha: 0, scale: 1.015 }, { autoAlpha: 1, scale: 1, duration: 0.9, ease: EASE.soft }, 0)
        .to(draw("[data-flourish]"), { strokeDashoffset: 0, opacity: 1, duration: 1.6, ease: EASE.curtain }, 0.1)
        .fromTo(q("[data-w-glow]"), { autoAlpha: 0, scale: 0.7 }, { autoAlpha: 1, scale: 1, duration: 2, ease: EASE.soft }, 0.2)

        // 2. The arch draws itself
        .to(draw("[data-arch-outer]"), { strokeDashoffset: 0, opacity: 1, duration: 1.7, ease: "power2.inOut", stagger: 0.12 }, 0.25)
        .to(draw("[data-arch-pillars]"), { strokeDashoffset: 0, opacity: 1, duration: 1.1, ease: "power2.inOut" }, 0.6)
        .to(draw("[data-arch-cusp]"), { strokeDashoffset: 0, opacity: 1, duration: 1.4, ease: "power2.inOut" }, 0.75)
        .to(draw("[data-arch-sprigs]"), { strokeDashoffset: 0, opacity: 1, duration: 1.3, ease: EASE.soft, stagger: 0.05 }, 1.1)
        .fromTo(q("[data-arch-finial]"), { autoAlpha: 0, y: 8, scale: 0.6, transformOrigin: "50% 100%" }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "back.out(2)" }, 1.4)
        .fromTo(q("[data-arch-lamp]"), { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 1, ease: EASE.editorial }, 1.5)

        // 3. The brand
        .from(primary.chars, { yPercent: 115, duration: 1.1, ease: EASE.editorial, stagger: 0.045 }, 1.35)
        .fromTo(q("[data-w-by]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 1, ease: EASE.editorial }, 2.0)
        .to(draw("[data-w-lotus]"), { strokeDashoffset: 0, opacity: 1, duration: 1.1, ease: EASE.curtain }, 2.1)
        .fromTo(name, { autoAlpha: 0, letterSpacing: "0.7em" }, { autoAlpha: 1, letterSpacing: "0.32em", duration: 1.3, ease: EASE.editorial }, 2.25)

        // 4. The palace doors
        .addLabel("exit", 3.55)
        .to(q("[data-w-stage], [data-w-glow]"), { autoAlpha: 0, scale: 1.04, duration: 0.6, ease: "power2.in" }, "exit")
        .fromTo(q("[data-w-seam]"), { scaleY: 0 }, { scaleY: 1, duration: 0.45, ease: EASE.curtain }, "exit+=0.25")
        .call(reveal, [], "exit+=0.55")
        .to(q("[data-door='left']"), { xPercent: -101, duration: 1.3, ease: EASE.curtain }, "exit+=0.55")
        .to(q("[data-door='right']"), { xPercent: 101, duration: 1.3, ease: EASE.curtain }, "exit+=0.55")
        .to(q("[data-w-seam]"), { autoAlpha: 0, duration: 0.2 }, "exit+=0.6")
        .set(el, { display: "none" });
    }, el);

    skip.current = () => {
      tl?.progress(1);
      gsap.set(el, { display: "none" });
      finish();
    };
    // Failsafe: browsers pause animation frames in background tabs; timers
    // keep running, so the welcome always ends within 9 seconds.
    const safety = window.setTimeout(() => {
      if (!finished) skip.current();
    }, 9000);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !finished) skip.current();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(safety);
      window.removeEventListener("keydown", onKey);
      ctx.revert();
    };
  }, []);

  /* The invitation card art, drawn on each door so it travels with it. */
  const card = (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="invite-frame" data-w-frame />
      <CornerFlourish corner="tl" className="absolute top-3 left-3 h-16 w-16 text-muted lg:top-6 lg:left-6 lg:h-28 lg:w-28" />
      <CornerFlourish corner="tr" className="absolute top-3 right-3 h-16 w-16 text-muted lg:top-6 lg:right-6 lg:h-28 lg:w-28" />
      <CornerFlourish corner="bl" className="absolute bottom-3 left-3 h-16 w-16 text-muted lg:bottom-6 lg:left-6 lg:h-28 lg:w-28" />
      <CornerFlourish corner="br" className="absolute right-3 bottom-3 h-16 w-16 text-muted lg:right-6 lg:bottom-6 lg:h-28 lg:w-28" />
    </div>
  );

  return (
    <div ref={ref} className="welcome overflow-hidden" data-motion-manual>
      {/* The two doors: each shows its half of the same card */}
      <div data-door="left" className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-paper">
        <div className="absolute inset-y-0 left-0 w-[200%]">{card}</div>
      </div>
      <div data-door="right" className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-paper">
        <div className="absolute inset-y-0 right-0 w-[200%]">{card}</div>
      </div>
      <span data-w-seam className="absolute inset-y-0 left-1/2 w-px origin-top bg-muted" aria-hidden="true" />

      {/* Warm light behind the arch (a blurred solid shape, not a gradient) */}
      <div
        data-w-glow
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[46svh] w-[70vw] max-w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface blur-3xl"
      />

      {/* The arch and the brand */}
      <div data-w-stage className="absolute inset-0 grid place-items-center" aria-hidden="true">
        <div className="@container relative aspect-[400/560] w-[min(80vw,calc(80svh*0.7143))]">
          <svg viewBox="0 0 400 560" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 h-full w-full text-ink/70">
            <g data-arch-outer>
              <path pathLength={1} d="M40 560V236C40 132 118 82 172 62C188 56 196 46 200 30C204 46 212 56 228 62C282 82 360 132 360 236V560" />
              <path pathLength={1} d="M52 560V238C52 140 124 94 176 74C190 68 197 60 200 48C203 60 210 68 224 74C276 94 348 140 348 238V560" />
            </g>
            <g data-arch-pillars>
              <path pathLength={1} d="M24 560V252M376 560V252" />
              <path pathLength={1} d="M14 250H50M350 250H386" />
              <path pathLength={1} d="M20 250Q32 232 44 250M356 250Q368 232 380 250" />
              <path pathLength={1} d="M10 559H390M22 551H378" />
            </g>
            <path
              data-arch-cusp
              pathLength={1}
              className="text-ink/45"
              stroke="currentColor"
              d="M78 552V258A26 26 0 0 1 86 214A25 25 0 0 1 104 176A24 24 0 0 1 130 146A22 22 0 0 1 160 124A25 25 0 0 1 200 112A25 25 0 0 1 240 124A22 22 0 0 1 270 146A24 24 0 0 1 296 176A25 25 0 0 1 314 214A26 26 0 0 1 322 258V552"
            />
            <g data-arch-finial>
              <path d="M200 30V22" />
              <path d="M200 22C195 17 195 11 200 6C205 11 205 17 200 22Z" />
              <circle cx="200" cy="3" r="1.6" />
            </g>
            <g data-arch-lamp className="text-ink/55" stroke="currentColor">
              <path d="M200 112V142" />
              <path d="M193 142H207L204 152H196Z" />
              <path d="M200 152C198 156 198 159 200 161C202 159 202 156 200 152Z" />
            </g>
            <g data-arch-sprigs className="text-ink/45" stroke="currentColor">
              <path pathLength={1} d="M90 546C100 522 96 498 108 478" />
              <path pathLength={1} d="M98 516C86 510 82 500 84 490C94 494 100 504 98 516Z" />
              <path pathLength={1} d="M103 494C115 490 121 480 121 470C111 472 103 482 103 494Z" />
              <circle pathLength={1} cx="109" cy="475" r="3" />
              <path pathLength={1} d="M310 546C300 522 304 498 292 478" />
              <path pathLength={1} d="M302 516C314 510 318 500 316 490C306 494 300 504 302 516Z" />
              <path pathLength={1} d="M297 494C285 490 279 480 279 470C289 472 297 482 297 494Z" />
              <circle pathLength={1} cx="291" cy="475" r="3" />
            </g>
          </svg>

          {/* Wordmark, set inside the arch opening */}
          <div className="absolute inset-x-[20%] top-[40%] flex flex-col items-center text-center text-ink">
            <p data-w-primary className="font-serif text-[7.2cqw] leading-[1.15] font-light tracking-[0.2em] uppercase">
              {brand.wordmark.primary.split(" ").map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </p>
            <p data-w-by className="mt-[2.5cqw] font-serif text-[8.4cqw] leading-none italic text-muted">
              {brand.wordmark.secondary}
            </p>
            <div data-w-lotus className="mt-[4cqw] w-[44cqw]">
              <LotusDivider reveal="none" className="h-auto w-full" />
            </div>
            <p data-w-name className="text-eyebrow mt-[3cqw] text-[2.6cqw] tracking-[0.32em] text-muted">
              {brand.artistName}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => skip.current()}
        className="text-label absolute bottom-6 left-1/2 z-10 inline-flex min-h-11 -translate-x-1/2 items-center px-4 text-muted lg:bottom-10"
      >
        Skip intro
      </button>
    </div>
  );
}
