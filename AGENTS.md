# AGENTS.md

This repository is a portfolio hub plus a workspace for generating standalone sample websites under `./samples/`.

## Roles

### Main Agent
- Read this file first.
- Read `SAMPLE_SPEC.md`, `CODING_RULES.md`, and `REVIEW_CHECKLIST.md` before assigning or generating work.
- Use `samples/INDEX.md` as the source of truth for sample names, slugs, and progress.
- Assign one sample at a time to a sub-agent.
- Keep sub-agents scoped to one `samples/{slug}/` folder unless a root-level change is explicitly requested.

### Sub-Agent
- Work only inside the assigned `samples/{slug}/` folder.
- Read that folder's `COLOR_SCHEMA.md` before generating anything.
- Follow `SAMPLE_SPEC.md`, `CODING_RULES.md`, and `REVIEW_CHECKLIST.md`.
- Do not rename slugs or edit other sample folders.
- Do not change the root portfolio page unless the main agent explicitly asks for it.

## Repository Intent
- Root `index.html` is the current portfolio page.
- Each folder in `samples/` is a self-contained website sample.
- Each sample should be implementation-ready for later linking from the portfolio.

## Expected Sample Structure

Each `samples/{slug}/` folder should aim to contain:
- `index.html`
- `css/styles.css`
- `js/scripts.js`
- `COLOR_SCHEMA.md`
- Optional local assets inside `images/` or `assets/`

If a sample is intentionally static and does not need JavaScript, keep `js/scripts.js` as a small placeholder or omit it only if the main agent allows that deviation.

## Non-Negotiable Rules
- Use the existing slug from `samples/INDEX.md`.
- Keep all sample assets local to the sample folder.
- Build responsive layouts for mobile and desktop.
- Use semantic HTML and accessible interaction patterns.
- Avoid external UI libraries unless explicitly approved.
- Do not leave placeholder copy such as "Lorem ipsum" or "Coming soon".
- Do not modify unrelated files when working on a sample.

## Workflow
1. Main agent selects a sample from `samples/INDEX.md`.
2. Sub-agent reads the sample `COLOR_SCHEMA.md`.
3. Sub-agent generates the website following shared rules.
4. Sub-agent self-checks against `REVIEW_CHECKLIST.md`.
5. Main agent reviews output and updates status in `samples/INDEX.md`.

## Output Standard
- The website should feel intentionally designed, not boilerplate.
- The visual system must clearly reflect the sample's `COLOR_SCHEMA.md`.
- The result should be usable as a portfolio demonstration without further cleanup.
