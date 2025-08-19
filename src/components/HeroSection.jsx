import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const stats = [
    { value: "500+", label: "Corporate Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-blue-300 relative overflow-hidden min-h-screen flex items-center" data-testid="hero-section">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern office with printing equipment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <Badge className="bg-brand-gold text-brand-navy mb-6 text-sm font-semibold" data-testid="hero-badge">
              🏆 #1 Printing Solutions in GCC
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6" data-testid="hero-title">
              Premium
              <span className="text-brand-gold block">Printing</span>
              Excellence
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg" data-testid="hero-description">
              Trusted by over 500+ corporate clients across the GCC. We deliver world-class printing solutions, 
              original cartridges, and unmatched service quality for your business needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                asChild
                size="lg"
                className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold text-lg shadow-xl"
                data-testid="hero-cta-products"
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy font-semibold text-lg"
                data-testid="hero-cta-consultation"
              >
                <Link href="/contact">
                  Request Consultation
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`hero-stat-${index}`}>
                  <div className="text-3xl font-bold text-brand-gold">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional printing equipment display" 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="hero-image"
              />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -right-4 shadow-xl" data-testid="hero-card-delivery">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-brand-gold" />
                  <div>
                    <div className="font-semibold text-brand-navy">Free Delivery</div>
                    <div className="text-brand-gray text-sm">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-4 -left-4 bg-brand-gold shadow-xl" data-testid="hero-card-genuine">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-brand-navy" />
                  <div>
                    <div className="font-semibold text-brand-navy">Genuine Products</div>
                    <div className="text-brand-navy text-sm">100% Authentic</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
