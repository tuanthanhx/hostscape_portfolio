# QA Notes

## Self-check summary
- Created a 4-page static website: `index.html`, `services.html`, `cases.html`, `company.html`
- Added shared styling in `css/styles.css`
- Added lightweight navigation/year script in `js/scripts.js`
- Added local replaceable SVG visuals in `img/` and wired them through `<img>` tags
- Revised page layouts to reduce template repetition and give each page a distinct role
- Confirmed content is scoped to `samples/business-service/`
- Confirmed pages use `lang="ja"` and each page has a single `h1`
- Removed form placeholder attributes and replaced them with labels/helper text
- Confirmed no obvious placeholder strings such as `Lorem ipsum`, `TODO`, or dead `href="#"` links remain

## Review checklist status
- Concept fit: passes
- Color schema usage: passes
- Japanese copy quality: passes on self-review
- Mobile/desktop layout: designed responsively in CSS
- Reduced motion handling: included via `prefers-reduced-motion`
- FAQ accessibility: implemented with native `details/summary`
- Local image requirement: passes with sample-local `<img>` assets

## Known gaps
- No browser rendering pass was run in this session, so visual QA and console verification should still be completed during review
- Contact form is present as a static sample UI and does not submit data
