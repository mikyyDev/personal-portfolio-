export interface NavItem {
  label: string;
  href: string;
  show?: boolean;
}

export interface NavbarProps {
  name?: string;
  resumeUrl?: string;
  showExperience?: boolean;
  showBlog?: boolean;
}
