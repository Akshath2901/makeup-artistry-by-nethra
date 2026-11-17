"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { delayOf, EASE, gsap, MQ, roomForDescenders, ScrollTrigger, SplitText } from "@/lib/motion/gsap";
import { afterIntro } from "@/lib/motion/intro";

/**
 * Site-wide scroll choreography. Renders nothing.
 *
 * Reads declarative markup and builds GSAP animations for it:
 *   data-reveal="rise"    fade and rise; elements entering together stagger
 *   data-reveal="text"    heading revealed line by line out of a mask (SplitText)
 *   data-reveal="chars"   heading revealed letter by letter, like the welcome
 *   data-reveal="image"   curtain lifts while the photograph settles from 1.18x;
 *                         arch photographs are unveiled inside their arch and
 *                         the fine arch line traces around them
 *   data-reveal="line"    hairline draws from the left   ("line-y": from the top)
 *   data-reveal="svg"     SVG strokes draw (paths use pathLength="1")
 *   data-scrub="parallax" photograph drifts slightly with scroll (inner element)
 *   data-scrub="x"        oversized type slides sideways with scroll
 *   data-scrub="draw-y"   hairline grows with scroll progress through its parent
 *   data-prehide          hidden by CSS before first paint; shown by GSAP
 *
 * Everything is created inside gsap.matchMedia for "no reduced motion", so
 * with reduced motion nothing is hidden or moved. On a full page load the
 * animations are built only when the welcome's doors open (afterIntro), so
 * the page opening plays in view instead of underneath the welcome.
 * Mounted by PageTransition (inside each page, after its content) so it
 * never touches HTML that React has not hydrated yet. Fully reverted on
 * unmount (React Strict Mode safe). It also covers the shared footer.
 */
/** Play forward once when first reached; never reverse, never self-destruct. */
const PLAY_ONCE = "play none none none";

/** Draws SVG strokes (pathLength="1"): hidden until drawn, so round caps never leave dots. */
function drawStrokes(strokes: Element[] | NodeListOf<Element>, vars: gsap.TweenVars = {}) {
  return gsap.fromTo(
    strokes,
    { strokeDasharray: 1, strokeDashoffset: 1, opacity: 0 },
    { strokeDashoffset: 0, opacity: 1, duration: 1.8, ease: EASE.curtain, stagger: 0.15, ...vars },
  );
}

function buildChoreography() {
  const all = <T extends Element = HTMLElement>(sel: string) =>
    Array.from(document.body.querySelectorAll<T & Element>(sel)).filter(
      (el) => !el.closest("[data-motion-manual]"),
    ) as unknown as T[];

  // Rise: batched so elements entering together stagger naturally.
  const rises = all<HTMLElement>('[data-reveal="rise"]');
  gsap.set(rises, { autoAlpha: 0, y: 28 });
  ScrollTrigger.batch(rises, {
    start: "top 90%",
    // Not "once": a self-killing trigger removes itself from ScrollTrigger's
    // list mid-refresh when created after load (client navigation, React
    // Strict Mode), which crashes the next trigger ("reading 'end'").
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease: EASE.editorial,
        stagger: 0.09,
        delay: delayOf(batch[0]),
        overwrite: true,
      }),
  });

  // Text: line-by-line reveal from a mask.
  all<HTMLElement>('[data-reveal="text"]').forEach((el) => {
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) => {
        roomForDescenders(self.masks);
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.25,
          ease: EASE.editorial,
          stagger: 0.1,
          delay: delayOf(el),
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: PLAY_ONCE },
        });
      },
    });
  });

  // Chars: letter-by-letter reveal, the welcome's signature, for page titles.
  all<HTMLElement>('[data-reveal="chars"]').forEach((el) => {
    SplitText.create(el, {
      type: "words,chars",
      mask: "chars",
      autoSplit: true,
      onSplit: (self) => {
        roomForDescenders(self.masks);
        return gsap.from(self.chars, {
          yPercent: 115,
          duration: 1.1,
          ease: EASE.editorial,
          stagger: { amount: Math.min(0.9, self.chars.length * 0.035) },
          delay: delayOf(el),
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: PLAY_ONCE },
        });
      },
    });
  });

  // Image: curtain lifts, the photograph settles inside it.
  all<HTMLElement>('[data-reveal="image"]').forEach((el) => {
    const inner = el.querySelector(":scope > :not(.demo-tag):not(svg)");
    const tl = gsap.timeline({
      delay: delayOf(el),
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: PLAY_ONCE },
    });
    if (el.classList.contains("arch-mask")) {
      // Arch photographs: the empty arch appears, the photograph is unveiled
      // upward inside it (the silhouette never changes), then the fine arch
      // line traces around it.
      tl.fromTo(el, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: EASE.soft });
      if (inner) {
        tl.fromTo(
          inner,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: EASE.curtain, clearProps: "clipPath" },
          0.15,
        );
      }
      const outline = el.querySelectorAll(":scope > svg path");
      if (outline.length) tl.add(drawStrokes(outline, { duration: 1.6 }), 0.7);
    } else {
      tl.fromTo(
        el,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: EASE.curtain, clearProps: "clipPath" },
      );
    }
    // Parallax photographs move their inner layer already: only lift the curtain.
    if (inner && el.dataset.scrub !== "parallax") tl.fromTo(inner, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: EASE.editorial, clearProps: "transform" }, 0);
  });

  // Hairlines.
  all<HTMLElement>('[data-reveal="line"]').forEach((el) =>
    gsap.fromTo(
      el,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1.4, ease: EASE.curtain, delay: delayOf(el), scrollTrigger: { trigger: el, start: "top 92%", toggleActions: PLAY_ONCE } },
    ),
  );
  all<HTMLElement>('[data-reveal="line-y"]').forEach((el) =>
    gsap.fromTo(
      el,
      { scaleY: 0, transformOrigin: "center top" },
      { scaleY: 1, duration: 1.6, ease: EASE.curtain, scrollTrigger: { trigger: el, start: "top 85%", toggleActions: PLAY_ONCE } },
    ),
  );

  // SVG strokes: ornaments draw themselves as they arrive. (Arch lines on
  // revealed photographs are drawn by the image reveal above, or by CSS
  // for photographs that enter on load, .enter-image.)
  all<SVGElement>('[data-reveal="svg"]').forEach((svg) => {
    if (svg.parentElement?.closest('[data-reveal="image"], .enter-image')) return;
    drawStrokes(svg.querySelectorAll("path, line, circle"), {
      delay: delayOf(svg),
      scrollTrigger: { trigger: svg, start: "top 92%", toggleActions: PLAY_ONCE },
    });
  });

  // Scroll-linked: photographs drift a little inside their frames.
  all<HTMLElement>('[data-scrub="parallax"]').forEach((el) => {
    const inner = el.querySelector(":scope > :not(.demo-tag):not(svg)");
    if (!inner) return;
    const amount = parseFloat(el.dataset.amount ?? "8");
    gsap.fromTo(
      inner,
      { yPercent: -amount, scale: 1 + amount / 50 },
      { yPercent: amount, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
    );
  });

  // Scroll-linked: oversized type slides sideways.
  all<HTMLElement>('[data-scrub="x"]').forEach((el) => {
    const direction = el.dataset.direction === "right" ? 1 : -1;
    gsap.fromTo(
      el,
      { xPercent: direction === -1 ? 0 : -30 },
      {
        xPercent: direction === -1 ? -30 : 0,
        ease: "none",
        scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });

  // Scroll-linked: a line that grows with progress through its section.
  all<HTMLElement>('[data-scrub="draw-y"]').forEach((el) =>
    gsap.fromTo(
      el,
      { scaleY: 0, transformOrigin: "center top" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: el.parentElement ?? el, start: "top 75%", end: "bottom 60%", scrub: true },
      },
    ),
  );
}

export function MotionRoot() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, (context) => {
      // Motion is running: lifts the CSS pre-hide failsafes. Set at once (not
      // after the welcome), so the welcome's own failsafe never cuts it short.
      root.classList.add("motion-on");

      // Guarded, so nothing runs after this setup was reverted (route change,
      // React Strict Mode remount in development).
      let alive = true;
      const refresh = () => {
        if (alive) ScrollTrigger.refresh();
      };

      const cancel = afterIntro(() => {
        if (!alive) return;
        context.add(buildChoreography);
        refresh();
      });

      // Images and fonts change heights after load: recalculate positions.
      document.fonts?.ready.then(refresh);
      window.addEventListener("load", refresh, { once: true });

      return () => {
        alive = false;
        cancel();
        window.removeEventListener("load", refresh);
      };
    });

    return () => {
      mm.revert();
    };
  }, [pathname]);

  return null;
}
