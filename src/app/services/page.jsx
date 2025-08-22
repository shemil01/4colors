import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ServiceBenefit from "@/components/services/ServiceBenefit";
import ServicesGrid from "@/components/services/ServiceGrid";
import ServiceHero from "@/components/services/ServiceHero";
import WhyChoose from "@/components/services/WhyChoose";
import { Button } from "@/components/ui/button";


export const metadata = {
  title: "Professional Printing Services - Four Colours | Managed Print Solutions",
  description: "Comprehensive printing services including managed print solutions, technical support, consultation, and maintenance across the GCC region.",
};


export default function Services() {


  return (
    <>
   
      <Navbar />

      {/* Hero Section */}
      <ServiceHero />

      {/* Services Grid */}
     
      <ServicesGrid  />

      {/* Why Choose Our Services */}
      <WhyChoose />

      {/* Service Benefits */}
      <ServiceBenefit  />

      {/* CTA Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-brand-navy mb-6"
            data-testid="heading-cta"
          >
            Ready to Transform Your Printing Operations?
          </h2>
          <p className="text-xl text-brand-gray mb-8">
            Let our experts design a custom solution that drives efficiency and
            reduces costs for your business.
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
