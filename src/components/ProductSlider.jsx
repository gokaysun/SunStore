import React, { useState } from "react";
import yesilEkranCocuk from "../assets/yesilEkranCocuk.png";

const slides = [
  {
    backgroundColor: "#23856D",
    childImg: yesilEkranCocuk,
    season: "SUMMER 2025",
    title: "Vita Classic\nProduct",
    description: "we know how large objects \nwill act, but things on a \nsmall scale",
    price: "$16.48",  // fiyat eklendi
  },
  {
    backgroundColor: "#1F6653",
    childImg: yesilEkranCocuk,
    season: "FALL 2025",
    title: "Vita Modern\nProduct",
    description: "Discover new trends \nand styles \nfor the season",
    price: "$18.99",
  },
  // Diğer slide'lar...
];

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const { backgroundColor, childImg, season, title, description, price } = slides[current];

  return (
    <div
      className="relative rounded-lg overflow-hidden mx-auto"
      style={{
        width: "412px",
        height: "700px",
        backgroundColor: backgroundColor,
      }}
    >
      {/* İçerik kutusu */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white text-center px-6"
        style={{
          width: "350px",
          height: "429px",
          marginTop: "20px",
          gap: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">
          {season}
        </p>
        <h2 className="font-montserrat font-bold text-[40px] leading-[60px] tracking-[0.2px] whitespace-pre-line">
          {title}
        </h2>
        <p className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] max-w-[500px] whitespace-pre-line">
          {description}
        </p>

        {/* Fiyat */}
        <p className="text-white font-bold text-[24px] mb-2">
          {price}
        </p>

        <button
  className="bg-[#2DC071] text-white font-semibold px-4 py-1 rounded text-sm hover:bg-green-700 transition-colors duration-300"
>
  ADD TO CART
</button>
      </div>

      {/* Çocuk resmi sağ alt köşede */}
      <img
        src={childImg}
        alt="Çocuk"
        className="absolute bottom-0 left-0 max-h-[80%] object-contain"
        style={{ maxWidth: "70%" }}
      />

      {/* Önceki buton */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      {/* Sonraki buton */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}