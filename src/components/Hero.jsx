function Hero() {
  return (
    <section className="relative h-[calc(100vh)] overflow-hidden bg-black">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
        }}
      />

      {/* NEUTRAL DARK OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgb(15, 23, 42)", // slate-900
          opacity: 0.55,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-white">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Helping organisations <br />
            <span className="text-sky-300">
              get future ready
            </span>
          </h1>

          <p className="text-white/80 max-w-xl mb-8 text-lg">
            We empower you with digital transformation through innovative
            technological solutions.
          </p>

          <button className="px-7 py-3 rounded-md font-medium
            bg-white text-slate-900 hover:bg-slate-100 transition">
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
