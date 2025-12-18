import { useRef } from "react";
import { partners } from "../data/partners";

function OurClients({ selectedPartnerIds }) {
  const filteredPartners = partners.filter(p =>
    selectedPartnerIds.includes(p.id)
  );

  // For a smooth infinite loop, we triple the array to ensure no gaps
  const scrollingPartners = [...filteredPartners, ...filteredPartners, ...filteredPartners];

  return (
    <section className="py-24 bg-[#0b3c5d] w-full overflow-hidden border-t border-white/5">
      <div className="w-full">
        
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <span className="
            font-mono text-sm tracking-[0.3em] uppercase mb-4 block
            bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 
            bg-clip-text text-transparent
          ">
            Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Technology <span className="text-blue-400">Partners</span>
          </h2>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="relative flex overflow-hidden group">
          
          {/* FADES: Masking the edges for a professional "dissolve" effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b3c5d] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b3c5d] to-transparent z-10 pointer-events-none" />

          {/* INFINITE ANIMATION TRACK */}
          <div className="flex animate-marquee whitespace-nowrap py-4 group-hover:pause">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="
                  mx-10 
                  flex-shrink-0 
                  w-48 h-28 
                  bg-white/5 
                  backdrop-blur-sm
                  border border-white/10
           
                  flex items-center justify-center 
                  p-6
                  transition-all 
                  duration-500 
                  hover:bg-white 
                  hover:border-blue-400
                  hover:scale-110
                  group/logo
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="
                    h-12 w-auto 
                    object-contain 
                    grayscale 
                    opacity-50 
                    brightness-200 
                    group-hover/logo:grayscale-0 
                    group-hover/logo:opacity-100 
                    group-hover/logo:brightness-100
                    transition-all 
                    duration-500
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* SUBTEXT */}
        <div className="mt-12 text-center">
          <p className="text-blue-200/30 text-xs font-mono tracking-widest uppercase">
            // Authorized System Integrator & Solutions Partner
          </p>
        </div>
      </div>

      {/* CSS For the Infinite Loop */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .group-hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default OurClients;