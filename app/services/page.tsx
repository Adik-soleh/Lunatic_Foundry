'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/services';
import { Palette, Smartphone, Globe, Lightbulb, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Palette, Smartphone, Globe, Lightbulb,
};

const cardStyles = [
  {
    bg: 'bg-[#EBCFDE]',
    textColor: 'text-[#2D2D2D]',
    glow: 'hover:shadow-[0_0_40px_rgba(235,207,222,0.6)]'
  },
  {
    bg: 'bg-[#D5E77A]',
    textColor: 'text-[#2D2D2D]',
    glow: 'hover:shadow-[0_0_40px_rgba(213,231,122,0.6)]'
  },
  {
    bg: 'bg-[#163094]',
    textColor: 'text-white',
    glow: 'hover:shadow-[0_0_50px_rgba(22,48,148,0.5)]'
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[linear-gradient(180deg,#F7F8F4_0%,#F1F4EC_100%)]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-lt-dark mb-4 tracking-tighter">
            Layanan Kami
          </h2>
          <p className="text-[#2F3A36]/82 text-lg max-w-xl">
            Solusi digital menyeluruh untuk kebutuhan bisnis Anda
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {services.slice(0, 2).map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              const style = cardStyles[i];

              return (
                <motion.div
                  key={service.slug}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex-1"
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div className={`${style.bg} ${style.glow} rounded-[32px] p-8 h-full flex flex-col justify-between transition-all duration-500`}>
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-white/50 backdrop-blur-md flex items-center justify-center mb-6">
                          <Icon size={24} className={style.textColor} />
                        </div>
                        <h3 className={`text-2xl font-black mb-3 ${style.textColor}`}>{service.title}</h3>
                      </div>
                      <p className={`text-sm font-medium opacity-80 mb-6 line-clamp-2 ${style.textColor}`}>
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="h-full">
            {services.slice(2, 3).map((service) => {
              const Icon = iconMap[service.icon] || Globe;
              const style = cardStyles[2];

              return (
                <motion.div
                  key={service.slug}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="h-full"
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div className={`${style.bg} ${style.glow} rounded-[40px] p-10 h-full flex flex-col justify-end min-h-[500px] transition-all duration-500 relative overflow-hidden group`}>
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />

                      <div className="mb-auto">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center">
                          <Icon size={28} className="text-white" />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-3xl font-black text-white mb-4 leading-tight">{service.title}</h3>
                        <p className="text-white/78 text-base mb-8 max-w-xs">{service.description}</p>
                        <div className="flex items-center gap-2 text-white font-bold text-sm">
                          Lihat Detail <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}