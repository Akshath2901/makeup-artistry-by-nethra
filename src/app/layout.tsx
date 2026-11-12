import type { Metadata, Viewport } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { site } from "@/content/site";
import "./globals.css";

/*
 * Fonts (Phase 2, pairing 1). Both are self-hosted by next/font, so there
 * is no request to Google from the visitor's browser.
 * Fraunces: optical-size axis on; "soft" and "wonk" stay at 0 (not loaded).
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: "[TBD: Site description, approved by the client]",
  // Placeholder content: keep search engines out until launch (Stage 10).
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e9",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${schibsted.variable}`}>
      <body className="flex min-h-dvh flex-col bg-paper text-ink">
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
        <RevealObserver />
      </body>
    </html>
  );
}
