"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { enquireHref } from "@/content/site";

/**
 * Phase 2 mobile enquiry bar: one action, "Enquire on WhatsApp".
 * - Phones only (hidden from 768 px in CSS).
 * - Slides up once the opening section has scrolled away.
 * - Slides away while the closing enquiry or the footer is on screen, so
 *   there is never a second WhatsApp button competing, and it never
 *   covers the footer links.
 * - Fixed and transform-only: no layout shift. Respects the safe area.
 * - Hidden from keyboards and screen readers while off screen (inert).
 */
export function MobileEnquiryBar({
  afterId,
  hideWhenIds,
}: {
  /** Show only once this element has scrolled above the screen. */
  afterId: string;
  /** Hide while any of these elements is on screen. */
  hideWhenIds: string[];
}) {
  const [pastOpening, setPastOpening] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const opening = document.getElementById(afterId);
    const blockers = hideWhenIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const footer = document.querySelector("footer");
    if (footer) blockers.push(footer);

    const onScreen = new Set<Element>();

    const openingObserver = new IntersectionObserver(([entry]) => {
      setPastOpening(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    });
    if (opening) openingObserver.observe(opening);

    const blockObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setBlocked(onScreen.size > 0);
    });
    blockers.forEach((el) => blockObserver.observe(el));

    return () => {
      openingObserver.disconnect();
      blockObserver.disconnect();
    };
  }, [afterId, hideWhenIds]);

  const visible = pastOpening && !blocked;

  return (
    <div className="enquiry-bar" data-visible={visible} inert={!visible}>
      <Link href={enquireHref} className="btn-primary w-full">
        <WhatsAppIcon />
        Enquire on WhatsApp
      </Link>
    </div>
  );
}
