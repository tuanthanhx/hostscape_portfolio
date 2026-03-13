# Portfolio Color Schema

This palette is extracted and normalized from the current website so future sections can stay visually aligned.

## Core Palette

- `--color-bg`: `#EAE4E0`
  Main page background. Warm light beige.
- `--color-surface`: `#F4EFEB`
  Cards and elevated panels.
- `--color-surface-strong`: `#E3DBD5`
  Secondary fills, soft badges, and quiet UI states.
- `--color-text`: `#2F2A28`
  Primary heading and navigation text.
- `--color-text-muted`: `#6F6560`
  Supporting copy and metadata.
- `--color-line`: `#D5CAC2`
  Hairlines, borders, separators.
- `--color-accent`: `#F07A3F`
  Primary action orange from the current website.
- `--color-accent-strong`: `#DD6930`
  Hover and active accent state.
- `--color-accent-soft`: `#F6B089`
  Soft orange highlights and glow overlays.
- `--color-shadow`: `rgba(63, 38, 21, 0.12)`
  Card and panel shadow.

## Usage Guidance

- Use the warm beige tones for page background and card framing.
- Keep text mostly dark charcoal rather than pure black.
- Reserve orange for calls to action, links, filters, and animated emphasis.
- Favor soft shadows and low-contrast borders over hard outlines.
- Maintain generous spacing so the layout feels premium rather than dense.

## Suggested CSS Tokens

```css
:root {
  --color-bg: #eae4e0;
  --color-surface: #f4efeb;
  --color-surface-strong: #e3dbd5;
  --color-text: #2f2a28;
  --color-text-muted: #6f6560;
  --color-line: #d5cac2;
  --color-accent: #f07a3f;
  --color-accent-strong: #dd6930;
  --color-accent-soft: #f6b089;
  --color-shadow: rgba(63, 38, 21, 0.12);
}
```
