import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — AI for Academic Libraries",
  description:
    "About this portal — a practitioner-built, ACRL-aligned learning resource for academic librarians, created by a reference and instruction librarian at a community college in St. Louis.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          About this portal
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed">
          Built by a practicing academic librarian who actually tested these tools at the reference desk.
        </p>
      </header>

      {/* Main story */}
      <article className="prose-library mb-12">
        <h2>Who I am</h2>
        <p>
          I&apos;m a reference and instruction librarian at St. Louis Community College. My day-to-day work involves reference consultations, library instruction sessions, subject guide development, and all the unglamorous administrative work that fills the hours in between.
        </p>
        <p>
          I started experimenting with AI tools in earnest in 2024 — first with skepticism, then with growing interest, and eventually with a structured approach to figuring out what actually works in library contexts. Along the way, I noticed two things: most AI training resources either weren&apos;t designed for librarians, or were designed by vendors with something to sell.
        </p>
        <p>
          That&apos;s why I built this. A practitioner-first resource — honest about what AI can and can&apos;t do, rooted in real library workflows, and aligned with the professional framework our field has actually developed for this moment.
        </p>

        <h2>Why this curriculum</h2>
        <p>
          The ACRL published its AI Competencies for Academic Library Workers in October 2025. It&apos;s a good document. But a framework document isn&apos;t a curriculum — it tells you what to know, not how to get there.
        </p>
        <p>
          The Pulse of the Library survey (Clarivate, 2024) found that 69% of academic libraries were evaluating or integrating AI — and 32% of librarians had no training available at their institution. A third of our profession is navigating this shift without any institutional support. That gap is what this portal is for.
        </p>
        <p>
          The Level 3 modules — vibe coding, workflow automation, agentic AI, systems integration — are content that simply doesn&apos;t exist anywhere else in the library sector, as of this writing. I spent time verifying that. The University of Hong Kong library has a vibe coding tab in their AI Literacy LibGuide — it&apos;s good and worth reading. But it&apos;s oriented toward students and researchers, not toward practitioners building tools for library work. That&apos;s the gap this fills.
        </p>

        <h2>What &quot;practitioner voice&quot; means here</h2>
        <p>
          It means I write from experience, not aspiration. When I say &ldquo;at my reference desk,&rdquo; I mean a real place with real students asking real questions. When I describe a workflow, I&apos;ve run it or something close to it.
        </p>
        <p>
          It also means I try to be honest about when things don&apos;t work. AI hallucinates citations. It gives confidently wrong answers. It handles some tasks far better than others, and using it poorly can create more work than it saves. That&apos;s not a reason to avoid it — it&apos;s a reason to learn it well.
        </p>

        <h2>ACRL alignment</h2>
        <p>
          All modules are mapped to the{" "}
          <a
            href="https://www.ala.org/acrl/standards/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-700 transition-colors"
          >
            ACRL AI Competencies for Academic Library Workers (October 2025)
          </a>{" "}
          at the sub-competency level — not just the broad category labels. The curriculum also references the{" "}
          <a
            href="https://www.arl.org/resources/research-libraries-guiding-principles-for-artificial-intelligence/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-700 transition-colors"
          >
            ARL Guiding Principles for Artificial Intelligence (2024)
          </a>
          , particularly Principle 4 — &ldquo;No Human, No AI&rdquo; — which I think is the most important single idea for library practitioners to internalize right now.
        </p>

        <h2>Who this is not for</h2>
        <p>
          This portal is for academic library workers. It&apos;s not designed for public librarians (though much of Level 1 applies broadly), K–12 school librarians, or AI researchers. The examples, workflows, and framing are all academic library contexts — community colleges, liberal arts colleges, research universities.
        </p>

        <h2>What&apos;s next</h2>
        <p>
          Level 3 modules — Automating Repetitive Tasks, Agentic AI, Vibe Coding for Librarians, Systems Integration, and Your AI Strategy — are in development. If you want to be notified when they publish, sign up for the newsletter. No spam, ever.
        </p>
      </article>

      {/* Affiliation note */}
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-5 mb-10">
        <p className="text-sm text-stone-600 leading-relaxed">
          <strong className="text-stone-800">No vendor relationships.</strong>{" "}
          No affiliate links. No sponsored content. Tool mentions reflect genuine evaluation for library use — the same evaluation I&apos;d apply professionally.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/level/foundations"
          className="flex-1 text-center px-5 py-3 rounded-xl font-semibold text-white text-sm"
          style={{ backgroundColor: "#0F6E56" }}
        >
          Start with Level 1: Foundations
        </Link>
        <Link
          href="/curriculum"
          className="flex-1 text-center px-5 py-3 rounded-xl font-medium border border-stone-300 text-stone-700 hover:border-stone-400 text-sm bg-white"
        >
          Browse the full curriculum
        </Link>
        <Link
          href="/newsletter"
          className="flex-1 text-center px-5 py-3 rounded-xl font-medium border border-stone-300 text-stone-700 hover:border-stone-400 text-sm bg-white"
        >
          Join the newsletter
        </Link>
      </div>
    </div>
  );
}
