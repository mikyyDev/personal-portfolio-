import React from "react";
import {
  GraduationCap,
  Award,
  Rocket,
  MapPin,
  Globe,
  Target,
  Clock,
} from "lucide-react";
import type { QuickFact } from "./types";

interface AboutQuickFactsProps {
  facts: QuickFact[];
}

export const AboutQuickFacts: React.FC<AboutQuickFactsProps> = ({ facts }) => {
  const getIcon = (type: QuickFact["iconName"]) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-blue-500" />;
      case "experience":
        return <Award className="w-4 h-4 text-purple-500" />;
      case "projects":
        return <Rocket className="w-4 h-4 text-pink-500" />;
      case "location":
        return <MapPin className="w-4 h-4 text-orange-500" />;
      case "globe":
        return <Globe className="w-4 h-4 text-indigo-500" />;
      case "focus":
        return <Target className="w-4 h-4 text-emerald-500" />;
      case "availability":
        return <Clock className="w-4 h-4 text-teal-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/70 dark:bg-white/3 border border-neutral-200/80 dark:border-white/10 shadow-2xs hover:border-neutral-300 dark:hover:border-white/20 transition-all"
        >
          <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/5 shrink-0">
            {getIcon(fact.iconName)}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {fact.label}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
              {fact.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
