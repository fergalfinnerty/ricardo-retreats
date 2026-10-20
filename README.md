# Ricard Retreats (website preview)

Static site for Ricard Chillon's Lanzarote yoga retreat, 5–10 November 2026.
Plain HTML/CSS/JS, no build step. Hosted on GitHub Pages from the `main` branch root
(the repository and URL keep the older name `ricardo-retreats` so existing links keep working).

## Editing content
1. Edit `site-config.js` (brand name, host name/title/bio, RR badge labels, playful line,
   eyebrow, dates, facts, arrival/rooms/payment copy, Instagram and chef links, hero and gallery
   images, optional host/chef photos, page title, description, share tags, footer, colours,
   form endpoint). It must stay valid JSON after `window.SITE =` (whole-line `//` comments are fine).
2. Run `python3 tools/sync-meta.py` (no dependencies). It copies the config into the static
   `index.html`: `<title>`, description, Open Graph/Twitter tags, every `data-bind` text,
   bound links/labels/images, and the villa gallery. `js/main.js` also applies the config in the
   browser, but link previews and crawlers only read the static HTML, so run the script after edits.
3. Commit and push to `main`; Pages redeploys automatically.

Not driven by the config: the section copy written directly in `index.html` (experience
moments, villa paragraph, food text, included list, FAQ answers), the RR monogram drawing
(SVG `<symbol id="rr-pair">` in `index.html`, also in `favicon.svg`), and the share image
`assets/images/og-cover.jpg`, which is rendered from `tools/og-cover.html` with headless Chrome.

## Images
Real stills from the June 2026 villa media (WhatsApp photo/videos, kept out of git in
`assets/raw/`). Hero: a sea-view room from VID-20260604-WA0013 at native resolution (464×620).
Host and chef photos are optional (`images.host` / `images.chef`); while `null`, those sections
stay text-led and no empty box is shown.

## Enquiry form
Hidden while `contact.formEndpoint` is empty; visitors see the Instagram button only. When a
real endpoint (e.g. Formspree) is added, the form appears and shows a thank-you only after a
successful (2xx) response, otherwise a friendly error pointing to Instagram.

## Draft status
`<meta name="robots" content="noindex, nofollow">` stays in `index.html` until the site is approved.

## Local preview
`python3 -m http.server 8765` then open http://localhost:8765/
