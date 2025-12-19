import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { partners } from "../data/partners";

// Grouping logic based on your company's key competencies
const categories = [
  {
    title: "Security & Cyber Defense",
    ids: ["fortinet", "sophos", "paloalto", "crowdstrike", "checkpoint", "forcepoint", "bitdefender", "sentinelone", "zscaler", "netskope", "proofpoint", "eset"]
  },
  {
    title: "Active & Wireless Networking",
    ids: ["cisco", "ciscomeraki", "hpe", "juniper", "extreme", "ruckus", "ubiquiti", "tplink", "netgear", "dlink", "ruijie", "quantum", "ray", "brocade"]
  },
  {
    title: "Passive Infrastructure & Enclosures",
    ids: ["commscope", "molex", "ram", "panduit", "legrand", "belden", "corning", "finolex", "honeywell", "digisol", "netrack", "valrack", "rittal", "apw"]
  },
  {
    title: "IT Management & Software Tools",
    ids: ["manageengine", "teamob", "logmein", "teamviewer", "motadata", "kaseya", "stratemis", "fargo", "entrust", "proofid"]
  }
];

function Clients() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-[90px] bg-white text-[#0b3c5d]">
        <Breadcrumb items={["Home", "Company", "Partners & Clients"]} />

        {/* HERO SECTION */}
        <section className="py-20 px-6 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-cyan-500" />
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-slate-400">
                Our Technology Ecosystem
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              World-Class Partners. <br />
              <span className="text-slate-300 italic font-light">Reliable Solutions.</span>
            </h1>
            <p className="max-w-2xl text-slate-500 text-lg leading-relaxed border-l-4 border-cyan-500 pl-8">
              SAAS Infosolutions collaborates with industry leaders to provide a mix of 
              traditional and innovative technologies, ensuring your infrastructure is 
              secure, scalable, and dynamic
            </p>
          </div>
        </section>

        {/* PARTNERS GRID BY CATEGORY */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-[1440px] mx-auto space-y-32">
            {categories.map((cat, idx) => (
              <div key={idx} className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-[#0b3c5d] pb-6">
                  <h2 className="text-3xl font-bold uppercase tracking-tight">{cat.title}</h2>
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                    Authorized Integration Partner
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200">
                  {partners
                    .filter(p => cat.ids.includes(p.id))
                    .map((partner) => (
                      <div 
                        key={partner.id} 
                        className="group bg-white aspect-video flex items-center justify-center p-8 hover:bg-slate-50 transition-all duration-500"
                      >
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-h-full max-w-full object-contain max-lg:grayscale-0 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST STATEMENT */}
        <section className="py-24 px-6 bg-[#0b3c5d] text-white">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
              200+ Esteemed Clients
            </h2>
            <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed mb-12">
              Our helpful nature and technical capabilities have earned us the confidence 
              of customers across Manufacturing, IT/ITES, Education, and Healthcare sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-40">
              {/* Note: You can add specific high-profile client logos here if available */}
              <span className="font-bold tracking-[0.5em] uppercase text-xs">Manufacturing </span>
              <span className="font-bold tracking-[0.5em] uppercase text-xs">IT/ITES </span>
              <span className="font-bold tracking-[0.5em] uppercase text-xs">Education</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Clients;