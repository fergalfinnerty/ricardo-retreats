// Ricard Retreats: the one file to edit for names, dates, prices, links, images and colours.
// Format note: everything between "window.SITE =" and the final ";" must stay valid JSON
// (double quotes, no trailing commas). Whole-line comments starting with // are fine.
// After editing, run:  python3 tools/sync-meta.py  so the static HTML (seen by link previews,
// crawlers and visitors without JavaScript) matches this file. In the browser, js/main.js also
// applies these values on page load.
window.SITE = {
  "brandName": "Ricard Retreats",
  "hostName": "Ricard Chillon",
  "hostTitle": "Personal trainer and yoga teacher",
  "hostCredentials": "Level 3 personal trainer · 200-hour YMCA yoga teacher training",
  "hostStatement": "Movement, reflection and connection, brought together.",
  "hostBio": "Ricard brings movement, reflection and connection together. He is sincere, empathetic and positive: a thoughtful, proactive host and a natural community builder, who likes people to feel at ease and part of things from the start.",
  "hostBio2": "His classes welcome you wherever you are with your practice, and you are welcome to message him with any questions before you decide.",

  "monogram": {
    "top": "RICARD",
    "bottom": "RETREATS",
    "ariaLabel": "Ricard Retreats RR monogram"
  },
  "playfulLine": "Truly the RR of retreats.",
  "tagline": "A little more space to breathe.",
  "eyebrow": "Lanzarote · 5–10 November 2026",
  "heroLede": "Five nights of yoga, shared meals and sea air at a villa in northern Lanzarote, hosted by Ricard Chillon.",
  "welcome": "A few days to step away from the everyday: to move, to rest, to eat well and to share the table with good company. Come as you are, and take what you need from each day.",

  "meta": {
    "title": "Ricard Retreats · Yoga retreat in Lanzarote, 5–10 November 2026",
    "description": "Five nights of yoga, shared meals and sea air in northern Lanzarote, 5–10 November 2026, hosted by Ricard Chillon. £1,350 per person, flights not included.",
    "ogTitle": "Ricard Retreats · A little more space to breathe",
    "ogDescription": "A five-night yoga retreat in northern Lanzarote, 5–10 November 2026, hosted by Ricard Chillon.",
    "siteUrl": "https://fergalfinnerty.github.io/ricardo-retreats/",
    "ogImage": "assets/images/og-cover.jpg",
    "noIndex": true
  },

  "colours": {
    "ivory": "#f6f2e9",
    "seaGreen": "#345a48",
    "charcoal": "#273d35",
    "sand": "#e8e2d5",
    "terracotta": "#956451",
    "terracottaText": "#835846"
  },

  "retreat": {
    "place": "Lanzarote",
    "datesLabel": "5–10 November 2026",
    "nights": "Five nights",
    "priceLabel": "£1,350 per person",
    "flightsNote": "Flights not included",
    "arrivalNote": "Villa access from 16:00 on Thursday 5 November.",
    "locationNote": "A villa in northern Lanzarote, close to the sea and natural pools.",
    "roomsNote": "For directions and room sharing details, just ask Ricard.",
    "availabilityPaymentNote": "Ask Ricard about current availability and payment arrangements.",
    "freeTimeNote": "Free time to rest or explore at your own pace."
  },

  "contact": {
    "heading": "Ask Ricard about joining",
    "intro": "Thinking of joining us? Message Ricard to ask about availability, rooms or anything you'd like to know.",
    "ctaLabel": "Message Ricard on Instagram",
    "instagramUrl": "https://www.instagram.com/ricardchillonpt/",
    "instagramHandle": "@ricardchillonpt",
    // Leave formEndpoint empty until a real form service (e.g. a Formspree URL) is set up.
    // While it is empty, the enquiry form stays hidden and only the Instagram button shows.
    "formEndpoint": "",
    "formMethod": "POST"
  },

  "chef": {
    "instagramUrl": "https://www.instagram.com/maurosiepechef/",
    "instagramHandle": "@maurosiepechef"
  },

  "futureTeaser": "More retreats ahead — Crete, April 2027",

  "footer": {
    "line": "Hosted by Ricard Chillon · Lanzarote",
    "previewLabel": "Website preview"
  },

  "images": {
    "hero": {
      "webp": "assets/images/hero-room-sea.webp",
      "jpg": "assets/images/hero-room-sea.jpg",
      "width": 464,
      "height": 620,
      "alt": "A bright room at the villa, with two chairs by sheer curtains and glass doors opening onto a view of the sea",
      "caption": "Sea view from one of the villa's rooms"
    },
    // The first gallery image sits beside the villa text; "layout" can be "feature", "tall" or "wide".
    "gallery": [
      {
        "webp": "assets/images/yoga-sea-view.webp",
        "jpg": "assets/images/yoga-sea-view.jpg",
        "width": 464, "height": 600,
        "alt": "The yoga studio: a single mat on a pale wooden floor in front of wide glass doors, with the sea beyond",
        "caption": "The yoga studio, looking out to the sea",
        "layout": "feature"
      },
      {
        "webp": "assets/images/living-sea-view.webp",
        "jpg": "assets/images/living-sea-view.jpg",
        "width": 464, "height": 832,
        "alt": "Living and dining area with a wooden table and chairs, opening onto a terrace with the sea beyond",
        "caption": "Living and dining space, open to the sea",
        "layout": "tall"
      },
      {
        "webp": "assets/images/communal-lounge.webp",
        "jpg": "assets/images/communal-lounge.jpg",
        "width": 464, "height": 832,
        "alt": "Communal lounge with soft seating, hanging plants and woven pendant lights",
        "caption": "The communal lounge",
        "layout": "tall"
      },
      {
        "webp": "assets/images/villa-entrance.webp",
        "jpg": "assets/images/villa-entrance.jpg",
        "width": 464, "height": 832,
        "alt": "Villa entrance through open wooden doors into a bright hallway",
        "caption": "Arriving at the villa",
        "layout": "tall"
      },
      {
        "webp": "assets/images/yoga-studio.webp",
        "jpg": "assets/images/yoga-studio.jpg",
        "width": 1200, "height": 1600,
        "alt": "Woven baskets of rolled yoga mats in the studio, beside a glass door looking out towards the coast",
        "caption": "Mats ready in the studio",
        "layout": "wide"
      },
      {
        "webp": "assets/images/guest-bedroom.webp",
        "jpg": "assets/images/guest-bedroom.jpg",
        "width": 576, "height": 1024,
        "alt": "A bedroom with a wooden headboard, white linen and a built-in wardrobe",
        "caption": "One of the bedrooms",
        "layout": "tall"
      }
    ],
    // Optional: add a real, approved photo later, e.g. {"jpg": "assets/images/ricard.jpg", "alt": "Ricard Chillon"}.
    // Leave as null and the section stays text-led (no empty photo box is shown).
    "host": null,
    "chef": null
  }
};
