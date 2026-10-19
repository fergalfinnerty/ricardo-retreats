# Ricardo Retreats

Standalone static website for **Ricardo Retreats** (host: **Ricard Chillon**).  
Plain HTML/CSS/JS — no build step.

**Live review draft (noindex):** https://fergalfinnerty.github.io/ricardo-retreats/

## Edit content

Almost everything editable lives in **`site-config.js`**:

- Brand name, monogram text, playful line (“Truly the RR of retreats.”)
- Dates, price, availability/payment wording
- Instagram URLs
- Colours
- Form endpoint (`contact.formEndpoint` — leave empty until you have Formspree or similar)
- Gallery image paths and captions

Colours are also defaults in `css/styles.css` (`:root` variables).

## Replace images

Genuine Lanzarote villa media is under `assets/images/` (webp + jpg).

| File | Caption (honest) |
|------|------------------|
| `yoga-studio.*` | Yoga space: mats in baskets, coastal view through glass |
| `villa-entrance.*` | Entrance through wooden doors into communal hallway |
| `communal-lounge.*` | Lounge with seating, plants, woven lights |
| `living-sea-view.*` | Living/dining opening to terrace and sea |
| `guest-bedroom.*` | Guest bedroom |
| `room-sea-view.*` | Quiet room with balcony over the sea |

**Placeholders still needed:** host portrait (Ricard), chef/meals photo.  
Drop files into `assets/images/`, then update the HTML placeholders or `site-config.js`.  
Do **not** scrape Instagram images. Exclude Crete / June20 photos from the Lanzarote gallery.

## Contact form

1. Create a Formspree (or similar) form.
2. Set `contact.formEndpoint` in `site-config.js` to the POST URL.
3. Until that is set, submit opens Instagram — no fake success message.

## Deploy

### GitHub Pages (current)

This site is intended for `fergalfinnerty/ricardo-retreats` with Pages from the `main` branch root.

```bash
# from this folder, after edits:
git add -A && git commit -m "Update site" && git push
```

### Netlify Drop / Cloudflare Pages

Drag the folder (or connect the repo) as a static site. Publish directory = site root. Free tiers are enough.

### Custom domain later

In GitHub Pages (or Netlify/Cloudflare), add the domain and point DNS (A/ALIAS/CNAME) as the host instructs. Update `siteUrl` and OG tags in `index.html` / `site-config.js`.

## Local preview

```bash
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

## Brand notes

- Working brand name: **Ricardo Retreats** (editable).
- Host’s name: **Ricard Chillon** (not “Ricardo Chilean”).
- Playful RR line is Fergal’s wordplay — original monogram only; no automotive logo or endorsement.
