import React from "react";

const cards = [
  { id: 1, src: "public/images/clothsMobil1.jpg", title: "CLOTHS", items: "5 Items" },
  { id: 2, src: "public/images/clothsMobil2.jpg", title: "CLOTHS", items: "5 Items" },
  { id: 3, src: "public/images/clothsMobil3.jpg", title: "CLOTHS", items: "5 Items" },
  { id: 4, src: "public/images/clothsMobil4.jpg", title: "CLOTHS", items: "5 Items" },
  { id: 5, src: "public/images/clothsMobil5.jpg", title: "CLOTHS", items: "5 Items" },
];

function ClothCard({ src, title, items }) {
  return (
    <div className="relative w-[332px] h-[300px] bg-white">
      {/* media bg-cover */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* filter */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(33,33,33,0.25)" }}
      />
      {/* card-content (centered) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h6 className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-white">
          {title}
        </h6>
        <span className="mt-2 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-white">
          {items}
        </span>
      </div>
    </div>
  );
}

export default function ShopCloths() {
  return (
    // mobile-shop-cards-18 container
    <section className="w-full lg:hidden">
      <div className="relative mx-auto w-[414px] h-[1628px] bg-[#FAFAFA]" style={{ opacity: 1 }}>
        {/* inner container positioned centered with specified width/height and top:0 */}
        <div className="absolute top-0 left-[calc(50%-166.5px+0.5px)] w-[333px] h-[1615px] flex flex-col items-start gap-[18px] py-6">
          {/* first row: 3 stacked cards (gap 15px, total height 930px) */}
          <div className="w-[333px] h-[930px] flex flex-col items-start gap-[15px]">
            <div className="w-[332px] h-[300px]"><ClothCard src={cards[0].src} title={cards[0].title} items={cards[0].items} /></div>
            <div className="w-[332px] h-[300px]"><ClothCard src={cards[1].src} title={cards[1].title} items={cards[1].items} /></div>
            <div className="w-[333px] h-[300px]"><ClothCard src={cards[2].src} title={cards[2].title} items={cards[2].items} /></div>
          </div>

          {/* second row: 2 stacked cards (gap 19px, height 619px) */}
          <div className="w-[333px] h-[619px] flex flex-col items-start gap-[19px]">
            <div className="w-[333px] h-[300px]"><ClothCard src={cards[3].src} title={cards[3].title} items={cards[3].items} /></div>
            <div className="w-[332px] h-[300px]"><ClothCard src={cards[4].src} title={cards[4].title} items={cards[4].items} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}