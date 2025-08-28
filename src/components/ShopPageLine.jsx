import React from "react";

export default function ShopPageLine() {
  return (
    // Container: 414x202, bg #FAFAFA, vertical center with 24px padding
    <section className="w-full lg:w-auto">
      <div
        className="relative mx-auto w-[414px] h-[202px] bg-[#FAFAFA] flex flex-col items-center py-6"
        style={{ opacity: 1 }}
      >
        {/* row: column layout with 30px gap (height 154) */}
        <div className="w-[414px] h-[154px] flex flex-col items-start gap-[30px] p-0">
          {/* col-md-6: title block */}
          <div className="w-[414px] h-[80px] flex flex-col items-center py-6">
            <h2 className="w-[63px] h-8 font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] text-center">
              Shop
            </h2>
          </div>

          {/* col-md-10: breadcrumb block */}
          <div className="w-[414px] h-[44px] flex flex-col items-center gap-[5px] p-0 self-stretch">
            <div className="w-[117px] h-[44px] flex flex-row items-center gap-[15px] py-[10px]">
              {/* Home link */}
              <a
                href="#"
                className="w-[43px] h-6 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#252B42] text-center"
                aria-label="Go to home"
              >
                Home
              </a>

              {/* Chevron */}
              <span className="w-[7px] h-[12px] inline-flex items-center justify-center" aria-hidden>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[7px] h-[12px]"
                >
                  <path d="M1 1L6 6L1 11" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              {/* Current page */}
              <span className="w-[37px] h-6 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373] text-center">
                Shop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}