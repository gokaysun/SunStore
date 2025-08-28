import React from "react";

const products = [
  { id: 1, img: "public/images/ShopGrap1.png", title: "Graphic Design", category: "English Department", old: "$16.48", price: "$6.48" },
  { id: 2, img: "public/images/ShopGrap2.png", title: "Graphic Design", category: "English Department", old: "$16.48", price: "$6.48" },
  { id: 3, img: "public/images/ShopGrap3.png", title: "Graphic Design", category: "English Department", old: "$16.48", price: "$6.48" },
  { id: 4, img: "public/images/ShopGrap3.png", title: "Graphic Design", category: "English Department", old: "$16.48", price: "$6.48" },
];

function ProductCard({ p }) {
  return (
    <div className="flex flex-col items-start w-[348px] h-[615px] bg-white">
      {/* fixed-height image */}
      <div className="relative w-[348px] h-[427px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${p.img})` }}
        />
      </div>
      {/* Frame 3 content */}
      <div className="w-[348px] h-[188px] flex flex-col items-center gap-[10px] px-[25px] pt-[25px] pb-[35px]">
        <h5 className="w-[131px] h-6 text-center font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#252B42]">
          {p.title}
        </h5>
        <a className="w-[146px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
          {p.category}
        </a>
        <div className="w-[108px] h-[34px] flex flex-row items-start gap-[5px] px-[3px] py-[5px]">
          <span className="w-[52px] h-6 text-center font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#BDBDBD] line-through">
            {p.old}
          </span>
          <span className="w-[45px] h-6 text-center font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#23856D]">
            {p.price}
          </span>
        </div>
        {/* product colors */}
        <div className="w-[82.23px] h-4 flex flex-row items-center gap-[6.08px]">
          <span className="w-4 h-4 rounded-full bg-[#23A6F0]" />
          <span className="w-4 h-4 rounded-full bg-[#23856D]" />
          <span className="w-4 h-4 rounded-full bg-[#E77C40]" />
          <span className="w-4 h-4 rounded-full bg-[#252B42]" />
        </div>
      </div>
    </div>
  );
}

function ProductCardDesktop({ p }) {
  return (
    <div className="flex flex-col items-start w-[239px] h-[488px] bg-white">
      {/* fixed-height (239x300) */}
      <div className="relative w-[239px] h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${p.img})` }}
        />
      </div>
      {/* Frame 3 (239x188) */}
      <div className="w-[239px] h-[188px] flex flex-col items-center gap-[10px] px-[25px] pt-[25px] pb-[35px]">
        <h5 className="w-[131px] h-6 text-center font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#252B42]">
          {p.title}
        </h5>
        <a className="w-[146px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
          {p.category}
        </a>
        <div className="w-[129.06px] h-[34px] flex flex-row items-start gap-[5px] px-[3px] py-[5px]">
          <span className="w-[52px] h-6 text-center font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#BDBDBD] line-through">
            {p.old}
          </span>
          <span className="w-[66.06px] h-6 text-center font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#23856D]">
            {p.price}
          </span>
        </div>
        <div className="w-[82.23px] h-4 flex flex-row items-center gap-[6.08px]">
          <span className="w-4 h-4 rounded-full bg-[#23A6F0]" />
          <span className="w-4 h-4 rounded-full bg-[#23856D]" />
          <span className="w-4 h-4 rounded-full bg-[#E77C40]" />
          <span className="w-4 h-4 rounded-full bg-[#23856D]" />
        </div>
      </div>
    </div>
  );
}

export default function ShopGraphic() {
  // prepare 12 desktop items (3 rows x 4 cols)
  const desktopItems = Array.from({ length: 12 }, (_, i) => ({ ...products[i % products.length], id: i + 1 }));

  return (
    <>
      {/* Desktop variant: desktop-product-cards-10 */}
      <section className="hidden lg:block w-full">
        {/* 1440x1778 white background centered */}
        <div className="w-full flex justify-center bg-white">
          <div className="relative w-[1440px] h-[1778px] bg-white">
            {/* container: absolute centered 1124x1778, py-12 (48px), gap-12 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1124px] h-[1778px] flex flex-col items-center gap-12 py-12">
              {/* rows: 3 rows, each 1048x488, gap-30px */}
              <div className="w-[1048px] h-[488px] flex flex-row items-start gap-[30px]">
                {desktopItems.slice(0, 4).map((p) => (
                  <div key={`d1-${p.id}`} className="flex flex-col items-center w-[238px] h-[488px]">
                    <ProductCardDesktop p={p} />
                  </div>
                ))}
              </div>

              <div className="w-[1048px] h-[488px] flex flex-row items-start gap-[30px]">
                {desktopItems.slice(4, 8).map((p) => (
                  <div key={`d2-${p.id}`} className="flex flex-col items-center w-[241px] h-[488px]">
                    <ProductCardDesktop p={p} />
                  </div>
                ))}
              </div>

              <div className="w-[1048px] h-[488px] flex flex-row items-start gap-[30px]">
                {desktopItems.slice(8, 12).map((p) => (
                  <div key={`d3-${p.id}`} className="flex flex-col items-center w-[240px] h-[488px]">
                    <ProductCardDesktop p={p} />
                  </div>
                ))}
              </div>

              {/* Pagination (desktop) */}
              <div className="w-[313px] h-[74px] rounded-[6.72761px] bg-white border border-[#BDBDBD] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                <ul className="relative w-[312px] h-[74px] flex flex-row items-start">
                  <li className="w-[83px] h-[74px] flex items-center justify-center bg-[#F3F3F3] border border-[#BDBDBD]">
                    <span className="w-[33px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#BDBDBD]">
                      First
                    </span>
                  </li>
                  <li className="w-[46px] h-[74px] flex items-center justify-center bg-white border border-[#E9E9E9]">
                    <span className="w-[6px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#23A6F0]">
                      1
                    </span>
                  </li>
                  <li className="w-[49px] h-[74px] flex items-center justify-center bg-[#23A6F0] border border-[#E9E9E9]">
                    <span className="w-[9px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-white">
                      2
                    </span>
                  </li>
                  <li className="w-[49px] h-[74px] flex items-center justify-center bg-white border border-[#E9E9E9]">
                    <span className="w-[9px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#23A6F0]">
                      3
                    </span>
                  </li>
                  <li className="w-[85px] h-[74px] flex items-center justify-center bg-white border border-[#E8E8E8]">
                    <span className="w-[35px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#23A6F0]">
                      Next
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile variant (existing) */}
      {/* mobile-product-cards-10 */}
      <section className="w-full lg:hidden">
        <div className="relative mx-auto w-[414px] h-[2832px] bg-white" style={{ opacity: 1 }}>
          {/* container */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[328px] h-[2832px] flex flex-col items-center gap-[48px] py-20">
            {/* row */}
            <div className="w-[328px] h-[2550px] flex flex-col justify-center items-start gap-[30px]">
              {/* three columns stacked, making four cards as per screenshot */}
              {products.map((p) => (
                <div key={p.id} className="flex flex-col items-center w-[328px] h-[615px]">
                  <ProductCard p={p} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="w-[313px] h-[74px] rounded-[6.72761px] bg-white border border-[#BDBDBD] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
              <ul className="relative w-[312px] h-[74px] flex flex-row items-start">
                <li className="w-[83px] h-[74px] flex items-center justify-center bg-[#F3F3F3] border border-[#BDBDBD]">
                  <span className="w-[33px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#BDBDBD]">
                    First
                  </span>
                </li>
                <li className="w-[46px] h-[74px] flex items-center justify-center bg-white border border-[#E9E9E9]">
                  <span className="w-[6px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#23A6F0]">
                    1
                  </span>
                </li>
                <li className="w-[49px] h-[74px] flex items-center justify-center bg-[#23A6F0] border border-[#E9E9E9]">
                  <span className="w-[9px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-white">
                    2
                  </span>
                </li>
                <li className="w-[49px] h-[74px] flex items-center justify-center bg-white border border-[#E9E9E9]">
                  <span className="w-[9px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#23A6F0]">
                    3
                  </span>
                </li>
                <li className="w-[85px] h-[74px] flex items-center justify-center bg-white border border-[#E8E8E8]">
                  <span className="w-[35px] h-6 text-center font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#23A6F0]">
                    Next
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}