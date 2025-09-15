"use client"
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ui/product-card";

export default function FeaturedProducts() {
  // Get featured products (first 8 products as example)
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-navy/5" data-testid="featured-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 
              className="text-4xl font-extrabold text-[#1A1A40] mb-4 tracking-tight" 
              data-testid="featured-products-title"
            >
              Featured Products
            </h2>
            <p className="text-lg text-brand-gray max-w-xl">
              Our most popular printing solutions trusted by leading corporations
            </p>
          </div>
          
          {/* Desktop "View All" Button */}
          <Button 
            asChild
            variant="ghost"
            className="text-brand-gold hover:text-brand-navy border border-transparent hover:border-brand-gold font-semibold hidden md:flex items-center transition-all"
            data-testid="view-all-products"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              viewMode="grid"
              className="transition-transform duration-300 hover:scale-[1.02]"
              data-testid={`featured-product-${index}`}
            />
          ))}
        </div>
        
        {/* Mobile "View All" Button */}
        <div className="text-center mt-12 md:hidden">
          <Button 
            asChild
            size="lg"
            className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold shadow-lg rounded-xl px-8"
            data-testid="view-all-products-mobile"
          >
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
