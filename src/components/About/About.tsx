import React from "react";
import type { AboutProps } from "./types";
import { aboutData } from "./aboutData";
import { AboutHeader } from "./AboutHeader";
import { AboutStory } from "./AboutStory";
import { AboutLookingFor } from "./AboutLookingFor";
import { AboutHumanTouch } from "./AboutHumanTouch";
import { AboutQuickFacts } from "./AboutQuickFacts";
import { AboutArchitectureCard } from "./AboutArchitectureCard";
import { AboutActions } from "./AboutActions";

const defaultResume = new URL("../../assets/cv/Miky-CV.pdf", import.meta.url).href;

export const About: React.FC<AboutProps> = ({
  resumeUrl = defaultResume,
  contactHref = "#contact",
  projects = aboutData.shippedProjects,
}) => {
  return (
    <section
      id="about"
      aria-label="About Michael Alula"
      className="scroll-mt-24 py-20 sm:py-28 pb-36 sm:pb-44 px-4 sm:px-8 lg:px-12 w-full"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <AboutHeader
          eyebrow={aboutData.eyebrow}
          title={aboutData.title}
          subtitle={aboutData.openingLine}
        />

        {/* 2-Column Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Narrative, Goals, Facts & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            {/* Story Paragraphs */}
            <AboutStory paragraphs={aboutData.story} />

            {/* What I'm Looking For Card */}
            <AboutLookingFor text={aboutData.lookingFor} />

            {/* Quick Facts Grid */}
            <AboutQuickFacts facts={aboutData.quickFacts} />

            {/* Human Touch */}
            <AboutHumanTouch text={aboutData.humanTouch} />

            {/* CTAs: Resume & Contact */}
            <AboutActions
              resumeUrl={resumeUrl}
              contactHref={contactHref}
              primaryText={aboutData.primaryCtaText}
              secondaryText={aboutData.secondaryCtaText}
            />
          </div>

          {/* RIGHT COLUMN: Shipped Systems & Architecture Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 lg:sticky lg:top-28">
            <AboutArchitectureCard projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
