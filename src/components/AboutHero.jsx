import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto min-h-[80vh] flex flex-col lg:flex-row">
        
        {/* LEFT CONTENT AREA (Clean & White) */}
        <div className="lg:w-1/2 flex flex-col justify-center px-6 py-20 lg:px-16 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#0b3c5d]" />
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-slate-400">
                SAAS Infosolutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
              Built on Values <br />
              <span className="text-[#0b3c5d]">that Matter.</span>
            </h1>

            <p className="text-slate-500 text-lg md:text-xl max-w-md leading-relaxed font-light">
              We believe that technical excellence is only sustainable when 
              supported by unyielding integrity and a long-term vision.
            </p>
          </motion.div>
        </div>

        {/* RIGHT IMAGE AREA (The Visual Punch) */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          {/* Geometric Accent Box */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#0b3c5d] translate-x-4 translate-y-4 -z-10 hidden lg:block" />
          
          <div className="relative w-full h-full overflow-hidden shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1661488246595-7f21bf98b7cb?q=80&w=1170&auto=format&fit=crop"
              alt="Company values"
              className="w-full h-full object-cover transition-all duration-1000"
            />
            {/* Gradient Overlay to blend image */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-[#0b3c5d]/20 mix-blend-multiply" />
          </div>

          {/* FLOATING VALUE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 left-10 right-10 lg:-left-20 lg:right-auto bg-[#0b3c5d] p-8 lg:p-10 text-white shadow-2xl max-w-sm"
          >
            <p className="text-xl md:text-2xl font-medium leading-snug">
              "Dedicated to doing things the right way, every single time."
            </p>
            <div className="mt-6 flex items-center gap-4">
               <div className="w-8 h-px bg-white/30" />
               <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                 Foundational Principle
               </span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Background Decor (Grid) */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0b3c5d 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
      />
    </section>
  );
}

export default AboutHero;