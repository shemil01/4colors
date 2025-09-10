"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentHero, setCurrentHero] = useState(0);

  const heroSlides = [
    {
      title: "Print Smarter, Work Better",
      subtitle:
        "Reliable ink bottles and toner cartridges designed to keep your business running smoothly",
      image: "/hero-2.webp", // person using printer
      cta: "Shop Ink & Toner",
    },
    {
      title: "Professional Printing, Every Time",
      subtitle:
        "From offices to classrooms, get consistent quality prints that make the right impression",
      image: "/hero-1.webp", // woman working with printer
      cta: "Browse Cartridges",
    },
    {
      title: "Sustainable & Cost-Effective",
      subtitle:
        "Eco-friendly printer solutions that save money while caring for the planet",
      image: "/hero-3.webp", // people in office using printer
      cta: "Explore Printing Solutions",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentHero ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex items-center gap-6">
                  <Link href={'#products'}>
                    <button className="group bg-gradient-to-r from-[#f7eb06] to-[#FFF200] text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                      {slide.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Hero Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentHero(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentHero ? "bg-[#FFF200] w-8" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
