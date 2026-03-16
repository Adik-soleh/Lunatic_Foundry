import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat ANYWARE_AGENCY, tim ahli di balik solusi digital inovatif untuk bisnis Anda di Indonesia.',
  openGraph: {
    title: 'Tentang Kami | ANYWARE_AGENCY',
    description: 'Mengenal visi, misi, dan tim profesional di ANYWARE_AGENCY.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
