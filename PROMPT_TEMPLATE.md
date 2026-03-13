# PROMPT_TEMPLATE.md

Use this template when the main agent assigns a sample website to a sub-agent.

## Prompt

Build the sample website in `samples/{slug}/`.

Read these files first:
- `AGENTS.md`
- `SAMPLE_SPEC.md`
- `CODING_RULES.md`
- `REVIEW_CHECKLIST.md`
- `samples/{slug}/COLOR_SCHEMA.md`

Requirements:
- Work only inside `samples/{slug}/`
- Build a standalone static website using HTML, CSS, and JavaScript unless the folder already defines another approach
- Follow the color palette and mood from `COLOR_SCHEMA.md`
- Make the design feel intentional and portfolio-ready, not template-like
- Include a hero and at least 4 additional meaningful sections
- Ensure responsive behavior for mobile and desktop
- Use semantic HTML and accessible interaction patterns
- Keep assets local to the sample folder
- Avoid placeholder text and broken links

Expected output:
- `samples/{slug}/index.html`
- `samples/{slug}/css/styles.css`
- `samples/{slug}/js/scripts.js` if needed
- Any optional local assets used by the sample

Before finishing:
- Check the sample against `REVIEW_CHECKLIST.md`
- Summarize what was built and note any remaining gaps

Context for this sample:
- Title: `{title}`
- Slug: `{slug}`
- Concept notes: `{notes}`
