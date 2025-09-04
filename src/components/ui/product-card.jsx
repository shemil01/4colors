"use client";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductCard({ product, viewMode = "grid" }) {
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
  if (viewMode === "list") {
    return (
      <div className="max-w-sm mx-auto my-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          {/* Image */}
          <div className="h-64 overflow-hidden">
            <Image
              src={
                product.image ||
                "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
              }
              alt="Red Nike Shoes"
              width={500}
              height={500}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h2>

            {product.shortDescription && (
              <p className="text-sm text-gray-500 mb-4">
                {" "}
                {product.shortDescription}
              </p>
            )}
            {product.brand && (
              <p className="text-sm text-gray-500 mb-4"> {product.brand}</p>
            )}
            <div className="flex justify-between items-center">
              {product.comparePrice && (
                <div className="text-sm text-brand-gray line-through">
                  QAR {product.comparePrice}
                </div>
              )}
              <span className="text-xl font-semibold text-red-600">
                QAR {product.price}{" "}
              </span>

              <button className="bg-red-600 flex items-center gap-4 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-colors">
                Add to Cart{" "}
                <span>
                  <ShoppingBag />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto my-8">
      <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="h-64 flex items-center justify-center bg-white overflow-hidden">
          <Image
            src={
              product.image ||
              "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
            }
            alt="Red Nike Shoes"
            width={500}
            height={500}
            className="max-h-full max-w-full object-contain transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#1A1A40] mb-2">
            {product.name}
          </h2>

          {product.shortDescription && (
            <p className="text-sm text-gray-500 mb-4">
              {" "}
              {product.shortDescription}
            </p>
          )}
          {product.brand && (
            <p className="text-sm text-gray-500 mb-4"> {product.brand}</p>
          )}
          <div className="flex justify-between items-center">
            {product.comparePrice && (
              <div className="text-sm text-brand-gray line-through">
                QAR {product.comparePrice}
              </div>
            )}
            <span className="text-xl font-semibold text-red-600">
              QAR {product.price}{" "}
            </span>
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
    </div>
  );
}
