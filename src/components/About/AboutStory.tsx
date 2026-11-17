import React from "react";

interface AboutStoryProps {
  paragraphs: string[];
}

export const AboutStory: React.FC<AboutStoryProps> = ({ paragraphs }) => {
  return (
    <div className="flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
