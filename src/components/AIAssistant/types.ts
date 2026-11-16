export type AIAssistantButtonVariant = "floating" | "inline";

export interface AIAssistantButtonProps {
  onClick?: () => void;
  label?: string;
  variant?: AIAssistantButtonVariant;
  className?: string;
}
