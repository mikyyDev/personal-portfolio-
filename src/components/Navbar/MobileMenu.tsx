import React from "react";
import type { NavItem } from "./types";

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  activeSection: string;
  resumeUrl: string;
  onSelectLink: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  items,
  activeSection,
  resumeUrl,
  onSelectLink,
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/95 dark:bg-[#161513]/98 backdrop-blur-2xl shadow-2xl px-6 pt-4 pb-8 transition-all">
      <div className="flex flex-col gap-2">
        {items.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onSelectLink}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive
                  ? "bg-neutral-100 dark:bg-white/10 text-neutral-950 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-white/5"
              }`}
            >
              <span>{link.label}</span>
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-linear-to-r from-[#B415FF] to-[#DF8908]" />
              )}
            </a>
          );
        })}

        <div className="pt-4 mt-2 border-t border-neutral-200 dark:border-neutral-800">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={onSelectLink}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-medium text-sm bg-linear-to-r from-[#B415FF] via-[#DF238C] to-[#DF8908] shadow-md shadow-purple-900/30 active:scale-98 transition-all"
          >
            <span>Resume</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
