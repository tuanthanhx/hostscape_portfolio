# TASK.md

Build a standalone sample website for this folder.

## Sample Identity
- Title: Luxury Stay Promotion Site
- Slug: `luxury-stay`
- Type: Premium hotel campaign landing page

## Objective
- Create a polished hospitality landing page that feels high-end, calm, and conversion-oriented.
- The page should persuade visitors to explore rooms, trust the property, and move toward booking.
- The final website copy should be written in Japanese for prospective Japanese clients and guests.

## Inputs
- Read `../../AGENTS.md`
- Read `../../SAMPLE_SPEC.md`
- Read `../../CODING_RULES.md`
- Read `../../REVIEW_CHECKLIST.md`
- Read `./COLOR_SCHEMA.md`

## Output
- Create `index.html`
- Create `css/styles.css`
- Create `js/scripts.js` only if interaction adds clear value

## Audience
- Couples planning a special stay
- Domestic travelers looking for a premium hotel or resort-like city escape
- Japanese users comparing several accommodation options quickly on mobile

## Design Direction
- Mood: premium, cinematic, warm, editorial
- The website should feel more luxury boutique hotel than generic booking engine
- Use large visual sections, elegant spacing, and clear booking prompts
- Keep the interface refined and uncluttered

## Content Direction
- Use realistic Japanese copy
- Avoid placeholder text
- Position the hotel as a design-led property with comfort, dining, and curated local experiences
- Keep the tone refined and natural for Japanese hospitality marketing

## Required Sections
- Hero:
  Japanese luxury headline, short supporting copy, primary booking CTA, secondary explore CTA
- Signature Experience:
  A section introducing the atmosphere, service philosophy, and what makes the stay distinct
- Rooms or Suites:
  3 featured room types with short descriptions and key details
- Amenities:
  Spa, dining, pool, concierge, or similar premium facilities
- Dining or Experiences:
  Showcase one or two elevated on-site or nearby experiences
- Guest Trust:
  Testimonials, awards, or credibility indicators
- Booking CTA:
  A strong closing section that encourages reservation or inquiry
- Footer:
  Location-style details, contact-style details, and navigation

## Interaction Guidance
- Subtle scroll reveal or hover motion is acceptable
- Respect `prefers-reduced-motion`
- Do not add noisy sliders, autoplay video, or distracting effects

## Visual Constraints
- Follow `COLOR_SCHEMA.md`
- Use strong contrast for CTAs
- Let one accent color handle booking emphasis
- Prefer layered sections, soft gradients, or framed imagery over flat blocks

## Success Criteria
- The page looks portfolio-ready
- It reads as a believable luxury hotel landing page
- It works on mobile and desktop
- It can be reviewed using `../../REVIEW_CHECKLIST.md` without obvious gaps
- The Japanese copy feels appropriate for a real hotel website

## Notes For Future Copying
- This file can be duplicated to other sample folders and adapted section-by-section
- Keep the structure, but rewrite the objective, audience, and required sections to fit each sample concept

## Implementation Notes
- Implemented as a single-page static landing page with `index.html`, `css/styles.css`, and `js/scripts.js`
- Visual direction uses local placeholder PNG assets so future agents or reviewers can swap images without restructuring the HTML
- JavaScript is limited to:
  - mobile navigation toggle
  - reveal-on-scroll behavior with `prefers-reduced-motion` support
- Content tone is aimed at Japanese users comparing premium urban hotel stays on mobile first
- Primary conversion path is the booking CTA near the hero and closing reservation section
- Replaceable placeholder image files:
  - `img/hero-placeholder.png`
  - `img/room-premier-placeholder.png`
  - `img/room-terrace-placeholder.png`
  - `img/room-signature-placeholder.png`
  - `img/dining-placeholder.png`
  - `img/experience-placeholder.png`

## Review Notes
- A browser-based check was run locally on March 13, 2026
- Verified:
  - desktop render
  - mobile render
  - no horizontal overflow at tested viewports
  - no console errors during load
  - mobile navigation opens correctly
- Review artifacts saved locally:
  - `review-desktop.png`
  - `review-mobile.png`
