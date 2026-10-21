import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = `
    transition-all
    duration-200
    ease-in-out
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary-blue
    focus-visible:ring-offset-2
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-primary-blue
      text-white
      hover:bg-primary-blue/90
    `,
    secondary: `
      bg-card-background
      text-main-text
      border
      border-border
      hover:bg-card-background/80
    `,
    outline: `
      text-main-text
      border
      border-border
      hover:bg-card-background/50
    `,
  };

  const sizeClasses = {
    sm: `
      px-4
      py-2
      text-sm
      rounded-md
    `,
    md: `
      px-6
      py-3
      text-base
      rounded-lg
    `,
    lg: `
      px-8
      py-4
      text-lg
      rounded-xl
    `,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;