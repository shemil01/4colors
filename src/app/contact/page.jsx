import QuoteRequestForm from "@/components/contact/QuoteRequestForm";
import Navbar from "@/components/layouts/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Four Colours - Get Quote for Premium Printing Solutions",
  description:
    "Contact Four Colours for premium printing solutions across the GCC. Request quotes, schedule consultations, and get 24/7 support in Qatar, UAE, Saudi Arabia.",
};

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+974 3078 1234",
      link: "tel:+97430781234",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@fourcolours.qa",
      link: "mailto:info@fourcolours.qa",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Al Sadd Street, Doha, Qatar",
      link: "#",
    },
  ];

  const businessHours = [
    { day: "Sunday - Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "2:00 PM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-[#B92417] via-[#A0281C] to-[#8A271C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-[#FFF200] text-[#0A1F44] mb-6">
            📞 Get in Touch
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Ready to Upgrade Your
            <span className="block text-[#FFF200]">Printing Solutions?</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our experts are here to help you find the perfect printing products
            and services for your business needs. Get personalized
            recommendations today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to experience premium printing excellence? Our team is
                standing by to provide expert guidance and personalized
                solutions.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#FFF200] rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-[#0A1F44]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A1F44]">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-[#FFF200] transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="bg-[#0A1F44] text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#FFF200]">
                    <Clock className="w-5 h-5 mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{schedule.day}</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form (Static Only) */}
            <QuoteRequestForm />
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">
            Serving the Entire GCC Region
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            With strategic partnerships and distribution networks across the
            Gulf states, we provide seamless service from Qatar to the UAE,
            Saudi Arabia, Kuwait, Bahrain, and Oman.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { country: "Qatar", city: "Doha", phone: "+974 3078 1234" },
              { country: "UAE", city: "Dubai", phone: "+971 4 XXX XXXX" },
              {
                country: "Saudi Arabia",
                city: "Riyadh",
                phone: "+966 11 XXX XXXX",
              },
            ].map((location, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 text-center">
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                    {location.country}
                  </h3>
                  <p className="text-gray-600 mb-2">{location.city}</p>
                  <p className="text-[#FFF200] font-semibold">
                    {location.phone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
