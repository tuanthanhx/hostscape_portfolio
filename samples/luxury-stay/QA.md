# QA.md

This file records how to verify the `luxury-stay` sample in a real browser and what has already been checked.

## Current Status
- Sample status: ready for review
- Last browser-based check: March 13, 2026
- Checked viewports:
  - Desktop: `1440 x 2200`
  - Mobile: `390 x 844` using iPhone 13 emulation

## What Was Verified
- Page loads successfully over a local static server
- `index.html` returns `200`
- No console errors were emitted during page load
- No `pageerror` runtime exceptions occurred
- No horizontal overflow was detected on desktop or mobile
- Mobile navigation toggle opens and updates `aria-expanded`
- Full-page screenshots were captured for manual comparison

## Review Artifacts
- `review-desktop.png`
- `review-mobile.png`

## Replaceable Image Slots
- `img/hero-placeholder.png`
- `img/room-premier-placeholder.png`
- `img/room-terrace-placeholder.png`
- `img/room-signature-placeholder.png`
- `img/dining-placeholder.png`
- `img/experience-placeholder.png`

Future agents can replace these files in place without editing markup, as long as the filenames stay the same.

## Recommended Browser Check Workflow
Run these from the repository root:

```bash
cd /Users/tuanthanh/htdocs/portfolio/samples/luxury-stay
python3 -m http.server 4173
```

In another terminal, run a Playwright check from the repository root:

```bash
node - <<'NODE'
const { chromium, devices } = require('playwright');

(async() => {
  const browser = await chromium.launch({ headless: true });
  const runs = [
    { name: 'desktop', options: { viewport: { width: 1440, height: 2200 } } },
    { name: 'mobile', options: { ...devices['iPhone 13'] } }
  ];

  for (const run of runs) {
    const context = await browser.newContext(run.options);
    const page = await context.newPage();
    page.on('console', msg => console.log(run.name, 'console:', msg.type(), msg.text()));
    page.on('pageerror', err => console.log(run.name, 'pageerror:', err.message));
    await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
    await page.screenshot({ path: `samples/luxury-stay/${run.name}.png`, fullPage: true });
    console.log(run.name, await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      title: document.title
    })));
    await context.close();
  }

  await browser.close();
})();
NODE
```

## Manual Review Checklist For Future Agents
- Confirm hero typography remains balanced on small screens
- Confirm sticky header does not cover section anchors awkwardly
- Confirm CTA buttons remain high-contrast over dark panels
- Confirm reveal motion still feels subtle if sections are edited
- If assets are added later, re-check load performance and alt text coverage
