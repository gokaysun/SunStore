import React from "react";

const categories = [
  { name: "MEN", image: "src/assets/cocuk.png" },
  { name: "WOMEN", image: "src/assets/kiz.png" },
  { name: "ACCESSORIES", image: "src/assets/hirkaliKiz.png" },
  { name: "KIDS", image: "src/assets/sariGomlek.png" },
];

export default function CategoryPick() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-1 text-left">EDITOR'S PICK</h1>
      <p className="text-gray-500 text-sm mb-6 text-left">
        Problems trying to resolve the conflict between
      </p>

      {/* Görseller alt alta */}
      <div className="flex flex-col gap-6">
        {categories.map((category) => (
          <div key={category.name} className="relative">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <button
              className="absolute bottom-4 left-4 px-4 py-2 bg-white text-black text-sm font-semibold border rounded hover:bg-gray-100"
              onClick={() => console.log(`${category.name} clicked`)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
