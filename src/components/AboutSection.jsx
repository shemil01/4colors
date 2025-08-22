import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Clock } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Genuine Products",
      description: "All products sourced directly from authorized distributors"
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Same-day delivery across major GCC cities"
    },
    {
      icon: Award,
      title: "Corporate Solutions",
      description: "Bulk ordering, credit terms, and dedicated account management"
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] text-white" 
      data-testid="about-preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              className="text-4xl font-bold mb-6" 
              data-testid="about-preview-title"
            >
              Trusted Partner in GCC Corporate Printing
            </h2>
            <p 
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              For over 15 years, Four Colours has been the premier choice for corporations across the Gulf region. 
              We understand the unique demands of GCC businesses and deliver solutions that exceed expectations.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4" 
                  data-testid={`about-feature-${index}`}
                >
                  <div className="w-6 h-6 bg-[#FFF200] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-[#1E0506]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              asChild
              size="lg"
              className="bg-[#00AEEF] hover:bg-cyan-400 text-black font-semibold shadow-xl"
              data-testid="learn-more-about"
            >
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern GCC corporate office environment"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="about-preview-image"
            />
            
            {/* Floating Achievement Cards */}
            <Card 
              className="absolute -top-6 -left-6 bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] shadow-xl" 
              data-testid="iso-card"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">ISO</div>
                  <div className="text-[#FFF200] font-semibold">9001:2015</div>
                  <div className="text-sm text-gray-200">Certified Quality</div>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="absolute -bottom-6 -right-6 bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] shadow-xl" 
              data-testid="experience-card"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-[#FFF200] font-semibold">Years</div>
                  <div className="text-sm text-gray-200">Industry Experience</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}