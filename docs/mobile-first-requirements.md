# Mobile-first requirements

> **Status: REQUIRED.** Set by the project owner on 2026-11-13. Applies to every stage of the project: homepage, portfolio, gallery, about, services, enquiry, any future booking pages, navigation, animations and footer.
>
> **Motion decision (2026-11-13):** the project owner chose the fuller motion set, built CSS-only. See "Motion decision" at the end; it replaces the Phase 2 motion rules.

## Critical requirement

This is a mobile-first website. Mobile responsiveness is the highest design and engineering priority of this project.

Most prospective customers find the makeup artist through Instagram and open the website on their smartphones. Mobile is the primary experience; desktop is secondary.

Do not build desktop first and adapt it to mobile later. Every component, section, animation, image, navigation element and enquiry interaction starts from mobile.

This requirement is non-negotiable.

**Final priority: mobile experience > desktop experience.** A visually impressive desktop website with a poor mobile experience is a failed implementation.

## 1. Mobile-first design approach

Before implementing any component:

- Think about its mobile layout first.
- Establish its mobile dimensions and spacing.
- Determine how typography scales.
- Determine how images are cropped.
- Determine how animations behave on touch devices.
- Determine how users navigate with their thumbs.

Then progressively enhance for tablet and desktop.

- Use Tailwind mobile-first conventions: unprefixed classes are the mobile styles; `md:`, `lg:` and wider prefixes add tablet and desktop changes.
- Do not simply shrink desktop components. Compose layouts specifically for small screens.

## 2. Responsive viewport testing

Test at these widths:

| Group | Widths (px) |
| --- | --- |
| Mobile | 320, 360, 375, 390, 414, 430 |
| Tablet | 768, 820, 1024 |
| Desktop | 1280, 1440, 1920 |

Check every important page and shared component. The site must not have:

- horizontal overflow
- clipped headings
- overlapping elements
- broken image ratios
- tiny buttons
- unreadable text
- unusable navigation
- unintentional whitespace
- content extending outside the viewport

A single screenshot is not proof of responsiveness.

## 3. Mobile animation requirements

Animations must work well on mobile. Desktop animations must not be copied to mobile without considering performance and usability. Motion behaviour is responsive.

Requested examples: smooth entrance animations, lightweight scroll-triggered reveals, elegant image reveals, typography animations, subtle page transitions, refined mobile menu transitions.

On mobile:

- Avoid heavy continuous animations.
- Avoid excessive parallax.
- Avoid scroll-jacking.
- Avoid animations that delay access to content.
- Avoid hover-dependent interactions.
- Avoid animations that cause layout shifts.
- Respect `prefers-reduced-motion`.
- Keep interactions smooth on mid-range smartphones.

If an animation causes performance problems, provide a lighter mobile alternative. All essential content stays visible when animations are disabled.

## 4. Mobile image experience

Photography is central to this website.

- Use appropriate image aspect ratios.
- Use responsive image sizing.
- Use intentional object positioning so faces and makeup details stay visible.
- Avoid awkward cropping.
- Use optimised image formats where supported.
- Reserve image dimensions before loading to prevent layout shifts.

Never sacrifice the subject's visual quality to fit a fixed desktop layout.

## 5. Mobile navigation

Design the mobile navigation independently.

- Elegant opening and closing.
- Touch-friendly items with a clear visual hierarchy.
- Accessible keyboard behaviour and proper focus management.
- Escape key closes the menu.
- Body scroll is locked while the menu is open.
- A clear way to close the menu.
- No overlapping content.
- No reliance on hover.

## 6. Mobile enquiry and booking experience

WhatsApp is the primary conversion action.

- An easily reached WhatsApp enquiry action.
- Touch targets of an appropriate size, with clear CTA wording.
- No tiny or crowded buttons.
- No complicated multi-step interaction.
- No horizontal scrolling.
- Proper spacing around interactive elements.
- Correct mobile deep-link behaviour once the real WhatsApp number is supplied.

Do not invent a WhatsApp number or booking information. Any future approved booking pages or enquiry steps follow the same mobile-first standard.

## 7. Mobile performance

Prioritise real-world smartphone performance.

- Minimise JavaScript; use Server Components by default.
- Lazy-load non-critical images; avoid oversized image assets.
- Avoid unnecessary animation libraries and expensive continuous scroll effects.
- Prevent layout shifts.
- Keep initial content available quickly.
- Target strong Core Web Vitals.

Do not sacrifice usability for visual effects.

## 8. Mobile accessibility

Maintain WCAG 2.2 AA.

- Readable font sizes and sufficient contrast.
- Touch targets of about 44 × 44 CSS px or larger wherever practical.
- Visible focus states.
- Screen-reader-friendly navigation and proper semantic structure.
- Reduced-motion support.

## 9. Required testing after each stage

1. Run the website locally.
2. Inspect the mobile experience.
3. Test all navigation interactions.
4. Test all animations.
5. Test responsive image behaviour.
6. Check for horizontal overflow.
7. Check mobile typography.
8. Check tablet layouts.
9. Check desktop layouts.
10. Run the production build.

Use browser automation, where available, to inspect the rendered site at multiple viewports. Report exactly which viewports were tested. Never claim mobile responsiveness is verified if only desktop was inspected.

## Motion decision

**Approved by the project owner on 2026-11-13: fuller motion, CSS-only.** A richer but restrained motion experience. This is the single source of the motion rules; the Motion section of `phase-2-design-direction.md` summarises it and has been updated to match.

**Mobile performance takes priority over visual effects.** If an effect hurts speed or smoothness on a mid-range phone, use a lighter version on mobile or drop it.

Allowed:

- **Typography reveals:** elegant heading reveals, once, on first view.
- **Image masking and reveals:** a subtle mask (clip) reveal with a fade as images enter the screen, once only. Once the reveal ends, nothing covers the face or makeup.
- **Scroll-triggered reveals:** lightweight, once per element, and only where they help; not on every block.
- **Mobile navigation:** a smooth, short open and close transition for the full-screen menu.
- **Page transitions:** subtle, and only where technically practical without hurting speed or accessibility.
- **Full-screen viewer:** a short scale-from-thumbnail transition when it opens.

How it is built:

- CSS-first: transitions, keyframes, and browser features such as scroll-driven animations and view transitions. A tiny amount of built-in browser JavaScript (for example IntersectionObserver) only where CSS cannot do the job.
- No heavy animation libraries. Adding any motion dependency needs explanation and approval.
- Animate only `opacity`, `transform` and `clip-path`, so nothing causes layout shifts.
- Keep durations short (about 200–600 ms) and use one shared easing curve and duration set, defined as design tokens.
- Content is visible by default. If CSS or JavaScript fails or loads slowly, nothing stays hidden.
- On phones, use smaller distances and fewer simultaneous animations than on desktop.
- `prefers-reduced-motion: reduce` turns all movement off; content appears immediately and stays fully accessible.

Not allowed: heavy animation libraries, WebGL or 3D, continuous or looping motion, parallax, scroll-jacking, cursor effects, hover-only effects, and anything that delays access to content.
