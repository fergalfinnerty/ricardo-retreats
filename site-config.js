/* Ricardo Retreats — single editable config.
   Change brand, dates, price, colours, contact and form endpoint here. */
window.SITE = {
  brandName: "Ricardo Retreats",
  hostName: "Ricard Chillon",
  monogramText: "RR",
  playfulLine: "Truly the RR of retreats.",
  tagline: "A little more space to breathe.",
  siteUrl: "https://fergalfinnerty.github.io/ricardo-retreats/",
  noIndex: true,

  colours: {
    ivory: "#f6f2e9",
    seaGreen: "#345a48",
    charcoal: "#273d35",
    sand: "#e8e2d5",
    terracotta: "#956451"
  },

  retreat: {
    place: "Lanzarote",
    regionNote: "Northern Lanzarote, close to the sea and natural pools",
    datesLabel: "5–10 November 2026",
    nights: "Five nights",
    priceLabel: "£1,350 per person",
    flightsNote: "Flights not included",
    arrivalNote: "Villa access from 16:00 on Thursday 5 November",
    roomsNote: "Five rooms with two beds each (as described in the retreat promotion)",
    availabilityNote: "Ask about current availability",
    paymentNote: "A £500 deposit was announced earlier in the year, with the balance originally due 5 October. That schedule has passed — please ask Ricard about current late-booking and payment arrangements."
  },

  contact: {
    instagramUrl: "https://www.instagram.com/ricardchillonpt/",
    instagramHandle: "@ricardchillonpt",
    chefInstagramUrl: "https://www.instagram.com/maurosiepechef/",
    chefInstagramHandle: "@maurosiepechef",
    /* Formspree-style endpoint. Leave empty until configured — form will not fake success. */
    formEndpoint: "",
    formMethod: "POST"
  },

  futureTeaser: "More retreats ahead — Crete, April 2027",

  images: {
    hero: {
      webp: "assets/images/yoga-studio.webp",
      jpg: "assets/images/yoga-studio.jpg",
      alt: "Yoga studio with baskets of rolled mats beside a glass door looking out to the coast"
    },
    gallery: [
      {
        webp: "assets/images/yoga-studio.webp",
        jpg: "assets/images/yoga-studio.jpg",
        alt: "Yoga studio: woven baskets of rolled mats beside a glass door with a coastal view beyond",
        caption: "Yoga space with sea view"
      },
      {
        webp: "assets/images/villa-entrance.webp",
        jpg: "assets/images/villa-entrance.jpg",
        alt: "Villa entrance through open wooden doors into a bright communal hallway",
        caption: "Villa entrance"
      },
      {
        webp: "assets/images/communal-lounge.webp",
        jpg: "assets/images/communal-lounge.jpg",
        alt: "Communal lounge with soft seating, plants and woven pendant lights",
        caption: "Communal lounge"
      },
      {
        webp: "assets/images/living-sea-view.webp",
        jpg: "assets/images/living-sea-view.jpg",
        alt: "Living and dining area opening onto a terrace with the sea beyond",
        caption: "Living space & sea"
      },
      {
        webp: "assets/images/guest-bedroom.webp",
        jpg: "assets/images/guest-bedroom.jpg",
        alt: "Guest bedroom with wooden headboard, white linens and built-in wardrobe",
        caption: "Guest bedroom"
      },
      {
        webp: "assets/images/room-sea-view.webp",
        jpg: "assets/images/room-sea-view.jpg",
        alt: "Quiet room with a round table and glass doors opening to a balcony over the sea",
        caption: "Room with sea view"
      }
    ],
    hostPlaceholder: true,
    chefPlaceholder: true
  }
};
