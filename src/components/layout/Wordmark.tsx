import Link from "next/link";
import { site } from "@/content/site";

/**
 * Typographic wordmark placeholder (Phase 2: "a simple typographic
 * wordmark" until the client supplies a logo). Links home.
 */
export function Wordmark({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="wordmark text-wordmark inline-flex min-h-11 items-center text-ink"
    >
      {site.name}
    </Link>
  );
}
