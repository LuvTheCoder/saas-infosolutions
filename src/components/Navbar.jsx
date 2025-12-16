import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import NavPanel from "./NavPanel";
import { navData } from "./navData";
import logo from "../assets/saas-logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [activePanel, setActivePanel] = useState(null);
  const wrapperRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { key: "solutions", label: "SOLUTIONS" },
    { key: "services", label: "SERVICES" },
    { key: "products", label: "PRODUCTS" },
    // { key: "industries", label: "INDUSTRIES" },
    { key: "company", label: "COMPANY" },
  ];

  // Close nav panel when clicking outside
  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setActivePanel(null);
      }
    }

    if (activePanel) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activePanel]);

    useEffect(() => {
      setActivePanel(null);
    }, [location.pathname]);

  return (
    <>
      {/* Wrapper MUST be relative */}
      <div ref={wrapperRef} className="relative">
        
        {/* NAVBAR */}
        <header className="bg-[#0b3c5d] text-white fixed top-0 left-0 right-0 z-50 lg:h-[80px]">
          <div className="w-full px-6 h-full">
            <div className="flex items-center justify-between h-full">

              {/* LOGO */}
              <div className="cursor-pointer flex items-center">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-[66px] w-auto object-contain m-[5px]"
                    />
                </Link>
              </div>

              {/* NAV ITEMS */}
              <nav className="hidden lg:flex items-center gap-10 font-medium">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() =>
                      setActivePanel(
                        activePanel === item.key ? null : item.key
                      )
                    }
                    className={` cursor-pointer flex items-center gap-1 transition text-[17px] ${
                      activePanel === item.key
                        ? "text-cyan-300"
                        : "hover:text-cyan-200"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition ${
                        activePanel === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ))}

                <a
                  href="#"
                  className="hover:text-cyan-200 transition text-[17px]"
                >
                  CONTACT US
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* NAV PANEL – FLOATS BELOW NAVBAR */}
        {/* NAV PANEL – FIXED BELOW NAVBAR */}
        {activePanel && (
        <div className="fixed left-0 top-[80px] w-full z-40">
            <NavPanel data={navData[activePanel]} basePath={activePanel} />
        </div>
        )}

      </div>
    </>
  );
}

export default Navbar;
