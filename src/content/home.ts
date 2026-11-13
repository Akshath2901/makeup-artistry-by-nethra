/**
 * Homepage content.
 *
 * Confirmed facts only (docs/phase-1-discovery-plan.md):
 * bridal makeup, Hyderabad, enquiries happen on WhatsApp.
 * The name and tagline are the owner's temporary development identity
 * (content/site.ts). Everything else is a visible "[TBD: …]" placeholder.
 *
 * Photo slots keep their shot-list notes for the client's real photos and,
 * for the preview, are filled with one of the SIX demo photographs via
 * fillSlot(). The artist's portrait is deliberately NOT filled with a
 * stock photo: that would misrepresent who the artist is.
 */

import type { PhotoBrief } from "@/components/ui/Photo";
import { fillSlot } from "./portfolio";
import { site } from "./site";

/** Confirmed in Phase 1: specialisation and city. */
export const confirmedFacts = {
  specialisation: "Bridal makeup",
  city: "Hyderabad",
} as const;

export const hero = {
  positioning: site.tagline,
  photo: fillSlot(
    {
      subject: "signature bridal portrait",
      composition:
        "Single bride, vertical, face in the upper third, eyes sharp; jewellery and neckline visible.",
      treatment: "Natural or soft window light, true skin tones, no filters. Original at least 2400 px tall.",
    } satisfies PhotoBrief,
    "royal-04",
  ),
};

export const artist = {
  intro: "[TBD: Two or three sentences in the artist's own voice]",
  story: "[TBD: How the artist works, in her own words]",
  photo: {
    subject: "artist portrait",
    composition: "The artist at work or looking to camera, vertical, uncluttered background.",
    treatment: "Warm, natural light; same colour handling as the portfolio.",
  } satisfies PhotoBrief,
};

export type ServicePreview = {
  name: string;
  summary: string;
};

/**
 * Only "Bridal makeup" is confirmed (Phase 1). The owner's portfolio
 * categories suggest the other occasions, but their inclusions, timings
 * and prices wait for the client's confirmed list.
 */
export const servicesPreview: ServicePreview[] = [
  { name: "Bridal makeup", summary: "[TBD: What is included, time needed and trial availability]" },
  { name: "Engagement & reception", summary: "[TBD: Confirm this service and what is included]" },
  { name: "Cocktail & party", summary: "[TBD: Confirm this service and what is included]" },
];

export type BookingStep = {
  title: string;
  detail: string;
};

/**
 * Step one is approved (Phase 2: WhatsApp composer with date, venue,
 * people and service). The steps after it are the client's to confirm.
 */
export const bookingSteps: BookingStep[] = [
  {
    title: "Message on WhatsApp",
    detail: "Share your date, venue, how many people need makeup and the service you'd like.",
  },
  { title: "[TBD: Step two, as the artist describes it]", detail: "[TBD: What happens, and when]" },
  { title: "[TBD: Step three]", detail: "[TBD: What happens, and when]" },
  { title: "[TBD: Step four]", detail: "[TBD: What happens, and when]" },
];

export const closing = {
  replyTime: "[TBD: Promised reply time]",
  photo: fillSlot(
    {
      subject: "closing detail image",
      composition: "Horizontal, quiet detail: bride's profile, hands, or the final touch before the ceremony.",
      treatment: "Soft light, calm; room for the eye to rest.",
    } satisfies PhotoBrief,
    "royal-03",
  ),
};
