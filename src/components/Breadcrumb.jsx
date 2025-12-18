import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full bg-white border-b-2 border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6">
        <nav aria-label="Breadcrumb" className="flex">
          <ol className="flex items-stretch overflow-x-auto no-scrollbar">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              // SIMPLE LOGIC: 
              // If it's "Home" or "Solutions", go to root "/". 
              // Otherwise, turn "IT Security" into "/it-security"
              const isRootItem = 
                item.toLowerCase() === "home" || 
                item.toLowerCase() === "solutions" || item.toLowerCase() === "company";
              
              const pageLink = isRootItem 
                ? "/" 
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <li key={index} className="flex items-center">
                  {/* PATH SEGMENT */}
                  <div className={`
                    flex items-center h-14 px-4 text-[10px] font-bold tracking-[0.25em] uppercase transition-colors
                    ${isLast 
                      ? "bg-slate-50 text-[#0b3c5d] border-x border-slate-200" 
                      : "text-slate-400 hover:text-[#0b3c5d] hover:bg-slate-50"
                    }
                  `}>
                    {isLast ? (
                      <span className="flex items-center gap-2">
                        {/* Status Pulse Dot */}
                        <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                        {item}
                      </span>
                    ) : (
                      <Link
                        to={pageLink}
                        className="whitespace-nowrap h-full flex items-center"
                      >
                        {item}
                      </Link>
                    )}
                  </div>

                  {/* BOLD CHEVRON DIVIDER */}
                  {!isLast && (
                    <div className="text-slate-300 px-1 flex items-center">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M9 18l6-6-6-6" />
                       </svg>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;