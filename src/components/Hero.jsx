import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const [text, setText] = useState("");
  const fullText = "SAAS Infosolutions";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0b3c5d]">
      
      {/* 1. THE BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale"
        style={{ 
          backgroundImage: "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
          filter: "brightness(0.3) contrast(1.1)" // Darkens the image to keep text readable
        }}
      />

      {/* 2. OVERLAY LAYERS */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid for technical feel */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
               backgroundSize: '60px 60px' 
             }} 
        />
        {/* Deep Blue Tint Overlay */}
        <div className="absolute inset-0 bg-[#0b3c5d]/60 mix-blend-multiply" />
        {/* Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b3c5d] via-transparent to-transparent opacity-90" />
      </div>

      {/* 3. CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* TYPING BRAND NAME */}
            <div className="flex items-center gap-3 mb-10">
              <span className="font-mono text-sm tracking-[0.4em] uppercase text-blue-400 font-bold">
                {text}
                <span className="ml-1 inline-block w-[1px] h-4 bg-white animate-pulse" />
              </span>
            </div>

            {/* MAIN HEADING - NO GRADIENT */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white tracking-tighter mb-10">
              Helping organisations <br />
              <span className="text-white/40 italic font-light">
                get future ready
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-white/60 max-w-xl mb-12 text-lg md:text-xl font-light leading-relaxed">
              We empower global enterprises with digital transformation 
              through precision-engineered technological solutions.
            </p>

            {/* CTAS */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-4 font-bold bg-white text-[#0b3c5d] hover:bg-blue-50 transition-colors shadow-lg shadow-black/20">
                Lets Connect
              </button>
              
              {/* <button className="px-10 py-4 font-bold border border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Methodology
              </button> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* SIDE DATA */}
      <div className="absolute right-10 bottom-10 hidden lg:block font-mono text-[10px] text-white/30 uppercase tracking-[0.5em] rotate-90 origin-right">
        EST. 2024 // GLOBAL SYSTEMS
      </div>
    </section>
  );
}

export default Hero;