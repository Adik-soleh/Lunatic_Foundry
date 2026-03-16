import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-block px-3 py-1 text-xs font-semibold
        rounded-full bg-lt-pastel text-lt-dark
        ${className}
      `}
    >
      {children}
    </span>
  );
}
