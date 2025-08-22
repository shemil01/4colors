"use client";
import { Eye, Heart, ShoppingBag, ShoppingCart, Star } from "lucide-react";
import React, { useRef, useState } from "react";

const ProductCard = ({
  product,
  setHoveredProduct,
  hoveredProduct,
  viewMode,
}) => {
  const hoverButtonRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);
  return (
    <div
      id="products"
      key={product.id}
      className={`group relative bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        viewMode === "list" ? "flex" : ""
      }`}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Product Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              product.badge === "Best Seller"
                ? "bg-green-500 text-white"
                : product.badge === "New"
                ? "bg-blue-500 text-white"
                : product.badge === "Limited"
                ? "bg-red-500 text-white"
                : product.badge === "Premium"
                ? "bg-purple-500 text-white"
                : "bg-orange-500 text-white"
            }`}
          >
            {product.badge}
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
        <Heart className="w-4 h-4 text-slate-600 hover:text-red-500 transition-colors" />
      </button>

      {/* Product Image */}
      <div
        className={`relative overflow-hidden ${
          viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Actions */}
        <div
          className={`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 ${
            hoveredProduct === product.id ? "opacity-100" : ""
          }`}
        >
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110">
            <Eye className="w-5 h-5 text-slate-700" />
          </button>
          <button className="p-3 bg-[#00AEEF] text-white rounded-full hover:bg-[#00AEEF] transition-all duration-200 transform hover:scale-110 shadow-lg">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-slate-900 text-lg group-hover:text-[#00AEEF] transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-brand-gold text-brand-gold"
              />
            ))}
          </div>
        </div>

        {/* Colors */}
        {/* <div className="flex gap-2 mb-4">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div> */}

        {/* Price */}
        <div className="space-x-3">
          {product.comparePrice && (
            <span className="text-lg text-slate-400 line-through">
              <span className="text-sm">QAR</span> {product.comparePrice}
            </span>
          )}
          {product.comparePrice && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-lg">
              Save <span className="text-sm">QAR</span>{" "}
              {product.comparePrice - product.price}
            </span>
          )}
        </div>
        <div
          className={`flex items-center justify-between ${
            viewMode === "grid" ? " flex-row " : "max-sm:flex-col"
          } `}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">
              <span className="text-sm">QAR</span> {product.price}
            </span>
          </div>
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex mt-5 md:mt-0 w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-[10px] md:text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <button className="relative z-20 text-gray-400  py-2 md:py-3">
              Add to Cart
            </button>
            <ShoppingBag className="relative z-20 text-white w-4 h-4 " />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
