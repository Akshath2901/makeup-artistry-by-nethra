> **Status:** approved planning input (Phase 1). Where Phase 2 records a decision as resolved, Phase 2 wins.
> Diagrams are omitted in this export; see the online doc: https://claude.ai/code/artifact/3ccefbb9-aec3-4767-a763-e893d8fc2136

# Makeup Artist Website — Phase 1 Discovery & Plan

Velora Technologies · Client website · Oct 11, 2026 · @akshath

## How to read this document

Every point carries one of four labels: **Confirmed** (stated in the Phase 1 brief), **Assumption** (a working guess to verify), **Recommendation** (our proposal, open to change) or **Client decision** (only the client can settle it).

No repository was shared or connected for this project, so nothing here depends on existing code. Repository-dependent choices (folder structure, reuse of Velora packages, existing config) wait until one exists. The project's placement within Velora is undecided and is not assumed anywhere in this plan.

## 1. Executive summary

**Recommendation:** ship a fast, editorial, image-led website in about three weeks plus one buffer week. The first release covers Home, Portfolio, About, Services and an Enquire page with a validated form and WhatsApp. It has no database, no payments and no live streaming.

- **Goal (assumption):** turn visitors into qualified enquiries. The site's job is to show the work at its best and make enquiring effortless.
- **Booking:** start with an enquiry form plus WhatsApp. Add calendar availability or deposits only if the client confirms a real need.
- **Video:** embed a curated set of recorded clips from an existing video host. Live sessions, if any, link out to Instagram Live or YouTube Live.
- **Stack:** Next.js, TypeScript and Tailwind, pre-rendered and hosted on Vercel, with enquiries delivered by email. PostgreSQL, Prisma and NestJS are not needed for the first release.
- **Biggest risk:** content, not code. Photo selection, copy and client approvals decide the launch date. Colours, fonts and layout stay provisional until we see the client's photographs and brand assets.
- **Next step:** a discovery call using the questions in section 4, then sign-off on the decisions in section 15.

## 2. Confirmed facts

Everything below comes from the Phase 1 brief; nothing else is confirmed yet.

- The client is a professional makeup artist, and this is a paid commercial project.
- Target delivery is 2–4 weeks, covering design, development, client feedback, testing, deployment and handover.
- The client has some photographs and content. Complete content and brand assets have not been collected.
- Starting ideas, not requirements: a premium portfolio and gallery, booking or enquiry, recorded video (live video to be evaluated) and a responsive site.
- The site must feel premium and intentionally designed, and be accessible, fast and maintainable.
- Only genuine client photography and approved content may be used. No invented testimonials, credentials, awards, results or claims.
- The project's placement within Velora's business hierarchy is undecided.
- No existing repository has been shared.
- The project owner wants each engineering decision explained, not just delivered.

## 3. Assumptions and unknowns

The plan rests on five working assumptions; nine unknowns must be answered by the client before the related work starts.

| Item | Label | Why it matters | Verify by |
| --- | --- | --- | --- |
| The main goal is enquiries and bookings, not selling products or courses | Assumption | Sets every page's call to action | Discovery call |
| Main service is bridal and occasion makeup | Assumption | Drives portfolio categories and page order | Discovery call |
| Client and customers are in Hyderabad or elsewhere in India | Assumption | Affects WhatsApp, currency, privacy law, travel areas | Discovery call |
| Most visitors arrive from Instagram on a phone | Assumption | Justifies a mobile-first layout | Instagram insights |
| The client already handles bookings over WhatsApp | Assumption | Makes WhatsApp a primary contact path | Discovery call |
| Whether prices are published | Unknown | Shapes the Services page | Client decision |
| Existing domain, website, hosting, Google Business Profile | Unknown | Affects DNS, SEO and launch steps | Client to share |
| Logo, colours, fonts or brand guide | Unknown | Design direction depends on it | Client to share |
| Publishing rights and model consent for each photo | Unknown | Legal risk if missing | Client to confirm |
| Who updates content after launch | Unknown | Decides CMS versus code-managed content | Client decision |
| Languages (English only, or Telugu or Hindi too) | Unknown | Adds translation work and scope | Client decision |
| Number, length and current host of videos | Unknown | Sets video approach and effort | Client to share |
| Whether classes or live sessions are planned | Unknown | Only reason to consider live video | Client decision |
| Budget for monthly services | Unknown | Limits CMS, email and hosting tiers | Client decision |

## 4. Prioritized questions for the client

Ask the six Priority 1 questions on the first call; design cannot start without them.

**Priority 1 — before design starts**

1. Which services do you offer, and which one brings in most of your income? (bridal, party, editorial, film, classes)
2. Where do you work? City, travel radius, destination weddings, studio or on-location.
3. How do clients book you today, step by step? (Instagram DM, WhatsApp, calls, deposits, contracts)
4. What should a visitor do on the website: send an enquiry, check a date, or pay a deposit?
5. Can you share your 40–80 strongest photographs at original resolution? For each, do you have the photographer's and the client's permission to publish?
6. Do you have a logo, brand colours or fonts? Name three websites or accounts whose feel you like, and say why.

**Priority 2 — before build starts**

7. Will you publish full prices, "starting from" prices, or none?
8. Do you have genuine client reviews we may publish, with names and permission? Do you have a Google Business Profile?
9. Recorded video: how many clips, how long, and where are they hosted now? Live sessions: for whom, how often, free or paid?
10. Do you own a domain, website or hosting today? What is your Instagram handle?
11. Who will update the portfolio after launch, how often, and with what tools are they comfortable?
12. Which email and phone number should receive enquiries? Who replies, and how quickly?

**Priority 3 — before launch**

13. Should the site be in English only, or also another language?
14. Which training, certifications or press features should appear? Can you share proof of each?
15. What monthly budget is acceptable for domain, hosting, email and content tools?
16. Who approves the work on your side, and can they give feedback within 48 hours?

## 5. Target audience and user journeys

All audiences below are **assumptions** until the client confirms who actually books them.

| Audience | What they need from the site | Priority |
| --- | --- | --- |
| Brides and families planning months ahead | See the style, a price range, availability and reasons to trust | Primary |
| Occasion clients (engagement, party, photoshoot) | Quick proof of skill and a fast way to ask | Secondary |
| Photographers, stylists and brands | An editorial portfolio and a direct email | Secondary |
| Students, if classes exist | Course details and schedule | Out of scope until confirmed |

**Main journeys**

1. **Instagram to enquiry (primary, mobile):** taps the link in bio → Home opens on one signature image → Portfolio, filtered to Bridal → Services for what is included and a starting price → Enquire form or WhatsApp → confirmation that states the reply time.
2. **Search to enquiry:** searches for a makeup artist in their city → lands on Home or Services → reads About and reviews to build trust → Enquire.
3. **Referral checking style:** opens the link a friend sent → Portfolio → About → WhatsApp.
4. **Collaborator:** Portfolio, editorial category → email link in the footer.

Design rule from these journeys: every page ends with one clear enquiry action, and WhatsApp is always one tap away on a phone.

## 6. Proposed sitemap

**Recommendation:** five pages for the first release, a shared footer, and four pages deferred until real content exists.

&#91;embedded content: Sitemap · 5 MVP pages, 4 deferred\]

Testimonials appear as a section on Home and Services, only if genuine reviews exist; they do not need a page. Videos live inside Portfolio until there are roughly ten or more clips. A Privacy notice and a 404 page are included but not shown above. A custom admin area is not a page in this plan; content editing follows the decision in section 15.

## 7. MVP scope and explicit exclusions

**Recommendation:** the first release is five pages, a validated enquiry form, WhatsApp contact and embedded recorded video. Everything else waits for a confirmed need.

### Booking options

| Option | What the client gets | Effort | Client must decide | Our view |
| --- | --- | --- | --- | --- |
| 1. Enquiry form + WhatsApp | A structured request (date, location, service, people) by email; the artist replies personally | 1–2 days | Form fields, recipient email, promised reply time | **Recommended for MVP** |
| 2. Appointment request with availability | An embedded scheduler (Cal.com, Calendly or Google Calendar booking page) showing open slots | 2–4 days, plus the artist keeping the calendar current | Slot length, buffer time, who maintains the calendar | Only if bookings are slot-based; bridal work is usually date-and-quote led |
| 3. Confirmed booking with deposit | Online payment (Razorpay or Stripe), cancellation and refund policy, receipts, payment-failure handling | 1–2+ weeks, plus gateway verification lead time | Deposit amount, refund terms, tax and invoicing, legal terms | Not in MVP; revisit if collecting deposits is a real pain today |

Option 1 can grow into option 2 later without rebuilding: the Enquire page simply gains an embedded scheduler.

### Video options

| Need | Approach | Our view |
| --- | --- | --- |
| Embedded recorded video | YouTube (privacy-enhanced embed) or Vimeo, loaded only on tap behind a poster image so pages stay fast | **Recommended for MVP** |
| Curated video portfolio | The same embeds, grouped by category inside Portfolio; short silent loops (about 15 seconds) can be self-hosted as compressed MP4/WebM | MVP if the client has the clips |
| Scheduled live sessions | An "Upcoming" list with links to Instagram Live or YouTube Live and an add-to-calendar link | Later, if confirmed |
| Interactive live streaming (paid classes, chat) | An existing platform such as Zoom or YouTube Live; never custom streaming infrastructure | Out of scope |

### In the first release

- Home, Portfolio (with category filter and video), About, Services, Enquire, Privacy notice, 404 page
- Enquiry form with validation, spam protection and email delivery, plus a WhatsApp link
- Responsive layout for phone, tablet and desktop
- Basic SEO, social sharing previews and privacy-friendly analytics
- A short handover guide and client ownership of every account

### Explicitly excluded

- Database, user accounts and login
- Online payments, deposits and a custom booking engine
- Live streaming and a dedicated videos page (until there are enough clips)
- Blog or journal, per-wedding case pages, multiple languages (unless confirmed)
- Custom admin panel (a hosted CMS is used only if the client must self-edit)
- E-commerce, chatbots and any testimonial or claim the client cannot verify

## 8. Design direction

**Recommendation:** an editorial, magazine-like direction where the photography leads and the interface stays quiet. Colours and fonts are chosen in week 1 by testing them against the client's actual photographs, not picked in advance.

| Area | Direction | Status |
| --- | --- | --- |
| Brand personality | Calm, precise, warm and confident: "the work speaks" | Working proposal; confirm on the call |
| Typography | One characterful serif for headings plus a quiet sans-serif for body and interface. Shortlist two or three pairings (Fraunces is a candidate, used restrained) and test on real photos. Body text 17–18 px, lines of about 65 characters, at most two heading sizes per screen | Decide in week 1 |
| Colour | Built from the photographs: a warm off-white, a deep ink for text, and one accent sampled from the work. No gradients; no default "beauty pink" unless it is the client's brand | Decide in week 1 |
| Layout | Editorial grid with generous margins and deliberate asymmetry; images paired with short captions instead of repeating cards | Proposal |
| Image treatment | Consistent portrait ratio (about 4:5) for gallery images; one strong full-bleed image on Home instead of a slider; no filters that change skin tones or misrepresent the work; full-screen viewer with swipe and keyboard support | Proposal |
| Navigation | Four or five items with a persistent "Enquire" button; on phones, a compact bar with Enquire and WhatsApp | Proposal |
| Calls to action | One consistent verb across the site (for example "Check your date"), one primary action per screen | Wording with client |
| Mobile | Designed phone-first: thumb-reachable actions, fast first image, no hover-only features | Proposal |
| Motion | Short fades and reveals (under 300 ms) only where they guide attention; respects reduced-motion settings; no parallax, scroll hijacking or cursor effects | Proposal |
| Accessibility | WCAG 2.2 AA contrast, visible focus states, written alt text for every image, readable text sizes | Requirement |

**How we avoid the generic AI-template look**

- Start from the client's photographs and story, not from a template's section list.
- Use fewer, better sections; each one must answer a visitor's question.
- Give typography and spacing a defined scale and stick to it.
- Write real copy with the client; no placeholder slogans or stock phrases.
- Show only genuine photos, reviews and credentials.
- Run a visual review on real devices before each client presentation.

## 9. Recommended technical architecture and rationale

**Recommendation:** a pre-rendered Next.js site on Vercel with one small server function for the enquiry form. Enquiries land in the client's email inbox, so no database is needed.

&#91;embedded content: Architecture · static site, enquiry handler, no database\]

Visitors read pages built ahead of time, which is why they load fast and rank well. The only server code is the enquiry handler. The dashed CMS appears only if the client must edit content themselves.

| Area | Recommendation | Why |
| --- | --- | --- |
| Framework | Next.js (App Router) with TypeScript | Pre-rendering for speed and SEO, built-in image optimisation and a server function for the form, in a stack Velora already uses. Astro is a lighter alternative worth one honest look, since this is mostly a content site |
| Styling | Tailwind CSS with design tokens from the approved direction; a few hand-built components, no UI kit | Keeps the visual system consistent and avoids the off-the-shelf look |
| Content | Code-managed content files (typed data or MDX) if Velora handles updates; a hosted headless CMS only if the client edits | Avoids paying for and maintaining a CMS nobody uses |
| Enquiry form | Server action with Zod validation, honeypot plus Turnstile, rate limiting, email via Resend | Safe, simple and testable; covers the full booking need for Option 1 |
| Database | None for MVP | The inbox is the record. Add a spreadsheet or database later only if the client needs to track enquiries |
| Images | Next.js image optimisation on Vercel; move to an image CDN such as Cloudinary only if the library grows large | Correct sizes and formats per device with no extra service |
| Video | YouTube or Vimeo embeds loaded on tap | Free, reliable delivery without slowing pages |
| Hosting and domain | Vercel with the client's domain; automatic HTTPS; preview links for every change | Preview links make client reviews easy |
| Analytics | Vercel Web Analytics or Plausible, without cookies | Measures enquiries without a consent banner burden |
| Testing | TypeScript strict mode, ESLint, Playwright tests for navigation and the form, Lighthouse and axe checks, manual device testing | Catches the failures that would cost the client enquiries |
| Maintenance | README, handover guide, client-owned accounts, dependency updates every few months | The site keeps working after Velora steps back |

**Not needed for MVP:** PostgreSQL, Prisma, NestJS, authentication, Redis, Docker, a separate backend, payment gateway or integration with the Velora monorepo (placement is undecided).

## 10. Security, accessibility, SEO and performance

The enquiry form is the only place visitors hand over personal data, so most security work concentrates there.

**Security and privacy**

- Validate every form field on the server (with a schema library such as Zod), not only in the browser.
- Block spam with a hidden honeypot field plus Cloudflare Turnstile, and rate-limit submissions.
- Keep API keys in Vercel environment variables; nothing secret reaches the browser.
- Send security headers (Content-Security-Policy, HTTPS only, frame protection).
- Collect only what is needed to reply; no personal data in URLs or analytics.
- Publish a short privacy notice. If the client is in India, follow the Digital Personal Data Protection Act, 2023 (verify current rules before launch).

**Accessibility (target: WCAG 2.2 AA)**

- Semantic HTML, a logical heading order and full keyboard access, including the gallery viewer.
- AA colour contrast, visible focus states and labelled form fields with clear error messages.
- Written alt text for every image, describing the look rather than "makeup photo".
- Respect reduced-motion settings; captions or transcripts for videos with speech.

**SEO**

- Unique titles and descriptions per page, social sharing images, sitemap.xml and robots.txt.
- Structured data for a local business, using only real, confirmed details.
- Location and service wording only where it is true; link the Google Business Profile.

**Performance targets (mid-range phone on 4G)**

- Largest Contentful Paint under 2.5 s, Cumulative Layout Shift under 0.1, Interaction to Next Paint under 200 ms.
- Lighthouse 90+ for performance, accessibility, best practices and SEO on key pages.
- Modern image formats (AVIF/WebP), responsive sizes, lazy loading below the fold, and videos loaded only on tap.

## 11. Client content and asset checklist

The photographs and brand items are needed by the end of week 1; the rest by the middle of week 2.

**Photography and video (end of week 1)**

- [ ] 40–80 best photographs at original resolution, grouped by category
- [ ] Photographer credit for each image, where required
- [ ] Written permission from clients and models shown
- [ ] 2–3 portraits of the artist for About
- [ ] Recorded video clips or links, with titles

**Brand (end of week 1)**

- [ ] Logo files (SVG or high-resolution PNG), if any
- [ ] Existing colours, fonts or brand guide, if any
- [ ] Three reference websites or accounts the client likes, with reasons

**Copy and business details (middle of week 2)**

- [ ] Artist bio: background, training, approach
- [ ] Service list with what each includes; pricing or "starting from" figures, if published
- [ ] Service areas, travel policy and booking terms
- [ ] Genuine reviews with permission to publish
- [ ] Certifications or press features, with proof
- [ ] Enquiry email, WhatsApp number and promised reply time
- [ ] Social links and Google Business Profile

**Accounts and access (middle of week 2)**

- [ ] Domain registrar access, or approval to buy a domain
- [ ] Hosting, email-service and analytics accounts created in the client's name
- [ ] Name of the person who gives final approval

## 12. Risks and dependencies

Three of the top four risks sit on the client's side, so the plan protects launch with dated content deadlines and a buffer week.

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Photographs arrive late, low-resolution or without publishing permission | High | Design and launch slip | Request in week 1; design with the best 15 photos first; launch with fewer images rather than placeholders |
| Copy and business details missing | High | Pages cannot be finished | Provide a fill-in questionnaire; draft copy from the call for client approval |
| Slow client feedback | Medium | Each round costs days | Agree a 48-hour turnaround and one named approver; batch feedback into planned rounds |
| Booking or video scope changes mid-build | Medium | Rework, missed date | Lock MVP scope at the week 1 gate; log new ideas for phase 2 |
| Domain or DNS access unavailable | Medium | Launch day blocked | Confirm registrar access in week 2; keep a staging URL ready |
| Client wants to self-edit, decided late | Medium | CMS added late | Decide content management at the week 1 gate |
| Unverified claims or reviews requested | Low | Trust and legal exposure | Publish only items with proof or written permission |

**Dependencies:** design depends on photographs and brand assets; page build depends on approved design; launch depends on domain access and final sign-off.

## 13. Week-by-week delivery plan

**Recommendation:** plan for four weeks with launch targeted at the end of week 3 and week 4 held as buffer. A three-week launch is realistic only if photographs arrive in week 1 and feedback comes back within 48 hours.

&#91;embedded content: Delivery roadmap · 4 weeks, 4 client gates\]

Each gate is a client approval; work after a gate does not start until it is passed.

**Week 1 — discover and direct**

- Discovery call; collect answers to the Priority 1 and 2 questions.
- Receive photographs, brand assets and the content questionnaire.
- Present two design directions using the client's own photographs.
- Gate: direction chosen, MVP scope and the section 15 decisions locked.

**Week 2 — design and foundation**

- Design Home, Portfolio and Enquire for phone and desktop; client feedback round 1.
- Set up the repository, design tokens, layout components and Vercel previews.
- Confirm domain access and create client-owned accounts.
- Gate: key page designs approved.

**Week 3 — build and content**

- Build all pages, the enquiry form with email delivery, the gallery viewer and video embeds.
- Load final copy and optimised images; write alt text.
- Share the staging link for client review round 2.
- Gate: staging signed off.

**Week 4 — QA, launch and handover**

- Cross-browser and real-device testing, accessibility and Lighthouse checks, form testing.
- One final revision round, then connect the domain and launch.
- Handover call, guide and account transfer; monitor enquiries for the first week.
- Gate: launch sign-off.

## 14. Acceptance criteria

The site is accepted when every item below is checked on the live domain.

**Content and design**

- [ ] Every page uses approved copy and genuine client photographs; no placeholders remain
- [ ] No testimonial, credential or claim appears without client-supplied proof or permission
- [ ] The approved typography, colour and spacing system is applied consistently

**Function**

- [ ] The enquiry form validates input, rejects spam, delivers to the client's inbox and shows a clear confirmation
- [ ] Errors (network failure, invalid fields) show helpful messages and never lose what the visitor typed
- [ ] WhatsApp, email and social links open the right destination
- [ ] Gallery filter and full-screen viewer work by touch, mouse and keyboard
- [ ] Videos load only on tap and play on phone and desktop

**Quality**

- [ ] Tested on current Chrome, Safari and Firefox, plus a real iPhone and Android phone, at 360 px to 1440 px widths
- [ ] Lighthouse 90+ in all four categories on Home, Portfolio and Enquire
- [ ] No critical accessibility issues in an automated check plus a manual keyboard pass
- [ ] Titles, descriptions, sharing images, sitemap and robots.txt in place

**Handover**

- [ ] Domain, hosting, email service and analytics are owned by the client
- [ ] A handover guide explains how to update content and who to contact
- [ ] The code is in a repository with a README covering setup, environment variables and deployment

## 15. Decisions that require approval before implementation

The first five decisions block design and build; settle them at the week 1 gate.

| Decision | Options | Recommendation | Approver | Needed by |
| --- | --- | --- | --- | --- |
| Booking workflow | Enquiry + WhatsApp · scheduler · paid deposit | Enquiry + WhatsApp | Client | Week 1 gate |
| Who edits content after launch | Velora edits code-managed content · client edits via hosted CMS | Decide from client's answer; code-managed if updates are rare | Client + Velora | Week 1 gate |
| Pricing display | Full prices · "starting from" · none | Client's choice | Client | Week 1 gate |
| Page list for MVP | The five pages in section 6 · add or remove | Five pages | Client + Velora | Week 1 gate |
| Design direction | Two directions presented on real photos | Pick one, then refine | Client | Week 1 gate |
| Framework | Next.js · Astro | Next.js, unless Velora prefers a lighter static site | Velora | Before build |
| Video hosting | YouTube · Vimeo · self-hosted short loops | YouTube or Vimeo embeds | Client + Velora | Week 2 |
| Languages | English · English plus another language | English only for MVP | Client | Week 2 |
| Domain and account ownership | Client-owned · Velora-managed | Client-owned | Client | Week 2 |
| Project placement within Velora | To be decided by Velora | No assumption made | Velora | Before contract |
