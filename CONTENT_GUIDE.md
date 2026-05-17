# Content Guide
# AI for Academic Libraries — For the Author

This guide tells you how to add, edit, and publish content on this site. No technical background needed — just follow the steps.

---

## Where content lives

Everything — all 16 modules, their text, objectives, topics, and metadata — lives in one file:

**`content/modules.ts`**

Open this file to edit any module. Each module is a block of information that starts with `{` and ends with `}`. They are numbered 1–16 in order.

---

## How to edit a published module

Find the module by its title in `content/modules.ts`. Each module has a `content` section that looks like this:

```
content: {
  intro: "The first paragraph — this is the opening voice paragraph.",
  sections: [
    {
      heading: "Section title here",
      body: `The text of this section goes here. 
      
      A new paragraph is created by leaving a blank line.
      
      - A bullet point
      - Another bullet point`
    },
    {
      heading: "Another section",
      body: `More text here.`
    },
  ],
  practitionerNote: "A short personal note that appears in the green box at the bottom."
}
```

**To edit:** Change the text between the backticks (`` ` ``) or quote marks. Save the file. The change will appear on the site after the next deploy.

---

## How to publish a coming-soon module

To change a Level 3 module from "coming soon" to published:

1. Open `content/modules.ts`
2. Find the module you want to publish
3. Change `status: "coming-soon"` to `status: "published"`
4. Add a `content` block (see the format above)

Here is the minimum content block you need:

```typescript
content: {
  intro: "Your opening paragraph. This is where your voice comes through.",
  sections: [
    {
      heading: "First section heading",
      body: `Text of the first section.`
    },
    {
      heading: "Second section heading", 
      body: `Text of the second section.`
    },
  ],
}
```

The `practitionerNote` field is optional — add it if you have a relevant personal example from your library work.

---

## Module fields reference

Each module has these fields. Most you will not need to change often:

| Field | What it is | Should you change it? |
|-------|------------|----------------------|
| `id` | Module number (1–16) | No |
| `slug` | URL path (e.g., `what-is-ai-for-librarians`) | No — changing breaks links |
| `title` | Module title | Yes, if needed |
| `level` | `"foundations"`, `"applied"`, or `"advanced"` | No |
| `audience` | `"practicing"`, `"digital"`, or `"both"` | Yes, if needed |
| `acrlCompetencies` | Which ACRL competency areas | Yes — use the research in CURRICULUM_CHANGES.md |
| `acrlSubCompetencies` | Specific sub-competency codes (e.g., `"2.1"`) | Yes — see CURRICULUM_CHANGES.md |
| `topics` | List of topics covered (shown on cards) | Yes |
| `objectives` | What learners will be able to do (5 bullet points) | Yes |
| `estimatedMinutes` | Time to complete | Yes |
| `status` | `"published"` or `"coming-soon"` | Yes — change to publish |
| `isGap` | True for Level 3 — shows ★ First in field badge | No |
| `description` | One-paragraph description (shown on cards and coming-soon pages) | Yes |
| `content` | The actual module text | Yes |
| `relatedModules` | Slugs of related modules shown at the bottom | Yes |

---

## Writing in practitioner voice

A few reminders for writing module content:

**Use first person where it's real.** "When I tried this at my reference desk..." is good. Don't use first person for things you haven't actually done.

**Connect every technique to a library workflow.** Abstract AI explanations are everywhere. What readers need is: here's how this applies at your reference desk / in your catalog / in your instruction session.

**Be honest about limitations.** "AI gets this wrong regularly — here's how to check" is more valuable than uncritical enthusiasm. The ACRL mindsets include skepticism alongside curiosity for a reason.

**Practical format that works:**
- Opening paragraph: a real situation or observation from your library
- 3–5 sections with clear headings
- Each section: specific, actionable, with examples
- Optional practitioner note at the end: one paragraph from your actual experience

**Length:** Level 1 modules: 30–40 minutes of reading (roughly 2,000–3,000 words). Level 2: 40–50 minutes. Level 3: 50–75 minutes.

---

## Formatting in the body text

The `body` field in each section uses plain text with a few formatting conventions:

**New paragraph:** Leave a blank line between paragraphs.

**Bullet list:** Start each line with `- `. Leave a blank line before the list.

Example:
```
Here is some text before the list.

- First item
- Second item  
- Third item
```

**Bold text:** The rendering currently processes paragraphs as plain text. For now, bold is handled in section headings. If you need emphasis, use clear sentence structure rather than markdown bold.

---

## Deploying changes

After editing `content/modules.ts` (or any other file):

1. Save the file
2. Run `npm run build` in the terminal to check for errors
3. If the build is clean, push to GitHub
4. Vercel will auto-deploy the changes

If you get a build error, the error message will tell you which file and line number has a problem. Common issues: missing closing backtick, missing comma between fields, unmatched quote marks.

---

## Adding a resource to the Resources page

Open `app/resources/page.tsx`. Find the `resourceSections` array. Each section has a `resources` array. Add a new resource object:

```typescript
{
  title: "Resource name",
  org: "Organization that publishes it",
  date: "Year or date, or null",
  url: "https://the-url.com",
  description: "One to three sentences about what this is and why it's worth including.",
  tag: "What kind of resource (Free, Essential, Follow, etc.)",
  tagColor: "#57534e",
  tagBg: "#f5f5f4",
}
```

---

## Questions

If something breaks or a change doesn't look right, the person who built this can look at it. The build output will usually point directly to the problem.
