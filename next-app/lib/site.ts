export const SITE = {
  name: "Tu Lan",
  email: "lannntuuu@gmail.com",
  location: "Available worldwide",
} as const

export const GALLERY = [
  {
    src: "/images/work-coast.jpg",
    alt: "Coastline in soft morning light",
    title: "Northern Coast",
    category: "Travel",
    width: 1600,
    height: 2000,
    size: "tall",
  },
  {
    src: "/images/work-portrait.jpg",
    alt: "Portrait beside a bright window",
    title: "Window Light",
    category: "Portrait",
    width: 1600,
    height: 2000,
    size: "tall",
  },
  {
    src: "/images/work-city.jpg",
    alt: "City street after dark",
    title: "After Hours",
    category: "Editorial",
    width: 2000,
    height: 1400,
    size: "wide",
  },
  {
    src: "/images/work-still.jpg",
    alt: "Still life with flowers",
    title: "Quiet Objects",
    category: "Still Life",
    width: 1600,
    height: 2000,
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
