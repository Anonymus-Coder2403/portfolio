# Verification bar for this repo

Before opening or merging a PR, all of the following must pass and output must be quoted:

1. `npm run build` — completes with no errors. Read every warning; deprecation notices from Next.js 16 are signal, not noise.
2. `npx tsc --noEmit` — no type errors.
3. `npm run dev` — start the server, load `/` and at least one `/projects/[slug]` route, and confirm they render. "It compiles" is not a substitute for "it serves".
4. Every internal link and anchor resolves. Every external link is one of the URLs in the session's `<facts>` section.
5. `git check-ignore -v node_modules .next` resolves — neither is committed.
6. No `TODO`, no placeholder text, no commented-out blocks in shipped files.

## Stack

- Next.js 16, React 19 — `params` in dynamic routes is `Promise<{slug: string}>`, must be awaited
- Tailwind v4 — configured via `@import 'tailwindcss'` in CSS and `postcss.config.mjs`, no `tailwind.config.js`
- MDX — requires `src/mdx-components.tsx`, `next.config.mjs` uses `createMDX`
- `motion/react` — import path for Framer Motion v12 in client components

## Content rules

`src/content/profile.ts` is the single source of truth for all personal data. No component hardcodes a name, title, URL, or figure.

`src/content/projects/*.mdx` — one file per project. Adding a project never means editing a component.

Every fact on the site is sourced from the verified `<facts>` section of the original build brief. The Saathi AI observability work is always described as the development environment — never as production — because production has no Opik/OTLP instrumentation.
