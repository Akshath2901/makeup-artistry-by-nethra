/**
 * Official brand identity, contact details and SEO defaults, in one place.
 *
 * Confirmed by the project owner on 2026-11-13 (Stage 6):
 *   artist name, brand name, brand ID and email.
 * Everything else that is unknown is null (the UI then shows a visible
 * "[TBD: …]" placeholder instead of a broken link) or marked "confirm".
 * Never invent contact details, social links or claims.
 */

export type NavItem = {
  label: string;
  href: string;
};

/** The brand: change it here and the whole site follows. */
export const brand = {
  /** Official brand name. */
  name: "Makeup Artistry by Nethra",
  /** Two-line wordmark lockup. */
  wordmark: { primary: "Makeup Artistry", secondary: "by Nethra" },
  /** The artist. */
  artistName: "Nethra Gollapudi",
  artistFirstName: "Nethra",
  /** Brand ID (not linked anywhere until the platform it belongs to is confirmed). */
  id: "makeupartistrybynethra",
  /** Letter used in the monogram (favicon, small marks). */
  monogram: "N",
  /**
   * Carried over from the development identity. Not confirmed by the
   * client: confirm or replace before launch.
   */
  tagline: "The Art of Bridal Beauty.",
  /** Confirmed in Phase 1. */
  specialisation: "Bridal makeup",
  city: "Hyderabad",
} as const;

/** Contact. Only the email is confirmed. */
export const contact = {
  email: "nethragollapudi2455@gmail.com",
  /** Phone in international format. */
  phone: null as string | null,
  /** WhatsApp in international format, digits only (e.g. "91…"). */
  whatsappNumber: null as string | null,
  /** Instagram handle without the @ (unconfirmed, so not linked). */
  instagramHandle: null as string | null,
} as const;

/** Defaults for page titles, descriptions and social sharing. */
export const seo = {
  title: `${brand.name} · Bridal makeup in ${brand.city}`,
  titleTemplate: `%s · ${brand.name}`,
  description: `${brand.name}: bridal makeup by ${brand.artistName} in ${brand.city}. Enquire on WhatsApp.`,
  siteName: brand.name,
  locale: "en_IN",
  /** Social sharing image (src/app/opengraph-image.png). */
  ogImageAlt: `${brand.name}, ${brand.artistName}. Bridal makeup in ${brand.city}.`,
  themeColor: "#f6f1e9",
} as const;

/**
 * Convenience view used by components. Prefer these fields over
 * hard-coding any name, email or line in a component.
 */
export const site = {
  name: brand.name,
  artistName: brand.artistName,
  firstName: brand.artistFirstName,
  tagline: brand.tagline,
  serviceArea: "[TBD: Service area and travel areas]",
  email: contact.email,
  phone: contact.phone,
  whatsappNumber: contact.whatsappNumber,
  instagramHandle: contact.instagramHandle,
  copyrightHolder: brand.name,
  copyrightYear: 2026,
} as const;

/** Main pages, in the order Phase 2 lists them. */
export const mainNav: NavItem[] = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

/** The primary enquiry action leads to the WhatsApp composer page. */
export const enquireHref = "/enquire";
