import type { Metadata } from "next";
import Link from "next/link";
import { CLOSING_ID, ClosingEnquiry } from "@/components/home/ClosingEnquiry";
import { MobileEnquiryBar } from "@/components/home/MobileEnquiryBar";
import { PageOpening } from "@/components/layout/PageOpening";
import { PageTransition } from "@/components/motion/PageTransition";
import { Ornament } from "@/components/ui/Ornament";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { artist, confirmedFacts } from "@/content/home";
import { site } from "@/content/site";
import { SectionMarker } from "@/components/graphics/motifs";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.artistName}, the artist behind ${site.name}, bridal makeup in ${confirmedFacts.city}.`,
};

const approach = [
  { title: "[TBD: First principle, in her words]", detail: "[TBD: For example, how she prepares the skin]" },
  { title: "[TBD: Second principle]", detail: "[TBD: For example, hygiene and kit]" },
  { title: "[TBD: Third principle]", detail: "[TBD: For example, how she works with each bride]" },
];

/**
 * About (Phase 2): portrait and introduction, her approach in her own
 * words, where she works, one closing action. "Training and recognition"
 * is left out until there is proof to show. No biography, achievements or
 * experience are invented; the portrait slot never uses a stock photo.
 */
export default function AboutPage() {
  return (
    <PageTransition>
      <PageOpening
        id="about-intro"
        eyebrow="About"
        title={<>Meet {site.firstName}.</>}
        lead={<p className="placeholder-text">{artist.story}</p>}
        aside={
          <div className="arch-mask">
            <PhotoPlaceholder
              ratio="2:3"
              label={artist.photo.subject}
              composition={artist.photo.composition}
              treatment={artist.photo.treatment}
              reveal="enter"
            />
          </div>
        }
      />

      {/* Her words, set large */}
      <section aria-label="In her words" className="bg-surface">
        <div className="page-container section-space">
          <p className="text-eyebrow text-muted" data-reveal="rise">In her words</p>
          <blockquote className="text-statement mt-8 max-w-[20ch] italic" data-reveal="text">
            <p className="placeholder-text">[TBD: A sentence about why she does this work]</p>
          </blockquote>
          <Ornament className="mt-12" />
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-title" className="page-container section-space">
        <SectionMarker index="01" label="Approach" />
        <h2 id="approach-title" className="text-h1 mt-8 max-w-[18ch]" data-reveal="text">
          What a bride can expect
        </h2>
        <ol className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((item, i) => (
            <li key={item.title} className="border-t border-ink pt-6" data-reveal="rise">
              <p className="text-statement text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-h3 placeholder-text mt-6">{item.title}</h3>
              <p className="text-body placeholder-text mt-3">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Where she works */}
      <section aria-labelledby="where-title" className="overflow-hidden border-y border-rule">
        <div className="page-container py-16 lg:py-24">
          <p className="text-eyebrow text-muted" data-reveal="rise">Where she works</p>
          <h2 id="where-title" className="text-statement mt-6" data-reveal="text">
            {confirmedFacts.city}
          </h2>
          <p className="text-lead mt-8 max-w-(--container-prose) text-muted" data-reveal="rise">
            <span className="placeholder-text">{site.serviceArea}</span>
          </p>
          <p className="mt-8" data-reveal="rise">
            <Link href="/portfolio" className="link-text text-label inline-flex min-h-11 items-center">
              See the portfolio →
            </Link>
          </p>
        </div>
      </section>

      <ClosingEnquiry />
      <MobileEnquiryBar afterId="about-intro" hideWhenIds={[CLOSING_ID]} />
    </PageTransition>
  );
}
