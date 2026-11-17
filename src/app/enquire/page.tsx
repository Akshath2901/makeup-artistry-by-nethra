import type { Metadata } from "next";
import { SectionMarker } from "@/components/graphics/motifs";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { PageOpening } from "@/components/layout/PageOpening";
import { PageTransition } from "@/components/motion/PageTransition";
import { imageBrief } from "@/components/portfolio/imageBrief";
import { Photo } from "@/components/ui/Photo";
import { closing } from "@/content/home";
import { getImage } from "@/content/portfolio";
import { site } from "@/content/site";
import { instagramDmHref, instagramProfileHref } from "@/lib/instagram";

export const metadata: Metadata = {
  title: "Enquire",
  description: `Enquire with ${site.name} on Instagram or by email.`,
};

/** The four details to include in the first message (Phase 2 list). */
const details = [
  { label: "Your wedding date", note: "Or “not fixed yet”." },
  { label: "Area or venue", note: "Where you will be getting ready." },
  { label: "How many people need makeup", note: "The bride, and anyone else." },
  { label: "The service you would like", note: "Bridal, engagement, reception, cocktail or party." },
];

/**
 * Enquire: welcoming, and honest about what is ready. Enquiries happen in
 * Instagram direct messages (owner decision 2026-11-17, replacing the
 * WhatsApp composer). This page lists what to include in the message and
 * shows the "Message on Instagram" button once the client's handle is set
 * in content/site.ts. No mobile enquiry bar here (Phase 2).
 */
export default function EnquirePage() {
  const dm = instagramDmHref(site.instagramHandle);
  const instagram = instagramProfileHref(site.instagramHandle);

  return (
    <PageTransition>
      <PageOpening
        id="enquire-intro"
        eyebrow="Enquire"
        title="Tell us about your day."
        lead={
          <p>
            Enquiries happen on Instagram. Send a message with a few details and {site.firstName} will reply personally.{" "}
            <span className="placeholder-text">{closing.replyTime}</span>
          </p>
        }
        aside={
          <div className="relative">
            <Photo
              shape="arch"
              brief={imageBrief(getImage("reception-02"), { focus: "50% 26%", zoom: 1.6 })}
              ratio="4:5"
              sizes="(min-width: 1024px) 30vw, 70vw"
              reveal="enter"
            />
          </div>
        }
      />

      {/* What to share */}
      <section aria-labelledby="share-title" className="page-container pb-(--section-space)">
        <SectionMarker index="01" label="What to share" />
        <h2 id="share-title" className="sr-only">What to share</h2>
        <ol className="mt-4">
          {details.map((item, i) => (
            <li key={item.label} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-rule py-7 lg:grid-cols-[6rem_1fr_1fr] lg:items-baseline lg:py-10" data-reveal="rise">
              <span className="text-h2 text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-h1">{item.label}</span>
              <span className="text-body col-start-2 mt-2 text-muted lg:col-start-3 lg:mt-0">{item.note}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Start the conversation */}
      <section aria-labelledby="start-title" className="bg-surface">
        <div className="page-container section-space page-grid gap-y-12">
          <div className="col-span-4 sm:col-span-8 lg:col-span-6">
            <h2 id="start-title" className="text-statement" data-reveal="text">
              Start the conversation.
            </h2>
            <div className="mt-10" data-reveal="rise">
              {dm ? (
                <a href={dm} className="btn-primary w-full sm:w-auto" rel="noopener noreferrer" target="_blank">
                  <InstagramIcon />
                  Message on Instagram
                  <span className="sr-only"> (opens Instagram in a new tab)</span>
                </a>
              ) : (
                <p className="text-body border border-dashed border-muted p-5">
                  <span className="placeholder-text">
                    [TBD: Instagram handle]. Once it is added in <code>src/content/site.ts</code>, a “Message on
                    Instagram” button appears here, and every “Enquire on Instagram” button opens her messages.
                  </span>
                </p>
              )}
            </div>
          </div>

          <dl className="col-span-4 border-t border-rule sm:col-span-8 lg:col-span-5 lg:col-start-8" data-reveal="rise">
            {[
              { term: "Instagram", value: site.instagramHandle, href: instagram, placeholder: "[TBD: Instagram handle]" },
              { term: "Phone", value: site.phone, href: site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : null, placeholder: "[TBD: Phone number]" },
              { term: "Email", value: site.email, href: `mailto:${site.email}`, placeholder: "" },
            ].map((row) => (
              <div key={row.term} className="grid grid-cols-[6.5rem_1fr] items-center gap-4 border-b border-rule">
                <dt className="text-caption text-muted">{row.term}</dt>
                <dd className="flex min-h-12 items-center [overflow-wrap:anywhere]">
                  {row.value && row.href ? (
                    <a href={row.href} className="link-text text-body inline-flex min-h-11 items-center">
                      {row.term === "Instagram" ? `@${row.value}` : row.value}
                    </a>
                  ) : (
                    <span className="text-body placeholder-text">{row.placeholder}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </PageTransition>
  );
}
