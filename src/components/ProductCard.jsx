import React, { useState } from "react";
import ProductSlider from "./ProductSlider";
import yesilEkranCocuk from "../assets/yesilEkranCocuk.png";

// Desktop slides data for ProductCard
const pcSlides = [
  {
    backgroundColor: "#23856D",
    childImg: yesilEkranCocuk,
    season: "SUMMER 2025",
    title: "Vita Classic\nProduct",
    description: "we know how large objects\nwill act, but things on a\nsmall scale",
    price: "$16.48",
  },
  {
    backgroundColor: "#1F6653",
    childImg: yesilEkranCocuk,
    season: "FALL 2025",
    title: "Vita Modern\nProduct",
    description: "Discover new trends\nand styles\nfor the season",
    price: "$18.99",
  },
];

export default function ProductCard() {
  // desktop slider state
  const [pcIndex, setPcIndex] = useState(0);
  const pcLength = pcSlides.length;
  const goPrev = () => setPcIndex((prev) => (prev - 1 + pcLength) % pcLength);
  const goNext = () => setPcIndex((prev) => (prev + 1) % pcLength);

  const { backgroundColor, childImg, season, title, description, price } = pcSlides[pcIndex];

  return (
    <div className="w-full">
      {/* Mobile (unchanged) */}
      <div className="w-full max-w-[414px] mx-auto mt-10 lg:hidden">
        <ProductSlider />
      </div>

      {/* Desktop */}
      <section className="hidden lg:block w-full bg-white">
        {/* Outer card: 1540x709, border, radius */}
        <div
          className="relative w-[1540px] h-[709px] border border-[#DEDEDE] rounded-[5px] overflow-hidden lg:-ml-[200px]"
          style={{ backgroundColor }}
        >
          {/* Content container: left anchored to match visual spec */}
          <div className="absolute top-0 left-[130px] w-[1036px] h-[711px] flex flex-col items-start py-[112px] gap-[80px]">
            {/* Row: text left, visual right */}
            <div className="flex flex-row items-start gap-[30px] w-[1049px] h-[599px]">
              {/* Left column: text block */}
              <div className="flex flex-col items-start pt-[60px] gap-[30px] w-[509px] h-[432px]">
                <h4 className="w-[154px] h-[30px] text-white font-normal text-[20px] leading-[30px] tracking-[0.2px] flex-none whitespace-pre-line">
                  {season}
                </h4>
                <h1 className="w-[520px] h-[160px] text-white font-bold text-[58px] leading-[80px] tracking-[0.2px] flex-none lg:-ml-[100px] whitespace-pre-line">
                  {title}
                </h1>
                <p className="w-[341px] h-[60px] text-white font-normal text-[14px] leading-5 tracking-[0.2px] flex-none whitespace-pre-line">
                  {description}
                </p>
                {/* CTA */}
                <div className="flex flex-row items-center gap-[34px] w-[292px] h-[52px] flex-none">
                  <span className="w-[77px] h-[32px] text-white font-bold text-[24px] leading-8 tracking-[0.1px] flex-none">
                    {price}
                  </span>
                  <button className="inline-flex justify-center items-center w-[181px] h-[52px] bg-[#2DC071] text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] rounded-[5px]">
                    ADD TO CART
                  </button>
                </div>
              </div>
              {/* Right column: image container per specs */}
              <div className="flex flex-col items-center p-0 w-[510px] h-[685px] flex-none" aria-hidden="false">
                <img
                  src={childImg}
                  alt="Product visual"
                  className="w-[443px] h-[685px] object-contain lg:ml-[50px]"
                />
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-[40px] top-[401px] -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/15 border border-white/30 text-white backdrop-blur transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L8 12L15 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className="absolute right-[40px] top-[401px] -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/15 border border-white/30 text-white backdrop-blur transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] flex items-center gap-3">
            {pcSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setPcIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/70 ${
                  i === pcIndex ? 'w-8 bg-white/90 shadow-[0_0_0_2px_rgba(255,255,255,0.35)_inset]' : 'w-2.5 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}