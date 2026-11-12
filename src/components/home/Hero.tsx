import Link from "next/link";
import type { CSSProperties } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Photo } from "@/components/ui/Photo";
import { confirmedFacts, hero } from "@/content/home";
import { enquireHref, site } from "@/content/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/**
 * Section 01 — the opening.
 *
 * Phones (Phase 2): the portrait loads first and fills the screen width;
 * the name sits below it, never over the makeup. The image is capped in
 * height so the name and the enquiry action still reach the first screen.
 * Tablet and desktop: the portrait moves to the right and the name sits
 * in the left margin, aligned to the image's lower edge.
 */
export function Hero() {
  return (
    <section id="opening" aria-labelledby="hero-title" className="sm:page-container sm:pt-10 lg:pt-12">
      <div className="sm:page-grid sm:items-end">
        {/* Portrait */}
        <figure className="sm:col-span-4 sm:col-start-5 lg:col-span-5 lg:col-start-8">
          <div className="hero-photo">
            <Photo
              brief={hero.photo}
              ratio="4:5"
              ratioLg="2:3"
              sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
              priority
              reveal="enter"
              className="h-full"
            />
          </div>
          <figcaption className="text-caption page-container enter-rise mt-3 flex min-w-0 items-center gap-3 text-muted sm:px-0" style={delay(500)}>
            <span className="fine-line enter-line w-8 shrink-0" aria-hidden="true" style={delay(500)} />
            <span className="placeholder-text truncate sm:whitespace-normal">{hero.caption}</span>
          </figcaption>
        </figure>

        {/* Name, positioning and the one action */}
        <div className="page-container pt-6 pb-4 sm:row-start-1 sm:col-span-4 sm:col-start-1 sm:px-0 sm:pt-0 sm:pb-16 lg:col-span-6 lg:pb-24">
          <p className="text-caption enter-rise flex items-center gap-3 text-muted" style={delay(150)}>
            {confirmedFacts.specialisation}
            <span className="fine-line enter-line w-6" aria-hidden="true" style={delay(250)} />
            {confirmedFacts.city}
          </p>
          <h1 id="hero-title" className="text-display enter-text mt-4 lg:mt-6" style={delay(250)}>
            {site.name}
          </h1>
          <p className="text-lead enter-rise mt-4 max-w-[30ch] text-muted lg:mt-6" style={delay(400)}>
            <span className="placeholder-text">{hero.positioning}</span>
          </p>
          <div className="enter-rise mt-8 flex flex-col gap-2 min-[400px]:flex-row min-[400px]:items-center min-[400px]:gap-8 sm:flex-col sm:items-start sm:gap-2 lg:mt-10 lg:flex-row lg:items-center lg:gap-8" style={delay(520)}>
            <Link href={enquireHref} className="btn-primary">
              <WhatsAppIcon />
              Enquire on WhatsApp
            </Link>
            <Link href="/portfolio" className="link-text text-label inline-flex min-h-11 items-center self-start min-[400px]:self-auto sm:self-start lg:self-auto">
              See the portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
