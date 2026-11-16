import React from "react";

interface HeroPhotoProps {
  src?: string;
  alt: string;
}

export const HeroPhoto: React.FC<HeroPhotoProps> = ({ src, alt }) => {
  if (!src) return null;

  return (
    <div className="relative group">
      {/* Crisp circular photo with refined border and soft shadow */}
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl shadow-neutral-900/10 dark:shadow-black/50 ring-1 ring-neutral-300/80 dark:ring-white/10">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
};
