'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/services';
import { Palette, Smartphone, Globe, Lightbulb, ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Smartphone,
  Globe,
  Lightbulb,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-lt-dark mb-4">Layanan tidak ditemukan</h1>
          <Link href="/services" className="text-lt-green font-semibold hover:underline">
            ← Kembali ke Layanan
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Globe;

  return (
    <div className="pt-24">
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-lt-green transition-colors mb-8">
            <ArrowLeft size={18} /> Kembali ke Layanan
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className={`rounded-[2rem] p-8 md:p-12 mb-12 bg-${service.color}`}>
              <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mb-6">
                <Icon size={32} strokeWidth={2} className="text-lt-dark" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-lt-dark mb-4">
                {service.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-lt-dark mb-6">Fitur Layanan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 bg-lt-pastel rounded-full px-5 py-3"
                  >
                    <CheckCircle size={18} className="text-lt-green flex-shrink-0" />
                    <span className="text-lt-dark font-medium text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-lt-dark mb-6">Tools yang Digunakan</h2>
              <div className="flex flex-wrap gap-3">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-lt-dark text-white text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-lt-green/10 to-lt-purple/10 rounded-[2rem] p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-lt-dark mb-3">
                Tertarik dengan layanan ini?
              </h3>
              <p className="text-gray-500 mb-6">
                Konsultasikan kebutuhan Anda secara gratis bersama tim kami.
              </p>
              <Button variant="primary" size="lg" href="/contact">
                Konsultasi Gratis →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
