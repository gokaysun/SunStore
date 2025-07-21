import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-white px-4 py-8 flex flex-col items-center text-center relative">
      {/* SUMMER 2025 */}
      <p className="text-[#BDBDBD] text-sm tracking-widest uppercase mb-2">
        SUMMER 2025
      </p>

      {/* Part of the Neural Universe */}
      <h2 className="text-[#252B42] text-3xl font-bold leading-tight mb-4">
        Part of the <br />
        Neural <br />
        Universe
      </h2>

      {/* Açıklama metni */}
      <p className="text-[#737373] text-base leading-relaxed mb-6 whitespace-pre-line">
        we know how large objects{"\n"}will act, but things on a{"\n"}small scale
      </p>

      {/* Buy Now butonu */}
      <button className="bg-[#23A6F0] text-white font-semibold px-6 py-3 rounded-full mb-3 hover:opacity-90 transition">
        Buy Now
      </button>

      {/* Learn More butonu (sadece kenarlık değil, beyaz arka plan) */}
      <button className="bg-white text-[#23A6F0] font-semibold px-6 py-3 rounded-full border border-[#23A6F0] hover:bg-[#f0faff] transition">
        Learn More
      </button>

      <img src="src/assets/asyaliCift.png" alt="Hero" className="w-full mt-8" />
    </section>
  );
}

