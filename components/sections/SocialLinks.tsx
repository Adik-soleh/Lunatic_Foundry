'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Instagram, Twitter, Linkedin, Github, Youtube, Globe } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:border-pink-500 hover:text-pink-500' },
  { icon: Twitter, label: 'Twitter / X', href: '#', color: 'hover:border-sky-500 hover:text-sky-500' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:border-blue-600 hover:text-blue-600' },
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:border-gray-800 hover:text-gray-800' },
  { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:border-red-500 hover:text-red-500' },
  { icon: Globe, label: 'Website', href: '#', color: 'hover:border-lt-green hover:text-lt-green' },
];

export default function SocialLinks() {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-lt-dark mb-4">Connect With Us</h3>
      {socialLinks.map((social, i) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-3 px-5 py-3.5 rounded-full
              bg-white border-2 border-gray-200
              text-lt-dark font-semibold text-sm
              transition-all duration-300
              bouncy hover:scale-[1.02] hover:shadow-md
              ${social.color}
            `}
          >
            <social.icon size={20} strokeWidth={2} />
            {social.label}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
