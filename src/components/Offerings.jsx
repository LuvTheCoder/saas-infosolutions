import OfferingCard from "./OfferingCard";
import { motion } from "framer-motion";

function Offerings() {
  const offerings = [
    {
      heading: "IT Security",
      description: "Cyber, physical and logical security solutions to protect critical enterprise assets.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      link: "/solutions/it-security",
    },
    {
      heading: "IT Networking (Active)",
      description: "End-to-end active networking solutions designed for scalability and reliability.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop",
      link: "/solutions/active-it-networking",
    },
    {
      heading: "IT Networking (Passive)",
      description: "End-to-end passive networking solutions designed for scalability and reliability.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop",
      link: "/solutions/passive-it-networking",
    },
    {
      heading: "Digital Productivity Management",
      description: "Workflow automation, BI and productivity monitoring solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "/solutions/digital-productivity",
    },
    {
      heading: "IT Software & Tools",
      description: "Modern IT environments require multiple tools for daily operations.",
      image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg",
      link: "/solutions/it-software"
    },
    {
      heading: "Automation",
      description: "Servers, storage, backup, AMC and IT support outsourcing for seamless operations.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "/solutions/automation",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* 1. ARCHITECTURAL HEADER (Brand Color) */}
      <div className="bg-[#0b3c5d] pt-32 pb-64 relative">
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: `linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)`,
               backgroundSize: '50px 50px' 
             }} 
        />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-blue-400" />
                <span className="font-mono text-sm tracking-[0.4em] uppercase bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  System Architecture
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                Our <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent ">Offerings</span>
              </h2>
              
              <p className="text-blue-100/60 text-xl leading-relaxed font-light max-w-xl">
                Deploying enterprise-grade infrastructure with a focus on high availability, logical security, and seamless integration.
              </p>
            </motion.div>

            {/* Technical Metadata (Right Side) */}
            <div className="hidden lg:block text-right font-mono text-[10px] text-blue-400/40 space-y-1">
              <p>REF_ID: SAAS_INFOSOLUTIONS.04</p>
              <p>LOC: 21.1458° N, 79.0882° E</p>
              <p>STATUS: ACTIVE_DEPLOYMENT</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE FLOATING GRID */}
      <div className="max-w-[1440px] mx-auto px-6 -mt-40 pb-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200  overflow-hidden shadow-2xl shadow-blue-900/20">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white group relative"
            >
              {/* Card Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 z-30" />
              
              <div className="p-2 bg-slate-50/50 group-hover:bg-white transition-colors duration-500 h-full">
                <OfferingCard data={item} />
              </div>

              {/* Index Number Watermark */}
              <span className="absolute bottom-4 right-6 font-mono text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* SECTION FOOTER CALLOUT */}
        <div className="mt-20 border-t border-slate-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-slate-400 text-xs font-mono tracking-widest uppercase">
              // SAAS INFOSOLUTIONS
            </p>
          </div>
          <p className="text-slate-300 text-[10px] uppercase font-bold tracking-[0.5em]">
            Integrity • Scalability • Innovation
          </p>
        </div>
      </div>

      {/* Side Decorative Glow */}
      <div className="absolute -left-24 top-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

export default Offerings;