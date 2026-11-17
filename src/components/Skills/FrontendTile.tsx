import React from "react";
import { Layout, Sparkles } from "lucide-react";
import type { BentoSkillTileData } from "./types";

interface FrontendTileProps {
  data: BentoSkillTileData;
}

export const FrontendTile: React.FC<FrontendTileProps> = ({ data }) => {
  return (
    <div className="relative group overflow-hidden rounded-3xl p-6 sm:p-8 bg-white dark:bg-white/3 border border-neutral-200/90 dark:border-white/10 shadow-sm shadow-neutral-900/5 hover:shadow-md hover:border-neutral-300 dark:hover:border-indigo-500/30 transition-all duration-500 flex flex-col justify-between h-full">
      {/* Ambient background glow — dark mode only */}
      <div className="hidden dark:block absolute -right-24 -top-24 w-64 h-64 bg-linear-to-br from-indigo-500/15 via-purple-500/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Top Header Row */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
              <Layout className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-indigo-700 dark:text-indigo-400">
              {data.eyebrow}
            </span>
          </div>

          <Sparkles className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
            {data.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            {data.description}
          </p>
        </div>
      </div>

      {/* Grouped Skills Matrix */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5 border-t border-neutral-200/70 dark:border-white/5 flex-1">
        {data.groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-400">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-50 dark:bg-white/5 text-neutral-900 dark:text-neutral-200 border border-neutral-200/90 dark:border-white/10 hover:border-neutral-300 dark:hover:border-indigo-500/20 hover:bg-neutral-100/80 dark:hover:bg-white/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Metric Pill */}
      <div className="pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-neutral-600 dark:text-neutral-400">
        <span>{data.metricBadge}</span>
        <span className="text-indigo-700 dark:text-indigo-400 font-semibold">
          Pixel-Perfect
        </span>
      </div>
    </div>
  );
};
