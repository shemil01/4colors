import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ServiceHero = () => {
  return (
    <section className="bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge
            className="bg-brand-gold text-brand-navy mb-6"
            data-testid="badge-services-hero"
          >
            🛠️ Professional Services
          </Badge>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6"
            data-testid="heading-services"
          >
            Comprehensive
            <span className="text-brand-gold block">Business Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Beyond premium products, we deliver complete printing ecosystem
            management that transforms your business operations and maximizes
            efficiency.
          </p>
          <Button
            size="lg"
            className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold"
            data-testid="button-consultation"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
