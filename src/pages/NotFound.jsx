import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0b3c5d] flex items-center justify-center p-8 relative overflow-hidden">
      {/* BACKGROUND: Subtle Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px' 
        }} />
      </div>

      <div className="relative z-10 max-w-5xl w-full border-l border-white/10 pl-8 md:pl-16">
        {/* HEADER SECTION */}
        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-blue-400 font-mono text-xs mb-4 tracking-[0.5em] uppercase opacity-60"
          >
            Error Protocol // 404
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Page Not <span className="text-blue-400">Found.</span>
          </motion.h1>
        </header>

        {/* CONTENT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed max-w-md">
              The requested resource is unavailable. This may be due to a decommissioned link or a change in our digital infrastructure.
            </p>
          </motion.div>

          {/* SIMPLIFIED NAVIGATION - Matches corporate site structure */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            
          </motion.div>
        </div>

        {/* FOOTER ACTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <button 
            onClick={() => window.history.back()}
            className="bg-white text-[#0b3c5d] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-blue-400 hover:text-white transition-all duration-500"
          >
            Go Back
          </button>
        </motion.div>
      </div>

      {/* DECORATIVE ELEMENT: Large subtle number in background */}
      <div className="absolute -bottom-20 -right-20 text-[400px] font-bold text-white/[0.02] select-none pointer-events-none">
        404
      </div>
    </div>
  );
};

export default NotFound;