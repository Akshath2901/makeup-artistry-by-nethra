/**
 * Homepage content and photo briefs.
 *
 * Confirmed facts only (docs/phase-1-discovery-plan.md):
 * bridal makeup, Hyderabad, enquiries happen on WhatsApp.
 * Everything else is a visible "[TBD: …]" or "[CLIENT PHOTO: …]"
 * placeholder. Never replace these with invented details.
 *
 * Each photo entry is also the shot list for the client: subject,
 * aspect ratio, composition and visual treatment. To add a real photo,
 * put the file in /public/photos and set `src` (and `alt`).
 */

import type { PhotoBrief } from "@/components/ui/Photo";

/** Confirmed in Phase 1: specialisation and city. */
export const confirmedFacts = {
  specialisation: "Bridal makeup",
  city: "Hyderabad",
} as const;

export const hero = {
  positioning: "[TBD: One-line positioning, approved by the client]",
  caption: "[TBD: Caption, e.g. ceremony or look, with the bride's permission]",
  photo: {
    subject: "signature bridal portrait",
    composition:
      "Single bride, vertical, face in the upper third, eyes sharp; jewellery and neckline visible.",
    treatment: "Natural or soft window light, true skin tones, no filters. Original at least 2400 px tall.",
  } satisfies PhotoBrief,
};

export const artist = {
  intro: "[TBD: Two or three sentences in the artist's own voice]",
  photo: {
    subject: "artist portrait",
    composition: "The artist at work or looking to camera, vertical, uncluttered background.",
    treatment: "Warm, natural light; same colour handling as the portfolio.",
  } satisfies PhotoBrief,
};

export type LookPair = {
  caption: string;
  full: PhotoBrief;
  detail: PhotoBrief;
};

/** Phase 2 signature: a full look beside a close crop of the same work. */
export const lookPairs: LookPair[] = [
  {
    caption: "[TBD: Look one, ceremony and bride's first name, with permission]",
    full: {
      subject: "full bridal look, bride one",
      composition: "Head to waist, vertical, outfit and jewellery visible.",
      treatment: "Even light that shows true skin tone and texture.",
    },
    detail: {
      subject: "detail crop, bride one",
      composition: "Close crop of eyes or lips from the same look; high-resolution original.",
      treatment: "Sharp focus on skin texture; no retouching beyond the photographer's delivery.",
    },
  },
  {
    caption: "[TBD: Look two, ceremony and bride's first name, with permission]",
    full: {
      subject: "full bridal look, bride two",
      composition: "Head to waist, vertical; a different ceremony or style from look one.",
      treatment: "Even light that shows true skin tone and texture.",
    },
    detail: {
      subject: "detail crop, bride two",
      composition: "Close crop of eyes, brows or base from the same look.",
      treatment: "Sharp focus on skin texture; no heavy retouching.",
    },
  },
];

export type PortfolioTile = {
  category: string;
  photo: PhotoBrief;
};

export const selectedWork: PortfolioTile[] = [
  {
    category: "[TBD: Category]",
    photo: {
      subject: "portfolio image one",
      composition: "Vertical portrait, bride looking away from camera.",
      treatment: "Natural light, editorial calm.",
    },
  },
  {
    category: "[TBD: Category]",
    photo: {
      subject: "portfolio image two",
      composition: "Vertical, three-quarter view of a finished look.",
      treatment: "Natural light, true colour.",
    },
  },
  {
    category: "[TBD: Category]",
    photo: {
      subject: "portfolio detail three",
      composition: "Square close-up: hands, jewellery or a makeup detail.",
      treatment: "Shallow depth of field.",
    },
  },
  {
    category: "[TBD: Category]",
    photo: {
      subject: "wide portfolio image four",
      composition: "Horizontal: getting ready, or a bride with family, faces clear.",
      treatment: "Candid, warm.",
    },
  },
  {
    category: "[TBD: Category]",
    photo: {
      subject: "portfolio image five",
      composition: "Vertical portrait of a different look from images one and two.",
      treatment: "Natural light, true colour.",
    },
  },
];

export type ServicePreview = {
  name: string;
  summary: string;
};

/**
 * Only "Bridal makeup" is confirmed (Phase 1). Other services, inclusions,
 * timings and prices wait for the client's confirmed list.
 */
export const servicesPreview: ServicePreview[] = [
  {
    name: "Bridal makeup",
    summary: "[TBD: What is included, time needed and trial availability]",
  },
  {
    name: "[TBD: Second service, confirmed by the client]",
    summary: "[TBD: What is included]",
  },
  {
    name: "[TBD: Third service, confirmed by the client]",
    summary: "[TBD: What is included]",
  },
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
  {
    title: "[TBD: Step two, as the artist describes it]",
    detail: "[TBD: What happens, and when]",
  },
  {
    title: "[TBD: Step three]",
    detail: "[TBD: What happens, and when]",
  },
  {
    title: "[TBD: Step four]",
    detail: "[TBD: What happens, and when]",
  },
];

export const closing = {
  replyTime: "[TBD: Promised reply time]",
  photo: {
    subject: "closing detail image",
    composition: "Horizontal, quiet detail: bride's profile, hands, or the final touch before the ceremony.",
    treatment: "Soft light, calm; room for the eye to rest.",
  } satisfies PhotoBrief,
};
