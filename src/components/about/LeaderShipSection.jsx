import React from 'react'
import { Card, CardContent } from '../ui/card'

const LeaderShipSection = () => {
  return (
       <section className="py-20 bg-white text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl text-[#1E0506] font-bold mb-4"
              data-testid="heading-leadership"
            >
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with decades of experience in the GCC printing
              and technology sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Al-Mansouri",
                role: "Chief Executive Officer",
                experience: "20+ Years in GCC Technology",
              },
              {
                name: "Sarah Al-Khalifa",
                role: "Operations Director",
                experience: "15+ Years in Supply Chain",
              },
              {
                name: "Mohammed Al-Harbi",
                role: "Technical Director",
                experience: "18+ Years in Printing Solutions",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-[#1E0B0B] via-[#240909] to-[#1E0506] border-brand-gray text-center p-8"
                data-testid={`leader-${index}`}
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-[#00AEEF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-brand-navy font-bold text-2xl">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-gray-400 font-semibold mb-2">
                    {leader.role}
                  </p>
                  <p className="text-[#FFF200] text-sm">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default LeaderShipSection