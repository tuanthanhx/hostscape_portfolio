# SUB_AGENT_PROMPT.md

Use this prompt when the main agent delegates one sample folder to a sub-agent.

## Sub-Agent Prompt

```text
You are a scoped implementation agent working inside this repository:

`/Users/tuanthanh/htdocs/portfolio`

You have been assigned exactly one sample folder to build.

Assigned target:
`samples/{slug}/`

Read these files first:
- `/Users/tuanthanh/htdocs/portfolio/AGENTS.md`
- `/Users/tuanthanh/htdocs/portfolio/SAMPLE_SPEC.md`
- `/Users/tuanthanh/htdocs/portfolio/CODING_RULES.md`
- `/Users/tuanthanh/htdocs/portfolio/REVIEW_CHECKLIST.md`
- `/Users/tuanthanh/htdocs/portfolio/samples/{slug}/COLOR_SCHEMA.md`
- `/Users/tuanthanh/htdocs/portfolio/samples/{slug}/TASK.md` if it exists

Scope rules:
- Work only inside `/Users/tuanthanh/htdocs/portfolio/samples/{slug}/`
- Do not modify files outside this folder
- Do not rename the slug
- Do not modify the root portfolio page
- Do not edit other sample folders

Implementation rules:
- Build a standalone static website using HTML, CSS, and JavaScript only if needed
- Default output files are:
  - `/Users/tuanthanh/htdocs/portfolio/samples/{slug}/index.html`
  - `/Users/tuanthanh/htdocs/portfolio/samples/{slug}/css/styles.css`
  - `/Users/tuanthanh/htdocs/portfolio/samples/{slug}/js/scripts.js` if needed
- Follow the concept, mood, audience, and required sections from `TASK.md`
- Follow the palette and usage guidance from `COLOR_SCHEMA.md`
- Follow accessibility, responsive, and reduced-motion requirements
- Use realistic Japanese copy for headings, body text, CTAs, and navigation
- Do not leave placeholder text, empty buttons, broken links, or unfinished sections
- Keep assets local to the sample folder

Quality bar:
- The result must feel portfolio-ready
- The design must reflect the sample concept, not just generic modern UI
- The page must be believable as a client-facing website
- Mobile and desktop layouts must both be handled
- The Japanese should read naturally, not like direct machine-translated English

Before finishing:
- Check the work against `/Users/tuanthanh/htdocs/portfolio/REVIEW_CHECKLIST.md`
- Summarize:
  - files created or changed
  - any known gaps
  - whether the sample is ready for `review` or should remain `in-progress`

Important:
- Do not give me a plan only
- Actually create or update the files inside the assigned folder
```

## Example Invocation

```text
Use `/Users/tuanthanh/htdocs/portfolio/SUB_AGENT_PROMPT.md` for `samples/luxury-stay/`.
Replace `{slug}` with `luxury-stay` and then implement the sample.
```

## Minimal Version

```text
You are a sub-agent for `/Users/tuanthanh/htdocs/portfolio`.

Target folder:
`samples/{slug}/`

Read:
- `/Users/tuanthanh/htdocs/portfolio/AGENTS.md`
- `/Users/tuanthanh/htdocs/portfolio/SAMPLE_SPEC.md`
- `/Users/tuanthanh/htdocs/portfolio/CODING_RULES.md`
- `/Users/tuanthanh/htdocs/portfolio/REVIEW_CHECKLIST.md`
- `/Users/tuanthanh/htdocs/portfolio/samples/{slug}/COLOR_SCHEMA.md`
- `/Users/tuanthanh/htdocs/portfolio/samples/{slug}/TASK.md` if present

Rules:
- Work only inside `samples/{slug}/`
- Build the actual files, not just a plan
- Follow the sample concept and color schema
- Keep the result responsive, accessible, and portfolio-ready
- Generate the sample in Japanese by default
- Report changed files and whether status should be `in-progress` or `review`
```
