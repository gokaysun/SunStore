import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "src/assets/HPcantaliKadin.jpg", // sen ekleyeceksin
    heading: "SUMMER 2020",
    subheading: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
  },
  {
    image: "src/assets/HPcantaliKadin2.jpeg",
    heading: "SUMMER 2020",
    subheading: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
  },
  {
    image: "src/assets/HPcantaliKadin3.png",
    heading: "SUMMER 2020",
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
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
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
  );
}
