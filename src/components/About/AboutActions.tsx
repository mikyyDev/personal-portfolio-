import React from "react";
import { Download, ArrowUpRight } from "lucide-react";

interface AboutActionsProps {
  resumeUrl: string;
  contactHref?: string;
  primaryText?: string;
  secondaryText?: string;
}

export const AboutActions: React.FC<AboutActionsProps> = ({
  resumeUrl,
  contactHref = "#contact",
  primaryText = "Download Resume",
  secondaryText = "Get in touch",
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
      {/* Primary: Download Resume Button */}
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-white text-sm font-medium bg-linear-to-r from-[#B415FF] via-[#DF238C] to-[#DF8908] hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-pink-500/20 dark:shadow-purple-900/30 cursor-pointer"
      >
        <span>{primaryText}</span>
        <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      </a>

      {/* Secondary: Get in Touch Link */}
      <a
        href={contactHref}
        className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-sm font-medium bg-white/80 dark:bg-transparent text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700/80 hover:bg-neutral-100 dark:hover:bg-white/5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-2xs cursor-pointer"
      >
        <span>{secondaryText}</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
};

