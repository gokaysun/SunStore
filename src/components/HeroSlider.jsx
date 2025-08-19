import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "src/assets/HPcantaliKadin.jpg",
    heading: "SUMMER 2025",
    subheading: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
  },
  {
    image: "src/assets/HPcantaliKadin.jpg",
    heading: "SUMMER 2025",
    subheading: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
  },
  {
    image: "src/assets/HPcantaliKadin3.png",
    heading: "SUMMER 2025",
    subheading: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 15000); // 15 saniyede bir değiş
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full">
      {/* Desktop (lg+) exact layout */}
      <div className="hidden lg:block relative mx-auto w-[1440px] h-[716px] mt-[136px] bg-white border border-[#DEDEDE] rounded-[5px] overflow-hidden transform -translate-x-[487px] -translate-y-[53px]">
        {/* carousel-inner / slide with background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundImage: `url(${slides[index].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />

        {/* container */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[48px] w-[975px] h-[651px] flex flex-col items-center py-[112px] gap-[80px]">
          {/* row */}
          <div className="flex flex-row items-center gap-[30px] w-[975px] py-12">
            {/* col-md-8 (text) */}
            <div className="flex flex-col items-start gap-[35px] w-full">
              <h5 className="max-w-[548px] text-left text-white font-[700] text-[16px] leading-6 tracking-[0.1px] font-['Montserrat']">
                {slides[index].heading}
              </h5>
              <h1 className="max-w-[548px] text-left text-white font-[700] text-[58px] leading-[80px] tracking-[0.2px] font-['Montserrat']">
                {slides[index].subheading}
              </h1>
              <h4 className="max-w-[548px] text-left text-[#FAFAFA] font-[400] text-[20px] leading-[30px] tracking-[0.2px] font-['Montserrat']">
                {slides[index].description}
              </h4>
              {/* cta */}
              <div className="flex flex-row items-start gap-[10px] w-[221px] h-[62px]">
                <button className="w-[221px] h-[62px] bg-[#2DC071] rounded-[5px] flex items-center justify-center px-10 py-[15px]">
                  <span className="text-white font-[700] text-[24px] leading-8 tracking-[0.1px] font-['Montserrat']">
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>
            {/* col-md-4 (placeholder to respect layout) */}
            <div className="flex flex-col items-start w-[415px] h-[280px]" />
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/70 ${
                i === index ? 'w-8 bg-white/90 shadow-[0_0_0_2px_rgba(255,255,255,0.35)_inset]' : 'w-2.5 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev control (chevron like in visual) */}
        <button
          onClick={goPrev}
          className="absolute left-[40px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/15 border border-white/30 backdrop-blur cursor-pointer transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="Previous slide"
        >
          <svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L4 22L16 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Next control (chevron like in visual) */}
        <button
          onClick={goNext}
          className="absolute right-[40px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/15 border border-white/30 backdrop-blur cursor-pointer transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="Next slide"
        >
          <svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4L20 22L8 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile/Tablet current implementation */}
      <div className="lg:hidden relative w-full h-[500px] sm:h-[600px] overflow-hidden">
        {/* Slide görseli */}
        <img
          src={slides[index].image}
          alt="Hero Slide"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />

        {/* İçerik */}
        <div className="absolute inset-0 bg-transparent flex flex-col justify-center items-start px-6 sm:px-20 text-white">
          <h2 className="text-xl sm:text-3xl font-bold">{slides[index].heading}</h2>
          <h3 className="text-2xl sm:text-4xl font-semibold mt-2">{slides[index].subheading}</h3>
          <p className="text-sm sm:text-base mt-2 max-w-md">{slides[index].description}</p>
          <button className="mt-6 bg-[#2DC071] text-white px-5 py-2 rounded hover:brightness-90 transition">
            SHOP NOW
          </button>
        </div>

        {/* Slider okları */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:scale-110"
        >
          ❮
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:scale-110"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
