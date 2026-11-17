import React from "react";
import { Bot, MessageSquare, Terminal, ArrowUpRight, Activity } from "lucide-react";
import type { ShippedProjectSummary } from "./types";

interface AboutArchitectureCardProps {
  projects: ShippedProjectSummary[];
  viewProjectsHref?: string;
}

export const AboutArchitectureCard: React.FC<AboutArchitectureCardProps> = ({
  projects,
  viewProjectsHref = "#projects",
}) => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "aau-ai":
        return <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "pulsechat":
        return <MessageSquare className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
      default:
        return <Terminal className="w-5 h-5 text-orange-600 dark:text-orange-400" />;
    }
  };

  return (
    <div className="relative group w-full max-w-[360px] sm:max-w-[400px] flex flex-col gap-4 p-5 sm:p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-neutral-200/90 dark:border-white/10 shadow-sm shadow-neutral-900/5 hover:shadow-md hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-500">
      {/* Ambient background glow — dark mode only */}
      <div className="hidden dark:block absolute -right-20 -top-20 w-56 h-56 bg-linear-to-br from-[#B415FF]/15 via-[#DF238C]/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Card Header Row */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-white/5">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-200">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            Shipped Systems
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>Live Deployments</span>
        </div>
      </div>

      {/* Shipped Projects List */}
      <div className="flex flex-col gap-3.5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-2.5 p-3.5 sm:p-4 rounded-2xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15 transition-all duration-300"
          >
            {/* Title & Status */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-2 rounded-xl bg-white dark:bg-white/5 border border-neutral-200/60 dark:border-white/10 shrink-0">
                {getProjectIcon(project.id)}
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-sm font-bold text-neutral-950 dark:text-white truncate">
                  {project.name}
                </h4>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                  {project.tagline}
                </span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-xs">
        <span className="text-neutral-500 dark:text-neutral-400 font-mono text-[11px]">
          4+ Total Shipped Apps
        </span>
        <a
          href={viewProjectsHref}
          className="inline-flex items-center gap-1 font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
        >
          <span>View All Work</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

