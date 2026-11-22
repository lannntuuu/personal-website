import Image from "next/image"
import {
  ArrowRight01Icon,
  Mail01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { GALLERY, REPLACE_IMAGES, SITE } from "@/lib/site"

function Wordmark() {
  return (
    <a
      href="#top"
      className="font-heading text-base font-semibold tracking-tight text-foreground"
    >
      {SITE.name}
    </a>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Wordmark />
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
        >
          <a className="transition-colors hover:text-foreground" href="#about">
            Introduction
          </a>
          <a className="transition-colors hover:text-foreground" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-foreground" href="#pricing">
            Pricing
          </a>
        </nav>
        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href={"mailto:" + SITE.email}>Email me</a>
        </Button>
        <details className="relative md:hidden">
          <summary
            aria-label="Open navigation"
            className="flex size-9 list-none items-center justify-center rounded-none border border-border"
          >
            <HugeiconsIcon icon={Menu01Icon} size={20} strokeWidth={1.5} />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-11 w-48 border border-border bg-background p-4 shadow-sm"
          >
            <a className="block py-2 text-sm" href="#about">
              Introduction
            </a>
            <a className="block py-2 text-sm" href="#work">
              Work
            </a>
            <a className="block py-2 text-sm" href="#pricing">
              Pricing
            </a>
            <a className="block py-2 text-sm" href={"mailto:" + SITE.email}>
              Email me
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 md:min-h-[calc(100dvh-4rem)] md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:pb-16 md:pt-10 lg:px-12"
    >
      <div className="max-w-2xl">
        <h1 className="max-w-xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-5xl">
          Photographs that keep the feeling of the moment.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I am Tu Lan, a photographer working across portraits, editorial
          stories and places worth remembering.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href="#work">
              View work
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.5} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={"mailto:" + SITE.email}>Email me</a>
          </Button>
        </div>
      </div>
      <div className="relative w-full">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-muted md:ml-auto">
          <Image
            src="/images/hero-portrait.jpg"
            alt="Portrait placeholder for Tu Lan"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {SITE.location}
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-muted/30 scroll-mt-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-28 lg:px-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
          <Image
            src="/images/about-camera.jpg"
            alt="Camera detail placeholder"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Introduction
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground">
            I photograph people in a way that leaves room for who they are.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            My work moves between portraiture, editorial commissions and travel
            stories. I use available light, simple direction and a calm pace so
            the result feels honest. Commissions can be shaped around a single
            portrait or a full set of images for print and online use.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Based in Ho Chi Minh City, available for commissions elsewhere.
          </p>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A short set of images across portrait, editorial and travel
            commissions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {GALLERY.map((photo, index) => (
            <figure
              key={photo.src}
              className={
                photo.size === "wide" && index === 2
                  ? "sm:col-span-2"
                  : undefined
              }
            >
              <div
                className={
                  "relative w-full overflow-hidden bg-muted " +
                  (photo.size === "wide" ? "aspect-[16/10]" : "aspect-[4/5]")
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    photo.size === "wide"
                      ? "(max-width: 640px) 100vw, 90vw"
                      : "(max-width: 640px) 100vw, 45vw"
                  }
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm">
                <span className="text-foreground">{photo.title}</span>
                <span className="text-muted-foreground">{photo.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const PRICING = [
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

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-border bg-muted/30 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Starting rates for common commissions. Every quote is confirmed in
            writing before the shoot date.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col border border-border bg-background p-6"
            >
              {plan.featured ? (
                <span className="mb-4 w-fit bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                  Most requested
                </span>
              ) : (
                <span className="mb-4 block h-[26px]" aria-hidden="true" />
              )}
              <h3 className="font-heading text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.detail}</p>
              <p className="mt-6 font-heading text-3xl font-semibold">
                {plan.price}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                size="sm"
                className="mt-8 w-full"
              >
                <a href={"mailto:" + SITE.email}>Ask about this</a>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Travel, permits and extra retouching are quoted separately.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="grid gap-8 border-y border-border py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a shoot in mind?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Tell me what you are making and where it will be seen. I will
              reply with availability and a clear quote.
            </p>
          </div>
          <a
            href={"mailto:" + SITE.email}
            className="group inline-flex w-fit items-center gap-3 font-heading text-xl font-semibold text-primary underline decoration-border underline-offset-8 transition-colors hover:decoration-primary md:ml-auto"
          >
            <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={1.5} />
            {SITE.email}
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={18}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="transition-colors hover:text-foreground" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-foreground" href="#pricing">
            Pricing
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href={"mailto:" + SITE.email}
          >
            Email
          </a>
        </div>
      </div>
      <details className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
        <summary className="cursor-pointer w-fit">
          Placeholder image replacements
        </summary>
        <ul className="mt-3 grid gap-1">
          {REPLACE_IMAGES.map((item) => (
            <li key={item.path}>
              <code>{item.path}</code> - {item.use}
            </li>
          ))}
        </ul>
      </details>
    </footer>
  )
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Work />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
