import React from "react";

const products = [
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/kivircik.png",
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/cocuk2.png",
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/pembeSweat.png",
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/uzunEtekli.png",
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/WebFoto/Desktop6.png",
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/WebFoto/Desktop5.png",
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/WebFoto/SweetshirtDesktop.png",
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/WebFoto/SiyahiCocukDesktop.png",
  },
];

function ProductCard({ product }) {
  return (
    <div className="w-[239px] h-[615px] bg-white flex flex-col">
      {/* fixed-height image area 239x427 */}
      <div className="relative w-full h-[427px] overflow-hidden">
        <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      {/* Frame 3 content area 239x188 with specific paddings */}
      <div className="flex flex-col items-center gap-[10px] pt-[25px] pb-[35px] px-[25px] h-[188px]">
        <h5 className="text-[#252B42] font-bold text-[16px] leading-6 tracking-[0.1px] text-center">{product.title}</h5>
        <a className="text-[#737373] font-bold text-[14px] leading-6 tracking-[0.2px] text-center">{product.subtitle}</a>
        <div className="flex items-start gap-[5px] p-[5px_3px]">
          <span className="text-[#BDBDBD] font-bold text-[16px] leading-6 tracking-[0.1px]">$16.48</span>
          <span className="text-[#23856D] font-bold text-[16px] leading-6 tracking-[0.1px]">$6.48</span>
        </div>
        <div className="flex items-center gap-[6.08px]">
          <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
          <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
          <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
          <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
        </div>
      </div>
    </div>
  );
}

export default function ProductCategoryList() {
  return (
    <section className="w-full bg-white">
      {/* Outer desktop canvas: 1440x1652 intention */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-0 py-8 lg:py-20">
        {/* Title block */}
        <div className="text-center mb-8">
          <h4 className="text-[#737373] font-normal text-[20px] leading-[30px] tracking-[0.2px]">Featured Products</h4>
          <h3 className="text-[#252B42] font-bold text-[24px] leading-8 tracking-[0.1px]">BESTSELLER PRODUCTS</h3>
          <p className="text-[#737373] text-[14px] leading-5 tracking-[0.2px]">Problems trying to resolve the conflict between</p>
        </div>

        {/* Mobile layout (existing list) */}
        <div className="flex flex-col gap-8 lg:hidden">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.subtitle}</p>
              <div className="flex justify-between items-center w-full mt-2">
                <p className="text-[#BDBDBD] text-sm">$16.48</p>
                <p className="text-black font-bold text-sm">$6.48</p>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#23A6F0" }}></span>
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#23856D" }}></span>
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#E77C40" }}></span>
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#252B42" }}></span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout: 4x2 grid, gap 30px, each card fixed size; centered for equal side margins */}
        <div className="hidden lg:block">
          <div className="mx-auto w-[1049px] lg:relative lg:left-[-300px]">
            <div className="grid grid-cols-4 gap-[30px]">
              {products.slice(0, 4).map((p, i) => (
                <ProductCard key={`top-${i}`} product={p} />
              ))}
            </div>
            <div className="mt-20 grid grid-cols-4 gap-[30px]">{/* 80px between rows overall section gap handled by margin */}
              {products.slice(4, 8).map((p, i) => (
                <ProductCard key={`bottom-${i}`} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
