import React from 'react'
import { Card, CardContent } from '../ui/card'

const AchivementsCard = ({achievements}) => {
  return (
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center p-8 hover-scale bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C]"
                data-testid={`achievement-${index}`}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#00AEEF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {achievement.title}
                  </div>
                  <div className="text-gray-300">{achievement.subtitle}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default AchivementsCard