import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Siap untuk mendigitalkan bisnis Anda? Hubungi ANYWARE_AGENCY sekarang untuk konsultasi gratis.',
  openGraph: {
    title: 'Hubungi Kami | ANYWARE_AGENCY',
    description: 'Bicarakan proyek Anda dengan tim kami.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
