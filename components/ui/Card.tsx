import React from 'react';

interface CardProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  hover?: boolean;
}

const colorMap: Record<string, string> = {
  'pastel-pink': 'bg-pastel-pink',
  'pastel-blue': 'bg-pastel-blue',
  'pastel-green': 'bg-pastel-green',
  'pastel-yellow': 'bg-pastel-yellow',
  'pastel-purple': 'bg-pastel-purple',
  white: 'bg-white',
};

export default function Card({
  children,
  color = 'white',
  className = '',
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-[2rem] p-6 md:p-8
        ${colorMap[color] || 'bg-white'}
        ${hover ? 'bouncy hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]' : ''}
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition-shadow duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
