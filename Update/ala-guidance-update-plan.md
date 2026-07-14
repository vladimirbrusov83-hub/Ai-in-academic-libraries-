# Update Plan — Aligning the Curriculum with ALA's AI Guidance

**Source:** ALA, *Guidance on the Use of Artificial Intelligence in Libraries*
https://www.ala.org/tools/standards-and-guidelines/guidance-use-artificial-intelligence-libraries

**Purpose:** The curriculum is currently ACRL-competency aligned. ALA's guidance is now the field's authoritative values statement, built on **six core library values**. This plan maps those values to what the site already covers and what is missing, so the curriculum can claim alignment with both ACRL *and* ALA.

---

## The six ALA core values → current coverage

| ALA value | What ALA asks for | Current site coverage | Verdict |
|---|---|---|---|
| **1. Public Good** | Human-in-the-loop; AI outputs are drafts, not authoritative; right to explanation; no deskilling | Touched in *Ethics, copyright & policy* (04) and *Critical evaluation* (05) | **Partial** — reinforce |
| **2. Intellectual Freedom** | Transparent ranking; opt-out; keep non-personalized access paths; audit discovery/recommendation features | *Digital collections & discovery* (09) covers discovery mechanics, not the IF framing | **Gap** |
| **3. Privacy** | Vendor data review; **prohibited data inputs** (PII, borrowing/reading history, reference interactions); opt-in consent; staff training | *Vendor evaluation* (11) covers procurement basics | **Partial — biggest quick win** |
| **4. Sustainability** | Carbon/water/energy disclosure; favor smaller task-specific models; e-waste & takeback; intergenerational stewardship | Not covered anywhere | **Full gap** |
| **5. DEIA & Access** | Pre-adoption bias evaluation; regular bias audits; non-English/dialect underrepresentation; accessibility standards; always a path to a human | *Critical evaluation* (05) covers bias in a single output, not systematic auditing | **Partial** |
| **6. Labor** | Human agency; no job justification/displacement; staff advisory groups; **vendor labor ethics** (data-labeling conditions); paid learning time; retraining | Not covered; *Making the case to administration* (12) is the opposite angle | **Full gap** |

**Bottom line:** Two values (**Sustainability, Labor**) are entirely absent. Two (**Intellectual Freedom, Privacy**) are present in fragments but not as ALA frames them. Two (**Public Good, DEIA**) need reinforcement.

---

## Recommended changes

### A. Add two new modules (the true gaps)

**New Module — "The environmental cost of AI" (Sustainability)**
- Level: `foundations` or `applied`
- Covers: energy/water/carbon of large models, why smaller task-specific models often suffice, questions to ask vendors about environmental disclosure, e-waste & hardware takeback, framing AI choices as intergenerational stewardship.
- ACRL competencies: `ethics`, `analysis`

**New Module — "AI, labor & the library worker" (Labor)**
- Level: `applied`
- Covers: AI must not justify job cuts or deskilling; staff advisory groups and worker input; vendor labor ethics (data-labeling and content-moderation conditions in the supply chain); patron data as uncompensated labor; paid time to learn AI; retraining before job tasks change.
- ACRL competencies: `ethics`
- Note: pairs naturally with *Making the case to administration* (12) — cross-link them.

### B. Strengthen four existing modules

**04 Ethics, copyright & policy** → add the **six ALA core values** as an explicit framework near the top, and add ALA's "right to explanation" / "AI outputs are drafts, not authoritative answers" language. This becomes the anchor module that names the whole framework.

**11 AI for collections & vendor evaluation** → add ALA's concrete **vendor review checklist**: Is AI on by default and can it be disabled? Does it collect prompts/searches/reference interactions? Is data used for model training? Where is it stored, for how long, and can we delete/exit? Add intellectual-freedom and labor questions to procurement.

**09 Digital collections & discovery** → add an **Intellectual Freedom** section: opaque ranking as an IF threat, preserving predictable non-personalized access paths alongside AI discovery, and auditing recommendation features for suppressed visibility.

**05 Critical evaluation of AI output** → extend from evaluating a single output to **systematic bias auditing**: underrepresentation of non-English languages and marginalized communities, regular audits of cataloging/reference/recommendation tools, and always offering a clear path to a human.

### C. Add a Privacy "prohibited data inputs" callout (highest ROI, lowest effort)

ALA is emphatic that staff must **never** enter into unapproved AI systems: patron PII, borrowing/reading history, reference interactions, account or staff records, or prompts containing identifiable details. This is a concrete, quotable rule staff need. Add it as a prominent boxed rule in **04** (or the new Labor module) and echo it in the *Prompt library* (10).

### D. Site-level touches

- **About / mission page** — add one line stating the curriculum aligns with both the **ACRL AI Competencies** and **ALA's AI Guidance (six core values)**. Credibility signal.
- **Resources page** — add the ALA guidance as a primary external reference.
- **llms.txt** — list the two new modules once written.

---

## Suggested sequence

1. **Quick wins first:** the Privacy prohibited-inputs callout (C) + the six-values framework in Module 04 (B). Small edits, big alignment payoff.
2. **Reinforce:** Modules 05, 09, 11 sections (B).
3. **Build:** the two new modules — Sustainability, then Labor (A). ~3,500–4,500 words each, in Yulia's practitioner voice.
4. **Finish:** About/Resources/llms.txt (D).

All content edits go in `content/modules.ts`; run `npm run build` before pushing. Deploy = git add → commit → push (Vercel auto-deploys).
