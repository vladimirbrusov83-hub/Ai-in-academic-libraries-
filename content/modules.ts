import type { Module } from "@/lib/types";

export const modules: Module[] = [
  // ─── LEVEL 1: FOUNDATIONS ───────────────────────────────────────────────────

  {
    id: 1,
    slug: "what-is-ai-for-librarians",
    title: "What AI actually is",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["knowledge"],
    acrlSubCompetencies: ["2.1", "3.1"],
    topics: [
      "How large language models work — without the jargon",
      "Why AI differs from a search engine",
      "What AI can and cannot do",
      "Why the same question gets different answers",
      "The difference between AI types: generative, predictive, agentic",
    ],
    objectives: [
      "Explain in plain language what a large language model is and how it generates text",
      "Distinguish AI from search engines and databases in terms of how they retrieve and construct information",
      "Identify at least three things AI does reliably and three things it does not",
      "Explain why AI output is probabilistic rather than deterministic",
      "Describe how understanding AI's mechanics helps you use it more effectively",
    ],
    estimatedMinutes: 30,
    status: "published",
    isGap: false,
    description:
      "AI tools feel like magic — until something goes wrong. Understanding how they actually work, at a non-technical level, changes how you use them. This module gives you the mental model you need to work with AI effectively and critically.",
    relatedModules: [
      "talking-to-ai-effectively",
      "picking-the-right-tool",
      "critical-evaluation-ai-output",
    ],
    content: {
      intro:
        "When I started using AI at my reference desk, I treated it like a search engine. I typed in a question and expected a correct answer. I got burned quickly — not because the tool was bad, but because I didn't understand what it was actually doing. Once I understood that, everything changed.",
      sections: [
        {
          heading: "AI is a prediction machine, not a knowledge database",
          body: `When you type a question into ChatGPT or Claude, the model doesn't look up an answer. It predicts what text should come next, based on patterns it learned from billions of documents during training. It's an extraordinarily sophisticated pattern-matcher — but it is not retrieving stored facts.

This distinction matters for library work. A database returns records. A search engine returns links. AI generates text that sounds plausible based on what it has learned. Plausible is not the same as accurate.`,
        },
        {
          heading: "Why the same question gets different answers",
          body: `AI responses are probabilistic. Each time you ask a question, the model samples from a range of probable next words. This means the same prompt can yield different responses on different days — or even within the same conversation.

For librarians, this has direct implications. You cannot treat AI output as a citation. You cannot assume that because AI told you something once, it will say the same thing again. Think of it as a very well-read colleague who might phrase the same explanation differently each time you ask.`,
        },
        {
          heading: "What AI does well (and what it doesn't)",
          body: `AI is genuinely good at:
- Drafting and editing — emails, lesson plans, LibGuides, patron-facing text
- Summarizing long documents in accessible language
- Generating options and variations (five different ways to explain a concept)
- Explaining complex topics in simpler terms
- Spotting patterns in text you share with it
- Brainstorming and ideation

AI regularly struggles with:
- Specific facts, dates, statistics — it will fabricate confidently
- Current events after its training cutoff date
- Precise citations — it invents plausible-looking ones
- Anything requiring verified, authoritative retrieval
- Knowing when it doesn't know something

For library work, this split is useful. AI is a drafting and thinking partner, not a reference source.`,
        },
        {
          heading: "The three types of AI you'll encounter",
          body: `**Generative AI** creates new content — text, images, audio. ChatGPT, Claude, Gemini, and Perplexity fall here. This is what most librarians are experimenting with.

**Predictive AI** makes recommendations based on patterns — the "you may also like" systems in discovery layers and ILS platforms. Libraries have used this for years without calling it AI.

**Agentic AI** takes actions — it doesn't just respond to prompts, it executes multi-step tasks autonomously. This is newer and covered in Module 13.

Most of what we'll work with in Levels 1 and 2 is generative AI.`,
        },
        {
          heading: "A word on hype and skepticism",
          body: `I find it useful to hold two things at once: AI tools are genuinely useful for library work right now, and they are also overhyped in ways that create real risks. Neither position — uncritical enthusiasm or reflexive skepticism — serves librarians well.

The ACRL AI Competencies framework identifies skepticism as a guiding mindset alongside curiosity. That pairing is deliberate. We're supposed to explore and question at the same time.

The most useful frame I've found: treat AI as a capable but unreliable research assistant. You'd use a capable assistant. You'd also verify their work.`,
        },
      ],
      practitionerNote:
        "At my community college library, I found that explaining AI to skeptical faculty became much easier once I had this mental model. Instead of defending AI or dismissing their concerns, I could explain exactly why it makes things up and what that means for how we use it responsibly.",
    },
  },

  {
    id: 2,
    slug: "talking-to-ai-effectively",
    title: "Talking to AI effectively",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["knowledge", "application"],
    acrlSubCompetencies: ["4.3", "2.1"],
    topics: [
      "Prompt basics — what makes a good prompt",
      "Giving AI context that changes its output",
      "Iterating and refining instead of accepting first drafts",
      "System prompts and persistent instructions",
      "Why the same question gets different answers",
    ],
    objectives: [
      "Write a prompt that includes role, task, context, and format instructions",
      "Use follow-up prompts to refine and improve AI output rather than starting over",
      "Set up a system prompt or custom instructions for a recurring library task",
      "Explain why giving AI context produces better results than short queries",
      "Apply at least three prompting strategies to a real library task",
    ],
    estimatedMinutes: 40,
    status: "published",
    isGap: false,
    description:
      "Most people underuse AI because they talk to it like a search engine. This module teaches you how to actually communicate with AI — the skill that separates people who get useful results from those who don't.",
    relatedModules: [
      "what-is-ai-for-librarians",
      "picking-the-right-tool",
      "prompt-library-for-library-work",
    ],
    content: {
      intro:
        "The biggest skill gap I see with librarians trying AI isn't about knowing which tool to use. It's about knowing how to talk to it. A vague prompt gets a vague answer. A specific, context-rich prompt gets something you can actually use.",
      sections: [
        {
          heading: "The anatomy of a good prompt",
          body: `A useful prompt has four elements. You don't need all four every time, but knowing them helps.

**Role:** Tell the AI who it is. "You are an experienced academic librarian working at a community college..."
**Task:** Tell it exactly what you want. "Write a 200-word email to faculty explaining..."
**Context:** Give it the information it needs. "The email is for a first-year writing course whose instructor has not responded to previous outreach..."
**Format:** Tell it how to structure the output. "Use a friendly but professional tone. Three short paragraphs. No bullet points."

Compare these two prompts:
- *Bad:* "Write me an email about our library databases"
- *Better:* "You are a reference librarian at a community college. Write a friendly 150-word email to first-year students introducing them to three library databases they'll use for English Composition papers: JSTOR, Academic Search Complete, and ProQuest. Include one sentence about how to get help. No jargon."

The second prompt will get you something you can send with minimal editing.`,
        },
        {
          heading: "Iteration is the skill",
          body: `Most people send one prompt, get one response, and either use it or give up. That's not how AI works well. Iteration — following up, refining, redirecting — is where the value is.

After getting a first response, try:
- "Make this shorter — two paragraphs instead of four"
- "This sounds too formal. Make it warmer."
- "The second section isn't quite right. Here's what I actually need: [specifics]"
- "Give me three alternative versions of just the opening sentence"
- "Now write the same thing from the perspective of a student who's never used a library database"

Don't start a new conversation every time. Continue the one you're in. The AI remembers context within a session, and your conversation history shapes what it gives you next.`,
        },
        {
          heading: "System prompts and custom instructions",
          body: `Most AI tools let you set persistent instructions — text that applies to every conversation. This is where you tell the AI things it should always know about you.

For library work, useful custom instructions might include:
- Your institution type and student population ("I work at a community college serving many first-generation college students")
- Your role ("I'm a reference and instruction librarian")
- Preferred output style ("Always use plain language. Avoid jargon. Use active voice.")
- What you don't want ("Never suggest I cite Wikipedia as a primary source")

Setting this up once saves you from re-explaining context in every conversation. It's especially valuable if you use AI daily for the same types of tasks.

In ChatGPT, this is "Custom Instructions" in settings. In Claude, it's "Custom Instructions" or you can set up a Project with persistent context. In Gemini, it's in the settings as well.`,
        },
        {
          heading: "When to give AI information vs. ask for information",
          body: `There are two modes of AI prompting, and knowing which you're in changes how you write prompts.

**Information-in:** You share a document, email, or draft and ask AI to work with it. "Here is a LibGuide I drafted. Improve the clarity of the introduction and suggest better section headings." This mode is generally more reliable because AI is working with content you've provided, not generating facts from training data.

**Information-out:** You ask AI to tell you something. "What are the most useful databases for nursing research?" This mode requires more verification because AI is drawing on training data that may be outdated or imprecise.

For most library workflow tasks — drafting, editing, summarizing, brainstorming — you want the information-in mode. Paste in the document you're working on. Give AI your draft. Share the patron's question verbatim. You'll get better results and need to verify less.`,
        },
      ],
      practitionerNote:
        "My favorite prompt trick for reference work: when a patron's question is vague, I paste the question into Claude and ask it to generate five clarifying questions I could ask the patron. It surfaces angles I wouldn't have thought of, especially for topics outside my subject area.",
    },
  },

  {
    id: 3,
    slug: "picking-the-right-tool",
    title: "Picking the right tool",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["analysis", "knowledge"],
    acrlSubCompetencies: ["3.4", "4.5", "2.3"],
    topics: [
      "ChatGPT vs Claude vs Gemini — what actually differs",
      "Free vs. paid tiers: what you get for your money",
      "Data privacy per tool — what happens to your inputs",
      "When not to use AI",
      "Evaluating new tools as they emerge",
    ],
    objectives: [
      "Compare the major general-purpose AI tools on at least four practical dimensions",
      "Identify what data privacy considerations apply when choosing an AI tool for library work",
      "Make an informed decision about when AI is and isn't appropriate for a given task",
      "Apply a simple evaluation framework to a new AI tool you've never seen before",
      "Explain the difference between free and paid tiers in terms of practical capability",
    ],
    estimatedMinutes: 35,
    status: "published",
    isGap: false,
    description:
      "There are dozens of AI tools and new ones appear weekly. This module gives you a framework for evaluating them, a practical comparison of the major tools you'll encounter, and clear guidance on when not to use AI at all.",
    relatedModules: [
      "what-is-ai-for-librarians",
      "ethics-copyright-policy",
      "prompt-library-for-library-work",
    ],
    content: {
      intro:
        "I get asked constantly: 'Which AI tool should I use?' My honest answer is: it depends on the task, your institution's policies, and what you can afford. Here's how I actually think through tool selection.",
      sections: [
        {
          heading: "The major general-purpose tools",
          body: `**ChatGPT (OpenAI)**
The most widely known. GPT-4o is strong for most tasks. The free tier is capable but rate-limited. ChatGPT has the largest user base, which means the most community resources, tutorials, and examples — useful when you're learning. Data privacy: inputs may be used for training unless you opt out or use the Team/Enterprise plan.

**Claude (Anthropic)**
Excellent for long documents and nuanced writing. Claude handles longer context windows well, meaning you can paste in a 50-page policy document and ask questions about it. Claude's tone tends to be more cautious and balanced. Strong for instruction design and patron-facing content where tone matters. Data privacy: more conservative by default; Claude for Work (Teams/Enterprise) doesn't use inputs for training.

**Gemini (Google)**
Strong integration with Google Workspace — Docs, Drive, Gmail. If your library runs on Google, Gemini's integration advantage is real. Gemini has access to Google Search, which reduces (but doesn't eliminate) hallucinations on factual questions. Data privacy: review your institution's Google agreement carefully.

**Perplexity**
Designed to combine AI with web search. Every answer comes with citations. Useful for quick factual lookups where you want to see sources alongside the answer. Less useful for drafting and writing tasks. Free tier is functional.

For most library workflows, **Claude or ChatGPT** are the best starting points. Pick one, learn it well, then expand.`,
        },
        {
          heading: "Free vs. paid: the practical difference",
          body: `Free tiers are genuinely useful and a fine starting point. The limitations:
- Rate limits (you'll hit a wall after heavy use)
- Access to older or less capable models
- No priority access during high-demand periods
- Usually less clarity on data privacy

Paid tiers ($20–$30/month for most tools) give you:
- The most capable models
- Much higher usage limits
- Priority access
- Clearer data privacy commitments

For a librarian using AI occasionally, the free tier is fine. For daily use in workflow tasks, the paid tier pays for itself quickly in time saved.

**If your institution will pay for a tool:** Push for the Team or Enterprise tier, which typically includes clearer data privacy terms (your inputs don't train the model). This matters for patron-related work.`,
        },
        {
          heading: "Data privacy — what you need to know",
          body: `This is the most important consideration for library work, given our professional obligations around patron privacy.

General rule: **Do not enter patron-identifiable information into a free-tier consumer AI tool.** This includes names, student IDs, specific research questions that could be traced back to an individual, or any information a patron shared with you in confidence.

What to check for any tool:
- Does it use your inputs for model training? (Can you opt out?)
- Where is data stored and processed?
- What does your institution's IT or legal policy say about this tool?
- Is there an enterprise or institutional agreement that changes the privacy terms?

Many institutions are developing AI acceptable use policies. If yours hasn't, look at EDUCAUSE resources and examples from peer institutions. Module 04 covers policy in more depth.

**Safe practice right now:** Use AI for tasks where the inputs are generic (drafting template emails, editing non-patron-specific content, brainstorming lesson plans). Be cautious with anything specific to an individual patron.`,
        },
        {
          heading: "When not to use AI",
          body: `AI is not appropriate for every library task. Situations where I do not use it:

- **Anything requiring verified citations** — AI fabricates references. Don't use it to find sources; use it to process sources you've already verified.
- **Patron privacy-sensitive reference interactions** — detailed questions that identify a patron's personal situation
- **High-stakes factual claims** — statistics, dates, legal information, medical information — always verify from primary sources
- **When the patron expects human judgment** — some reference interactions require empathy and professional discretion that AI cannot provide
- **Tasks where "plausible" isn't good enough** — if accuracy is non-negotiable, verify independently

The ACRL competency framework's emphasis on skepticism applies here. Using AI well means knowing its limits, not just its capabilities.`,
        },
        {
          heading: "A simple evaluation framework for new tools",
          body: `New AI tools appear constantly. Here's a quick checklist I run through before adopting something new:

1. **Who built it and what's their business model?** Free tools often monetize your data.
2. **What does the privacy policy actually say?** Specifically about training data.
3. **Is there a library-specific use case?** Or is this designed for a different context?
4. **Does my institution have a policy about this tool?** Check before adopting.
5. **Is there peer review or library community discussion about it?** LTI (LibTech Insights) and Library Technology Reports are good sources.
6. **Can I pilot it with low-stakes tasks before committing?** Start small.

You don't need to evaluate every tool. Pick a few that work and go deep with them. ACRL sub-competency 2.3 specifically addresses staying current — but that's about staying informed, not chasing every new release.`,
        },
      ],
    },
  },

  {
    id: 4,
    slug: "ethics-copyright-policy",
    title: "Ethics, copyright & policy",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["ethics", "knowledge"],
    acrlSubCompetencies: ["1.1", "1.2", "1.3", "1.4", "1.5", "2.2", "2.5"],
    topics: [
      "Hallucinations — what they are and why they happen",
      "Data privacy and patron confidentiality",
      "Intellectual property, copyright, and AI-generated content",
      "Institutional AI policies — reading and writing them",
      "ACRL AI Competencies framework overview",
      "ARL Guiding Principles 2024 — including 'No Human, No AI'",
    ],
    objectives: [
      "Explain what hallucinations are and apply at least two strategies to detect them",
      "Identify patron privacy obligations that apply when using AI in reference work",
      "Describe the current copyright landscape for AI-generated content and what it means for library practice",
      "Review or contribute to an institutional AI acceptable use policy",
      "Apply the ARL 'No Human, No AI' principle to a library workflow decision",
    ],
    estimatedMinutes: 45,
    status: "published",
    isGap: false,
    description:
      "Ethics aren't separate from practical AI use — they're embedded in every decision about which tool to use, what to put into it, and what to do with what comes out. This module maps the ethical landscape you need to navigate in library work.",
    relatedModules: [
      "critical-evaluation-ai-output",
      "picking-the-right-tool",
      "making-the-case-to-administration",
    ],
    content: {
      intro:
        "The first time I read the ACRL AI Competencies document, I was struck by how much of it was about caution. Not fear — caution. There's a difference. This module is about developing the professional judgment to use AI in ways that serve your patrons and uphold your values.",
      sections: [
        {
          heading: "Hallucinations: the most misunderstood AI problem",
          body: `Hallucination is when AI confidently states something false. It's not a bug in the traditional sense — it's a direct consequence of how large language models work. The model is always predicting the most plausible next word. Sometimes plausible is wrong.

Common hallucinations in library contexts:
- Invented citations with plausible-sounding journal names, volume numbers, and page ranges
- Incorrect dates for events, publications, or policies
- Wrong author attributions
- Statistics that sound reasonable but can't be verified
- Policy or legal information that is outdated or simply wrong

What hallucinations are *not*: a reason to dismiss AI entirely. They are a reason to verify. Module 05 covers verification strategies in depth. The key here is to internalize that AI-generated text requires the same critical evaluation we'd apply to any other information source.`,
        },
        {
          heading: "Patron privacy: our professional obligation comes first",
          body: `Library confidentiality is foundational. The ALA Code of Ethics commits us to protecting patron privacy. AI tools do not automatically honor that commitment — we have to make deliberate choices to protect it.

The risks are real:
- Consumer-tier AI tools may log and use your inputs for model training
- Inputting a patron's specific research question creates a record
- Sensitive reference queries (health, legal, immigration, crisis situations) are particularly high risk

**Practical guidance:**
- Strip identifying information before putting any patron query into AI
- Use institutional AI agreements that include data privacy protections where available
- Follow your institution's IT and legal policies
- When in doubt, handle the interaction without AI

This isn't about prohibiting AI in reference — it's about using it in ways that don't compromise the trust patrons place in us.`,
        },
        {
          heading: "Copyright and AI-generated content",
          body: `The copyright landscape for AI is unsettled, but a few things are clear enough to guide practice:

**AI-generated content is generally not copyrightable** in the U.S. — the U.S. Copyright Office has consistently held that copyright requires human authorship. Content you generate with AI and publish without significant human creative input likely has no copyright protection.

**Training data copyright** is actively litigated. Many AI models were trained on copyrighted materials without license. This creates legal risk for commercial use of AI outputs, but the implications for library practice are still developing.

**What this means for library work:**
- Be transparent about AI use when it's relevant to publication or attribution
- Follow emerging institutional policies on AI disclosure
- For content you generate for patrons, the authorship question is less critical than accuracy
- For content you generate for publication or official use, document your process

The ARL Guiding Principles (2024) address this directly: libraries have a stake in preserving copyright flexibility for nonprofit research and educational uses. This isn't just a legal issue — it's a professional advocacy issue.`,
        },
        {
          heading: "The ARL Guiding Principles — and 'No Human, No AI'",
          body: `The Association of Research Libraries published seven guiding principles for AI in April 2024. They're worth reading in full. The one I come back to most often is Principle 4:

**"No Human, No AI"** — consequential decisions must not be delegated entirely to AI systems. Human involvement is essential at critical decision-making junctures.

For library practice, this principle is clarifying. AI can help you draft, research, brainstorm, and organize. But decisions that affect patrons — what information to provide, how to support someone in crisis, whether to escalate a situation, how to evaluate a collection — require human professional judgment.

This isn't about AI being untrustworthy. It's about recognizing that accountability requires a human. When something goes wrong — and sometimes it will — there needs to be a professional who made a decision and can answer for it.`,
        },
        {
          heading: "Institutional AI policies: reading and contributing",
          body: `Your institution either has an AI policy, is developing one, or should be. Either way, librarians have a professional role to play.

**Reading a policy:** Look for:
- Which tools are approved or prohibited
- What data can and cannot be input into AI systems
- Requirements for disclosure of AI use
- Privacy and security requirements
- Who is responsible for AI-related decisions

**Contributing to policy:** Librarians have relevant expertise here — information ethics, intellectual property, patron privacy, information literacy. If your institution's policy is being written without library input, advocate for a seat at the table. Module 11 covers this in more detail.

ACRL sub-competency 2.5 specifically asks us to "understand AI-related policies and regulations." At the professional level, this means both following them and helping to shape them.`,
        },
      ],
      practitionerNote:
        "I've been asked several times to help faculty develop AI policies for their syllabi. My approach: start with the ARL principles and ACRL framework, then adapt to the specific discipline and assignment type. Librarians are natural policy translators — we understand both the information landscape and the pedagogical goals.",
    },
  },

  {
    id: 5,
    slug: "critical-evaluation-ai-output",
    title: "Critical evaluation of AI output",
    level: "foundations",
    audience: "both",
    acrlCompetencies: ["analysis", "ethics"],
    acrlSubCompetencies: ["3.1", "3.2", "3.3", "2.4"],
    topics: [
      "Spotting hallucinations — specific verification strategies",
      "Fact-checking AI claims against authoritative sources",
      "When to trust and when to verify",
      "Connecting to the ACRL Information Literacy Framework",
      "Teaching AI evaluation to patrons and students",
    ],
    objectives: [
      "Apply at least three verification strategies to AI-generated text",
      "Identify the types of claims most likely to be hallucinated",
      "Connect AI critical evaluation to existing information literacy frameworks you already teach",
      "Explain AI evaluation to a student or patron in terms they can act on",
      "Develop a personal checklist for evaluating AI output in your daily work",
    ],
    estimatedMinutes: 35,
    status: "published",
    isGap: false,
    description:
      "Librarians have been teaching critical evaluation of sources for decades. AI doesn't require a new framework — it requires applying what you already know to a new type of source. This module bridges that connection.",
    relatedModules: [
      "what-is-ai-for-librarians",
      "ethics-copyright-policy",
      "ai-for-research-support",
    ],
    content: {
      intro:
        "Here's what I tell students and faculty: evaluating AI output is information literacy. The questions you ask — Who created this? What's their method? Can I verify this? What might be missing? — are the same questions. The source is different; the critical thinking is the same.",
      sections: [
        {
          heading: "What hallucinations look like in practice",
          body: `Hallucinated content often has a tell: it's specific and confident. A hallucinated citation will include a journal name, volume number, issue, page range, and DOI. It will look completely legitimate. The volume number and the actual content of the paper won't match — but you have to check to find out.

**Red flags that warrant verification:**
- Specific statistics (percentages, dates, dollar amounts)
- Named citations with full bibliographic details
- Historical dates and events
- Quotes attributed to specific people
- Policy or legal claims
- Medical, scientific, or technical facts

**Generally safer** (though not immune):
- Structural recommendations ("a good email structure is...")
- Tone and style guidance
- Brainstormed lists of ideas
- Summaries of documents you provided
- Writing and editing of your own text`,
        },
        {
          heading: "Three verification strategies that work",
          body: `**1. Check the citation first, then the claim**
If AI gives you a citation, run it through a database. Does the article exist? Does the author exist? If yes, does the article actually say what AI claims? This takes two minutes and catches most fabricated citations.

**2. Ask AI to show its work**
"Where did this come from? How confident are you in this? What are you uncertain about?" AI will often acknowledge uncertainty when directly asked — though this isn't foolproof. Treat these responses as leads, not answers.

**3. Triangulate with authoritative sources**
For any important factual claim from AI, verify it through at least one authoritative source you can cite independently. If AI tells you "69% of academic libraries are integrating AI" — look up the Pulse of the Library report (Clarivate, 2024). The figure is real, but you should know where it comes from.`,
        },
        {
          heading: "Connecting to information literacy frameworks you already teach",
          body: `The ACRL Framework for Information Literacy has six frames. Each connects directly to AI evaluation:

**Authority is Constructed and Contextual** — AI has no authority. It synthesizes from sources that may or may not have authority. Ask: what would the actual authority be for this claim?

**Information Creation as a Process** — AI text is generated, not researched. The process creates specific limitations. Students who understand how AI generates text evaluate it more accurately.

**Information Has Value** — AI doesn't cite its training data. This obscures the value chain of the information it synthesizes. Copyright and attribution questions are embedded here.

**Searching as Strategic Exploration** — AI is not a search tool. Treating it as one causes verification failures. This distinction is crucial for patron instruction.

**Scholarship as Conversation** — AI doesn't participate in scholarly conversation. It reflects a moment in time. Use it for synthesis, not for understanding current debate in a field.

**Research as Inquiry** — AI can support inquiry but not replace it. The intellectual work of forming questions, evaluating evidence, and reaching conclusions is human.

If you already teach these frames, you have a ready-made framework for AI literacy instruction.`,
        },
        {
          heading: "Teaching AI evaluation to students and patrons",
          body: `The most effective approach I've found is to show, not tell. I run a live demonstration:

1. Ask AI to find three peer-reviewed articles on a topic relevant to the course
2. Try to find those articles in a database
3. Reveal the results — typically at least one article doesn't exist, has wrong details, or is misattributed
4. Ask: how does this change how you'll use this tool?

This takes about ten minutes and does more than any lecture could. Students who see hallucination in action become appropriately skeptical. The goal isn't fear — it's the kind of calibrated skepticism the ACRL mindsets describe.

For patrons at the reference desk: when someone mentions they used AI for their research, I ask a few questions. "Did you verify those sources? Do you have them open?" Then I help them check. I don't shame the AI use — I treat verification as the normal next step, because it is.`,
        },
      ],
    },
  },

  // ─── LEVEL 2: APPLIED ─────────────────────────────────────────────────────

  {
    id: 6,
    slug: "ai-for-research-support",
    title: "AI for research support",
    level: "applied",
    audience: "practicing",
    acrlCompetencies: ["application", "analysis"],
    acrlSubCompetencies: ["4.1", "4.4", "3.2"],
    topics: [
      "Literature reviews — where AI helps and where it doesn't",
      "Systematic search assistance and search strategy drafting",
      "Summarizing papers and evidence synthesis",
      "Helping patrons use AI for research — your new instruction role",
      "Emerging AI-native research tools (Connected Papers, Elicit, Consensus)",
    ],
    objectives: [
      "Use AI to draft, refine, and expand a database search strategy",
      "Apply AI for summarizing and synthesizing research documents patrons provide",
      "Describe at least three AI-native research tools and when to recommend them",
      "Explain to a patron the appropriate and inappropriate uses of AI in their research process",
      "Develop a research support workflow that integrates AI at appropriate points",
    ],
    estimatedMinutes: 45,
    status: "published",
    isGap: false,
    description:
      "Research support is where many librarians first encounter real AI utility — and real AI failure. This module maps where AI adds value to literature reviews, search strategy, and evidence synthesis, and where it gets students into trouble.",
    relatedModules: [
      "critical-evaluation-ai-output",
      "reference-and-instruction",
      "prompt-library-for-library-work",
    ],
    content: {
      intro:
        "I've had students come to the reference desk after using AI to 'find sources' for a literature review. They had a list of twenty articles. Eight didn't exist. Four were real but said nothing like what the student claimed. This experience — which I've now seen many versions of — shaped how I think about AI and research support. The tool isn't the problem; the workflow is.",
      sections: [
        {
          heading: "Where AI genuinely helps in research support",
          body: `**Search strategy development:** This is AI at its best for research support. Give it a research question and ask it to suggest search terms, synonyms, related concepts, Boolean combinations, and subject headings. Then take those suggestions to the actual database. AI doesn't search databases — it helps you think about how to search.

Example prompt: "I'm helping a nursing student research the effectiveness of cognitive behavioral therapy for insomnia in elderly patients. Generate a set of search terms and synonyms I could use in PubMed, including MeSH terms if applicable."

**Summarizing provided documents:** Paste in an abstract, a full article, or a set of abstracts and ask AI to synthesize key themes, identify methodological approaches, or pull out relevant findings. This works well because AI is working with content you've provided — not generating facts from training data.

**Explaining research concepts:** "Explain the difference between systematic review and narrative review to an undergraduate who has never written a research paper" — AI is excellent at this kind of explanation on demand.`,
        },
        {
          heading: "Where AI fails in research support",
          body: `**Finding sources:** AI cannot search databases. When asked to find articles, it generates plausible-sounding citations from its training data. Some will be real; many will not be. This is the single most dangerous AI behavior in a research context.

**Current literature:** Most AI tools have a training cutoff. A student researching a fast-moving topic (clinical trials, COVID variants, recent policy changes) will get outdated information.

**Specialized or niche topics:** AI's knowledge is proportional to how much was written about a topic during training. Niche scholarly topics, non-English literature, and emerging subfields are underrepresented.

**Evaluating quality:** AI cannot tell a student whether a source is credible, peer-reviewed, or methodologically sound. It will evaluate it the same way it evaluates everything — by pattern-matching to what sounds authoritative.

The practical instruction point: teach students the difference between "AI finds sources" (wrong workflow) and "AI helps me think about finding sources" (correct workflow).`,
        },
        {
          heading: "Emerging AI-native research tools",
          body: `Several tools are built specifically for research, addressing some of the hallucination problems of general AI:

**Connected Papers** (connectedpapers.com): Visualizes the citation network around a paper. Not AI-generative, but an AI-enhanced discovery tool. Excellent for showing students how scholarship is connected.

**Elicit** (elicit.com): AI research assistant that searches actual databases (Semantic Scholar) and returns real papers with AI-generated summaries. Much lower hallucination risk than general AI because it's grounding responses in real search results. Strong for systematic review workflows.

**Consensus** (consensus.app): Searches peer-reviewed papers and synthesizes findings. Good for quick evidence checks on empirical questions. Free tier available.

**Perplexity** (academic mode): Combines AI synthesis with web search and citations. Better for factual research than ChatGPT, but not a replacement for database searching.

These tools are evolving rapidly. Recommend them as supplements to database searching, not replacements.`,
        },
        {
          heading: "Your new instruction role: helping patrons use AI responsibly",
          body: `This is one of the most significant role expansions for reference librarians. Patrons are using AI for research whether we teach them to or not. Our job is now to help them use it in ways that support rather than undermine their research.

The instruction points that matter most:
1. AI does not search databases — show them the difference
2. All AI-generated citations must be verified before use — make verification a required step, not an afterthought
3. The research question comes from them, not from AI — AI can help develop and refine it, but the intellectual ownership is theirs
4. AI is good at certain tasks in the research workflow (planning, summarizing, explaining) and poor at others (finding, evaluating, verifying)

For instruction sessions: consider building a "Research Workflow with AI" handout that maps appropriate AI use to each stage of the research process. This gives students a framework rather than a prohibition.`,
        },
      ],
      practitionerNote:
        "At our library, we've started doing a five-minute 'AI source check' as part of research consultations. When a student mentions AI use, we run one of their citations together. The hands-on verification becomes the most memorable part of the session.",
    },
  },

  {
    id: 7,
    slug: "reference-and-instruction",
    title: "Reference & instruction",
    level: "applied",
    audience: "practicing",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.1", "4.2", "4.3"],
    topics: [
      "Drafting and improving subject guides with AI assistance",
      "AI-enhanced lesson plan development",
      "Teaching information literacy in an AI world",
      "Faculty collaboration on AI syllabus policies",
      "Patron communication — emails, FAQs, signage",
    ],
    objectives: [
      "Use AI to draft or improve a subject guide for a specific course or discipline",
      "Develop a library instruction lesson plan using AI as a drafting partner",
      "Create patron-facing AI use guidance appropriate for a specific population",
      "Draft a faculty consultation framework for AI policy questions",
      "Apply AI to at least three patron communication tasks in your daily workflow",
    ],
    estimatedMinutes: 45,
    status: "published",
    isGap: false,
    description:
      "Reference and instruction are where librarians spend the most time — and where AI provides the most immediate daily utility. This module is entirely practical: real tasks, real prompts, real time savings.",
    relatedModules: [
      "ai-for-research-support",
      "talking-to-ai-effectively",
      "prompt-library-for-library-work",
    ],
    content: {
      intro:
        "I use AI in my instruction work every week. Not for everything — there are tasks where it would be slower than just doing it myself. But for drafting, refining, brainstorming, and adapting content for different audiences, it's become a genuine time-saver. Here's what that looks like in practice.",
      sections: [
        {
          heading: "Subject guides: from blank page to draft in ten minutes",
          body: `Creating a new subject guide from scratch is time-consuming. AI can't research the actual resources for you — you still need to know what the good databases are — but it can handle structure, description writing, and introduction text quickly.

**Workflow that works:**
1. Tell AI: "I'm creating a LibGuide for [subject] for [course level and context]. Suggest a logical tab structure and what each section should include."
2. Review and adjust the structure
3. Draft descriptions: "Write a 50-word description of [database] for undergraduate students in [discipline] who are writing literature reviews."
4. Generate the introduction: "Write a welcoming 100-word introduction for this guide that explains what students will find and how to use it."
5. Polish and publish

For guides you're adapting rather than creating: paste in an existing guide section and ask AI to improve clarity, update language, or tailor it for a different audience. This is faster than starting fresh.

**Example prompt for improving existing content:**
"Here is a section of my library guide on evaluating sources. Rewrite it for first-generation college students who may be unfamiliar with library terminology. Plain language, no jargon, welcoming tone."`,
        },
        {
          heading: "Lesson plan development",
          body: `Library instruction sessions often follow similar structures, but the discipline, course level, and assignment type change everything. AI is good at helping you adapt a framework to a specific context quickly.

**Useful prompts for instruction:**
- "I have 50 minutes with a first-year English composition class that's starting their first research paper. They'll be using [databases]. Generate a lesson plan with a hook, core content, and an active learning activity."
- "I just got a last-minute request to do a 20-minute information literacy session for a nursing seminar. The assignment is a systematic review. What should I cover and in what order?"
- "Give me five different ways to demonstrate database Boolean searching that would engage students who've never used an academic database before."
- "Write three formative assessment questions I could use during a library session to check whether students understand the difference between popular and peer-reviewed sources."

AI is particularly useful for generating options. When I ask for five different activity ideas instead of one, I almost always find something usable in the list that I wouldn't have thought of on my own.`,
        },
        {
          heading: "Teaching information literacy in an AI world",
          body: `The ACRL Framework was written before AI was a mainstream tool. It remains relevant — but some frames need new examples and new emphasis.

**What's changed:**
- "Searching as Strategic Exploration" now explicitly includes AI, which patrons use as a first (and sometimes only) step
- "Authority is Constructed and Contextual" needs to address the fact that AI has no authority — it reflects authority it was trained on
- "Information Creation as a Process" needs to include AI generation as a process with specific limitations

**New instruction content you need:**
- How to evaluate AI output (Module 05 covers this in depth)
- The difference between AI and database search
- When AI helps research and when it hinders it
- How to document and disclose AI use appropriately

The instruction opportunity is real: students are using AI. They're using it incorrectly in many cases. Librarians are uniquely positioned to provide the critical framework that helps them use it better.`,
        },
        {
          heading: "Working with faculty on AI syllabus policies",
          body: `Faculty are asking librarians for help with AI policies at an increasing rate. This is a natural consultation — information literacy, academic integrity, and disciplinary norms all intersect here.

**What faculty actually need:**
- Example policies from peer institutions (you likely have access to these through your professional networks)
- Understanding of what different levels of AI restriction actually look like in practice
- Guidance on how to assign work that builds skills even in an AI-available environment
- Help distinguishing between AI assistance and AI substitution

**A consultation framework that works:**
1. Start with the assignment's learning objective, not the AI question
2. Ask: what skill or knowledge does this assignment develop?
3. Then ask: what forms of AI use undermine that learning, and what forms support it?
4. Help the faculty member write a policy that reflects those distinctions

Avoid being prescriptive about whether AI use is good or bad. Different disciplines, courses, and assignments call for different approaches. Your role is to help faculty think it through, not to advocate a position.

Useful resource: the AI syllabus policy repository maintained by various higher education organizations. Always check what peer institutions in your discipline are doing.`,
        },
        {
          heading: "Patron communication tasks",
          body: `This is the highest-return, lowest-risk AI use case for most librarians. Drafting emails, FAQs, signage, and patron-facing text is time-consuming and benefits from iteration.

**Patron communication tasks where AI helps:**
- Email responses to common reference questions (draft a template, then personalize)
- FAQ content for library websites and guides
- Signage for services, hours, policies
- Newsletter content and announcements
- Social media posts (with your institution's voice guidelines as context)
- Welcome messages for new students
- Handouts and one-pagers for library services

**Prompting for patron communication:**
Always tell AI your patron population and tone. "Write this for community college students, friendly and brief" produces different output than "Write this for faculty, professional and precise."

Keep a document of your best AI-drafted communication — emails you've sent, guides you've published, signage that tested well. These become your prompt library reference for future similar tasks. Module 10 covers building a prompt library systematically.`,
        },
      ],
      practitionerNote:
        "The task that converted my skeptical colleagues was watching me draft a LibGuide introduction in three minutes and edit it in two more. Once they saw it save time on a task they recognized as tedious, the conversation shifted from 'should we use this' to 'what else can we use it for.'",
    },
  },

  {
    id: 8,
    slug: "metadata-and-cataloging",
    title: "Metadata & cataloging",
    level: "applied",
    audience: "digital",
    acrlCompetencies: ["application", "analysis"],
    acrlSubCompetencies: ["4.1", "3.4", "4.4"],
    topics: [
      "AI-assisted metadata generation",
      "Automated subject tagging and classification",
      "Cleaning and normalizing catalog records",
      "MARC records and AI-assisted enhancement",
      "Tools like AERIE and emerging cataloging AI",
    ],
    objectives: [
      "Apply AI to a batch metadata cleaning task in your current workflow",
      "Evaluate at least one AI-assisted metadata tool relevant to your collection",
      "Identify where AI-assisted subject tagging adds value and where human review is required",
      "Draft a workflow for AI-assisted record enhancement in your system",
      "Understand the limitations and bias risks in automated classification",
    ],
    estimatedMinutes: 45,
    status: "published",
    isGap: false,
    description:
      "Metadata work is labor-intensive, detail-oriented, and increasingly supported by AI tools. This module covers the real state of AI in cataloging — where it saves hours, where it introduces errors, and how to design quality-controlled workflows.",
    relatedModules: [
      "digital-collections-discovery",
      "ai-library-systems-integration",
      "automating-repetitive-tasks",
    ],
    content: {
      intro:
        "Cataloging and metadata work is a natural fit for AI assistance — it involves pattern recognition, classification, and normalization at scale. But it also requires precision that AI doesn't always deliver. This module is written for the digital librarian who wants to integrate AI tools thoughtfully, not uncritically.",
      sections: [
        {
          heading: "Where AI adds real value in metadata work",
          body: `**Batch record cleaning:** AI can identify inconsistencies, normalize formatting, and flag records that need attention at scale. Tasks that would take hours of manual review can be processed in minutes when you provide AI with clear rules.

**Subject heading suggestions:** For items that are poorly tagged or untagged, AI can suggest candidate subject headings based on title, abstract, and existing metadata. These suggestions require human review — but the candidate list saves significant time.

**Description generation:** For digital collections with minimal description, AI can draft catalog descriptions from provided metadata fields or scanned content. This is particularly valuable for digitization projects where description is the bottleneck.

**Language and format normalization:** Cleaning up inconsistent date formats, normalizing name authority entries, standardizing controlled vocabulary — these are rule-based tasks that AI handles well when given clear specifications.`,
        },
        {
          heading: "Tools in the AI metadata space",
          body: `**AERIE (AI-Enhanced Record Improvement):** An emerging tool designed for academic library catalog enhancement. Check current availability and institutional pricing through your vendor contacts.

**Ex Libris AI features:** Ex Libris (Alma/Primo) has been integrating AI features for metadata enhancement. If your library runs Alma, check the current release notes for AI-assisted cataloging features.

**OCLC AI initiatives:** OCLC has been investing in AI for record quality and subject suggestion. WorldCat metadata AI features are worth monitoring.

**General AI tools for batch processing:** Claude and ChatGPT can process batches of records when given clear formatting instructions. This is useful for smaller-scale normalization tasks that don't require a specialized tool.

The landscape here is moving quickly. For current evaluations, LibTech Insights (LTI) tracks tool developments. LITA/ALCTS interest groups also discuss emerging tools.`,
        },
        {
          heading: "Bias and classification: the critical issue",
          body: `AI classification systems inherit the biases of their training data. In library cataloging, this has specific implications:

LCSH (Library of Congress Subject Headings) has well-documented bias — historically using terminology that is now considered harmful for communities including Indigenous peoples, LGBTQ+ communities, and many others. An AI trained on existing catalog records will replicate and potentially amplify these biases.

**What this means for practice:**
- AI subject heading suggestions require human review, particularly for materials about marginalized communities
- Be skeptical of AI classification for items about non-Western cultures, non-English traditions, and historically underrepresented groups
- If your library is doing cataloging renovation work (reclassification, bias review), AI can help identify candidate records — but human judgment must drive the actual reclassification decisions

The ARL Guiding Principles specifically address this: "Understand and Raise Awareness of AI Bias." In cataloging, this isn't theoretical — it has direct consequences for collection discoverability and community representation.`,
        },
        {
          heading: "Designing an AI-assisted cataloging workflow",
          body: `A responsible AI-assisted cataloging workflow has three phases:

**1. AI-assisted processing**
Define clearly what the AI will do: suggest subject headings, normalize formats, draft descriptions, flag incomplete records. Give the AI explicit rules and examples.

**2. Human review**
Determine what percentage of AI output will be reviewed, and by whom. Higher-stakes decisions (subject heading assignment for sensitive topics, authority control) require higher review rates.

**3. Quality control**
Audit a sample of processed records after they go live. Measure error rates. Adjust the AI prompts or rules based on what you find.

The percentage of human review can decrease over time as you develop confidence in specific AI tasks — but never to zero. ACRL sub-competency 4.1 ("apply AI for task efficiency") requires that the efficiency gains are real, which means the output must actually be accurate.`,
        },
      ],
    },
  },

  {
    id: 9,
    slug: "digital-collections-discovery",
    title: "Digital collections & discovery",
    level: "applied",
    audience: "digital",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.1", "4.4", "3.2"],
    topics: [
      "AI in discovery layers — what's actually available now",
      "Enhancing finding aids with AI-assisted description",
      "Accessibility improvements using AI transcription and description",
      "Institutional repositories and AI-assisted metadata",
      "Electronic resource management and AI tools",
    ],
    objectives: [
      "Identify AI features in your current discovery layer and how to configure them",
      "Apply AI to improve description or accessibility in a digital collection",
      "Evaluate AI transcription tools for archival or audio-visual materials",
      "Draft a workflow for AI-assisted finding aid enhancement",
      "Understand the limitations of AI in discovery contexts",
    ],
    estimatedMinutes: 40,
    status: "published",
    isGap: false,
    description:
      "AI is reshaping how patrons discover library collections — and how libraries describe them. This module covers the practical state of AI in discovery layers, digital collections, and institutional repositories.",
    relatedModules: [
      "metadata-and-cataloging",
      "ai-library-systems-integration",
      "automating-repetitive-tasks",
    ],
    content: {
      intro:
        "Discovery is where AI has the longest history in libraries — recommendation engines, faceted search, and relevance ranking have incorporated machine learning for years. What's changed is the ability to use generative AI to improve the underlying metadata and descriptions that make discovery possible.",
      sections: [
        {
          heading: "AI in discovery layers",
          body: `Most major discovery platforms (Primo, Summon, EBSCO Discovery Service, Worldcat Discovery) have been integrating AI-driven relevance ranking and query expansion for years. Newer features include:

- AI-generated search suggestions and query reformulation
- Semantic search that understands meaning, not just keywords
- AI summaries of search results (appearing in some platforms)
- Recommendation engines for related resources

Check your platform's recent release notes for specific AI features. Configure what you can — particularly relevance tuning and query expansion settings.

**Important caveat:** Many discovery platform AI features are vendor-controlled and not configurable at the library level. Your role may be primarily in evaluating and advocating for features, rather than implementing them directly.`,
        },
        {
          heading: "Finding aids and AI-assisted description",
          body: `Archival finding aids are a high-value target for AI assistance — they're often inconsistently described, dense with jargon, and inaccessible to non-specialist users.

**What AI can help with:**
- Drafting accessible summaries of collection scope and content notes
- Generating item-level descriptions from scanned documents
- Creating plain-language overviews of complex finding aids
- Translating archival terminology into patron-facing language

**Workflow that works:**
1. Identify collections with minimal or outdated description
2. Use AI to draft enhanced descriptions based on existing finding aid content
3. Have an archivist review for accuracy and authority compliance
4. Publish enhanced finding aids

The caveat: AI-generated archival description requires careful review for factual accuracy and appropriate handling of sensitive materials (records relating to living individuals, indigenous community materials with access restrictions, etc.).`,
        },
        {
          heading: "Accessibility: transcription and alt-text",
          body: `Two AI applications for accessibility are mature enough to use in production:

**AI transcription:** Tools like Whisper (open source), Otter.ai, and Rev AI can transcribe audio and video materials with reasonable accuracy. For oral history collections, AV special collections, or library instruction recordings, AI transcription dramatically reduces the labor barrier to providing transcripts.

Accuracy varies by audio quality, accents, and technical vocabulary. Always review AI transcripts before publishing — but even imperfect transcripts improve accessibility compared to no transcript.

**AI alt-text generation:** AI can generate draft alt-text for images in digital collections. The draft requires human review for accuracy and appropriate description, but it accelerates the process significantly.

Both applications move the work from "labor-prohibitive" to "labor-reduced-with-review." For large collections with accessibility debt, this is a meaningful change.`,
        },
        {
          heading: "Institutional repositories and AI",
          body: `Institutional repositories (IR) often accumulate records with inconsistent or minimal metadata. AI can address this at scale.

**High-value IR applications:**
- Generating enhanced descriptions for poorly-described items
- Suggesting subject terms and keywords for improved discoverability
- Normalizing author names and institutional affiliations
- Identifying potential duplicates

**Electronic resource management:**
AI tools are beginning to appear in the ERM space — for license review, database comparison, and usage analysis. These are early-stage and vendor-driven. If your institution is evaluating new ERM tools, ask specifically about AI features.

The practical starting point for most digital librarians: identify your biggest metadata quality problem in the IR, and start there. AI batch processing may address it faster than manual remediation.`,
        },
      ],
    },
  },

  {
    id: 10,
    slug: "prompt-library-for-library-work",
    title: "Prompt library for library work",
    level: "applied",
    audience: "both",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.3", "4.1"],
    topics: [
      "What a prompt library is and why it matters",
      "Building reusable prompts by task type",
      "Claude Projects for persistent library workflows",
      "Sharing prompts across departments and institutions",
      "Maintaining and improving your prompt library over time",
    ],
    objectives: [
      "Build a personal prompt library with at least ten reusable prompts for your library work",
      "Set up a Claude Project (or equivalent) with persistent context for a recurring workflow",
      "Share prompts effectively with colleagues so they can adapt them for their own use",
      "Explain why a prompt library reduces variability in AI output",
      "Develop a lightweight process for adding to and improving your prompt library",
    ],
    estimatedMinutes: 40,
    status: "published",
    isGap: false,
    description:
      "The difference between occasional AI users and power users is a prompt library. This module teaches you to build one — systematically capturing what works so you don't start from scratch every time.",
    relatedModules: [
      "talking-to-ai-effectively",
      "reference-and-instruction",
      "automating-repetitive-tasks",
    ],
    content: {
      intro:
        "The first time a prompt works well, most people just... move on. Next time they need a similar output, they start from scratch and get different, usually worse results. A prompt library is the habit of not letting that happen. Here's how to build one that actually gets used.",
      sections: [
        {
          heading: "What belongs in a prompt library",
          body: `A prompt library is a collection of prompts that have proven to produce useful output for specific, recurring tasks. It's not a dump of every prompt you've ever tried — it's a curated set of prompts that work.

**Categories that matter for library work:**

*Reference & patron communication:*
- Subject guide descriptions (by discipline)
- Patron email responses (by inquiry type)
- FAQ content
- Research consultation preparation

*Instruction:*
- Lesson plan drafts (by session length and level)
- Learning objectives by topic
- Active learning activity ideas
- Assessment question sets

*Administrative:*
- Annual report sections
- Grant narrative segments
- Policy draft frameworks
- Meeting agendas

*Research support:*
- Search strategy development
- Document summary and synthesis
- Citation formatting assistance

Start with the tasks you do most frequently. Add prompts as you find ones that work.`,
        },
        {
          heading: "Anatomy of a reusable prompt",
          body: `A good reusable prompt has variables you can fill in for each use. Use brackets to mark what changes:

**Email prompt (reference inquiry):**
"You are an academic librarian at a [institution type] library. A [patron type] has asked the following question: [paste question]. Write a 150-word email response that [tone instructions]. Include [specific elements]. Do not [what to avoid]."

**Lesson plan prompt:**
"I have [time] with a [course level] class in [discipline]. Their assignment is [assignment type]. They will be using [databases/tools]. Draft a lesson plan with a hook (2 minutes), core content (35 minutes), and one active learning activity. Target audience has [experience level] with library research."

**Subject guide description:**
"Write a 60-word description of [database name] for [student population] writing [assignment type] in [discipline]. Plain language, no jargon. Include what the database covers and one specific use case."

The bracketed variables mean you can adapt the same prompt for different contexts without rewriting from scratch.`,
        },
        {
          heading: "Claude Projects for persistent library workflows",
          body: `Claude Projects (and similar features in other AI tools) let you create a persistent space with:
- Custom instructions that apply to every conversation in that project
- Files and documents the AI can reference
- A history of conversations in that context

For library work, a useful Project setup might be:

**Reference Desk Project:**
- Custom instructions: your institution, your patron population, your role, preferred communication tone
- Uploaded files: library policies, hours, database list, FAQ document
- Every patron email draft happens here — the AI always knows your context

**Instruction Project:**
- Custom instructions: the course types you support, your institution's learning outcomes
- Uploaded files: existing lesson plans, your information literacy framework, sample assignments
- New lesson plan drafts draw on everything you've already built

The practical advantage: you stop re-explaining yourself with every new conversation. Setup takes an hour. The saved context pays for that hour quickly.`,
        },
        {
          heading: "Sharing prompts across your library",
          body: `Prompt sharing multiplies the value of prompt library work. One librarian's tested prompt becomes the department's baseline.

**Simple sharing options:**
- A shared Google Doc organized by task type
- A dedicated section in your team's project management tool
- A LibGuide visible to staff (not patrons) with prompts and notes on what they're for

**What to include when sharing a prompt:**
- The prompt itself
- What output it produces (a brief description)
- When to use it (the task it's designed for)
- Any notes on what to adjust for different contexts
- The AI tool it was developed on (prompts don't always transfer perfectly between tools)

Prompts shared without context get ignored. Prompts shared with a brief "here's what this does and when I use it" get adopted.`,
        },
        {
          heading: "Maintaining your prompt library",
          body: `A prompt library has a half-life. AI models update. Tasks evolve. What produced great output six months ago may need adjustment.

**Maintenance practices that work:**
- Date your prompts when you add them
- Flag prompts that have been reliably useful ("this one works for ENG 101 sessions")
- Review and prune annually — remove prompts for tasks you no longer do
- When AI model versions change significantly, retest your most-used prompts
- Add a "last tested" note so colleagues know if a prompt is current

The goal isn't a perfect static library — it's a living document that reflects what's currently working. Even an imperfect, partially outdated prompt library is dramatically more efficient than starting from scratch every time.`,
        },
      ],
      practitionerNote:
        "My most-used prompt is for reference email responses. I paste the patron's question, run it through my template, and edit the output. It gets me to a first draft in 30 seconds that would have taken me 5 minutes. At 10 emails a day, that's a meaningful time saving over a semester.",
    },
  },

  {
    id: 11,
    slug: "making-the-case-to-administration",
    title: "Making the case to administration",
    level: "applied",
    audience: "both",
    acrlCompetencies: ["ethics", "application"],
    acrlSubCompetencies: ["1.4", "1.5", "4.2"],
    topics: [
      "Framing AI adoption for skeptical leadership",
      "Policy templates and responsible piloting",
      "Measuring and reporting AI impact",
      "Budget framing for AI tools and training",
      "The U.S. confidence gap: why U.S. libraries are behind their global peers",
    ],
    objectives: [
      "Present a case for AI adoption using data and framing appropriate for your institutional context",
      "Draft or contribute to an institutional AI acceptable use policy",
      "Design a small AI pilot with measurable outcomes",
      "Identify and frame the business case for an AI tool in terms administration will respond to",
      "Use the U.S. vs. global AI adoption data to frame urgency without alarmism",
    ],
    estimatedMinutes: 40,
    status: "published",
    isGap: false,
    description:
      "You've tried AI, you've seen the value, and now you need to bring your institution along. This module covers the practical advocacy work: how to frame the case, what data to use, and how to run a pilot that builds institutional confidence.",
    relatedModules: [
      "ethics-copyright-policy",
      "ai-for-research-support",
      "your-ai-strategy-next-steps",
    ],
    content: {
      intro:
        "The biggest barrier to AI adoption in libraries isn't usually the tools — it's the conversation with leadership. Administration may be skeptical, risk-averse, or simply uninformed. Your job is to be the informed voice that helps them make good decisions, not to sell them something.",
      sections: [
        {
          heading: "The data that makes the case",
          body: `Two sets of data are useful for administrative conversations:

**Where libraries are:**
The Pulse of the Library survey (Clarivate, 2024/2025) is the authoritative benchmark. Key figures:
- 69% of academic libraries were evaluating, planning, or implementing AI as of 2024
- 67% of all libraries exploring or implementing AI as of 2025 (Pulse of the Library 2025)
- 32% of librarians report no training available at their institution (2024 global figure; 43% in the U.S.)

**The U.S. confidence gap:**
The 2025 Pulse data reveals a striking regional pattern. Only **7% of U.S. librarians** report optimism about AI, compared to 27–31% in Asia and the rest of the world. U.S. libraries are also significantly behind in implementation stages — 14–16% at initial implementation or beyond, compared to 37–40% in Asia and Europe.

This data reframes the conversation from "should we experiment with AI" to "we are behind our global peers, and the gap is widening." That's a different kind of urgency — one that resonates with administrators who are already thinking about institutional positioning.`,
        },
        {
          heading: "Framing for different types of skepticism",
          body: `**Risk-averse administration:** Lead with risk mitigation. "AI adoption without policy creates more risk than adoption with policy. Here's a responsible pilot framework." Emphasize the controlled, reversible nature of a pilot. Emphasize ACRL and ARL authority.

**Cost-focused administration:** Lead with efficiency. Calculate the time savings on specific tasks your library currently does. Even rough estimates are useful: "If AI saves each librarian 30 minutes per day on email and drafting, that's 65 hours per year per FTE. At our salary level, that's $X."

**"We don't need this yet" administration:** Use the 7% U.S. optimism data carefully. Frame it as: institutions that build AI capacity now will be positioned to support AI-literate graduates. Those that wait will be playing catch-up. This is about student outcomes, not just efficiency.

**Faculty skepticism (different audience, related argument):** Reference the ACRL AI Competencies — this is the profession's answer to how libraries should engage with AI. We're not ahead of the curve; we're following the professional framework.`,
        },
        {
          heading: "Designing a pilot that builds confidence",
          body: `A good AI pilot has four characteristics:
1. **Bounded scope:** One tool, one use case, one team, defined time period
2. **Measurable outcome:** Time savings, patron satisfaction, output quality, error rate
3. **Low stakes:** Start with internal administrative work, not patron-facing services
4. **Built-in review:** A defined point at which you evaluate results and decide whether to expand

**Low-stakes starting pilots for academic libraries:**
- AI-assisted drafting of internal communications (30-day pilot, measure time spent)
- AI-assisted subject guide improvement (before/after patron usability)
- AI transcription of library instruction sessions for captioning purposes

Report results in terms administration understands: time, cost, patron impact. Avoid describing the tools in technical terms.`,
        },
        {
          heading: "Policy templates and the ARL framework",
          body: `If your institution doesn't have an AI acceptable use policy, your library can model one. Start with the ARL Guiding Principles (2024) as the foundational document.

A minimum viable library AI policy covers:
- Which tools are approved for staff use
- What patron data can and cannot be entered into AI tools
- Disclosure requirements when AI is used in patron-facing work
- Who is responsible for reviewing AI output before it's published or used

Policy templates from peer institutions are available through EDUCAUSE and library association networks. It's much faster to adapt an existing policy than to write from scratch.

The advocacy point: if your library writes the draft policy, you own the framework. If you wait for IT or legal to write it without library input, you may end up with a policy that doesn't reflect library-specific obligations.`,
        },
      ],
    },
  },

  // ─── LEVEL 3: ADVANCED (coming soon at launch) ────────────────────────────

  {
    id: 12,
    slug: "automating-repetitive-tasks",
    title: "Automating repetitive tasks",
    level: "advanced",
    audience: "both",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.1", "4.4"],
    topics: [
      "What's worth automating — the decision framework",
      "Zapier and Make with AI integrations",
      "Automated email drafts and triage",
      "Batch document processing",
      "Real before/after time examples from library workflows",
    ],
    objectives: [
      "Identify three to five tasks in your current workflow that are worth automating",
      "Build a basic automation connecting two library tools using Zapier or Make",
      "Apply AI to a batch processing task that previously required manual effort",
      "Calculate the time ROI of an automation you've built",
      "Understand when automation is appropriate and when human judgment is required",
    ],
    estimatedMinutes: 60,
    status: "coming-soon",
    isGap: true,
    description:
      "The first library automation course designed for non-programmers. You'll learn to identify what's worth automating, build your first real automations using visual tools, and see concrete time savings in your actual workflow.",
    relatedModules: [
      "agentic-ai-what-it-means",
      "vibe-coding-for-librarians",
      "ai-library-systems-integration",
    ],
  },

  {
    id: 13,
    slug: "agentic-ai-what-it-means",
    title: "Agentic AI — what it means",
    level: "advanced",
    audience: "both",
    acrlCompetencies: ["knowledge", "application"],
    acrlSubCompetencies: ["2.1", "4.4"],
    topics: [
      "What AI agents are and how they differ from chatbots",
      "Multi-step autonomous task execution",
      "Claude Projects as a light agentic tool",
      "Custom instructions and memory",
      "Real library use cases for agentic AI",
    ],
    objectives: [
      "Explain what an AI agent is and how it differs from a standard AI chatbot",
      "Set up a Claude Project with custom instructions and persistent context for a library workflow",
      "Identify at least two library workflows where agentic AI would reduce manual work",
      "Understand the risks of agentic AI and when human oversight is required",
      "Evaluate whether an agentic AI approach is appropriate for a specific library task",
    ],
    estimatedMinutes: 50,
    status: "coming-soon",
    isGap: true,
    description:
      "AI agents take actions rather than just answering questions. Understanding what they are — and what library workflows they could handle — is the next frontier for digital librarians.",
    relatedModules: [
      "automating-repetitive-tasks",
      "vibe-coding-for-librarians",
      "ai-library-systems-integration",
    ],
  },

  {
    id: 14,
    slug: "vibe-coding-for-librarians",
    title: "Vibe coding for librarians",
    level: "advanced",
    audience: "both",
    acrlCompetencies: ["application"],
    acrlSubCompetencies: ["4.4", "4.1"],
    topics: [
      "Building functional tools without programming knowledge",
      "Plain language to working app — the vibe coding workflow",
      "Tools: Lovable, Replit, Claude Code",
      "Real library tools built this way",
      "When to build vs. when to ask your vendor",
    ],
    objectives: [
      "Build a simple functional tool (quiz, calculator, or form) using plain-language prompts to an AI",
      "Describe the vibe coding workflow and how it differs from traditional software development",
      "Identify three library problems that could be solved with a custom-built tool",
      "Evaluate when building a tool is the right approach vs. configuring an existing one",
      "Share or deploy a simple tool you've built for library use",
    ],
    estimatedMinutes: 75,
    status: "coming-soon",
    isGap: true,
    description:
      "The first practitioner-focused vibe coding curriculum for librarians — anywhere. No programming required. You'll describe what you want in plain English and watch it become a working tool. We'll build real library tools together.",
    relatedModules: [
      "automating-repetitive-tasks",
      "agentic-ai-what-it-means",
      "ai-library-systems-integration",
    ],
  },

  {
    id: 15,
    slug: "ai-library-systems-integration",
    title: "AI & library systems integration",
    level: "advanced",
    audience: "digital",
    acrlCompetencies: ["application", "analysis"],
    acrlSubCompetencies: ["4.1", "4.4", "3.2"],
    topics: [
      "APIs explained without jargon",
      "Connecting AI to your ILS",
      "Repository automation",
      "Data pipelines for library systems",
      "Build vs. configure vs. ask your vendor",
    ],
    objectives: [
      "Explain what an API is and how it enables AI integration with library systems",
      "Identify integration opportunities between your ILS and AI tools",
      "Evaluate whether to build, configure, or advocate for a vendor feature",
      "Understand the data pipeline concept in the context of library systems",
      "Read basic API documentation well enough to evaluate integration possibilities",
    ],
    estimatedMinutes: 60,
    status: "coming-soon",
    isGap: true,
    description:
      "For digital librarians ready to connect AI to the systems they manage — ILS, repositories, discovery layers — without a computer science degree. This module demystifies APIs and shows you what's actually possible.",
    relatedModules: [
      "automating-repetitive-tasks",
      "vibe-coding-for-librarians",
      "metadata-and-cataloging",
    ],
  },

  {
    id: 16,
    slug: "your-ai-strategy-next-steps",
    title: "Your AI strategy & next steps",
    level: "advanced",
    audience: "both",
    acrlCompetencies: ["ethics", "analysis", "application"],
    acrlSubCompetencies: ["2.3", "1.5", "4.2"],
    topics: [
      "Building a department AI roadmap",
      "Staying current without being overwhelmed",
      "Contributing to the profession",
      "Conference speaking on AI topics",
      "Community building and peer networks",
    ],
    objectives: [
      "Draft a 12-month AI learning and implementation roadmap for yourself or your department",
      "Identify two or three communities of practice for ongoing AI professional development",
      "Outline a conference presentation proposal on a library AI topic",
      "Develop a system for staying current with AI developments in library contexts",
      "Define your own position and contribution as a practitioner voice in the AI conversation",
    ],
    estimatedMinutes: 45,
    status: "coming-soon",
    isGap: true,
    description:
      "Completing this curriculum is a beginning. This module helps you build the ongoing practice, community, and professional presence that turns a learning journey into a professional identity.",
    relatedModules: [
      "making-the-case-to-administration",
      "automating-repetitive-tasks",
      "vibe-coding-for-librarians",
    ],
  },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByLevel(level: string): Module[] {
  return modules.filter((m) => m.level === level);
}

export function getPublishedModules(): Module[] {
  return modules.filter((m) => m.status === "published");
}

export const levelMeta = {
  foundations: {
    label: "Level 1: Foundations",
    shortLabel: "Foundations",
    description:
      "Build your AI foundation — how it works, how to talk to it, which tools to use, and how to think critically about what it produces.",
    color: "forest",
    number: 1,
    slug: "foundations",
    audience: "Both audiences",
  },
  applied: {
    label: "Level 2: Applied",
    shortLabel: "Applied",
    description:
      "Put AI to work in real library workflows — research support, instruction, metadata, reference, and making the case to leadership.",
    color: "navy",
    number: 2,
    slug: "applied",
    audience: "Role-split",
  },
  advanced: {
    label: "Level 3: Advanced",
    shortLabel: "Advanced",
    description:
      "Build, automate, and integrate — the modules no one else is teaching. Vibe coding, agentic AI, workflow automation, and systems integration.",
    color: "amber",
    number: 3,
    slug: "advanced",
    audience: "Both audiences",
  },
} as const;

export const acrlCompetencyMeta = {
  ethics: { label: "Ethical Considerations", short: "Ethics" },
  knowledge: { label: "Knowledge & Understanding", short: "Knowledge" },
  analysis: { label: "Analysis & Evaluation", short: "Analysis" },
  application: { label: "Use & Application", short: "Application" },
} as const;
