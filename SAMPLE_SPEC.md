# SAMPLE_SPEC.md

This document defines the shared contract for every sample website in `./samples/`.

## Goal
- Produce a polished standalone sample site that matches its concept and `COLOR_SCHEMA.md`.
- Keep each sample plausible as a real client-facing website, not a generic template.
- Write the user-facing website content in Japanese because the expected clients are Japanese.

## Required Deliverables
- `index.html`
- `css/styles.css`
- `js/scripts.js` if interaction is needed
- Local assets only when necessary

## Minimum Page Content
- Hero section with a clear concept-specific headline
- At least 4 meaningful content sections beyond the hero
- Primary CTA appropriate to the sample type
- Footer with useful navigation or contact-style information
- Natural Japanese navigation labels, section headings, and CTA copy

## Recommended Section Types
- Overview or brand story
- Services, rooms, menus, plans, or offerings
- Feature highlights
- Gallery or showcase block
- Testimonials, trust markers, or social proof
- FAQ, contact, reservation, or inquiry CTA

## UX Requirements
- Mobile-first responsive behavior
- Visible navigation or strong scroll structure
- Readable hierarchy and spacing
- Clear CTA placement
- No dead-end screens

## Accessibility Baseline
- Semantic headings in order
- Alt text for meaningful images
- Keyboard-reachable interactive elements
- Visible focus states
- Sufficient contrast for text and controls
- Set the page language correctly, typically with `lang="ja"` on the root `html` element

## Performance Baseline
- Keep the implementation lightweight
- Prefer CSS over heavy JS for visual effects
- Avoid unnecessary dependencies
- Optimize image count and file size when assets are added

## Visual Direction
- Respect the palette and mood in `COLOR_SCHEMA.md`
- Avoid generic default styles
- Keep typography, spacing, and component shape consistent
- Use color intentionally rather than decorating every element
- Typography and rhythm should suit Japanese text density and line length

## Technical Scope
- Default stack is plain HTML, CSS, and JavaScript unless the main agent says otherwise
- Paths inside a sample should be relative to that sample folder
- Samples should run as static files without a build step by default
- Japanese copy is the default content language unless a specific sample brief says otherwise
