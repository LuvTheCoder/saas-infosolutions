import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import NavPanel from "./NavPanel";
import { navData } from "./navData";
import logo from "../assets/saas-logo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activePanel, setActivePanel] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null); // Tracks mobile dropdowns
  const location = useLocation();

  const navItems = [
    { key: "solutions", label: "SOLUTIONS" },
    { key: "company", label: "COMPANY" },
  ];

  // Close everything when moving to a new page
  useEffect(() => {
    setActivePanel(null);
    setMobileOpen(false);
    setMobileSubOpen(null);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] h-[70px] lg:h-[90px] bg-[#0b3c5d] border-b-2 border-white/10">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-cyan-500" />

        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SAAS" className="h-[50px] lg:h-[60px] object-contain" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10 h-full">
            {navItems.map((item) => (
              <button
                key={item.key}
                onMouseEnter={() => setActivePanel(item.key)}
                className={`relative h-full flex items-center gap-2 text-xs font-bold tracking-[0.2em] transition-colors
                  ${activePanel === item.key ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
              >
                {item.label}
                <ChevronDown size={14} className={`${activePanel === item.key ? "rotate-180" : ""}`} />
                {activePanel === item.key && <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400" />}
              </button>
            ))}
            <Link to="/contact" className="px-6 py-2 border-2 border-white text-white text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-[#0b3c5d] transition-colors">
              CONTACT US
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* DESKTOP PANEL DROPDOWN */}
      {activePanel && (
        <div className="hidden lg:block fixed top-[90px] left-0 w-full z-50 border-b-4 border-cyan-500" onMouseLeave={() => setActivePanel(null)}>
          <NavPanel data={navData[activePanel]} basePath={activePanel} />
        </div>
      )}

      {/* MOBILE FULLSCREEN MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#0b3c5d] z-[100] flex flex-col overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex justify-between items-center h-[70px] px-6 border-b border-white/10 shrink-0">
            <img src={logo} className="h-10" />
            <button onClick={() => setMobileOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="p-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.key} className="border-b border-white/5 last:border-0">
                <button 
                  onClick={() => setMobileSubOpen(mobileSubOpen === item.key ? null : item.key)}
                  className="w-full py-5 flex justify-between items-center text-white text-lg font-bold tracking-widest uppercase"
                >
                  {item.label}
                  <ChevronDown className={`transition-transform duration-300 ${mobileSubOpen === item.key ? "rotate-180 text-cyan-400" : ""}`} />
                </button>

                {/* Sub-menu (Solutions/Company Links) */}
                {mobileSubOpen === item.key && (
                  <div className="pb-6 space-y-1 animate-in slide-in-from-top-2 duration-300">
                    {navData[item.key].leftMenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={`/${item.key}/${sub.slug}`}
                        className="flex items-center justify-between p-4 bg-white/5  text-white/80 text-sm font-medium hover:text-cyan-400"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                        <ArrowRight size={16} className="text-cyan-500" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Final Contact Link */}
            <Link 
              to="/contact" 
              className="block w-full py-8 text-cyan-400 text-xl font-bold tracking-[0.2em] uppercase border-t border-white/10 mt-4"
              onClick={() => setMobileOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;