import React from "react";

interface HeroActionsProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  primaryText = "View my work",
  primaryHref = "#projects",
  secondaryText = "Get in touch",
  secondaryHref = "#contact",
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      {/* Primary — prominent gradient pill CTA */}
      {primaryText && (
        <a
          href={primaryHref}
          className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-white text-sm sm:text-base font-medium bg-linear-to-r from-[#B415FF] via-[#DF238C] to-[#DF8908] hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-pink-500/20 dark:shadow-purple-900/30 cursor-pointer"
        >
          <span>{primaryText}</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}

      {/* Secondary — clean border pill */}
      {secondaryText && (
        <a
          href={secondaryHref}
          className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm sm:text-base font-medium bg-white/80 dark:bg-transparent text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700/80 hover:bg-neutral-100 dark:hover:bg-white/5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-2xs cursor-pointer"
        >
          <span>{secondaryText}</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      )}
    </div>
  );
};
