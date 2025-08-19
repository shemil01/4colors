import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ui/service-card";
import { services } from "@/data/services";
import { CheckCircle, Users, Clock, Shield, Award } from "lucide-react";

export default function Services() {
  const benefits = [
    {
      icon: Users,
      title: "Dedicated Account Management",
      description: "Personal account managers for seamless business relationships"
    },
    {
      icon: Clock,
      title: "24/7 Support Coverage",
      description: "Round-the-clock technical assistance across the GCC region"
    },
    {
      icon: Shield,
      title: "Guaranteed Quality",
      description: "100% genuine products with comprehensive warranties"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "15+ years of specialized printing solutions experience"
    }
  ];

  return (
    <>
      {/* <Helmet>
        <title>Professional Printing Services - Four Colours | Managed Print Solutions</title>
        <meta name="description" content="Comprehensive printing services including managed print solutions, technical support, consultation, and maintenance across the GCC region." />
      </Helmet> */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#133661] to-[#07192b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-brand-gold text-brand-navy mb-6" data-testid="badge-services-hero">
              🛠️ Professional Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-services">
              Comprehensive
              <span className="text-brand-gold block">Business Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Beyond premium products, we deliver complete printing ecosystem management 
              that transforms your business operations and maximizes efficiency.
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

      {/* Services Grid */}
      <section className="py-20 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4" data-testid="heading-services-grid">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Tailored solutions designed to meet the unique demands of GCC enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                data-testid={`service-card-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6" data-testid="heading-why-choose">
                Why Choose Four Colours Services?
              </h2>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                Our service excellence stems from deep understanding of GCC business culture, 
                cutting-edge technology solutions, and unwavering commitment to customer success.
              </p>
              
              <div className="space-y-6">
                {[
                  "ISO 9001:2015 certified quality management",
                  "Multilingual support in Arabic and English",
                  "Rapid response times across all GCC markets",
                  "Customized service packages for every business size",
                  "Proactive maintenance and monitoring systems",
                  "Transparent pricing with no hidden costs"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`feature-${index}`}>
                    <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
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
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-brand-navy">24/7</div>
                <div className="text-brand-gold font-semibold">Support</div>
                <div className="text-sm text-brand-gray">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="heading-benefits">
              Service Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the Four Colours difference through our comprehensive service advantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-brand-dark-navy border-brand-gray p-8 text-center" data-testid={`benefit-${index}`}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-6" data-testid="heading-cta">
            Ready to Transform Your Printing Operations?
          </h2>
          <p className="text-xl text-brand-gray mb-8">
            Let our experts design a custom solution that drives efficiency and reduces costs for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold"
              data-testid="button-quote"
            >
              Request Service Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
              data-testid="button-consultation-cta"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
