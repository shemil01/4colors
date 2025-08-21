import AchivementsCard from "@/components/about/AchivementsCard";
import HeroSection from "@/components/about/HeroSectio";
import LeaderShipSection from "@/components/about/LeaderShipSection";
import OurStoriesSection from "@/components/about/OurStoriesSection";
import OurValuesSection from "@/components/about/OurValuesSection";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Globe, Clock, Shield } from "lucide-react";

export const metadata = {
  title: "About Four Colours - Premium Printing Solutions Leader in GCC",
  description:
    "Learn about Four Colours' 15+ years of excellence in providing premium printing solutions across the GCC. Trusted by 500+ corporate clients with ISO certified quality.",
};

export default function About() {
  const achievements = [
    { icon: Award, title: "ISO 9001:2015", subtitle: "Certified Quality" },
    { icon: Users, title: "500+", subtitle: "Corporate Clients" },
    { icon: Clock, title: "15+", subtitle: "Years Experience" },
    { icon: Globe, title: "GCC", subtitle: "Regional Coverage" },
  ];

  const values = [
    {
      title: "Premium Quality",
      description:
        "We source only genuine products from authorized distributors to ensure the highest quality standards.",
      icon: Shield,
    },
    {
      title: "Customer Excellence",
      description:
        "Our dedicated team provides personalized service and support to exceed customer expectations.",
      icon: Users,
    },
    {
      title: "Innovation Focus",
      description:
        "We stay at the forefront of printing technology to offer the latest solutions to our clients.",
      icon: Award,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Navbar />
      <HeroSection />

      {/* Achievements */}
      <AchivementsCard achievements={achievements} />

      {/* Our Story */}
      <OurStoriesSection />

      {/* Our Values */}
      <OurValuesSection values={values} />

      {/* Leadership Team */}
      <LeaderShipSection />
      <Footer />
    </>
  );
}
