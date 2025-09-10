"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductDetailsPage = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantityChange = (action) => {
    if (action === "increase" && quantity < data.stockQuantity) {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const savingsAmount = (
    parseFloat(data.comparePrice) - parseFloat(data.price)
  ).toFixed(2);
  const savingsPercentage = (
    (savingsAmount / parseFloat(data.comparePrice)) *
    100
  ).toFixed(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <Link href={"/"} className="hover:text-black">Home</Link> /{" "}
          <Link href={"/products"} className="hover:text-black">Prouducts</Link> /{" "}
          <span className="text-gray-900">{data.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square  flex items-center justify-center  overflow-hidden relative">
              <Image
                src={data.image}
                alt={data.name || "Product Image"}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Thumbnail images placeholder */}
            {/* <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded border cursor-pointer hover:border-gray-300 transition-colors"
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-cyan-500 rounded"></div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {data.name}
              </h1>
              <div className="flex items-center space-x-4 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    (24 reviews)
                  </span>
                </div>
                <span className="text-sm text-green-600 font-medium">
                  In Stock
                </span>
              </div>
              <p className="text-gray-600 text-sm">SKU: {data.sku}</p>
            </div>

            {/* Price */}
            <div className="border-b pb-6">
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl font-bold text-gray-900">
                  AED {data.price}
                </span>
                <span className="text-2xl text-gray-500 line-through">
                  AED {data.comparePrice}
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  Save {savingsPercentage}%
                </span>
              </div>
              <p className="text-green-600 text-sm mt-1">
                You save AED {savingsAmount}
              </p>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Product Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Brand:</span>
                    <span className="ml-2 font-medium">{data.brand}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Model:</span>
                    <span className="ml-2 font-medium">{data.model}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Color:</span>
                    <span className="ml-2 font-medium">
                      {data.specifications.Color}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Page Yield:</span>
                    <span className="ml-2 font-medium">
                      {data.specifications["Page Yield"]}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-gray-600 text-sm">Compatibility:</span>
                <span className="ml-2 font-medium text-sm">
                  {data.specifications.Compatibility}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div>
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                    disabled={quantity >= data.stockQuantity}
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  ({data.stockQuantity} available)
                </span>
              </div>

              <div className="flex space-x-4">
                <button
                  style={{ backgroundColor: "#00AEEF" }}
                  className="flex-1 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <button
                style={{ backgroundColor: "#00AEEF" }}
                className="w-full text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3 text-sm">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">1 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <RotateCcw className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {data.description}
                </p>
                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>High-quality compatible toner cartridge</li>
                    <li>Sharp and vibrant color prints</li>
                    <li>Suitable for office and professional printing needs</li>
                    <li>Popular and trusted brand in Qatar</li>
                    <li>Compatible with HP LaserJet Pro 415 Series</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(data.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-3 border-b border-gray-200"
                  >
                    <span className="font-medium text-gray-900">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No reviews yet
                  </h3>
                  <p className="text-gray-500">
                    Be the first to review this data
                  </p>
                  <button
                    style={{ backgroundColor: "#00AEEF" }}
                    className="mt-4 text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Write a Review
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
