'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    headline: 'We listen before we build.',
    description:
      'Deep dive into your goals, users, and constraints. We map the problem space so every design decision has a reason — not just an opinion.',
    tags: ['Kickoff Call', 'User Research', 'Scope Definition'],
    accent: '#C6E23B',
    accentText: '#1E3932',
  },
  {
    number: '02',
    title: 'Build',
    headline: 'Design and code, in lockstep.',
    description:
      'No handoff lag. Design and engineering move together — fast iterations, live previews, and weekly check-ins so you always know where we are.',
    tags: ['UI/UX Design', 'Development', 'Weekly Reviews'],
    accent: '#1E3932',
    accentText: '#ffffff',
  },
  {
    number: '03',
    title: 'Launch',
    headline: 'Ship fast. Then make it better.',
    description:
      'We deploy with confidence: staging environment, QA checklist, and performance audits. Post-launch, we stay on-call for 30 days.',
    tags: ['QA Testing', 'Deployment', '30-Day Support'],
    accent: '#0F172A',
    accentText: '#C6E23B',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 px-4 sm:px-6 bg-[#F8F9F4] scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#1E3932]/40 mb-4">
            Our Process
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tighter leading-[1] max-w-lg">
              How We<br />
              <span className="italic text-[#1E3932]">Actually</span> Work.
            </h2>
            <p className="text-[#4F5B57] text-base md:text-lg max-w-xs leading-relaxed font-medium">
              Three phases. Zero ambiguity. You always know what&apos;s happening and why.
            </p>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              className="group relative rounded-[32px] p-8 md:p-10 flex flex-col gap-6 cursor-default"
              style={{ backgroundColor: step.accent }}
            >
              {/* Step number — large watermark */}
              <span
                className="absolute top-6 right-8 text-[80px] font-black leading-none select-none pointer-events-none"
                style={{ color: step.accentText, opacity: 0.08 }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Badge */}
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-black uppercase tracking-[0.18em]"
                  style={{ color: step.accentText, opacity: 0.5 }}
                >
                  Step {step.number}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: step.accentText, opacity: 0.15 }}
                />
              </div>

              {/* Title + headline */}
              <div>
                <h3
                  className="text-3xl md:text-4xl font-black tracking-tight mb-2"
                  style={{ color: step.accentText }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base font-bold leading-snug"
                  style={{ color: step.accentText, opacity: 0.7 }}
                >
                  {step.headline}
                </p>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed font-medium flex-grow"
                style={{ color: step.accentText, opacity: 0.65 }}
              >
                {step.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${step.accentText}18`,
                      color: step.accentText,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connector line — desktop only */}
        <div className="hidden md:flex items-center justify-between mt-8 px-[calc(33%_/_2)] max-w-md mx-auto" aria-hidden="true">
          {['Discovery', 'Build', 'Launch'].map((_, i, arr) => (
            <React.Fragment key={i}>
              <div className="w-2 h-2 rounded-full bg-[#1E3932]/20" />
              {i < arr.length - 1 && <div className="flex-1 h-px bg-[#1E3932]/10 mx-1" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
