'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'social' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-lt-green text-lt-dark hover:bg-lt-green-dark shadow-md hover:shadow-lg',
  outline:
    'border-2 border-lt-dark text-lt-dark hover:bg-lt-dark hover:text-white',
  social:
    'bg-white border-2 border-gray-200 text-lt-dark hover:border-lt-green hover:shadow-md w-full justify-center',
  ghost:
    'text-lt-dark hover:bg-gray-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center gap-2 rounded-full font-semibold
    transition-all duration-300 cursor-pointer
    bouncy hover:scale-105 active:scale-95
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
}
