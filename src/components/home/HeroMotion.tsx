"use client";

import { useLayoutEffect, useRef } from "react";
import { EASE, gsap, MQ, roomForDescenders, SplitText } from "@/lib/motion/gsap";
import { INTRO_REVEAL_EVENT } from "./WelcomeIntro";

/**
 * The hero's entrance, as one timeline:
 *   portrait curtain + settle → name rises letter by letter → detail crop
 *   slides in → tagline, eyebrow and actions follow → scroll cue draws.
 * Waits for the welcome intro's curtain when it is playing; otherwise
 * starts at once. Lighter on phones. Nothing runs with reduced motion.
 */
export function HeroMotion() {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;
    const mm = gsap.matchMedia();

    mm.add({ motion: MQ.motion, desktop: MQ.desktop }, (context) => {
      const desktop = Boolean(context.conditions?.desktop);
      const q = gsap.utils.selector(section);
      const image = q("[data-hero-image]")[0];
      const imageInner = image?.querySelector(":scope > div > div") ?? null;
      const title = q("[data-hero-title]")[0];
      const split = SplitText.create(title, { type: "chars", mask: "chars" });
      roomForDescenders(split.masks);

      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        image,
        { autoAlpha: 1, clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: desktop ? 1.6 : 1.3, ease: EASE.curtain, clearProps: "clipPath" },
      );
      if (imageInner) {
        tl.fromTo(imageInner, { scale: 1.22 }, { scale: 1, duration: 2.2, ease: EASE.editorial, clearProps: "transform" }, 0);
      }
      tl.set(title, { autoAlpha: 1 }, 0.35)
        .from(split.chars, { yPercent: 110, duration: 1.3, ease: EASE.editorial, stagger: 0.07 }, 0.35)
        .fromTo(
          q("[data-hero-detail]"),
          { autoAlpha: 0, y: 30, scale: 0.92 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.4, ease: EASE.editorial },
          0.8,
        )
        .fromTo(
          q("[data-hero-meta]"),
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 1, ease: EASE.editorial, stagger: 0.1 },
          0.7,
        )
        .fromTo(
          q("[data-hero-cue]"),
          { autoAlpha: 1, scaleY: 0, transformOrigin: "center top" },
          { scaleY: 1, duration: 1.2, ease: EASE.curtain },
          1.4,
        );

      // Hold everything in its first frame until the welcome curtain lifts.
      tl.progress(0);
      const root = document.documentElement;
      const play = () => tl.play();
      if (root.dataset.intro === "playing") {
        window.addEventListener(INTRO_REVEAL_EVENT, play, { once: true });
      } else {
        play();
      }

      return () => {
        window.removeEventListener(INTRO_REVEAL_EVENT, play);
        split.revert();
      };
    });

    return () => mm.revert();
  }, []);

  return <span ref={ref} hidden />;
}
