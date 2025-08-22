import React from "react";

export const SideFilter = ({
  categories,
  setSelectedCategory,
  selectedCategory,
  priceRange,
  setPriceRange,
}) => {
  return (
    <div className="lg:w-80 space-y-6">
      {/* Categories */}
      <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 capitalize ${
                selectedCategory === category
                  ? "bg-[#00AEEF] text-white  shadow-lg"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Price Range
        </h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-slate-600">
            <span>QAR 0</span>
            <span className="font-semibold">${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
