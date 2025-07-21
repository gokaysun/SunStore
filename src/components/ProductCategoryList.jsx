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
    image: "src/assets/asyali.png", 
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/sarisinKiz.png", 
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/sarisinKiz.png", 
  },
  {
    title: "Graphic Design",
    subtitle: "English Department",
    image: "src/assets/cocuk.png", 
  },
];

export default function ProductCategoryList() {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-2 text-left">BESTSELLER PRODUCTS</h2>
      <p className="text-gray-500 text-sm mb-6 text-left">
        Problems trying to resolve the conflict between
      </p>

      <div className="flex flex-col gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.subtitle}</p>

            {/* Fiyat bilgisi */}
            <div className="flex justify-between items-center w-full mt-2">
              <p className="text-[#BDBDBD] text-sm">$16.48</p>
              <p className="text-black font-bold text-sm">$6.48</p>
            </div>

            {/* Renk seçenekleri */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#23A6F0" }}></span>
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#23856D" }}></span>
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#23856D" }}></span>
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#252B42" }}></span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
