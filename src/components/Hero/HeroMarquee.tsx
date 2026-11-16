import React from "react";

interface HeroMarqueeProps {
  items: string[];
}

export const HeroMarquee: React.FC<HeroMarqueeProps> = ({ items }) => {
  if (!items.length) return null;

  // Duplicate for seamless infinite scroll
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden border-t border-neutral-200/80 dark:border-neutral-800/60 py-4 sm:py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6"
          >
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600 select-none">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

