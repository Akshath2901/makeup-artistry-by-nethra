/**
 * Builds an official WhatsApp click-to-chat link (https://wa.me/<number>).
 * Returns null while the client's number is unknown, so callers can show
 * a placeholder instead of a broken link.
 */
export function whatsappHref(number: string | null, message?: string): string | null {
  if (!number) return null;
  const digits = number.replace(/\D/g, "");
  if (!digits) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export function instagramHref(handle: string | null): string | null {
  if (!handle) return null;
  return `https://www.instagram.com/${handle.replace(/^@/, "")}/`;
}
