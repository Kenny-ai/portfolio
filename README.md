# Kenny Soyoye — Software Developer

A responsive portfolio built with **Next.js App Router, React, TypeScript, and Tailwind CSS v4**. Includes the original illustrated hero, six live project previews, clickable project cards, detailed case-study pages, a background section, and email/LinkedIn contact.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5172 for the dev server. The production preview uses http://127.0.0.1:5173.

## Production and validation

```sh
npm run check
npm run build
npm start
```

`check` runs strict TypeScript validation. `build` generates the production Next.js app, including the statically rendered home page. `start` serves the production build on port 5173. Stop the dev server before running the production server.

## Project structure

- `app/page.tsx`: server-rendered portfolio page, responsive Tailwind layout, and sections.
- `app/layout.tsx`: root layout, page metadata, and social sharing metadata.
- `app/globals.css`: Tailwind theme, shared component utilities, and bespoke illustration geometry.
- `components/project-grid.tsx`: server-rendered project cards linking directly to their case studies.
- `components/developer-art.tsx`: original workspace illustration.
- `components/wordmark.tsx`: shared identity mark.
- `lib/portfolio.ts`: typed identity, project descriptions, links, tags, and screenshot paths.
- `public/assets/`: screenshots captured from the live project homepages.

Edit `lib/portfolio.ts` to update projects and social links. Tailwind utilities control spacing, responsive layout, colors, typography, and interaction states; custom CSS is limited to the original illustration and shared foundations. Each project card is a single keyboard-accessible link to its case study. Live project links are available on the case-study pages. Images use Next.js image optimization and responsive sizes.

Featured projects are AfternoonPrep, BirthdayBuz, Inawo, Life of the Party, CertChain, and Space Tourism. Roles, experience, and contributions were confirmed by Kenny. Per-project technologies are shown only where confirmed or documented: React Native for Inawo’s mobile app, and the repository-backed stack for CertChain.

Contact includes kennysoyoye07@gmail.com and LinkedIn. The production portfolio is https://kennyworks.vercel.app. Typography uses Google Fonts with system fallbacks. Reduced-motion preferences are respected.

Deploy the repository to a host supporting Next.js, using `npm run build` as the build command. No secrets or external application services are required.

## Appearance themes

The header offers Studio (default), Terminal, and Prismatic. Each changes semantic color tokens, typography, surfaces, button styles, project frames, and the hero illustration. The selected theme is stored under `portfolio-theme` in localStorage and applied before paint. Storage failure falls back safely; controls still work for the current visit. Choices sync across tabs.

- `components/theme-selector.tsx`: keyboard-accessible theme buttons, saved preference, and live selection announcement.
- `lib/themes.ts`: allowed themes and the pre-paint initialization script.
- `app/globals.css`: shared Tailwind tokens and theme-specific design treatments.

To extend a theme, update semantic tokens and scoped `[data-theme]` rules. Page content and navigation stay consistent across themes.

## Theme-specific copy

`lib/theme-copy.ts` contains the wording for each theme. Studio uses an editorial voice, Terminal emphasizes the development process, and Prismatic has a more expressive voice. Headlines, section descriptions, navigation labels, calls to action, and illustration captions adapt together. Project facts, capability descriptions, identity, and destinations remain shared.

`components/theme-copy.tsx` renders typed text and headline variants. CSS shows only the selected theme's copy, so saved wording and appearance stay in sync before hydration. Hidden variants use `display: none` and are excluded from the accessibility tree.

## Case studies and background

- `app/projects/[slug]/page.tsx` provides a statically generated, theme-aware case-study page for each project.
- `lib/case-studies.ts` contains confirmed project roles and contribution scope, product/engineering context, technology details where known, and outcomes without invented metrics.
- `lib/portfolio.ts` contains the public domain, contact email, confirmed skills, about five years of experience, and Inawo app-store links.
- Availability is an invitation to discuss timing; no start date or current capacity is asserted.

## Launch assets and public domain

The production URL means the public address people use to visit this portfolio after deployment. It is not the localhost preview or GitHub repository address.

The confirmed production origin, `https://kennyworks.vercel.app`, is the code default. No environment variable is required. `NEXT_PUBLIC_SITE_URL` can optionally override the origin; `.env.example` documents the production value. The homepage and all six case studies generate absolute canonical URLs and sitemap entries, and robots.txt advertises the sitemap. Social-image URLs use this same origin. Rebuild and redeploy after changing the domain.

- `app/favicon.ico`, `app/icon.svg`, and `app/apple-icon.png`: branded browser and home-screen icons.
- `app/opengraph-image.tsx` and `app/twitter-image.tsx`: generated 1200 × 630 sharing graphics.
- `app/robots.ts` and `app/sitemap.ts`: metadata routes.
- `lib/site.ts`: validates the public origin used across metadata.

The sharing image is generated locally at build time with Next.js ImageResponse, with no image-generation service or remote font dependency.

## CertChain

CertChain is a source-grounded technical case study with a captured live homepage preview and links to its repository and implementation files. It covers a Next.js/TypeScript application, Supabase-backed accounts and metadata, SHA-256 certificate hashes, Aptos testnet wallet transactions, a Move issuance/lookup contract, and PDF certificate export. Kenny confirmed sole ownership of CertChain, so the page credits the complete build to him. Technical details remain grounded in the repository. The blockchain integration targets Aptos testnet; no production adoption or measured business impact is claimed.

Its live site is https://certchain-blond.vercel.app/ and repository is https://github.com/Kenny-ai/CertChain. The source was inspected; contract tests and authenticated/wallet workflows were not run.

## Confirmed background and project roles

Kenny has about five years of experience shipping frontend, backend, API, and mobile products. His toolkit includes HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Python, MongoDB, SQL, REST, GraphQL, and React Native, with hands-on blockchain experience.

- Inawo: Lead Product Engineer; leads a product team of four, reviews PRs, and makes product decisions. Independently built the React Native mobile app, available on the Apple App Store and Google Play.
- BirthdayBuz: frontend developer.
- CertChain: sole developer across the application and blockchain integration.
- AfternoonPrep and Life of the Party: contributed selected parts of both frontend and backend.

These statements replace the original illustrative draft content. App-store listings confirm public availability; no download counts or performance improvements are inferred.

## Case-study presentation

Each detail page includes an ownership-led summary, three factual snapshot items, product brief, structured contributions, engineering context and priorities, delivery evidence, and a personal takeaway. Inawo highlights four-person team leadership and independent mobile delivery; CertChain includes a four-stage issuance/verification walkthrough. Shared-product contributions keep their confirmed scope, without assigning unverified features, metrics, or technologies.

The sticky sidebar provides role, focus areas, confirmed technologies, section navigation, and source references where available. It falls back to normal flow on short windows, and pages end with a link to the next project. All sections remain server-rendered and work with each appearance theme.

## Space Tourism

Space Tourism adds a sixth project at `/projects/space-tourism`, with a captured live homepage preview. Its case study covers the visible multi-page experience, destination and planet controls, crew navigation, technology selection, mobile navigation, and accessibility provisions. The live site was inspected; no unverified framework, performance metrics, or commercial outcomes are claimed. Live project: https://kb-space-tourism.vercel.app/.

### Readability updates

Body paragraphs use 14px text; supporting labels and controls use a larger 12–14px scale. Studio text tokens were adjusted so ink, muted, and accent text meet 4.5:1 against the solid content surfaces checked in all themes. This is a targeted check, not full WCAG conformance certification. Space Tourism uses a 1280×720 desktop capture rather than an enlarged mobile screenshot.
