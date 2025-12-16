import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Service() {
  const { slug } = useParams();
  const data = servicesData[slug];

  if (!data) {
    return (
      <div className="pt-[80px] px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">Service not found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-[80px] bg-white text-slate-800">

        {/* BREADCRUMB */}
        <div className="border-b bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500">
            Home <span className="mx-2">›</span>
            Services <span className="mx-2">›</span>
            <span className="text-slate-700">{data.title}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-4xl md:text-6xl font-semibold text-blue-900 mb-6">
              {data.title}
            </p>

            <div className="space-y-4">
              {data.descriptionPoints.map((point, i) => (
                <div key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                  <span className="text-blue-700 font-semibold">•</span>
                  <span className="text-[17px]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ HERO IMAGE (DYNAMIC) */}
          <div className="relative">
            <img
              src={data.heroImage}
              alt={data.title}
              className="w-full h-[380px] object-cover"
            />
          </div>
        </section>

        {/* SERVICE OFFERINGS */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-semibold text-blue-900 mb-12">
              Service Scope
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {data.offerings.map((item, index) => (
                    <div key={index} className="bg-white border hover:shadow-lg transition">
                        <img
                        src={item.image}
                        alt={item.title}
                        className="h-40 w-full object-cover"
                        />
                        <div className="p-6">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        </div>
                    </div>
                ))}

            </div>
          </div>
        </section>

        {/* SERVICE APPROACH */}
        {data.approach && (
          <section className="py-20 bg-[#0b3c5d]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-5xl font-semibold text-white mb-6">
                  Our Approach
                </h2>
                <p className="text-white leading-relaxed pl-[5px]">
                  {data.approach}
                </p>
              </div>

              {/* ✅ APPROACH IMAGE (DYNAMIC) */}
              {data.approachImage && (
                <img
                  src={data.approachImage}
                  alt="Approach"
                  className="h-[320px] w-full object-cover"
                />
              )}
            </div>
          </section>
        )}

        {/* INDUSTRIES */}
        <section
          className="py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)",
          }}
        >
          <div className="bg-white/90 py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-8">
                Industries We Serve
              </h2>

              <div className="flex flex-wrap gap-4">
                {data.industries.map((industry, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border rounded-full text-sm text-slate-700 bg-white"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-blue-900 text-white p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <h3 className="text-2xl font-semibold max-w-xl">
                Need expert assistance for {data.title}?
              </h3>

              <button className="bg-white text-blue-900 px-6 py-3 font-medium hover:bg-slate-100 transition">
                Talk to Our Team
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Service;
