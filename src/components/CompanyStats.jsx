import CountUp from "../components/CountUp";

function CompanyStats() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {/* YEARS IN INDUSTRY */}
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-blue-900 mb-2">
              <CountUp end={10} suffix="+" />
            </div>
            <p className="text-slate-600 text-lg">
              Years in Industry
            </p>
          </div>

          {/* HAPPY CLIENTS */}
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-blue-900 mb-2">
              <CountUp end={500} suffix="+" />
            </div>
            <p className="text-slate-600 text-lg">
              Happy Clients
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-blue-900 mb-2">
              <CountUp end={50} suffix="+" />
            </div>
            <p className="text-slate-600 text-lg">
              Services Delivered
            </p>
          </div>

          {/* TRANSACTIONS */}
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-blue-900 mb-2">
              <CountUp end={3000} suffix="+" />
            </div>
            <p className="text-slate-600 text-lg">
              Transactions Managed
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CompanyStats;
