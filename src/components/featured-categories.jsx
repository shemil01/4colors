"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Printer,
  Palette,
  Droplets,
  Settings,
  Monitor,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { motion } from "framer-motion";
import { useRef } from "react";

const iconMap = {
  "ink-cartridge": Palette,
  "toner-cartridge": Printer,
  "ink-bottles": Droplets,
  accessories: Settings,
  printers: Monitor,
  compatible: CheckCircle,
};

const variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};
const Leftvariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export default function FeaturedCategories() {
  const ref = useRef();
  return (
    <section className="py-20 " data-testid="featured-categories">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={Leftvariants}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold text-[#1A1A40] mb-4"
            data-testid="categories-title"
          >
            Premium Product Categories
          </motion.h2>
          <motion.p
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Discover our comprehensive range of genuine printing supplies from
            world-leading brands
          </motion.p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.slug] || Printer;

            return (
              <Card
                key={category.id}
                className="group bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] backdrop-blur-md border border-gray-200 rounded-2xl shadow-md 
             cursor-pointer transition-all duration-300 
             hover:shadow-[0_0_25px_rgba(0,174,239,0.35)]"
                data-testid={`category-card-${index}`}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 bg-[#00AEEF] rounded-xl flex items-center justify-center mb-6 
                    group-hover:bg-[#D4AF37] transition-colors"
                  >
                    <IconComponent className="w-8 h-8 text-white group-hover:text-[#1E0B0B] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#00AEEF] mb-3 group-hover:text-[#0d93c4] transition-colors">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-[#D4AF37] font-semibold">
                      {category.productCount}+ Products Available
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-[#00AEEF] hover:text-[#D4AF37] font-medium p-0 h-auto"
                    >
                      <Link href={`/products?category=${category.slug}`}>
                        View All →
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#00AEEF] hover:bg-[#D4AF37] text-white font-semibold rounded-xl shadow-lg"
            data-testid="view-all-categories"
          >
            <Link href="/products">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
