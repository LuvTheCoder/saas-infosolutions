import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0b3c5d] text-slate-300 pt-24 pb-12 overflow-hidden border-t border-white/10">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
             backgroundSize: '80px 80px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-20">

          {/* BRAND COLUMN */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="text-white text-3xl font-bold tracking-tighter mb-6 flex items-center gap-2">
              SAAS <span className="text-blue-400">Infosolutions</span>
            </h3>
            <p className="text-lg leading-relaxed text-slate-400 font-light mb-8">
              Architecting secure, scalable IT foundations. We empower global organizations 
              to navigate digital evolution with precision-engineered infrastructure.
            </p>
            <div className="flex items-center gap-4 group">
               <div className="h-px w-8 bg-blue-500 group-hover:w-12 transition-all duration-300" />
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-400">
                 Future-Ready Infrastructure
               </span>
            </div>
          </div>

          {/* LINKS GRID CONTAINER */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
            
            {/* SOLUTIONS */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">
                Solutions
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/solutions/it-security" className="hover:text-blue-400 transition-colors">IT Security</Link></li>
                <li><Link to="/solutions/active-it-networking" className="hover:text-blue-400 transition-colors">Active Networking</Link></li>
                <li><Link to="/solutions/passive-it-networking" className="hover:text-blue-400 transition-colors">Passive Networking</Link></li>
                <li><Link to="/solutions/automation" className="hover:text-blue-400 transition-colors">Automation & BI</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">
                Services
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/services/it-consulting" className="hover:text-blue-400 transition-colors">IT Consulting</Link></li>
                <li><Link to="/services/managed-it-services" className="hover:text-blue-400 transition-colors">Managed IT</Link></li>
                <li><Link to="/services/it-support-amc" className="hover:text-blue-400 transition-colors">Support & AMC</Link></li>
                <li><Link to="/services/greenfield-projects" className="hover:text-blue-400 transition-colors">Greenfield Projects</Link></li>
              </ul>
            </div>

            {/* CONTACT & CTA */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">
                Reach Us
              </h4>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>Pune, Maharashtra, India</p>
                <p className="text-blue-400 font-mono text-xs">sales@saasinfosolutions.com</p>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#0b3c5d] font-bold text-xs uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300 group"
                  >
                    Get in Touch
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM LEGAL ROW */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
            <span>© {currentYear} // SAAS Infosolutions</span>
            <span className="hidden md:block">|</span>
            <span className="text-slate-600">Secure. Scalable. Reliable.</span>
          </div>

          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            
          </div>

        </div>
      </div>
      
      {/* BOTTOM CORNER DECORATION */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}

export default Footer;