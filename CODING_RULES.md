# CODING_RULES.md

These rules apply to all generated sample websites.

## Stack
- Default to static `HTML + CSS + JS`.
- Do not introduce build tooling, package managers, or frameworks unless explicitly requested.

## File and Folder Conventions
- Keep implementation inside `samples/{slug}/`.
- Use `css/styles.css` and `js/scripts.js` for primary files.
- Use lowercase kebab-case for any new file or folder names.

## HTML Rules
- Use semantic elements such as `header`, `main`, `section`, `nav`, and `footer`.
- Use one `h1` per page.
- Avoid empty anchors and empty buttons.
- Write realistic Japanese sample copy that matches the project type.
- Set the document language correctly, typically `lang="ja"`.
- For replaceable visual content, prefer `<img>` tags with stable local filenames over CSS-only background mocks.

## CSS Rules
- Define theme variables in `:root`.
- Keep spacing, radius, shadows, and colors as reusable tokens.
- Prefer modern layout with flexbox and grid.
- Ensure the site works at small mobile widths without horizontal scrolling.
- Ensure line-height, spacing, and text widths remain comfortable for Japanese copy.

## JavaScript Rules
- Use JavaScript only for meaningful interaction.
- Keep scripts progressive and lightweight.
- Avoid auto-playing disruptive behavior.
- Respect `prefers-reduced-motion` when animating.

## Asset Rules
- Prefer CSS gradients, shapes, and layout design before adding many images.
- If images are used, keep them local to the sample folder.
- When images are likely to be replaced by a reviewer later, create clearly named placeholder files such as `img/hero-placeholder.png` and document them in the sample folder.
- Do not hotlink third-party assets unless explicitly approved.

## Quality Rules
- No placeholder text.
- No unused files.
- No console errors.
- No broken relative paths.
- Keep comments short and only where they clarify non-obvious code.
- Do not leave English UI copy unless the sample explicitly needs bilingual or English-only content.
- If a browser-based check is performed, store any useful notes or screenshot artifact names in sample-local markdown so later agents can verify changes consistently.
