import { motion } from "framer-motion";
import CountUp from "../components/CountUp"; // Using the component we built earlier
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import MarketPieChart from "../components/MarketPieChart";

function WhyChooseUs() {
  const values = [
    {
      title: "Customer First Philosophy",
      description: "We place customer response capabilities at the core, ensuring we are reachable at the time of need to gain and hold your confidence. ",
    },
    {
      title: "Traditional & Innovative Mix",
      description: "We successfully deliver end-to-end IT solutions by blending reliable traditional technologies with modern, innovative digital transformations. ",
    },
    {
      title: "Subjective & Logical Strategy",
      description: "We don't believe in one-size-fits-all. Our strategies focus on areas that are most business-critical to your specific organizational goals. ",
    },
  ];

  const competencies = [
    "Organizational Intelligence ",
    "Cyber & Physical Security ",
    "Cloud Computing (IaaS/PaaS/SaaS) ",
    "Smart Office Automation ",
    "Infrastructure Support (AMC/FMS) ",
    "Business Intelligence & Data Analysis",
  ];

  return (
    <>
    <Navbar/>
    <main className="pt-[90px]">
      <Breadcrumb items={["Home","About Us", "Why Choose Us"]}/>
    <section className="py-5 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* TOP SECTION: HEADING & STATS */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#0b3c5d]" />
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-slate-400">
                The SAAS Advantage
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-[#0b3c5d]">
              Leave All Your IT <br />
              <span className="text-slate-300 italic font-light">Worries with Us.</span>
            </h2>
          </div>

          <div className="flex gap-12 border-l-2 border-slate-100 pl-12 py-4">
            <div>
              <div className="text-5xl font-bold text-[#0b3c5d] tracking-tighter">
                <CountUp end={10} suffix="+" />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Years of Expertise</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#0b3c5d] tracking-tighter">
                <CountUp end={200} suffix="+" />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Esteemed Clients</p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: CORE VALUES GRID */}
        <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-24">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-12 hover:bg-slate-50 transition-colors group">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-4 text-[#0b3c5d]">
                <span className="text-slate-300 font-mono text-sm">0{i+1}</span>
                {v.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-light italic border-l-2 border-transparent group-hover:border-[#0b3c5d] pl-6 transition-all">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: COMPETENCIES & MARKET REACH */}
        <div className="grid lg:grid-cols-12 gap-16">
          {/* COMPETENCY LIST */}
          <div className="lg:col-span-7">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">
              // Key_Competencies 
            </h4>
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
              {competencies.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#0b3c5d] transition-colors uppercase tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MARKET REACH BLOCK */}
          <MarketPieChart/>
        </div>

      </div>
    </section>
    </main>
    <Footer/>
    </>
  );
}

export default WhyChooseUs;