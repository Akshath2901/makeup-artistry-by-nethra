import type { CSSProperties } from "react";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { lookPairs } from "@/content/home";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/**
 * Section 03 — the site's signature (Phase 2): each full bridal look is
 * paired with a close crop of the same work, so visitors can judge the
 * craft up close. Phones stack the pair, full look first, with the detail
 * stepped in from the edge. Desktop alternates the pair left and right.
 */
export function LooksAndDetails() {
  return (
    <section aria-labelledby="looks-title" className="page-container pb-(--section-space)">
      <SectionHeading index="02" label="Looks and details" title="The look, and up close" id="looks-title" />

      <ol className="mt-12 flex flex-col gap-24 lg:mt-20 lg:gap-32">
        {lookPairs.map((pair, i) => {
          const flipped = i % 2 === 1;
          return (
            <li key={pair.full.subject} className="page-grid gap-y-6">
              {/* Full look */}
              <div
                className={`col-span-4 sm:col-span-5 lg:col-span-6 ${
                  flipped ? "sm:col-start-4 lg:col-start-7" : ""
                }`}
              >
                <Photo
                  brief={pair.full}
                  ratio="4:5"
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 62vw, 100vw"
                  reveal="scroll"
                  className="photo-hover"
                />
              </div>

              {/* Detail of the same look, with its caption */}
              <figure
                className={`col-span-3 col-start-2 sm:col-span-3 sm:self-end lg:col-span-4 ${
                  flipped
                    ? "sm:col-start-1 sm:row-start-1 lg:col-start-2 lg:self-start lg:pt-24"
                    : "sm:col-start-6 lg:col-start-8 lg:self-end"
                }`}
              >
                <Photo
                  brief={pair.detail}
                  ratio="1:1"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 36vw, 75vw"
                  reveal="scroll"
                  className="photo-hover"
                />
                <figcaption className="mt-4 flex gap-4" data-reveal="rise" style={delay(150)}>
                  <span className="text-caption text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-caption placeholder-text">{pair.caption}</span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
