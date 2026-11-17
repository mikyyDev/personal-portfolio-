import React from "react";
import type { BentoSkillTileData, SkillFilter } from "./types";
import { BackendTile } from "./BackendTile";
import { AITile } from "./AITile";
import { DatabaseTile } from "./DatabaseTile";
import { DevOpsTile } from "./DevOpsTile";
import { FrontendTile } from "./FrontendTile";

interface SkillsBentoGridProps {
  tiles: BentoSkillTileData[];
  activeFilter: SkillFilter;
}

export const SkillsBentoGrid: React.FC<SkillsBentoGridProps> = ({
  tiles,
  activeFilter,
}) => {
  const backendData = tiles.find((t) => t.id === "backend");
  const aiData = tiles.find((t) => t.id === "ai");
  const databaseData = tiles.find((t) => t.id === "database");
  const devopsData = tiles.find((t) => t.id === "devops");
  const frontendData = tiles.find((t) => t.id === "frontend");

  const showBackend = activeFilter === "all" || activeFilter === "backend";
  const showAI = activeFilter === "all" || activeFilter === "ai";
  const showDatabase = activeFilter === "all" || activeFilter === "database";
  const showDevops = activeFilter === "all" || activeFilter === "devops";
  const showFrontend = activeFilter === "all" || activeFilter === "frontend";

  const isFilteredSingle = activeFilter !== "all";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
      {/* 1. Backend Architecture (6 cols in all, 12 when filtered) */}
      {showBackend && backendData && (
        <div
          className={`${
            isFilteredSingle ? "lg:col-span-12" : "lg:col-span-6"
          } flex flex-col transition-all duration-500 h-full`}
        >
          <BackendTile data={backendData} />
        </div>
      )}

      {/* 2. AI & LLM Engineering (6 cols in all, 12 when filtered) */}
      {showAI && aiData && (
        <div
          className={`${
            isFilteredSingle ? "lg:col-span-12" : "lg:col-span-6"
          } flex flex-col transition-all duration-500 h-full`}
        >
          <AITile data={aiData} />
        </div>
      )}

      {/* 3. Databases & Storage (6 cols in all, 12 when filtered) */}
      {showDatabase && databaseData && (
        <div
          className={`${
            isFilteredSingle ? "lg:col-span-12" : "lg:col-span-6"
          } flex flex-col transition-all duration-500 h-full`}
        >
          <DatabaseTile data={databaseData} />
        </div>
      )}

      {/* 4. Frontend Engineering (6 cols in all, 12 when filtered) */}
      {showFrontend && frontendData && (
        <div
          className={`${
            isFilteredSingle ? "lg:col-span-12" : "lg:col-span-6"
          } flex flex-col transition-all duration-500 h-full`}
        >
          <FrontendTile data={frontendData} />
        </div>
      )}

      {/* 5. DevOps & Infrastructure (12 cols full width foundation) */}
      {showDevops && devopsData && (
        <div className="lg:col-span-12 flex flex-col transition-all duration-500 h-full">
          <DevOpsTile data={devopsData} />
        </div>
      )}
    </div>
  );
};

