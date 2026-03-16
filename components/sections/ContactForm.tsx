'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, TextArea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-center"
      >
        <div className="w-16 h-16 rounded-full bg-lt-green/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-lt-green" />
        </div>
        <h3 className="text-2xl font-bold text-lt-dark mb-2">Pesan Terkirim!</h3>
        <p className="text-gray-500">Terima kasih, kami akan menghubungi Anda segera.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input label="Nama" placeholder="Nama lengkap Anda" required />
        <Input label="Email" type="email" placeholder="email@example.com" required />
      </div>
      <Input label="Subject" placeholder="Apa yang bisa kami bantu?" required />
      <TextArea label="Pesan" placeholder="Ceritakan tentang proyek Anda..." required />
      <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Mengirim...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={18} /> Kirim Pesan
          </span>
        )}
      </Button>
    </motion.form>
  );
}
