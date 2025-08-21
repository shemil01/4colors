import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";


export default function TestimonialCard({ testimonial }) {
  return (
    <Card className="bg-brand-light-gray hover-scale" data-testid="testimonial-card">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-[#00AEEF] rounded-full flex items-center justify-center mr-4">
            <span className="text-brand-gold font-bold text-xl">{testimonial.avatar}</span>
          </div>
          <div>
            <h4 className="font-bold text-brand-navy">{testimonial.name}</h4>
            <p className="text-brand-gray text-sm">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
        
        <p className="text-brand-gray mb-4 leading-relaxed italic">
          "{testimonial.content}"
        </p>
        
        <div className="flex text-[#FFF200] ">
          {[...Array(testimonial.rating)].map((_, index) => (
            <Star key={index} className="w-5 h-5 fill-current " />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
