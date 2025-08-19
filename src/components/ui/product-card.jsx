import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";


export default function ProductCard({ product, viewMode = "grid" }) {
  if (viewMode === "list") {
    return (
      <Card className="hover-scale cursor-pointer" data-testid="product-card-list">
        <CardContent className="p-6">
          <div className="flex gap-6">
            <div className="w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center flex-shrink-0">
              <img
                src={product.image || "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-brand-navy text-lg mb-1">{product.name}</h3>
                  {product.shortDescription && (
                    <p className="text-brand-gray text-sm mb-2">{product.shortDescription}</p>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.brand}
                    </Badge>
                    <span className="text-brand-gray text-sm">SKU: {product.sku}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-brand-navy">QAR {product.price}</span>
                  {product.comparePrice && (
                    <div className="text-sm text-brand-gray line-through">
                      QAR {product.comparePrice}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <Button 
                  size="sm"
                  className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy"
                  data-testid="add-to-cart"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-brand-light-gray hover-scale cursor-pointer group" data-testid="product-card-grid">
      <CardContent className="p-6">
        <div className="aspect-square bg-white rounded-xl mb-6 p-4 flex items-center justify-center group-hover:shadow-md transition-all">
          <img
            src={product.image || "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="space-y-2 mb-4">
          <h3 className="font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          {product.shortDescription && (
            <p className="text-brand-gray text-sm line-clamp-2">{product.shortDescription}</p>
          )}
          {product.brand && (
            <Badge variant="secondary" className="text-xs">
              {product.brand}
            </Badge>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-brand-navy">QAR {product.price}</span>
            {product.comparePrice && (
              <div className="text-sm text-brand-gray line-through">
                QAR {product.comparePrice}
              </div>
            )}
          </div>
          <Button 
            size="sm"
            className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold"
            data-testid="add-to-cart"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
