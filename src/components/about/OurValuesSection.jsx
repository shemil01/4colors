import React from 'react'
import { Card, CardContent } from '../ui/card'

const OurValuesSection = ({values}) => {
  return (
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-brand-navy mb-4"
              data-testid="heading-values"
            >
              Our Core Values
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              The principles that guide every decision and drive our commitment
              to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover-scale bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C]"
                data-testid={`value-${index}`}
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-[#00AEEF] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OurValuesSection