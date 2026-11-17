export type SkillFilter =
  | "all"
  | "backend"
  | "ai"
  | "database"
  | "devops"
  | "frontend";

export interface SkillSubGroup {
  label: string;
  items: string[];
}

export interface BentoSkillTileData {
  id: "backend" | "ai" | "database" | "devops" | "frontend";
  eyebrow: string;
  title: string;
  description: string;
  groups: SkillSubGroup[];
  metricBadge: string;
}

export interface SkillsPhilosophyData {
  title: string;
  description: string;
}

export interface SkillsData {
  eyebrow: string;
  title: string;
  subtitle: string;
  tiles: BentoSkillTileData[];
  philosophy?: SkillsPhilosophyData;
}

export interface SkillsProps {
  data?: SkillsData;
}
