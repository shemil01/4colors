import React from 'react'
import { Badge } from '../ui/badge'

const HeroSectio = () => {
  return (
        <section className="bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              className="bg-brand-gold text-brand-navy mb-6"
              data-testid="badge-about-hero"
            >
              🏆 Trusted by Leading GCC Corporations
            </Badge>
            <h1
              className="text-5xl lg:text-6xl font-bold mb-6"
              data-testid="heading-about"
            >
              Pioneering Excellence in
          <span className="text-[#00AEEF] block">
                Premium Printing Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, Four Colours has been the cornerstone of
              corporate printing excellence across the GCC region, setting
              industry standards and delivering unmatched quality.
            </p>
          </div>
        </div>
      </section>
  )
}

export default HeroSectio