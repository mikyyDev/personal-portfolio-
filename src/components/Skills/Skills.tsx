import React, { useState } from "react";
import type { SkillsProps, SkillFilter } from "./types";
import { defaultSkillsData } from "./skillsData";
import { SkillsHeader } from "./SkillsHeader";
import { SkillsFilter } from "./SkillsFilter";
import { SkillsBentoGrid } from "./SkillsBentoGrid";
import { SkillsPhilosophy } from "./SkillsPhilosophy";

export const Skills: React.FC<SkillsProps> = ({
  data = defaultSkillsData,
}) => {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("all");

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Architectural Stack"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 w-full"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <SkillsHeader
          eyebrow={data.eyebrow}
          title={data.title}
          subtitle={data.subtitle}
        />

        {/* Interactive Domain Filter Pill Bar */}
        <SkillsFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Asymmetric Architectural Bento Grid */}
        <SkillsBentoGrid
          tiles={data.tiles}
          activeFilter={activeFilter}
        />

        {/* Engineering Standard / Philosophy Callout */}
        {data.philosophy && <SkillsPhilosophy philosophy={data.philosophy} />}
      </div>
    </section>
  );
};

export default Skills;
