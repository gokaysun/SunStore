import React from "react";

export default function FeaturedPosts() {
  return (
    <section className="bg-white px-4 py-8 flex flex-col items-center">
      {/* Üst Yazılar */}
      <p className="text-[#23A6F0] text-sm font-bold mb-2">Practice Advice</p>
      <h2 className="text-black text-2xl font-bold text-center mb-4 leading-snug">
        FEATURED <br /> PRODUCTS
      </h2>
      <p className="text-[#737373] text-center max-w-md mb-6 leading-relaxed">
        Problems trying to resolve the <br /> conflict between the two major
      </p>

      {/* Görseller */}
      <div className="flex flex-col items-center gap-4">
        {/* İlk Görsel */}
        <img src="src/assets/tablo.png" alt="ilk" className="w-full max-w-sm" />
        <img src="src/assets/Frame1.png" alt="frame" className="w-full max-w-sm" />

        {/* İkinci Görsel */}
        <img src="src/assets/tablo2.png" alt="ikinci" className="w-full max-w-sm" />
        <img src="src/assets/Frame2.png" alt="frame" className="w-full max-w-sm" />

        {/* Üçüncü Görsel */}
        <img src="src/assets/tablo3.png" alt="üçüncü" className="w-full max-w-sm" />
        <img src="src/assets/Frame3.png" alt="frame" className="w-full max-w-sm" />
      </div>
    </section>
  );
}