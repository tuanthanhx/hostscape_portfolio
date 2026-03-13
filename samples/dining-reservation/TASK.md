# TASK.md

Build a standalone sample website for this folder.

## Sample Identity
- Title: Dining & Reservation Showcase
- Slug: `dining-reservation`
- Type: Multi-page restaurant reservation-focused website

## Objective
- Create a refined restaurant website that highlights cuisine, atmosphere, and reservation intent.
- The page should help users quickly understand the dining concept and booking flow.
- The final website copy should be written in Japanese for prospective Japanese clients and guests.

## Inputs
- Read `../../AGENTS.md`
- Read `../../SAMPLE_SPEC.md`
- Read `../../CODING_RULES.md`
- Read `../../REVIEW_CHECKLIST.md`
- Read `./COLOR_SCHEMA.md`

## Output
- Create a 4-page static website
- Required pages:
  - `index.html` for concept, atmosphere, and reservation entry
  - `menu.html` for course details and signature dishes
  - `space.html` for seating, private dining, and use cases
  - `reservation.html` for hours, booking flow, policies, access, and contact
- Keep the page set coherent, with shared navigation, footer, and reservation entry points across all pages
- Ensure each page has a distinct role and does not repeat the same hero-plus-cards structure with only copy changes
- Keep shared assets inside the sample folder
- Create `css/styles.css`
- Create `js/scripts.js` only if interaction adds clear value

## Audience
- Couples planning dinner or celebration use
- Japanese users comparing reservation options
- Guests seeking a premium but approachable dining experience

## Design Direction
- Mood: refined, intimate, evening-focused
- Let cuisine and reservation clarity lead the layout
- Avoid noisy promo-heavy restaurant tropes
- Aim for a quietly premium dinner-house feel rather than a trendy cafe or flashy luxury-hotel style
- Favor elegant editorial pacing, dark warm tones, restrained typography, food-led imagery, and carefully framed reservation prompts
- Avoid overusing boxed floating cards, loud gradients, or decorative effects that compete with the cuisine presentation

## Content Direction
- Use realistic Japanese copy
- Avoid placeholder text
- Position the restaurant around craft, hospitality, and course or menu appeal
- Keep the tone polished and inviting
- Write as if for a real Japanese restaurant site where guests are deciding whether to book for dinner, an anniversary, or a small gathering
- Prioritize believable operational details such as course names, service hours, reservation timing, cancellation guidance, private dining notes, and guest etiquette where useful

## Required Sections
- Hero:
  Japanese restaurant headline, short concept copy, reservation CTA
- Concept:
  Cuisine philosophy and dining atmosphere
- Menu Highlights:
  Courses, seasonal dishes, or signature offerings
- Space and Plans:
  Seating, private dining, anniversaries, or group use
- Reservation Guide:
  Hours, booking flow, and policy-style information
- Guest Trust:
  Reviews, awards, or credibility markers
- Final CTA:
  Closing reservation section
- Footer:
  Access, hours, contact-style details, and navigation

## Page Intent
- `index.html`:
  Establish the restaurant concept, atmosphere, cuisine philosophy, and strongest reservation entry point
- `menu.html`:
  Present lunch or dinner courses, seasonal highlights, signature dishes, pricing guidance, and how to choose between plans
- `space.html`:
  Show seating types, counter or table atmosphere, private dining options, anniversary usage, and who each seating choice suits
- `reservation.html`:
  Make booking friction low by covering hours, reservation flow, cancellation policy, allergies, dress guidance if relevant, access, and direct contact methods

## Page Content Suggestions
- `index.html`:
  hero, concept statement, chef or craft perspective, signature menu teaser, guest trust, reservation CTA
- `menu.html`:
  course lineup, seasonal dish highlights, beverage pairing note, pricing or plan comparison, dietary guidance
- `space.html`:
  seating overview, private room information, anniversary or celebration use, group use guidance, atmosphere gallery
- `reservation.html`:
  opening hours, booking steps, cancellation notes, allergy consultation, access map-style guidance, contact block, FAQ

## Interaction Guidance
- Simple hover details or subtle reveal motion are acceptable
- Respect `prefers-reduced-motion`
- Keep the reservation path obvious at all times
- If interaction is added, use it to clarify menus, seating options, or booking guidance rather than for decorative animation
- Avoid carousels, autoplay behavior, loud parallax, or effects that distract from reading menu and reservation information

## Visual Constraints
- Follow `COLOR_SCHEMA.md`
- Use accent color mainly for reservation and pricing emphasis
- Keep the interface elegant and restrained
- Let food photography or food-placeholder imagery dominate key moments, supported by quiet surfaces and dark evening accents
- Use typography and spacing to create a composed dinner-service mood, with fewer but stronger visual modules
- Avoid making every section a repeated grid of uniform cards; mix editorial text blocks, framed images, menu strips, pricing rows, and reservation panels
- Keep the final impression closer to a premium Japanese restaurant website than to a campaign landing page

## Reference Direction
- Primary reference website:
  - `Kanamean Nishitomiya - Kaiseki Dinner`
  - https://www.kanamean.co.jp/en/meal/dinner.html
- Use this reference for:
  - calm premium tone
  - food-first presentation
  - restrained layout and elegant spacing
  - clear connection between cuisine detail and booking intent
- Do not copy the exact structure, wording, or branding from the reference; use it as guidance for atmosphere, rhythm, and information balance only

## Success Criteria
- The page looks portfolio-ready
- It reads as a believable premium restaurant website
- It works on mobile and desktop
- It can be reviewed using `../../REVIEW_CHECKLIST.md` without obvious gaps
- The Japanese copy feels appropriate for a real restaurant website
