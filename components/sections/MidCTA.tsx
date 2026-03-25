'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MidCTA() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        {/* Card */}
        <div className="relative rounded-[40px] bg-[#5022ED] overflow-hidden px-10 py-16 md:px-20 md:py-20">
          {/* Glow blobs */}
          <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-[#B2E2F2]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-10 w-[320px] h-[320px] bg-[#E9C3E6]/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Left copy */}
            <div className="max-w-xl">
              <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-5">
                Ready to start?
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1] mb-5">
                Jumpstart your<br />
                <span className="text-[#C6E23B]">digital future</span> today.
              </h2>
              <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-sm">
                One conversation is all it takes. Tell us what you&apos;re building — we&apos;ll tell you how we can make it exceptional.
              </p>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#C6E23B] text-[#1E3932] px-8 py-4 rounded-2xl font-black text-base tracking-tight hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C6E23B]/30 transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-base tracking-tight hover:border-white/50 hover:bg-white/10 transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
