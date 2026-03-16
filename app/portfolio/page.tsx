'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolio';

type Category = 'all' | 'web' | 'mobile' | 'design';

const categories: { label: string; value: Category }[] = [
  { label: 'Semua', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Design', value: 'design' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-20 md:py-32 px-6 md:px-16 bg-[#780016] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#E9C3E6] leading-[1.1] tracking-tighter mb-6">
              Our work, <br />
              anywhere you like!
            </h1>
            <p className="text-[#E9C3E6]/80 text-lg md:text-xl max-w-md mb-10 leading-relaxed font-medium">
              Lihat bagaimana kami membantu klien membangun identitas digital yang unik dan berdampak luas.
            </p>
            <button className="bg-[#E9C3E6] text-[#780016] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Mulai Project Anda
            </button>
          </motion.div>

          <div className="relative h-[500px] hidden lg:block">

            <motion.div
              animate={{ y: [0, -15, 0], rotate: [-5, -3, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 w-44 h-56 bg-[#D4A752] rounded-[2.5rem] shadow-xl p-5 flex flex-col justify-between"
            >
              <div className="w-full aspect-square bg-white/20 rounded-2xl flex items-center justify-center text-5xl">🧶</div>
              <div className="text-white font-bold text-center bg-black/10 py-2 rounded-full text-sm">$20</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-48 w-60 h-40 bg-[#3E4A57] rounded-[2rem] shadow-2xl overflow-hidden p-1"
            >
              <div className="h-full w-full bg-gray-400 rounded-[1.8rem] relative flex items-center justify-center">
                <div className="absolute top-4 left-4 flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white/40 rounded-full" />
                </div>
                <span className="text-white/30 text-4xl">👤</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20 }}
              animate={{ x: [20, 0, 20] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute top-[45%] left-24 z-30 bg-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs">✱</div>
              <span className="font-bold text-gray-800">/averyclothing</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0], rotate: [2, 4, 2] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 right-0 w-64 h-40 bg-[#5A634D] rounded-[2rem] shadow-xl overflow-hidden p-4 flex flex-col justify-end"
            >
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-2 rounded-full">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[10px]">▶</div>
                <div className="h-1 bg-white/40 flex-1 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-0 left-32 w-36 h-48 bg-[#BC31DB] rounded-[2.5rem] shadow-lg p-6 flex flex-col gap-3"
            >
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold">@</div>
              <div className="space-y-2 pt-2">
                <div className="h-2 w-full bg-white/40 rounded-full" />
                <div className="h-2 w-3/4 bg-white/40 rounded-full" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [10, 12, 10] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -bottom-10 right-20 w-40 h-52 bg-[#767E5E] rounded-[2.2rem] shadow-2xl p-4"
            >
              <div className="w-full h-full border border-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white/20 text-xs text-center font-bold uppercase tracking-widest">Our Planet</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <section className="mb-12">
          <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-8 py-3 rounded-full text-sm font-black whitespace-nowrap transition-all duration-300
                  ${activeCategory === cat.value ? 'bg-[#1E3932] text-white shadow-xl scale-105' : 'bg-white text-[#1E3932] border-2 border-gray-100 hover:bg-gray-50'}`}
              >
                {cat.label.toUpperCase()}
              </button>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => {
                const isLarge = i === 0 || i === 3;
                const isTall = i === 1;

                const colors = ['bg-[#E9C3E6]', 'bg-[#C6E23B]', 'bg-[#1E3932]', 'bg-[#D139FF]', 'bg-[#B2E2F2]'];
                const bgColor = colors[i % colors.length];
                const textColor = bgColor === 'bg-[#1E3932]' ? 'text-[#E9C3E6]' : 'text-[#780016]';

                return (
                  <motion.div
                    key={item.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    className={`
                    relative group cursor-pointer rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between
                    ${bgColor} ${textColor}
                    ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                    ${isTall ? 'md:row-span-2' : 'md:row-span-1'}
                  `}
                  >
                    <Link href={`/portfolio/${item.slug}`} className="absolute inset-0 z-10" />

                    <div className="relative flex-1 flex items-center justify-center">
                      <div className="flex gap-2 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30" />
                        <div className="w-20 h-20 bg-black/10 rounded-2xl border border-black/5" />
                      </div>
                    </div>

                    <div className="relative z-20">
                      <h3 className="text-2xl font-black leading-tight mb-2 uppercase tracking-tighter">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium opacity-80 leading-snug line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                        →
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </div>
  );
}