"use client";

import { useProgress } from "@/lib/progress";

// Small "done" pill shown on module cards once a learner marks a module complete.
export default function CompletionCheck({ slug }: { slug: string }) {
  const { isComplete } = useProgress();
  if (!isComplete(slug)) return null;

  return (
    <span
      className="inline-flex items-center gap-1 rounded-md border border-green-200 bg-green-50 px-1.5 py-0.5 text-[11px] font-semibold text-green-700"
      aria-label="Completed"
    >
      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      Done
    </span>
  );
}
