import type { Metadata } from "next";
import { SectionMarker } from "@/components/graphics/motifs";
import Link from "next/link";
import { CLOSING_ID, ClosingEnquiry } from "@/components/home/ClosingEnquiry";
import { MobileEnquiryBar } from "@/components/home/MobileEnquiryBar";
import { PageTransition } from "@/components/motion/PageTransition";
import { imageBrief } from "@/components/portfolio/imageBrief";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { Ornament } from "@/components/ui/Ornament";
import { Photo } from "@/components/ui/Photo";
import { categoryLabel, getImage, looks, portfolioImages } from "@/content/portfolio";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Royal and contemporary bridal, engagement and reception, cocktail and party makeup looks.",
};

const hasDemo = portfolioImages.some((image) => image.status === "demo");

/**
 * Portfolio: a statement opening, the collection (filters, Flip-animated
 * editorial layout, lightbox), an index of the six looks, and the closing
 * enquiry. Six photographs only, reused across the site.
 */
export default function PortfolioPage() {
  return (
    <PageTransition>
      {/* Opening */}
      <section id="portfolio-intro" aria-labelledby="portfolio-title" className="page-container pt-12 pb-16 lg:pt-20 lg:pb-24">
        <p className="text-eyebrow enter-rise text-muted">{site.name} · Portfolio</p>
        <h1 id="portfolio-title" className="text-statement mt-6 max-w-[12ch] lg:max-w-[14ch]" data-reveal="text" data-prehide>
          A portfolio of bridal beauty.
        </h1>
        <div className="page-grid mt-10 gap-y-6 lg:mt-14">
          <Ornament reveal="enter" className="col-span-4 sm:col-span-3 lg:col-span-3" />
          <div className="col-span-4 sm:col-span-5 lg:col-span-6 lg:col-start-6">
            <p className="text-lead text-muted" data-reveal="rise">
              Royal and contemporary bridal looks, engagement and reception styling, cocktail and party makeup.
              Filter by occasion, open any photograph full screen, or step into a look.
            </p>
            {hasDemo && (
              <p className="text-caption mt-5 border-l border-rule pl-4 text-muted" data-reveal="rise">
                The six photographs on this site are demonstration images from Unsplash, shown for this preview.
                They are not {site.firstName}&apos;s work and will be replaced with her own portfolio before launch.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* The collection */}
      <section aria-label="The collection" className="page-container scroll-mt-(--header-height) pb-(--section-space)">
        <PortfolioGallery images={portfolioImages} looks={looks} />
      </section>

      {/* Index of looks */}
      <section aria-labelledby="looks-index-title" className="page-container pb-(--section-space)">
        <SectionMarker index={String(looks.length).padStart(2, "0")} label="The looks" />
        <h2 id="looks-index-title" className="sr-only">All looks</h2>
        <ol className="mt-6">
          {looks.map((look, i) => (
            <li key={look.slug} className="border-b border-rule" data-reveal="rise">
              <Link href={`/portfolio/${look.slug}`} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-5 lg:grid-cols-[4rem_1fr_14rem_6rem] lg:py-7">
                <span className="text-caption text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-h1 transition-transform duration-500 group-hover:translate-x-2">{look.title}</span>
                <span className="text-caption hidden text-muted lg:block">{categoryLabel(look.category)}</span>
                <span className="relative block w-14 overflow-hidden lg:w-24">
                  <Photo brief={imageBrief(getImage(look.image), look.details[0])} ratio="4:5" sizes="96px" tag={false} className="photo-hover" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <ClosingEnquiry />
      <MobileEnquiryBar afterId="portfolio-intro" hideWhenIds={[CLOSING_ID]} />
    </PageTransition>
  );
}
