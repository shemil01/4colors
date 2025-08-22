import React from "react";
import { Card, CardContent } from "../ui/card";
import { CheckCircle, Users, Clock, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Dedicated Account Management",
    description:
      "Personal account managers for seamless business relationships",
  },
  {
    icon: Clock,
    title: "24/7 Support Coverage",
    description: "Round-the-clock technical assistance across the GCC region",
  },
  {
    icon: Shield,
    title: "Guaranteed Quality",
    description: "100% genuine products with comprehensive warranties",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "15+ years of specialized printing solutions experience",
  },
];

const ServiceBenefit = () => {
  return (
    <section className="py-20 bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4 text-black"
            data-testid="heading-benefits"
          >
            Service Benefits
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the Four Colours difference through our comprehensive
            service advantages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] p-8 text-center"
              data-testid={`benefit-${index}`}
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#FFF200] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#00AEEF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefit;
