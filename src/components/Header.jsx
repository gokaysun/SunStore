import React from "react";
import HeroSlider from "./HeroSlider"; // dosya yolunu projenin yapısına göre kontrol et

export default function Header() {
  return (
    <header className="bg-white w-full px-4 pt-4 pb-4">
      {/* Üst satır: BANDAGE solda, ikonlar sağda */}
      <div className="flex items-center justify-between w-full px-4">
        <div className="ml-[20px] font-bold text-gray-700 text-[18px] leading-[24px] tracking-widest">
          BANDAGE
        </div>

        <div className="flex items-center gap-[25px] mr-[38px]" style={{ width: "168px" }}>
          <img src="/images/HPprofile.png" alt="Menu Icon" className="w-6 h-6" />
          <img src="/images/HPsearch.png" alt="Logo Vector" className="h-6" />
          <img src="/images/HPsepet.png" alt="Shopping Cart Icon" className="w-6 h-6" />
          <img src="/images/HPmenu.png" alt="Search Icon" className="w-6 h-6" />
        </div>
      </div>

      {/* Alt menü yazıları */}
      <nav className="w-[123px] h-[270px] mx-auto mt-4 flex flex-col items-center justify-between">
        <a
          href="#home"
          className="font-montserrat font-normal text-[24px] leading-[36px] tracking-[0.2px] text-center text-gray-700"
        >
          HOME
        </a>
        <a
          href="#product"
          className="font-montserrat font-normal text-[24px] leading-[36px] tracking-[0.2px] text-center text-gray-700"
        >
          PRODUCT
        </a>
        <a
          href="#pricing"
          className="font-montserrat font-normal text-[24px] leading-[36px] tracking-[0.2px] text-center text-gray-700"
        >
          PRICING
        </a>
        <a
          href="#contact"
          className="font-montserrat font-normal text-[24px] leading-[36px] tracking-[0.2px] text-center text-gray-700"
        >
          CONTACT
        </a>
      </nav>

      {/* HeroSlider bileşeni burada */}
      <HeroSlider />
    </header>
  );
}