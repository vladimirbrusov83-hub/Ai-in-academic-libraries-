export type Audience = "practicing" | "digital" | "both";

export type Level = "foundations" | "applied" | "advanced";

export type AcrlCompetency = "ethics" | "knowledge" | "analysis" | "application";

export type ModuleStatus = "published" | "coming-soon";

export interface AcrlSubCompetency {
  code: string;
  label: string;
}

export interface RelatedModule {
  slug: string;
  title: string;
}

export interface ModuleContent {
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
  practitionerNote?: string;
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  level: Level;
  audience: Audience;
  acrlCompetencies: AcrlCompetency[];
  acrlSubCompetencies: string[];
  topics: string[];
  objectives: string[];
  estimatedMinutes: number;
  status: ModuleStatus;
  isGap: boolean;
  description: string;
  content?: ModuleContent;
  relatedModules: string[];
}
