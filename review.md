# Review: Ai-in-academic-libraries-

Solid Next.js 14 portal with clean structure. Below are the meaningful improvements I'd suggest, grouped by priority.

## High priority

**1. Formspree endpoint is a placeholder — email capture is broken in production**
`components/email-capture.tsx:9` has `https://formspree.io/f/YOUR_FORM_ID`. Every submission will fail and silently fall through to a `mailto:subscribe@example.com` (also a placeholder). Either wire it to a real endpoint, move to Supabase as the TODO suggests, or hide the form until it works. Right now the homepage's primary conversion mechanism doesn't work.

**2. Repo name has a trailing hyphen**
`Ai-in-academic-libraries-` — looks like a typo. Rename on GitHub; the redirect is automatic.

**3. Missing Next.js metadata essentials**
`app/layout.tsx` and `app/page.tsx` define `title`/`description` but no `metadataBase`, OpenGraph, Twitter cards, or favicon set. For a portal you want shared, this hurts link previews. Add `metadataBase: new URL(...)` plus an `openGraph` block in the root layout.

**4. No `sitemap.ts` or `robots.ts`**
Trivial in App Router (`app/sitemap.ts` returning module URLs from `modules`). Big SEO win since the site is content-heavy and aimed at search-driven discovery.

**5. Renaming `Ai-in-academic-libraries-` repo aside — the package name in `package.json` is `ai-for-academic-libraries` but the repo name differs.** Pick one brand and align everything (README live link, repo, package name).

## Medium priority

**6. `content/modules.ts` is 2,014 lines in one file**
That's a maintenance and PR-diff nightmare. Split into `content/modules/01-what-is-ai.ts`, etc., and re-export from an index. Also makes hot-reload faster during edits.

**7. Move long-form content out of TypeScript**
Module bodies are huge string literals — escaping, no markdown rendering, hard to write/edit. Consider MDX (`content/modules/*.mdx`) with frontmatter, then keep `lib/types.ts` for the metadata. You get headings, lists, code blocks for free instead of the hand-rolled `renderBody()` in `app/module/[slug]/page.tsx:37`.

**8. `renderBody()` is fragile**
It splits on `\n\n` and `\n- ` — any prose containing those literally will misrender. No support for headings, links, emphasis, code, or images inside module bodies. MDX or `react-markdown` solves this.

**9. Repeated brand colors as inline styles**
`#0F6E56`, `#854F0B`, `#185FA5` appear inline across many files. Move to `tailwind.config.ts` as custom colors (`brand.foundations`, `brand.advanced`, etc.) so you can do `bg-brand-foundations` and change them in one place.

**10. `audiencePaths` has unused fields**
`app/page.tsx:13` declares `modules: ["01", "02", ...]` per path but the array is never used. Dead code. Same with the `levelMeta` import — verify it's actually used.

**11. No analytics / no Vercel Analytics**
For a learning portal, you want to know which modules get read. Drop in `@vercel/analytics` (one-line install) or Plausible.

**12. No 404 page customization**
Add `app/not-found.tsx` with the same nav/footer and a "browse the curriculum" CTA.

## Lower priority / polish

**13. `lib/types.ts` defines `Audience = "practicing" | "digital" | "both"` but the email form uses the literal `""` as a fourth state.** Make the form state `Audience | ""` explicitly to avoid drift.

**14. Hard-coded `mod.id < 16` and `mod.id > 1`** in `app/module/[slug]/page.tsx:263-279`. Replace with `modules.length` derived constants so adding/removing modules doesn't break navigation.

**15. `levelMeta` and `acrlCompetencyMeta` should also be split out** of `content/modules.ts` into `content/meta.ts` so the content file is purely module entries.

**16. No tests, no CI**
Even a single Playwright smoke test ("homepage loads, module page renders") plus a GitHub Actions workflow running `npm run build` on PR catches a lot. The build is the test for a content site.

**17. `next.config.mjs` is empty.** Add at minimum: `reactStrictMode: true`, and consider `images` config if you'll add screenshots. Also worth adding `output: 'export'` consideration — this is fully static content, so you could ship to a CDN with zero serverless functions.

**18. Accessibility nits**
- The animated green dot on the homepage (`animate-pulse`) — fine, but the badge it lives in has decent contrast. Run Lighthouse and confirm.
- Several `<svg>` icons are inline; ensure all decorative ones have `aria-hidden="true"` (most do — verify in `components/`).

**19. README claims "verified May 2026" for the "no other library portal teaches vibe coding" claim** — bold, hard to defend, and ages badly. Soften to "as of writing" or link to the survey methodology.

**20. Two large markdown files at the root** (`CURRICULUM_CHANGES.md` 14KB, `CONTENT_GUIDE.md` 6.6KB) — fine to keep, but consider a `/docs` folder so the root stays scannable.

## What's working well

- Clean folder structure, sensible separation of `app` / `components` / `content` / `lib`.
- Real TypeScript discipline — `strict: true`, typed module schema.
- Generous use of `generateStaticParams` and `generateMetadata` per module.
- Good information design: ACRL alignment, audience paths, level colors, related-module navigation.
- Honest practitioner voice — matches the "from my library" sidebar pattern well.

## Suggested order of attack

1. Fix the email form (or hide it).
2. Add `sitemap.ts`, `robots.ts`, OG metadata, favicon.
3. Rename repo, align package/README/URL branding.
4. Split `content/modules.ts` and migrate bodies to MDX.
5. Move colors to Tailwind theme; delete dead `audiencePaths.modules` field.
6. Add Vercel Analytics + a single build-smoke CI job.
