import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  const contactDetails = [
    {
      icon: <Phone size={28} className="text-cyan-500" />,
      title: "Call Us",
      details: ["Ashish Chunne : +91 9822302098", `Amit Pote : ${"\t"}+91 7757007291`],
      description: "Direct lines to our executive leadership."
    },
    {
      icon: <Mail size={28} className="text-cyan-500" />,
      title: "Email Us",
      details: ["ashish@saasinfosolutions.com", "amit@saasinfosolutions.com"],
      description: "Reach our Founder & CEO or Director of Strategy."
    },
    {
      icon: <MapPin size={28} className="text-cyan-500" />,
      title: "Visit Our Office",
      details: [
        "S. No. 51/2/1, Dyanada Colony",
        "Swami Vivekanand Nagar, Wakad",
        "Pimpri-Chinchwad, MH 411033"
      ],
      description: "Headquartered in Pune, Maharashtra."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-[90px] bg-white text-[#0b3c5d] overflow-x-hidden">
        <Breadcrumb items={["Home", "Company", "Contact Us"]} />

        {/* HERO HEADER */}
        <section className="py-12 md:py-24 px-4 sm:px-6 border-b-4 border-[#0b3c5d]">
          <div className="max-w-[1440px] mx-auto text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-[2px] md:h-[3px] bg-cyan-500" />
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-cyan-600">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] md:leading-[0.85] mb-4 md:mb-8 uppercase text-[#0b3c5d]">
              Solve Your <br />
              <span className="text-slate-200 italic font-light">IT Worries.</span>
            </h1>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="py-12 md:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 border-t-4 border-[#0b3c5d] hover:border-cyan-500 transition-all group shadow-sm flex flex-col h-full">
                <div className="mb-6 md:mb-8 transform group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-[#0b3c5d]">{item.title}</h3>
                <div className="space-y-2 mb-6 flex-grow">
                  {item.details.map((line, i) => (
                    <p key={i} className="text-[#0b3c5d] font-bold text-base md:text-lg leading-tight break-words">
                      {line}
                    </p>
                  ))}
                </div>
                <p className="text-slate-400 text-[10px] md:text-xs italic font-light font-mono uppercase tracking-widest leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FULL WIDTH MAP SECTION */}
        <section className="w-full h-[400px] md:h-[600px] relative border-y-4 border-[#0b3c5d]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.564974012584!2d73.7588043148938!3d18.593630987366316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b34766f7d%3A0x89e830607c3f3f7d!2sWakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </section>

        {/* CENTERED INQUIRY FORM */}
        <section className="py-12 md:py-24 px-4 sm:px-6">
          <div className="max-w-[800px] mx-auto bg-[#0b3c5d] border-4 border-[#0b3c5d]">
            <div className="p-8 sm:p-12 lg:p-16 text-white">
              <div className="mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">Send Inquiry</h2>
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                  SAAS Infosolutions believes in its customer response capabilities and is always reachable to help you gain confidence.
                </p>
              </div>

              <form className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b-2 border-white/20 focus:border-cyan-400 outline-none py-2 md:py-3 text-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b-2 border-white/20 focus:border-cyan-400 outline-none py-2 md:py-3 text-white transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Message</label>
                  <textarea rows="4" className="w-full bg-transparent border-b-2 border-white/20 focus:border-cyan-400 outline-none py-2 md:py-3 text-white transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-cyan-500 text-[#0b3c5d] py-4 md:py-5 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white transition-colors active:scale-95">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY FOOTER */}
        <section className="py-12 md:py-24 px-4 sm:px-6 border-t-2 border-slate-100">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-[#0b3c5d]">
                "Customer First"
              </h2>
              <p className="text-cyan-600 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mt-2">
                Core Management Policy
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-slate-500 text-sm md:text-base leading-relaxed italic font-light">
                "Our approach to be reachable to customer helps them gain customer confidence."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;