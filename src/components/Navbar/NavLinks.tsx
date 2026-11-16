import React from "react";
import type { NavItem } from "./types";

interface NavLinksProps {
  items: NavItem[];
  activeSection: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ items, activeSection }) => {
  return (
    <nav
      aria-label="Primary Navigation"
      className="hidden md:flex items-center gap-7 lg:gap-9"
    >
      {items.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");
        return (
          <a
            key={item.href}
            href={item.href}
            className={`relative py-1 text-sm sm:text-base transition-colors duration-200 ${
              isActive
                ? "font-medium text-neutral-950 dark:text-white"
                : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
            }`}
          >
            <span>{item.label}</span>

            {/* Signature gradient curved underline for active link */}
            {isActive && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 pointer-events-none flex justify-center">
                <svg
                  className="w-7 h-2 overflow-visible"
                  viewBox="0 0 32 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C8 2 22 1.5 31 5.5C24 8 10 7.5 1 5.5Z"
                    fill="url(#active-nav-gradient)"
                  />
                  <defs>
                    <linearGradient
                      id="active-nav-gradient"
                      x1="0"
                      y1="0"
                      x2="32"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#B415FF" />
                      <stop offset="50%" stopColor="#DF238C" />
                      <stop offset="100%" stopColor="#DF8908" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            )}
          </a>
        );
      })}
    </nav>
  );
};
