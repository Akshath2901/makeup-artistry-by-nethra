import type { Metadata } from "next";
import { PageOpening } from "@/components/layout/PageOpening";
import { PageTransition } from "@/components/motion/PageTransition";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How this website handles your information.",
};

/*
 * DRAFT for client and legal review. It describes how the site is built
 * today (2026-11-13); it is not legal advice and must be reviewed, and
 * re-checked against the live site, before launch.
 */
const sections = [
  {
    title: "Who we are",
    body: [
      `This website belongs to ${site.name}, the bridal makeup practice of ${site.artistName} in Hyderabad.`,
      `Contact: ${site.email}.`,
    ],
  },
  {
    title: "What this website collects",
    body: [
      "You do not need an account to use this website, and it has no forms that send your details to our own server.",
      "When you enquire, you choose to open WhatsApp with a message. What you share there is handled by WhatsApp under its own privacy policy, and by us only to reply to your enquiry.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "At present this website sets no advertising or analytics cookies.",
      "[TBD: Update this section if privacy-friendly analytics are added before launch.]",
    ],
  },
  {
    title: "Hosting and fonts",
    body: [
      "[TBD: Hosting provider, expected to be Vercel, which keeps standard server logs such as IP addresses for security.]",
      "Fonts are served from this website, so your browser does not contact Google Fonts.",
    ],
  },
  {
    title: "How long we keep information",
    body: ["[TBD: How long enquiry messages are kept, and how to ask for them to be deleted]"],
  },
  {
    title: "Your choices",
    body: [`To ask about your information, email ${site.email}.`],
  },
];

/** Privacy notice: readable, styled, and clearly marked as a draft. */
export default function PrivacyPage() {
  return (
    <PageTransition>
      <PageOpening
        id="privacy-intro"
        eyebrow="Privacy notice"
        title="Your information, plainly."
        lead={
          <p className="border-l-2 border-ink pl-4">
            <strong className="font-medium text-ink">Draft for review.</strong> This notice describes how the website
            works today and must be reviewed by the client (and a legal adviser) before launch.{" "}
            <span className="placeholder-text">[TBD: Last updated date]</span>
          </p>
        }
      />

      <section aria-label="Privacy notice" className="page-container pb-(--section-space)">
        <ol className="border-t border-rule">
          {sections.map((section, i) => (
            <li key={section.title} className="page-grid gap-y-4 border-b border-rule py-10 lg:py-14" data-reveal="rise">
              <span className="text-caption col-span-4 text-muted tabular-nums sm:col-span-1 lg:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-h2 col-span-4 sm:col-span-7 lg:col-span-4">{section.title}</h2>
              <div className="text-body col-span-4 flex max-w-(--container-prose) flex-col gap-4 text-muted sm:col-span-7 sm:col-start-2 lg:col-span-6 lg:col-start-7">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className={paragraph.startsWith("[TBD") ? "placeholder-text" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageTransition>
  );
}
