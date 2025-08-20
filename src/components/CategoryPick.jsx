import React from "react";
import imgCocuk from "../assets/cocuk.png";
import imgKiz from "../assets/kiz.png";
import imgHirkaliKiz from "../assets/hirkaliKiz.png";
import imgSariGomlek from "../assets/sariGomlek.png";

const categories = [
  { name: "MEN", image: imgCocuk },
  { name: "WOMEN", image: imgKiz },
  { name: "ACCESSORIES", image: imgHirkaliKiz },
  { name: "KIDS", image: imgSariGomlek },
];

function Card({ src, label, className = "", buttonOffset = "left-8" }) {
  return (
    <div className={`relative bg-white overflow-hidden ${className}`}>
      <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover" />
      <button
        className={`absolute bottom-6 ${buttonOffset} bg-white text-[#252B42] font-bold tracking-[0.1px] text-[14px] leading-5 px-6 py-3 shadow-sm`}
        onClick={() => console.log(`${label} clicked`)}
      >
        {label}
      </button>
    </div>
  );
}

export default function CategoryPick() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      {/* Outer canvas per spec: 1440x770 on desktop */}
      <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-20">
        {/* Title */}
        <div className="text-center mb-6 lg:mb-12">
          <h3 className="font-bold text-[24px] leading-8 tracking-[0.1px] text-[#252B42]">EDITOR'S PICK</h3>
          <p className="text-[#737373] text-[14px] leading-5 tracking-[0.2px]">Problems trying to resolve the conflict between</p>
        </div>

        {/* Mobile layout: keep current stacked images */}
        <div className="flex flex-col gap-6 lg:hidden">
          {categories.map((category) => (
            <div key={category.name} className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <button
                className="absolute bottom-4 left-4 px-4 py-2 bg-white text-black text-sm font-semibold border rounded hover:bg-gray-100"
                onClick={() => console.log(`${category.name} clicked`)}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex flex-col items-center">
          {/* Group width 1050, row gap 30px, total height 500px */}
          <div className="w-[1050px] h-[500px] flex gap-[30px]">
            {/* Left: 510x500 (MEN) */}
            <Card
              src={categories[0].image}
              label={categories[0].name}
              className="w-[510px] h-[500px]"
              buttonOffset="left-[31px]"
            />

            {/* Middle: 240x500 (WOMEN) */}
            <Card
              src={categories[1].image}
              label={categories[1].name}
              className="w-[240px] h-[500px]"
              buttonOffset="left-[21px]"
            />

            {/* Right column: two stacked 240x242 with 16px gap (ACCESSORIES, KIDS) */}
            <div className="w-[240px] h-[500px] flex flex-col gap-4">{/* 16px gap */}
              <Card
                src={categories[2].image}
                label={categories[2].name}
                className="w-[240px] h-[242px]"
                buttonOffset="left-[14px]"
              />
              <Card
                src={categories[3].image}
                label={categories[3].name}
                className="w-[240px] h-[242px]"
                buttonOffset="left-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
