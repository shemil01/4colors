import { CheckCircle } from 'lucide-react'
import React from 'react'

const WhyChoose = () => {
  return (
 <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-brand-navy mb-6"
                data-testid="heading-why-choose"
              >
                Why Choose Four Colours Services?
              </h2>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                Our service excellence stems from deep understanding of GCC
                business culture, cutting-edge technology solutions, and
                unwavering commitment to customer success.
              </p>

              <div className="space-y-6">
                {[
                  "ISO 9001:2015 certified quality management",
                  "Multilingual support in Arabic and English",
                  "Rapid response times across all GCC markets",
                  "Customized service packages for every business size",
                  "Proactive maintenance and monitoring systems",
                  "Transparent pricing with no hidden costs",
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional service technician in modern office"
                className="rounded-2xl shadow-2xl w-full"
                data-testid="image-services"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-[#00AEEF]">24/7</div>
                <div className="text-[#FFF200] font-semibold">Support</div>
                <div className="text-sm text-gray-300">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default WhyChoose