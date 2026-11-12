import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PageTransition } from "@/components/motion/PageTransition";
import { PhotoPlaceholder, type PhotoRatio } from "@/components/ui/PhotoPlaceholder";

export const metadata: Metadata = { title: "Styleguide" };

/*
 * Internal reference for the Stage 3 design system. Not linked from the
 * site. All text here is specimen text describing the system, not client
 * copy.
 */

const colours = [
  { name: "paper", value: "#F6F1E9", use: "Page background", className: "bg-paper" },
  { name: "surface", value: "#EDE5D8", use: "Quiet bands, form fields", className: "bg-surface" },
  { name: "ink", value: "#1F1B18", use: "Headings and body text", className: "bg-ink" },
  { name: "muted", value: "#5E554D", use: "Captions, secondary text", className: "bg-muted" },
  { name: "rule", value: "#D6CBBC", use: "Dividers, image placeholders", className: "bg-rule" },
  { name: "accent", value: "#7A3E2F", use: "Primary action, focus ring", className: "bg-accent" },
];

const typeScale = [
  { token: "text-display", sizes: "40 → 72", sample: "Display, light serif" },
  { token: "text-h1", sizes: "34 → 52", sample: "Heading one, serif" },
  { token: "text-h2", sizes: "27 → 38", sample: "Heading two, serif" },
  { token: "text-h3", sizes: "21 → 26", sample: "Heading three, sans medium" },
  { token: "text-lead", sizes: "19 → 21", sample: "Lead paragraph for the opening of a page." },
  { token: "text-body", sizes: "17 → 18", sample: "Body text for all running copy, set for comfortable reading on a phone held at arm's length." },
  { token: "text-caption", sizes: "14", sample: "Caption for an image or a footnote" },
  { token: "text-label", sizes: "14 → 15", sample: "Label for navigation and buttons" },
];

const ratios: { ratio: PhotoRatio; use: string }[] = [
  { ratio: "4:5", use: "portfolio tile" },
  { ratio: "2:3", use: "artist portrait" },
  { ratio: "1:1", use: "detail crop" },
  { ratio: "3:2", use: "wide detail" },
];

function delay(ms: number) {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-h2" data-reveal="text">
      {children}
    </h2>
  );
}

export default function StyleguidePage() {
  return (
    <PageTransition>
      <div className="page-container section-space">
        <p className="text-caption enter-rise text-muted">Internal · Stage 3 design system</p>
        <h1 className="text-display enter-text mt-4 max-w-[14ch]" style={delay(80)}>
          The Quiet Portrait
        </h1>
        <p className="text-lead enter-rise mt-6 max-w-(--container-prose) text-muted" style={delay(220)}>
          Ivory and Ink, Fraunces with Schibsted Grotesk, and restrained CSS-only motion. Scroll to
          see each reveal pattern.
        </p>

        {/* Colour */}
        <section className="mt-24 lg:mt-32" aria-labelledby="sg-colour">
          <div id="sg-colour">
            <SectionTitle>Colour</SectionTitle>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {colours.map((c, i) => (
              <li key={c.name} data-reveal="rise" style={delay(i * 60)}>
                <div className={`aspect-square border border-rule ${c.className}`} />
                <p className="text-label mt-3">{c.name}</p>
                <p className="text-caption text-muted">
                  {c.value} · {c.use}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Type */}
        <section className="mt-24 lg:mt-32" aria-labelledby="sg-type">
          <div id="sg-type">
            <SectionTitle>Type scale</SectionTitle>
          </div>
          <ul className="mt-8 flex flex-col divide-y divide-rule border-y border-rule">
            {typeScale.map((t) => (
              <li key={t.token} className="page-grid gap-y-2 py-6" data-reveal="rise">
                <p className="text-caption col-span-4 text-muted sm:col-span-2">
                  {t.token}
                  <br />
                  {t.sizes} px
                </p>
                <p className={`${t.token} col-span-4 sm:col-span-6 lg:col-span-10`}>{t.sample}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Actions */}
        <section className="mt-24 lg:mt-32" aria-labelledby="sg-actions">
          <div id="sg-actions">
            <SectionTitle>Actions</SectionTitle>
          </div>
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10" data-reveal="rise">
            <Link href="/enquire" className="btn-primary w-full sm:w-auto">
              <WhatsAppIcon />
              Enquire on WhatsApp
            </Link>
            <Link href="/portfolio" className="link-text text-body inline-flex min-h-11 items-center">
              Text link
            </Link>
            <Link href="/services" className="nav-link text-label">
              Navigation link
            </Link>
          </div>
          <p className="text-caption mt-6 max-w-(--container-prose) text-muted">
            One filled button per screen. Hover effects only appear on devices that can hover;
            nothing depends on them. Press Tab to see focus rings.
          </p>
        </section>

        {/* Grid */}
        <section className="mt-24 lg:mt-32" aria-labelledby="sg-grid">
          <div id="sg-grid">
            <SectionTitle>Grid</SectionTitle>
          </div>
          <p className="text-caption mt-4 text-muted">4 columns on phones, 8 on tablets, 12 on desktop.</p>
          <div className="page-grid mt-8" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className={`h-16 bg-surface ${i >= 4 ? "hidden sm:block" : ""} ${i >= 8 ? "sm:hidden lg:block" : ""}`}
              />
            ))}
          </div>
        </section>

        {/* Images */}
        <section className="mt-24 lg:mt-32" aria-labelledby="sg-images">
          <div id="sg-images">
            <SectionTitle>Image ratios and reveals</SectionTitle>
          </div>
          <p className="text-caption mt-4 max-w-(--container-prose) text-muted">
            Each image is revealed by a curtain lifting from the bottom edge, once, as it enters
            the screen. Space is reserved, so nothing shifts.
          </p>
          <ul className="mt-8 grid grid-cols-2 items-end gap-4 lg:grid-cols-4 lg:gap-6">
            {ratios.map((r, i) => (
              <li key={r.ratio} style={delay(i * 90)}>
                <PhotoPlaceholder ratio={r.ratio} label={r.use} reveal="scroll" />
              </li>
            ))}
          </ul>
        </section>

        {/* Motion */}
        <section className="mt-24 lg:mt-32" aria-labelledby="sg-motion">
          <div id="sg-motion">
            <SectionTitle>Motion</SectionTitle>
          </div>
          <dl className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Typography reveal", "Headings rise out of a mask, once. data-reveal=\"text\" or .enter-text."],
              ["Image reveal", "A curtain lifts and the image settles. data-reveal=\"image\" or .enter-image."],
              ["Section entrance", "A short fade and rise. data-reveal=\"rise\" or .enter-rise."],
              ["Navigation", "The mobile menu opens like a curtain; its links rise in one by one."],
              ["Page transition", "The old page fades out quickly; the new one fades and rises in."],
              ["Reduced motion", "With reduce motion switched on, everything appears instantly."],
            ].map(([term, detail], i) => (
              <div key={term} data-reveal="rise" style={delay(i * 60)}>
                <dt className="text-h3">{term}</dt>
                <dd className="text-body mt-2 text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </PageTransition>
  );
}
