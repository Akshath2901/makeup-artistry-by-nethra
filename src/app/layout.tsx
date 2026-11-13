import type { Metadata, Viewport } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import { ArchClipDefs } from "@/components/graphics/motifs";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { brand, seo } from "@/content/site";
import "./globals.css";

/*
 * Fonts (Phase 2, pairing 1). Both are self-hosted by next/font, so there
 * is no request to Google from the visitor's browser.
 * Fraunces: optical-size axis on; "soft" and "wonk" stay at 0 (not loaded).
 * The true italic is loaded too (Stage 6): the brand lockup's "by Nethra"
 * and every pull quote use it, rather than a slanted upright.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

/*
 * Absolute URLs for sharing images. On Vercel this is the production
 * domain; locally it falls back to the dev server. Update when the
 * client's domain is confirmed (Stage 11).
 */
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

/*
 * Brand defaults for every page. Icons (icon.svg, apple-icon.png,
 * favicon.ico) and the sharing image (opengraph-image.png) are picked up
 * from src/app by Next.js file conventions.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  applicationName: seo.siteName,
  authors: [{ name: brand.artistName }],
  openGraph: {
    type: "website",
    siteName: seo.siteName,
    locale: seo.locale,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  // Pre-launch preview with demonstration photographs: keep search engines
  // out until launch (remove in Stage 10).
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: seo.themeColor,
  colorScheme: "light",
};

/*
 * Runs before first paint: marks motion-capable browsers (so the hero can
 * be pre-hidden without a flash) and remembers whether the welcome intro
 * has played this session. Failsafes in globals.css show content anyway
 * if JavaScript stops after this point.
 */
const PRE_PAINT = `(function(){try{var d=document.documentElement;if(!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("js-motion")}if(sessionStorage.getItem("nethra-welcome")){d.classList.add("intro-seen")}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${schibsted.variable}`} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col bg-paper text-ink">
        {/* First child of <body>: runs before any content is painted. */}
        <script dangerouslySetInnerHTML={{ __html: PRE_PAINT }} />
        <ArchClipDefs />
        <a
          href="#main"
          className="btn-primary fixed top-2 left-2 z-50 -translate-y-24 focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
