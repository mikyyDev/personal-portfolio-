import React from "react";

interface NavLogoProps {
  name: string;
}

export const NavLogo: React.FC<NavLogoProps> = ({ name }) => {
  return (
    <a
      href="#"
      className="group flex items-center gap-1.5 text-neutral-900 dark:text-white font-bold tracking-tight text-xl sm:text-2xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg py-1"
    >
      <span>{name}</span>
      {/* Signature gradient accent mark inspired by the logo flourish */}
      <span className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-[#B415FF] via-[#DF238C] to-[#DF8908] inline-block transform group-hover:scale-125 transition-transform duration-300 shadow-xs shadow-purple-500/50" />
    </a>
  );
};
