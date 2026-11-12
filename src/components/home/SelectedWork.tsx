import Link from "next/link";
import type { CSSProperties } from "react";
import { Photo } from "@/components/ui/Photo";
import type { PhotoRatio } from "@/components/ui/PhotoPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { selectedWork } from "@/content/home";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/*
 * Asymmetric editorial layout, set by hand (no masonry, so every crop
 * stays intentional). One entry per tile in content/home.ts, in order.
 */
const layout: { ratio: PhotoRatio; cell: string; sizes: string }[] = [
  {
    ratio: "2:3",
    cell: "col-span-2 sm:col-span-4 lg:col-span-4",
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 36vw, 50vw",
  },
  {
    ratio: "4:5",
    cell: "col-span-2 mt-16 sm:col-span-3 sm:col-start-6 sm:mt-24 lg:col-span-3 lg:col-start-6 lg:mt-32",
    sizes: "(min-width: 1024px) 22vw, (min-width: 640px) 36vw, 50vw",
  },
  {
    ratio: "1:1",
    cell: "col-span-2 col-start-3 sm:col-span-3 sm:col-start-2 lg:col-span-3 lg:col-start-10 lg:mt-0",
    sizes: "(min-width: 1024px) 22vw, (min-width: 640px) 24vw, 50vw",
  },
  {
    ratio: "3:2",
    cell: "col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-2",
    sizes: "(min-width: 1024px) 46vw, 100vw",
  },
  {
    ratio: "4:5",
    cell: "col-span-3 col-start-2 sm:col-span-3 sm:col-start-6 lg:col-span-3 lg:col-start-9 lg:mt-24",
    sizes: "(min-width: 1024px) 22vw, (min-width: 640px) 36vw, 75vw",
  },
];

/** Section 04 — a curated preview with one route to the full portfolio. */
export function SelectedWork() {
  return (
    <section aria-labelledby="work-title" className="page-container pb-(--section-space)">
      <div className="page-grid items-end gap-y-6">
        <SectionHeading
          index="03"
          label="Portfolio"
          title="Selected work"
          id="work-title"
          className="col-span-4 sm:col-span-8 lg:col-span-12"
        />
      </div>

      <ul className="page-grid mt-12 gap-y-10 lg:mt-20 lg:gap-y-16">
        {selectedWork.map((tile, i) => {
          const spot = layout[i % layout.length];
          return (
            <li key={tile.photo.subject} className={spot.cell}>
              <Photo
                brief={tile.photo}
                ratio={spot.ratio}
                sizes={spot.sizes}
                reveal="scroll"
                className="photo-hover"
              />
              <p className="text-caption mt-3 flex gap-3 text-muted" data-reveal="rise" style={delay(120)}>
                <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="placeholder-text">{tile.category}</span>
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-12 flex justify-end lg:mt-16" data-reveal="rise">
        <Link href="/portfolio" className="link-text text-label inline-flex min-h-11 items-center">
          View the full portfolio
        </Link>
      </p>
    </section>
  );
}
