import Link from "next/link";
import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesPreview } from "@/content/home";
import { enquireHref } from "@/content/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/**
 * Section 05 — services, set as an editorial index rather than cards:
 * a numbered list of names on fine rules, each with a quiet "Ask about
 * this" link (Phase 2: a link, not a button). Only "Bridal makeup" is
 * confirmed; no packages or prices are shown until the client confirms.
 */
export function ServicesPreview() {
  return (
    <section aria-labelledby="services-title" className="bg-surface">
      <div className="page-container section-space">
        <div className="page-grid gap-y-10">
          <SectionHeading
            index="03"
            label="Services"
            title="Signature services"
            id="services-title"
            className="col-span-4 sm:col-span-8 lg:col-span-4"
          />

          <ol className="col-span-4 border-t border-rule sm:col-span-8 lg:col-span-7 lg:col-start-6">
            {servicesPreview.map((service, i) => (
              <li
                key={service.name}
                className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-b border-rule py-7 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:gap-x-6 lg:py-9"
                data-reveal="rise"
                style={delay(i * 90)}
              >
                <span className="text-caption pt-1.5 text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-h2">
                    {service.name.startsWith("[TBD") ? (
                      <span className="placeholder-text">{service.name}</span>
                    ) : (
                      service.name
                    )}
                  </h3>
                  <p className="text-body mt-2 text-muted">
                    <span className="placeholder-text">{service.summary}</span>
                  </p>
                </div>
                <Link
                  href={enquireHref}
                  className="link-text text-label col-start-2 mt-3 inline-flex min-h-11 items-center justify-self-start sm:col-start-3 sm:mt-0"
                  aria-label={`Ask about ${service.name}`}
                >
                  Ask about this
                </Link>
              </li>
            ))}
          </ol>

          <p className="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6" data-reveal="rise">
            <Link href="/services" className="link-text text-label inline-flex min-h-11 items-center">
              All services and details
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
