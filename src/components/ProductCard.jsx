import React from "react";
import ProductSlider from "./ProductSlider";
import kidImg from "../assets/WebFoto/productCardCocuk.png";

export default function ProductCard() {
  return (
    <div className="w-full">
      {/* Mobile (unchanged) */}
      <div className="w-full max-w-[414px] mx-auto mt-10 lg:hidden">
        <ProductSlider />
      </div>

      {/* Desktop */}
      <section className="hidden lg:block w-full bg-white">
        {/* Outer card: 1440x709, border, radius */}
        <div className="relative w-[1440px] h-[709px] bg-[#23856D] border border-[#DEDEDE] rounded-[5px] overflow-hidden lg:-ml-[500px]">
          {/* Content container: left anchored to match visual spec */}
          <div className="absolute top-0 left-[130px] w-[1036px] h-[711px] flex flex-col items-start py-[112px] gap-[80px]">
            {/* Row: text left, visual right */}
            <div className="flex flex-row items-start gap-[30px] w-[1049px] h-[599px]">
              {/* Left column: text block */}
              <div className="flex flex-col items-start pt-[60px] gap-[30px] w-[509px] h-[432px]">
                <h4 className="w-[154px] h-[30px] text-white font-normal text-[20px] leading-[30px] tracking-[0.2px] flex-none">
                  SUMMER 2020
                </h4>
                <h1 className="w-[520px] h-[160px] text-white font-bold text-[58px] leading-[80px] tracking-[0.2px] flex-none lg:-ml-[100px]">
                  Vita Classic Product
                </h1>
                <p className="w-[341px] h-[40px] text-white font-normal text-[14px] leading-5 tracking-[0.2px] flex-none">
                  We know how large objects will act. We know how are objects will act, We know
                </p>
                {/* CTA */}
                <div className="flex flex-row items-center gap-[34px] w-[292px] h-[52px] flex-none">
                  <span className="w-[77px] h-[32px] text-white font-bold text-[24px] leading-8 tracking-[0.1px] flex-none">
                    $16.48
                  </span>
                  <button className="inline-flex justify-center items-center w-[181px] h-[52px] bg-[#2DC071] text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] rounded-[5px]">
                    ADD TO CART
                  </button>
                </div>
              </div>
              {/* Right column: image container per specs */}
              <div className="flex flex-col items-center p-0 w-[510px] h-[685px] flex-none" aria-hidden="false">
                <img
                  src={kidImg}
                  alt="Product visual"
                  className="w-[443px] h-[685px] object-contain lg:ml-[50px]"
                />
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-[40px] top-[401px] -translate-y-1/2 w-6 h-11 text-white/90"
          >
            <svg
              width="24"
              height="44"
              viewBox="0 0 24 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path d="M1 22L23 1M1 22L23 43" stroke="white" strokeWidth="2" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-[40px] top-[401px] -translate-y-1/2 w-6 h-11 text-white/90"
          >
            <svg
              width="24"
              height="44"
              viewBox="0 0 24 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L23 22L1 43" stroke="white" strokeWidth="2" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[49px] w-[126px] h-[10px] flex">
            <div className="w-[62px] h-[10px] bg-white" />
            <div className="w-[63px] h-[10px] bg-white opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
}