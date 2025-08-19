import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const getIconComponent = (iconName) => {
    // Simple icon mapping - in a real app, you might use a more sophisticated icon system
    const iconMap = {
      consultation: "💡",
      managed: "🖥️", 
      support: "🛠️",
      installation: "⚙️",
      training: "📚",
      corporate: "🏢",
    };
    
    return iconMap[iconName] || "🔧";
  };

  return (
    <Card className="bg-white hover-scale cursor-pointer group transition-all duration-300 hover:shadow-xl" data-testid="service-card">
      <CardContent className="p-8 text-center">
        <div className="w-20 h-20 bg-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold transition-colors">
          <span className="text-4xl">{getIconComponent(service.icon)}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">
          {service.title}
        </h3>
        
        <p className="text-brand-gray mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {service.features && service.features.length > 0 && (
          <ul className="text-sm text-brand-gray mb-6 space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Button 
          variant="ghost" 
          className="text-brand-gold hover:text-brand-navy font-semibold p-0 h-auto group-hover:underline"
          data-testid="service-learn-more"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
