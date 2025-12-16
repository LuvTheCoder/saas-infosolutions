function Breadcrumb({ items }) {
  return (
    <div className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center text-sm text-gray-600">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <span
                  className={
                    index === items.length - 1
                      ? "text-blue-800 font-medium"
                      : "hover:text-blue-700 cursor-pointer"
                  }
                >
                  {item}
                </span>

                {index !== items.length - 1 && (
                  <span className="mx-2 text-gray-400">›</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;
