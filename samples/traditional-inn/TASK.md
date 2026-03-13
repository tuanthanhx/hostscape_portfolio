# TASK.md

Build a standalone sample website for this folder.

## Sample Identity
- Title: Traditional Inn Storytelling Page
- Slug: `traditional-inn`
- Type: Multi-page ryokan-style storytelling website

## Objective
- Create a calm editorial website presenting a traditional inn with heritage, hospitality, and atmosphere.
- The page should balance emotional storytelling with practical stay information.
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
  - `index.html` for the inn story and seasonal introduction
  - `rooms.html` for guest room styles and stay details
  - `cuisine.html` for dining, local ingredients, and hospitality moments
  - `onsen.html` for bath facilities, access, and reservation guidance
- Keep the page set coherent, with shared navigation, footer, and visual language across all pages
- Ensure each page has a distinct purpose rather than repeating the same section structure with different copy
- Keep shared assets inside the sample folder
- Create `css/styles.css`
- Create `js/scripts.js` only if interaction adds clear value

## Audience
- Japanese travelers seeking a refined cultural stay
- Couples or small groups planning a quiet trip
- Users who value atmosphere, cuisine, and omotenashi

## Design Direction
- Mood: quiet, cultural, timeless, warm
- Favor editorial pacing, generous spacing, and elegant typography
- Avoid flashy commercial layouts
- Avoid modern boxed-card-heavy landing page patterns
- Prefer long-form storytelling composition, framed imagery, layered paper-like sections, subtle dividers, inset content areas, and calm asymmetric balance
- The site should feel closer to a ryokan journal or cultural stay editorial than a generic booking template
- Use the user-provided reference screenshot as a strong directional cue for page rhythm, whitespace, vertical flow, restrained navigation, warm photography framing, and traditional inn atmosphere
- Treat that screenshot as inspiration for tone and composition only; do not trace it literally or copy its exact structure, text, or branding

## Content Direction
- Use realistic Japanese copy
- Avoid placeholder text
- Present the inn through hospitality philosophy, seasonal beauty, and cuisine
- Keep the tone respectful, understated, and natural

## Required Sections
- Hero:
  Japanese headline, brief seasonal introduction, reservation CTA
- Inn Story:
  Origin, philosophy, and atmosphere
- Guest Rooms:
  2 or 3 room styles with key details
- Cuisine:
  Kaiseki-style or local dining presentation
- Bath or Facilities:
  Onsen, lounge, garden, or quiet amenities
- Seasonal Moments:
  Nature or cultural appeal by season
- Guest Trust:
  Testimonials or reassurance points
- Footer:
  Access, contact-style details, and navigation

## Page Intent
- `index.html`:
  Establish the ryokan's heritage, seasonal atmosphere, hospitality philosophy, and overall emotional tone
- `rooms.html`:
  Help guests compare room styles calmly with practical details, views, capacity, and ideal stay scenarios
- `cuisine.html`:
  Present the dining experience as a central reason to stay, including seasonal ingredients, meal flow, and private dining or breakfast notes
- `onsen.html`:
  Explain bath facilities, quiet amenities, access information, reservation guidance, and useful pre-arrival details

## Interaction Guidance
- Gentle reveal effects are acceptable
- Respect `prefers-reduced-motion`
- The experience should remain calm and low-noise
- Avoid sliders, auto-advancing galleries, loud hover effects, or interaction patterns that feel modern-tech rather than hospitality-cultural

## Visual Constraints
- Follow `COLOR_SCHEMA.md`
- Use accent colors subtly
- Let whitespace and section pacing carry the elegance
- Do not build every content group as isolated floating cards
- Use thin rules, layered backgrounds, editorial image placement, calligraphic or Mincho-forward typographic hierarchy, and restrained ornament inspired by Japanese hospitality materials
- Keep booking prompts present but understated; the site should lead with atmosphere and trust before conversion pressure
- Favor a vertically paced composition similar to the provided reference, with generous margins, quiet sectional transitions, and image-led storytelling blocks instead of dense UI modules

## Reference Note
- A user-provided screenshot is available in the conversation and should be treated as the primary visual reference for atmosphere and pacing
- Key cues to borrow:
  - dark wood, paper, and garden-inspired contrast
  - quiet editorial spacing with long vertical rhythm
  - understated navigation and footer treatment
  - image-first storytelling with minimal decorative UI
  - a calm, heritage-led presentation rather than a conversion-first landing page feel

## Success Criteria
- The page looks portfolio-ready
- It reads as a believable ryokan or traditional inn website
- It works on mobile and desktop
- It can be reviewed using `../../REVIEW_CHECKLIST.md` without obvious gaps
- The Japanese copy feels appropriate for a real hospitality website
