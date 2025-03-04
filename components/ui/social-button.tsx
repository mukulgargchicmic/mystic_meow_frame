import { ReactNode } from 'react';

interface SocialButtonProps {
  color: string;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}

/**
 * Reusable social media button component
 */
export function SocialButton({ color, label, icon, onClick }: SocialButtonProps) {
  return (
    <button 
      className={`w-12 h-12 ${color} rounded-full flex items-center justify-center transition-transform hover:scale-105`}
      onClick={onClick}
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </button>
  );
}