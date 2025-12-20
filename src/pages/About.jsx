import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import CountUp from "../components/CountUp";
import Leadership from "../components/Leadership";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";

function About() {
  const industries = [
    "Manufacturing", "IT & ITES", "Healthcare", "Education", 
    "Corporate Offices", "BFSI", "Government", "Hospitality"
  ];

  return (
    <>
      <Navbar />

      <main className="pt-[60px] md:pt-[80px] bg-white text-slate-900 overflow-x-hidden">
        <Breadcrumb items={["Home", "Company", "About Us"]}/>
        
        {/* 1. HERO */}
        <AboutHero />

        {/* 2. WHO WE ARE (Editorial Layout) */}
        <section className="relative py-16 md:py-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              
              {/* Left Side: Large Title */}
              <div className="z-10">
                <span className="font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase text-blue-600 mb-4 md:mb-6 block">
                  Identity // Core
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0b3c5d] tracking-tighter leading-[1.1] mb-6 md:mb-8">
                  A Full-Spectrum <br className="hidden sm:block" />
                  <span className="text-slate-400">IT Solutions Partner.</span>
                </h2>
                <div className="h-1.5 md:h-2 w-16 md:w-24 bg-[#0b3c5d] rounded-full" />
              </div>

              {/* Right Side: Narrative Content */}
              <div className="space-y-6 md:space-y-8 z-10">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                  Established in 2015, SAAS Infosolutions specializes in 
                  transforming business landscapes through smart automation, 
                  robust cybersecurity, and scalable cloud infrastructure.
                </p>
                <div className="space-y-4 md:space-y-6 text-slate-500 leading-relaxed font-light text-sm md:text-base">
                  <p>
                    We provide comprehensive IT sales, service, and integration, 
                    building our reputation on industry-leading technical expertise 
                    and an unwavering commitment to our clients.
                  </p>
                  <p>
                    From IaaS to SaaS, our solutions are engineered to ensure your 
                    business remains connected, secure, and ready for the next 
                    evolution of digital technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle Background Watermark - Adjusted for Mobile */}
          <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 text-[120px] md:text-[200px] font-black text-slate-50 pointer-events-none select-none -z-0">
            2015
          </div>
        </section>

        {/* 3. STATS (Responsive Grid) */}
        <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            {/* grid-cols-1 on tiny phones, 2 on tablets, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 overflow-hidden shadow-xl md:shadow-2xl shadow-slate-200/50">
              {[
                { label: "Years in Industry", val: 10, suffix: "+" },
                { label: "Happy Clients", val: 500, suffix: "+" },
                { label: "Services Delivered", val: 50, suffix: "+" },
                { label: "Transactions Managed", val: 3000, suffix: "+" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 md:p-12 text-center group hover:bg-slate-50 transition-colors">
                  <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400 mb-4 md:mb-6 block">
                    Metric // 0{i + 1}
                  </span>
                  <div className="text-4xl md:text-6xl font-bold text-[#0b3c5d] tracking-tighter mb-2 md:mb-4">
                    <CountUp end={stat.val} suffix={stat.suffix} />
                  </div>
                  <p className="text-slate-500 font-medium tracking-wide uppercase text-[9px] md:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. LEADERSHIP */}
        <Leadership />

        {/* 5. INDUSTRIES (Responsive Sector Grid) */}
        <section className="py-20 md:py-32 bg-[#0b3c5d] relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <span className="text-blue-400 font-mono text-[9px] md:text-[10px] tracking-[0.5em] uppercase mb-3 md:mb-4 block">
                  Vertical Alignment
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                  Industries We <span className="text-blue-400">Serve</span>
                </h2>
              </div>

              {/* Grid: 2 columns on mobile, 3 on small tablets, 4 on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {industries.map((industry, i) => (
                  <div key={i} className="group p-4 md:p-6 bg-white/5 border border-white/10  hover:bg-white/10 hover:border-blue-400/50 transition-all text-center flex items-center justify-center">
                    <span className="text-blue-100/80 text-xs md:text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
           </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;