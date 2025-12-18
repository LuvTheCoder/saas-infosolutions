import { useParams } from "react-router-dom";
import { solutionsData } from "./solutionsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfferingsGrid from "../components/OfferingsGrid";
import OurClients from "../components/OurClients";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animation.js";
import Breadcrumb from "../components/Breadcrumb.jsx";

function Solution() {
  const { slug } = useParams();
  const data = solutionsData[slug];

  if (!data) {
    return (
      <div className="pt-[80px] px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">Solution not found</h2>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <main className="pt-[80px] bg-gray-100 text-slate-800">

      <Breadcrumb items = {data.breadcrumbPath}/>

      {/* HERO */}
      <section
          className="relative h-[85vh] px-6 py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url(${data.image})`,
          }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
          {data.title}
        </h1>

        {/* <div className="max-w-3xl space-y-4">
          {data.descriptionPoints.map((point, i) => (
            <div key={i} className="flex gap-3 text-white leading-relaxed">
              <span className="text-white font-semibold">•</span>
              <span>{point}</span>
            </div>
          ))}
        </div> */}
      </section>

{data.beliefs && (
  <section className="py-24 bg-[#0b3c5d] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative">
      
      {/* PROFESSIONAL BACKGROUND ACCENT */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER */}
      <div className="mb-20 border-l-4 border-blue-400 pl-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Our{" "}
          <span className="
            inline-block
            bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 
            bg-clip-text text-transparent
            
            selection:text-white
          ">
            Philosophy
          </span>
        </h2>
        <p className="text-blue-100/70 text-lg max-w-2xl leading-relaxed">
          Guided by industry-proven principles, we build IT foundations that 
          prioritize business continuity, security, and long-term scalability.
        </p>
      </div>

      {/* BELIEFS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-blue-900/30 border border-blue-900/30 rounded-3xl overflow-hidden shadow-2xl">
        {data.beliefs.map((point, i) => (
          <div
            key={i}
            className="
              group
              relative
              bg-[#0b3c5d]
              p-10
              transition-all
              duration-500
              hover:bg-[#114b71]
              flex
              flex-col
              min-h-[280px]
            "
          >
            {/* SUBTLE NUMBERING */}
            <span className="text-sm font-mono text-blue-400/40 mb-6 block tracking-widest group-hover:text-blue-300 transition-colors">
              PHASE // { (i + 1).toString().padStart(2, '0') }
            </span>

            {/* CONTENT */}
            <div className="relative z-10 flex-1">
              <h3 className="text-white text-lg font-medium leading-relaxed group-hover:text-blue-50 transition-colors">
                {point}
              </h3>
            </div>

            {/* DECORATIVE ELEMENT: BOTTOM GLOW */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 group-hover:w-full transition-all duration-700 ease-in-out" />
            
            {/* CORNER ACCENT */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-400">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CALLOUT */}
      <div className="mt-16 text-center">
        <p className="text-blue-200/50 text-sm italic">
          * These principles form the core of every solution we architect.
        </p>
      </div>
    </div>
  </section>
)}

      
      {/* WHAT WE OFFER */}
      {/* WHAT WE OFFER - FULL WIDTH BLUEPRINT SECTION */}
      <section className="bg-[#0b3c5d] py-24 w-full overflow-hidden border-t border-white/5">
        <div className="w-full px-6 md:px-12 mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              Service Portfolio
            </span>
            <h2 className="text-5xl max-lg:text-4xl font-bold text-white tracking-tight">
              What We {" "} <span className="
                        inline-block
                        bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 
                        bg-clip-text text-transparent
                        
                        selection:text-white
                      ">
                        Offer
                      </span>
            </h2>
          </motion.div>
        </div>

        {/* No max-width container here ensures the grid is 100% wide */}
        <div className="w-full">
          <OfferingsGrid data={data}/>
        </div>
      </section>
      
      {data.approach && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100">
              
              {/* Left Strategy Panel */}
              <div className="lg:col-span-5 bg-[#0b3c5d] p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-block w-12 h-1 bg-blue-400 mb-8" />
                <h2 className="text-3xl font-bold text-white mb-8 leading-tight">
                  Our Strategic <br /> 
                  <span className="text-blue-300">Methodology</span>
                </h2>
                <p className="text-blue-100/80 text-lg leading-relaxed mb-8">
                  {data.approach}
                </p>
                <div className="flex items-center gap-4 text-blue-400 font-semibold uppercase tracking-widest text-xs">
                  <span>Execution Framework</span>
                  <div className="flex-1 h-px bg-blue-400/20" />
                </div>
              </div>

              {/* Right Execution Steps */}
              <div className="lg:col-span-7 bg-slate-50 p-12 lg:p-16 flex flex-col justify-center">
                <div className="space-y-10">
                  {data.approachPoints?.map((point, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-100 text-blue-600 font-mono text-sm font-bold group-hover:bg-[#0b3c5d] group-hover:border-[#0b3c5d] group-hover:text-white transition-all duration-300">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-700 text-lg font-medium leading-snug pt-1">
                          {point}
                        </p>
                        <div className="mt-4 h-px w-0 bg-blue-200 group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}
      <OurClients selectedPartnerIds={data.selectedPartnerIds}/>
      
      {/* INDUSTRIES SECTION */}
<section className="bg-[#0b3c5d] py-24 relative overflow-hidden">
  
  {/* TOP BORDER: GRADIENT LINE WITH ACCENT */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0b3c5d] border border-blue-400/30 border-t-0 rounded-b-xl text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em] z-10">
    Sector Analysis
  </div>

  <div className="max-w-7xl mx-auto px-6 relative">
    
    {/* BACKGROUND GLOW ACCENT */}
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

    {/* HEADER */}
    <div className="mb-12 border-l-2 border-blue-400/50 pl-6">
      <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
        Target <span className="text-blue-400">Verticals</span>
      </h2>
      <p className="text-blue-100/60 text-sm max-w-xl leading-relaxed">
        Our solutions are architected to meet the unique compliance and 
        operational rigors of these specific industry sectors.
      </p>
    </div>

    {/* INDUSTRY CARDS GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
      {data.industries.map((industry, i) => (
        <div
          key={i}
          className="
            group
            relative
            bg-white/5
            backdrop-blur-sm
            border border-white/10
            p-6
            
            transition-all
            duration-300
            hover:bg-white/10
            hover:border-blue-400/50
            hover:-translate-y-1
            flex
            flex-col
            gap-4
          "
        >
          {/* STATUS INDICATOR */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
            <span className="text-[9px] font-mono text-blue-400/60 uppercase tracking-widest group-hover:text-blue-300 transition-colors">
              Active // 0{i + 1}
            </span>
          </div>

          {/* INDUSTRY NAME */}
          <span className="text-lg font-semibold text-blue-50 tracking-wide">
            {industry}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* BOTTOM BORDER: SUBTLE ETCHED LINE */}
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</section>



    </main>
    
    <Footer/>
    </>
  );
}

export default Solution;
