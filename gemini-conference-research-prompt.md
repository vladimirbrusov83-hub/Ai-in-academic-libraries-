# Deep Research Prompt — Gemini

**Role:** You are a research assistant helping maintain a curated directory of conferences relevant to **AI in academic and research libraries** for a professional development website aimed at academic librarians.

**Goal:** Find conferences, summits, symposia, and multi-session webinar series (2026 and 2027, worldwide) that I do NOT already have listed. Prioritize breadth of geography and topic. I already have 132 entries, so your value is in filling gaps, not repeating what I have.

## What counts (in scope)
Include an event if it fits ANY of these:
1. **AI-focused library events** — conferences explicitly about AI/generative AI in libraries or cultural heritage (highest priority).
2. **Library/LIS conferences** — general academic, research, or professional library conferences that have AI programming, tracks, or keynotes.
3. **Higher-ed teaching-and-learning / edtech conferences** with a strong AI-in-education focus that librarians would attend.
4. **AI-in-education research conferences** (learning analytics, AI in education, educational data mining).

Include virtual, in-person, and hybrid events. Include free and paid.

## What to prioritize (these are my known gaps)
- **Underrepresented regions:** Africa, the Middle East, South Asia (India, Pakistan), Southeast Asia, East Asia (Japan, Korea, China), Central/Eastern Europe, Latin America, Oceania beyond Australia.
- **Non-English-language events** (Spanish, Portuguese, German, French, Arabic, etc.) — I want these; give the native name + an English gloss.
- **2027 events** that have been announced.
- **Regional/state/provincial library association conferences** with AI programming.
- **Recurring webinar/mini-conference series** on AI in libraries.

## Rules
- **No duplicates.** Cross-check every candidate against the "Already have" list at the bottom. If it's already there (even a different year), skip it — unless you find a *newer edition* with new dates.
- **Verify each URL** by actually checking it resolves to the event's official page. Mark `urlVerified: true` only if you confirmed it; otherwise `false`.
- **Verify dates** against the official source. If dates aren't announced yet, say "TBA" and set `dateSort` to a best-estimate first-of-month based on the prior year's timing.
- **No hallucinated events.** If you can't find a real, official source, don't include it. Cite the source URL for each entry.

## Output format
Return a numbered list. For EACH new conference, give a ready-to-paste JavaScript object using exactly these fields:

```js
{
  id: 0, // I'll renumber
  name: "",              // include year, e.g. "AI in Libraries Summit 2026"
  organizer: "",
  dates: "",             // human-readable, e.g. "March 3–5, 2026"
  dateSort: "",          // ISO start date "YYYY-MM-DD" (used for sorting)
  location: "",          // City, Country — or "Virtual"
  format: "",            // "inperson" | "virtual" | "hybrid"
  url: "",               // official event page
  urlVerified: false,    // true ONLY if you confirmed the link resolves
  category: "lib",       // "lib" (library/LIS) | "edu" (higher-ed/teaching) | "tech" (AI/CS research)
  aiFocus: "aisig",      // "ai100" = entirely about AI | "aibig" = major AI track/theme | "aisig" = general event, AI is a smaller part
  past: false,           // true if the event date is before today
  international: false,   // true if OUTSIDE the United States
  description: "",       // 1–2 sentences: who it's for + why AI-relevant. For general non-AI events, note "included for completeness."
  deadline: ""           // CFP or registration deadline if known, else null
}
```

Also add a plain-language line under each object: **Source:** <the URL you verified it from>.

Group your results by region: **United States**, then **International**, then within international by continent.

## Already have — DO NOT repeat these (132 entries):
GAIL; Fantastic Futures (AI4LAM) 2025 & 2026; ai4Libraries 2025; SEC AI Library Summit 2026; Library Journal: AI and Academic Libraries (both editions); Computers in Libraries 2026 & 2027; Internet Librarian Connect 2026; ALA Annual 2025/2026/2027; ACRL 2025 & 2027; DLF Forum 2025 & 2026; Core Forum 2025 & 2026; CNI Fall 2025 & 2026; Charleston Conference 2025/2026 & Charleston In Between 2026; IFLA WLIC 2025 & 2026 (plus WLIC satellite events on AI in public libraries and others); LIBER 2026; Open Repositories 2026; EDUCAUSE Annual 2025 & 2026 & Summit 2026 (AI-Ready Workforce); ASU+GSV Summit 2026; AIED 2026; AIET 2026; LAK 2026; Code4Lib 2026; CAPAL 2026; ISS/SLC 2026 (ASIS&T); MLA 2026; DH2026; ISTE 2026; ASERL Library Technology Immersion 2026; OpenEd 2026; SXSW EDU 2026 & 2027; OLC Accelerate 2026; POD Network 2026; Open edX 2026; AECT 2026; AIR Forum 2026; University of Wyoming Libraries AI Summit 2026; Library 2.0 AI Mini-Conference Series; Amigos "Practical Paths to the AI-Enhanced Library" & "The Flexible Library"; CLA (California) 2026; IFLA/Northwestern Qatar AI and the Future of Libraries Symposium; UCF Teaching and Learning with AI; AAC&U Conference on AI and Higher Education; APUS AI and the Future of Education; Magna Teaching Professor Conference on AI & Magna AI in Education 2026; Stanford AI+Education Summit 2026; ESCP Paris AI in Higher Education Summit; University of Florida AI² Summit 2026; IHE US AI Summit 2026; Back to School AI Summit 2026; EDTECH WEEK AI for Educators Summit 2026; AIES-26 (AAAI/ACM); Learning @ Scale 2026; Educational Data Mining 2026; 12° Congreso de Bibliotecas Universitarias y Especializadas; Informationskompetenz DACH-Tag 2026; AI-cademy 2026; ALIA National 2026; ASIS&T Annual 2026; "Beyond Boundaries" emerging tech access; BiblioCon 2026; Brick & Click; CARL 2026 (California Academic & Research Libraries); CILIP 2026; COBAES; CIBU; "Connecting Codes: AI, DH & the Future of Information"; dbv KI-Fachtag 2026; ER&L Fest 2027; First Specialized Conference for Syrian Libraries; IFLA Interlending & Document Supply 2026; ZBW Informationsversorgung für die Wirtschaftsforschung; Iowa Library Association; "KI in Bibliotheken weiterdenken"; League for Innovation Innovations Conference; Lehigh AI Summit; LIASA 2026; LOEX; Missouri Library Association; "Neue Perspektiven auf KI in Bibliotheken 2026"; SAIL — Libraries and AI; SLA-AGC 2026; "Sustaining the Future of Academic Libraries" (IU Indianapolis); "Teaching & Learning with AI in Europe 2026"; University of Liverpool AI Online Conference 2026; SIBI 2026; EALC 2026 (Eurasian Academic Libraries); ICADL 2026; Sharjah International Library Conference (SILC) 2026; IATUL 2026; Access Services Conference 2026; Georgia Libraries Conference 2026; TCAL 2026 (Texas); TLA 2027; Access Conference 2026; NASIG 2026; RBMS 2026; Library Publishing Forum 2026; ACRL-NEC & NELIG Joint 2026; CBBD 2026 (Brazil); EAHIL 2026; CAUL Exhibition Event 2026; CONUL 2026; CALA Canada Chapter 2026; SCONUL Spring 2026; LILAC 2026; UKSG 2026; IFLA LAC Regional Seminar 2026; MiALA 2026; IACRL Spring Sampler 2026; STEM Information Professionals Mini Conference 2026.

Now begin your research and return only NEW conferences not on that list.
