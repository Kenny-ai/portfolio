# Kenny Soyoye — Software Developer

A responsive portfolio built with **Next.js App Router, React, TypeScript, and Tailwind CSS v4**. Includes the original illustrated hero, four live project previews, accessible project dialogs, an about section, and LinkedIn contact.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173.

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
- `components/project-grid.tsx`: project cards and the client-side native dialog interaction.
- `components/developer-art.tsx`: original workspace illustration.
- `components/wordmark.tsx`: shared identity mark.
- `lib/portfolio.ts`: typed identity, project descriptions, links, tags, and screenshot paths.
- `public/assets/`: screenshots captured from the live project homepages.

Edit `lib/portfolio.ts` to update projects and social links. Tailwind utilities control spacing, responsive layout, colors, typography, and interaction states; custom CSS is limited to the original illustration and shared foundations. The native project dialog supports keyboard dismissal, focus restoration, and backdrop dismissal. Images use Next.js image optimization and responsive sizes.

Featured projects are AfternoonPrep, BirthdayBuz, Inawo, and Life of the Party. Descriptions summarize their public pages; no technology stacks, metrics, or specific contributions have been assumed. Add individual contributions and engineering decisions to develop fuller case studies.

Contact points to LinkedIn. The name Kenny Soyoye was inferred from the supplied LinkedIn URL. Typography uses Google Fonts with system fallbacks. Reduced-motion preferences are respected.

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
