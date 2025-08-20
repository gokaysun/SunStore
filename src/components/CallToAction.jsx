import React from 'react';
import asyaliCift from "../assets/asyaliCift.png";

const CallToAction = () => {
  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden lg:block relative mx-auto w-[1440px] h-[682px] bg-white transform translate-y-[200px] -translate-x-[450px]">
        {/* row (absolute full) */}
        <div className="absolute inset-0 flex flex-row justify-end items-center gap-[30px] p-0">
          {/* col-md-6 (image area) */}
          <div className="relative w-[704px] h-[682px] flex-none order-0 overflow-visible">
            {/* asian-woman-man-with-winter-clothes 1 */}
            <img
              src={asyaliCift}
              alt="Special Offer"
              className="absolute w-[725px] h-[774px] left-[-137px] top-[-211px] object-cover"
            />
          </div>

          {/* col-md-6 (content) */}
          <div className="flex flex-col justify-center items-start gap-[30px] w-[573px] h-[326px] flex-none order-1">
            {/* h5 #header-tag */}
            <p className="font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">SUMMER 2020</p>
            {/* h1 #headline */}
            <h2 className="text-[#252B42] font-[700] text-[40px] leading-[50px] tracking-[0.2px]">
              Part of the Neural
              <br />
              Universe
            </h2>
            {/* h4 #sub-headline */}
            <p className="text-[#737373] font-[400] text-[20px] leading-[30px] tracking-[0.2px] max-w-[376px]">
              We know how large objects will act, but things on a small scale.
            </p>
            {/* cta */}
            <div className="flex flex-row items-start gap-[10px] w-[339px] h-[52px]">
              {/* button Md primary */}
              <button className="flex items-center justify-center px-10 py-[15px] w-[151px] h-[52px] bg-[#2DC071] text-white rounded-[5px] font-[700] text-[14px] leading-[22px] tracking-[0.2px]">
                BUY NOW
              </button>
              {/* button Md outline */}
              <button className="flex items-center justify-center px-10 py-[15px] w-[171px] h-[52px] border border-[#2DC071] text-[#2DC071] bg-white rounded-[5px] font-[700] text-[14px] leading-[22px] tracking-[0.2px]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* Mobile View */}
<div className="lg:hidden p-6">
  <div className="text-center mb-8">
    <p className="text-gray-500 mb-2">Summer 2025</p>
    <h2 className="text-3xl font-bold mb-4">
      Part of the Neural <br /> Universe
    </h2>
    <p className="text-gray-600 mb-6">
      We know how large objects will act, but things on a small scale
    </p>
    <div className="flex flex-col space-y-4 items-center">
      <button className="bg-[#2DC071] text-white rounded-full px-6 py-2 text-sm font-bold hover:bg-[#25a35a] transition-colors w-auto">
        BUY NOW
      </button>
      <button className="text-[#2DC071] border border-[#2DC071] bg-white rounded-full px-6 py-2 text-sm font-bold hover:bg-gray-50 transition-colors w-auto">
        READ MORE
      </button>
    </div>
  </div>
  
  {/* Mobil Görsel */}
  <div className="w-full h-[300px] mt-8">
    <img
      src={asyaliCift}
      alt="Special Offer"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>
      
    </div>
  );
};

export default CallToAction;