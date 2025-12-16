import { useRef } from "react";

function OfferingsScroll({ data }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 360; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                   h-10 w-10 items-center justify-center
                   bg-white border shadow hover:bg-slate-100 transition"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                   h-10 w-10 items-center justify-center
                   bg-white border shadow hover:bg-slate-100 transition"
      >
        ›
      </button>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth
                   pb-4 px-2
                   [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:none]
                   [scrollbar-width:none]"
      >
        {data.offerings.map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-[320px]
                       bg-white border hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferingsScroll;
