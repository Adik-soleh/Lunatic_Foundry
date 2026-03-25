'use client';

import React from 'react';

interface Tech {
  name: string;
  slug: string;
  color: string;
}

const techStack: Tech[] = [
  { name: 'Python', slug: 'python', color: '#3776AB' },
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: '#000000' },
  { name: 'Astro', slug: 'astro', color: '#FF5D01' },
  { name: 'HTML5', slug: 'html5', color: '#E34F26' },
  { name: 'CSS3', slug: 'css', color: '#1572B6' },
  { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
  { name: 'Figma', slug: 'figma', color: '#F24E1E' },
];

function LogoCard({ tech }: { tech: Tech }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-6 py-4 bg-[#FBFCF8] rounded-2xl shadow-sm border border-[#E4E8DD]"
      style={{ minWidth: '112px' }}
    >
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
        alt={tech.name}
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
        loading="lazy"
        decoding="async"
      />
      <span className="text-sm font-semibold text-[#17201E] whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export default function LogoWall() {
  /**
   * Teknik: 4 salinan identik dalam satu flex-row.
   * Keyframe: translateX(0) → translateX(-25%)
   * Saat -25% tercapai, browser reset ke 0 → visual identik karena
   * copy ke-2 tepat berada di posisi yang sama dengan copy ke-1 di awal.
   * → Zero glitch, seamless infinite scroll.
   */
  const copies = ['a', 'b', 'c', 'd'] as const;

  return (
    <section className="py-20 bg-[#F2F4EF] overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-[#17201E] tracking-tight">
          Built with the right tools.
        </h2>
        <p className="mt-3 text-[#4F5B57] text-base md:text-lg font-medium">
          Teknologi yang kami gunakan — proven, modern, dan production-ready.
        </p>
      </div>

      <div className="marquee-viewport" aria-hidden="true">
        <div className="marquee-track">
          {copies.flatMap((copy) =>
            techStack.map((tech) => (
              <LogoCard key={`${copy}-${tech.slug}`} tech={tech} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}