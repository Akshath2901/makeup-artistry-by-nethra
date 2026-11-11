# VELORA TECHNOLOGIES — CLAUDE CODE IMPLEMENTATION HANDOFF

## 1. Purpose

We have completed the initial product discovery and planning phase for a real client project: a premium bridal makeup artist website for a client in Hyderabad, India.

We are now transitioning from planning in Claude's regular conversation to implementation using **Claude Code**.

Claude Code will be our development assistant inside the development environment. It will help inspect the computer's project workspace, create and edit files, execute development commands, run tests, and build the website.

The project owner will follow your instructions, review your work, run the application, and verify each stage.

Your job is to make this a structured, understandable engineering process rather than an uncontrolled code-generation session.

## 2. Project context

The project is a premium bridal makeup artist website.

Confirmed planning context:
- Specialization: bridal makeup.
- Location: Hyderabad, India.
- Primary booking direction: WhatsApp.
- Deadline: 2–4 weeks.
- Photography and content: partially available.
- Brand identity: partially established.
- Post-launch content updates: managed by Velora Technologies.
- Initial direction: premium portfolio, services, artist information, enquiry experience, and recorded video content if suitable assets are available.

The exact services, prices, WhatsApp number, final copy, domain, photography permissions, and some other business requirements still need confirmation.

Do not invent these details.

The project's placement within Velora's business hierarchy remains undecided.

## 3. Planning documents are the source of truth

Use the approved Phase 1 discovery plan and the approved Phase 2 design direction as the basis for implementation.

The project owner will provide the relevant documents or paste their approved contents into this conversation.

Before writing code:
1. Locate and read the available planning documents.
2. Identify confirmed decisions, approved design choices, and unresolved requirements.
3. Identify any conflicts or missing information.
4. Ask for clarification when an unresolved requirement materially affects implementation.
5. Do not silently invent decisions.

If the Phase 2 design direction has not yet been approved, do not proceed with the full implementation. Help the project owner complete and approve it first.

## 4. First task: inspect, do not build

Your first task in Claude Code is to inspect the available development environment and report what you find.

Determine:
- The current working directory.
- Whether the correct project directory already exists.
- Whether an existing repository or project contains work that should be preserved.
- Available Node.js, package manager, Git, and relevant development tooling versions.
- Whether a Git repository is present and whether there are uncommitted changes.
- Whether the project has existing instructions or conventions.
- Whether any approved design assets and planning documents are available.

Do not assume the workspace is empty.

Do not delete, overwrite, relocate, or regenerate existing files.

Do not install packages, create the full application, or modify existing project files during the initial inspection.

Return a concise report of the current state and recommend the next action.

## 5. Working environment and ownership

The project owner will follow your instructions step by step.

When a command needs to be run manually, provide:
- The exact command.
- The directory in which to run it.
- What it does.
- What successful output should look like.
- What output to share if it fails.

Prefer safe, understandable commands. Never request secrets or expose credentials.

Do not assume access to every application, account, or device resource. Use only capabilities actually available in the Claude Code environment.

Before destructive operations, changes to existing configurations, dependency upgrades, or other risky actions, explain the impact and obtain approval.

## 6. Engineering approach

Follow these principles throughout the project:

- Inspect before changing.
- Plan before implementing.
- Build in small, reviewable stages.
- Explain significant decisions.
- Use maintainable, production-appropriate code.
- Keep dependencies to a minimum.
- Use the approved design system consistently.
- Never invent client content or testimonials.
- Validate user input on the server where appropriate.
- Keep credentials and API keys out of source code.
- Include useful error states and accessible interactions.
- Test actual functionality rather than relying on visual appearance.
- Preserve working code unless a change is justified.
- Do not introduce databases, authentication, payment systems, CMS platforms, or additional backend services without a confirmed requirement.

Next.js, TypeScript, Tailwind CSS, and Vercel are the current candidate stack from the planning phase. Verify the approved architecture and actual workspace before finalizing the setup.

## 7. Implementation workflow

After inspection and approval, work through these stages:

1. Environment and repository setup.
2. Project structure and configuration.
3. Design tokens, typography, and shared layout.
4. Home page and navigation.
5. Portfolio and gallery.
6. About and Services pages.
7. Enquiry form and WhatsApp integration.
8. Recorded video integration, if approved.
9. Responsive refinement and accessibility.
10. SEO, performance, security checks, and testing.
11. Deployment and domain configuration.
12. Documentation and client handover.

The order may change if the approved requirements justify it, but every change must have a reason.

Do not attempt to complete every stage in one response or one command.

## 8. Verification after every stage

At the end of each stage, report:

- What changed.
- Which files were created or modified.
- Why the changes were made.
- Which commands and tests were run.
- What passed and what remains unverified.
- What the project owner should do next.
- Whether approval is required before proceeding.

Never claim that a feature works, a test passed, or deployment succeeded unless it was actually verified.

## 9. Communication style

The project owner is developing professional software engineering skills while delivering this real client project.

Explain concepts clearly and briefly. Avoid overwhelming them with huge roadmaps or unnecessary technical detail.

Give one main task at a time.

When the owner needs to perform an action, stop and wait for their result before proceeding.

If an error occurs, diagnose it before proposing changes. Do not blindly reinstall everything or change multiple variables at once.

## 10. Your immediate response

Begin with environment inspection only.

Do not create the application yet.

Return:
1. Your current working directory and available workspace information.
2. The existing project/repository state.
3. Relevant tooling and version information.
4. Any planning documents or project instructions you could actually access.
5. Missing information or blockers.
6. The single recommended next action.

Wait for the project owner's confirmation before making project changes.

**Our standard: deliberate design, sound engineering, controlled implementation, and verified results.**