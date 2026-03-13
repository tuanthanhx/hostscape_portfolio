# TASK.md

Build a standalone sample website for this folder.

## Sample Identity
- Title: Wellness Experience Landing Page
- Slug: `wellness-experience`
- Type: Wellness service landing page

## Objective
- Create a calming landing page for wellness services that blends atmosphere with booking intent.
- The page should present the experience as restorative, premium, and easy to reserve.
- The final website copy should be written in Japanese for prospective Japanese clients and guests.

## Inputs
- Read `../../AGENTS.md`
- Read `../../SAMPLE_SPEC.md`
- Read `../../CODING_RULES.md`
- Read `../../REVIEW_CHECKLIST.md`
- Read `./COLOR_SCHEMA.md`

## Output
- Create a single-page static landing website centered on `index.html`
- Keep the experience calm and focused on one booking journey
- Create `css/styles.css`
- Create `js/scripts.js` only if interaction adds clear value

## Audience
- Japanese users interested in self-care and wellness services
- Busy professionals seeking rest and recovery
- Mobile users comparing premium wellness options

## Design Direction
- Mood: soft, restorative, natural
- The page should feel spacious, quiet, and calming
- Avoid sharp or overly commercial styling
- Use Amanemu wellness pages as the primary directional reference for composition, atmosphere, restraint, and premium hospitality tone
- Use the user-provided screenshot in the conversation as a strong visual cue for layout rhythm, image scale, white space, muted luxury, and elegant section sequencing
- Favor a hospitality-meets-wellness presentation rather than a beauty salon, clinic, or fitness app style
- Avoid heavy boxed-card layouts, bright promotional patterns, and consumer-campaign styling

## Content Direction
- Use realistic Japanese copy
- Avoid placeholder text
- Position the service around balance, care, and guided relaxation
- Keep the tone gentle and reassuring
- Write as if the site is for a premium retreat, spa, or guided wellness program where the guest is considering atmosphere, trust, and personal restoration before booking
- Balance emotional language with practical reassurance such as consultation flow, treatment duration, space quality, and who the experience is suited for

## Required Sections
- Hero:
  Japanese wellness headline, short promise, booking CTA
- Philosophy:
  Service concept and emotional value
- Programs or Treatments:
  3 service options or plans
- Environment:
  Space, ingredients, therapists, or experience details
- Benefits:
  Reassurance points and intended outcomes
- Guest Voice:
  Testimonials or trust statements
- Final CTA:
  Booking or inquiry section
- Footer:
  Access, hours, contact-style details, and navigation

## Section Direction
- Hero:
  Large quiet visual, restrained headline, short supporting copy, and understated CTA placement
- Philosophy:
  Explain the retreat or wellness concept in a reflective, editorial tone rather than marketing-heavy copy
- Programs or Treatments:
  Present 3 structured offerings with differences in duration, focus, or ideal guest profile
- Environment:
  Show rooms, treatment spaces, ingredients, therapists, or natural surroundings with image-led storytelling
- Benefits:
  Clarify what guests can expect physically or emotionally without sounding medical or exaggerated
- Guest Voice:
  Use calm, believable testimonials that reinforce trust and emotional ease
- Final CTA:
  Keep the booking prompt visible but soft, as a natural continuation of the experience rather than a hard conversion push

## Interaction Guidance
- Soft reveal motion is acceptable
- Respect `prefers-reduced-motion`
- Keep the overall experience quiet and unobtrusive
- If interaction is used, prefer minimal section reveals, gentle navigation behavior, or subtle state changes only
- Avoid sliders, auto-playing media, aggressive sticky elements, countdowns, or anything that breaks the meditative tone

## Visual Constraints
- Follow `COLOR_SCHEMA.md`
- Use accent color for CTA and premium highlights only
- Preserve visual softness and breathing room
- Favor large photography blocks, quiet editorial text groupings, generous margins, thin dividers, and calm asymmetrical or staggered layouts
- Let surfaces feel refined and tactile; the page should not resemble a generic SaaS or card-grid landing page
- Typography should feel composed and hospitality-led, with elegant hierarchy suitable for Japanese text density
- Keep navigation restrained and minimal, similar in spirit to the provided Amanemu screenshot

## Reference Direction
- Primary reference site:
  - `Amanemu Wellness`
  - https://www.aman.com/resorts/amanemu/wellness
- Supporting reference:
  - `Amanemu Detox & Cleansing`
  - https://www.aman.com/ja-jp/resorts/amanemu/wellness/detox-cleansing
- A user-provided screenshot in the conversation should be treated as the primary visual reference for:
  - quiet hero composition
  - elegant spacing and long vertical pacing
  - muted luxury with warm natural materials
  - image-led storytelling with understated text blocks
  - minimal, calm footer and navigation treatment
- Do not copy the exact layout, text, or branding from Amanemu. Use it only for atmosphere, pacing, restraint, and the balance between editorial storytelling and booking clarity.

## Success Criteria
- The page looks portfolio-ready
- It reads as a believable Japanese wellness website
- It works on mobile and desktop
- It can be reviewed using `../../REVIEW_CHECKLIST.md` without obvious gaps
- The Japanese copy feels appropriate for a real wellness service
