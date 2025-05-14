import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white border border-gray-200 shadow-sm',
    outline: 'bg-transparent border border-gray-200',
    filled: 'bg-gray-50 border border-gray-100'
  };
  
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div
      className={cn(
        'rounded-lg transition-all',
        variantStyles[variant],
        padding !== 'none' && paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
