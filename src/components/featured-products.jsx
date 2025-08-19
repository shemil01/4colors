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
    <section className="py-20 bg-white" data-testid="featured-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-brand-navy mb-4" data-testid="featured-products-title">
              Featured Products
            </h2>
            <p className="text-xl text-brand-gray">
              Our most popular printing solutions trusted by leading corporations
            </p>
          </div>
          
          <Button 
            asChild
            variant="ghost"
            className="text-brand-gold hover:text-brand-navy font-semibold hidden md:flex items-center"
            data-testid="view-all-products"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              viewMode="grid"
              data-testid={`featured-product-${index}`}
            />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="text-center mt-12 md:hidden">
          <Button 
            asChild
            size="lg"
            className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold"
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
