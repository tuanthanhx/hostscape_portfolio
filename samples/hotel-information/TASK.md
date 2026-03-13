# TASK.md

Build a standalone sample website for this folder.

## Sample Identity
- Title: Hotel Information Architecture Build
- Slug: `hotel-information`
- Type: Multi-page hotel information website

## Objective
- Create a scalable hotel website that prioritizes information architecture, clarity, and navigation.
- The page should feel ready to expand into a larger hotel website system.
- The final website copy should be written in Japanese for prospective Japanese clients and guests.

## Inputs
- Read `../../AGENTS.md`
- Read `../../SAMPLE_SPEC.md`
- Read `../../CODING_RULES.md`
- Read `../../REVIEW_CHECKLIST.md`
- Read `./COLOR_SCHEMA.md`

## Output
- Create a 5-page static website
- Required pages:
  - `index.html` for hotel overview, booking entry, and major navigation
  - `rooms.html` for room types and stay details
  - `facilities.html` for dining, bath, services, and amenities
  - `access.html` for location, transportation, parking, and local guidance
  - `faq.html` for notices, seasonal updates, and pre-booking information
- Keep the page set coherent, with shared navigation, footer, booking paths, and visual language across all pages
- Ensure each page has a distinct information role instead of repeating one layout pattern with minor copy swaps
- Keep shared assets inside the sample folder
- Create `css/styles.css`
- Create `js/scripts.js` only if interaction adds clear value

## Audience
- Japanese users comparing accommodation information efficiently
- Families and couples checking rooms, facilities, and access
- Users who need practical hotel information before booking

## Design Direction
- Mood: organized, dependable, premium-neutral
- Prioritize structure, navigation, and scannability
- The site should feel like a solid hospitality information hub
- Use `Ito Ryokuyu` as the primary reference for tone, page hierarchy, and information-rich hospitality presentation
- Use the user-provided screenshot in the conversation as a direct visual cue for composition, image rhythm, and the balance between premium atmosphere and practical hotel information
- Favor a polished Japanese hotel website feel with strong photography, layered information blocks, and richer content density than a campaign landing page
- Avoid reducing the site to plain corporate blocks; it should still feel like a real hotel with warmth and visual appeal

## Content Direction
- Use realistic Japanese copy
- Avoid placeholder text
- Present rooms, facilities, dining, and access clearly
- Keep the tone professional and welcoming
- Write as if guests are actively comparing the hotel against other accommodations and need both emotional confidence and practical clarity
- Include believable operational details such as room capacities, meal arrangements, parking, check-in rules, shuttle access, bath hours, and seasonal notices

## Required Sections
- Hero:
  Japanese headline, short hotel summary, booking CTA
- Stay Overview:
  Core positioning and feature summary
- Rooms:
  3 room types with practical details
- Facilities:
  Dining, bath, services, and property features
- Access:
  Location, station access, or parking details
- Notices or Seasonal Info:
  Hotel updates or event information
- FAQ:
  Useful pre-booking information
- Footer:
  Contact-style details and navigation

## Page Intent
- `index.html`:
  Introduce the hotel, provide a strong first impression, summarize major offerings, and guide users deeper into rooms, facilities, access, and booking
- `rooms.html`:
  Organize room types clearly with capacity, views, layout differences, and which guest types each room suits
- `facilities.html`:
  Present dining, baths, lounge spaces, services, and notable on-site experiences with clear subnavigation or grouped sections
- `access.html`:
  Cover address, transportation, parking, shuttle details, surrounding area guidance, and arrival reassurance
- `faq.html`:
  Provide pre-booking and pre-arrival answers, seasonal notices, policy notes, and practical guest support information

## Page Content Suggestions
- `index.html`:
  keyvisual slider, hotel overview, short room teaser, dining or bath teaser, seasonal information, social or gallery carousel, booking CTA
- `rooms.html`:
  room category navigation, room detail blocks, amenities summary, recommended guest scenarios, related booking prompts
- `facilities.html`:
  dining overview, bath or spa section, lounge/services, experience gallery or carousel, opening hours and usage notes
- `access.html`:
  map-style access summary, train and car routes, parking details, shuttle information, local surroundings, contact block
- `faq.html`:
  grouped FAQ categories, hotel policy notes, stay preparation guidance, seasonal updates, inquiry CTA

## Interaction Guidance
- Sticky navigation, tabs, section links, a large keyvisual slider, and selected carousels are acceptable
- Respect `prefers-reduced-motion`
- Navigation clarity matters more than visual flourish
- A large hero or keyvisual slider on `index.html` is encouraged, inspired by the reference site
- One or two additional carousels or scrollable galleries are acceptable for featured rooms, dining, seasonal scenes, or hotel highlights
- Any slider or carousel must remain usable on mobile, keyboard-reachable where applicable, and not feel noisy or overly fast
- Avoid excessive autoplay behavior; if slides advance automatically, keep timing slow, provide controls, and respect `prefers-reduced-motion`

## Visual Constraints
- Follow `COLOR_SCHEMA.md`
- Use accent color mainly for booking and wayfinding emphasis
- Keep the page highly legible at all sizes
- Use generous photography and visual sequencing similar in spirit to the Ito Ryokuyu reference and the provided screenshot
- Allow richer presentation modules such as full-width hero imagery, featured image rails, content carousels, and promotional panels, but keep the information hierarchy clear
- Balance premium hospitality atmosphere with practical hotel guidance; guests should never have to search hard for key information
- The design should feel more like a substantial official hotel site than a one-page promotional landing page

## Reference Direction
- Primary reference site:
  - `Ito Ryokuyu`
  - https://www.ito-ryokuyu.com/
- A user-provided screenshot in the conversation should be treated as a primary visual reference for:
  - large keyvisual presentation
  - image-led section rhythm
  - gallery and carousel usage
  - layered hospitality information blocks
  - premium Japanese inn or hotel atmosphere
- Use the reference for structure and mood, not for direct copying of branding, exact layout, or text

## Implementation Notes For The Sub-Agent
- It is acceptable, and preferred, to implement:
  - one large hero slider on the home page
  - one or two additional carousels for hotel highlights or facilities
- Keep JavaScript focused on these navigation and gallery behaviors plus any modest progressive enhancement
- Make sure motion remains calm and premium, not flashy or amusement-style

## Success Criteria
- The page looks portfolio-ready
- It reads as a believable hotel information website
- It works on mobile and desktop
- It can be reviewed using `../../REVIEW_CHECKLIST.md` without obvious gaps
- The Japanese copy feels appropriate for a real hotel site
