import type { NavItem } from "./types";

export const getNavItems = (showExperience = true, showBlog = true): NavItem[] => [
  { label: "About", href: "#about", show: true },
  { label: "Skills", href: "#skills", show: true },
  { label: "Projects", href: "#projects", show: true },
  { label: "Experience", href: "#experience", show: showExperience },
  { label: "Blog", href: "#blog", show: showBlog },
  { label: "Contact", href: "#contact", show: true },
];
