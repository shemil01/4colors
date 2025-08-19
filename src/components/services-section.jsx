'use client'
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesSection() {
  // Show first 6 services on home page
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 bg-brand-light-gray" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4" data-testid="services-title">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Beyond products, we offer complete printing ecosystem management for your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              data-testid={`service-card-${index}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold"
            data-testid="view-all-services"
          >
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
