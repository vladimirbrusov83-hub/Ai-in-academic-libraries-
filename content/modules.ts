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
        "When I first began using AI at my reference desk, I treated it like a search engine: I typed in a question and expected a correct answer. It is evident that this approach did not serve me well, not because the tool itself was inadequate, but because I did not understand what it was actually doing. In order to use AI effectively in library work, one must first develop a foundational understanding of how it functions. Once I built that understanding, my practice changed entirely.",
      sections: [
        {
          heading: "AI is a prediction machine, not a knowledge database",
          body: `When a librarian types a question into ChatGPT or Claude, the model does not look up an answer. Instead, it predicts what text should come next, based on patterns it learned from billions of documents during training. For example, if a question concerns the history of interlibrary loan, the model draws on whatever was written about that topic in its training data and constructs a plausible-sounding response. It is an extraordinarily sophisticated pattern-matcher, but it is not retrieving stored facts.

Such a distinction matters considerably for library practice. A database returns records; a search engine returns links; AI generates text that sounds plausible based on what it has learned. Plausible is not the same as accurate, and this difference has significant implications for how librarians integrate these tools into their professional work.`,
        },
        {
          heading: "Why the same question gets different answers",
          body: `AI responses are probabilistic in nature. Each time a question is posed, the model samples from a range of probable next words, which means the same prompt can yield meaningfully different responses on different occasions. For example, a reference librarian who asks Claude to draft a database instruction email on Monday may receive a response with different emphasis and phrasing than the same prompt produces on Friday. Indeed, this variability can occur even within a single conversation.

Such unpredictability has direct implications for library practice: one cannot treat AI output as a stable, citable source, nor assume that because AI produced a particular answer once, it will produce the same answer again. It is useful to think of AI as a well-read colleague who may phrase the same explanation differently each time one asks, and whose responses must therefore be evaluated on their own terms rather than assumed consistent.`,
        },
        {
          heading: "What AI does well (and what it doesn't)",
          body: `There is no doubt that AI performs certain tasks reliably and others poorly. Understanding this distinction is essential for integrating these tools into library workflows effectively. AI demonstrates consistent strength in the following areas:
- Drafting and editing: emails, lesson plans, LibGuides, patron-facing text
- Summarizing long documents in accessible language
- Generating options and variations — for example, five different ways to explain a concept to different audiences
- Explaining complex topics in simpler terms for patrons unfamiliar with scholarly conventions
- Identifying patterns in text that the librarian provides directly
- Brainstorming and ideation at the planning stage of a project

However, AI regularly fails in ways that carry significant risk for library practice:
- Specific facts, dates, and statistics — the model will fabricate these confidently and without acknowledgment
- Current events after its training cutoff date
- Precise citations — it generates plausible-looking references that often do not exist
- Anything requiring verified, authoritative retrieval
- Recognizing the limits of its own knowledge

Such patterns make the professional role of the librarian indispensable. AI functions as a drafting and thinking partner, not as a reference source, and the distinction must inform every decision about how and when to use it.`,
        },
        {
          heading: "The three types of AI you will encounter",
          body: `**Generative AI** creates new content: text, images, audio. ChatGPT, Claude, Gemini, and Perplexity all fall into this category. This is what most librarians are currently experimenting with, and it is the primary focus of Levels 1 and 2 of this curriculum.

**Predictive AI** makes recommendations based on patterns. For example, the "you may also like" systems embedded in discovery layers and integrated library systems represent predictive AI that libraries have used for years, often without describing it as AI at all. Such systems are familiar, if not always recognized as such.

**Agentic AI** takes autonomous actions: it does not simply respond to prompts but executes multi-step tasks with limited human intervention. This is a newer and rapidly evolving category, covered in depth in Module 13. Additionally, understanding how agentic AI differs from generative AI is becoming increasingly important for librarians involved in systems and workflow decisions.`,
        },
        {
          heading: "A word on hype and skepticism",
          body: `Interestingly enough, I find it useful to hold two seemingly contradictory positions simultaneously: AI tools are genuinely useful for library work at this moment, and they are also overhyped in ways that create real professional risks. There is no doubt that neither uncritical enthusiasm nor reflexive skepticism serves librarians well in this environment. Both positions, taken alone, prevent the kind of calibrated professional judgment that good practice requires.

The ACRL AI Competencies framework identifies skepticism as a guiding mindset alongside curiosity, and that pairing is deliberate. We are meant to explore and question at the same time. Such dual orientation is precisely what librarians have always brought to information evaluation, and it applies equally well to AI.

In order to develop this calibrated stance, I have found it most useful to treat AI as a capable but unreliable research assistant. One would use a capable assistant. One would also verify their work. This frame has guided my practice more reliably than either enthusiasm or resistance alone.`,
        },
      ],
      practitionerNote:
        "At my community college library, I found that explaining AI to skeptical faculty became considerably easier once I had this mental model. In order to address their concerns productively, I did not need to defend AI or dismiss the risks they raised. Instead, I could explain exactly why the model generates inaccurate information and what that means for how we use it responsibly. Such conversations tend to build trust in a way that advocacy for AI never does.",
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
        "The most significant skill gap I observe among librarians beginning to use AI is not about knowing which tool to select. It is about knowing how to communicate with it. A vague prompt produces a vague answer; a specific, context-rich prompt produces something one can actually use. In order to close that gap, this module examines the structure of effective prompting and the practice of iterative refinement that separates occasional users from proficient ones.",
      sections: [
        {
          heading: "The anatomy of a good prompt",
          body: `A useful prompt has four elements. Not every task requires all four, but understanding them allows a librarian to construct prompts deliberately rather than by trial and error.

**Role:** Tell the AI who it is. For example: "You are an experienced academic librarian working at a community college with a large first-generation student population."
**Task:** Tell it exactly what you want: "Write a 200-word email to faculty explaining our new database access policy."
**Context:** Give it the information it needs: "The email is for a first-year writing course whose instructor has not responded to previous outreach and may be skeptical about library instruction."
**Format:** Tell it how to structure the output: "Use a friendly but professional tone. Three short paragraphs. No bullet points."

Consider, for example, the difference between these two prompts: a vague request such as "Write me an email about our library databases" and a specific one such as "You are a reference librarian at a community college. Write a friendly 150-word email to first-year students introducing them to three library databases they will use for English Composition papers: JSTOR, Academic Search Complete, and ProQuest. Include one sentence about how to get help. No jargon." The second prompt produces something one can send with minimal editing. Such specificity is the core skill this module develops.`,
        },
        {
          heading: "Iteration is the skill",
          body: `Most users send one prompt, receive one response, and either accept it or abandon the attempt. This approach does not reflect how AI works most effectively. Iteration — following up, refining, redirecting — is where the genuine value lies, and it is the practice that most librarians do not develop without deliberate effort.

After receiving a first response, consider follow-up prompts such as: "Make this shorter — two paragraphs instead of four"; "This sounds too formal — make it warmer and more approachable"; "The second section does not address what I need; here is what I actually require: [specifics]"; or "Give me three alternative versions of just the opening sentence." Additionally, one might ask the AI to reframe the same content for a different audience entirely, which often produces a more useful draft than revising the original.

In order to use iteration effectively, one must continue the existing conversation rather than beginning a new one. The AI retains context within a session, and that accumulated context shapes the quality of subsequent responses. Such continuity is a significant advantage that users who restart conversations repeatedly do not access.`,
        },
        {
          heading: "System prompts and custom instructions",
          body: `Most AI tools allow users to set persistent instructions — text that applies to every conversation automatically. This is where a librarian tells the AI what it should always know about the context of the work.

For library practice, useful custom instructions include information such as institution type and student population (for example, "I work at a community college serving many first-generation college students and students returning to higher education after a gap"), professional role ("I am a reference and instruction librarian responsible for both walk-in reference and embedded instruction"), preferred output style ("Always use plain language; avoid jargon; use active voice"), and explicit exclusions ("Never suggest citing Wikipedia as a primary source in a research context").

Setting this up once eliminates the need to re-explain context in every conversation. Such persistent instructions are especially valuable for librarians who use AI daily for recurring task types. In ChatGPT, this feature appears as "Custom Instructions" in account settings. In Claude, it functions as "Custom Instructions" or as a Project with persistent context. In Gemini, it is accessible through account settings as well. Indeed, this single setup step often produces a measurable improvement in output quality across all subsequent uses.`,
        },
        {
          heading: "When to give AI information versus ask for information",
          body: `There are two fundamentally different modes of AI prompting, and understanding which mode a given task requires changes how one writes the prompt and evaluates the output.

**Information-in:** The librarian shares a document, email, or draft and asks AI to work with it. For example: "Here is a LibGuide I drafted. Improve the clarity of the introduction and suggest more descriptive section headings." This mode is considerably more reliable because AI is working with content the user has provided rather than generating facts from training data. Such grounding in provided materials reduces hallucination risk substantially.

**Information-out:** The librarian asks AI to produce information it does not already have in front of it. For example: "What are the most useful databases for nursing research?" This mode requires more verification because AI is drawing on training data that may be outdated, incomplete, or imprecise regarding specialized library resources.

In order to get the most reliable results in daily library workflows — drafting, editing, summarizing, brainstorming — one should default to the information-in mode. This means pasting in the document one is working on, sharing a draft rather than asking for one from scratch, and providing the patron's question verbatim rather than paraphrasing it. Such an approach produces better output and requires substantially less verification.`,
        },
      ],
      practitionerNote:
        "My most reliable prompt practice for reference work involves vague patron questions. When a patron's question is unclear or underspecified, I paste the question into Claude and ask it to generate five clarifying questions I could ask the patron in order to better understand their need. This approach surfaces angles I would not have considered independently, particularly for research topics outside my subject expertise. Such a practice takes approximately thirty seconds and consistently improves the quality of the reference interaction that follows.",
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
    status: "published",
    isGap: true,
    description:
      "The first library automation course designed for non-programmers. You'll learn to identify what's worth automating, build your first real automations using visual tools, and see concrete time savings in your actual workflow.",
    relatedModules: [
      "agentic-ai-what-it-means",
      "vibe-coding-for-librarians",
      "ai-library-systems-integration",
    ],
    content: {
      intro:
        "I spent a long time doing the same things over and over. Every Monday: pull usage stats, paste them into a spreadsheet, email the summary to my director. Every semester: manually update twenty-two subject guide footers with the new library hours. Every week: copy patron questions from our chat system into a tracking doc. None of these tasks required a librarian's judgment. They required a librarian's time. Automation gave that time back.",
      sections: [
        {
          heading: "How to decide what's worth automating",
          body: `Not every repetitive task is worth automating. The decision has four parts:

**Frequency:** Does this happen daily or weekly? Monthly tasks rarely justify the setup time. Daily tasks almost always do.

**Consistency:** Does the task follow the same steps every time? Automation handles consistent processes well. Tasks that require judgment each time are better handled by a human — possibly with AI assistance, but not fully automated.

**Volume:** Are you doing this once or dozens of times? A batch of 200 records is worth automating. A batch of 5 probably isn't.

**Error cost:** What happens if the automation makes a mistake? Automating an internal tracking spreadsheet has low error cost. Automating patron-facing communications has higher error cost and needs more careful setup and review.

A quick framework: if you can describe the task in a numbered list of steps with no judgment calls between steps, it's a candidate for automation. If the list has "then decide based on context" anywhere in it, that step still needs a human.`,
        },
        {
          heading: "Zapier for library workflows — starting simple",
          body: `Zapier is the most accessible automation tool for non-technical users. It connects apps using a simple "when this happens, do that" structure called a Zap.

**How it works:** You pick a trigger (an event in one app) and an action (something that happens in another app as a result). Zapier handles the connection between them.

**Library workflows that work well as Zapier automations:**

*Form → Spreadsheet → Notification:*
When a patron submits a research consultation request form (Google Forms, Typeform, LibCal), automatically log it to a tracking spreadsheet and send yourself or your team a notification in email or Slack. This replaces manual copy-pasting and ensures nothing gets missed.

*Email → Task:*
When an email arrives in a specific library inbox with certain keywords, automatically create a task in your project management tool (Asana, Trello, Notion). Useful for tracking faculty requests, ILL follow-ups, or vendor correspondence.

*New resource → Announcement:*
When a new item is added to a specific database or list, automatically draft and queue a social media post or newsletter item. Requires a data source that has a trigger event.

**Getting started:** Create a free Zapier account. Choose one task you do manually at least once a week. Build a Zap for it. The interface walks you through trigger and action selection. Start with apps you already use — Google Workspace, Microsoft 365, LibCal, email — because they're likely already in Zapier's library.`,
        },
        {
          heading: "Make (formerly Integromat) for more complex workflows",
          body: `Make handles more complex automation scenarios than Zapier — multiple steps, conditional logic, data transformation, loops. The visual interface shows your workflow as a flowchart, which makes it easier to understand what's happening at each step.

**When Make is better than Zapier:**
- Your workflow has more than two steps
- You need conditional logic ("if the patron type is faculty, do X; if student, do Y")
- You're processing batches of data rather than individual events
- You need to transform data between formats (e.g., extract specific fields from a spreadsheet before sending them somewhere else)

**A library example in Make:**
Automated new database trial notification workflow:
1. Trigger: New row added to a Google Sheet (your database trial tracker)
2. Filter: Only continue if the "Status" column says "Active trial"
3. Action: Use OpenAI to draft a short announcement in your library's voice, based on the database name and description columns
4. Action: Add the drafted announcement to a Google Doc queue for your review
5. After your approval (manual step): Send to newsletter list

This isn't fully automated — you review before sending — but it reduces a 30-minute task to a 5-minute review.

Make's free tier allows 1,000 operations per month, which covers most light library use cases.`,
        },
        {
          heading: "Batch processing with AI — real library use cases",
          body: `Some of the highest-value library automation isn't connecting apps — it's processing batches of text or data with AI. This doesn't require Zapier or Make. It requires a systematic prompting approach.

**Batch email responses:**
If you receive the same types of patron questions repeatedly, build a spreadsheet with question types and your preferred response templates. Use AI to customize each template for the specific patron question. For ten questions, this takes two minutes instead of twenty.

**Batch metadata cleaning:**
Export a CSV of catalog records with inconsistent or missing data. Paste batches of records into Claude or ChatGPT with instructions like: "For each of these records, suggest a corrected and normalized publisher name, and flag any that look like duplicates." Review the output and apply corrections.

**Batch document summarization:**
If you receive monthly vendor reports, assessment surveys, or faculty feedback documents, paste them into AI and ask for a two-paragraph executive summary and a bullet-point list of action items. This works especially well for documents that follow a consistent structure.

**The time math:**
I timed myself doing our monthly chat reference statistics summary manually: 45 minutes. With an AI-assisted workflow (copy stats into Claude, ask for the summary paragraph and comparison to last month): 8 minutes. Over a year, that's roughly 7 hours returned.`,
        },
        {
          heading: "When not to automate — and what automation can't do",
          body: `Automation is powerful when tasks are consistent and low-stakes. It creates real problems when applied to the wrong things.

**Do not automate:**
- Communications that require empathy or individual judgment (patron in distress, sensitive reference question)
- Decisions with meaningful consequences (collection weeding decisions, access policy changes)
- Anything patron-facing without a human review step
- Tasks where the "consistent" assumption is wrong — if there are more exceptions than you realize, automation will handle them badly

**What automation can't replace:**
Professional judgment isn't just doing a task — it's knowing when the standard approach doesn't apply. Automation handles the standard case. The librarian handles everything else.

The ARL "No Human, No AI" principle applies here directly: automation can handle execution, but consequential decisions need a human responsible for them. Design your automations so that the human is in the loop at decision points, not just at the start and end.`,
        },
      ],
      practitionerNote:
        "The automation that changed my workflow most wasn't the most sophisticated — it was a Zapier Zap that automatically logs every new LibCal appointment to a shared tracking spreadsheet and sends a Slack message to our team. Five minutes to set up. Saved us from a missed appointment three weeks later when I was out sick.",
    },
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
    status: "published",
    isGap: true,
    description:
      "AI agents take actions rather than just answering questions. Understanding what they are — and what library workflows they could handle — is the next frontier for digital librarians.",
    relatedModules: [
      "automating-repetitive-tasks",
      "vibe-coding-for-librarians",
      "ai-library-systems-integration",
    ],
    content: {
      intro:
        "The word 'agent' is getting used to mean a lot of different things right now, from simple chatbots with a fancy name to genuinely autonomous systems that can take actions in the world. As a librarian, you don't need to sort out the technical debates. You need to know what's actually available today, what it can do, and where it fits into library work. That's what this module covers.",
      sections: [
        {
          heading: "Agents vs. chatbots — the real difference",
          body: `A chatbot responds to a prompt. An agent pursues a goal.

When you ask ChatGPT to write an email, it writes the email. That's a chatbot interaction — one input, one output, done.

An agent given the same goal might: look at your existing emails to match your tone, check your calendar to see if the meeting is still on, draft the email, wait for your approval, then send it. Multiple steps, some of them taking action in the world (sending email, checking calendar), orchestrated toward a goal rather than responding to a single prompt.

The key characteristics of agentic AI:
- **Multi-step:** Breaks a goal into steps and executes them in sequence
- **Tool use:** Can take actions — search the web, read files, run code, call APIs, send messages
- **Memory:** Can retain information across steps within a task
- **Judgment:** Makes decisions about what to do next based on results

Most of what librarians encounter today sits on a spectrum. Claude Projects and ChatGPT Projects are at the light end — they're not truly autonomous, but they persist context and can do more than a single-turn chatbot. Fully autonomous agents that execute multi-step library tasks without human oversight are emerging but not yet common in library practice.`,
        },
        {
          heading: "Claude Projects — your practical starting point",
          body: `Claude Projects is the most accessible agentic-adjacent tool for library work right now. It's not a full agent — it doesn't take autonomous actions without your input — but it functions as a persistent, context-aware workspace that behaves more like a capable assistant than a search engine.

**What makes a Project different from a regular Claude conversation:**
- Custom instructions persist across every conversation in the project
- You can upload files that Claude references throughout
- Conversation history within the project informs future responses
- You can create multiple projects for different library contexts

**A practical library Project setup:**

*Reference Desk Project:*
Custom instructions: "You are an assistant to a reference librarian at a community college library. Our patron population is primarily first-generation college students and working adults. Always recommend specific databases from our list rather than generic suggestions. Tone: warm, clear, jargon-free."

Uploaded files: Your database list with descriptions. Your library's FAQ document. Your research guide template.

Now every conversation in this project has that context. You don't re-explain yourself. You paste a patron's question and ask: "Draft a response to this patron." Claude knows your institution, your databases, your tone.

*Instruction Design Project:*
Custom instructions: "You help design library instruction sessions. Our students are in 100-level and 200-level courses. Sessions are typically 50 minutes. We follow the ACRL Framework."

Uploaded files: Your existing lesson plans. Sample assignments from common courses.

Ask it: "I have a 50-minute session with ENG 102 next week. They're starting a research paper. Draft a lesson plan." It draws on your existing plans as templates.`,
        },
        {
          heading: "What agentic AI can realistically do in libraries today",
          body: `There's a gap between what vendors claim agents can do and what's practical in library settings right now. Here's an honest assessment.

**Practical today:**
- Multi-step research assistance: agent searches, reads results, synthesizes, asks follow-up questions, produces a structured report
- Document processing pipelines: ingest a set of documents, extract specific information, compile into a structured output
- Conversational interfaces for library FAQs: an agent that can answer questions about library services by referencing a knowledge base you provide
- Workflow assistance: walking through a multi-step process (e.g., guiding a patron through interlibrary loan from start to finish)

**Emerging but not yet reliable:**
- Fully autonomous catalog record creation without human review
- Autonomous management of patron communications
- Multi-system workflows (agent takes action in ILS, sends email, updates spreadsheet) without human approval steps

**Requires careful evaluation:**
Any agentic system that takes action in a patron-facing context. The speed of agentic AI means mistakes propagate quickly. Human oversight at key points isn't optional for patron-facing work.`,
        },
        {
          heading: "Memory and custom instructions — building a persistent assistant",
          body: `The most practically useful agentic feature available today isn't autonomous task execution — it's persistent memory and context. Here's how to use it well.

**Custom instructions are the highest-leverage investment:**
A well-written set of custom instructions for Claude or ChatGPT is essentially a standing briefing for your AI assistant. Spend 30 minutes writing good custom instructions once and benefit from them across every interaction.

What to include in library custom instructions:
- Your institution type and size ("community college, 8,000 students")
- Your patron population characteristics
- Your role and primary responsibilities
- Preferred tone for different outputs (patron-facing vs. internal)
- Specific databases or resources to reference
- What you don't want ("never suggest Wikipedia as a primary source")
- Your institution's stance on AI ("we use AI-generated content with disclosure and review")

**Memory features (where available):**
Some AI tools now offer memory that persists across conversations — not just within a project, but over time. Claude's memory feature (where enabled) and ChatGPT's memory let the AI remember things you tell it to. This is useful for: preferences you've stated, ongoing projects, context about your library that shouldn't need re-explaining.

Treat memory features as a convenience, not a guarantee — always verify that important context is actually in the memory before relying on it for critical work.`,
        },
        {
          heading: "Real library use cases for agentic AI",
          body: `These are use cases that are practical today, not aspirational future scenarios.

**Research consultation preparation:**
Before a scheduled research consultation, give an agent the patron's stated topic and assignment description. Ask it to: identify the most relevant databases, generate a set of preliminary search terms, find any LibGuides relevant to the topic, and draft three clarifying questions to ask the patron. What used to take 15 minutes of preparation takes 3.

**Collection development scanning:**
Set up an agent (or a well-structured Claude Project) to review new title lists from vendors. Upload the list, ask it to flag titles that fit specific collection criteria, check against your existing holdings list (if you upload it), and produce a prioritized recommendation list for your review. You still make the decisions — the agent does the initial filtering.

**Assessment report drafting:**
Upload your raw assessment data (survey results, usage statistics, gate counts). Ask the agent to identify the three most significant trends, draft a two-paragraph narrative summary suitable for your annual report, and list three areas for follow-up investigation. Your review and judgment shape the final product, but the initial synthesis happens in seconds.

**Instruction session follow-up:**
After a library instruction session, upload your notes and any patron feedback. Ask the agent to draft a follow-up email to the course instructor summarizing what was covered and suggesting three ways the library can continue to support the course. Personalized, useful, and done in two minutes.`,
        },
      ],
      practitionerNote:
        "The Claude Project I set up for instruction design paid for the time I spent setting it up within the first week. The biggest change wasn't speed — it was consistency. Sessions I design now start from a better baseline because the project has my best previous lesson plans to draw on.",
    },
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
    status: "published",
    isGap: true,
    description:
      "The first practitioner-focused vibe coding curriculum for librarians — anywhere. No programming required. You'll describe what you want in plain English and watch it become a working tool. We'll build real library tools together.",
    relatedModules: [
      "automating-repetitive-tasks",
      "agentic-ai-what-it-means",
      "ai-library-systems-integration",
    ],
    content: {
      intro:
        "Andrej Karpathy — one of the people who helped build the technology behind modern AI — coined the term 'vibe coding' in early 2025. His description: 'It's not really coding — I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.' He was describing his own workflow as a professional AI researcher. A librarian with no programming background can use exactly the same workflow. This module shows you how.",
      sections: [
        {
          heading: "What vibe coding is — and why it matters for librarians",
          body: `Vibe coding is building software by describing what you want in plain language and letting an AI write the code. You don't write code. You describe the tool, review what the AI builds, tell it what to change, and iterate until it works.

This is genuinely new. For most of the history of software, building a custom tool required either programming knowledge or a budget to hire someone who had it. Libraries have always had unmet tool needs that fell into neither category — too specific for a vendor product, too small to justify a development contract, too complex to build without code.

Vibe coding closes that gap.

**What's possible for a librarian with no programming background:**
- A citation scavenger hunt tool for library instruction
- A database recommendation quiz ("answer three questions, get your best database")
- A research log template that students fill in as they work
- A simple intake form that routes patron requests to the right librarian
- An interactive checklist for evaluating sources
- A subject-specific glossary tool for patrons in a technical field
- A quiz testing whether students can spot a hallucinated citation

None of these require programming. They require being able to describe what you want clearly enough that an AI can build it.

**The one constraint to be honest about:** Vibe-coded tools are functional, not polished enterprise software. They work. They look reasonable. They won't win design awards. For library tools that need to be patron-facing and sustainable, treat vibe coding as a proof-of-concept and rapid prototyping approach. For internal tools, it often works as the final product.`,
        },
        {
          heading: "The three tools to know",
          body: `**Lovable (lovable.dev)**
The most beginner-accessible vibe coding tool. You describe your app in a chat interface, Lovable builds it, and you can see a live preview instantly. Strong for web apps that look good without much effort. Good starting point.

Strengths: Great default design, easy to iterate, live preview. Good for patron-facing tools.
Limitations: Less control over structure; complex logic can be hard to implement precisely.
Free tier: Limited builds. Paid tier ($20/month) for active use.

**Replit (replit.com)**
A development environment with strong AI assistance. More flexible than Lovable — supports more types of projects, more control over the code if you want to look at it. The AI (called "Agent" in Replit) can build more complex things.

Strengths: Very flexible, handles complex requirements, you can see and understand the code if you want to. Good for tools that need to do more unusual things.
Limitations: Less polished defaults; requires slightly more technical comfort to iterate.
Free tier: Functional for most library tool builds.

**Claude (claude.ai) or ChatGPT directly**
You describe a tool in plain language and ask the AI to write the code. The AI produces code you paste into a file and open in your browser. This works for simple self-contained tools (HTML files, calculators, interactive pages).

Strengths: Free, immediate, works for simple tools, you learn what the code does by reading it.
Limitations: You need to know how to open an HTML file in a browser. Iterating is manual.

**Recommendation for starting:** Begin with Lovable for your first project. If you want more control or flexibility on subsequent projects, try Replit.`,
        },
        {
          heading: "The vibe coding workflow — step by step",
          body: `The workflow is the same regardless of which tool you use.

**Step 1: Write a clear description of what you want**
Don't worry about technical terms. Describe the tool like you'd explain it to a colleague who could build anything. Include:
- What it does (the purpose)
- Who uses it (patron, student, librarian)
- What inputs it takes (what the user types or selects)
- What it outputs or shows
- How it should look (roughly — simple, clean, library colors, etc.)

Bad description: "Make me a library app"
Good description: "Build a web page with a simple quiz. It asks 3 multiple-choice questions that test whether a student can identify a hallucinated citation. Each question shows a citation and asks: Real or Hallucinated? After all 3 questions, show the score and a brief explanation of each answer. Use a simple, clean design with a navy blue header."

**Step 2: Let the AI build a first version**
In Lovable or Replit, paste your description and let it generate. In Claude, ask it to write the HTML/JavaScript and copy the result into a file.

**Step 3: Review and iterate**
Look at what was built. It won't be exactly right. Tell the AI what to change:
- "The colors are wrong — use dark green instead of blue"
- "The explanation after each question isn't showing up"
- "Add a 'Start Over' button at the end"
- "Make the text bigger — it's hard to read on a phone"

**Step 4: Test it as a user**
Click through the tool as if you're a patron. Find what doesn't work. Describe the problem to the AI. Repeat.

**Step 5: Share or deploy**
Lovable and Replit both give you a shareable link. For HTML files you've built directly, you can upload to your library website or a simple file host.`,
        },
        {
          heading: "Real library tools built with vibe coding",
          body: `These are examples of tools a librarian with no programming background can build in an afternoon.

**Citation Reality Check (instruction tool)**
A quiz where students are shown five citations — some real, some hallucinated by AI — and have to identify which is which. Immediate feedback. Works in any browser. Share the link before a library instruction session or embed it in a LibGuide.

Build time: approximately 45 minutes including iteration.

**Database Matchmaker (reference tool)**
Three questions: What's your subject area? What kind of information do you need (articles, books, data, news)? What level (introductory, advanced, research)? The tool recommends your library's databases based on the answers. You build the logic; the AI builds the interface.

Build time: approximately 90 minutes including writing the recommendation logic.

**Research Log (instruction support tool)**
A simple form students fill out as they work: their research question, search terms they tried, databases they used, sources they found useful, questions that came up. The form saves entries and lets students export a summary. Useful for scaffolding the research process.

Build time: approximately 60 minutes.

**Accessibility Terms Glossary (patron support tool)**
An interactive glossary for a specific subject area (nursing, legal studies, social work) where patrons can search terms and see plain-language definitions. Built from a list you provide.

Build time: approximately 30 minutes once you have the term list.`,
        },
        {
          heading: "When to build vs. when to configure",
          body: `Vibe coding is not always the right answer. Before you build something, ask:

**Does a tool for this already exist?**
LibCal handles appointment scheduling. LibGuides handles resource organization. Many library ILS platforms have features you haven't explored. Before building, check if configuring an existing tool solves the problem.

**Does it need to integrate with a system?**
If the tool needs to connect to your ILS, Alma, a database, or another system, vibe coding can get you started but may hit limits quickly. Integration usually requires API access and more than vibe coding alone.

**Does it need to be maintained long-term?**
Vibe-coded tools are easy to build and can be fragile to maintain — especially if the person who built them leaves. For tools that need to live for years, the right answer may be a formal development project or a vendor product.

**Is it patron-facing and high-stakes?**
A broken patron-facing tool damages trust. Build it, test it extensively, and have a plan for when something goes wrong.

**When to build:**
- Prototype to test an idea before committing to a real build
- Internal tools used by staff, not patrons
- One-time instruction tools (a quiz, a game, a demonstration)
- Tools so specific to your context that no vendor product could address them
- Anything where the iteration speed of vibe coding is an advantage`,
        },
      ],
      practitionerNote:
        "The first tool I built was a simple citation evaluation quiz for an ENG 101 session. I described it to Claude in about three paragraphs, pasted the HTML into a file, and had something usable in 20 minutes. I've iterated on it several times since. Students engage with it differently than they do with a slideshow — they're doing something, not watching something.",
    },
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
    status: "published",
    isGap: true,
    description:
      "For digital librarians ready to connect AI to the systems they manage — ILS, repositories, discovery layers — without a computer science degree. This module demystifies APIs and shows you what's actually possible.",
    relatedModules: [
      "automating-repetitive-tasks",
      "vibe-coding-for-librarians",
      "metadata-and-cataloging",
    ],
    content: {
      intro:
        "The most common question I hear from digital librarians about AI integration is: 'Is this something I can actually do, or do I need a developer?' The honest answer is: some of it you can do yourself, some of it you can do with help from AI tools, and some of it genuinely requires a developer or a vendor. This module helps you know which is which.",
      sections: [
        {
          heading: "What an API is — without the jargon",
          body: `API stands for Application Programming Interface. Ignore the acronym. What it means in practice: a way for two software systems to talk to each other.

When you search for an article in your discovery layer and it pulls results from multiple databases simultaneously, APIs are how that works. When your ILS updates your website's "hours today" display automatically, that's an API. When a new book order in your acquisitions system creates a record in your catalog, an API is usually involved.

An API is a defined channel with rules: you send a request in a specific format, the other system sends back a response in a specific format. The formats are standardized so different systems can communicate without being built by the same people.

**Why this matters for AI:**
AI tools increasingly have APIs. This means you can connect an AI to other systems — so instead of manually copying text from one place into an AI prompt, the connection is automatic. Your ILS can send records to an AI for processing. Your repository can request AI-generated metadata. Your chat reference tool can use AI to draft responses.

You don't need to build these connections yourself. But understanding that they exist — and what they can do — changes how you evaluate vendor products and what you advocate for with your IT department.`,
        },
        {
          heading: "What's actually possible with your ILS",
          body: `This depends heavily on which ILS you use and your institution's technical environment. Here's a realistic overview.

**Alma (Ex Libris):**
Alma has a well-documented API and an active developer community. Ex Libris also offers LibOW (Library Open Workflow), a no-code/low-code automation platform that connects Alma to external services including AI tools. If you're on Alma, LibOW is worth investigating before building anything custom — it may already do what you need.

Realistic AI integrations for Alma: automated metadata enhancement on import, batch processing of records through an AI service, automated notification workflows, reporting and analytics fed from Alma data.

**Sierra / Innovative:**
Older API architecture but functional. Custom integrations are possible but typically require developer involvement. Check with your vendor about AI integrations on their roadmap.

**Koha (open source):**
As open-source software, Koha is more flexible for custom integrations — if you have technical staff. The community is active and has members building AI-adjacent tools.

**The vendor question:**
Before building any custom integration, ask your ILS vendor: "What AI integrations do you currently support or have on your roadmap?" Vendors are building these features actively. You may be one release away from a supported solution that's better than something you'd build yourself.`,
        },
        {
          heading: "Institutional repositories and AI",
          body: `IR platforms have more accessible AI integration opportunities than ILS systems, partly because they're often simpler systems and partly because the AI use cases (metadata enhancement, description generation, discoverability improvement) are so clear.

**DSpace:**
DSpace has an active community building AI integrations for metadata suggestion and quality control. If your institution runs DSpace, check the DSpace community forums for current developments.

**bepress / Digital Commons:**
Vendor-managed platform with limited custom integration capability. Advocate with your vendor for AI metadata features — they're likely building them.

**Samvera / Hyrax:**
Open-source and highly customizable. Active development community. Good candidate for custom AI integration if you have technical staff or institutional developer support.

**What's practical for most IR administrators today:**
Even without API integration, you can build a semi-automated AI-assisted metadata workflow: export records as CSV, process them through AI in batches (adding descriptions, suggesting subjects, normalizing fields), import the enhanced records back. This is a manual workflow, not an integration, but it's accessible without technical help and produces real improvements.`,
        },
        {
          heading: "Data pipelines — what they are and when you need one",
          body: `A data pipeline is a process that takes data from one place, does something to it, and puts it somewhere else — automatically and repeatedly.

In library contexts, a simple data pipeline might be: pull new catalog records nightly → send them to an AI service for subject enrichment → load the enriched records back into the catalog. This runs automatically on a schedule without manual intervention.

**When you need a pipeline (vs. a one-time batch process):**
- The process needs to run regularly (daily, weekly, on new arrivals)
- The volume is too large to handle manually
- The data source and destination both have accessible APIs

**When a batch process is sufficient:**
- You're doing this once or infrequently
- Volume is manageable manually
- You don't have API access to the systems involved

**Building vs. advocating:**
For most digital librarians without developer support, true data pipelines are not DIY projects. They require API access, server infrastructure, and error handling. The more practical path: advocate for this capability with your vendor or IT department, using the business case from Module 11. Understand what's possible so you can have an informed conversation — not so you can build it yourself.

The exception: if your institution has developer support (a library developer, an IT partner, or even a work-study student with coding skills), you can describe the pipeline you need. Understanding what a pipeline is and what it should do is the hard part — the implementation, with developer help, is more straightforward than it sounds.`,
        },
        {
          heading: "Build vs. configure vs. ask your vendor",
          body: `Every AI integration decision for library systems comes down to this choice. Here's a decision framework.

**Ask your vendor first when:**
- You're on a commercial platform (Alma, Sierra, Digital Commons, etc.)
- The use case is general enough that other libraries likely want it too
- You're not willing to maintain custom code long-term
- Your IT/admin environment restricts what you can install or run

**Configure an existing tool when:**
- A tool exists that does approximately what you need
- The configuration requires no custom code (Zapier, Make, LibOW)
- The time investment is in setup, not development

**Build (with developer support) when:**
- The use case is specific to your institution's workflow
- Vendor products don't address it and won't anytime soon
- You have developer support available
- The benefit justifies the maintenance cost

**Vibe code (from Module 14) when:**
- The tool is standalone, not integrated with a library system
- The use case is for instruction, patron support, or internal use
- No integration with ILS or external databases is needed
- A working prototype is more valuable right now than a polished product

The most common mistake: trying to build what a vendor should provide. If forty libraries need the same metadata enhancement feature, one of them building it is a bad outcome — it should be in the product. Advocate first, build second.`,
        },
      ],
      practitionerNote:
        "I spent three months trying to build a custom integration before asking our ILS vendor directly. Their answer: it's on the roadmap for next release. That conversation took fifteen minutes. The lesson I took from it: always ask the vendor before you build. Sometimes the answer is no. But sometimes it's 'it ships in November.'",
    },
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
    status: "published",
    isGap: true,
    description:
      "Completing this curriculum is a beginning. This module helps you build the ongoing practice, community, and professional presence that turns a learning journey into a professional identity.",
    relatedModules: [
      "making-the-case-to-administration",
      "automating-repetitive-tasks",
      "vibe-coding-for-librarians",
    ],
    content: {
      intro:
        "You've worked through fifteen modules. You have a mental model of how AI works, hands-on experience with tools, a prompt library in progress, and at least one workflow that runs differently than it did before. The question this module addresses is: what now? Not what to learn next — what kind of practitioner do you want to be in the AI conversation your profession is having right now?",
      sections: [
        {
          heading: "Building a 12-month AI roadmap",
          body: `A roadmap is useful not because AI moves slowly enough for plans to hold — it doesn't — but because deciding in advance what you want to accomplish forces prioritization. Without it, you respond to whatever AI news cycle is loudest rather than building deliberately toward something.

**A simple roadmap structure:**

Months 1–3: Deepen practice
Pick two or three workflows where you've experimented with AI and make them systematic. Write prompt library entries for them. Measure the time difference. Build the habit of using AI for those specific tasks before expanding to new ones.

Months 4–6: One visible contribution
Write one thing — a LibGuide, a short article for your library's newsletter, a presentation for a staff meeting — that shares what you've learned with colleagues. The act of explaining forces clarity. The visibility builds your professional reputation.

Months 7–9: Extend to department
Identify one colleague who is curious but cautious about AI. Show them one specific workflow where AI helps you. Don't try to convert skeptics or train your whole team. Find one person and show them one thing.

Months 10–12: Evaluate and reset
What worked? What didn't? What has changed in the AI landscape that changes your approach? Reset the roadmap for the next year based on what you've learned.

This is a personal roadmap, not a departmental one. A departmental AI strategy is a separate project, covered in Module 11.`,
        },
        {
          heading: "Staying current without being overwhelmed",
          body: `The AI news cycle is designed to create urgency. Most of what gets coverage is either further away than it sounds, less relevant to library practice than the headline implies, or a product announcement dressed as a development.

**A sustainable information diet for AI in libraries:**

*Weekly:* LibTech Insights (LTI) — one newsletter covering AI in libraries. Skim the headlines, read what's relevant to your role. This is enough.

*Monthly:* One deeper read — a journal article, a conference proceeding, an ARL or ACRL publication. Library Technology Reports (ALA TechSource) covers AI regularly.

*Annually:* Pulse of the Library (Clarivate) — the benchmark survey. Check the new figures. Update your framing of the field.

*On demand:* When a specific tool or use case comes up in your work, look it up then. Don't pre-research everything.

**What to filter out:**
- Vendor announcements (marketing dressed as news)
- General AI news not specific to library contexts (interesting but rarely actionable)
- "AI will replace librarians" takes (not worth your attention)
- Any claim that a tool is transformative before it's been in practice for at least six months

The ACRL competency 2.3 asks you to "stay current with AI applications via reliable sources." Reliable means curated, professional, and library-specific. Not Twitter. Not press releases.`,
        },
        {
          heading: "Contributing to the profession",
          body: `The practitioner voice in AI conversations about libraries is underrepresented. Most of what gets published comes from vendors, researchers, or administrators. People who actually sit at reference desks and test these tools in real workflows — and write honestly about what they find — are rare and valuable.

**Ways to contribute, ordered by investment:**

*Low investment:*
Comment thoughtfully on LinkedIn posts about library AI. Respond to surveys from professional organizations. Share what you're learning with your immediate colleagues.

*Medium investment:*
Write a short piece for your library's internal newsletter or staff blog. Propose a session at a regional library conference (local is easier to get into than national). Respond to a journal call for practitioner perspectives.

*Higher investment:*
Submit a proposal to a national conference (ALA, ACRL, ER&L). Write a piece for a peer-reviewed library journal. Develop a workshop you could offer to other libraries.

**The practitioner advantage:**
You have something researchers and vendors don't — daily practice in a specific institutional context. The honest answer to "does this AI tool actually help with reference consultations at a community college?" is more valuable than the vendor demo. Write from that specificity.`,
        },
        {
          heading: "Conference speaking on AI topics",
          body: `Conference proposals on AI are getting submitted in large numbers. The ones that get accepted are specific, practitioner-grounded, and honest about limitations.

**What gets rejected:**
- "AI in libraries: an overview"
- "The future of AI and library services"
- Anything that reads like a vendor demo
- Anything that could have been written without actually using AI in a library

**What gets accepted:**
- "What I learned from six months of using AI for research consultations at a community college"
- "Building a custom citation evaluation tool for library instruction with no programming experience"
- "Why our AI pilot failed — and what we did next"
- "Comparing three AI tools for metadata enhancement: what the reviews don't tell you"

**The proposal formula that works:**
State the specific problem. State what you tried. State what you found — including what didn't work. State what attendees will take away. Be honest about context ("this is a community college context with a specific student population").

**Where to start:**
Regional and state library conferences are much more accessible than national ones. A successful regional session is the best credential for a national proposal. ACRL, ALA Annual, and ER&L all have competitive submission processes — a track record of regional speaking helps significantly.`,
        },
        {
          heading: "Community and what comes next",
          body: `The most durable professional development is peer-to-peer. Communities of practitioners sharing what works, what doesn't, and what's changed are more valuable than any static curriculum — including this one.

**Communities worth joining:**

LITA (Library Information Technology Association) — now merged into ALA's Core division. The interest groups and listservs covering library technology are where working practitioners discuss specific tools and implementation challenges.

AIRUS (AI in Reference & User Services) — the most relevant interest group for practicing reference librarians working with AI.

Library Technology Report communities — readers and contributors tend to be thoughtful practitioners, not just cheerleaders.

LinkedIn — noisy, but filtered well (follow specific practitioners, not just hashtags), it surfaces genuine practitioner perspectives. The library AI community on LinkedIn is active and diverse.

**On this portal:**
This curriculum will update as tools and practice evolve. The newsletter is how you'll know when new content publishes or existing content gets revised. The goal of this portal is not to be a static reference — it's to stay current with what's actually happening in library practice.

**A final note:**
The 7% of U.S. librarians who report optimism about AI — from the 2025 Pulse of the Library data — don't need to be a permanent minority. The gap between that 7% and the 27–31% in other parts of the world isn't a technology gap. It's a training gap, a support gap, and a confidence gap. That's exactly what this curriculum was built to address. If it helped, share it with a colleague who's still on the fence.`,
        },
      ],
      practitionerNote:
        "When I started thinking of myself as a practitioner voice rather than just a practitioner, something shifted. I started taking notes on what worked and didn't. I started writing things down. I started saying yes to presenting at staff meetings, then at a regional conference, then here. None of that required being the most technical person in the room. It required being the most honest.",
    },
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
