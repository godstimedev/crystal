# Crystal Kizor: landing page

A single-page site for the Crystal Kizor personal brand, built for the Studio COKA Web Developer assessment (Part 1).

## The idea: designing at every scale

Crystal's work spans seven brands and initiatives that could easily read as a list of unrelated businesses. The page ties them together with an idea from her own discipline: architects work at every scale, from a chair to a city.

Each brand becomes a chapter at the scale it works on:

| Chapter | Scale | Brand |
|---|---|---|
| 01 | Object | ELEvated: furniture and product design |
| 02 | Building | Studio COKA: architecture, interiors, construction |
| 03 | Profession | The Effective Architect (TEA): education and media for architects |
| 04 | City | Speaking, research and writing |
| 05 | Generation | AKO Alliance and Alive and Free: children and young people |

Studio COKA gets the most space because it holds the only built proof: real photographs of a completed home, plus two sets of renders. ELEvated and chapter 05 are typographic on purpose, so there are no empty image boxes for brands without photography yet.

## Routing visitors

- **Early:** a "Jump to" row in the hero for visitors who already know what they want.
- **In each chapter:** one clear call to action at the point where interest forms.
- **At the end:** "Where would you like to start?", a table that matches seven kinds of visitor to one destination each.
- **Throughout:** a scale index (side rail on desktop, sticky bar on mobile) to move between chapters.

## Structure

```
app/            layout (fonts, metadata), page (section order), globals.css (theme tokens, motion)
components/     one component per section, plus small shared pieces (ChapterHeader, CtaLink, Placeholder)
content/site.ts all copy, brands, chapters, images and routing rows, typed
public/images/  photography and renders, imported statically
```

To change copy, links or the routing table, edit `content/site.ts`. No component needs to change.

## Technical notes

- **Next.js 16 (App Router), TypeScript, Tailwind CSS v4.** The page is fully static and prerendered at build time.
- **Images:** every image goes through `next/image`, with `sizes` matched to its grid, static imports (so no layout shift) and blur placeholders. The two full-bleed images use quality 90; everything else uses 75.
- **Fonts:** Italiana (display, echoing the wordmark), Cormorant Garamond (editorial serif) and Jost (labels and body, echoing the tracked horizontal logo), all loaded with `next/font`.
- **Motion:** CSS only, with no animation library and no client JavaScript. The hero settles into place, and chapters reveal with scroll-linked CSS animations where the browser supports them. Everything is off under `prefers-reduced-motion`.
- **SEO and sharing:** title, description, canonical URL, Open Graph and X card tags with a 1200×630 share image, schema.org `Person` data, `robots.txt` and `sitemap.xml`. Icons and the share image use Crystal's own CK monogram and wordmark. Absolute URLs come from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, so no domain is hard-coded.
- **Accessibility:** a skip link, labelled landmarks, one `h1` and an ordered heading outline, alt text on every image, and visible focus outlines on light and dark bands. The colour pairs were checked for WCAG AA. Two terracotta values are used so small text passes on both the cream and espresso bands.

## Placeholders

The following are clearly labelled on the page, and marked `Placeholder` in `content/site.ts`:

- External links for every brand, social profile, speaking enquiries and contact
- Crystal's short biography and selected recognition (awards, publications, features)
- Enquiry email: set `contactEmail` in `content/site.ts` and the project, speaking and contact buttons become direct emails with the subject filled in
- The latest TEA episode or programme
- Writing, research and media pieces
- Contact email

No facts, clients, quotes or statistics have been invented.

## Running locally

```bash
npm install
npm run dev               # http://localhost:3000
npm run build && npm start  # production build
```
