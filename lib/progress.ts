"use client";

import { useCallback, useEffect, useState } from "react";

// Learner progress is stored per-browser only. No account, no server.
const STORAGE_KEY = "ail-progress-v1";
const CHANGE_EVENT = "ail-progress-change";

function read(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const list = raw ? (JSON.parse(raw) as unknown) : [];
    return new Set(Array.isArray(list) ? (list as string[]) : []);
  } catch {
    return new Set();
  }
}

function write(set: Set<string>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
  } catch {
    // Private mode / storage disabled - progress just won't persist.
  }
  // Notify other components mounted on the same page.
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  // `ready` stays false through the first render so server and client markup
  // match; the real value is read in the effect below to avoid hydration errors.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCompleted(read());
    setReady(true);
    const sync = () => setCompleted(read());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((slug: string) => {
    const next = read();
    if (next.has(slug)) next.delete(slug);
    else next.add(slug);
    write(next);
    setCompleted(next);
  }, []);

  const reset = useCallback(() => {
    write(new Set());
    setCompleted(new Set());
  }, []);

  const isComplete = useCallback(
    (slug: string) => ready && completed.has(slug),
    [ready, completed]
  );

  return { completed, ready, toggle, reset, isComplete };
}
