export interface QuickFact {
  label: string;
  value: string;
  iconName:
    | "education"
    | "experience"
    | "projects"
    | "location"
    | "globe"
    | "focus"
    | "availability";
}

export interface ShippedProjectSummary {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: string;
  techStack: string[];
  metric?: string;
}

export interface AboutProps {
  resumeUrl?: string;
  contactHref?: string;
  projects?: ShippedProjectSummary[];
}
