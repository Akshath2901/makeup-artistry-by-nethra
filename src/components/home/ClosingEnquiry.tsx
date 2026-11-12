import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Photo } from "@/components/ui/Photo";
import { closing } from "@/content/home";
import { enquireHref, site } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

export const CLOSING_ID = "closing-enquiry";

/**
 * Section 07 — "How do I check my date?" (Phase 2: a calm, full-width
 * band with one sentence and the WhatsApp action). The main action opens
 * the enquiry composer; a direct WhatsApp link appears only once the
 * client's real number is set in content/site.ts.
 */
export function ClosingEnquiry() {
  const direct = whatsappHref(site.whatsappNumber);

  return (
    <section id={CLOSING_ID} aria-labelledby="closing-title" className="page-container section-space">
      <div className="page-grid gap-y-10 lg:items-center">
        <div className="col-span-4 sm:col-span-8 lg:col-span-5">
          <Photo
            brief={closing.photo}
            ratio="3:2"
            ratioLg="4:5"
            sizes="(min-width: 1024px) 40vw, 100vw"
            reveal="scroll"
          />
        </div>

        <div className="col-span-4 sm:col-span-6 lg:col-span-6 lg:col-start-7">
          <span className="fine-line w-16" data-reveal="line" aria-hidden="true" />
          <h2 id="closing-title" className="text-h1 mt-8" data-reveal="text">
            Tell us about your day.
          </h2>
          <p className="text-lead mt-5 text-muted" data-reveal="rise">
            Share your date and venue on WhatsApp.{" "}
            <span className="placeholder-text">{closing.replyTime}</span>
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8" data-reveal="rise">
            <Link href={enquireHref} className="btn-primary w-full sm:w-auto">
              <WhatsAppIcon />
              Enquire on WhatsApp
            </Link>
            <p className="text-caption text-muted">
              {direct ? (
                <>
                  Or{" "}
                  <a href={direct} className="link-text" rel="noopener noreferrer" target="_blank">
                    message directly
                  </a>
                </>
              ) : (
                <span className="placeholder-text">Direct link: [TBD: WhatsApp number]</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
