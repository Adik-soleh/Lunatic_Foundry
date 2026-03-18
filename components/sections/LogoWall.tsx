'use client';

const techStack = [
  { name: 'Python',     slug: 'python',      color: '#3776AB' },
  { name: 'React',      slug: 'react',        color: '#61DAFB' },
  { name: 'Next.js',    slug: 'nextdotjs',    color: '#000000' },
  { name: 'Astro',      slug: 'astro',        color: '#FF5D01' },
  { name: 'HTML5',      slug: 'html5',        color: '#E34F26' },
  { name: 'CSS3',       slug: 'css',          color: '#1572B6' },
  { name: 'JavaScript', slug: 'javascript',   color: '#F7DF1E' },
];

export default function LogoWall() {
  // Duplicate list so keyframe translateX(-50%) creates a seamless loop
  const items = [...techStack, ...techStack];

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

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee gap-4 py-4">
          {items.map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center gap-2 px-6 py-4 bg-[#FBFCF8] rounded-2xl shadow-sm border border-[#E4E8DD] min-w-[108px]"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                alt={tech.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-sm font-semibold text-[#17201E] whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}