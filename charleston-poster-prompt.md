# Build prompt — Charleston Library Conference poster (30in × 20in)

Paste everything below the line into Fable 5.1. It is self-contained: all content,
data, colors, and print mechanics are supplied. Fable should not need to look
anything up or invent numbers.

---

You are building a print-accurate academic conference poster as **one self-contained
HTML file**. Output the complete file, nothing else. No commentary before or after
the code unless I ask for it.

## 1. Deliverable and hard constraints

- **One `.html` file.** All CSS inline in a single `<style>` block in `<head>`.
- **Zero external requests.** No Google Fonts, no CDN, no `<img src="http...">`,
  no `@import`. The only embedded binary is the QR data URI I give you in §8.
- **Physical size: exactly 30 inches wide × 20 inches tall, landscape.**
- The file must print to PDF at true physical scale from Chrome and from headless
  Chrome with no manual scaling.

## 2. Print CSS — these are requirements, not suggestions

Follow every line. These are the four things that break HTML posters.

```css
@page { size: 30in 20in; margin: 0; }

html, body {
  margin: 0;
  padding: 0;
  background: #FFFFFF;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.poster {
  width: 30in;
  height: 20in;
  overflow: hidden;
  box-sizing: border-box;
  padding: 1in;
  position: relative;
}
```

1. **`@page` alone does not constrain content.** You must also have the `.poster`
   root box fixed at `30in × 20in` with `overflow: hidden`.
2. **`print-color-adjust: exact` is mandatory** on `html, body`. Without it every
   colored panel and rule prints as white. This is the single most common failure.
3. **Units: `pt` for all type, `in` and `pt` for all layout.** Do **not** use `px`,
   `rem`, `em`, `vw`, `vh`, or percentage widths anywhere in the file. Mixed units
   are what destroy physical scale.
4. **Fonts: system stacks only.** Do not fall through to Times.
   - Body/serif: `Charter, "Bitstream Charter", Georgia, Cambria, "Times New Roman", serif`
   - Headings/sans: `"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif`
5. **Nothing may overflow 20in of height.** Budget each column and keep content
   inside it. After the code, print a two-line note stating the height budget you
   used per column and where you had slack.

## 3. Layout

- Full-width **title band** across the top, about 3in tall, ending in a 3pt rule.
- Below it, **4 columns**, each 6.6in wide, 0.5in gutters, inside the 1in margin.
- Reading flow: left → right, top → bottom. Sections do not span columns.
- Generous white space. No paragraph longer than 4 lines at 24pt. Prefer short
  chunks, bullets, and stat blocks over prose blocks.

**Column map**

| Col | Sections |
|-----|----------|
| 1 | Introduction & Background · The Problem |
| 2 | Methods · Figure 1 (curriculum arc) |
| 3 | Findings · Figure 2 (ACRL coverage grid) · Portal at a Glance stat strip |
| 4 | Discussion & Implications · Limitations · Conclusion · References · QR block |

## 4. Typography scale

| Element | Size |
|---|---|
| Poster title | 96pt bold, sans |
| Subtitle | 44pt, sans, medium |
| Author / affiliation line | 40pt, sans |
| Section headers | 40pt bold, sans, in the section's level color |
| Body text | 24pt serif, line-height 1.35 — **never smaller** |
| Bullets | 24pt serif |
| Big stat numerals | 72pt bold sans |
| Stat labels & figure captions | 20pt sans |
| References | 18pt serif (the only permitted exception below 20pt) |

## 5. Color palette

These are the live portal's own tokens, so the poster matches the site a visitor
lands on after scanning the QR. Level colors double as the poster's coding system.

| Role | Hex |
|---|---|
| Level 1 — Foundations (forest) | `#0F6E56` |
| Level 2 — Applied (navy) | `#185FA5` |
| Level 3 — Advanced (amber) | `#854F0B` |
| Body text | `#1C1917` |
| Secondary text | `#57534E` |
| Panel fill | `#F5F5F4` |
| Forest tint panel | `#E1F5EE` |
| Rules / borders | `#E7E5E4` |
| Ground | `#FFFFFF` |

Forest is the primary. Use white ground throughout; tinted panels only for stat
strips, the callout box, and figure backgrounds. No gradients, no drop shadows.

## 6. Content — use this text as written

### Title band

**Title:** From Framework to Skills: Turning the ACRL AI Competencies into a Free,
Practitioner-Built Curriculum

**Subtitle:** Building and mapping an 18-module open learning portal for academic
library workers

**Author:** Yulia Brusova
**Affiliation:** MLIS, Valdosta State University · Library Associate, St. Louis Community College

**Badge (small, forest-tinted pill, right side of the title band):**
Aligned with ACRL AI Competencies (2025) & ALA AI Guidance (2026)

---

### Column 1 — Introduction & Background

ACRL published the *AI Competencies for Academic Library Workers* in October 2025.
The framework names what library workers should know. It does not say how to learn it.

Existing AI training for librarians falls into three buckets, and each leaves a gap:

- **Vendor webinars** teach the vendor's product, not transferable judgment.
- **LIS coursework** moves on a semester cycle while the tools move on a quarterly one.
- **White papers and guidance documents** set policy direction but stop short of practice.

Meanwhile the need is documented. Clarivate's *Pulse of the Library 2024* reported
that a third of surveyed librarians had received no AI training at all.

**The Problem** *(set this as a callout box, forest-tinted panel, 26pt)*

A competency framework is not a curriculum. Someone has to convert sub-competencies
into modules a working librarian can finish between reference shifts — and keep them
current in a field where a module written today is partly wrong in nine months.

---

### Column 2 — Methods

**Design approach**

- Mapped each planned module to specific ACRL **sub-competency codes**, not just
  broad competency areas — the mapping is published on every module page.
- Cross-referenced ALA's *Guidance on the Use of Artificial Intelligence in Libraries*
  (2026) and its six core values: public good, intellectual freedom, privacy,
  sustainability, DEIA, and labor.
- Structured learning progression on the **4D Framework** (Delegation, Description,
  Discernment, Diligence) from Anthropic's AI Fluency course.
- Wrote every module in a single practitioner voice — first person, from a community
  college circulation desk, with an explicit statement in each section about where
  human judgment remains irreplaceable.

**Structure**

- Three levels: **Foundations → Applied → Advanced.**
- Two audience paths: **practicing librarian** (reference, instruction, research
  support) and **digital librarian** (metadata, systems, repositories).
- Each module carries topics, learning objectives, an APA reference list, and a
  visible **last-reviewed date** as a currency mechanism.
- Built as a static site with no login, no paywall, no email gate. Every module also
  downloadable as PDF.

**Figure 1 caption:** Three-level curriculum arc. 18 modules, 377 minutes (~6.3 hours)
of estimated reading time, color-coded by level.

---

### Column 3 — Findings

**The mapping covers 19 sub-competencies across all four ACRL competency areas.**

*Do not write "complete coverage" — write exactly the sentence above.*

| Competency area | Sub-competencies mapped |
|---|---|
| 1. Ethical Considerations | 1.1 · 1.2 · 1.3 · 1.4 · 1.5 |
| 2. Knowledge & Understanding | 2.1 · 2.2 · 2.3 · 2.4 · 2.5 |
| 3. Analysis & Evaluation | 3.1 · 3.2 · 3.3 · 3.4 |
| 4. Use & Application | 4.1 · 4.2 · 4.3 · 4.4 · 4.5 |

**The mapping surfaced what the framework does not reach.** Three modules exist
because sub-competency mapping exposed practice gaps the framework does not
address directly — and they are the ones academic library work runs on:

- **Module 11 — AI for collections & vendor evaluation.** How to read vendor AI
  claims, evaluate discovery-layer AI, and apply AI to license review and weeding.
- **Module 12 — Making the case to administration.** Cost, procurement, and who pays.
- **Module 13 — AI, labor & the library worker.** Job design, deskilling, and the
  labor value in ALA's guidance.

**Figure 2 caption:** Module-to-sub-competency coverage grid. Rows are the 19 ACRL
sub-competencies; columns are the 18 modules; cells are filled in the level color of
the covering module.

**Portal at a Glance** *(stat strip — 72pt numerals over 20pt labels, panel fill)*

| | |
|---|---|
| **18** | modules, all published |
| **377 min** | ~6.3 hours of curriculum |
| **~78,000** | words of original content |
| **19** | ACRL sub-competencies mapped |
| **~60** | APA references, 55 with live links |
| **138** | conferences in the professional development directory |
| **18** | downloadable module PDFs |
| **$0** | cost to the learner, no login, no email gate |

**Reach** *(smaller line under the stat strip, 22pt, secondary text)*
Readers in 30+ countries; 1,000+ visitors in the most recent month.
*Self-reported site analytics; not an independent audit.*

---

### Column 4 — Discussion & Implications

- **Sub-competency-level mapping is a usable bridge.** It gives a director something
  concrete to approve staff time against, and it survives contact with a tenure or
  PD committee in a way "we watched a webinar" does not.
- **The mapping is a diagnostic, not just a label.** Working through it at the
  sub-competency level is what exposed the collections, budget, and labor gaps.
- **Practitioner voice is the differentiator.** Support-staff and teaching-institution
  perspectives are underrepresented in library AI discourse, which skews R1 and vendor.
- **Currency has to be designed in.** Visible per-module review dates make the refresh
  obligation legible to the reader instead of hiding staleness.
- **Level 3 is the part no one else is shipping.** Workflow automation, agentic AI, and
  vibe coding for librarians have no competing curriculum in the library sector.

**Limitations** *(panel fill, 22pt)*

- No assessments or capstone yet — the curriculum cannot currently be pointed at as
  evidence of demonstrated competence.
- Review dates are recorded for 16 of 18 modules.
- Usage figures are self-reported site analytics.
- Single-author content; no external peer review of module accuracy to date.

**Conclusion**

A competency framework becomes useful the moment someone converts it into something a
librarian can finish. Sub-competency mapping did double duty here: it made the
curriculum defensible as professional development, and it revealed where the framework
stops short of academic library practice. The portal is free, open, and built to be
copied — the mapping method transfers to any library that wants to build its own.

**References** *(18pt, hanging indent, APA)*

1. Association of College and Research Libraries. (2025, October). *AI competencies for academic library workers.* American Library Association.
2. American Library Association. (2026). *Guidance on the use of artificial intelligence in libraries.*
3. American Library Association. (2021). *ALA code of ethics.*
4. Association of College and Research Libraries. (2016). *Framework for information literacy for higher education.* American Library Association.
5. Clarivate. (2024). *Pulse of the library 2024.* https://doi.org/10.14322/pulse.of.the.library.2024
6. Clarivate. (2025). *Pulse of the library 2025.*
7. Dakan, R., & Feller, A. (2025). *AI fluency: Framework & foundations* [Online course]. Anthropic Academy.
8. Brusova, Y. (2026). *AI for academic libraries* [Learning portal]. https://ai-in-academic-libraries.vercel.app

---

## 7. Figures — inline SVG or CSS only, no image files

**Figure 1 — Curriculum arc.** Three stacked or chevroned bands, one per level, in
that level's color, each labeled with its module range, module count, and minutes:

- **Level 1 · Foundations** — Modules 1–5 · 5 modules · 120 min · `#0F6E56`
  What AI actually is · Talking to AI effectively · Picking the right tool ·
  Ethics, copyright & policy · Critical evaluation of AI output
- **Level 2 · Applied** — Modules 6–13 · 8 modules · 177 min · `#185FA5`
  AI for research support · Reference & instruction · Metadata & cataloging ·
  Digital collections & discovery · Prompt library for library work ·
  AI for collections & vendor evaluation · Making the case to administration ·
  AI, labor & the library worker
- **Level 3 · Advanced** — Modules 14–18 · 5 modules · 80 min · `#854F0B`
  Automating repetitive tasks · Agentic AI: what it means · Vibe coding for librarians ·
  AI & library systems integration · Your AI strategy & next steps

**Figure 2 — Coverage grid.** 19 rows (sub-competencies) × 18 columns (modules).
Fill a cell in the module's level color where that module maps to that
sub-competency. Leave uncovered cells at `#F5F5F4`. Column headers are module
numbers only, at 16pt; row labels are the codes at 18pt. Use this exact mapping:

```
M01 → 2.1, 2.3, 3.1
M02 → 2.1, 4.3
M03 → 2.3, 3.4, 4.5
M04 → 1.1, 1.2, 1.3, 1.4, 1.5, 2.2, 2.5
M05 → 2.4, 3.1, 3.2, 3.3
M06 → 3.2, 4.1, 4.4
M07 → 4.1, 4.2, 4.3
M08 → 3.4, 4.1, 4.4
M09 → 3.2, 4.1, 4.4
M10 → 4.1, 4.3
M11 → 1.4, 3.1, 3.2, 4.2
M12 → 1.4, 1.5, 4.2
M13 → 1.1, 1.4, 1.5, 2.4
M14 → 4.1, 4.4
M15 → 2.1, 4.4
M16 → 4.1, 4.4
M17 → 3.2, 4.1, 4.4
M18 → 1.5, 2.3, 4.2
```

Add a small legend in the level colors. Caption both figures at 20pt in secondary text.

## 8. QR block — bottom of column 4

Render the QR at **3.2in × 3.2in**, on white, with a 40pt sans label above reading
**Visit the portal** and the URL below it at 24pt monospace-ish sans:
`ai-in-academic-libraries.vercel.app`

Use this data URI verbatim as the `src`:

```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAewAAAHsAQAAAAA4UaPNAAACfUlEQVR42u2dUWrDQAxERS/g+99yb7Al2F6NFJd+BEpneaYEJ/H7WcbqSJY2MT85RoCDg4OD/3881nG8Pjtfr6+O17frw/NtXjy+4qMDHPzv8dRzOYnQT15vR70jzhM0D26r+TNuLz0vVV9xfoTeBXkxmgffQPMjLr90v65Q/3QxKw9ur/nr5PzqFvyy/WgefEM/v+K8mPlT/93zo3lwX81LKeb3P+o24P6aL3nrfRecAb+YnGV1stTJyoO7aj4D/m1vVORq8kt5B82Dm2p+3F5lFoVnZf4O9dcdQZwH3yCHlQeyLW/VW2BluPdbVh7cNs6vmuTIyK+VHL04/y+geXDfOP8Wz6U4I94mgvo8+CZ1m1FOtAjfpS6vaB7cN843Y58NNqNE+FbSRPPgxpo/siavhcoW27V6Q5wHt85hV1qq2l5uJ6T3YOW8aB7cvm6jQV6fUkW0KRL6bcD3yGG1l6aNRDW3I7cJKw/uqvnVUZCqnr27rPkcNA/urfmQtvk2ZjvKhJTOxqJ5cOMc9r1Q+dhLSe8B+EZ+vm+AoM02am9kQhzNg5tqPnTKe9RKTmswlgQWbwNu7W1aieY5/h+lvEOcB/f2NrNs9PHQPz/n0+QUKw9um8PWToNqYHqeS5wHt/fzR9/6QA1MprE15yXOg9t7GynXtF0rsy1BDzQPbq75VL54+DYDW6ZL0Dy4r7eR0K2GRydkSytC0HsAbu/ni5mPeJgWrHtX8kwK3D6HjTYMEuUh1OybzxPnwbfR/PsmTm02qrZZsvLg/ppvJr+Zmb49AisP7u/n5w/dZeNpWgrNg/vXbfomZrmtR7T9nfDz4L6a5+fnwMHBwffFvwHo02K/KQRSOwAAAABJRU5ErkJggg==
```

## 9. After the HTML, output these two short notes

**A. Printing.** Chrome → Print → Destination "Save as PDF", **Scale 100%**,
"Fit to page" **off**, "Background graphics" **on**, margins None. Or headless:

```
chrome --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=poster.pdf poster.html
```
(Headless Chrome honors `preferCSSPageSize` and will emit a true 30×20in page.)
Verify the PDF page size reads 2160 × 1440 pt before printing at a shop.

**B. Height budget.** State the height you allotted each column and where slack remains.

## 10. Also generate the 16:9 virtual variant

Charleston also requires a **virtual poster: 2560 × 1440 px, PDF, under 10MB.**
In the same file, add a `.poster--virtual` class and a companion `@page` rule so the
same markup can be re-exported at 16:9 without a rewrite. Then explain, in five lines
or fewer:

- The aspect shift is small — 30:20 is 1.50:1, and 2560:1440 is 1.78:1 — so the poster
  gets **wider and shorter**: reflow 4 columns to 3, moving References and the QR block
  into a footer strip running the full width.
- Set that variant to `width: 26.67in; height: 15in` (2560 × 1440 at 96dpi) and scale
  the type scale down by a factor of 0.75, keeping body text at or above 18pt, which is
  readable on screen at 100%.
- Trim the reference list to 4 entries and drop Figure 2 if height is tight; keep
  Figure 1 and the stat strip, which carry the poster at thumbnail size.
- File size stays well under 10MB because both figures are inline SVG. The QR PNG
  (~700 bytes) is the only bitmap in the document.
- Export the same way, with scale 100% and background graphics on.
