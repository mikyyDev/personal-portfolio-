import React from "react";
import { Briefcase } from "lucide-react";

interface AboutLookingForProps {
  text: string;
}

export const AboutLookingFor: React.FC<AboutLookingForProps> = ({ text }) => {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-neutral-100/70 dark:bg-white/3 border border-neutral-200/80 dark:border-white/10 flex items-start gap-4 shadow-2xs hover:border-neutral-300 dark:hover:border-white/20 transition-colors">
      <span className="p-2.5 rounded-xl bg-linear-to-r from-[#B415FF]/15 to-[#DF8908]/15 text-purple-600 dark:text-purple-400 shrink-0">
        <Briefcase className="w-4 h-4" />
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          What I'm Looking For
        </span>
        <p className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};
