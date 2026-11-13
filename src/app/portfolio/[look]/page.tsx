import type { Metadata } from "next";
import { SectionMarker } from "@/components/graphics/motifs";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ClosingEnquiry, CLOSING_ID } from "@/components/home/ClosingEnquiry";
import { MobileEnquiryBar } from "@/components/home/MobileEnquiryBar";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PageTransition } from "@/components/motion/PageTransition";
import { imageBrief } from "@/components/portfolio/imageBrief";
import { Ornament } from "@/components/ui/Ornament";
import { Photo } from "@/components/ui/Photo";
import { categoryLabel, getImage, getLook, looks } from "@/content/portfolio";
import { enquireHref, site } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

/** One page per look, built ahead of time. */
export function generateStaticParams() {
  return looks.map((look) => ({ look: look.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[look]">): Promise<Metadata> {
  const { look: slug } = await params;
  const look = getLook(slug);
  if (!look) return {};
  return { title: `${look.title} · Portfolio`, description: look.description };
}

/**
 * The URL (params) is read inside <Suspense>, as Next.js 16 instant
 * navigation expects. Every look is pre-built (generateStaticParams), so
 * the quiet fallback is rarely, if ever, seen.
 */
export default function LookPage({ params }: PageProps<"/portfolio/[look]">) {
  return (
    <Suspense fallback={<div className="min-h-svh" aria-hidden="true" />}>
      <LookContent params={params} />
    </Suspense>
  );
}

/**
 * A selected look: the photograph at full scale, the look's story and
 * makeup notes, two close crops of the same photograph, a contextual
 * enquiry, and the way to the previous and next look.
 * All copy describes DEMONSTRATION photography (see content/portfolio.ts).
 */
async function LookContent({ params }: { params: PageProps<"/portfolio/[look]">["params"] }) {
  const { look: slug } = await params;
  const look = getLook(slug);
  if (!look) notFound();

  const image = getImage(look.image);
  const index = looks.indexOf(look);
  const previous = looks[(index - 1 + looks.length) % looks.length];
  const next = looks[(index + 1) % looks.length];
  const number = (i: number) => String(i + 1).padStart(2, "0");

  const message = `Hello ${site.firstName}, I'd love to ask about the "${look.title}" look (${categoryLabel(look.category)}).`;
  const enquiry = whatsappHref(site.whatsappNumber, message) ?? `${enquireHref}?look=${look.slug}`;

  return (
    <PageTransition>
      {/* Opening: title low on the left, photograph tall on the right */}
      <section id="look-intro" aria-labelledby="look-title" className="page-container pt-8 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-caption enter-rise text-muted">
          <Link href="/portfolio" className="link-text inline-flex min-h-11 items-center text-muted">
            Portfolio
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{categoryLabel(look.category)}</span>
        </nav>

        <div className="page-grid mt-8 gap-y-10 lg:mt-12 lg:items-end">
          <div className="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <Photo
              shape="arch"
              brief={imageBrief(image)}
              ratio="4:5"
              ratioLg="2:3"
              sizes="(min-width: 1024px) 46vw, 100vw"
              priority
              reveal="enter"
              parallax={5}
            />
          </div>

          <div className="col-span-4 sm:col-span-8 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:pb-12">
            <p className="text-eyebrow text-muted tabular-nums" data-reveal="rise">
              Look {number(index)} / {number(looks.length - 1)}
            </p>
            <h1 id="look-title" className="text-statement mt-5" data-reveal="text">
              {look.title}
            </h1>
            <Ornament className="mt-8" />
            <p className="text-lead mt-8 max-w-(--container-prose) text-muted" data-reveal="rise">
              {look.description}
            </p>
            <ul className="mt-8 border-t border-rule" aria-label="Makeup notes">
              {look.notes.map((note, i) => (
                <li key={note} className="text-body flex gap-4 border-b border-rule py-3" data-reveal="rise">
                  <span className="text-caption pt-1 text-muted tabular-nums">{number(i)}</span>
                  {note}
                </li>
              ))}
            </ul>
            <p className="mt-8" data-reveal="rise">
              <a href={enquiry} className="link-text text-label inline-flex min-h-11 items-center gap-2">
                <WhatsAppIcon />
                Ask about this look
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Details: close crops of the same photograph */}
      <section aria-labelledby="details-title" className="page-container section-space">
        <SectionMarker index="02" label="Up close" />
        <h2 id="details-title" className="sr-only">Details of {look.title}</h2>
        <div className="page-grid mt-10 gap-y-12 lg:mt-14">
          {look.details.map((crop, i) => (
            <figure
              key={crop.label ?? i}
              className={
                i === 0
                  ? "col-span-4 sm:col-span-5 lg:col-span-6"
                  : "col-span-3 col-start-2 sm:col-span-4 sm:col-start-5 lg:col-span-4 lg:col-start-9 lg:mt-40"
              }
            >
              <div className="frame-corners">
                <Photo
                  brief={imageBrief(image, crop)}
                  ratio={i === 0 ? "3:2" : "4:5"}
                  sizes="(min-width: 1024px) 46vw, 88vw"
                  reveal="scroll"
                />
              </div>
              <figcaption className="text-caption mt-4 flex gap-3 text-muted" data-reveal="rise">
                <span className="tabular-nums">{number(i)}</span>
                {crop.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Previous and next look */}
      <nav aria-label="More looks" className="border-y border-rule">
        <div className="page-container grid sm:grid-cols-2">
          <Link
            href={`/portfolio/${previous.slug}`}
            className="group flex min-h-28 flex-col justify-center gap-2 border-b border-rule py-8 sm:border-r sm:border-b-0 sm:pr-8"
          >
            <span className="text-caption text-muted">← Previous look</span>
            <span className="text-h1 transition-transform duration-500 group-hover:-translate-x-1">{previous.title}</span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex min-h-28 flex-col justify-center gap-2 py-8 sm:items-end sm:pl-8 sm:text-right"
          >
            <span className="text-caption text-muted">Next look →</span>
            <span className="text-h1 transition-transform duration-500 group-hover:translate-x-1">{next.title}</span>
          </Link>
        </div>
      </nav>

      <ClosingEnquiry />
      <MobileEnquiryBar afterId="look-intro" hideWhenIds={[CLOSING_ID]} />
    </PageTransition>
  );
}
