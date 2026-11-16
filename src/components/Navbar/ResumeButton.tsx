import React from "react";

interface ResumeButtonProps {
  resumeUrl: string;
  className?: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  resumeUrl,
  className = "",
}) => {
  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-medium rounded-full text-white bg-linear-to-r from-[#B415FF] via-[#DF238C] to-[#DF8908] hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-purple-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer ${className}`}
    >
      <span>Resume</span>
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
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
  );
};
