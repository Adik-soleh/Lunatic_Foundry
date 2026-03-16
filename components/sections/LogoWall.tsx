'use client';

export default function LogoWall() {
  
  const logos = [
    { name: 'Comedy', color: 'bg-black', icon: 'Ⓒ', textColor: 'text-yellow-400' },
    { name: 'Pharrell', img: 'https://via.placeholder.com/150', type: 'image' },
    { name: 'Skater', img: 'https://via.placeholder.com/150', type: 'image' },
    { name: 'TokoKu', color: 'bg-blue-600', textColor: 'text-white' },
    { name: 'DataViz', color: 'bg-gray-100', textColor: 'text-black' },
  ];

  
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-[#F9F9F9] overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
          Trusted by Leading Companies<br />
          <span className="text-blue-600">LETS GO !</span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {displayLogos.map((item, i) => (
            <div
              key={i}
              className={`mx-4 flex-shrink-0 w-48 h-64 md:w-64 md:h-80 rounded-[40px] flex items-center justify-center overflow-hidden shadow-sm transition-transform hover:scale-105 duration-300
                ${item.color || 'bg-gray-200'}`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className={`text-4xl font-bold ${item.textColor}`}>
                  {item.icon || item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}