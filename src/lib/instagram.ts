import { enquireHref, site } from "@/content/site";

/**
 * Instagram links (owner decision 2026-11-17: Instagram replaces WhatsApp
 * as the enquiry path). Both return null while the handle is unconfirmed,
 * so callers show a "[TBD: Instagram handle]" placeholder instead of a
 * broken link. Set the handle once, in src/content/site.ts.
 */

function clean(handle: string | null): string | null {
  const value = handle?.trim().replace(/^@/, "");
  return value ? value : null;
}

/** Her profile: https://www.instagram.com/<handle>/ */
export function instagramProfileHref(handle: string | null): string | null {
  const h = clean(handle);
  return h ? `https://www.instagram.com/${h}/` : null;
}

/**
 * A direct-message chat with her: https://ig.me/m/<handle> (Instagram's
 * official short link; opens the app on phones, the web inbox on
 * desktop). Instagram cannot pre-write a message, unlike WhatsApp.
 */
export function instagramDmHref(handle: string | null): string | null {
  const h = clean(handle);
  return h ? `https://ig.me/m/${h}` : null;
}

/**
 * Where every "Enquire on Instagram" action goes: her DMs once the handle
 * is set; until then the Enquire page, which explains what to share and
 * shows the placeholder.
 */
export function enquiryTarget(): { href: string; external: boolean } {
  const dm = instagramDmHref(site.instagramHandle);
  return dm ? { href: dm, external: true } : { href: enquireHref, external: false };
}
