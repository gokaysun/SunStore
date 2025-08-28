import React from "react";

export default function ShopShowing() {
  return (
    <>
      {/* Desktop variant (filter-row) */}
      <section className="hidden lg:block w-full">
        {/* filter-row: 1440x98, white bg, centered */}
        <div className="w-full flex justify-center bg-white">
          <div className="relative w-[1440px] h-[98px] bg-white">
            {/* container: absolute centered 1050x98, py-6 (24px) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1050px] h-[98px] flex flex-col items-center gap-[80px] py-6">
              {/* row: 1049x50, space-between */}
              <div className="w-[1049px] h-[50px] flex flex-row items-center justify-between">
                {/* sort: Showing results (168x24) */}
                <div className="w-[168px] h-6 flex flex-row items-center gap-[15px] px-px">
                  <span className="w-[166px] h-6 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
                    Showing all 12 results
                  </span>
                </div>

                {/* sort: Views label + buttons (177x46) */}
                <div className="w-[177px] h-[46px] flex flex-row items-center gap-[15px] px-px">
                  <span className="w-[53px] h-6 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
                    Views:
                  </span>
                  <div className="w-[107px] h-[46px] flex flex-row items-center gap-[15px]">
                    {/* grid btn */}
                    <button type="button" className="w-[46px] h-[46px] rounded-[5px] border border-[#ECECEC] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="5" height="5" fill="#252B42"/>
                        <rect x="9" y="2" width="5" height="5" fill="#252B42"/>
                        <rect x="2" y="9" width="5" height="5" fill="#252B42"/>
                        <rect x="9" y="9" width="5" height="5" fill="#252B42"/>
                      </svg>
                    </button>
                    {/* list btn */}
                    <button type="button" className="w-[46px] h-[46px] rounded-[5px] border border-[#ECECEC] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="12" height="2" fill="#737373"/>
                        <rect x="2" y="7" width="12" height="2" fill="#737373"/>
                        <rect x="2" y="11" width="12" height="2" fill="#737373"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* sort: select + filter (252x50) */}
                <div className="w-[252px] h-[50px] flex flex-row items-center gap-[15px] px-px">
                  {/* custom-select (141x50) */}
                  <div className="relative w-[141px] h-[50px]">
                    <select
                      className="absolute inset-0 h-[50px] w-full appearance-none rounded-[5px] border border-[#DDDDDD] bg-[#F9F9F9] pl-[18px] pr-10 font-[400] text-[14px] leading-[28px] tracking-[0.2px] text-[#737373]"
                      defaultValue="popularity"
                    >
                      <option value="popularity">Popularity</option>
                      <option value="rating">Rating</option>
                      <option value="newest">Newest</option>
                      <option value="price_low">Price: Low</option>
                      <option value="price_high">Price: High</option>
                    </select>
                    {/* caret */}
                    <svg
                      className="pointer-events-none absolute right-[35px] top-1/2 -translate-y-1/2 rotate-90"
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 1L7 7L1 13" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Filter button (94x50) */}
                  <button className="w-[94px] h-[50px] rounded-[5px] bg-[#23A6F0] px-5 py-[10px]">
                    <span className="block w-[40px] h-6 mx-auto font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-white">
                      Filter
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile variant (unchanged) */}
      {/* filter-row container 412x216 white background */}
      <section className="w-full lg:hidden">
        <div className="relative mx-auto w-[412px] h-[216px] bg-white" style={{ opacity: 1 }}>
          {/* container centered with vertical padding 24px */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[412px] h-[216px] flex flex-col items-center py-6">
            {/* row with 24px gap, width 252px */}
            <div className="w-[252px] h-[168px] flex flex-col items-center gap-6">
              {/* sort: Showing results */}
              <div className="w-[168px] h-6 flex flex-row items-center gap-[15px] px-px">
                <span className="w-[166px] h-6 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
                  Showing all 12 results
                </span>
              </div>

              {/* sort: Views label + two icon buttons */}
              <div className="w-[177px] h-[46px] flex flex-row items-center gap-[15px] px-px">
                <span className="w-[53px] h-6 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
                  Views:
                </span>
                <div className="w-[107px] h-[46px] flex flex-row items-center gap-[15px]">
                  {/* grid icon button */}
                  <button type="button" className="w-[46px] h-[46px] rounded-[5px] border border-[#ECECEC] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="5" height="5" fill="#252B42"/>
                      <rect x="9" y="2" width="5" height="5" fill="#252B42"/>
                      <rect x="2" y="9" width="5" height="5" fill="#252B42"/>
                      <rect x="9" y="9" width="5" height="5" fill="#252B42"/>
                    </svg>
                  </button>
                  {/* list icon button */}
                  <button type="button" className="w-[46px] h-[46px] rounded-[5px] border border-[#ECECEC] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="12" height="2" fill="#737373"/>
                      <rect x="2" y="7" width="12" height="2" fill="#737373"/>
                      <rect x="2" y="11" width="12" height="2" fill="#737373"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* sort: select + filter button */}
              <div className="w-[252px] h-[50px] flex flex-row items-center gap-[15px] px-px">
                {/* custom-select */}
                <div className="relative w-[141px] h-[50px]">
                  <select
                    className="absolute inset-0 h-[50px] w-full appearance-none rounded-[5px] border border-[#DDDDDD] bg-[#F9F9F9] pl-[18px] pr-10 font-[400] text-[14px] leading-[28px] tracking-[0.2px] text-[#737373]"
                    defaultValue="popularity"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest</option>
                    <option value="price_low">Price: Low</option>
                    <option value="price_high">Price: High</option>
                  </select>
                  {/* caret icon rotated 90deg to match spec position */}
                  <svg
                    className="pointer-events-none absolute right-[35px] top-1/2 -translate-y-1/2 rotate-90"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L7 7L1 13" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Filter button */}
                <button className="w-[94px] h-[50px] rounded-[5px] bg-[#23A6F0] px-5 py-[10px]">
                  <span className="block w-[40px] h-6 mx-auto font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-white">
                    Filter
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}