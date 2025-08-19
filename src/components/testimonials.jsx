import TestimonialCard from "@/components/ui/testimonial-card";

const testimonials = [
  {
    id: "1",
    name: "Ahmed Al-Khalifa",
    position: "IT Manager",
    company: "Al-Rayan Bank",
    avatar: "AK",
    rating: 5,
    content: "Four Colours has been instrumental in optimizing our printing infrastructure. Their genuine products and excellent service have saved us both time and costs.",
  },
  {
    id: "2",
    name: "Sarah Al-Mansouri",
    position: "Procurement Director", 
    company: "Emirates Steel",
    avatar: "SA",
    rating: 5,
    content: "The reliability and quality of Four Colours' products are unmatched. Their corporate account management has streamlined our entire supply chain.",
  },
  {
    id: "3",
    name: "Mohammed Al-Harbi",
    position: "Operations Manager",
    company: "Saudi Aramco",
    avatar: "MH", 
    rating: 5,
    content: "Outstanding service and premium quality products. Four Colours understands the demands of large-scale operations and delivers consistently.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" data-testid="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4" data-testid="testimonials-title">
            Trusted by Leading GCC Corporations
          </h2>
          <p className="text-xl text-brand-gray">
            See what our clients say about our premium printing solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
              data-testid={`testimonial-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
