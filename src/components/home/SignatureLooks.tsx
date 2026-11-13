"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { SectionMarker } from "@/components/graphics/motifs";
import { imageBrief } from "@/components/portfolio/imageBrief";
import { Photo } from "@/components/ui/Photo";
import { categoryLabel, getImage, type Look } from "@/content/portfolio";
import { EASE, gsap, MQ } from "@/lib/motion/gsap";

/**
 * Signature looks.
 *
 * Desktop (1024 px+, motion on): an editorial pinned sequence. The section
 * holds still while scrolling turns the pages: each photograph lifts over
 * the last like a curtain, the title and notes change, and a hairline
 * tracks progress. Scrubbed to the scroll position (no snapping, no
 * hijacking), so the reader stays in control.
 *
 * Phones, tablets and reduced motion: a simple flowing list with the
 * site's standard reveals. Both versions are real links to each look.
 */
export function SignatureLooks({ items }: { items: Look[] }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const mm = gsap.matchMedia();

    mm.add(MQ.desktop, () => {
      const q = gsap.utils.selector(stage);
      const frames = q("[data-look-frame]");
      const texts = q("[data-look-text]");
      const counter = q("[data-look-counter]")[0];
      const header = document.querySelector<HTMLElement>(".site-header");
      const steps = frames.length - 1;

      gsap.set(frames.slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(texts.slice(1), { autoAlpha: 0, y: 48 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stage,
          start: () => `top ${header?.offsetHeight ?? 0}px`,
          end: () => `+=${window.innerHeight * steps * 0.9}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(frames.length - 1, Math.round(self.progress * steps));
            if (counter) counter.textContent = String(index + 1).padStart(2, "0");
          },
        },
      });

      for (let i = 1; i < frames.length; i++) {
        const at = i - 1;
        tl.to(frames[i], { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: EASE.curtain }, at)
          .fromTo(frames[i].querySelector(":scope > div > div"), { scale: 1.25 }, { scale: 1, duration: 1 }, at)
          .to(frames[i - 1].querySelector(":scope > div > div"), { scale: 0.92, duration: 1 }, at)
          .to(texts[i - 1], { autoAlpha: 0, y: -48, duration: 0.45 }, at)
          .to(texts[i], { autoAlpha: 1, y: 0, duration: 0.55 }, at + 0.45);
      }
      tl.fromTo(q("[data-look-progress]"), { scaleX: 1 / frames.length }, { scaleX: 1, duration: steps }, 0);
      // No refresh in cleanup: refreshing while matchMedia is reverting the
      // pinned trigger leaves ScrollTrigger's list in a broken state, and the
      // next trigger created then crashes ("reading 'end'"). mm.revert()
      // already removes the pin spacer and restores the layout.
    });

    return () => mm.revert();
  }, []);

  return (
    <section aria-labelledby="looks-title" className="pb-(--section-space)">
      <div className="page-container">
        <SectionMarker index="02" label="Signature looks" />
        <h2 id="looks-title" className="text-statement mt-8 max-w-[14ch]" data-reveal="text">
          Looks, made to be remembered.
        </h2>
      </div>

      {/* Phones, tablets, and any screen without motion: a flowing list */}
      <ol className="page-container mt-14 flex flex-col gap-20 sm:grid sm:grid-cols-2 sm:gap-x-6 in-[.motion-on]:lg:hidden">
        {items.map((look, i) => (
          <li key={look.slug} className={i % 2 === 1 ? "pl-[12%]" : "pr-[12%]"}>
            <Link href={`/portfolio/${look.slug}`} className="group block">
              <Photo
                shape={i % 2 === 0 ? "arch" : "rect"}
                brief={imageBrief(getImage(look.image))}
                ratio="4:5"
                sizes="(min-width: 640px) 70vw, 88vw"
                reveal="scroll"
              />
              <span className="mt-5 flex items-baseline gap-4" data-reveal="rise">
                <span className="text-caption text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="text-h1 block">{look.title}</span>
                  <span className="text-caption mt-1 block text-muted">{categoryLabel(look.category)} · View the look →</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {/* Desktop: pinned editorial sequence (static, stacked view without motion) */}
      <div ref={stageRef} className="hidden in-[.motion-on]:lg:block" data-motion-manual>
        <div className="page-container page-grid h-[calc(100svh-var(--header-height))] items-center py-10">
          <div className="relative col-span-5 self-stretch">
            <p className="text-eyebrow absolute top-6 left-0 text-muted">
              <span data-look-counter className="tabular-nums">01</span>
              <span> / {String(items.length).padStart(2, "0")}</span>
            </p>
            {items.map((look) => (
              <div key={look.slug} data-look-text className="absolute inset-x-0 bottom-10">
                <p className="text-eyebrow text-muted">{categoryLabel(look.category)}</p>
                <h3 className="text-statement mt-4">{look.title}</h3>
                <p className="text-lead mt-5 max-w-[34ch] text-muted">{look.description}</p>
                <Link href={`/portfolio/${look.slug}`} className="link-text text-label mt-6 inline-flex min-h-11 items-center">
                  View the look →
                </Link>
              </div>
            ))}
            <span className="absolute inset-x-0 bottom-0 h-px bg-rule" aria-hidden="true">
              <span data-look-progress className="block h-full origin-left bg-ink" />
            </span>
          </div>

          <div className="relative col-span-6 col-start-7 h-full">
            {items.map((look, i) => (
              <div key={look.slug} data-look-frame className="absolute inset-0 overflow-hidden" style={{ zIndex: i + 1 }}>
                <Photo
                  brief={imageBrief(getImage(look.image))}
                  ratio="4:5"
                  sizes="46vw"
                  className="aspect-auto! h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
