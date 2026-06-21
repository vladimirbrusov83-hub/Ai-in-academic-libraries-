import type { Module } from "@/lib/types";

// The two roles a user can actually pick. "both" is a module tag, never a selection.
export type RoleFilter = "practicing" | "digital";

export const roleMeta: Record<
  RoleFilter,
  { label: string; short: string; color: string }
> = {
  practicing: {
    label: "Practicing Librarian",
    short: "Practicing",
    color: "#6d28d9",
  },
  digital: {
    label: "Digital Librarian",
    short: "Digital",
    color: "#0369a1",
  },
};

export function isRoleFilter(value: string | null | undefined): value is RoleFilter {
  return value === "practicing" || value === "digital";
}

export type AudienceState = "recommended" | "muted" | "neutral";

export function audienceState(module: Module, role: RoleFilter | null): AudienceState {
  if (!role) return "neutral";
  if (module.audience === role) return "recommended";
  if (module.audience === "both") return "neutral";
  return "muted"; // module is tagged for the other role
}
