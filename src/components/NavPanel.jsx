import { Link } from "react-router-dom";

export default function NavPanel({ data, basePath }) {
  return (
    <section className="bg-[#08324d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-10">

        {/* LEFT MENU */}
        <div className="col-span-4 border-r border-white/10">
          <div className="space-y-2">
            {data.leftMenu.map((item, index) => (
              <Link
                key={index}
                to={`/${basePath}/${item.slug}`}
                className="block"
              >
                <div
                  className="flex justify-between items-center px-4 py-4
                             cursor-pointer transition
                             text-white/70 hover:text-white
                             hover:bg-[#0b3c5d] hover:font-semibold"
                >
                  {item.label}
                  <span className="text-xl">›</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-8 grid grid-cols-2 gap-8 items-center">
          <img
            src={data.image}
            alt={data.title}
            className="object-cover"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              {data.heading}
            </h2>
            <p className="text-white/70 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
