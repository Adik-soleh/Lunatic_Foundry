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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          <div className="space-y-14">
            <div>
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-[0.18em] text-[#4B5563] mb-6 block">Visi Kami</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#1E3932] leading-[1.02] tracking-tighter max-w-4xl">
                Membangun kehadiran digital yang terasa jernih, kuat, dan layak dipercaya sejak pandangan pertama.
              </h2>
              <p className="mt-6 text-[#1E3932]/72 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
                Kami percaya website dan produk digital bukan sekadar pelengkap bisnis. Ia adalah wajah, sistem,
                dan pengalaman yang menentukan bagaimana sebuah brand dinilai hari ini dan dipilih esok hari.
              </p>
            </div>

            <div className="border-t border-[#1E3932]/10 pt-10">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-[0.18em] text-[#4B5563] mb-6 block">Misi Kami</span>
              <h3 className="text-2xl md:text-4xl font-black text-[#1E3932] leading-tight tracking-tighter max-w-3xl">
                Merancang solusi digital yang sederhana untuk digunakan, presisi untuk dijalankan, dan siap bertumbuh bersama bisnis Anda.
              </h3>
              <p className="mt-5 text-[#1E3932]/72 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
                Dari strategi, desain, hingga pengembangan, setiap keputusan kami dibuat untuk menghadirkan hasil yang nyata:
                performa yang cepat, pesan yang jelas, dan pengalaman yang terasa matang di setiap titik interaksi.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-6 top-10 w-40 h-40 rounded-full bg-[#C6E23B]/20 blur-3xl" />
            <div className="relative rounded-[40px] bg-white border border-[#1E3932]/10 shadow-[0_24px_60px_rgba(17,24,39,0.08)] overflow-hidden">
              <div className="aspect-[4/5] bg-[linear-gradient(160deg,#f8faf7_0%,#eef3e6_46%,#e7eddd_100%)] p-8 md:p-10 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#1E3932]" />
                  <span className="w-3 h-3 rounded-full bg-[#C6E23B]" />
                  <span className="w-3 h-3 rounded-full bg-[#E9C3E6]" />
                </div>

                <div className="rounded-[32px] border border-dashed border-[#1E3932]/18 bg-white/70 min-h-[55%] flex items-center justify-center text-center px-8">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#4B5563] mb-3">Placeholder Visual</p>
                    <p className="text-2xl md:text-3xl font-black text-[#1E3932] leading-tight tracking-tight">
                      Area untuk image brand,
                      <br />
                      workspace, atau editorial photo.
                    </p>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-6 text-[#1E3932]">
                  <p className="text-sm md:text-base font-semibold leading-relaxed max-w-xs text-[#1E3932]/70">
                    Gunakan visual yang terasa tenang, premium, dan mencerminkan cara kerja studio Anda.
                  </p>
                  <span className="text-5xl font-black tracking-tighter">LF</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 md:px-16 mb-40 border-t border-gray-200 pt-24 overflow-hidden">
        <div className="pointer-events-none absolute left-8 top-20 w-56 h-56 bg-[#C6E23B]/20 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-[0.18em] text-[#4B5563] mb-8 block">Yang Kami Percaya</span>
            <h3 className="text-3xl font-black text-[#1E3932] tracking-tight leading-tight">
              Kami bukan sekadar vendor.<br />
              Kami partner yang ikut<br />
              bertaruh pada kesuksesan Anda.
            </h3>
          </div>
          <div>
            {[
              {
                title: 'Hasil dulu, estetika mengikuti.',
                desc: 'Website yang cantik tapi tidak menghasilkan bukan prestasi - itu pemborosan.',
              },
              {
                title: 'Teknologi bukan tujuan, tapi alat.',
                desc: 'Kami pilih stack yang tepat untuk kebutuhan Anda, bukan yang sekadar sedang tren.',
              },
              {
                title: 'Transparan dari hari pertama.',
                desc: 'Harga jelas. Scope jelas. Tidak ada biaya kejutan di tengah jalan.',
              },
              {
                title: 'Selesai bukan berarti selamat tinggal.',
                desc: 'Kami tetap ada setelah launch - untuk maintenance, pembaruan, dan pertumbuhan bisnis Anda.',
              }
            ].map((item, i, arr) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className={`group flex gap-8 items-start rounded-3xl px-4 py-5 -mx-4 transition-all duration-300 hover:bg-white/70 hover:shadow-[0_10px_24px_rgba(17,24,39,0.06)] ${i !== arr.length - 1 ? 'border-b border-[#e5e5e5]' : ''}`}
              >
                <span className="text-[#6F8D1A] font-black text-3xl transition-all duration-300 group-hover:scale-110 group-hover:text-[#5f7916]">0{i + 1}</span>
                <div className="space-y-2 transition-transform group-hover:translate-x-2 duration-300">
                  <h4 className="text-3xl md:text-4xl font-black text-[#1E3932] leading-none tracking-tighter">
                    {item.title}
                  </h4>
                  <p className="text-[#1E3932]/75 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-32 rounded-[60px] md:rounded-[100px] shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-[0.18em] text-[#6F8D1A] mb-4 block">Our Team</span>
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