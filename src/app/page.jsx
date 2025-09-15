import AboutPreview from "@/components/AboutSection";
import FeaturedCategories from "@/components/featured-categories";
import FeaturedProducts from "@/components/featured-products";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import OurClients from "@/components/OurClients";
import ServicesSection from "@/components/services-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <AboutPreview />
      <ServicesSection />
      <OurClients />
      <Testimonials />
      <Footer />
    </div>
  );
}
