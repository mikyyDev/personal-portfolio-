import React from "react";

interface HeroHeadlineProps {
  name: string;
  role: string;
  valueProp: string;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  name,
  role,
  valueProp,
}) => {
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      {/* Eyebrow metadata — crisp and legible */}
      <div className="flex items-center gap-3 text-xs sm:text-sm font-mono font-medium uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-400">
        <span className="w-8 h-px bg-neutral-500 dark:bg-neutral-500" />
        <span>{role}</span>
      </div>

      {/* Large editorial name — mixed weights */}
      <h1 className="flex flex-col leading-[0.95] tracking-[-0.03em]">
        <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-neutral-950 dark:text-white">
          {firstName}
        </span>
        <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#B415FF] via-[#DF238C] to-[#DF8908]">
          {lastName}
        </span>
      </h1>

      {/* Value proposition */}
      <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
        {valueProp}
      </p>
    </div>
  );
};
