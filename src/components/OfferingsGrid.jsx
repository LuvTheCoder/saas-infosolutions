import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function OfferingsGrid({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full">
      {/* Grid uses gap-px to create 1px lines between cards. 
          xl:grid-cols-4 for better full-width distribution. 
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 border-y border-white/10">
        {data.offerings.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative bg-[#0b3c5d] h-[400px] group overflow-hidden transition-all duration-500 cursor-pointer"
            >
              {/* TECHNICAL BLUEPRINT BACKGROUND */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: `linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)`,
                  backgroundSize: '50px 50px' 
                }} />
              </div>

              {/* MAIN CONTENT CONTAINER */}
              <div className="relative z-10 p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="text-blue-400 font-mono text-[10px] mb-4 tracking-[0.3em] opacity-60">
                    INFRASTRUCTURE // 0{index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION CONTAINER 
                    Using fixed positioning logic ensures the 'How We Help' text 
                    doesn't push the title or footer around.
                */}
                <div className="relative flex-1">
                  <div className={`
                    transition-all duration-500 ease-in-out
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                  `}>
                    <p className="text-blue-100/70 text-base leading-relaxed border-l-2 border-blue-400/40 pl-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* STATIC FOOTER - Never moves */}
                <div className="mt-auto pt-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-blue-400/50 uppercase tracking-widest">
                      {isActive ? 'Solution Active' : 'Details'}
                    </span>
                    <div className={`h-1 transition-all duration-700 rounded-full ${isActive ? 'w-24 bg-blue-400' : 'w-8 bg-blue-900'}`} />
                  </div>
                </div>
              </div>

              {/* GHOST IMAGE BACKGROUND */}
              {/* GHOST IMAGE BACKGROUND */}
              <AnimatePresence>
                {isActive && item.image && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    // INCREASE THIS VALUE (e.g., 0.3 or 0.4) for more visibility
                    animate={{ opacity: 0.8}} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-0 pointer-events-none"
                  >
                    <img
                      src={item.image}
                      alt=""
                      // REMOVED 'brightness-50' so the image is clearer
                      className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                    {/* ADDED: A subtle gradient overlay to ensure text stays readable even with a brighter image */}
                    <div className="absolute inset-0 bg-[#0b3c5d]/40" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OfferingsGrid;