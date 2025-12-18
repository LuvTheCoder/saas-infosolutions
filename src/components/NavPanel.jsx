import { Link } from "react-router-dom";

export default function NavPanel({ data, basePath }) {
  return (
    <section className="bg-[#0b3c5d] text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12">
        
        {/* LEFT MENU - Solid contrast block */}
        <div className="col-span-4 bg-[#082d46] py-8 border-r border-white/5">
          <div className="space-y-0">
            {data.leftMenu.map((item, index) => (
              <Link key={index} to={`/${basePath}/${item.slug}`} className="group block">
                <div className="flex justify-between items-center px-10 py-5 transition-colors group-hover:bg-[#0b3c5d] border-l-4 border-transparent group-hover:border-cyan-400">
                  <span className="text-[13px] font-bold tracking-widest text-white/70 group-hover:text-white uppercase">
                    {item.label}
                  </span>
                  <span className="text-white/20 group-hover:text-cyan-400">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT - Clean Layout */}
        <div className="col-span-8 p-16 flex items-center gap-16">
          <div className="w-1/2 overflow-hidden border border-white/10">
            <img src={data.image} alt="" className="w-full h-full object-cover transition-all group-hover:grayscale-0 group-hover:brightness-100" />
          </div>

          <div className="w-1/2">
            <div className="h-1 w-12 bg-cyan-400 mb-8" />
            <h2 className="text-3xl font-bold tracking-tight mb-6 uppercase leading-none">
              {data.heading}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed border-l border-white/20 pl-6">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}