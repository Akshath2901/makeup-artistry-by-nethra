# CLAUDE.md — Bridal makeup artist website (Velora Technologies client project)

Draft for project-owner review. Claude Code reads this file at the start of every session.

## What this project is

A premium website for a professional bridal makeup artist in Hyderabad, India. Bookings happen over WhatsApp. Velora Technologies manages content after launch. Target delivery: 2–4 weeks.

## Source of truth

Read these before planning or writing code:

1. `docs/phase-1-discovery-plan.md` — approved product plan.
2. `docs/phase-2-design-direction.md` — design direction. **Status: APPROVED by the project owner on 2026-11-12** (recommended option for all four decisions).
3. `docs/briefs/claude-code-handoff.md` — how we work in Claude Code.
4. `docs/briefs/phase-1-brief.md` and `docs/briefs/phase-2-brief.md` — original briefs.
5. `AGENTS.md` — Next.js 16 notes: read the matching guide in `node_modules/next/dist/docs/` before writing Next.js code.
6. `docs/mobile-first-requirements.md` — **non-negotiable for every stage.** Design and build each component for phones first, then enhance for tablet and desktop. Test at 320, 360, 375, 390, 414, 430, 768, 820, 1024, 1280, 1440 and 1920 px, and report exactly which widths were tested.

Where Phase 2 marks a decision as resolved, it overrides Phase 1.

**Build order (decided 2026-11-12):** structure first. Build the first release exactly as the approved plans describe, with placeholders, so it can be shown to the client. 3D animation, live video and a fuller booking platform are ideas for a later phase. Do not build them until the project owner approves them as a planned change.

If an unresolved requirement affects what you are about to build, stop and ask. Never silently decide.

## Never invent client content

**Confirmed identity (Stage 6, 2026-11-13).** These replace the temporary "KRITI" development identity and live only in `src/content/site.ts`:

- Artist: **Nethra Gollapudi**. Brand: **Makeup Artistry by Nethra**. Brand ID: `makeupartistrybynethra`.
- Email: `nethragollapudi2455@gmail.com` (public on the site, as a mailto link).

The tagline "The Art of Bridal Beauty." was carried over from the development identity and still needs the client's confirmation.

Everything else below is still not confirmed. Do not make it up, even as "example" content that ships:

- positioning line, bio and all other copy
- services, prices, booking steps, service areas
- WhatsApp number, phone, domain, Instagram handle (whether the brand ID is also her Instagram handle is unconfirmed)
- reviews, testimonials, credentials, awards, numbers
- photographs (no stock images presented as her work)

Use explicit, searchable placeholders instead, for example `[TBD: WhatsApp number]` or `[CLIENT PHOTO: signature bridal look, 4:5]`.

## Scope limits

- No database, authentication, payments, CMS or extra backend services unless the project owner confirms a requirement.
- Stack (confirmed by the project owner, 2026-11-12): Next.js (App Router), TypeScript, Tailwind CSS, hosted on Vercel. May be revisited later; any change needs project-owner approval.
- Add a dependency only after explaining why it is needed and getting approval.
- Package manager: **npm** (confirmed 2026-11-12). Do not use pnpm or yarn in this project.

## Safety rules

- **Never delete, overwrite, rename or regenerate any `.env` file** (`.env`, `.env.local`, `.env.*`). Never print their contents.
- Never put secrets, API keys or tokens in source code or commits.
- Ask before: deleting files, changing existing configuration, upgrading dependencies, or any `git push`, `git reset --hard`, force operation or history rewrite.
- Do not delete, move or restructure existing work without approval.
- This machine is Windows and the project path contains a space (`C:\Users\Rachana Battipally\...`). Always quote paths in commands.

## How we work

- One stage at a time, in the order of `docs/briefs/claude-code-handoff.md` section 7.
- Inspect before changing; plan before implementing.
- When the project owner must run something, give the exact command, the folder to run it in, what it does, what success looks like, and what to paste back on failure.
- Diagnose errors before changing anything. Change one thing at a time.

## End-of-stage report (required)

1. What changed, and why.
2. Files created or modified.
3. Commands and tests actually run.
4. What passed, and what remains unverified.
5. What the project owner should do next.
6. Whether approval is needed before continuing.

Never claim something works, a test passed or a deploy succeeded unless it was actually verified.

## Design rules (apply once Phase 2 is approved)

- Use the design tokens, type scale, spacing, breakpoints and aspect ratios from the Phase 2 doc. No ad-hoc colours, sizes or fonts.
- One primary action per screen. WhatsApp is the primary enquiry path.
- No carousels, decorative statistics, floating widgets or gradients.
- Motion (Stage 5.1, approved by the project owner 2026-11-13): **GSAP 3.15.1** with ScrollTrigger, SplitText and Flip is the advanced motion engine; CSS stays for hovers, underlines, menu and simple load entrances. All GSAP code lives in `src/lib/motion/` and `src/components/motion/`. Allowed: welcome intro (once per session, skippable), scroll-triggered and scroll-linked reveals, subtle parallax-like image movement, desktop-only pinned sections. Not allowed: Lenis or other scroll libraries, WebGL, 3D, looping decorative motion, scroll-jacking. Respect reduced motion; all content works without animation. Mobile performance beats visual effects. Details: "Motion decision" in `docs/mobile-first-requirements.md`.
- Photography (Stage 5.1, owner decision 2026-11-13): exactly **six** unique demo photographs across the whole site (`src/content/portfolio.ts`). Do not add more; reuse them with different crops.
- Accessibility target: WCAG 2.2 AA. Respect reduced-motion settings. Nothing essential depends on hover.

## Communication

The project owner is building professional engineering skills on this real project. Explain decisions briefly and clearly. Give one main task at a time, and wait for their result before continuing.
