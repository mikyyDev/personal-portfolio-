import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ResumeButton } from "./ResumeButton";

interface NavActionsProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  resumeUrl: string;
}

export const NavActions: React.FC<NavActionsProps> = ({
  theme,
  onToggleTheme,
  resumeUrl,
}) => {
  return (
    <div className="hidden md:flex items-center gap-2.5">
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      <ResumeButton resumeUrl={resumeUrl} />
    </div>
  );
};

