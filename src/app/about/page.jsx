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
      <section className="bg-gradient-to-b from-[#133661] to-[#07192b] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              className="bg-brand-gold text-brand-navy mb-6"
              data-testid="badge-about-hero"
            >
              🏆 Trusted by Leading GCC Corporations
            </Badge>
            <h1
              className="text-5xl lg:text-6xl font-bold mb-6"
              data-testid="heading-about"
            >
              Pioneering Excellence in
              <span className="text-brand-gold block">
                Premium Printing Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, Four Colours has been the cornerstone of
              corporate printing excellence across the GCC region, setting
              industry standards and delivering unmatched quality.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center p-8 hover-scale"
                data-testid={`achievement-${index}`}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div className="text-3xl font-bold text-brand-navy mb-2">
                    {achievement.title}
                  </div>
                  <div className="text-brand-gray">{achievement.subtitle}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-brand-navy mb-6"
                data-testid="heading-story"
              >
                Our Story of Excellence
              </h2>
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                Founded in 2009, Four Colours emerged from a vision to
                revolutionize the printing supply industry in the GCC region.
                What started as a small family business has grown into the
                region's most trusted partner for premium printing solutions.
              </p>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                Our commitment to authenticity, quality, and customer
                satisfaction has earned us the trust of over 500 corporate
                clients, from government institutions to multinational
                corporations across the Gulf states.
              </p>

              <div className="space-y-4">
                {[
                  "100% Genuine products from authorized distributors",
                  "Same-day delivery across major GCC cities",
                  "Dedicated corporate account management",
                  "24/7 technical support and assistance",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                    data-testid={`feature-${index}`}
                  >
                    <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern corporate office environment"
                className="rounded-2xl shadow-2xl w-full"
                data-testid="image-story"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-gold p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-brand-navy">15+</div>
                <div className="text-brand-navy font-semibold">Years</div>
                <div className="text-sm text-brand-navy">
                  Industry Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-brand-navy mb-4"
              data-testid="heading-values"
            >
              Our Core Values
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              The principles that guide every decision and drive our commitment
              to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover-scale"
                data-testid={`value-${index}`}
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              data-testid="heading-leadership"
            >
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="bg-brand-dark-navy border-brand-gray text-center p-8"
                data-testid={`leader-${index}`}
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
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
                  <p className="text-brand-gold font-semibold mb-2">
                    {leader.role}
                  </p>
                  <p className="text-gray-300 text-sm">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
