import React, { useState, useEffect } from "react";
import type { NavbarProps } from "./types";
import { getNavItems } from "./navData";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { useTheme } from "../../hooks/useTheme";

const defaultCv = new URL("../../assets/CV/Miky-CV.pdf", import.meta.url).href;

export const Navbar: React.FC<NavbarProps> = ({
  name = "Michael Alula",
  resumeUrl = defaultCv,
  showExperience = true,
  showBlog = true,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  const navLinks = getNavItems(showExperience, showBlog).filter(
    (item) => item.show !== false,
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#161513]/90 backdrop-blur-md border-b border-neutral-200/60 dark:border-white/5 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand / Name Logo */}
          <NavLogo name={name} />

          {/* Center: Navigation Links (Desktop) */}
          <NavLinks items={navLinks} activeSection={activeSection} />

          {/* Far Right: Actions (Desktop) */}
          <NavActions
            theme={theme}
            onToggleTheme={toggleTheme}
            resumeUrl={resumeUrl}
          />

          {/* Mobile Right Controls: Theme Toggle & Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (placed below the header row across full width) */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        items={navLinks}
        activeSection={activeSection}
        resumeUrl={resumeUrl}
        onSelectLink={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
