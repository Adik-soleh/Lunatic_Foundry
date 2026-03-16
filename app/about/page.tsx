'use client';

import { motion } from 'framer-motion';
import TeamGrid from '@/components/sections/TeamGrid';

export default function AboutPage() {
  return (
    <div className="bg-[#F3F3F1] min-h-screen pt-32 pb-20 overflow-hidden">

      <section className="px-6 md:px-16 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1E3932] leading-[0.9] tracking-tighter mb-8">
              Tentang <br /> Kami.
            </h1>
            <p className="text-[#1E3932] text-lg md:text-xl font-medium max-w-lg leading-relaxed opacity-80">
              Mengenal lebih dekat tim yang berdedikasi membangun masa depan digital Indonesia.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square bg-[#E9C3E6] rounded-3xl flex items-center justify-center text-4xl shadow-sm">🎯</div>
            <div className="aspect-square bg-[#1E3932] rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-sm">S</div>
            <div className="aspect-square bg-[#C6E23B] rounded-3xl flex items-center justify-center text-4xl shadow-sm">🚀</div>
            <div className="aspect-square bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm">💡</div>
            <div className="aspect-square bg-[#001489] rounded-3xl flex items-center justify-center text-white font-black shadow-sm">2026</div>
            <div className="aspect-square bg-[#FFD1E3] rounded-3xl flex items-center justify-center text-4xl shadow-sm">🔥</div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 mb-40">
        <div className="max-w-4xl">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8 block">Visi Kami</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E3932] leading-tight tracking-tighter">
            Menjadi partner teknologi terpercaya yang membantu bisnis Indonesia berkembang di era digital melalui solusi kreatif, inovatif, dan skalabel.
          </h2>
        </div>
      </section>

      <section className="px-6 md:px-16 mb-40 border-t border-gray-200 pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8 block">Misi Kami</span>
            <h3 className="text-3xl font-black text-[#1E3932] tracking-tight">Langkah nyata kami untuk mencapai tujuan bersama.</h3>
          </div>
          <div className="space-y-16">
            {[
              "Memberikan solusi digital berkualitas tinggi",
              "Berinovasi dengan teknologi terkini",
              "Membangun hubungan partnership jangka panjang",
              "Mengembangkan talenta digital Indonesia"
            ].map((misi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start group"
              >
                <span className="text-[#C6E23B] font-black text-3xl">0{i + 1}</span>
                <p className="text-3xl md:text-4xl font-black text-[#1E3932] leading-none tracking-tighter transition-transform group-hover:translate-x-2 duration-300">
                  {misi}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-32 rounded-[60px] md:rounded-[100px] shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#C6E23B] mb-4 block">Our Team</span>
              <h2 className="text-5xl font-black text-[#1E3932] tracking-tighter leading-none">Meet the minds behind the magic.</h2>
            </div>
            <p className="text-gray-500 font-medium max-w-xs">Orang-orang di balik layar yang memastikan setiap kode dan desain sempurna.</p>
          </div>

          <TeamGrid />
        </div>
      </section>
    </div>
  );
}