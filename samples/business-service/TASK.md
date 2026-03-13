# TASK.md

Build a standalone sample website for this folder.

## Sample Identity
- Title: Business Service Corporate Site
- Slug: `business-service`
- Type: Multi-page B2B corporate service website

## Objective
- Create a structured corporate website explaining services clearly and building trust.
- The page should convert interest into inquiry without feeling generic.
- The final website copy should be written in Japanese for prospective Japanese clients and decision-makers.

## Inputs
- Read `../../AGENTS.md`
- Read `../../SAMPLE_SPEC.md`
- Read `../../CODING_RULES.md`
- Read `../../REVIEW_CHECKLIST.md`
- Read `./COLOR_SCHEMA.md`

## Output
- Create a 4-page static website
- Required pages:
  - `index.html` for positioning, trust, and inquiry entry
  - `services.html` for service lines and support scope
  - `cases.html` for results, client examples, and strengths
  - `company.html` for company profile, FAQ, and contact guidance
- Keep the page set coherent, with shared navigation, footer, and inquiry entry points across all pages
- Ensure each page has a distinct role rather than repeating the same layout with minor copy changes
- Keep shared assets inside the sample folder
- Create `css/styles.css`
- Create `js/scripts.js` only if interaction adds clear value

## Audience
- Japanese business stakeholders researching service providers
- Mid-sized companies comparing vendors
- Users who need fast understanding of strengths, services, and trust factors

## Design Direction
- Mood: credible, modern, organized
- Favor clarity and structure over decorative presentation
- The site should feel practical, polished, and trustworthy
- Avoid generic startup landing page styling or flashy agency aesthetics
- Prefer strong hierarchy, disciplined spacing, compact trust blocks, calm data presentation, and layouts that help busy business users scan quickly
- The visual language should feel like a capable mid-to-upper-tier Japanese B2B firm, not a consumer campaign page

## Content Direction
- Use realistic Japanese copy
- Avoid placeholder text
- Present the service offering in a direct, benefit-driven format
- Keep the tone professional and natural for B2B communication
- Write as if decision-makers are comparing several vendors and need to understand scope, credibility, results, and contact next steps with minimal effort
- Include believable B2B details such as service scope, support flow, implementation timelines, industry coverage, operational strengths, and inquiry expectations

## Required Sections
- Hero:
  Clear Japanese value proposition, service summary, inquiry CTA
- Service Overview:
  Main services or support areas
- Strengths:
  Differentiators, process quality, or operational advantages
- Case or Results:
  Example outcomes, client stories, or achievements
- Company Trust:
  Company profile, numbers, certifications, or partner logos
- FAQ or Inquiry Guide:
  Contact reassurance and next steps
- Final CTA:
  Strong inquiry section
- Footer:
  Company information and navigation

## Page Intent
- `index.html`:
  Establish the company value proposition, target clients, core strengths, and best inquiry entry point
- `services.html`:
  Explain main service lines, support scope, deliverables, workflow, and which client needs each service addresses
- `cases.html`:
  Present example outcomes, client situations, measurable improvements, and reasons the company is trusted in execution
- `company.html`:
  Cover company profile, team or operating stance, FAQ, contact guidance, and practical information for first inquiry

## Page Content Suggestions
- `index.html`:
  hero, service summary, strengths, quick proof points, featured case teaser, CTA
- `services.html`:
  service categories, support process, deliverables, implementation flow, plan comparison or support boundaries
- `cases.html`:
  case studies, result metrics, client industries, before-and-after summaries, testimonial or operational trust section
- `company.html`:
  company overview, representative message or operating philosophy, FAQ, inquiry steps, contact details

## Interaction Guidance
- Minor hover feedback or simple reveals are acceptable
- Respect `prefers-reduced-motion`
- Keep interaction functional rather than decorative
- If interaction is added, use it to clarify services, process steps, comparisons, or FAQs rather than to create visual spectacle
- Avoid carousels, autoplay content, heavy animation, or trendy dashboard gimmicks that weaken trust

## Visual Constraints
- Follow `COLOR_SCHEMA.md`
- Maintain strong readability and restrained contrast
- Accent color should support conversion points, not dominate the layout
- Favor clean sectioning, data rows, process diagrams, comparison tables, metric callouts, and editorial trust blocks over repetitive floating cards
- Keep typography businesslike and confident, with enough white space for Japanese B2B readability
- The site should feel more like a polished corporate service website than a sales-heavy startup landing page

## Implementation Notes For The Sub-Agent
- Use realistic but fictional company information, industries, results, and inquiry details
- Prefer practical business categories such as DX support, operations improvement, BPO, logistics coordination, back-office support, or consulting-style services rather than vague “innovation” language
- Make sure the inquiry path is visible on every page, but do not let CTA styling overpower the trust-building content

## Success Criteria
- The page looks portfolio-ready
- It reads as a believable Japanese corporate service website
- It works on mobile and desktop
- It can be reviewed using `../../REVIEW_CHECKLIST.md` without obvious gaps
- The Japanese copy feels appropriate for a real B2B service site
