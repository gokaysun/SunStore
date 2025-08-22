import React from "react";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductSlider from "../components/ProductSlider";

export default function Shop() {
  return (
    <main className="w-full bg-white">
      {/* Desktop view */}
      <section className="hidden lg:block w-full">
        <div className="max-w-[1050px] mx-auto py-12">
          {/* Page Title */}
          <header className="mb-8">
            <h1 className="text-[#252B42] text-[40px] font-bold leading-[50px] tracking-[0.2px]">Shop</h1>
            <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px]">
              Explore our latest products and collections.
            </p>
          </header>

          {/* Filters placeholder (non-functional) */}
          <div className="flex items-center justify-between py-4 border-t border-b border-[#E6E6E6] mb-8">
            <div className="text-[#737373] text-[14px] font-semibold">Showing products</div>
            <div className="flex items-center gap-3 text-[14px]">
              <button className="px-4 py-2 border border-[#737373]/40 rounded-[5px] text-[#737373] font-semibold">Filter</button>
              <button className="px-4 py-2 border border-[#737373]/40 rounded-[5px] text-[#737373] font-semibold">Sort</button>
            </div>
          </div>

          {/* Product listing (reuse mobile component works fine responsively) */}
          <ProductCategoryList />
        </div>
      </section>

      {/* Mobile view */}
      <section className="lg:hidden px-4 py-6">
        <header className="mb-6 text-left">
          <h1 className="text-black text-2xl font-bold leading-snug">Shop</h1>
          <p className="text-[#737373] leading-relaxed">Discover our products and best offers.</p>
        </header>

        {/* Products grid / slider reuse */}
        <div className="space-y-8">
          <ProductSlider />
          <ProductCategoryList />
        </div>
      </section>
    </main>
  );
}
