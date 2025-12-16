import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0b3c5d] text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* COMPANY */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-5">
              SAAS Infosolutions
            </h3>
            <p className="text-base leading-relaxed text-slate-300">
              Delivering secure, scalable and reliable IT solutions to help
              organizations become future ready.
            </p>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-5">
              Solutions
            </h4>
            <ul className="space-y-3 text-base">
              <li><Link to="/solutions/it-security" className="hover:text-white">IT Security</Link></li>
              <li><Link to="/solutions/active-it-networking" className="hover:text-white">Active IT Networking</Link></li>
              <li><Link to="/solutions/passive-it-networking" className="hover:text-white">Passive IT Networking</Link></li>
              <li><Link to="/solutions/it-software" className="hover:text-white">IT Software & Tools</Link></li>
              <li><Link to="/solutions/digital-productivity" className="hover:text-white">Digital Productivity</Link></li>
              <li><Link to="/solutions/automation" className="hover:text-white">Automation</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-base">
              <li><Link to="/services/it-consulting" className="hover:text-white">IT Consulting</Link></li>
              <li><Link to="/services/managed-it-services" className="hover:text-white">Managed IT Services</Link></li>
              <li><Link to="/services/it-support-amc" className="hover:text-white">IT Support & AMC</Link></li>
              <li><Link to="/services/greenfield-projects" className="hover:text-white">Greenfield Projects</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-base text-slate-300">
              <li>Pune, Maharashtra, India</li>
              <li>
                Email:{" "}
                <span className="text-slate-200">
                  sales@saasinfosolutions.com
                </span>
              </li>
              <li>
                Phone:{" "}
                <span className="text-slate-200">
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block text-base text-white
                             border border-white/40
                             px-5 py-2
                             hover:bg-white hover:text-[#0b3c5d]
                             transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-14 pt-8
                        flex flex-col md:flex-row
                        justify-between items-center
                        text-base text-slate-300 gap-6">
          <span>
            © {new Date().getFullYear()} SAAS Infosolutions. All rights reserved.
          </span>

          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
