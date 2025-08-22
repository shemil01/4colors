import { CheckCircle } from 'lucide-react'
import React from 'react'

const OurStoriesSection = () => {
  return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-brand-navy mb-6"
                data-testid="heading-story"
              >
                Our Story of Excellence
              </h2>
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                Founded in 2009, Four Colours emerged from a vision to
                revolutionize the printing supply industry in the GCC region.
                What started as a small family business has grown into the
                region's most trusted partner for premium printing solutions.
              </p>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                Our commitment to authenticity, quality, and customer
                satisfaction has earned us the trust of over 500 corporate
                clients, from government institutions to multinational
                corporations across the Gulf states.
              </p>

              <div className="space-y-4">
                {[
                  "100% Genuine products from authorized distributors",
                  "Same-day delivery across major GCC cities",
                  "Dedicated corporate account management",
                  "24/7 technical support and assistance",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                    data-testid={`feature-${index}`}
                  >
                    <CheckCircle className="w-6 h-6 text-[#FFF200] flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern corporate office environment"
                className="rounded-2xl shadow-2xl w-full"
                data-testid="image-story"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-[#FFF200] font-semibold">Years</div>
                <div className="text-sm text-gray-200">
                  Industry Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurStoriesSection