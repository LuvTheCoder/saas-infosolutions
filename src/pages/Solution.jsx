import { useParams } from "react-router-dom";
import { solutionsData } from "./solutionsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfferingsScroll from "../components/OfferingsScroll";

function Solution() {
  const { slug } = useParams();
  const data = solutionsData[slug];

  if (!data) {
    return (
      <div className="pt-[80px] px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">Solution not found</h2>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <main className="pt-[80px] bg-white text-slate-800">

      {/* BREADCRUMB */}
      <div className="border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500">
          Home <span className="mx-2">›</span>
          Solutions <span className="mx-2">›</span>
          <span className="text-slate-700">{data.title}</span>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6">
          {data.title}
        </h1>

        <div className="max-w-3xl space-y-4">
          {data.descriptionPoints.map((point, i) => (
            <div key={i} className="flex gap-3 text-slate-600 leading-relaxed">
              <span className="text-blue-700 font-semibold">•</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-10">
            What We Offer
          </h2>

          <OfferingsScroll data={data}/>
        </div>
      </section>

      {/* HOW WE HELP (ONLY IF PRESENT) */}
      {data.approach && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">
                How We Help
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {data.approach}
              </p>
            </div>

            <ul className="space-y-4">
              {data.approachPoints?.map((point, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <span className="text-blue-600 font-bold">—</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* INDUSTRIES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-8">
            Industries Using This Solution
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
      </section>

    </main>
    <Footer/>
    </>
  );
}

export default Solution;
