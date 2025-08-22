import { Grid, List, Search } from "lucide-react";
import React from "react";

const TopBar = ({
  filteredProducts,
  searchTerm,
  setSearchTerm,
  setViewMode,
  viewMode,
  handleSort,
  sortOption,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <p className="text-slate-600">
        Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
        products
      </p>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 w-80 bg-white/70 border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 transition-all duration-200 backdrop-blur-sm"
          />
        </div>

        <div className="flex bg-white/70 border border-gray-200/50 rounded-2xl p-1 backdrop-blur-sm">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-3 rounded-xl transition-all duration-200 ${
              viewMode === "grid"
                ? "bg-[#00AEEF] text-white shadow-lg"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-3 rounded-xl transition-all duration-200 ${
              viewMode === "list"
                ? "bg-[#00AEEF] text-white shadow-lg"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
      <select
        value={sortOption}
        onChange={handleSort}
        className="px-4 py-2 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 backdrop-blur-sm"
      >
        <option value="popularity">Sort by popularity</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="newest">Newest first</option>
      </select>
    </div>
  );
};

export default TopBar;
