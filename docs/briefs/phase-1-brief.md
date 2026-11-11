# VELORA TECHNOLOGIES — MAKEUP ARTIST WEBSITE
## Phase 1: Product Discovery & Planning

### 1. Your Role

Act as a senior product engineer, software architect, UX strategist, and technical planning partner working with Velora Technologies.

We are developing a real client website for a professional makeup artist. This is a commercial project with a target delivery window of 2–4 weeks.

Your first responsibility is to understand the product and its requirements before recommending implementation.

**Do not start coding, generate a complete website, install packages, or modify files during this phase.**

### 2. Project Context

The client needs a premium website that presents their work professionally, establishes trust, and helps convert visitors into potential customers.

The client has some photographs and content available, but the complete content and brand assets have not yet been collected.

Our initial feature ideas are:

- A premium portfolio and image gallery.
- A booking or enquiry experience.
- Recorded video content, with the possibility of live video still to be evaluated.
- A responsive experience across mobile, tablet, and desktop.

These are preliminary ideas, not finalized requirements. Determine what is actually necessary for the client's business.

The target delivery window is 2–4 weeks. Your recommendations must account for design, development, client feedback, testing, deployment, and handover.

The project's final company placement within Velora's business hierarchy has not yet been decided. Do not invent or assume this information.

### 3. Our Quality Standard

We do not want a generic AI-generated website.

The website must feel intentionally designed, professionally engineered, and appropriate for a premium beauty brand.

#### Design principles

- Establish a distinctive visual identity.
- Use carefully selected typography with a clear hierarchy.
- Use restrained, harmonious colors based on the client's brand and photography.
- Prioritize composition, whitespace, image quality, and readability.
- Make navigation and booking straightforward.
- Use animation selectively and purposefully.
- Ensure excellent responsive behavior.
- Prioritize accessibility, performance, and usability.
- Use genuine client photography and approved content.
- Never invent testimonials, credentials, awards, client results, or business claims.

Avoid excessive gradients, repetitive cards, oversized decorative typography, unnecessary animations, generic landing-page sections, and visual effects that do not serve the user.

Do not copy another company's design. Learn from established editorial, luxury, and professional design principles and create a coherent identity for this client.

### 4. Engineering Principles

The website must be maintainable after delivery.

Follow these principles:

1. Understand the requirements before selecting technologies.
2. Inspect any existing repository before proposing changes.
3. Prefer straightforward, maintainable architecture over unnecessary complexity.
4. Introduce dependencies and services only when justified by requirements.
5. Consider security and privacy from the beginning.
6. Validate user input and handle errors properly.
7. Optimize images and videos for performance.
8. Plan for SEO, accessibility, testing, deployment, and maintenance.
9. Do not build features merely to make the project appear technically advanced.
10. Explain important engineering decisions and their trade-offs.

Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, NestJS, and other technologies may be considered where appropriate. They are not mandatory choices until the requirements and project context have been assessed.

### 5. Your Tasks

#### Task A — Understand the business

Determine what information is needed about:

- The makeup artist and their specialization.
- Target customers and service locations.
- Services, packages, and pricing.
- Brand positioning and visual identity.
- Customer acquisition and business goals.
- Booking and enquiry workflows.
- Existing website, domain, hosting, and social profiles.

Separate known information from assumptions.

#### Task B — Define the product

Propose a sitemap and the main user journeys.

Evaluate the need for:

- Home page.
- Portfolio and gallery.
- About the artist.
- Services and pricing.
- Recorded videos.
- Booking and contact.
- Testimonials.
- Admin/content management.

Do not assume every page is necessary. Explain what should be included in the first release and what can wait.

#### Task C — Clarify booking requirements

Distinguish between:

- A simple enquiry form or WhatsApp contact.
- Appointment requests with calendar availability.
- Confirmed bookings involving deposits or online payments.

Identify the implications, complexity, and client decisions associated with each option. Recommend the simplest workflow that meets the confirmed business needs.

#### Task D — Clarify video requirements

Determine whether the client needs:

- Embedded recorded videos.
- A curated video portfolio.
- Scheduled live sessions.
- Live streaming with interactive functionality.

Explain appropriate hosting and integration options. Do not propose building custom streaming infrastructure unless the requirements genuinely justify it.

#### Task E — Establish the design direction

Propose a coherent visual direction covering:

- Brand personality.
- Typography.
- Color palette.
- Layout and composition.
- Image treatment.
- Navigation.
- Booking calls to action.
- Mobile experience.
- Motion and interaction.
- Accessibility and readability.

Explain how the design will avoid looking like a generic AI-generated template.

Do not finalize arbitrary colors, fonts, or page layouts without considering the available brand assets and photography.

#### Task F — Assess the technical approach

After understanding the requirements, recommend an appropriate architecture and stack.

Address, where relevant:

- Frontend framework and language.
- Styling and design-system approach.
- Backend requirements.
- Database requirements.
- Booking and notification integrations.
- Media hosting and optimization.
- Security and privacy.
- Testing.
- Deployment and domain configuration.
- Ongoing maintenance.

For each major technology decision, explain why it is necessary. Explicitly identify components that are not needed for the MVP.

#### Task G — Build a delivery plan

Create a realistic 2–4 week plan with phases, dependencies, milestones, client approvals, and testing time.

Identify risks that could delay delivery, especially incomplete photography, missing content, slow client feedback, and undecided booking requirements.

Define clear acceptance criteria for the finished website.

### 6. Repository Inspection Rules

If an existing project repository is available, inspect its actual structure, README, dependencies, scripts, current implementation, and relevant configuration before making recommendations that depend on the codebase.

Do not assume a repository is empty or complete based only on its documentation.

Do not overwrite, regenerate, restructure, or delete existing work.

If the repository is not available, state that clearly and distinguish repository-dependent decisions from general recommendations.

### 7. Required Output

Return a structured planning document containing:

1. Executive summary.
2. Confirmed facts.
3. Assumptions and unknowns.
4. Prioritized questions for the client.
5. Target audience and user journeys.
6. Proposed sitemap.
7. MVP scope and explicit exclusions.
8. Design direction.
9. Recommended technical architecture and rationale.
10. Security, accessibility, SEO, and performance considerations.
11. Client content and asset checklist.
12. Risks and dependencies.
13. Week-by-week delivery plan.
14. Acceptance criteria.
15. Decisions that require approval before implementation.

Label recommendations clearly and do not present assumptions as confirmed facts.

### 8. Working Agreement

Work in small, reviewable stages.

Explain decisions in clear language because the project owner is also developing their software engineering skills and wants to understand the implementation rather than blindly accept generated code.

Do not overwhelm the project owner with unnecessary enterprise architecture or speculative future features.

If important information is missing, ask concise, prioritized questions. Do not invent answers merely to complete the document.

**Your immediate deliverable is the product discovery and planning document only. Do not implement the website until the requirements and plan have been reviewed and approved.**