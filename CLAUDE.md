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

The following are not confirmed. Do not make them up, even as "example" content that ships:

- the artist's name, positioning line, bio and all copy
- services, prices, booking steps, service areas
- WhatsApp number, email, domain, Instagram handle
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
- Motion: richer but restrained, CSS-first (approved 2026-11-13). Follow "Motion decision" in `docs/mobile-first-requirements.md`: typography reveals, image mask reveals, light scroll reveals, mobile menu and page transitions where practical. No heavy animation libraries, WebGL, 3D, looping motion, parallax or scroll-jacking. Respect reduced motion; all content works without animation. Mobile performance beats visual effects.
- Accessibility target: WCAG 2.2 AA. Respect reduced-motion settings. Nothing essential depends on hover.

## Communication

The project owner is building professional engineering skills on this real project. Explain decisions briefly and clearly. Give one main task at a time, and wait for their result before continuing.
