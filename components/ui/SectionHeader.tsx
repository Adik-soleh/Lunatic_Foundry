'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`
        mb-12 md:mb-16
        ${align === 'center' ? 'text-center' : 'text-left'}
        ${className}
      `}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-lt-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
