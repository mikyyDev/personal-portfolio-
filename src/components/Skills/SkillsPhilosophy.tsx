import React from "react";
import { Sparkles } from "lucide-react";
import type { SkillsPhilosophyData } from "./types";

interface SkillsPhilosophyProps {
  philosophy: SkillsPhilosophyData;
}

export const SkillsPhilosophy: React.FC<SkillsPhilosophyProps> = ({
  philosophy,
}) => {
  return (
    <div className="relative overflow-hidden p-6 sm:p-7 rounded-3xl bg-white dark:bg-white/2 border border-neutral-200/90 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-sm shadow-neutral-900/5">
      {/* Decorative gradient blur — dark mode only */}
      <div className="hidden dark:block absolute -right-20 -top-20 w-48 h-48 bg-linear-to-br from-[#B415FF]/15 via-[#DF238C]/15 to-[#DF8908]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="p-3 rounded-2xl bg-purple-50 dark:bg-linear-to-r dark:from-[#B415FF]/10 dark:via-[#DF238C]/10 dark:to-[#DF8908]/10 text-purple-700 dark:text-purple-400 shrink-0 border border-purple-200 dark:border-purple-500/20">
        <Sparkles className="w-5 h-5" />
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-400">
          {philosophy.title}
        </span>
        <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-300 leading-relaxed">
          {philosophy.description}
        </p>
      </div>
    </div>
  );
};
