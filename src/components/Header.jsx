import React from "react";
import HeroSlider from "./HeroSlider";

export default function Header() {
  return (
    <header className="w-full font-montserrat relative">
      {/* Üst desktop bar */}
      <div className="hidden lg:flex bg-[#252B42] text-white h-[58px] w-screen fixed top-0 left-0 z-50">
        <div className="flex w-full items-center justify-between h-full px-0">
          <div className="flex gap-6 items-center pl-6">
            <div className="flex items-center gap-2">
              <img src="/src/assets/Desk_Phone.png" alt="Phone" className="w-4 h-4" />
              <span className="text-sm font-bold tracking-[0.2px]">(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/src/assets/Desk_Mail.png" alt="Mail" className="w-4 h-4" />
              <span className="text-sm font-bold tracking-[0.2px]">michelle.rivera@example.com</span>
            </div>
          </div>

          <div className="text-sm font-bold tracking-[0.2px]">
            Follow Us and get a chance to win 80% off
          </div>

          <div className="flex items-center gap-4 pr-6">
            <span className="text-sm font-bold tracking-[0.2px]">Follow Us :</span>
            <div className="flex gap-3">
              <a href="#"><img src="/src/assets/Desk_Instagram.png" alt="Instagram" className="w-10 h-10" /></a>
              <a href="#"><img src="/src/assets/Desk_Youtube.png" alt="YouTube" className="w-10 h-10" /></a>
              <a href="#"><img src="/src/assets/Desk_Facebook.png" alt="Facebook" className="w-10 h-10" /></a>
              <a href="#"><img src="/src/assets/Desk_Twitter.png" alt="Twitter" className="w-10 h-10" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Alt desktop navbar */}
      <div className="hidden lg:flex w-screen h-[58px] bg-white border-b border-gray-200 fixed top-[58px] left-0 z-40">
        <div className="flex w-full justify-between items-center px-6">
          {/* Sol logo kısmı */}
          <div className="flex items-center gap-2">
            <a href="#" className="font-bold text-lg text-gray-800 hover:text-blue-500">Bandage</a>
          </div>

          {/* Navigation links */}
          <nav className="flex gap-6 text-[14px] font-medium">
  <a href="#" className="!text-[#737373] hover:text-blue-500">Home</a>
  <a href="#" className="!text-[#737373] hover:text-blue-500">Shop</a>
  <a href="#" className="!text-[#737373] hover:text-blue-500">About</a>
  <a href="#" className="!text-[#737373] hover:text-blue-500">Blog</a>
  <a href="#" className="!text-[#737373] hover:text-blue-500">Contact</a>
  <a href="#" className="!text-[#737373] hover:text-blue-500">Pages</a>
</nav>


          {/* Sağ login + ikonlar */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-1 hover:text-blue-500">
              <img src="src/assets/Desk_User.png" alt="User" className="w-4 h-4" />
              <span className="text-[14px] font-semibold">Login / Register</span>
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="src/assets/Desk_Search.png" alt="Search" className="w-12 h-12" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="src/assets/Desk_Sepet.png" alt="Cart" className="w-12 h-12" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="src/assets/Desk_Favori.png" alt="Wishlist" className="w-12 h-12" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobil Header */}
      <div className="lg:hidden flex items-center justify-between w-full pt-4 pb-4 mt-[116px] bg-white px-0">
        <div className="pl-6 font-bold text-gray-700 text-[18px] leading-[24px] tracking-widest">
          <a href="#" className="hover:text-blue-500">BANDAGE</a>
        </div>

        <div className="flex items-center gap-[25px] pr-6" style={{ width: "168px" }}>
          <a href="#"><img src="/images/HPprofile.png" alt="Profile Icon" className="w-6 h-6" /></a>
          <a href="#"><img src="/images/HPsearch.png" alt="Search Icon" className="h-6" /></a>
          <a href="#"><img src="/images/HPsepet.png" alt="Cart Icon" className="w-6 h-6" /></a>
          <a href="#"><img src="/images/HPmenu.png" alt="Menu Icon" className="w-6 h-6" /></a>
        </div>
      </div>

      {/* Mobil Menü Linkleri */}
      <nav className="lg:hidden w-[123px] h-[270px] mx-auto mt-4 flex flex-col items-center justify-between">
        {["HOME", "PRODUCT", "PRICING", "CONTACT"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-montserrat font-normal text-[24px] leading-[36px] tracking-[0.2px] text-center text-gray-700"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Slider */}
      <HeroSlider />
    </header>
  );
}
