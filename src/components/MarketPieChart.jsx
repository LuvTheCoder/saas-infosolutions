import { motion } from "framer-motion";

const MarketPieChart = () => {
  const data = [
    { label: "IT / ITES", value: 38, color: "#22d3ee" },
    { label: "Manufacturing", value: 32, color: "#3b82f6" },
    { label: "Education", value: 11, color: "#60a5fa" },
    { label: "Others", value: 11, color: "#1e3a8a" },
    { label: "Government", value: 5, color: "#38bdf8" },
    { label: "Healthcare", value: 3, color: "#0ea5e9" },
  ];

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  let cumulativeValue = 0;

  return (
    <div className="lg:col-span-5 bg-[#0b3c5d] p-8 md:p-12 relative overflow-hidden flex flex-col h-full">
      {/* Title Section */}
      <div className="mb-10">
        <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
          Market Presence
        </h4>
        <h2 className="text-white text-3xl font-bold">Existing Customers</h2>
      </div>

      <div className="flex flex-col xl:flex-row items-center gap-10">
        {/* CHART SIDE */}
        <div className="relative w-56 h-56 flex-shrink-0">
          <svg viewBox="0 0 200 200" className="transform -rotate-90">
            {/* Background Circle (The Track) */}
            <circle cx="100" cy="100" r={radius} fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="20" />
            
            {data.map((item, index) => {
              const strokeDashoffset = circumference - (item.value / 100) * circumference;
              const rotation = (cumulativeValue / 100) * 360;
              cumulativeValue += item.value;

              return (
                <motion.circle
                  key={index}
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth="20"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{
                    transformOrigin: "center",
                    rotate: `${rotation}deg`,
                  }}
                  viewport={{ once: true }}
                />
              );
            })}
          </svg>
          
          {/* Central Label - Immediate Understanding */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-xs uppercase opacity-50 tracking-widest">Total</span>
            <span className="text-white text-3xl font-bold">100%</span>
          </div>
        </div>

        {/* LEGEND SIDE - Designed for fast reading */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <span className="text-white font-bold text-sm uppercase tracking-wide">{item.label}</span>
                </div>
                <span className="text-blue-300 font-mono text-sm font-bold">{item.value}%</span>
              </div>
              {/* Visual mini-bar for double confirmation of data size */}
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer text: Highlighting key sectors */}
      <div className="mt-10 pt-6 border-t border-white/10">
        <p className="text-blue-100/60 text-xs leading-relaxed italic">
          * Leading market share in <strong className="text-blue-300">IT/ITES</strong> and <strong className="text-blue-300">Manufacturing</strong>, comprising 70% of our core operations.
        </p>
      </div>
    </div>
  );
};

export default MarketPieChart;