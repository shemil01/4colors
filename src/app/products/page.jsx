// 'use client'
// import { useState } from "react";
// // import { Helmet } from "react-helmet-async";
// import { useQuery } from "@tanstack/react-query";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Skeleton } from "@/components/ui/skeleton";
// import ProductCard from "@/components/ui/product-card";
// import { Search, Filter, Grid, List } from "lucide-react";
// import { products } from "@/data/products";
// import { categories } from "@/data/categories";

// export default function Products() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedBrand, setSelectedBrand] = useState("all");
//   const [sortBy, setSortBy] = useState("name");
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

//   // In a real app, this would fetch from an API
//   const { data: productsData, isLoading } = useQuery({
//     queryKey: ['/api/products', searchTerm, selectedCategory, selectedBrand, sortBy],
//     queryFn: () => {
//       // Simulate API delay
//       return new Promise(resolve => {
//         setTimeout(() => {
//           let filtered = [...products];
          
//           if (searchTerm) {
//             filtered = filtered.filter(p => 
//               p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               p.brand?.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//           }
          
//           if (selectedCategory !== "all") {
//             filtered = filtered.filter(p => p.categoryId === selectedCategory);
//           }
          
//           if (selectedBrand !== "all") {
//             filtered = filtered.filter(p => p.brand === selectedBrand);
//           }
          
//           // Sort products
//           filtered.sort((a, b) => {
//             switch (sortBy) {
//               case "price-low":
//                 return parseFloat(a.price) - parseFloat(b.price);
//               case "price-high":
//                 return parseFloat(b.price) - parseFloat(a.price);
//               case "name":
//               default:
//                 return a.name.localeCompare(b.name);
//             }
//           });
          
//           resolve(filtered);
//         }, 500);
//       });
//     },
//   });

//   const brands = Array.from(new Set(products.map(p => p.brand).filter()));

//   return (
//     <>
//       {/* <Helmet>
//         <title>Premium Printing Products - Four Colours | Ink Cartridges & Toner</title>
//         <meta name="description" content="Browse our extensive catalog of genuine ink cartridges, toner cartridges, and printing supplies from top brands like HP, Canon, Brother, and Epson." />
//       </Helmet> */}

//       {/* Hero Section */}
//       <section className="hero-gradient text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <Badge className="bg-brand-gold text-brand-navy mb-6" data-testid="badge-products-hero">
//               🛒 Premium Product Catalog
//             </Badge>
//             <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="heading-products">
//               Genuine Printing Supplies
//               <span className="text-brand-gold block">From Leading Brands</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Explore our comprehensive collection of authentic cartridges, toners, and accessories 
//               trusted by corporations across the GCC region.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filters & Search */}
//       <section className="py-8 bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//             {/* Search */}
//             <div className="relative flex-grow max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray w-5 h-5" />
//               <Input
//                 placeholder="Search products, brands, models..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//                 data-testid="input-search"
//               />
//             </div>

//             {/* Filters */}
//             <div className="flex flex-wrap gap-4 items-center">
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger className="w-40" data-testid="select-category">
//                   <SelectValue placeholder="Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   {categories.map(category => (
//                     <SelectItem key={category.id} value={category.id}>
//                       {category.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               <Select value={selectedBrand} onValueChange={setSelectedBrand}>
//                 <SelectTrigger className="w-32" data-testid="select-brand">
//                   <SelectValue placeholder="Brand" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Brands</SelectItem>
//                   {brands.map(brand => (
//                     <SelectItem key={brand} value={brand}>
//                       {brand}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-40" data-testid="select-sort">
//                   <SelectValue placeholder="Sort By" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="name">Name A-Z</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                 </SelectContent>
//               </Select>

//               {/* View Mode */}
//               <div className="flex border rounded-lg">
//                 <Button
//                   variant={viewMode === "grid" ? "default" : "ghost"}
//                   size="sm"
//                   onClick={() => setViewMode("grid")}
//                   className="rounded-r-none"
//                   data-testid="button-grid-view"
//                 >
//                   <Grid className="w-4 h-4" />
//                 </Button>
//                 <Button
//                   variant={viewMode === "list" ? "default" : "ghost"}
//                   size="sm"
//                   onClick={() => setViewMode("list")}
//                   className="rounded-l-none"
//                   data-testid="button-list-view"
//                 >
//                   <List className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-12 bg-brand-light-gray">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {isLoading ? (
//             <div className={`grid ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"} gap-6`}>
//               {Array.from({ length: 8 }).map((_, index) => (
//                 <Card key={index} className="p-6">
//                   <CardContent className="p-0">
//                     <Skeleton className="w-full aspect-square mb-4" />
//                     <Skeleton className="h-4 w-3/4 mb-2" />
//                     <Skeleton className="h-3 w-1/2 mb-4" />
//                     <Skeleton className="h-8 w-20" />
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <div className={`grid ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"} gap-6`}>
//               {(productsData || []).map((product, index) => (
//                 <ProductCard 
//                   key={product.id} 
//                   product={product} 
//                   viewMode={viewMode}
//                   data-testid={`product-card-${index}`}
//                 />
//               ))}
//             </div>
//           )}

//           {(productsData )?.length === 0 && (
//             <div className="text-center py-16" data-testid="no-products">
//               <Filter className="w-16 h-16 text-brand-gray mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-brand-navy mb-2">No products found</h3>
//               <p className="text-brand-gray">Try adjusting your search criteria or filters.</p>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }
