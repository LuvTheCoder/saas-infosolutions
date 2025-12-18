import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import amit from "../members/amit-pote.png"
import ashish from "../members/ashish-chunne.png"

function Leadership() {
  const leaders = [
    {
      name: "Ashish Chunne",
      role: "Founder & CEO",
      image: ashish,
      linkedin: "https://www.linkedin.com/in/ashish-chunne-08423b2b/",
      bio: "Driving the vision of SAAS Infosolutions with over two decades of technical leadership."
    },
    {
      name: "Amit Pote",
      role: "Director Business & Strategy",
      image: amit,
      linkedin: "https://www.linkedin.com/in/amit-pote-74819416/",
      bio: "Spearheading strategic growth and enterprise partnerships across global markets."
    },
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs tracking-[0.5em] uppercase text-blue-600 mb-4 block">
              Leadership Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              The Visionaries Behind <br />
              <span className="text-[#0b3c5d]">SAAS Infosolutions</span>
            </h2>
          </div>
          <div className="h-px flex-1 bg-slate-200 hidden md:block mx-12 mb-4" />
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-4">
            // Board_of_Directors
          </p>
        </div>

        {/* LEADERS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col md:flex-row bg-white  overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100"
            >
              {/* IMAGE CONTAINER */}
              <div className="md:w-2/5 relative overflow-hidden bg-slate-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top  group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0b3c5d]/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* CONTENT AREA */}
              <div className="md:w-3/5 p-10 flex flex-col justify-center relative">
                {/* Side Accent Line */}
                <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-slate-100 group-hover:bg-[#0b3c5d] transition-colors duration-500" />
                
                <div className="mb-6">
                   <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                    {leader.role}
                  </p>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
                  {leader.bio}
                </p>

                {/* LINKEDIN BUTTON */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#0b3c5d] font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#0b3c5d] group-hover:text-white transition-all">
                    <FaLinkedinIn size={12} />
                  </div>
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Leadership;