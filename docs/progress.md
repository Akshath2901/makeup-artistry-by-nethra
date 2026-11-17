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
| 6 | The Royal Digital Experience: official identity, royal welcome, brand graphics, icons and sharing image | Done and approved by the project owner, 2026-11-13 (commit f14e098) |
| 6.1 | Owner changes (2026-11-17): welcome on every page load, royal animation across the site, Instagram replaces WhatsApp | Done, 2026-11-17 (not committed); awaiting owner review |
| 7 | Enquiry: was "enquiry form and WhatsApp integration"; WhatsApp is now replaced by Instagram, so Stage 7 needs re-scoping with the owner | Not started |
| 8–12 | See `docs/briefs/claude-code-handoff.md` section 7 | Not started |

## Owner decisions, 2026-11-17 (change to approved Phase 2 / Stage 6)

- **Instagram replaces WhatsApp fully** as the enquiry path. Every "Enquire on Instagram" action opens a direct message (`https://ig.me/m/<handle>`) in a new tab. The handle is unconfirmed: until it is set in `contact.instagramHandle` (`src/content/site.ts`), the actions lead to `/enquire`, which shows `[TBD: Instagram handle]`. Instagram cannot pre-write a message, so the Phase 2 WhatsApp composer no longer applies. WhatsApp code (`src/lib/whatsapp.ts`, `WhatsAppIcon`) was removed; it is in git history (f14e098).
- **The welcome plays on every full page load** (refresh or new visit), on any page, instead of once per session. It no longer plays when moving between pages.
- **Royal animation across the site:** invitation page openings (corner flourishes draw in, titles appear letter by letter), ornaments that draw on scroll (lotus buds in section markers, dividers, arches), palace-door transitions between pages, and photographs unveiled inside their arches with the arch line tracing around them.

## Identity and demo photos

- Official identity (Stage 6): **Makeup Artistry by Nethra**, artist **Nethra Gollapudi**, brand ID `makeupartistrybynethra`, email `nethragollapudi2455@gmail.com`. It replaced the temporary "KRITI" development identity everywhere.
- Brand, SEO and contact settings live in one place: `brand`, `contact` and `seo` in `src/content/site.ts`. Pages read `site` (a compatibility view of the same values).
- Still to confirm with the client: **Instagram handle** (needed for every enquiry button), the tagline "The Art of Bridal Beauty." (carried over), phone, promised reply time, service area, bio, portrait, services and prices, domain.
- Exactly **six** Unsplash demonstration photos are used across the whole site, each labelled on screen. Register and replacement steps: `docs/demo-photography.md`. **All six must be replaced before public launch.**

## Brand graphics and assets (Stage 6)

- Motifs (`src/components/graphics/motifs.tsx`): the palace arch (a clip path defined once in the layout, used through `.arch-mask` or `<Photo shape="arch">`), arch outline, lotus divider, lotus bud, corner flourish, numbered section marker, faint backdrop arch. All are original SVG line drawings, no images.
- Welcome (`src/components/home/WelcomeIntro.tsx`, rendered by the root layout): an invitation card whose arch, flourishes and lockup draw in, then two doors open onto the page. Every full page load, any page (since 2026-11-17); never on navigation between pages. Skippable (button or Escape), no audio, video or extra photographs, skipped with reduced motion. State is `<html data-intro="playing" | "open" | "done">` (`src/lib/motion/intro.ts`); page animations wait for "open" with `afterIntro()`, and CSS entrance animations are paused while it is "playing".
- Icons and sharing image are Next.js file conventions in `src/app/`: `icon.svg` (N in the arch), `apple-icon.png` (180 px), `favicon.ico` (32 and 48 px), `opengraph-image.png` (1200×630) with `opengraph-image.alt.txt`. To change them, edit the source drawing and re-export; do not hand-edit the PNGs.
- Metadata (title template, description, Open Graph, X card, theme colour) is set in `src/app/layout.tsx` from `seo`. `metadataBase` uses the Vercel production URL, falling back to localhost; update when the domain is confirmed.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Cinematic hero (after the welcome, which plays on every full page load), artist introduction, pinned signature looks (desktop), occasions band, services, booking steps, closing enquiry |
| `/portfolio` | Statement opening, Flip-animated filterable gallery with lightbox, index of looks, closing enquiry |
| `/portfolio/[look]` | Six look pages: photograph, story, notes, two close crops, previous and next |
| `/services` | Occasions with placeholder details, booking steps, questions (placeholders) |
| `/about` | Introduction, her words, approach, where she works (placeholders, no stock portrait) |
| `/enquire` | What to include in an Instagram message, contact details, "Message on Instagram" once the handle exists |
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

- Scroll reveals: `data-reveal="rise" | "text" | "chars" | "image" | "line" | "line-y" | "svg"`. `chars` is the letter-by-letter reveal used for page titles. Stagger with `style={{ "--delay": "120ms" }}`.
- Page openings: `<InvitationCorners />` inside a `relative overflow-hidden` section adds the four drawn corner flourishes.
- Page changes use the palace-door view transition (`doors-close` / `doors-open` in `globals.css`).
- Anything that must wait for the welcome uses `afterIntro()` from `src/lib/motion/intro.ts`.
- Scroll-linked: `<Photo parallax={6} />` for image drift; `data-scrub="x"` for sideways type; `data-scrub="draw-y"` for a line that grows with scroll.
- Above-the-fold headings that use `data-reveal="text"` also take `data-prehide` (no flash before animating).
- Sections that run their own GSAP timeline add `data-motion-manual` so MotionRoot leaves them alone.
- All GSAP code runs inside `gsap.matchMedia()` with the reduced-motion query, and is reverted on unmount.
- Never use `once: true` on ScrollTriggers; use `toggleActions: "play none none none"` (self-killing triggers crash the refresh loop).
- After `SplitText.create(..., { mask })`, call `roomForDescenders(split.masks)` so tight display headings do not clip letters such as y, g and p.

## Known open items

- The Instagram icon is a fine-outline version of the glyph; check it against Instagram's brand guidelines before launch.
- With the welcome on every load, repeat visitors see it each time (owner's choice); it can be skipped with the button or Escape.
- `₹` may need the `latin-ext` font subset when prices are added.
- Site is set to `noindex` until launch (remove in Stage 10).
- "Kind words" (reviews) is left out until genuine reviews with permission exist.
- Unused starter images in `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) can be deleted with owner approval.
