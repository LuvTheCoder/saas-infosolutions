import { partners } from "../data/partners";

function TechnologyPartners() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-3">
            Technology Partners
          </h2>
          <p className="text-slate-600">
            We work with leading global technology providers to deliver
            reliable, secure and future-ready IT solutions.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white border
                         grayscale hover:grayscale-0 transition"
            >
              <img
                src={logo}
                alt="Technology Partner"
                className="max-h-10 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechnologyPartners;
