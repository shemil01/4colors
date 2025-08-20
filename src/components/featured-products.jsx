"use client"
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ui/product-card";

export default function FeaturedProducts() {
  // Get featured products (first 8 products as example)
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);

  return (
    <section
      className="py-20 bg-gradient-to-r from-[#1E0B0B] via-[#972317] to-[#1E0506]"
      data-testid="featured-products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2
              className="text-4xl font-bold text-white mb-4"
              data-testid="featured-products-title"
            >
              Featured Products
            </h2>
            <p className="text-xl text-gray-300">
              Our most popular printing solutions trusted by leading corporations
            </p>
          </div>

          {/* Desktop CTA */}
          <Button
            asChild
            variant="ghost"
            className="text-[#00AEEF] hover:text-[#D4AF37] font-semibold hidden md:flex items-center transition-colors"
            data-testid="view-all-products"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode="grid"
              className="bg-black/30 backdrop-blur-md border border-white/10 
              hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] rounded-2xl transition-all"
              data-testid={`featured-product-${index}`}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 md:hidden">
          <Button
            asChild
            size="lg"
            className="bg-[#00AEEF] hover:bg-[#D4AF37] text-white font-semibold rounded-xl shadow-lg"
            data-testid="view-all-products-mobile"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
