import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      
      {/* 1. THE BACKGROUND IMAGE - Increased brightness and removed grayscale */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
          filter: "brightness(0.8) contrast(1.1)" // Increased from 0.3 to 0.6 for visibility
        }}
      />

      {/* 2. OVERLAY LAYERS - lightened and repositioned */}
      <div className="absolute inset-0 z-0">
        {/* Technical grid */}
        <div className="absolute inset-0 opacity-15" 
             style={{ 
               backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px), linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
               backgroundSize: '80px 80px' 
             }} 
        />
        
        {/* REPLACED solid blue tint with a Horizontal Gradient 
            This keeps the RIGHT side clear for the image and the LEFT side dark for the text.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3c5d] via-[#0b3c5d]/40 to-transparent" />
        
        {/* Subtle Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b3c5d]/80 via-transparent to-transparent opacity-60" />
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
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-cyan-400 font-bold">
                {text}
                <span className="ml-1 inline-block w-[2px] h-4 bg-cyan-400 animate-pulse" />
              </span>
            </div>

            {/* MAIN HEADING - "Customer First" philosophy focus [cite: 5, 25] */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.05] text-white tracking-tighter mb-8 uppercase">
              SAAS INFOSOLUTIONS<br />
              <span className="text-white/30 italic font-light capitalize">
                Leave {" "}
              </span>
              <span className="text-white/30 italic font-light lowercase">
                Your IT  worries with us.  
              </span>
              
            </h1>

            {/* DESCRIPTION - End-to-end IT solutions [cite: 6] */}
            <p className="text-white/80 max-w-xl mb-12 text-lg md:text-xl font-light leading-relaxed border-l-2 border-cyan-500 pl-6">
              Empowering organizations with a mix of traditional and 
              innovative IT solutions since 2015.
            </p>

            {/* CTAS */}
            <div className="flex flex-wrap gap-5 justify-start">
              <Link 
                to="/contact" 
                className="w-fit inline-block bg-cyan-500 text-[#0b3c5d] px-10 py-5 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95 border border-cyan-500"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SIDE DATA - Establishment date from company profile [cite: 6] */}
      <div className="absolute right-10 bottom-10 hidden lg:block font-mono text-[10px] text-white/40 uppercase tracking-[0.5em] rotate-90 origin-right">
        EST. 2015 // IT ARCHITECTURE [cite: 6]
      </div>
    </section>
  );
}

export default Hero;