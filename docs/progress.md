# Implementation progress

Short checkpoint so any session can pick up where the last one stopped.

| # | Stage | Status |
| --- | --- | --- |
| 1 | Environment and repository setup | Done |
| 2 | Project structure and configuration | Done |
| 3 | Design tokens, typography and shared layout | Done, 2026-11-13 (not committed yet) |
| 4 | Home page and navigation | Done, 2026-11-13 (not committed yet) |
| 5 | Portfolio and gallery | Next |
| 6–12 | See `docs/briefs/claude-code-handoff.md` section 7 | Not started |

## Where things live

| What | File |
| --- | --- |
| Colour, type, spacing, grid, breakpoint and motion tokens; button and link styles; all motion CSS | `src/app/globals.css` |
| Fonts (Fraunces, Schibsted Grotesk), skip link, header, footer | `src/app/layout.tsx` |
| Site details and placeholders (name, WhatsApp, Instagram, nav) | `src/content/site.ts` |
| Homepage content, placeholders and the photo shot list | `src/content/home.ts` |
| WhatsApp and Instagram link builders | `src/lib/whatsapp.ts` |
| Header, desktop nav, mobile menu, footer, wordmark | `src/components/layout/` |
| Homepage sections and the mobile enquiry bar | `src/components/home/` |
| Scroll reveals, page transitions | `src/components/motion/` |
| `Photo` (placeholder now, real image later), `PhotoPlaceholder`, `SectionHeading` | `src/components/ui/` |
| Visual reference of the whole system (not linked, not indexed) | `/styleguide` |

## Adding a real photo

1. Put the file in `public/photos/` (for example `hero.jpg`).
2. In `src/content/home.ts`, set that slot's `src: "/photos/hero.jpg"`, `alt` (describe the look) and, if needed, `focus` (for example `"50% 30%"` to keep the face in frame).
3. Nothing else changes: the layout keeps the same box, so nothing shifts.

## How to use the motion patterns

- Near the top of a page (runs on load): classes `enter-text` (headings), `enter-rise` (blocks), `enter-image` (images), `enter-line` (fine lines).
- Further down (runs on scroll): attribute `data-reveal="text"`, `"rise"`, `"image"`, `"line"` or `"line-y"`.
- Stagger with `style={{ "--delay": "120ms" }}`.
- `photo-hover` on an image box adds a slight zoom on devices that can hover.
- Wrap each page's content in `<PageTransition>`.
- Reduced motion and no-JavaScript cases are handled in CSS; nothing extra is needed.

## Known open items

- WhatsApp icon is a simplified mark; swap in the official glyph before launch.
- `₹` may need the `latin-ext` font subset when prices are added (Stage 6).
- Site is set to `noindex` until launch (remove in Stage 10).
- The mobile enquiry bar is on Home only; add it to other pages as they are built (hide it on Enquire).
- "Kind words" (reviews) is left out of Home until genuine reviews with permission exist.
- Unused starter images in `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) can be deleted with owner approval.
