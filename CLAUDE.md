# CLAUDE.md

Guidance for AI agents in this repo. Read it fully before you change anything.

## Project

A personal portfolio site for one author, Md Erfanul Islam Bhuiyan. It is a
single-page React app, built to static files and deployed to GitHub Pages under
the base path `/portfolio-ai/`. No backend, no database, no auth. All shown
content is hardcoded in the source.

Stack: React 19, Vite 8, TypeScript 6, Tailwind CSS 4, react-router-dom 7, and
the EmailJS browser SDK for the contact form. Package manager is npm; the project
is ESM, so every config file uses import and export.

## Commands

- `npm run dev` starts the Vite dev server with base `/`.
- `npm run build` runs `tsc -b` then `vite build`; it type-checks and bundles.
- `npm run lint` runs ESLint; it must pass with zero errors.
- `npm run preview` serves the built output for a local check.
- `npm run deploy` builds first, then publishes `dist` with gh-pages.

## Layout of the code

All app code is in `src`: `components` (split into `layout`, `sections`, and
`ui`), `context`, `hooks`, `pages`, plus `App.tsx`, `main.tsx`, and `index.css`.
Static files and the Pages redirect helper sit in `public`.

## Architecture

- `App.tsx` runs the router. Its base name comes from the Vite config: it is
  `/portfolio-ai/` in production and `/` in development.
- Routes are home to Hero, then experience, education, projects, skills, and
  contact. Every route is wrapped in the shared `Layout`.
- Each file in `pages` is a thin wrapper that renders its section. Put real
  markup and content in the section, not the page.
- `Layout` renders the Header, a scrollable main area, the page transition, the
  side navigation, and the Footer. It owns keyboard and swipe navigation.
- The theme context toggles light and dark by adding a `dark` class to the root
  element and saving the choice to local storage.
- The navigation context derives the current section from the route during
  render. Do not add an effect plus state to track it again.
- Users move between sections with arrow keys, swipe, side arrows, and progress
  dots. A timed fade plays between routes.

## Conventions

- Components are plain functions with a default export. The file name is
  PascalCase and matches the component name.
- Props get a local interface. Strict mode is on: no `any`, no unused names.
- All styling is Tailwind utility classes. Dark styles use the `dark:` prefix;
  that variant is declared once in `index.css`.
- Tailwind 4 is CSS first: no JS Tailwind config and no PostCSS config. If you
  need theme tokens, add them in `index.css`. Do not bring back a JS config.
- Content data lives as arrays and objects inside each section component. Those
  arrays are the single source of truth; there are no data files. Edit there.
- The contact form sends mail with the EmailJS SDK. Its service, template, and
  key values live in the contact section; treat them as config.
- Match the style and naming around you. Keep each file focused on one job.

## Adding or editing a section

Keep all four wiring points in step when you add a section:

1. Add an entry with id, name, and path to the sections array in the navigation
   context; the array order sets the navigation order.
2. Add the matching route in `App.tsx`.
3. Create the section component in `components/sections`.
4. Create the thin page wrapper in `pages` that renders it.

Header links, side arrows, progress dots, and keyboard and swipe navigation all
read that one sections array, so update the array, not each widget.

## GitHub Pages notes

- The production base path is `/portfolio-ai/`. Never hardcode an absolute asset
  path; read the Vite base URL value instead.
- The index page and `public/404.html` hold the redirect helper that makes deep
  links work on Pages. Leave that script in place.
- Asset inlining is off on purpose, so assets stay as separate files.
- Analytics is a Google Tag Manager container in the index page.

## Rules

Behavior:

- Brainstorm a simpler or better approach before you build, even when the user
  asked otherwise. State the trade-off and at least one risk.
- Call out assumptions. When anything is unclear, ask first; never decide quietly.
- Flag any change to routing, the Pages redirect helper, the SEO and meta tags,
  or the analytics tag before you make it.

Data you can trust:

- Never invent or change personal facts: dates, grades, awards, titles, email,
  phone, links, or the resume link. The author is the only source.
- The section arrays are the single source of truth for content.
- When you touch content, flag stale or clashing data. For example, the README
  email differs from the contact section, and the README links a removed license.
- Before you rely on an outside link or the resume link, check it still opens.

Code hygiene:

- Before you call work done, both `npm run build` and `npm run lint` must be
  green.
- Lint must stay at zero errors. Four warnings are known and accepted; do not let
  that count grow.
- Prefer deriving state during render over an effect that sets state, which the
  hooks rules flag. Use a small commented disable only for a real timed animation.
- There is no test suite. Verify by build, by lint, and by a quick visual check
  in the dev server, in both light and dark themes.
- Do not change content or refactor beyond what the task needs.

Dependencies:

- Check the npm registry for current versions before you add or upgrade; do not
  trust memory for version numbers.
- For any migration, read the official or Context7 docs instead of guessing.
- Upgrade major versions one at a time; verify each with build, lint, and a
  visual check.
- Add a dependency only when there is no reasonable way to do it in the repo.

Git:

- Branch off `main`; do not commit straight to it.
- Keep commits small and focused, with clear messages.
- Commit, push, or deploy only when the user asks.
- Flag breaking changes explicitly in the message.
