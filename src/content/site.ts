/**
 * Site-wide details in one place.
 *
 * Nothing here is confirmed by the client yet. Every unknown value is
 * either null (so the UI shows a visible placeholder instead of a broken
 * link) or a "[TBD: …]" string that is easy to search for.
 * Never replace these with invented details.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const site = {
  /** The artist's name as it should appear. */
  name: "[TBD: Artist name]",
  /** Shown in the footer under the wordmark. */
  serviceArea: "[TBD: Service area, e.g. city and travel areas]",
  /** WhatsApp number in international format, digits only (e.g. "91…"). */
  whatsappNumber: null as string | null,
  /** Instagram handle without the @. */
  instagramHandle: null as string | null,
  /** Business name for the copyright line. */
  copyrightHolder: "[TBD: Business name]",
} as const;

/** Main pages, in the order Phase 2 lists them. */
export const mainNav: NavItem[] = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

/** The primary enquiry action leads to the WhatsApp composer page. */
export const enquireHref = "/enquire";
