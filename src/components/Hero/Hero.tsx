import React from "react";
import type { HeroProps } from "./types";
import { defaultHeroData } from "./heroData";
import { HeroHeadline } from "./HeroHeadline";
import { HeroActions } from "./HeroActions";
import { HeroPhoto } from "./HeroPhoto";
import { HeroMarquee } from "./HeroMarquee";

const defaultAvatar = new URL("../../assets/image/image.jpg", import.meta.url).href;

export const Hero: React.FC<HeroProps> = ({
  name = defaultHeroData.name,
  role = defaultHeroData.role,
  valueProp = defaultHeroData.valueProp,
  avatarSrc = defaultAvatar,
  primaryCtaText = defaultHeroData.primaryCtaText,
  primaryCtaHref = defaultHeroData.primaryCtaHref,
  secondaryCtaText = defaultHeroData.secondaryCtaText,
  secondaryCtaHref = defaultHeroData.secondaryCtaHref,
  techStack = defaultHeroData.techStack,
}) => {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="h-screen flex flex-col justify-between pt-20"
    >
      {/* Main split layout — centered in the viewport */}
      <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-8 lg:px-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-center">

          {/* LEFT: Typography + CTAs */}
          <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
            <HeroHeadline name={name} role={role} valueProp={valueProp} />
            <HeroActions
              primaryText={primaryCtaText}
              primaryHref={primaryCtaHref}
              secondaryText={secondaryCtaText}
              secondaryHref={secondaryCtaHref}
            />
          </div>

          {/* RIGHT: Circular photo — centered in its column */}
          <div className="flex justify-center order-1 lg:order-2">
            <HeroPhoto src={avatarSrc} alt={name} />
          </div>

        </div>
      </div>

      {/* Bottom: Scrolling tech marquee */}
      <HeroMarquee items={techStack} />
    </section>
  );
};

export default Hero;
