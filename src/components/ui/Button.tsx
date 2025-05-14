import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-50 disabled:pointer-events-none";
  
  const variantStyles = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue/90 focus:ring-brand-blue",
    secondary: "bg-brand-teal text-white hover:bg-brand-teal/90 focus:ring-brand-teal",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    link: "bg-transparent text-brand-blue hover:underline focus:ring-brand-blue p-0"
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-lg px-6 py-3"
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== 'link' ? sizeStyles[size] : '',
        widthStyles,
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={cn("mr-2", size === 'sm' ? "text-xs" : "")}>
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={cn("ml-2", size === 'sm' ? "text-xs" : "")}>
          {icon}
        </span>
      )}
    </button>
  );
};
