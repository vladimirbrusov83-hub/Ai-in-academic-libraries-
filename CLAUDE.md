# AI for Academic Libraries — CLAUDE.md

## Project overview

Next.js 14 (App Router) curriculum portal built by Yulia Brusova — a library associate at St. Louis Community College and MLIS student at Valdosta State University. The site delivers an ACRL AI Competencies-aligned curriculum for academic library professionals across three levels.

Live site: https://ai-in-academic-libraries.vercel.app  
Local dev: `npm run dev` in this directory

## Stack

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom color tokens (see `tailwind.config.ts`)
- **No database** — all content lives in `content/modules.ts`
- **No auth** — fully public

## Directory structure

```
app/                    # Next.js App Router pages
  about/page.tsx        # About Yulia / site mission
  curriculum/page.tsx   # Full module index
  level/[slug]/         # Level landing pages (foundations, applied, advanced)
  module/[slug]/        # Individual module pages
  newsletter/           # Email capture
  resources/            # External links / references
  layout.tsx            # Root layout with Nav and Footer
components/
  nav.tsx
  footer.tsx
  module-card.tsx
  badges.tsx
  email-capture.tsx
content/
  modules.ts            # Single source of truth for all curriculum content
lib/
  types.ts              # TypeScript types for Module, Level, Audience, etc.
```

## Content model

All curriculum data is in `content/modules.ts`. Each `Module` object has:

- `id`, `slug`, `title`, `level`, `audience`, `status`
- `acrlCompetencies` — maps to ACRL competency categories (`ethics`, `knowledge`, `analysis`, `application`)
- `acrlSubCompetencies` — specific sub-competency codes (e.g. `"2.1"`, `"3.1"`)
- `topics` — bullet list shown on the module card
- `objectives` — learning objectives
- `content` — optional rich content (`intro`, `sections[]`, `practitionerNote`, `summary[]`)
- `relatedModules` — slugs of related modules
- `isGap` — marks a planned module not yet written

Status values: `"published"` | `"coming-soon"`

## Curriculum levels

| Level | Tailwind token | Description |
|-------|---------------|-------------|
| `foundations` | `forest` (#0F6E56) | Level 1 — conceptual foundations |
| `applied` | `navy` (#185FA5) | Level 2 — practical workflows |
| `advanced` | `amber` (#854F0B) | Level 3 — automation, vibe coding, agentic AI |

## Writing voice

Content is written in Yulia's practitioner voice — first-person, academic but accessible, honest about AI limitations. The phrase "It is evident that" and formal hedging are intentional stylistic choices. Do not flatten this into generic AI writing. Preserve the practitioner perspective when editing module content.

## Key conventions

- All module content edits go in `content/modules.ts` — never duplicate data elsewhere
- Page metadata (`title`, `description`) lives in each `page.tsx` file via `export const metadata`
- Color tokens come from `tailwind.config.ts` — use `forest`, `navy`, `amber` classes, not raw hex
- `SITE_URL` is read from `process.env.NEXT_PUBLIC_SITE_URL` with fallback to the Vercel URL
- No comments needed — types and naming are self-documenting

## Common tasks

**Add a new module:** Add an entry to `content/modules.ts`. Set `status: "coming-soon"` and `content: undefined` until content is written. Set `isGap: false` once the entry is intentional.

**Edit About page:** `app/about/page.tsx` — also update the `metadata.description` to stay in sync.

**Add a resource:** `app/resources/page.tsx` (static list, no data file).

**Run locally:**
```bash
npm run dev     # http://localhost:3000
npm run build   # verify no type errors before pushing
```
