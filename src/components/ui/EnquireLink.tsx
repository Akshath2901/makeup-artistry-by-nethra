import Link from "next/link";
import type { ReactNode } from "react";
import { enquiryTarget } from "@/lib/instagram";

/**
 * The enquiry action used everywhere ("Enquire on Instagram"): opens a
 * direct message to her on Instagram, in a new tab, once the handle is
 * set in content/site.ts; until then it leads to the Enquire page.
 */
export function EnquireLink({
  className,
  children,
  onClick,
  label,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  /** Accessible name when the visible text is short (e.g. "Ask about this"). */
  label?: string;
}) {
  const { href, external } = enquiryTarget();
  if (external) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label ? `${label} (opens Instagram in a new tab)` : undefined}
      >
        {children}
        {!label && <span className="sr-only"> (opens Instagram in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick} aria-label={label}>
      {children}
    </Link>
  );
}
