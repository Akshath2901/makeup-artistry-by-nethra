import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Ornament } from "@/components/ui/Ornament";
import { Photo, type PhotoBrief } from "@/components/ui/Photo";
import { closing } from "@/content/home";
import { enquireHref, site } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";
import { BackdropArch } from "@/components/graphics/motifs";

export const CLOSING_ID = "closing-enquiry";

/**
 * Section 07 — "How do I check my date?" (Phase 2: a calm, full-width
 * band with one sentence and the WhatsApp action). The main action opens
 * the enquiry composer; a direct WhatsApp link appears only once the
 * client's real number is set in content/site.ts.
 */
export function ClosingEnquiry({ photo = closing.photo }: { photo?: PhotoBrief } = {}) {
  const direct = whatsappHref(site.whatsappNumber);

  return (
    <section id={CLOSING_ID} aria-labelledby="closing-title" className="relative overflow-hidden bg-surface">
      <BackdropArch className="-right-24 top-12 hidden h-[118%] w-auto lg:block" />
      <div className="page-container section-space relative">
        <div className="page-grid gap-y-12 lg:items-end">
          <div className="col-span-4 sm:col-span-8 lg:col-span-7 lg:row-start-1">
            <p className="text-eyebrow text-muted" data-reveal="rise">Enquire</p>
            <h2 id="closing-title" className="text-statement mt-6" data-reveal="text">
              Tell us about your day.
            </h2>
            <Ornament className="mt-10" />
            <p className="text-lead mt-8 max-w-(--container-prose) text-muted" data-reveal="rise">
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

          <div className="col-span-3 col-start-2 sm:col-span-4 sm:col-start-5 lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <div className="relative">
              <Photo
                shape="arch"
                brief={photo}
                ratio="4:5"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 75vw"
                reveal="scroll"
                parallax={6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
