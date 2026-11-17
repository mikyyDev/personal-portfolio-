import React from "react";
import type { SkillFilter } from "./types";

interface SkillsFilterProps {
  activeFilter: SkillFilter;
  onFilterChange: (filter: SkillFilter) => void;
}

const filterOptions: { id: SkillFilter; label: string }[] = [
  { id: "all", label: "All Architecture" },
  { id: "backend", label: "Backend & APIs" },
  { id: "ai", label: "AI & LLMs" },
  { id: "database", label: "Databases & Cache" },
  { id: "devops", label: "DevOps & Tools" },
  { id: "frontend", label: "Frontend & UI" },
];

export const SkillsFilter: React.FC<SkillsFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {filterOptions.map((option) => {
        const isActive = activeFilter === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onFilterChange(option.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border border-transparent shadow-sm"
                : "bg-white dark:bg-white/5 text-neutral-700 dark:text-neutral-400 border border-neutral-200/90 dark:border-white/10 shadow-2xs hover:bg-neutral-50 dark:hover:bg-white/10 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

