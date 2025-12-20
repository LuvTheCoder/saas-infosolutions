import { partners } from "../data/partners";

function OurClients({ selectedPartnerIds }) {
  const filteredPartners = partners.filter((p) =>
    selectedPartnerIds.includes(p.id)
  );

  return (
    <section className="py-16 md:py-24 bg-white w-full relative overflow-hidden">
      {/* BACKGROUND: Subtle technical grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #0b3c5d 1px, transparent 1px), linear-gradient(to bottom, #0b3c5d 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-[#0b3c5d] font-bold mb-4">
            Strategic Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b3c5d] tracking-tight">
            Our Technology <span className="font-light italic">Partners</span>
          </h2>
        </div>

        {/* LOGO GRID: Highly Responsive 
            2 cols: mobile
            3 cols: small tablets
            4 cols: tablets/laptops
            6 cols: desktop (best for large volumes of clients)
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-slate-100">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="group relative aspect-square sm:aspect-[3/2] bg-white border-r border-b border-slate-100 flex items-center justify-center p-6 md:p-8 transition-all duration-300 hover:z-10 hover:shadow-xl"
            >
              {/* Subtle top-accent on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[#0b3c5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                /* Removed grayscale so logos are clear; mix-blend-multiply ensures white backgrounds match the page */
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 mix-blend-multiply"
              />
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-4 opacity-40">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0b3c5d]">
            // Authorized System Integration Network
          </p>
          <div className="hidden md:block h-px flex-1 bg-slate-200 mx-8" />
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0b3c5d]">
            Est. 2015 // Global Operations
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurClients;