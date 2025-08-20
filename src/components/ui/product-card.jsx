import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product, viewMode = "grid" }) {
  if (viewMode === "list") {
    return (
      // <Card className="hover-scale cursor-pointer" data-testid="product-card-list">
      //   <CardContent className="p-6">
      //     <div className="flex gap-6">
      //       <div className="w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center flex-shrink-0">
      //         <img
      //           src={product.image || "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"}
      //           alt={product.name}
      //           className="w-full h-full object-contain"
      //         />
      //       </div>
      //       <div className="flex-grow">
      //         <div className="flex items-start justify-between mb-2">
      //           <div>
      //             <h3 className="font-bold text-brand-navy text-lg mb-1">{product.name}</h3>
      //             {product.shortDescription && (
      //               <p className="text-brand-gray text-sm mb-2">{product.shortDescription}</p>
      //             )}
      //             <div className="flex items-center gap-2 mb-2">
      //               <Badge variant="secondary" className="text-xs">
      //                 {product.brand}
      //               </Badge>
      //               <span className="text-brand-gray text-sm">SKU: {product.sku}</span>
      //             </div>
      //           </div>
      //           <div className="text-right">
      //             <span className="text-2xl font-bold text-brand-navy">QAR {product.price}</span>
      //             {product.comparePrice && (
      //               <div className="text-sm text-brand-gray line-through">
      //                 QAR {product.comparePrice}
      //               </div>
      //             )}
      //           </div>
      //         </div>
      //         <div className="flex items-center justify-between">
      //           <div className="flex items-center gap-1">
      //             {[...Array(5)].map((_, i) => (
      //               <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
      //             ))}
      //           </div>
      //           <Button
      //             size="sm"
      //             className="bg-brand-gold hover:bg-brand-light-gold text-brand-navy"
      //             data-testid="add-to-cart"
      //           >
      //             <ShoppingCart className="w-4 h-4 mr-2" />
      //             Add to Cart
      //           </Button>
      //         </div>
      //       </div>
      //     </div>
      //   </CardContent>
      // </Card>
      <div className="max-w-sm mx-auto my-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          {/* Image */}
          <div className="h-64 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Red Nike Shoes"
              width={500}
              height={500}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Experience ultimate comfort and style with these iconic Nike Air
              Max sneakers.
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-red-600">
                QAR {product.comparePrice}{" "}
              </span>
              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
  
    <div className="max-w-sm mx-auto my-8">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="h-64 overflow-hidden">
          <Image
            src={
              product.image ||
              "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
            }
            alt="Red Nike Shoes"
            width={500}
            height={500}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {product.name}
          </h2>
     
          {product.shortDescription && (
            <p className="text-sm text-gray-500 mb-4">
              {" "}
              {product.shortDescription}
            </p>
          )}
          {product.brand && (
            <p className="text-sm text-gray-500 mb-4">
              {" "}
              {product.brand}
            </p>
          )}
          <div className="flex justify-between items-center">
            {product.comparePrice && (
              <div className="text-sm text-brand-gray line-through">
                QAR {product.comparePrice}
              </div>
            )}
            <span className="text-xl font-semibold text-red-600">
              QAR {product.price}{" "}
            </span>

            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
