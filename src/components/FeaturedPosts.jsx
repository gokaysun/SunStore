import React from "react";

export default function FeaturedPosts() {
  return (
    <section className="bg-white w-full">
      {/* Desktop (lg+) */}
      <div className="hidden lg:block relative mx-auto w-[1440px] h-[1044px] bg-white transform translate-y-[100px] -translate-x-[450px]">
        {/* container centered to 1050px */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1050px] h-[1044px] flex flex-col items-center py-[112px] gap-[80px]">
          {/* header row */}
          <div className="flex flex-col items-center w-[692px] h-[134px]">
            <p className="text-[#23A6F0] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center">Practice Advice</p>
            <h3 className="text-[#252B42] font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-center">Featured Posts</h3>
            <p className="text-[#737373] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-center w-[469px]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* cards row */}
          <div className="flex flex-row justify-center items-start gap-[30px] w-[1045px] h-[606px]">
            {/* Card 1 */}
            <article className="flex flex-col items-center w-[348px] h-[606px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              {/* fixed-height image block */}
              <div className="relative w-[348px] h-[300px]">
                <img src="/images/FPImages1.png" alt="post 1" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute left-5 top-5 px-[10px] h-6 inline-flex items-center justify-center bg-[#E74040] text-white text-[14px] font-[700] leading-[24px] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">NEW</span>
              </div>
              {/* content */}
              <div className="flex flex-col items-start gap-[10px] w-[348px] h-[306px] px-[25px] pt-[25px] pb-[35px]">
                {/* tags */}
                <div className="flex flex-row items-center gap-[15px] text-[12px] leading-4 tracking-[0.2px]">
                  <span className="text-[#8EC2F2]">Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>
                <h4 className="text-[#252B42] font-[400] text-[20px] leading-[30px] tracking-[0.2px] w-[247px]">
                  Loudest à la Madison #1 (L'integral)
                </h4>
                <p className="text-[#737373] font-[400] text-[14px] leading-5 tracking-[0.2px] w-[280px]">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                {/* footer meta */}
                <div className="flex flex-row justify-between items-center w-[298px] py-[15px]">
                  <div className="flex items-center gap-2 text-[#737373] text-[12px]">22 April 2021</div>
                  <div className="flex items-center gap-2 text-[#737373] text-[12px]">10 comments</div>
                </div>
                <a className="flex items-center gap-2 text-[#737373] font-[700] text-[14px] leading-6 cursor-pointer">
                  Learn More <span className="text-[#23A6F0]">›</span>
                </a>
              </div>
            </article>

            {/* Card 2 */}
            <article className="flex flex-col items-center w-[348px] h-[606px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              <div className="relative w-[348px] h-[300px]">
                <img src="/images/FPImages2.png" alt="post 2" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute left-5 top-5 px-[10px] h-6 inline-flex items-center justify-center bg-[#E74040] text-white text-[14px] font-[700] leading-[24px] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">NEW</span>
              </div>
              <div className="flex flex-col items-start gap-[10px] w-[348px] h-[306px] px-[25px] pt-[25px] pb-[35px]">
                <div className="flex flex-row items-center gap-[15px] text-[12px] leading-4 tracking-[0.2px]">
                  <span className="text-[#8EC2F2]">Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>
                <h4 className="text-[#252B42] font-[400] text-[20px] leading-[30px] tracking-[0.2px] w-[247px]">
                  Loudest à la Madison #1 (L'integral)
                </h4>
                <p className="text-[#737373] font-[400] text-[14px] leading-5 tracking-[0.2px] w-[280px]">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="flex flex-row justify-between items-center w-[298px] py-[15px]">
                  <div className="flex items-center gap-2 text-[#737373] text-[12px]">22 April 2021</div>
                  <div className="flex items-center gap-2 text-[#737373] text-[12px]">10 comments</div>
                </div>
                <a className="flex items-center gap-2 text-[#737373] font-[700] text-[14px] leading-6 cursor-pointer">
                  Learn More <span className="text-[#23A6F0]">›</span>
                </a>
              </div>
            </article>

            {/* Card 3 */}
            <article className="flex flex-col items-center w-[348px] h-[606px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              <div className="relative w-[348px] h-[300px]">
                <img src="/images/FPImages3.png" alt="post 3" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute left-5 top-5 px-[10px] h-6 inline-flex items-center justify-center bg-[#E74040] text-white text-[14px] font-[700] leading-[24px] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">NEW</span>
              </div>
              <div className="flex flex-col items-start gap-[10px] w-[348px] h-[306px] px-[25px] pt-[25px] pb-[35px]">
                <div className="flex flex-row items-center gap-[15px] text-[12px] leading-4 tracking-[0.2px]">
                  <span className="text-[#8EC2F2]">Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>
                <h4 className="text-[#252B42] font-[400] text-[20px] leading-[30px] tracking-[0.2px] w-[247px]">
                  Loudest à la Madison #1 (L'integral)
                </h4>
                <p className="text-[#737373] font-[400] text-[14px] leading-5 tracking-[0.2px] w-[280px]">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="flex flex-row justify-between items-center w-[298px] py-[15px]">
                  <div className="flex items-center gap-2 text-[#737373] text-[12px]">22 April 2021</div>
                  <div className="flex items-center gap-2 text-[#737373] text-[12px]">10 comments</div>
                </div>
                <a className="flex items-center gap-2 text-[#737373] font-[700] text-[14px] leading-6 cursor-pointer">
                  Learn More <span className="text-[#23A6F0]">›</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Mobile / current layout (unchanged), visible below lg */}
      <div className="lg:hidden px-4 py-8 flex flex-col items-center">
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
          <img src="/images/tablo.png" alt="ilk" className="w-full max-w-sm" />
          <img src="/images/Frame1.png" alt="frame" className="w-full max-w-sm" />

          {/* İkinci Görsel */}
          <img src="/images/tablo2.png" alt="ikinci" className="w-full max-w-sm" />
          <img src="/images/Frame2.png" alt="frame" className="w-full max-w-sm" />

          {/* Üçüncü Görsel */}
          <img src="/images/tablo3.png" alt="üçüncü" className="w-full max-w-sm" />
          <img src="/images/Frame3.png" alt="frame" className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
}
