# Implementation progress

Short checkpoint so any session can pick up where the last one stopped.

| # | Stage | Status |
| --- | --- | --- |
| 1 | Environment and repository setup | Done |
| 2 | Project structure and configuration | Done |
| 3 | Design tokens, typography and shared layout | Done (commit 4fb82c3) |
| 4 | Home page and navigation | Done (commit 4fb82c3) |
| 5 | Portfolio and gallery, with demo photography | Done, 2026-11-13 (not committed) |
| 5.1 | Signature digital experience: GSAP motion, welcome intro, all eight page types, six photos | Done, 2026-11-13 (not committed) |
| 6 | The Royal Digital Experience: official identity, royal welcome, brand graphics, icons and sharing image | Done and approved by the project owner, 2026-11-13 (not committed) |
| 7–12 | See `docs/briefs/claude-code-handoff.md` section 7 | Not started |

## Identity and demo photos

- Official identity (Stage 6): **Makeup Artistry by Nethra**, artist **Nethra Gollapudi**, brand ID `makeupartistrybynethra`, email `nethragollapudi2455@gmail.com`. It replaced the temporary "KRITI" development identity everywhere.
- Brand, SEO and contact settings live in one place: `brand`, `contact` and `seo` in `src/content/site.ts`. Pages read `site` (a compatibility view of the same values).
- Still to confirm with the client: the tagline "The Art of Bridal Beauty." (carried over), WhatsApp number, phone, Instagram handle, service area, bio, portrait, services and prices, domain.
- Exactly **six** Unsplash demonstration photos are used across the whole site, each labelled on screen. Register and replacement steps: `docs/demo-photography.md`. **All six must be replaced before public launch.**

## Brand graphics and assets (Stage 6)

- Motifs (`src/components/graphics/motifs.tsx`): the palace arch (a clip path defined once in the layout, used through `.arch-mask` or `<Photo shape="arch">`), arch outline, lotus divider, lotus bud, corner flourish, numbered section marker, faint backdrop arch. All are original SVG line drawings, no images.
- Welcome (`src/components/home/WelcomeIntro.tsx`): an invitation card whose arch, flourishes and lockup draw in, then two doors open onto the homepage. Once per browser session (`sessionStorage` key `nethra-welcome`), skippable (button or Escape), no audio, video or extra photographs, skipped with reduced motion.
- Icons and sharing image are Next.js file conventions in `src/app/`: `icon.svg` (N in the arch), `apple-icon.png` (180 px), `favicon.ico` (32 and 48 px), `opengraph-image.png` (1200×630) with `opengraph-image.alt.txt`. To change them, edit the source drawing and re-export; do not hand-edit the PNGs.
- Metadata (title template, description, Open Graph, X card, theme colour) is set in `src/app/layout.tsx` from `seo`. `metadataBase` uses the Vercel production URL, falling back to localhost; update when the domain is confirmed.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Welcome intro (once per session), cinematic hero, artist introduction, pinned signature looks (desktop), occasions band, services, booking steps, closing enquiry |
| `/portfolio` | Statement opening, Flip-animated filterable gallery with lightbox, index of looks, closing enquiry |
| `/portfolio/[look]` | Six look pages: photograph, story, notes, two close crops, previous and next |
| `/services` | Occasions with placeholder details, booking steps, questions (placeholders) |
| `/about` | Introduction, her words, approach, where she works (placeholders, no stock portrait) |
| `/enquire` | What to share, contact details, WhatsApp link once the number exists (composer in Stage 7) |
| `/privacy` | Draft privacy notice, clearly marked for client and legal review |
| 404 | Branded not-found page with working links |
| `/styleguide` | Internal design-system reference (not linked, not indexed) |

## Where things live

| What | File |
| --- | --- |
| Design tokens, type scale (incl. `text-mega`, `text-statement`), button/link styles, CSS motion | `src/app/globals.css` |
| Fonts, pre-paint script, header, footer, motion root | `src/app/layout.tsx` |
| Brand, contact and SEO settings (single source) | `src/content/site.ts` |
| Brand graphics (arch, lotus, flourishes, section markers) | `src/components/graphics/motifs.tsx` |
| Icons, favicon, sharing image | `src/app/icon.svg`, `apple-icon.png`, `favicon.ico`, `opengraph-image.png` |
| Homepage content and shot list | `src/content/home.ts` |
| Categories, the six photographs, the six looks | `src/content/portfolio.ts` |
| GSAP setup (plugins, easing, media queries) | `src/lib/motion/gsap.ts` |
| Site-wide scroll choreography (`data-reveal`, `data-scrub`) | `src/components/motion/MotionRoot.tsx` |
| Welcome intro, hero timeline, pinned looks | `src/components/home/` |
| Gallery (Flip filters), lightbox | `src/components/portfolio/` |
| Shared page opening | `src/components/layout/PageOpening.tsx` |

## How to use the motion system

- Scroll reveals: `data-reveal="rise" | "text" | "image" | "line" | "line-y" | "svg"`. Stagger with `style={{ "--delay": "120ms" }}`.
- Scroll-linked: `<Photo parallax={6} />` for image drift; `data-scrub="x"` for sideways type; `data-scrub="draw-y"` for a line that grows with scroll.
- Above-the-fold headings that use `data-reveal="text"` also take `data-prehide` (no flash before animating).
- Sections that run their own GSAP timeline add `data-motion-manual` so MotionRoot leaves them alone.
- All GSAP code runs inside `gsap.matchMedia()` with the reduced-motion query, and is reverted on unmount.
- Never use `once: true` on ScrollTriggers; use `toggleActions: "play none none none"` (self-killing triggers crash the refresh loop).
- After `SplitText.create(..., { mask })`, call `roomForDescenders(split.masks)` so tight display headings do not clip letters such as y, g and p.

## Known open items

- WhatsApp icon is a simplified mark; swap in the official glyph before launch.
- `₹` may need the `latin-ext` font subset when prices are added.
- Site is set to `noindex` until launch (remove in Stage 10).
- "Kind words" (reviews) is left out until genuine reviews with permission exist.
- Unused starter images in `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) can be deleted with owner approval.
