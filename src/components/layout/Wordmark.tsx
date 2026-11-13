import Link from "next/link";
import { brand } from "@/content/site";

/**
 * The brand lockup: MAKEUP ARTISTRY in spaced capitals over an italic
 * "by Nethra". Set in Fraunces, so it stays a typographic wordmark until
 * the client supplies a logo. Links home; read aloud as the brand name.
 */
export function Wordmark({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${brand.name}, home`}
      className="wordmark inline-flex min-h-12 flex-col justify-center gap-1 text-ink"
    >
      <span className="text-wordmark-primary">{brand.wordmark.primary}</span>
      <span className="text-wordmark-secondary pl-[0.1em] text-muted">{brand.wordmark.secondary}</span>
    </Link>
  );
}
