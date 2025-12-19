import React from "react";
import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const philosophyData = [
  {
    title: "Customer First Philosophy",
    icon: <HeartHandshake className="text-cyan-400" size={40} />,
    category: "MANAGEMENT logic",
    // Source: Being reachable and helpful is our core differentiator 
    description: "We believe in being reachable at the exact time of need. Our helpful nature is why clients choose us over competition to gain and hold their confidence.",
  },
  {
    title: "Logical Infrastructure",
    icon: <Zap className="text-cyan-400" size={40} />,
    category: "ARCHITECTURE skeleton",
    // Source: Networking is the backbone/skeleton and should be logical 
    description: "IT networking is the skeleton of any organization. We design simple, logical structures that prioritize performance and redundancy over just port density.",
  },
  {
    title: "Subjective IT Security",
    icon: <ShieldCheck className="text-cyan-400" size={40} />,
    category: "STRATEGY identification",
    // Source: Security is subjective and should focus on business-critical areas 
    description: "Security is not just fancy technology. We focus on protecting what is business-critical, ensuring your reputation and intellectual property are safe.",
  }
];

function Philosophy() {
  return (
    <section className="w-full bg-[#0b3c5d] py-24 px-6 relative overflow-hidden">
      {/* GLOBAL BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '30px 30px' 
        }} 
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-24 grid lg:grid-cols-2 items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-cyan-500" />
              <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-cyan-400">
                Established 2015 // core values
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.85]">
              Our <br />
              <span className="text-slate-400/20 italic font-light lowercase">Foundations.</span>
            </h2>
          </div>
          
          <div className="max-w-md border-l border-white/10 pl-8 pb-2">
            <p className="text-slate-400 text-sm font-light leading-relaxed uppercase tracking-widest mb-4">
              "Leave All Your IT worries with US." 
            </p>
            <p className="text-white/60 text-xs leading-relaxed italic">
              Providing a mix of Traditional & Innovative solutions to remain dynamic with changing business needs. 
            </p>
          </div>
        </div>

        {/* PERMANENT BLUEPRINT GRID - NO HOVER REQUIRED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border-y border-white/10">
          {philosophyData.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#0b3c5d] p-12 flex flex-col min-h-[500px] border-x border-white/5"
            >
              {/* INDIVIDUAL CARD BLUEPRINT DECAL */}
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <div className="w-12 h-12 border-t border-r border-cyan-500/50" />
              </div>

              <div className="mb-12">
                <div className="text-cyan-500 font-mono text-[10px] mb-10 tracking-[0.4em] opacity-60">
                  {item.category} // 0{index + 1}
                </div>
                <div className="mb-8 text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-white leading-tight uppercase tracking-tighter max-w-[80%]">
                  {item.title}
                </h3>
              </div>

              <div className="flex-1">
                <p className="text-slate-300 text-lg leading-relaxed font-light border-l border-cyan-500/30 pl-6">
                  {item.description}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-cyan-500" />
                    <div className="w-8 h-[1px] bg-cyan-500 self-center" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
                    Verified competency 
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM MOTTO BAR */}
        <div className="mt-24 text-center">
            <div className="inline-block px-10 py-6 border border-white/10 bg-white/[0.02]">
                <h3 className="text-white text-3xl font-bold tracking-tighter uppercase mb-2">
                    "We Believe in Customer First" 
                </h3>
                <p className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                    SAAS Infosolutions // Management Policy
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;