> **Status: DRAFT — NOT YET APPROVED.** Do not implement beyond environment setup until the four decisions in the last section are approved.
> Diagrams and the palette image are omitted in this export; the palette specimen is in docs/assets/. Online doc: https://claude.ai/code/artifact/b7a4f156-3408-40fb-b008-9ec6ca63d917

# Bridal Makeup Website — Phase 2 Design Direction

Oct 11, 2026 · @akshath

## Inputs and status

**This is stage 1 of Phase 2:** three creative directions, a recommendation, and the system they would run on. Detailed page design starts only after you approve a direction (section 11).

- **No client photographs, logo, brand assets or repository were available to inspect.** Every colour, crop and type choice here is therefore provisional, and must be re-tested against the real photographs before it is final.
- Where this document shows images or swatches, they are Velora-made specimens, not client content. Missing client assets appear as labelled placeholders such as **\[CLIENT PHOTO: full bridal look, portrait\]**.
- Inputs used: the Phase 1 discovery plan and the Phase 2 brief. Nothing about the artist's services, prices, number, domain or credentials is assumed.

## Phase 1 review: resolved and open decisions

The Phase 2 brief settles five Phase 1 questions; nine remain open, and four of them affect design directly.

| Decision | Phase 1 status | Now |
| --- | --- | --- |
| Main service | Assumed bridal and occasion | **Resolved:** bridal makeup artist |
| Location | Assumed Hyderabad or India | **Resolved:** Hyderabad |
| Primary contact path | Enquiry form + WhatsApp | **Resolved:** WhatsApp first |
| Who edits content after launch | Open | **Resolved:** Velora, so no CMS is needed |
| MVP page list | Five pages proposed | **Resolved:** Home, Portfolio, About, Services, Enquire, plus Privacy and 404 |
| Design direction | Open | Proposed in this document; needs approval |
| Pricing display (full, from-prices, none) | Open | **Open** — shapes the Services page |
| Service list and booking process steps | Open | **Open** — shapes Services and "How booking works" |
| Photo set and publishing permissions | Open | **Open** — blocks final colour, crops and Home composition |
| Logo and existing brand assets | Open ("partially established") | **Open** — may override type and colour proposals |
| Genuine reviews and credentials | Open | Open — decides whether those sections exist |
| Video clips | Open | Open — decides whether video appears in Portfolio |
| Email as a secondary contact path | Open | Open — see section 7 |
| Languages | Open | Open — English assumed; affects font choice (section 4) |

## Brand personality and point of view

**Proposed personality:** composed, exacting and warm. The artist is presented as a craftsperson a family can trust with the most photographed day of a bride's life, not as a trend or a product.

| Trait | What it means on the page | What it rules out |
| --- | --- | --- |
| Composed | Calm layouts, one idea per screen, generous margins | Busy grids, competing buttons, motion everywhere |
| Exacting | Precise type scale, consistent crops, careful captions | Mixed fonts, random image ratios, decorative extras |
| Warm | Warm neutrals, human copy written with the artist, real faces | Cold SaaS styling, stock slogans |
| Credible | Only verifiable work, reviews and credentials | Invented numbers, badges, awards |

**The point of view: "the finished look, and the detail that made it."** A bride judges an artist on two things at once: the overall look in photographs, and whether the skin, eyes and lips hold up close. The design pairs a full bridal portrait with a close crop of the same work wherever the photographs allow. That pairing is the site's signature, and it is built on proof rather than decoration.

This depends on high-resolution originals. If the client's images cannot support close crops, the signature falls back to full-look sequences, and section 10 tracks that risk.

## Creative directions

**Recommendation: Direction A, The Quiet Portrait.** It gives the photographs the most room, carries the "look and detail" signature best, and is the hardest to mistake for a template, because its character comes from composition and type rather than decoration.

&#91;embedded content: Creative directions · positioned by tone, not to scale\]

Positions show intended tone, not measurements. All three use the same pages and journey; they differ in mood, type, colour and composition.

|  | A — The Quiet Portrait (recommended) | B — Heirloom | C — Studio Light |
| --- | --- | --- | --- |
| Idea | A gallery for one artist's work: margins, captions, close detail | A printed wedding invitation brought to the screen: ceremony and richness, held back | A fashion editorial: bold crops, crisp contrast, modern confidence |
| Personality | Composed, exacting, warm | Ceremonial, rich, rooted | Modern, confident, fashion-led |
| Typography | Fraunces + Schibsted Grotesk | Libre Caslon + Libre Franklin | Bodoni Moda + Figtree |
| Colour | Ivory, ink, clay | Parchment, oxblood, a dark closing band, saffron detail lines | Cool white, charcoal, slate |
| Composition | Asymmetric; image offset with type in the margin; look-and-detail pairs | Centred, framed compositions; fine rules; symmetrical openings | Full-bleed crops, large type set against images, tight grid |
| Best when the photographs are | Natural light, varied, high-resolution | Traditional bridal looks with rich jewellery and colour | Editorial, studio-lit, contemporary looks |
| Main risk | Too restrained if photographs are weak | Slides into maroon-and-gold cliché without discipline | Feels cold beside warm skin tones; less "bridal" |

**Why A over B and C:** B is the strongest alternative if the artist's work is mostly traditional South Indian or Hyderabadi bridal looks with heavy jewellery; that is worth confirming on the call. C suits an artist known for minimal or fashion work, which the brief does not suggest. A works across both and lets the photographs, not the frame, carry the culture and the colour.

## Typography

**Recommendation:** Pairing 1, Fraunces with Schibsted Grotesk, for Direction A. All three pairings are free Google Fonts that can be self-hosted, so there is no licence cost or third-party font request.

| Pairing | Serif (headlines, pull quotes) | Sans-serif (body, navigation, forms) | Why it fits | Watch out for | Suits |
| --- | --- | --- | --- | --- | --- |
| 1. Fraunces + Schibsted Grotesk | Fraunces, light to regular weight, "soft" and "wonk" axes at 0 | Schibsted Grotesk, regular and medium | Fraunces' optical-size axis keeps large headings refined and small text sturdy in one file; its old-style warmth matches "warm craftsmanship". Schibsted Grotesk was drawn for a news publisher, so it is clear at small sizes and has editorial character. Instrument Sans was considered and rejected: its font file has no rupee sign (₹) | Fraunces looks playful at default settings; lock the axes. It is popular, so restraint in use matters more than the font | **A (recommended)** |
| 2. Libre Caslon Display + Libre Franklin | Libre Caslon Display for headings; Libre Caslon Text for quotes | Libre Franklin, regular and medium | Caslon carries the tone of printed invitations and heritage stationery; Franklin is a sturdy, readable companion | Caslon Display is for large sizes only (32 px and up) | B |
| 3. Bodoni Moda + Figtree | Bodoni Moda, used large | Figtree, regular and medium | High-contrast Didone type reads as fashion editorial; Figtree is friendly and very legible on phones | Hairline strokes break up on small screens: never below 32 px, never for body text | C |

**Checks before final approval (all pairings)**

- Rupee sign checked in the font files: Schibsted Grotesk, Libre Franklin, Figtree, Fraunces and Libre Caslon Display include ₹; Bodoni Moda does not, so prices are always set in the sans-serif.
- Body text stays readable on a low-brightness Android phone outdoors.
- If Telugu or Hindi is added later, pair with Noto Sans Telugu or Noto Sans Devanagari; check that x-heights sit comfortably together.
- Self-host only the weights used (target: two files per family, subset to Latin plus ₹).

### Type scale

One scale serves every page. Mobile steps by about 1.2; desktop steps by about 1.33 for more contrast on large screens.

| Token | Mobile (px) | Desktop (px) | Line height | Family and use |
| --- | --- | --- | --- | --- |
| display | 40 | 72 | 1.05 | Serif, light. Home opening only, once per site |
| h1 | 34 | 52 | 1.1 | Serif. One per page |
| h2 | 27 | 38 | 1.15 | Serif. Section titles |
| h3 | 21 | 26 | 1.25 | Sans-serif, medium. Service names, sub-sections |
| lead | 19 | 21 | 1.5 | Sans-serif. Opening paragraph of a page |
| body | 17 | 18 | 1.6 | Sans-serif. All running text |
| caption | 14 | 14 | 1.45 | Sans-serif. Image captions, footnotes |
| label | 14 | 15 | 1.2 | Sans-serif, medium, sentence case. Navigation, buttons, form labels |

**Rules:** body lines of 60–70 characters, captions up to 45; at most two serif sizes visible on one screen; no all-capitals text longer than two words; italics only for pull quotes.

## Colour

**Recommendation:** Palette A, Ivory and Ink, with its clay accent re-sampled from the client's photographs once they arrive. All text pairings in all three palettes measure at least 6.5:1, above the WCAG AA minimum of 4.5:1.

&#91;image: Three palette and type specimens: Ivory and Ink, Heirloom, Studio Light. Velora specimen, not client content\]

The grey boxes stand in for client photographs; the headline and body lines are specimen text, not proposed copy.

| Palette | Reasoning | Ink on background | Muted on background | Accent button text | Limits |
| --- | --- | --- | --- | --- | --- |
| **A. Ivory and Ink** | Warm paper and near-black ink read as editorial print; the clay accent comes from skin and lip tones, so it sits with the photographs instead of competing with them | 15.2:1 | 6.5:1 | 7.3:1 (ivory on clay) | The rule colour (1.4:1) is decorative only; form borders use muted |
| **B. Heirloom** | Deeper parchment, oxblood and a dark closing band echo the richness of traditional bridal wear without defaulting to gold and maroon cliché | 14.0:1 | 6.8:1 | 9.2:1 | Saffron detail is 3.0:1 on parchment: lines and dividers only, never text or controls |
| **C. Studio Light** | Cool off-white and slate let colourful bridal looks stand out most, with a contemporary fashion feel | 17.3:1 | 6.8:1 | 8.9:1 | Can feel cool against warm skin tones; test with the real photos |

**Why no pink, gold or gradients:** the bridal photographs already carry rich colour from jewellery, outfits and makeup. A neutral frame lets that colour belong to the work, which is the point of the site.

**Colour rules for every palette:** WhatsApp green is not used as a brand colour; the WhatsApp button uses the palette accent with the WhatsApp icon and label, so it is recognisable without clashing. Accent appears on one primary action per screen and on focus states, nowhere else.

## Page structure and visitor journey

Every section answers one visitor question on the path discover → explore work → understand services → trust → enquire on WhatsApp. This is the structure for Direction A; layouts and copy are detailed only after approval.

### Home

| # | Section | Visitor question it answers | Composition (Direction A) |
| --- | --- | --- | --- |
| 1 | Opening | "Whose work is this, and is it my style?" | One full-height portrait **\[CLIENT PHOTO: signature bridal look, 4:5\]** offset to the right; artist's name and a one-line positioning (client-approved) set in the left margin. Not a split hero, not a slider. One action: Enquire on WhatsApp |
| 2 | Look and detail | "Is the craft good up close?" | Two or three pairs: a full look beside a close crop of the same work **\[CLIENT PHOTO: full look + detail crop of the same bride\]**, with a short caption. The site's signature |
| 3 | Into the portfolio | "Can I see more?" | A quiet row of three portfolio images and a single text link to Portfolio |
| 4 | Meet the artist | "Who will I be trusting?" | Portrait **\[CLIENT PHOTO: artist portrait\]** with two or three sentences in the artist's voice; link to About |
| 5 | How booking works | "What happens after I message?" | A numbered sequence of the client's real steps (to be confirmed: for example enquiry, trial, date confirmation, wedding day) |
| 6 | Kind words | "Have other brides been happy?" | Two or three static quotes, set as typography, never a carousel. **Shown only if genuine reviews with permission exist** |
| 7 | Closing enquiry | "How do I check my date?" | A calm, full-width band: one sentence and the WhatsApp action |

### Portfolio

- Text filters at the top for categories the client confirms (for example by ceremony or look). Set as words with an underline for the active one, not pills.
- A controlled grid: 4:5 portraits as the standard tile, with an occasional full-width 3:2 detail image to break rhythm. Two columns on phones, three on desktop. No masonry, so crops stay intentional.
- Tapping an image opens a full-screen viewer: swipe or arrow keys to move, a caption, and an "Ask about this look" link that opens WhatsApp with the look's name already in the message.
- Videos, if suitable clips exist, sit in the grid with a poster image and a play mark. They load only when tapped.

### About the artist

1. Portrait and introduction: who she is and how she works.
2. Approach: what a bride can expect, in the artist's own words (skin preparation, hygiene, products only if she states them).
3. Training and recognition: **only items with proof**; otherwise the section is left out.
4. Where she works: Hyderabad and any travel areas she confirms.
5. One closing action: Enquire on WhatsApp.

### Services

1. Short introduction to how services are structured.
2. One block per confirmed service: name, what is included, time needed, trial availability, travel, and price only if the client approves showing it. Each block ends with a quiet "Ask about this" link, not a button.
3. Frequently asked questions written from real questions the artist receives.
4. One page-level action: Enquire on WhatsApp.

### Enquire

A short "tell us about your day" composer that opens WhatsApp with a pre-written message (section 7), the expected reply time, and a secondary "Prefer email?" link if email is approved.

### Privacy and 404

Privacy: plain-language notice of what an enquiry shares and with whom. 404: one line, one portfolio image, links back to Home and Portfolio.

## Navigation, WhatsApp enquiry and mobile decisions

**Recommendation:** a WhatsApp message composer instead of an email form. The visitor answers four short questions, and the site opens WhatsApp with a ready-written message. No personal data passes through our server, and no backend is needed for enquiries.

### The enquiry composer

1. Fields: wedding date (or "not fixed yet"), area or venue, number of people needing makeup, and service of interest (from the confirmed list). All optional except the date choice.
2. A live preview shows the exact message that will be sent, so nothing is hidden from the visitor.
3. One button, "Continue in WhatsApp", opens the official click-to-chat link with that message.
4. Below it: the promised reply time, and "Prefer email?" if the client approves a secondary path.
5. If WhatsApp does not open (for example on a desktop without it), the page shows the number and a copy button.

Trade-off to approve: Velora loses a record of enquiries, because they live only in the artist's WhatsApp. That fits a WhatsApp-first business; if the client wants enquiry tracking, add an email copy later.

### Navigation

| Context | Behaviour |
| --- | --- |
| Desktop header | Artist's name or wordmark on the left; Portfolio, Services, About as text links; "Enquire" on the right as the only filled button. Header stays visible, shrinking slightly after scrolling |
| Mobile header | Wordmark and a "Menu" text button (a word, not just an icon). The menu opens full-screen with large links and the WhatsApp action at the bottom |
| Mobile enquiry bar | A slim bar with one action, "Enquire on WhatsApp", appears after the visitor scrolls past the opening. Hidden on the Enquire page and while typing. Not a floating bubble |
| Footer | Wordmark, the three page links, WhatsApp, Instagram, email if approved, service area, Privacy notice and copyright. No newsletter, no social icon wall |

### Mobile-specific decisions

- The opening image loads first and fills the screen width; the name sits below it, not over it, so text never covers the makeup.
- Portfolio is one tap from every screen; the full-screen viewer supports swipe.
- Touch targets at least 44 × 44 px; nothing depends on hover.
- Images served at the device's size in modern formats; below-the-fold images load as the visitor scrolls.
- The "look and detail" pairs stack vertically on phones, full look first.

### Motion

- Images fade in once (under 300 ms) as they enter the screen, to soften loading. Nothing loops or moves continuously.
- The full-screen viewer opens with a short scale-from-thumbnail transition so visitors keep their place.
- Reduced-motion settings turn all of this off. No parallax, scroll hijacking or cursor effects.

## Visual references

These are sources of principles to study, not designs to copy; none of their imagery is or will be presented as the client's work. Review each live before the moodboard, since sites change.

| Area | Reference | What to learn | What not to take |
| --- | --- | --- | --- |
| Layout and whitespace | Independent print magazines such as Kinfolk and Cereal | Margin-led layouts, one strong image per spread, small precise captions | Their muted lifestyle photography style; bridal work needs richer colour |
| Typography and restraint | Aesop's website | A calm serif and sans hierarchy, long readable text, products given room | Their brand voice and product-led structure |
| Bridal photography direction | Wedding editorials in Vogue India and campaigns by Indian couture houses | How skin, jewellery and fabric are lit and cropped; how detail shots sit beside full looks | Their imagery, models or styling; nothing is reproduced |
| Portfolio viewing | Image-led photography archives such as Magnum Photos | Sequential, caption-led viewing where the picture is the interface | Documentary tone and dense archive navigation |
| WhatsApp interaction | WhatsApp's official click-to-chat documentation | The supported link format and pre-filled message behaviour | Any unofficial widgets or chat plugins |
| Accessible components | W3C WAI-ARIA Authoring Practices (dialog and tabs patterns) | Correct keyboard and screen-reader behaviour for the viewer and filters | Nothing visual; it is behaviour guidance |

Once the client shares photographs, a short moodboard of the client's own images (grouped by light, palette and crop) replaces most of this table as the main design input.

## Draft design system

These tokens hold for any direction; only colour and font values change with the choice. Final values are confirmed in the handoff after approval.

### Colour tokens (Direction A values)

| Token | Value | Use |
| --- | --- | --- |
| color.bg | #F6F1E9 | Page background |
| color.surface | #EDE5D8 | Quiet bands, form fields |
| color.ink | #1F1B18 | Headings and body text |
| color.muted | #5E554D | Captions, secondary text, form borders |
| color.rule | #D6CBBC | Dividers and image placeholders only |
| color.accent | #7A3E2F | Primary action, focus ring, active filter |
| color.on-accent | #F6F1E9 | Text on the accent |
| color.error | To be chosen with the final palette; must reach 4.5:1 on bg | Form errors, always with text and an icon |

### Spacing scale (8-point base)

4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px. Space between Home sections: 96 px on phones, 128 px on desktop. Page side margins: 20 px on phones, 32 px on tablets, at least 64 px on desktop.

### Layout grid and breakpoints

| Breakpoint | Width | Grid |
| --- | --- | --- |
| Mobile | Up to 639 px | 4 columns, 16 px gutter |
| Tablet | 640–1023 px | 8 columns, 24 px gutter |
| Desktop | 1024–1439 px | 12 columns, 24 px gutter |
| Wide | 1440 px and up | 12 columns, content capped at 1320 px |

### Image aspect ratios

| Ratio | Use |
| --- | --- |
| 4:5 | Standard portfolio tile, opening image on phones, look-and-detail pairs |
| 2:3 | Opening image on desktop, artist portrait |
| 1:1 | Detail crops |
| 3:2 | Occasional full-width detail or behind-the-scenes image |
| 16:9 | Video posters only |

Crops never change what the makeup looks like; no retouching beyond what the client's photographer delivered.

### Buttons and links

| Element | Look | States |
| --- | --- | --- |
| Primary button | Accent fill, on-accent label, 2 px corners, 52 px tall, label 15 px medium | Hover: slightly darker; focus: 2 px ink ring offset 3 px; pressed: darker; disabled: not used for the main action |
| Text link | Ink text with a 1 px underline | Hover: underline thickens; focus: ring as above |
| Filter | Word in muted; active is ink with underline | Keyboard selectable as tabs |

One primary button per screen; everything else is a text link.

### Form states (enquiry composer)

| State | Treatment |
| --- | --- |
| Default | Label above field, surface fill, 1 px muted border, 48 px tall |
| Focus | 2 px accent border |
| Error | Message below in text plus icon, linked to the field for screen readers; field keeps what was typed |
| Success | WhatsApp opens; page keeps a "Didn't open?" fallback with the number and a copy button |

### Accessibility requirements

- WCAG 2.2 AA: text contrast at least 4.5:1 (all proposed pairs measure 6.5:1 or more); controls and focus rings at least 3:1.
- Full keyboard use, visible focus, skip-to-content link, logical heading order.
- Every image has written alt text describing the look; decorative images are marked as such.
- Full-screen viewer behaves as a proper dialog: traps focus, closes on Escape, returns focus to the image.
- Text resizes to 200% without loss; nothing depends on hover or colour alone; reduced motion honoured.

## Content and asset gaps

The photographs decide the most; without them, colour, crops and the Home opening cannot be finalised.

**Photographs**

- [ ] One signature bridal portrait for the Home opening, original resolution, vertical (at least 2400 px on the long side)
- [ ] Two or three brides with both a full look and a close detail of the same work, at a resolution that survives a tight crop
- [ ] 30–60 further portfolio images, grouped into the categories the client wants to show
- [ ] Two artist portraits: one vertical for About, one for the Home introduction
- [ ] For every image: photographer credit if required, and the bride's permission to publish
- [ ] Video clips (if any): originals or links, length, and whether they have speech

**Copy**

- [ ] Artist's name as it should appear, and a one-line positioning she approves
- [ ] Two or three sentences for the Home introduction; a longer About story
- [ ] Confirmed service list with what each includes, time needed, trials and travel
- [ ] Booking steps from first message to wedding day
- [ ] Real frequently asked questions
- [ ] Genuine reviews with names or initials and permission; proof for any credentials

**Branding**

- [ ] Logo or wordmark files, if they exist; otherwise approval for a simple typographic wordmark
- [ ] Any colours or fonts already used on Instagram, cards or packaging

**Business details**

- [ ] WhatsApp number, reply time to promise, and whether email is a secondary path
- [ ] Pricing decision: full, "starting from", or none
- [ ] Service area and travel policy; Instagram handle; domain

### Can be decided now vs needs the client

| Decide now (Velora) | Needs client approval |
| --- | --- |
| Spacing scale, grid, breakpoints | Creative direction and palette |
| Aspect ratio system and crop rules | Font pairing (after seeing it with her photos) |
| Accessibility and performance standards | Positioning line and all copy |
| Navigation pattern and enquiry composer behaviour | Which reviews and credentials appear |
| Button, link and form states | Pricing display; email as secondary path |
| Motion rules | Portfolio categories; wordmark |

## Approval needed now, and what follows

**Please approve, or redirect, these four decisions before detailed page design begins.**

| # | Decision | Recommendation | Alternatives |
| --- | --- | --- | --- |
| 1 | Creative direction | A — The Quiet Portrait | B — Heirloom; C — Studio Light |
| 2 | Type pairing | Fraunces + Schibsted Grotesk | Libre Caslon + Libre Franklin; Bodoni Moda + Figtree |
| 3 | Palette | A — Ivory and Ink, accent re-sampled from photos | B — Heirloom; C — Studio Light |
| 4 | Enquiry pattern | WhatsApp composer, no email form | Composer plus email copy; plain WhatsApp link only |

The direction should also be shown to the client with two or three of her real photographs placed in it; her reaction to that is the true test.

**After approval, Phase 2 continues with:**

1. Detailed page specifications for all seven pages, at phone and desktop widths, using the client's photographs where available.
2. Final token values, the wordmark treatment and the error colour.
3. The implementation handoff: component list, page-level acceptance criteria, and responsive and accessibility checks a developer can follow without guessing.
