import React from "react";

interface AboutHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col gap-3 max-w-3xl">
      {/* Monospace eyebrow */}
      <div className="flex items-center gap-3 text-xs sm:text-sm font-mono font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
        <span className="w-8 h-px bg-neutral-400 dark:bg-neutral-600" />
        <span>{eyebrow}</span>
      </div>

      {/* Clean section title */}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white leading-tight">
        {title}
      </h2>

      {/* Subtitle opening line */}
      <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
