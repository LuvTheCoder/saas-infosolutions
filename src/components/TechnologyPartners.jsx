function TechnologyPartners() {
  const scrollingLogos = [...partners, ...partners];

  return (
    <section className="bg-slate-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-3">
            Technology Partners
          </h2>
          <p className="text-slate-600">
            We collaborate with leading global technology providers.
          </p>
        </div>

        {/* SCROLL CONTAINER */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {scrollingLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center
                           w-40 h-20 bg-white border p-4 grayscale
                           hover:grayscale-0 transition"
              >
                <img
                  src={logo}
                  alt="Technology Partner"
                  loading="lazy"
                  className="max-h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

