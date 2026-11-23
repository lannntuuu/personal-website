export const SITE = {
  name: "Alex Morgan",
  email: "hello@example.com",
  location: "Available worldwide",
  basedIn: "Ho Chi Minh City",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
} as const

export const DESCRIPTION =
  "Portrait, editorial and travel photography by Alex Morgan, made for people who want photographs that feel like themselves."

/**
 * Prices and delivery promises below are placeholders for the photographer
 * to confirm before launch. Treat every price and number as sample data.
 */
export const PRICING = [
  {
    name: "Portrait session",
    price: "$280",
    detail: "One person, one location, 60 minutes.",
    includes: ["15 edited images", "Private online gallery", "Print release"],
    featured: false,
  },
  {
    name: "Editorial day",
    price: "$950",
    detail: "A full day on a planned shoot.",
    includes: [
      "Up to three locations",
      "40 edited images",
      "Direction and shot list",
    ],
    featured: true,
  },
  {
    name: "Small event",
    price: "$700",
    detail: "Coverage for up to four hours.",
    includes: ["200 edited images", "Online gallery", "24 hour turnaround"],
    featured: false,
  },
] as const

export const GALLERY = [
  {
    src: "/images/work-coast.jpg",
    alt: "Coastline in soft morning light",
    title: "Northern Coast",
    category: "Travel",
    size: "tall",
  },
  {
    src: "/images/work-portrait.jpg",
    alt: "Portrait beside a bright window",
    title: "Window Light",
    category: "Portrait",
    size: "tall",
  },
  {
    src: "/images/work-city.jpg",
    alt: "City street after dark",
    title: "After Hours",
    category: "Editorial",
    size: "wide",
  },
  {
    src: "/images/work-still.jpg",
    alt: "Still life with flowers",
    title: "Quiet Objects",
    category: "Still Life",
    size: "tall",
  },
] as const

export const REPLACE_IMAGES = [
  { path: "/images/hero-portrait.jpg", use: "Hero portrait" },
  { path: "/images/work-coast.jpg", use: "Travel work" },
  { path: "/images/work-portrait.jpg", use: "Portrait work" },
  { path: "/images/work-city.jpg", use: "Editorial work" },
  { path: "/images/work-still.jpg", use: "Still life work" },
  { path: "/images/about-camera.jpg", use: "About section detail" },
] as const
