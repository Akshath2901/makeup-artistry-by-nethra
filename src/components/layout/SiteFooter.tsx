import type { CSSProperties } from "react";
import Link from "next/link";
import { LotusDivider } from "@/components/graphics/motifs";
import { brand, mainNav, site } from "@/content/site";
import { instagramHref, whatsappHref } from "@/lib/whatsapp";

/**
 * Shared footer (Phase 2): wordmark, service area, the three page links,
 * WhatsApp, Instagram, Privacy notice and copyright. No newsletter, no
 * icon wall. Unknown details show as visible "[TBD: …]" placeholders,
 * never as broken links.
 */
export function SiteFooter() {
  const whatsapp = whatsappHref(site.whatsappNumber);
  const instagram = instagramHref(site.instagramHandle);

  return (
    <footer className="bg-surface text-ink">
      <div className="page-container pt-16 pb-10 lg:pt-24 lg:pb-12">
        <div className="page-grid gap-y-12">
          <div className="col-span-4 sm:col-span-8 lg:col-span-5" data-reveal="rise">
            {/* Full brand lockup */}
            <p className="flex flex-col gap-2" aria-label={brand.name}>
              <span className="font-serif text-[clamp(1.375rem,1.1rem+1.1vw,2rem)] leading-none font-light tracking-[0.18em] uppercase" aria-hidden="true">
                {brand.wordmark.primary}
              </span>
              <span className="text-h2 font-light italic text-muted" aria-hidden="true">
                {brand.wordmark.secondary}
              </span>
            </p>
            <LotusDivider className="mt-6 w-48" />
            <p className="text-eyebrow mt-4 text-muted">
              {brand.artistName} · {brand.specialisation} · {brand.city}
            </p>
            <p className="text-body mt-4 max-w-(--container-prose) text-muted">
              <span className="placeholder-text">{site.serviceArea}</span>
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-2 sm:col-span-4 lg:col-span-3 lg:col-start-7"
            data-reveal="rise"
            style={{ "--delay": "80ms" } as CSSProperties}
          >
            <h2 className="text-caption text-muted">Pages</h2>
            <ul className="mt-3 flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link text-body">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="col-span-2 sm:col-span-4 lg:col-span-3"
            data-reveal="rise"
            style={{ "--delay": "160ms" } as CSSProperties}
          >
            <h2 className="text-caption text-muted">Contact</h2>
            <ul className="mt-3 flex flex-col">
              <li className="flex min-h-11 items-center">
                {whatsapp ? (
                  <a href={whatsapp} className="nav-link text-body" rel="noopener noreferrer" target="_blank">
                    WhatsApp
                  </a>
                ) : (
                  <span className="text-body placeholder-text">[TBD: WhatsApp number]</span>
                )}
              </li>
              <li className="flex min-h-11 items-center">
                {instagram ? (
                  <a href={instagram} className="nav-link text-body" rel="noopener noreferrer" target="_blank">
                    Instagram
                  </a>
                ) : (
                  <span className="text-body placeholder-text">[TBD: Instagram handle]</span>
                )}
              </li>
              <li className="flex min-h-11 items-center">
                <a href={`mailto:${site.email}`} className="nav-link text-body [overflow-wrap:anywhere]">
                  {site.email}
                </a>
              </li>
              <li className="flex min-h-11 items-center">
                {site.phone ? (
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="nav-link text-body">
                    {site.phone}
                  </a>
                ) : (
                  <span className="text-body placeholder-text">[TBD: Phone number]</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
          <p className="text-caption text-muted">
            © {site.copyrightYear} {site.copyrightHolder}
          </p>
          <Link href="/privacy" className="nav-link text-caption text-muted">
            Privacy notice
          </Link>
        </div>
      </div>
    </footer>
  );
}
