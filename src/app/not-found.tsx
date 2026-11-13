import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { imageBrief } from "@/components/portfolio/imageBrief";
import { Ornament } from "@/components/ui/Ornament";
import { Photo } from "@/components/ui/Photo";
import { getImage } from "@/content/portfolio";
import { enquireHref } from "@/content/site";
import { BackdropArch } from "@/components/graphics/motifs";

export const metadata: Metadata = { title: "Page not found" };

/**
 * Branded 404 (Phase 2: one line, one portfolio image, links back).
 * The number is set at mega scale as the page's image; links are real.
 */
export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="page-container section-space relative overflow-hidden">
      <BackdropArch className="-left-16 top-0 hidden h-[110%] w-auto lg:block" />
      <div className="page-grid gap-y-12 lg:items-end">
        <div className="col-span-4 sm:col-span-8 lg:col-span-7">
          <p className="text-mega enter-text text-muted" aria-hidden="true">
            404
          </p>
          <h1 id="not-found-title" className="text-statement enter-rise mt-6" style={{ "--delay": "150ms" } as CSSProperties}>
            This page has slipped away.
          </h1>
          <Ornament reveal="enter" className="mt-10" />
          <ul className="enter-rise mt-10 flex flex-wrap gap-x-8" style={{ "--delay": "300ms" } as CSSProperties}>
            <li>
              <Link href="/" className="nav-link text-label">
                Back to Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="nav-link text-label">
                See the portfolio
              </Link>
            </li>
            <li>
              <Link href={enquireHref} className="nav-link text-label">
                Enquire
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3 col-start-2 sm:col-span-4 sm:col-start-5 lg:col-span-4 lg:col-start-9">
          <div className="relative">
            <Photo
              shape="arch"
              brief={imageBrief(getImage("royal-04"), { focus: "50% 24%", zoom: 1.5 })}
              ratio="4:5"
              sizes="(min-width: 1024px) 30vw, 70vw"
              reveal="enter"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
