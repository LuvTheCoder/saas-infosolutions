import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Linkedin, Mail } from "lucide-react";
import amit from "../members/amit-pote.png"
import ashish from "../members/ashish-chunne.png"

const leaders = [
  {
    name: "Ashish Chunne",
    role: "Founder & CEO",
    experience: "22+ Years into Information Technology",
    photo: ashish, 
    bio: "Ashish is the Founder & CEO of SAAS Infosolutions. He is responsible for overall Leadership & Management of the company. Ashish hold a Bachelor Degree in Engineering & Master Degree in Business Administration.With over 22 years into Information Technology market, Ashish has seen the business transformations & this has made to form an Organization with vision to be dynamic with changing business needs. Ashish has served different positions at various professional organizations & understand what what exactly business wants.",
    email: "ashish@saasinfosolutions.com"
  },
  {
    name: "Amit Pote",
    role: "Director Business & Strategy",
    experience: "16+ Years of Market Expertise",
    photo: amit,
    bio: "Amit is the Director-Sales & Strategy & is responsible for bringing strategies changes required in business. Amit hold a Bachelor Degree in Technology & Master Degree in Administration. He has also undergone through multiple certification in Technology, Sales Management and Business Analytics.With over 16+ years of experience, in numerous positions. Amit has rich understanding of market & needs. Amit wish to bridge the gap between what business really needs with the best suitable.",
    email: "amit@saasinfosolutions.com"
  }
];

function Leadership() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-[90px] bg-white">
        <Breadcrumb items={["Home", "Company", "Leadership"]} />

        {/* HERO HEADER */}
        <section className="py-20 px-6">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-[#0b3c5d] tracking-tighter uppercase leading-[0.8] mb-8">
              Executive <br />
              <span className="text-slate-200">Leadership</span>
            </h1>
          </div>
        </section>

        {/* LEADERS GRID */}
        <section className="pb-24 px-6">
          <div className="max-w-[1440px] mx-auto space-y-24">
            {leaders.map((leader, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 items-start ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image - Bold Border, No Shadow */}
                <div className="w-full lg:w-2/5 aspect-square bg-slate-100 -2 border-[#0b3c5d] overflow-hidden">
                  <img 
                    src={leader.photo} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Content - Experience Focus */}
                <div className="w-full lg:w-3/5 pt-4">
                  <div className="mb-8">
                    <div className="inline-block bg-[#0b3c5d] text-white px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                      {leader.experience}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0b3c5d] uppercase mb-1">
                      {leader.name}
                    </h2>
                    <p className="text-xl font-medium text-cyan-600 tracking-tight">
                      {leader.role}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-slate-600 leading-relaxed text-lg font-light border-l-4 border-slate-100 pl-8 italic">
                      {leader.bio}
                    </p>

                    <div className="pt-8 flex gap-8">
                      <a href={`mailto:${leader.email}`} className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0b3c5d]">
                        <Mail size={18} className="group-hover:text-cyan-500 transition-colors" />
                        <span className="group-hover:text-cyan-500">Connect via Email</span>
                      </a>
                      <button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0b3c5d]">
                        <Linkedin size={18} className="group-hover:text-cyan-500 transition-colors" />
                        <span className="group-hover:text-cyan-500">LinkedIn Profile</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOLD PHILOSOPHY BAR */}
        <section className="py-24 px-6 bg-[#0b3c5d] text-white">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
              "Customer First"
            </h2>
            <p className="max-w-xl text-white/60 text-sm font-medium leading-relaxed uppercase tracking-widest">
              A commitment to providing delivery and services on time with quality, 
              remaining dynamic to your changing business needs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Leadership;