"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { Photo } from "@/components/ui/Photo";
import { categories, categoryLabel, type CategoryId, type Look, type PortfolioImage } from "@/content/portfolio";
import { EASE, Flip, gsap, MQ } from "@/lib/motion/gsap";
import { imageBrief } from "./imageBrief";
import { Lightbox } from "./Lightbox";

type Filter = "all" | CategoryId;
type FlipState = ReturnType<typeof Flip.getState>;

const HASH_PREFIX = "gallery-";

/*
 * Editorial placement by position among the visible photographs, so the
 * composition re-forms when a filter changes. Phones: a single column with
 * alternating insets. Tablet: wider alternation. Desktop: pairs of unequal
 * size that alternate sides.
 */
const PLACES = [
  "col-span-4 sm:col-span-6 lg:col-span-5 lg:col-start-1",
  "col-span-3 col-start-2 sm:col-span-5 sm:col-start-4 lg:col-span-4 lg:col-start-8 lg:self-end",
  "col-span-3 col-start-1 sm:col-span-5 sm:col-start-1 lg:col-span-4 lg:col-start-2 lg:self-start",
  "col-span-4 sm:col-span-6 sm:col-start-3 lg:col-span-5 lg:col-start-7 lg:mt-32",
];

/**
 * The collection: category filters (a keyboard-accessible tablist), an
 * asymmetric editorial composition of the six photographs, a full-screen
 * lightbox, and a link from each photograph to its look.
 *
 * Filtering uses GSAP Flip: photographs glide to their new places while
 * those leaving fade away. With reduced motion the change is instant.
 * "#gallery-royal" style links open a filter directly.
 */
export function PortfolioGallery({ images, looks }: { images: PortfolioImage[]; looks: Look[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const flipState = useRef<FlipState | null>(null);

  const visible = filter === "all" ? images : images.filter((image) => image.category === filter);
  const lookFor = (image: PortfolioImage) => looks.find((look) => look.image === image.id);

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: images.length },
    ...categories.map((c) => ({
      id: c.id as Filter,
      label: c.label,
      count: images.filter((image) => image.category === c.id).length,
    })),
  ];

  const select = useCallback((id: Filter) => {
    if (listRef.current && window.matchMedia(MQ.motion).matches) {
      flipState.current = Flip.getState(listRef.current.querySelectorAll("[data-tile]"));
    }
    setFilter(id);
    setOpen(null);
  }, []);

  // Animate from the recorded state to the new layout.
  useLayoutEffect(() => {
    const state = flipState.current;
    if (!state) return;
    flipState.current = null;
    const flip = Flip.from(state, {
      duration: 0.9,
      ease: EASE.curtain,
      absolute: true,
      nested: true,
      prune: true,
      onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.25, ease: EASE.editorial }),
      onLeave: (els) => gsap.to(els, { autoAlpha: 0, scale: 0.96, duration: 0.4, ease: EASE.soft }),
    });
    return () => {
      flip.progress(1);
    };
  }, [filter]);

  // Follow "#gallery-<category>" links.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1).replace(HASH_PREFIX, "");
      if (window.location.hash.startsWith(`#${HASH_PREFIX}`) && categories.some((c) => c.id === id)) {
        setFilter(id as CategoryId);
        listRef.current?.closest("section")?.scrollIntoView({ block: "start" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = tabs.length - 1;
    const target =
      event.key === "ArrowRight" ? (i === last ? 0 : i + 1)
      : event.key === "ArrowLeft" ? (i === 0 ? last : i - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (target === null) return;
    event.preventDefault();
    select(tabs[target].id);
    tabRefs.current[target]?.focus();
    tabRefs.current[target]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  const close = useCallback(() => setOpen(null), []);
  const activeLabel = tabs.find((t) => t.id === filter)?.label ?? "All";

  return (
    <div>
      {/* Filters: stay in reach while browsing */}
      <div className="sticky top-(--header-height) z-20 -mx-(--page-margin) bg-paper px-(--page-margin)">
        <div
          role="tablist"
          aria-label="Filter by look"
          className="filter-row flex gap-x-6 overflow-x-auto border-b border-rule sm:flex-wrap sm:gap-x-8 sm:overflow-visible"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={filter === tab.id}
              aria-controls="gallery-panel"
              tabIndex={filter === tab.id ? 0 : -1}
              onClick={(event) => {
                select(tab.id);
                event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" });
              }}
              onKeyDown={(event) => onTabKeyDown(event, i)}
              className="filter-tab text-label shrink-0 gap-1.5 whitespace-nowrap"
            >
              {tab.label}
              <span className="text-caption tabular-nums opacity-70" aria-hidden="true">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "photograph" : "photographs"}
        {filter === "all" ? "" : ` in ${activeLabel}`}.
      </p>

      <div id="gallery-panel" role="tabpanel" aria-labelledby={`tab-${filter}`} className="mt-10 lg:mt-16">
        <ul ref={listRef} className="page-grid gap-y-14 lg:gap-y-20">
          {images.map((image) => {
            const position = visible.indexOf(image);
            const shown = position !== -1;
            const look = lookFor(image);
            return (
              <li
                key={image.id}
                data-flip-id={image.id}
                data-tile
                className={shown ? PLACES[position % PLACES.length] : "hidden"}
              >
                <button
                  type="button"
                  onClick={() => setOpen(position)}
                  className="block w-full text-left"
                  aria-label={`View full screen: ${image.alt}`}
                >
                  <Photo
                    shape={position % 4 === 0 || position % 4 === 3 ? "arch" : "rect"}
                    brief={imageBrief(image)}
                    ratio="4:5"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 88vw"
                    reveal="scroll"
                    className="photo-hover"
                  />
                </button>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <p className="text-caption text-muted">{categoryLabel(image.category)}</p>
                  {look && (
                    <Link href={`/portfolio/${look.slug}`} className="link-text text-label inline-flex min-h-11 items-center">
                      {look.title} →
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Lightbox images={visible} index={open} onIndexChange={setOpen} onClose={close} />
    </div>
  );
}
