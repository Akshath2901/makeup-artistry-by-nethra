import Link from "next/link";
import { enquireHref } from "@/content/site";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { Wordmark } from "./Wordmark";

/**
 * Shared header (Phase 2 "Navigation").
 * Phones: wordmark + "Menu". Tablet and desktop: wordmark, three text
 * links and "Enquire" as the only filled button. It stays at the top and
 * settles (rule appears, wordmark shrinks slightly) after scrolling.
 */
export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-40 bg-paper">
      <div className="page-container flex h-(--header-height) items-center justify-between gap-6">
        <Wordmark />

        <div className="flex items-center gap-8 lg:gap-12">
          <DesktopNav />
          <Link href={enquireHref} className="btn-primary hidden md:inline-flex">
            Enquire
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
