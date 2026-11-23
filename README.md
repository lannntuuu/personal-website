# Alex Morgan Photography

Personal website for photographer Alex Morgan. Built from the shadcn Next.js template using preset `b5rR41Mtnc`.

## Run locally

```bash
cd next-app
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Checks

```bash
cd next-app
npm run lint
npm run typecheck
npm run build
```

## Placeholder photos

All photographs in `next-app/public/images/` are placeholder images. Replace these files with the photographer's own work when it is available:

- `hero-portrait.jpg`: hero portrait.
- `work-coast.jpg`: travel selection.
- `work-portrait.jpg`: portrait selection.
- `work-city.jpg`: editorial selection.
- `work-still.jpg`: still life selection.
- `about-camera.jpg`: introduction detail.

The same list is available on the site in the footer under "Placeholder image replacements".

## Values to confirm before launch

These are sample values hardcoded in `next-app/lib/site.ts`, not real business facts. Confirm and update them before going live:

- `PRICING`: package names, prices ($280 / $950 / $700) and delivery promises (image counts, turnaround times).
- `SITE.basedIn`: the photographer's base city, shown in the introduction.
- `SITE.name` and `SITE.email`: identity and contact details.

## Deploy

Set `NEXT_PUBLIC_SITE_URL` to the real deployed domain so social share previews point at the correct OpenGraph image (see `next-app/.env.example`). OpenGraph falls back to `https://example.com` until this is set.

## Adding UI components

```bash
cd next-app
npx shadcn@latest add button
```
