import React from "react";
import { Sparkles } from "lucide-react";
import type { AIAssistantButtonProps } from "./types";

export const AIAssistantButton: React.FC<AIAssistantButtonProps> = ({
  onClick,
  label = "Ask AI about me",
  variant = "floating",
  className = "",
}) => {
  const content = (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group relative inline-flex items-center gap-2.5 p-[1.5px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${className}`}
    >
      {/* Ambient gradient glow on hover */}
      <span className="absolute -inset-1 rounded-full bg-linear-to-r from-[#B415FF] via-[#DF238C] to-[#DF8908] opacity-30 dark:opacity-50 blur-md group-hover:opacity-75 dark:group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

      {/* Gradient border wrapper */}
      <span className="relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#161513]/90 backdrop-blur-xl border border-transparent text-neutral-900 dark:text-white shadow-lg shadow-neutral-900/10 dark:shadow-black/50 transition-colors">
        {/* Animated Sparkles Icon Badge */}
        <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-[#B415FF] to-[#DF8908] text-white shadow-xs">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        </span>

        {/* Button Label */}
        <span className="text-xs sm:text-sm font-semibold tracking-tight">
          {label}
        </span>
      </span>
    </button>
  );

  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {content}
      </div>
    );
  }

  return content;
};

export default AIAssistantButton;
