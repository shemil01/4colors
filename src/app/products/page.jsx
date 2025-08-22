"use client";
import React, { useEffect, useState } from "react";
import { SideFilter } from "@/components/product/SideFilter";
import ProductCard from "@/components/product/ProductCard";
import TopBar from "@/components/product/TopBar";
import Footer from "@/components/layouts/Footer";
import HeroSection from "@/components/product/HeroSection";
import { products } from "@/data/products";
import Navbar from "@/components/layouts/Navbar";

const ProductListPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sortOption, setSortOption] = useState("popularity");
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...products];

    if (option === "priceLowHigh") {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (option === "priceHighLow") {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (option === "newest") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    // for "popularity" you can later sort by sales/featured products
    setSortedProducts(sorted);
  };

  const filteredProducts = sortedProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  useEffect(() => {
    const uniqueCategories = [
      "all",
      ...new Set(sortedProducts.map((item) => item.categoryId)),
    ];
    setCategories(uniqueCategories);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      <HeroSection />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <SideFilter
            categories={categories}
            priceRange={priceRange}
            selectedCategory={selectedCategory}
            setPriceRange={setPriceRange}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Products Grid */}
          <div className="flex-1">
            <TopBar
              filteredProducts={filteredProducts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setViewMode={setViewMode}
              viewMode={viewMode}
              handleSort={handleSort}
              sortOption={sortOption}
            />

            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  product={product}
                  hoveredProduct={hoveredProduct}
                  setHoveredProduct={setHoveredProduct}
                  viewMode={viewMode}
                  key={product.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default ProductListPage;
