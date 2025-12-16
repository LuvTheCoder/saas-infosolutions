import { Link } from "react-router-dom";

function OfferingCard({ data }) {
  return (
    <div className="group bg-white border border-gray-200 transition cursor-pointer ">
      
      {/* IMAGE */}
      <Link to={data.link}>
      <div className="relative h-72 overflow-hidden ">
        <img
          src={data.image}
          alt={data.heading}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-8 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-blue-900">
          {data.heading}
        </h2>

        <p className="text-gray-600 text-base leading-relaxed">
          {data.description}
        </p>

        <div>
          <button className="text-sm font-medium text-blue-700 hover:text-blue-900 transition flex items-center gap-1">
            <Link to={data.link}>Read more</Link>
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default OfferingCard;
