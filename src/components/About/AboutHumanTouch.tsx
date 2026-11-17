import React from "react";
import { Compass } from "lucide-react";

interface AboutHumanTouchProps {
  text: string;
}

export const AboutHumanTouch: React.FC<AboutHumanTouchProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
      <Compass className="w-5 h-5 text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5" />
      <p>
        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
          Beyond the code:{" "}
        </span>
        {text}
      </p>
    </div>
  );
};

