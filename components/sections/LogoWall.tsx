'use client';

export default function LogoWall() {
  
  const logos = [
    { name: 'Data_1', color: 'bg-blue-600', icon: 'A', textColor: 'text-white' },
    { name: 'Data_1', color: 'bg-gray-100', icon: 'B', textColor: 'text-yellow-400' },
    { name: 'Data_1', color: 'bg-black', icon: 'C', textColor: 'text-yellow-400' },
    { name: 'Data_1', color: 'bg-green-400', icon: 'D', textColor: 'text-yellow-400' },
    { name: 'Data_1', color: 'bg-yellow-600', icon: 'E', textColor: 'text-black-400' }
    
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
        <div className="flex animate-marquee whitespace-nowrap py-10"> 
          {displayLogos.map((item, i) => (
            <div
              key={i}
              className="mx-4 flex-shrink-0 w-48 h-64 md:w-64 md:h-80 [perspective:1000px] group"
            >
              <div 
                className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                <div 
                  className={`absolute inset-0 w-full h-full rounded-[40px] flex items-center justify-center overflow-hidden shadow-md [backface-visibility:hidden]
                    ${item.color || 'bg-gray-200'}`}
                >
                  {/* {item.type === 'image' ? (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : ( */}
                    <span className={`text-4xl font-bold ${item.textColor}`}>
                      {item.icon || item.name}
                    </span>
                  {/* )} */}
                </div>

                <div 
                  className="absolute inset-0 w-full h-full rounded-[40px] bg-[#1E3932] text-[#E9C3E6] flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl border-2 border-[#C6E23B]"
                >
                  <span className="text-xl font-black uppercase mb-2 tracking-tighter">View Project</span>
                  <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}