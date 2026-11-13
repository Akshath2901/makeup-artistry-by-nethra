import type { Metadata } from "next";
import Link from "next/link";
import { BookingSteps } from "@/components/home/BookingSteps";
import { CLOSING_ID, ClosingEnquiry } from "@/components/home/ClosingEnquiry";
import { MobileEnquiryBar } from "@/components/home/MobileEnquiryBar";
import { PageOpening } from "@/components/layout/PageOpening";
import { PageTransition } from "@/components/motion/PageTransition";
import { imageBrief } from "@/components/portfolio/imageBrief";
import { Photo } from "@/components/ui/Photo";
import { getImage, looks, type CategoryId } from "@/content/portfolio";
import { enquireHref } from "@/content/site";
import { SectionMarker } from "@/components/graphics/motifs";

export const metadata: Metadata = {
  title: "Services",
  description: "Bridal makeup, with engagement, reception, cocktail and party looks.",
};

type Occasion = {
  category: CategoryId;
  name: string;
  /** Only bridal makeup is confirmed (Phase 1). */
  confirmed: boolean;
  look: string;
};

const occasions: Occasion[] = [
  { category: "royal", name: "Bridal makeup", confirmed: true, look: "heirloom-red" },
  { category: "reception", name: "Engagement & reception", confirmed: false, look: "evening-rose" },
  { category: "cocktail", name: "Cocktail", confirmed: false, look: "after-dark" },
  { category: "party", name: "Party", confirmed: false, look: "festive-glow" },
];

const details = ["What is included", "Time needed", "Trial", "Travel", "Price"];

const faqs = [
  "[TBD: A real question the artist often receives]",
  "[TBD: A second real question]",
  "[TBD: A third real question]",
];

/**
 * Services: one editorial block per occasion, each paired with a crop of
 * a look photograph, with every unconfirmed detail shown as a visible
 * placeholder. No packages, inclusions, products or prices are invented.
 */
export default function ServicesPage() {
  return (
    <PageTransition>
      <PageOpening
        id="services-intro"
        eyebrow="Services"
        title="For every moment of the celebration."
        lead={
          <p>
            Bridal makeup is at the heart of the work. Engagement, reception, cocktail and party looks are shown
            for this preview and <span className="placeholder-text">[TBD: will be confirmed with the artist]</span>.
          </p>
        }
      />

      <section aria-label="Occasions" className="pb-(--section-space)">
        {occasions.map((occasion, i) => {
          const look = looks.find((l) => l.slug === occasion.look)!;
          const flipped = i % 2 === 1;
          return (
            <article
              key={occasion.category}
              aria-labelledby={`occasion-${occasion.category}`}
              className="page-container border-t border-rule py-14 lg:py-20"
            >
              <div className="page-grid gap-y-10 lg:items-center">
                <div className={`col-span-4 sm:col-span-4 lg:col-span-5 ${flipped ? "sm:col-start-5 lg:col-start-8" : ""}`}>
                  <Photo
                    brief={imageBrief(getImage(look.image), look.details[i % 2])}
                    ratio="4:5"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 46vw, 100vw"
                    parallax={6}
                  />
                </div>

                <div
                  className={`col-span-4 sm:col-span-4 lg:col-span-6 ${
                    flipped ? "sm:col-start-1 sm:row-start-1 lg:col-start-1" : "lg:col-start-7"
                  }`}
                >
                  <p className="text-caption text-muted tabular-nums" data-reveal="rise">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 id={`occasion-${occasion.category}`} className="text-statement mt-4" data-reveal="text">
                    {occasion.name}
                  </h2>
                  {!occasion.confirmed && (
                    <p className="text-caption mt-4 text-muted" data-reveal="rise">
                      <span className="placeholder-text">[TBD: Confirm this service with the artist]</span>
                    </p>
                  )}
                  <dl className="mt-8 border-t border-rule">
                    {details.map((label) => (
                      <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule py-3" data-reveal="rise">
                        <dt className="text-caption pt-0.5 text-muted">{label}</dt>
                        <dd className="text-body placeholder-text">
                          {label === "Price" ? "[TBD: Pricing decision: full, “starting from”, or none]" : `[TBD: ${label}]`}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-8 flex flex-wrap gap-x-8" data-reveal="rise">
                    <Link href={enquireHref} className="link-text text-label inline-flex min-h-11 items-center">
                      Ask about {occasion.name.toLowerCase()}
                    </Link>
                    <Link href={`/portfolio/${look.slug}`} className="link-text text-label inline-flex min-h-11 items-center text-muted">
                      See the look: {look.title} →
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <BookingSteps index="05" />

      <section aria-labelledby="faq-title" className="page-container pb-(--section-space)">
        <SectionMarker index="06" label="Questions" />
        <div className="page-grid mt-8 gap-y-8">
          <h2 id="faq-title" className="text-h1 col-span-4 sm:col-span-8 lg:col-span-4" data-reveal="text">
            Questions brides ask
          </h2>
          <div className="col-span-4 border-t border-rule sm:col-span-8 lg:col-span-7 lg:col-start-6">
            {faqs.map((question) => (
              <details key={question} className="faq border-b border-rule" data-reveal="rise">
                <summary className="text-h3 flex min-h-16 cursor-pointer items-center justify-between gap-6 py-4">
                  <span className="placeholder-text">{question}</span>
                  <span className="faq-mark" aria-hidden="true" />
                </summary>
                <p className="text-body pb-6 text-muted">
                  <span className="placeholder-text">[TBD: The artist&apos;s answer]</span>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingEnquiry />
      <MobileEnquiryBar afterId="services-intro" hideWhenIds={[CLOSING_ID]} />
    </PageTransition>
  );
}
